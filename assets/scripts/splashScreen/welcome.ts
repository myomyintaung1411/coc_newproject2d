import { _decorator, CCInteger, Component, director, instantiate, Node, Prefab } from 'cc';
import { loading } from './loading';
import { login } from './login';
import { register } from './register';

const { ccclass, property } = _decorator;

@ccclass('welcome')
export class welcome extends Component {
    @property(Prefab)  m_LoadingPrefab: Prefab = null!;
    @property(Node) m_Background:Node = null!;

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
        director.loadScene('loginScene')
       }
    }





    start() {

    }

    update(deltaTime: number) {
        
    }
}


