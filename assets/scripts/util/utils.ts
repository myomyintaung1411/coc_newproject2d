import { Global } from "../common/Globals";
import { getBjJg, getBjlWin, getLhJg, getLhWin, getNnWin } from "../common/release";
import { SqlUtil } from "./SqlUtil";
import PomeloClient__ from "./test_pomelo";

export default function getTradeRecord(){
    Global.bet_recordInfo = null;
    Global.betGameRecord = null;
    const userInfo = JSON.parse(SqlUtil.get('userinfo'))
    const msg = {isSettlement:'1', currentPage:1,pageSize:50,date:1, roomId:'',name:userInfo.name, userId: userInfo.userId, token: userInfo.token,rType:'all',player_type:userInfo.userType}
    PomeloClient__.getInstance().send(msg,'connector.entryHandler.getRecord',res=> {
        console.log(res,"*********************** getRecord ***********")
        const jsonData = res.data.jsonData;
        const recordInfo = {'totalWin': res.data.totalWin,'totalBet': res.data.totalBet,'totalXmf': res.data.totalXmf};
        Global.bet_recordInfo = recordInfo;
        let gameRecord = []; 
        for(let i in jsonData){
            const recorddStr =  jsonData[i];
            let record:any = {};
            record.cc=recorddStr.cs;
            record.xml=recorddStr.xml;
            record.name=recorddStr.roomName;
            const gtype = recorddStr.rType;
            const xz = recorddStr.xzmx;
            const betArr = xz.split("$");
            let betStr  = "";
            for(let n in betArr){
                if( betArr[n]==""){
                    continue;
                }
                const xzStr = betArr[n].split("^");
                if(gtype=='bjl'){
                     betStr +=getBjlWin(xzStr[0])+":"+xzStr[1]+" "
                }else if(gtype=='lh'){
                     betStr +=getLhWin(xzStr[0])+":"+xzStr[1]+" "
                }else if(gtype=='nn'){//5^100$6^100$8^100$10^250$
                     betStr +=getNnWin(xzStr[0])+":"+xzStr[1]+" "
                }
            }
            record.xz = betStr;
            record.yl = recorddStr.yl;
            record.ye = recorddStr.ye;
            record.sj = recorddStr.create_at;
            let jg = '';
            if(gtype=='bjl'){
                 jg +=getBjJg( recorddStr.kj);
            }else if(gtype=='lh'){
                 jg +=getLhJg( recorddStr.kj);
            }else if(gtype=='nn'){//5^100$6^100$8^100$10^250$
                let zStatus = '1';
                const winStr = recorddStr.kj.split("_")[0];
                jg+=winStr[0]=='1'?'闲1赢':'闲1输';
                jg+=winStr[1]=='1'?'闲2赢':'闲2输';
                jg+=winStr[2]=='1'?'闲3赢':'闲3输';
            }		
            record.jg = jg;	
            gameRecord.push(record);
            
        }
        Global.betGameRecord = gameRecord
        
    });
}