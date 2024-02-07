import { _decorator, Component, Node,EditBox } from 'cc';
import { ToastManager } from '../ui/ToastManager';
import { SqlUtil } from '../util/SqlUtil';
import { encryptTx, txData } from '../common/release';
import { Global } from '../common/Globals';
import { headerScript } from './headerScript';
import { EncryptUtil } from '../util/EncryptUtil';
import { CryptoUtil } from '../util/CryptoUtil';
const { ccclass, property } = _decorator;

@ccclass('ApplyWithdraw')
export class ApplyWithdraw extends Component {
  
    @property(EditBox)  txName : EditBox = null!;
    @property(EditBox)  txMoney : EditBox = null!;
    @property(EditBox)  txCard : EditBox = null!;
    @property(EditBox)  txBankName : EditBox = null!;

   private userInfo:any =  null!


   async fetchWithdraw(url: string, data: any) {
    try {
        const response = await fetch(url + '/call/withdraw-manual', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },
            body: JSON.stringify(data),
        });

        console.log(response, "leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
        }

        const result = await response.text();
        console.log('API response:', result);
        return result;
        // Handle the API response here

    } catch (error) {
        console.error('Error:', error);
        const r = EncryptUtil.aesDecrypt(error.message, '@hKe9@A1lKe9$Tz1kE@8HnG7', '1234567890123456');
        console.log(error.message, r);
        // showToast(error.message); // Show the error message in your toast
        // Handle errors here
    }
}


    async applyMoney() {
        const url = 'https://pc2.th371.com'
        let name = this.txName.getComponent(EditBox).string;
        let amount = this.txMoney.getComponent(EditBox).string;
        let card_num = this.txCard.getComponent(EditBox).string;
        let bankCard = this.txBankName.getComponent(EditBox).string;
        if( amount =='' ||  Number(amount) < 100){
            return   ToastManager.getInstance().showToast('提现金额最少100');;
        }
        //const userInfo = SqlUtil.get('userinfo')
        let dataParam={userId:this.userInfo.userId,
            amount: Number(amount), // 提现金额
            token: this.userInfo.token,
            cardOwnerName: name, // 取款人姓名
            bankCardId:card_num, // 银行卡号
            bankCardName: bankCard, // 开户行（银行名称）
        };
        console.log(dataParam)
       // const dataStr = {data: encryptTx( JSON.stringify(dataParam))};
       let enc =  JSON.stringify(dataParam)
        const data = EncryptUtil.aesEncrypt((enc),'@hKe9@A1lKe9$Tz1kE@8HnG7','1234567890123456')
        const encdata = JSON.parse(EncryptUtil.aesDecrypt(data,'@hKe9@A1lKe9$Tz1kE@8HnG7','1234567890123456'))
        console.log(data)
        let resutlData = await this.fetchWithdraw(url, {data:data});
        console.log(resutlData,"resutlData **************")

        const r = EncryptUtil.aesDecrypt(resutlData,'@hKe9@A1lKe9$Tz1kE@8HnG7','1234567890123456')
        console.log("decrypt **********************",r)
       // const r = txData(resutlData);
        const result = JSON.parse(r);
        if(result.JsonData.result=="ok"){
            this.userInfo.ye = result.JsonData.ye;
            this.setUserInfo(this.userInfo)
            SqlUtil.set('userinfo',this.userInfo)
            ToastManager.getInstance().showToast(result.JsonData.msg);;
            this.closeDialog()
        }else{
            ToastManager.getInstance().showToast(result.JsonData.msg);
        }
    }
    
    setUserInfo(userinfo) {
        // Find the userMoneyInfoNode in the node hierarchy
        console.log()
        const headerScriptNode = this.node.parent?.getChildByName('HeaderPrefab');

        // Check if the node exists and has the UserMoneyInfo component
        if (headerScript) {
            const headerScriptComponent = headerScriptNode.getComponent('headerScript') as headerScript;
            
            // Check if the component exists and call the openDialog method
            if (headerScriptComponent) {
                headerScriptComponent.setUserData(userinfo);
            }
        }
    }

    closeDialog() {
        this.node.active = false;
        this.txName.string = ''
        this.txMoney.string = ''
        this.txCard.string = ''
        this.txBankName.string = ''
    }
    openDialog() {
        this.node.active = true;
    }
    protected onLoad(): void {
        const userInfo = SqlUtil.get('userinfo')
        console.log(userInfo)
        this.userInfo = JSON.parse(userInfo)
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}


