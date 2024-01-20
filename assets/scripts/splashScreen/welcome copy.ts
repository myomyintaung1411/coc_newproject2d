import { _decorator, CCInteger, Component, instantiate, Node, Prefab } from 'cc';
import { loading } from './loading';
import { login } from './login';
import { register } from './register';

const { ccclass, property } = _decorator;
// const eventTarget = new EventTarget()
// globalThis._eventTarget = eventTarget
@ccclass('welcome')
export class welcome extends Component {
    @property(Prefab)  m_LoadingPrefab: Prefab = null!;
    @property(Node) m_Background:Node = null!;
    @property(Node) m_LoginBg:Node = null!;

    @property(Prefab)  m_AccountLoginPrefab: Prefab = null!;
    @property(Prefab)  m_RegisterPrefab: Prefab = null!;

    @property([Node]) m_LoginBtn:Node [] = []

    m_AccountLogin : any = null!;
    m_AccountRegister : any = null!;

    // public load: loading;
     onLoad(): void {
        globalThis.g_welcome = this
        const m_Loaing = instantiate(this.m_LoadingPrefab);
        this.m_Background!.addChild(m_Loaing);
       const loadingComponent = m_Loaing.getComponent('loading') as loading
       loadingComponent.setProgress(1)
       loadingComponent.finishCallBack = () => {
        console.log("testtttttttttttttttt")
        loadingComponent.node.active = false
        this.m_LoginBg.active = true
       }
    }

    /* test click for node order */
    onText() {
        console.log("sdfsdf")
        this.m_LoginBtn[0].setSiblingIndex(100)
    }

    onClickLoginType(target,data){
       switch (data) {
        case 'zh':
            if(this.m_AccountLogin == null) {
                this.m_AccountLogin = instantiate(this.m_AccountLoginPrefab);
                this.node!.addChild(this.m_AccountLogin);
                //this.m_AccountRegister.setSiblingIndex(2)
                
                this.m_AccountLogin = this.m_AccountLogin.getComponent('login') as login
               

            }
            //const loginComponent = this.m_AccountLogin.getComponent('login') as login
            this.m_AccountLogin.show()
            break;
        case 'wx':
            
            break;
        case 'yk':
            
            break;
       
        default:
            break;
       }
    }

    showRegisterView() {
        if(this.m_AccountRegister == null){
            this.m_AccountRegister = instantiate(this.m_RegisterPrefab);
            this.node.addChild(this.m_AccountRegister)
            //this.m_AccountRegister.setSiblingIndex(1)
            this.m_AccountRegister = this.m_AccountRegister.getComponent('register') as register
        }

        this.m_AccountRegister.show()
        this.m_AccountLogin.hide()//hide login
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}


