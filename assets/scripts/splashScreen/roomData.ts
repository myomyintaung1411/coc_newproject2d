import { _decorator, Component, director, instantiate, Label, macro, Prefab,ScrollView } from 'cc';
import { singelRoom } from './singleRoom';
import { Global } from '../common/Globals';
const { ccclass, property } = _decorator;

interface RoadMapItem {
    id: number;
    name: string;
    type: string;
    road: string;
}
@ccclass('roomData')


export class roomData extends Component {
    roadmapItem:any  = []

    @property({
        type: Prefab
    })
    itemPrefab: Prefab = null!;
    @property({
        type: ScrollView
    })
    scrollViewMain: ScrollView = null!;
    private timers: any[] = [];

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
    setData(data:any) {
        this.roadmapItem = Global.roomList;

        for (let data = 0; data < Global.roomList.length; data++) {
            let item = instantiate(this.itemPrefab);
            const labelNode = item.getChildByPath('Header/RoomName/Label');
            const AmountLabel = item.getChildByPath('Header/Amount');
            const timerLabel = item.getChildByPath('Header/Time');
            const singleRoomComponent = item.getComponent('singelRoom') as singelRoom
            singleRoomComponent.createGrid(Global.roomList[data])

            if (labelNode && AmountLabel && timerLabel) {
                const labelComponent = labelNode.getComponent(Label);
                const labelAmount = AmountLabel.getComponent(Label)
                const labelTime = timerLabel.getComponent(Label)

                labelComponent.string = Global.roomList[data].name;
                labelAmount.string = Global.roomList[data].xh;
                //labelTime.string = Global.roomList[data].name;

                // Add timer for countdown
                if (Global.roomList[data].zt == '1' && Global.roomList[data].djs > 0) {
                    // Start the interval for countdown
                    Global.roomList[data].timer = setInterval(() => {
                        this.updateTimer(labelTime, Global.roomList[data]);
                    }, 1000); // Interval of 1 second (1000 milliseconds)

                    // Store the interval ID for later cleanup
                    this.timers.push(Global.roomList[data].timer);
                } else {
                    // Handle other conditions and label updates...
                    if (Global.roomList[data].zt == '2') labelTime.string = '停止下注';
                    if (Global.roomList[data].zt == '4') labelTime.string = '洗牌中';
                    if (Global.roomList[data].zt == '3' || Global.roomList[data].zt == '5') labelTime.string = '结算中';
                 }
            }
            
            //item[data].addChild(labeTxt)
            this.scrollViewMain.content.addChild(item)
        }
    }



     // Method to update the timer label
    private updateTimer(labelTime: Label, itemData: any) {
        if (labelTime && itemData && itemData.djs > 1) {
            itemData.djs--;
            labelTime.string = itemData.djs.toString();
        }
        else {
            labelTime.string = '结算中';
            this.clearTimer(itemData.timer); // Clear only the specific timer associated with this item
        }
    }

    // Method to clear a specific timer
    private clearTimer(timer: any) {
        clearInterval(timer)
    }

    // Method to clear all timers
        private clearTimers() {
            for (const timer of this.timers) {
                this.clearTimer(timer);
            }
            this.timers = [];
        }

    // OnDestroy lifecycle method
    onDestroy() {
        // Clear timers when the component is destroyed
        this.clearTimers();
    }


    hide() {
    }

    update(deltaTime: number) {
        
    }
}


