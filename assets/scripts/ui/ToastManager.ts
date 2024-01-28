import { _decorator, Component, Prefab, instantiate, Node, Vec3 } from 'cc';
import { NotificationToast } from './NotificationToast';
import { globalEventTarget } from '../util/GlobalEventTarget';

const { ccclass, property } = _decorator;

@ccclass('ToastManager')
export class ToastManager extends Component {
    @property(Prefab)
    toastPrefab: Prefab = null!;

    private static _instance: ToastManager | null = null;

    onLoad() {
        ToastManager._instance = this;

        globalEventTarget.on('showToast', this.showToast, this);

    }

    static getInstance(): ToastManager {
        return ToastManager._instance!;
    }

    showToast(message: string) {
        const toastNode = instantiate(this.toastPrefab);
        const toastComponent = toastNode.getComponent(NotificationToast) as NotificationToast;
        if (toastComponent) {
            toastComponent.show(message);
        }

        // Assuming this.node is the root node of your scene
        this.node.addChild(toastNode);
    }
}
