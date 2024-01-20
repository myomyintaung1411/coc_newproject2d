import { _decorator, Component, EditBox, instantiate, Node,Prefab ,Animation} from 'cc';
import { register } from './register';

const { ccclass, property } = _decorator;

@ccclass('login')
export class login extends Component {
    @property(Prefab)  m_RegisterPrefab: Prefab = null!;
    m_AccountRegister : any = null!;
    
    @property(Animation) animation_clip:Animation = null!;
    @property(EditBox)  m_Account : EditBox = null!;
    @property(EditBox)  m_Password : EditBox = null!;

    start() {

    }

    protected onLoad(): void {
        globalThis.g_login = this
    }

    PlayEnd(){
        this.node.active = false
    }

    show() {
        this.animation_clip.play('ScaleToShow')
        this.node.active = true
    }

    hide() {
        this.animation_clip.play('ScaleToHide')
        this.node.active = false
    }

    onclickClose(){
        this.hide()
    }

    onclickRegister() {
        // if(this.m_AccountRegister == null){
        //     this.m_AccountRegister = instantiate(this.m_RegisterPrefab);
        //     this.node.parent.addChild(this.m_AccountRegister)
        //     this.m_AccountRegister = this.m_AccountRegister.getComponent('register') as register
        // }

        // this.m_AccountRegister.show()
        // this.hide()

        globalThis.g_welcome.showRegisterView()
    
    }

    onclickLogin() {
        console.log(this.m_Account.string,this.m_Password.string,"sdfsdf")
        const accountName = this.m_Account.getComponent(EditBox).string;
        const passwordName = this.m_Password.getComponent(EditBox).string;
        this.hide()

    }

    update(deltaTime: number) {
        
    }
}


