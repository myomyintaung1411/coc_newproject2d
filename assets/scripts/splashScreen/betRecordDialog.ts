import { _decorator, Color, Component, instantiate, Label, Prefab, ScrollView } from 'cc';
import { SqlUtil } from '../util/SqlUtil';
import PomeloClient__ from '../util/test_pomelo';
import { getBjJg, getBjlWin, getLhJg, getLhWin, getNnWin } from '../common/release';
import { Global } from '../common/Globals';
const { ccclass, property } = _decorator;

@ccclass('betRecordDialog')
export class betRecordDialog extends Component {

    @property(Label) showxm : Label = null!

    @property(Label) totalxm : Label = null!
    @property(Label) totalBet : Label = null!
    @property(Label) totalWin : Label = null!

    @property(ScrollView) betScrollview : ScrollView = null!;

    public recordInfo:any = null!
    public gameRecord:any = null!

    userInfo:any = null!

    @property({
        type: Prefab
    })
    itemPrefab: Prefab = null!;

    protected onLoad(): void {
        const userInfo = SqlUtil.get('userinfo')
        this.userInfo = JSON.parse(userInfo)
        if(this.userInfo){
          this.showxm.string = this.userInfo.show_xm == 1 ? '洗码量' : ''
        }
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    closeDialog() {
        this.node.active = false
    }

    openDialog() {
        const userInfo = SqlUtil.get('userinfo')
        this.userInfo = JSON.parse(userInfo)
        console.log(Global.betGameRecord,this.userInfo,"gameRecord ***********")
        //this.getTradeRecord()
        this.betScrollview.content.removeAllChildren()
         
    if(Global.betGameRecord) {
       for (let index = 0; index < Global.betGameRecord.length; index++) {
            const _betRecord_data = Global.betGameRecord[index];
           let item = instantiate(this.itemPrefab);
           console.log(item,"item")
            const labelNode = item.getChildByName('Label');
            const labelNode1 = item.getChildByName('Label-001');
            const labelNode2 = item.getChildByName('Label-002');
            const labelNode3 = item.getChildByName('Label-003');
            const labelNode4 = item.getChildByName('Label-004');
            const labelNode5 = item.getChildByName('Label-005');
            const labelNode6 = item.getChildByName('Label-006');
            const labelNode7 = item.getChildByName('Label-007');

            const labelComponent =  labelNode.getComponent(Label);
            const labelComponent1 = labelNode1.getComponent(Label);
            const labelComponent2 = labelNode2.getComponent(Label);
            const labelComponent3 = labelNode3.getComponent(Label);
            const labelComponent4 = labelNode4.getComponent(Label);
            const labelComponent5 = labelNode5.getComponent(Label);
            const labelComponent6 = labelNode6.getComponent(Label);
            const labelComponent7 = labelNode7.getComponent(Label);

            labelComponent.string = _betRecord_data.sj
            labelComponent1.string = _betRecord_data.name
            labelComponent2.string = _betRecord_data.cc
            labelComponent3.string = _betRecord_data.jg
            labelComponent4.string = _betRecord_data.xz
            labelComponent5.string = Math.abs(_betRecord_data.yl).toString()
            labelComponent6.string = this.userInfo.show_xm == 1 ? _betRecord_data.xml : ''
            labelComponent7.string =  _betRecord_data.yl 
            labelComponent7.color = _betRecord_data.yl  >= 0 ?  new Color(255, 0, 0,255) :  new Color(0, 128, 0,255)
            
           this.betScrollview.content.addChild(item)
        }
        this.node.active = true
    }
    if(Global.bet_recordInfo){
        this.totalxm.string =  '总洗码费: ' + Global.bet_recordInfo?.totalXmf;
        this.totalBet.string =  '总计: ' + Global.bet_recordInfo?.totalBet;
        this.totalWin.string =  '总赢: ' + Global.bet_recordInfo?.totalWin;
    }
    }
}


