import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PSZ_SceneMgr')
export class PSZ_SceneMgr extends Component {
    @property(Label)
    public roomID:Label
    @property(Label)
    public gameCount:Label
    start() {
     this._init()
    }

    _init(){
        globalThis._eventTarget.on('request_room_info',this.onRequestRoomInfo,this)
        globalThis._eventTarget.on('sync_all_player_info',this.onSyncAllPlayerInfo,this)
    }

    onSyncAllPlayerInfo(data){
        
    }

    onRequestRoomInfo(data){
        data = {
            roomID:'4543543',
            game_numbers:3,
            current_numbers:6,
        }
        if(data.current_numbers === null) data.current_numbers = 0
        this.roomID.string = data.roomID
        this.gameCount.string = data.game_numbers + '/' + data.current_numbers
    }

    update(deltaTime: number) {
        
    }
}


