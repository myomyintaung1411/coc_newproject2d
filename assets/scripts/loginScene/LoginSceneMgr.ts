import { _decorator, Component, director, EditBox, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoginSceneMgr')
export class LoginSceneMgr extends Component {
    @property(Node)
    public my_EditBox:Node

    start() {
        globalThis._eventTarget.on('login',this.onLoginMessage,this)
    }



    update(deltaTime: number) {
        
    }

    onLoginMessage(data) {
        globalThis._userInfo.room_id = data.room_id
        globalThis._userInfo.user_head_url = data.user_head_url
        globalThis._userInfo.user_id = data.user_id
        globalThis._userInfo.user_name = data.user_name
        globalThis._userInfo.user_room_cards = data.user_room_cards
        director.loadScene('hall')
    }

    onLoginBtnClicked(){
        let str = this.my_EditBox.getComponent(EditBox).string;
        let sendData
        console.log("on login btn clicked",str);
        switch (str) {
            case '1':
                sendData = 666666
                break;
            case '2':
                sendData = 666661
                break;
        
            default:
                break;
        }
        globalThis._loginClientMgr._sendData('login',{id:sendData})
    }
}


