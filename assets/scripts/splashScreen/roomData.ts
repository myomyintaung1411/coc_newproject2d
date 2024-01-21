import { _decorator, Component, instantiate, Label, Prefab,ScrollView } from 'cc';
const { ccclass, property } = _decorator;

interface RoadMapItem {
    id: number;
    name: string;
    type: string;
    road: string;
}
@ccclass('roomData')


export class roomData extends Component {
    roadmapItem:RoadMapItem[]  = []

    @property({
        type: Prefab
    })
    itemPrefab: Prefab = null!;
    @property({
        type: ScrollView
    })
    scrollViewMain: ScrollView = null!;

    // addPrefabToScrollview() {
        
    // }

    start() {

    }

    protected onLoad(): void {
        console.log(this.roadmapItem,"ddddddddddddddd")
    }

    show() {
    }

    // Method to receive the data from the parent script
    setData(data: RoadMapItem[]) {
        this.roadmapItem = data;

        for (let data = 0; data < this.roadmapItem.length; data++) {
            let item = instantiate(this.itemPrefab);
            const labelNode = item.getChildByPath('Header/Name');

            if (labelNode) {
                const labelComponent = labelNode.getComponent(Label);
                
                // Set the text using the 'name' property of the current roadmapItem entry
                if (labelComponent) {
                    labelComponent.string = this.roadmapItem[data].name;
                }
            }
            
            //item[data].addChild(labeTxt)
            this.scrollViewMain.content.addChild(item)
        }
    }

    hide() {
    }

    update(deltaTime: number) {
        
    }
}


