import { _decorator, Component, instantiate, Prefab, ScrollView, sys } from 'cc';
import { roomData } from './roomData';
const { ccclass, property } = _decorator;

interface RoadMapItem {
    id: number;
    name: string;
    type: string;
    road: string;
}

@ccclass('testMainScript')
export class testMainScript extends Component {
    @property(Prefab) marqueePrefab: Prefab = null!;

    @property(ScrollView) roomDataScroll : ScrollView = null!;

    roadMapData:RoadMapItem[]  = []

    protected onLoad(): void {
        this.roadMapData =  [
            {   id:1,
                name:'vip31',
                type:'bjl',
                road:''//show nothing should show grid of 6 row and 32 column
            },
            {   id:2,
                name:'30',
                type:'bjl',
                road:'a^a^i^c^i^a^i^e^e^a^g^a^e^c^e^e^e^a^e^a^e^e^a^a^e^f^a^i^i^b^a^a^b^a^i^a^e^a^e^e^a^a^a^i^a^a^e^i^e^e^e^e^a^g'
        
            },
            {   id:3,
                name:'vip33',
                type:'bjl',
                road:"e^a^a^a^a^a^a^e^a^b^e^a^e^a^e^a^e^a^i^e^e^a^a^e^b^e^a^a^b^a^a^a^a^e^a^a^e"
            },
            {   id:4,
                name:'66',
                type:'bjl',
                road:'a^a^i^c^i^a^'
            },
        ]
    }

    start() {
        const marqueeNode = instantiate(this.marqueePrefab);
        this.node.addChild(marqueeNode);
        const roomDataComponent =  this.roomDataScroll.getComponent('roomData') as roomData
        if(roomDataComponent) {
            roomDataComponent.setData(this.roadMapData)
        }
        
    }


    update(deltaTime: number) {
        
    }
}


