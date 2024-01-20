import { _decorator, Component, Prefab, instantiate, Node, Director } from 'cc';
import { Toast } from './Toast';
const { ccclass, property } = _decorator;

@ccclass('ToastManager')
export class ToastManager extends Component {

    @property(Prefab)
    toastPrefab: Prefab | null = null;

    private static _instance: ToastManager | null = null;

    public static get instance(): ToastManager {
        return ToastManager._instance!;
    }

    onLoad() {
        if (ToastManager._instance) {
            this.node.destroy();
            return;
        }

        ToastManager._instance = this;
    }

    onDestroy() {
        if (ToastManager._instance === this) {
            ToastManager._instance = null;
        }
    }

    showToast(message: string) {
        if (this.toastPrefab) {
            const toastNode = instantiate(this.toastPrefab) as Node;
            this.node.addChild(toastNode);

            const toastScript = toastNode.getComponent('Notification') as Toast;

            if (toastScript) {
                toastScript.show(message);
            }
        }
    }
}