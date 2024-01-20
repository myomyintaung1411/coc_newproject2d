import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UserInfo')
export class UserInfo extends Component {
    public room_id;
    public user_head_url;
    public user_id;
    public user_name;
    public user_room_cards;
    static instance:any;

    static getInstance() {
        if (UserInfo.instance == null) {
            UserInfo.instance = new UserInfo
            return UserInfo.instance;
        } else {
            UserInfo.instance
        }
    }

    protected onEnable(): void {
        
    }
    
    start() {
        globalThis._userInfo = UserInfo.getInstance()
    }

    update(deltaTime: number) {
        
    }
}


