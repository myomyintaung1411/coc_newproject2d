import { _decorator, Component, Prefab, instantiate, Node, Vec3 } from 'cc';
import { globalEventTarget } from '../util/GlobalEventTarget';
import { Logo_Loading } from './Logo_Loading';

const { ccclass, property } = _decorator;

@ccclass('LoadingManager')
export class LoadingManager extends Component {
    @property(Prefab)
    loadingPrefab: Prefab = null!;

    private static _instance: LoadingManager | null = null;

    onLoad() {
        LoadingManager._instance = this;

        globalEventTarget.on('showLoading', this.showLoading, this);

    }

    static getInstance(): LoadingManager {
        return LoadingManager._instance!;
    }

    showLoading() {
        const loadingNode = instantiate(this.loadingPrefab);
        const loadingComponent = loadingNode.getComponent(Logo_Loading) as Logo_Loading;
    
        if (loadingComponent) {
            loadingComponent.showLoading();
        } else {
            console.error("Logo_Loading component not found on loadingPrefab.");
        }
    
        // Assuming this.node is the root node of your scene
        this.node.addChild(loadingNode);
    }
    

    hideLoading() {
        const loadingNode = this.node.getChildByName('Logo_Loading');
    
        if (!loadingNode) {
            console.error("Loading node with name 'Logo_Loading' not found.");
            return;
        }
    
        const loadingComponent = loadingNode.getComponent(Logo_Loading) as Logo_Loading;
    
        if (loadingComponent) {
            loadingComponent.hideLoading();
        } else {
            console.error("Logo_Loading component not found on loading node.");
        }
    
        this.node.removeChild(loadingNode);
    }
    
}
