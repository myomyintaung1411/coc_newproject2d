import { _decorator, Component, director, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('hallSceneMgr')
export class hallSceneMgr extends Component {
    @property(Node)
    public createRoom:Node

    @property(Node)
    public joinRoom:Node

    @property(Label)
    public nameLabel:Label

    @property(Label)
    public idLable:Label

    start() {
        globalThis._eventTarget.on('join_room',this.onJoinRoom,this)
        globalThis._eventTarget.on('create_room',this.onCreateRoom,this)
        this._init()
    }
    
    _init(){
       
        this.nameLabel.string = globalThis._userInfo.user_name
        this.idLable.string = 'ID:' + globalThis._userInfo.user_id
    }

    onJoinRoom(roomdata){
        console.log(roomdata)
        if(!roomdata) return;
        let result = JSON.parse(roomdata);
       globalThis._userInfo.room_id = result.room_id;
       director.loadScene('PSZ')
    }

    onCreateRoom(room_id){
        
        console.log("room_id",room_id)
        if(room_id === 0){
            console.log("room id is zero");
        }else{
            globalThis._userInfo.room_id = room_id;
            director.loadScene('PSZ')
        }
    }

     onCreateRoomBtnClicked(){ // create room add btn click
        console.log("onCreateRoomBtnClicked");
        this.createRoom.active = true
    }

    onJoinRoomBtnClicked(){
        this.joinRoom.active = true
    }

    update(deltaTime: number) {
        
    }
}


