import { _decorator, Component, Label, Node, ScrollView } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Notification_Alert')
export class Notification_Alert extends Component {
    @property({
        type: ScrollView
    })

    scrollView: ScrollView = null!;
    public noticetext:string = null!;
    start() {

    }

    closeDialog(){
        this.node.active = false
    }

    openDialog(){
        this.node.active = true
    }

    setTextHere(text) {
        this.noticetext = text
        if(this.node.active) {
            const content = this.scrollView.content
            const labelNode = content.getChildByName('item')
            const labelComponent = labelNode.getComponent(Label)
            labelComponent.string = this.noticetext

        }
    }

    update(deltaTime: number) {
        
    }
}


