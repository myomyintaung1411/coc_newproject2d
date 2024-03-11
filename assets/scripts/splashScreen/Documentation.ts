import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Documentation')
export class Documentation extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    closeDialog() {
        this.node.active = false;
    }
    openDialog() {
        this.node.active = true;
    }
}


