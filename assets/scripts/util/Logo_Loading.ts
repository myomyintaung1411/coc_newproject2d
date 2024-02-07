import { _decorator, Component, tween, UIOpacity, Vec3 } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('Logo_Loading')
export class Logo_Loading extends Component {
    start() {}

    update(deltaTime: number) {}

    showLoading() {
        if (!this.node) {
            console.error("LoadingManager node is null or undefined.");
            return;
        }

        // Set ZIndex
        this.node.setSiblingIndex(1);

        // Set initial position and opacity for animation
        this.node.setPosition(0, 0);  // Center of the screen
        const uiOpacity = this.node.getComponent(UIOpacity);

        if (uiOpacity) {
            uiOpacity.opacity = 0;
        }

        // Activate the node
        this.node.active = true;

        tween(this.node)
            .to(0.5, { position: new Vec3(0, 50, 0) })
            .call(() => {
                if (uiOpacity) {
                    uiOpacity.opacity = 255;
                }
            })
            .delay(1) // Delay for the specified time
            .to(0.5, { position: new Vec3(0, 0, 0) })
            .call(() => {
                this.node.active = false;
            })
            .start();
    }

    hideLoading() {
        if (!this.node) {
            console.error("LoadingManager node is null or undefined.");
            return;
        }

        // Ensure that the LoadingManager instance is available
        tween(this.node)
            .to(0.5, { position: new Vec3(0, 0, 0) })
            .call(() => {
                this.node.active = false;
            })
            .start();
    }
}
