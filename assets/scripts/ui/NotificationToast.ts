import { _decorator, Component, Label, tween, Vec3, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NotificationToast')
export class NotificationToast extends Component {
    @property({ type: Label })
    public contentLbl: Label = null!;

    private _isShowing = false;
    private _timer: number = null!;

    show(content, time = 1) {
        console.log(content, "leeeeeeeeeeeeeeeee");
    
        if (!this._isShowing) {
            this._isShowing = true;
    
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
    
            // Set the content
            this.contentLbl.string = content;
    
            // Use cc.tween for animation
            tween(this.node)
                .to(0.5, { position: new Vec3(0, 50, 0) })
                .call(() => {
                    if (uiOpacity) {
                        uiOpacity.opacity = 255;
                    }
                })
                .delay(time) // Delay for the specified time
                .to(0.5, { position: new Vec3(0, 0, 0) })
                .call(() => {
                    this.node.active = false;
                    this._isShowing = false;
                })
                .start();
        } else {
            // If already showing, update content and reset the timer
            this.contentLbl.string = content;
            clearTimeout(this._timer);
            this._timer = setTimeout(() => {
                tween(this.node)
                    .to(0.5, { position: new Vec3(0, 0, 0) })
                    .call(() => {
                        this.node.active = false;
                        this._isShowing = false;
                    })
                    .start();
            }, time * 1000);
        }
    }
}

