import { _decorator, Component, EditBox, JsonAsset, Node } from 'cc';
import { PopupManager } from '../popup/manager/PopupManager';
import { md5 } from '../util/Md5';
import { PopupBase } from '../popup/base/PopupBase';
import { EncryptUtil } from '../util/EncryptUtil';
import { Toast } from '../ui/Toast';
import { ToastManager } from '../ui/ToastManager';
import { SqlUtil } from '../util/SqlUtil';

const { ccclass, property } = _decorator;

@ccclass('LoginScript')
export class LoginScript extends Component {
    @property(EditBox)  m_Account : EditBox = null!;
    @property(EditBox)  m_Password : EditBox = null!;
    start() {

    }

    update(deltaTime: number) {
        
    }

    async postData(url: string, data: any) {
        try {
            const response = await fetch(url + '/v1/signIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if needed
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                const errorResponse = await response.json();
                const errorMessage = errorResponse && errorResponse.msg ? errorResponse.msg : 'Unknown error';
                throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
            }
    
            const result = await response.json();
            console.log('API response:', result);
            // Handle the API response here
    
        } catch (error) {
            console.error('Error:', error);
            console.log(error.message)
            //showToast(error.message); // Show the error message in your toast
            // Handle errors here
        }
    }
      

      

    async onclickLogin() {
        let url  = 'https://pc2.th371.com/'
        console.log(this.m_Account.string, this.m_Password.string, "sdfsdf");
        const accountName = this.m_Account.getComponent(EditBox).string;
        const passwordName = this.m_Password.getComponent(EditBox).string;
        
       if(accountName == '' || passwordName == '') return ToastManager.instance.showToast("Please Enter all Section")
      
        const data = {
            username: accountName,
            password:  md5(passwordName),
            terminal: "jk",
        };
        // let enc =  JSON.parse(JSON.stringify(data))
        // let encyrpt = EncryptUtil.aesEncrypt((JSON.stringify(enc)),`@hKe9@A1lKe9$Tz1kE@8HnG7`,`1234567890123456`)
        // console.log(encyrpt,"encrypt")
        // const decrypt = JSON.parse(EncryptUtil.aesDecrypt(encyrpt,`@hKe9@A1lKe9$Tz1kE@8HnG7`,`1234567890123456`))
        // console.log(decrypt,"decrypt")
       let _store = JSON.stringify(data)
        SqlUtil.set('test',_store)
        console.log(SqlUtil.get('test'))
        await this.postData(url, data);
    }

    onLoginComplete(rev:any, param:any) {
        console.log("onLoginComplete:");
        console.log(rev,"leeeeeeeeeeeeee");
    }
}


