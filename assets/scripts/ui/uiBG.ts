import { _decorator, Component, Node ,Animation, AnimationState} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('uiBG')
export class uiBG extends Component {
    @property(Node) m_viewUI : Node = null!;
    animation_clip:Animation = null!
    start() {

    }

    protected onLoad(): void {
        this.animation_clip = this.m_viewUI.getComponent(Animation) 
        this.m_viewUI.active= false
    }


    onClickScaleToShow() {
        this.m_viewUI.active= true
        this.animation_clip.play('scaleToShow')
    }

    onClickScaleToHide() {
        this.animation_clip.play('scaleToHide')    
        this.m_viewUI.active= false    
    }

    update(deltaTime: number) {
        
    }
}


