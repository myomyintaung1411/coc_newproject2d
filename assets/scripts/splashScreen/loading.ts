import { _decorator, CCInteger, Component, director, Node, Sprite, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('loading')
export class loading extends Component {
    @property(Node) m_ProImage : Node = null!;
    @property(CCInteger)  m_ProgressMaxLen;
    @property(CCInteger) m_Speed;

     setWidth : any = null!
     m_progressIng:boolean

    constructor(){
        super()
        this.m_progressIng = false
    }

    finishCallBack(){
        //director.loadScene('loginScene')
    }

    setProgress(pro) {
        if(pro > 1 || pro < 0) return
        let width = this.m_ProgressMaxLen * pro
        if(width < this.setWidth) return
        this.setWidth = this.m_ProgressMaxLen * pro

        this.m_progressIng = true
       // this.m_ProImage.getComponent(UITransform).width = this.setWidth;
    }

    protected onLoad(): void {
       // this.m_ProgressMaxLen = this.m_ProImage.getComponent(UITransform).width 
       this.m_ProImage.getComponent(UITransform).width = 0;
    }
    start() {

    }

    update(deltaTime: number) {
        if(this.m_progressIng) {
            if(this.m_ProImage.getComponent(UITransform).width < this.setWidth) {
                this.m_ProImage.getComponent(UITransform).width += deltaTime * this.m_Speed
            }
            if(this.m_ProImage.getComponent(UITransform).width >= this.m_ProgressMaxLen) {
                this.m_progressIng = false;
                if(this.finishCallBack != null) {
                    this.finishCallBack()
                }
            }
        }
    }
}


