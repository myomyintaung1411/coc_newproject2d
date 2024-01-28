import { _decorator, Component, director, EditBox, JsonAsset, Node, sys } from 'cc';
import { PopupManager } from '../popup/manager/PopupManager';
import { md5 } from '../util/Md5';
import { PopupBase } from '../popup/base/PopupBase';
import { EncryptUtil } from '../util/EncryptUtil';
import { SqlUtil } from '../util/SqlUtil';
import PomeloClient__ from '../util/test_pomelo';
import { PomeloClient } from '../util/PomeloClient';
import { ToastManager } from '../ui/ToastManager';
import { Global } from '../common/Globals';

const { ccclass, property } = _decorator;

@ccclass('LoginScript')
export class LoginScript extends Component {
    @property(EditBox)  m_Account : EditBox = null!;
    @property(EditBox)  m_Password : EditBox = null!;
    // protected onLoad(): void {
    //    this.toast =  ToastManager.instance.showToast("Please Enter all Section")
    // }
    start() {
      
    }

    update(deltaTime: number) {
        
    }

    async postData(url: string, data: any) {
        try {
            const response = await fetch(url + 'opt', {
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
            return result
            // Handle the API response here
    
        } catch (error) {
            console.error('Error:', error);
            console.log(error.message)
            //showToast(error.message); // Show the error message in your toast
            // Handle errors here
        }
    }
      

      

    async onclickLogin() {
        let url  = 'https://pc2.th371.com/conn3/'
        console.log(this.m_Account.string, this.m_Password.string, "sdfsdf");
        let accountName = this.m_Account.getComponent(EditBox).string;
        let passwordName = this.m_Password.getComponent(EditBox).string;
        // accountName = '79989911'
        // passwordName = '123aaa'
       if(accountName == '' || passwordName == '') { 
        return ToastManager.getInstance().showToast('Enter Username and Password!');
       }

       

        const md5_pass = md5(passwordName)
        const data = "01;"+accountName+";"+md5_pass+";"+"windows"+";1"; //data: 01;79989933;d78ff0ef526543e2174540afdfea0154;windows;1
       const resp =   await this.postData(url, {data:data});
       let userInfo = null
       if(resp.code == 200) {
        userInfo = resp.data;
        userInfo.userType = 1
        userInfo.ye = userInfo.amount;
		userInfo.username = userInfo.account;
         SqlUtil.set('userinfo',JSON.stringify(userInfo))
        
       }
       
      //const pomeloConn = new PomeloClient__()
      PomeloClient__.getInstance().conn(res=> {
        console.log(res,"ddddddddddddd")
        if(res.code == '200') {
            Global.isLogin = true
            director.loadScene('testuiScene')
        }

       })
    }
}


