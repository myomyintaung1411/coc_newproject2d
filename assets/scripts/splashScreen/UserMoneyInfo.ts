import { _decorator, Component, Label, Node } from 'cc';
import { SqlUtil } from '../util/SqlUtil';
import { ApplyWithdraw } from './ApplyWithdraw';
import { betRecordDialog } from './betRecordDialog';
import PomeloClient__ from '../util/test_pomelo';
import { getBjJg, getBjlWin, getLhJg, getLhWin, getNnWin } from '../common/release';
import { Global } from '../common/Globals';
import getTradeRecord from '../util/utils';

const { ccclass, property } = _decorator;

@ccclass('UserMoneyInfo')
export class UserMoneyInfo extends Component {

    @property(Label) user_amount : Label;

    protected onLoad(): void {
       // this.getTradeRecord()
    }
    start() {
        
    }

    update(deltaTime: number) {
        
    }

    closeDialog() {
        this.node.active = false;
    }
    openDialog(useramount) {
        //console.log(userInfo?.ye,"openDialog from userinfo *******************")
        
        this.user_amount.string = (useramount ?? '').toString();

        this.node.active = true;
    }

    openApplyWithdrawDialog() {
        // Find the userMoneyInfoNode in the node hierarchy
        const applyWithdrawNode = this.node.parent?.getChildByName('ApplyWithdrawPrefab');

        // Check if the node exists and has the UserMoneyInfo component
        if (applyWithdrawNode) {
            const applyWithdrawComponent = applyWithdrawNode.getComponent('ApplyWithdraw') as ApplyWithdraw;
            
            // Check if the component exists and call the openDialog method
            if (applyWithdrawComponent) {
                applyWithdrawComponent.openDialog();
            }
        }
    }

    openBetRecordDialog() {
       
        // Find the userMoneyInfoNode in the node hierarchy
        getTradeRecord()
        const betRecordNode = this.node.parent?.getChildByName('BetRecordPrefab');

        // Check if the node exists and has the UserMoneyInfo component
        if (betRecordNode) {
            const betRecordComponent = betRecordNode.getComponent('betRecordDialog') as betRecordDialog;
            
            // Check if the component exists and call the openDialog method
            if (betRecordComponent) {
               setTimeout(() => {
                betRecordComponent.openDialog();
               }, 6000);
            }
        }
    }


}


