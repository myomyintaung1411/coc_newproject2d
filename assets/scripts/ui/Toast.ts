import { _decorator, Component, Label, tween, Vec3, Widget } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Toast')
export class Toast extends Component {
    // @ts-ignore
    @property({type: Label}) public contentLbl: Label;
    // @ts-ignore
    @property({type: Widget}) public widget: Widget;

    private _isShowing = false;
    private _timer: number = null!;

    start() {

    }

    update(deltaTime: number) {
        
    }

    public show(content: string, time: number = 1)  {
        if (!this._isShowing) {
            this._isShowing = true; // Corrected line
            this.node.active = true;
            this.contentLbl.string = content;
            this.widget.top = -100;
            tween(this.widget).to(0.5, { top: 325 }).start();
            this._timer = setTimeout(()=> {
                this.node.active = false;
                this._isShowing = false;
            }, time*1000);
        } else {
            this.contentLbl.string = content;
            clearTimeout(this._timer);
            this._timer = setTimeout(()=> {
                this.node.active = false;
                this._isShowing = false;
            }, time*1000);
        }
    }
}
