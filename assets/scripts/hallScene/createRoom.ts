import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('createRoom')
export class createRoom extends Component {
    public _gameNumbers;
    public _isBanShuJieSan;
    start() {
        this._gameNumbers = 10
        this._isBanShuJieSan = true
    }

    update(deltaTime: number) {
        
    }
    onCloseBtnClicked(){
        this.node.active = false
    }
    onCreateBtnClick(){//confirm btn dialog click of create room 
        console.log("onCreateBtnClick");
        let data = {
            createUserID:globalThis._userInfo.user_id,
            gameNumbers:this._gameNumbers,
            isBanShuJieSan:this._isBanShuJieSan
        }
        console.log(data,"ddddddddddddddd");
       
        globalThis._hallClientMgr._sendData('create_room',data)
    }
    //game
    onGameNumbersBtnClicked(event,arg){//click in radio btn to select type like checkbox1,checkbox2
     console.log(arg);
     switch (arg) {
        case '10':
            this._gameNumbers = 10
            break;
        case '20':
            this._gameNumbers = 20
            break;
     
        default:
            break;
     }
     
    }
    onIsQuanPiaoBtnCliked(){ //click QuanPiao checkbox btn
      this._isBanShuJieSan = !this._isBanShuJieSan
    }
}


