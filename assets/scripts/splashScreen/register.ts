import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('register')
export class register extends Component {
    start() {

    }

    protected onLoad(): void {
        globalThis.g_register = this
    }

    show() {
        this.node.active = true
    }

    hide() {
        this.node.active = false
    }

    onclickClose(){
        this.hide()
    }

    update(deltaTime: number) {
        
    }
}


