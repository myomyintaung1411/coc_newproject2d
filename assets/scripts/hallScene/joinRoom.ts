import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('joinRoom')
export class joinRoom extends Component {
    @property(Node)
    public showLabelList:Node[] = [];

    public inputStr = '';
    start() {

    }

    update(deltaTime: number) {
        
    }

    onInputEvent(target,data){
        console.log("clicked",data);
        if(data == 'left'){
            this.inputStr =  this.inputStr.slice(0,this.inputStr.length - 1)
            this.updateLabelList(this.inputStr)
            return;
        }
        if(data == 'right'){
           this.inputStr = ''
           this.updateLabelList(this.inputStr)
            return;
        }
        this.inputStr += data;
        this.updateLabelList(this.inputStr)

        if(this.inputStr.length === 6){
            globalThis._hallClientMgr._sendData('join_room',{roomID:this.inputStr})
            this.node.active = false
            this.inputStr = ''
            this.updateLabelList(this.inputStr)
        }
    }

    updateLabelList(str){

        for (let i = 0; i < this.showLabelList.length; i++) {
            this.showLabelList[i].getComponent(Label).string = '-';
        } 

        for (let index = 0; index < str.length; index++) {
            this.showLabelList[index].getComponent(Label).string = this.inputStr[index];
        } 
    }

    onCloseBtnClicked(){
        this.node.active = false
    }
}


