import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PSZ_Client')
export class PSZ_Client extends Component {
    private _ws:any = null

    start() {
        this._init()
    }

    _init(){
        globalThis._PSZ_ClientMgr = this 
          this._connectServer()
    }

    _connectServer(){
        const ws = new WebSocket("ws://103.99.63.148:6756/ws")
        this._ws = ws
        
        ws.onopen = () =>{
           // ws.send('terst')
            console.log('PSZ_Client onopen')
            this.requestRoomInfo()
        }
        ws.onmessage = (event) => { //listen from ws server coming data
            let res = JSON.parse(event.data)
            console.log(event.data)
            let type = res.type
            let data = res.data
            this.responseServerMessage(type,data) 
        }
        ws.onclose = () =>{
            console.log('PSZ_Client close')
        }
        ws.onerror = (err) =>{
            console.log('error',err)
            // for testing purpose bcz ws is not connected
            let type = 'login'
            let data = {
                room_id:'123456',
                user_head_url:'www.baidu.com',
                user_id:'666666',
                user_name:'test',
                user_room_cards:'11',
            }
            this.responseServerMessage(type,data) 
        }
    }

    responseServerMessage(type,data) {
        //send data with globalThis
        globalThis._eventTarget.emit(type,data) //emitting data 
    }

    public _sendData(_type,_data) {
        let sendData = {
            type:_type,
            data:_data
        }
        this._ws.send(JSON.stringify(sendData))
    }

    requestRoomInfo(){
        let data = {
            roomID:globalThis._userInfo.room_id,
            userID:globalThis._userInfo.user_id,
        }
        this._sendData('request_room_info',data)
    }

    update(deltaTime: number) {
        
    }
}


