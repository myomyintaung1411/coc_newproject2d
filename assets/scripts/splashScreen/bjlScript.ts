import { _decorator, Animation, Color, Component, director, Label, Node, resources, Sprite, SpriteFrame, sys } from 'cc';
import { Global } from '../common/Globals';
import PomeloClient__ from '../util/test_pomelo';
import { SqlUtil } from '../util/SqlUtil';
import { ToastManager } from '../ui/ToastManager';
import { encrypt, encrypt_data, getKey, getLz, getWlZps, setBjlData, setLhData, setNndata, setNnDtData, setresult } from '../common/release';
import { bigRoad } from './bigRoad';
import { zpsScript } from './zpsScript';
import { sixsScript } from './sixsScript';
import { dysScript } from './dysScript';
import { xysScript } from './xysScript';
import { xqsScript } from './xqsScript';

const global = Global
const { ccclass, property } = _decorator;
@ccclass('bjlScript')
export class bjlScript extends Component {
 
                 mouseIndex:any =5
				djs:any =30
				noticePm:any = ''
				showNotice:any = ''
				showCenter: boolean = false
				showBetRecord: boolean = false
				showRule: boolean = false
				showKf: boolean = false
				showKfs: boolean = false
				bgSound: boolean = true
				bgMusic: boolean = true
				showSetting: boolean = false
				showRePwd: boolean = false
				decoder:any ='/'
				banners: [
					'/static/images/b1.png',
					'/static/images/b2.png',
					'/static/images/b3.png'
				]
				username:any = ''
				nickname:any =''
				ye:any =0
				xh:any ='20-5000000'
				id:any =''
				isSub:any = ''
				showCommand: boolean = false
				showRecode: boolean = false
				showMenu: boolean = false
				showLanguage: boolean = false
				swiperList: any = ['下注', '取消下注', '换桌', '换龙虎', '换牛牛', '换金花', '重复下注', '切换语言', '退出登录']
				recordt_type:any = 0
				showStart:boolean = false
				showEnd:boolean =false
				websocket:any = null
				timerGetData:any = null//定时器名称
				timerGetGames:any = null
				rType:any = null
				roomLists:any = []
				rows:any = 6
				cols:any = 20
				rowsDl:any = 6
				colsDl:any = 33
				colssix:any = 30
				colsdy:any = 25
				colsxy:any = 25
				rowsNn:any = 4
				colsNn:any = 50
				live_address:any = ' https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv'
				chipList: any =  [
					{
						img: '/static/images/hh/pc/10.png',
						number: 10,
					},
					{
						img: '/static/images/hh/pc/20.png',
						number: 20,
					},
					{
						img: '/static/images/hh/pc/50.png',
						number: 50,
					},
					{
						img: '/static/images/hh/pc/100.png',
						number: 100,
						isShow:true,
					},{
						img: '/static/images/hh/pc/500.png',
						number: 500,
						isShow:true,
					}, {
						img: '/static/images/hh/pc/1000.png',
						number: 1000,
						isShow:true,
					}, {
						img: '/static/images/hh/pc/5000.png',
						number: 5000,
						isShow:true,
					}, {
						img: '/static/images/hh/pc/10000.png',
						number: 10000,
						isShow:true,
					}
				]
				chipLists: any =  [
					{
						img: '/static/images/hh/pc/10_s.png',
						number: 10,
					},
					{
						img: '/static/images/hh/pc/20_s.png',
						number: 20,
					},
					{
						img: '/static/images/hh/pc/50_s.png',
						number: 50,
					},
					{
						img: '/static/images/hh/pc/100_s.png',
						number: 100,
						isShow:true,
					},{
						img: '/static/images/hh/pc/500_s.png',
						number: 500,
						isShow:true,
					}, {
						img: '/static/images/hh/pc/1000_s.png',
						number: 1000,
						isShow:true,
					}, {
						img: '/static/images/hh/pc/5000_s.png',
						number: 5000,
						isShow:true,
					}, {
						img: '/static/images/hh/pc/10000_s.png',
						number: 10000,
						isShow:true,
					}
				]
				logList: any = []
				popupVisible: boolean =  false
				chipIndex: any = 2
				chipIndexS: any  = 0
				sleft: any  =0
				videoHeight: any  =''
				ratioHight: any  =1
				rid: any  = ''
				ridStr: any  = ''
				gamedata: any  = {}
				pCard: any  = []
				bCard: any  = []
				pCount: any  = '0'
				bCount: any  = '0'
				xd_money: any  = 0
				zd_money: any  = 0
				h_money: any  = 0
				z_money: any  = 0
				x_money: any  = 0
				big_money: any  = 0
				small_money: any  = 0
				xd_money_confirm: any  =0
				zd_money_confirm: any  =0
				h_money_confirm: any  =0
				z_money_confirm: any  =0
				x_money_confirm: any  =0
				big_money_confirm: any  =0
				small_money_confirm: any  =0
				wdy: any  =''
				wxy: any  =''
				wxq: any  =''
				wdya: any  =''
				wxya: any  =''
				wxqa: any  =''
				gameRecord: any  = []
				recordInfo: any  = {}
				yeRecord: any  = []
				zlRecord: any  = []
				jyRecord: any  = []
				recordDate: any  = 0
				getYlTimer: any  =  null
				showResult: any  = false
				showResulta: any  = false
				yl: any  = 0
				ylStatus: any  = 0
				showRooms: any  = false
				changeRoomsType: any  = 0
				//screenType: any  = uni.getStorageSync('screenType')
				videoPlayer: any  =  null
				//是否正在播放
				isPlaying: any  =  false
				showMsg: any  = false
				showMsgText: any  = ''
				showHl: any  = true
				vwidth: any  = 0
				vheight: any  = 0
				columns: any  = [['换靴', '换台','换荷官','暂停','查账','飞牌','小费','加彩','收工','显示总投注','自定义']]
				showkc: any  =false
				zl: any  = '选择指令'
				bczl: any  = ''
				liveAddress: any  = null
				liveAddress0: any  = ''
				liveAddress1: any  = ''
				zChipList: any  = []
				xChipList: any  = []
				hChipList: any  = []
				xdChipList: any  = []
				zdChipList: any  = []
				smallChipList: any  = []
				bigChipList: any  = []
				ch: any  = '0'
				showch: any  = false
				showzl: any  = false
				showks: any  = false
				showtz: any  = false
				isks: any  = false
				istz: any  = false
				showCm: any  = false
				showZdy: any  = false
				showXf: any  = false
				cmje: any  = ''
				xfje: any  = ''
				cmphone: any  = ''
				ptype: any  = '+86'
				cmtype: any  = 0
				games: any  = []
				tgame: any  = {}
				gamesIndex: any  = 0
				noticeContent: any  = ''
				currentPage: any  = 1
				pageSize: any  = 30
				rePassword: any  = ''
				oldPassword: any  = ''
				repeatArr: any  = []
				serverLink: any  = ''
				serverLink1: any  = ''
				serverLink2: any  = ''
				showWithdraw: any  = false
				showWithdrawRecord: any  = false
				txName: any  =''
				txMoney: any  =''
				txCard: any  =''
				txBankName: any  =''
				withdrawRecords: any  =[]
				ldLeft: any  =0
				ldMLeft: any  =0
				gtype: any  ='bjl'
				userInfo: any  =null
				showXhInfo: any  =false
				zxh: any  =''
				xxh: any  =''
				hxh: any  =''
				zdxh: any  =''
				xdxh: any  =''
               @property(bigRoad)
               bigRoadComponent: bigRoad | null = null;
               @property(zpsScript)
               zpsRoadComponent: zpsScript | null = null;
               @property(sixsScript)
               sixsRoadComponent:sixsScript | null = null;
               @property(dysScript)
               dysRoadComponent:dysScript | null = null;
               @property(xysScript)
               xysRoadComponent:xysScript | null = null;
               @property(xqsScript)
               xqsRoadComponent:xqsScript | null = null;

               @property(Node)
               DisplayResult:Node = null!;
               animationPlayed:boolean = false

    start() {
        SqlUtil.set('rType','bjl')
    }

    setRoomId(roomId: number) {
        this.rid = roomId;
        SqlUtil.set('brid',this.rid)
        this.ridStr = "b"+roomId;
    }

    protected onLoad(): void {
        //const bigRoadNode = this.node.getChildByPath('BottomSection/LeftSection/LeftScrollView');
        this.bigRoadComponent = this.bigRoadComponent?.getComponent('bigRoad') as bigRoad;
        this.zpsRoadComponent = this.zpsRoadComponent?.getComponent('zpsScript') as zpsScript;
        this.sixsRoadComponent = this.sixsRoadComponent?.getComponent('sixsScript') as sixsScript;
        this.dysRoadComponent = this.dysRoadComponent?.getComponent('dysScript') as dysScript;
        this.xysRoadComponent = this.xysRoadComponent?.getComponent('xysScript') as xysScript;
        this.xqsRoadComponent = this.xqsRoadComponent?.getComponent('xqsScript') as xqsScript;
      
        globalThis._bjlScript = this
        this.rid = Global.roomId
        console.log(this.rid,"roomId ***************")
        //get data from testuiscene
        this.getUserInfo()
        PomeloClient__.getInstance().on('message',this.getMessage,this)
         if(this.rid) {
            this.rid = this.rid;
            SqlUtil.set('brid',this.rid)
            this.ridStr = "b"+ this.rid;
            console.log("yes rid ************")
         }

        //const userInfo = SqlUtil.get('userinfo')
        //this.userInfo = userInfo
        const bjGames = { userId: this.userInfo.userId, token: this.userInfo.token,rType:'bjl',roomId:'',player_type:this.userInfo.userType}
        const nnGames = { userId: this.userInfo.userId, token: this.userInfo.token,rType:'nn',roomId:'',player_type:this.userInfo.userType}
        const lhGames = { userId: this.userInfo.userId, token: this.userInfo.token,rType:'lh',roomId:'',player_type:this.userInfo.userType}
            const allGames = [];
            PomeloClient__.getInstance().send(bjGames,'bjl.bjlHandler.doSelectGame',res=> {
                allGames.push(res)
                PomeloClient__.getInstance().send(lhGames,'lh.lhHandler.doSelectGame',resa=> {
                    allGames.push(resa)
                    PomeloClient__.getInstance().send(nnGames,'nn.nnHandler.doSelectGame',resb=> {
                        allGames.push(resb);
                        this.setGames(allGames);
                        
                        const msg = { userId: this.userInfo.userId, token: this.userInfo.token,rType:this.gtype,roomId:this.rid,player_type:this.userInfo.userType}
                        console.log(msg,"msg **************> from bjl.vue")
                        PomeloClient__.getInstance().send(msg,'bjl.bjlHandler.doSelectDesk',res=> {
                            this.setRoomData(res,true);
                        });
                        
                    });
                });				
            });

            // if(this.gamedata) {
            //     this.bigRoadComponent.createGrid(this.gamedata || null)
            // }

    }

    setGames(dataStrArr){//台桌列表 Table list
        const that = this;
        
        let newRoomList = [];
        let n:any
         for( n in dataStrArr){
            const dataStr = dataStrArr[n];
            if(dataStr.code!=101){
                return;
            }
            let roomList = dataStr.data.split("#");
            for(let i in roomList){
                let roomStr = roomList[i].split(",");
                if(roomStr==undefined || roomStr==""){
                    continue;
                }
                let room = setBjlData(roomStr);
                room.rType = 'bjl';
                if(roomStr[15]=='lh'){
                    room = setLhData(roomStr);
                    room.rType = 'lh';
                }else if(roomStr[15]=='nn'){
                    room = setNnDtData(roomStr);
                    room.rType = 'nn';
                }
                
                const isDt =  roomStr[18];
                if(this.userInfo.level=='5' && isDt=='1'){
                    continue;
                }
                if(this.userInfo.level!='5' && isDt=='2'){
                    continue;
                }
                
        
                if(n==0){
                    room.type ='百家乐'
                }else if(n==1){
                    room.type ='龙虎'
                }else{
                    room.type ='牛牛'
                }
                if(this.userInfo.level=='5' && room.type =='牛牛' ){
                    continue;
                }
                
                
                if(room.type=='百家乐' && room.desk == this.rid){
                    this.tgame = room;
                }else{
                    
                    newRoomList.push(room);
                }
            }
         }
        this.games  = newRoomList;
    }


    getUserInfo() {
        const _user_data = sys.localStorage.getItem('userinfo');
        const userInfo = JSON.parse(_user_data)
            if(userInfo && userInfo.token){
            this.userInfo = userInfo;
        }else{
            this.exit();
        }
        
    }

    goBack() {
        director.loadScene("testuiScene");
    }

    exit(){
        sys.localStorage.setItem("userinfo","");
        PomeloClient__.getInstance().disconnectServer()
        director.loadScene("loginScene");
    }

    protected onDestroy(): void {
        PomeloClient__.getInstance().off('message',this.getMessage,this)

        if(this.timerGetData) {
            clearTimeout(this.timerGetData);  
            this.timerGetData = null;  
        } 
    }

    setRoomData(dataStr,isStart){//房间信息 room information
        const that = this;
        if(dataStr.code!=102){
            return;
        }
        let roomStr = dataStr.data.split(",");				
        let room:any = {};
        room.type="bjl";

        room.isVip = roomStr[19];
        room.desk = roomStr[0];
        console.log(roomStr[10]);
        
        const xzs = roomStr[10].split('$');
        
        const betTypes = ['z','x','h','zd','xd','big','small'];
        for(let betType in betTypes){
            const type = betTypes[betType];
            let moneyConfirm = this.ridStr+""+type+"_money_confirm";
            SqlUtil.set(moneyConfirm,0)
            //uni.setStorageSync(moneyConfirm,0)
            this[type+'_money_confirm'] = 0;
        }
        for(let xz in xzs){
            const item = xzs[xz].split('^');
            if(item[0]=='1'){
                let moneyConfirm = this.ridStr+"z_money_confirm";
                // uni.setStorageSync(moneyConfirm,item[1]);
                 SqlUtil.set(moneyConfirm,item[1])
            }else if(item[0]=='2'){
                let moneyConfirm = this.ridStr+"h_money_confirm";
                // uni.setStorageSync(moneyConfirm,item[1]);
                 SqlUtil.set(moneyConfirm,item[1])
                 
            }else if(item[0]=='3'){
                let moneyConfirm = this.ridStr+"x_money_confirm";
                // uni.setStorageSync(moneyConfirm,item[1]);
                 SqlUtil.set(moneyConfirm,item[1])
            }else if(item[0]=='4'){
                let moneyConfirm = this.ridStr+"zd_money_confirm";
                // uni.setStorageSync(moneyConfirm,item[1]);
                SqlUtil.set(moneyConfirm,item[1])
            }else if(item[0]=='5'){
                let moneyConfirm = this.ridStr+"xd_money_confirm";
                // uni.setStorageSync(moneyConfirm,item[1]);
                SqlUtil.set(moneyConfirm,item[1])
            }else if(item[0]=='6'){
                let moneyConfirm = this.ridStr+"big_money_confirm";
                SqlUtil.set(moneyConfirm,item[1])
                // uni.setStorageSync(moneyConfirm,item[1]);
            }else if(item[0]=='7'){
                let moneyConfirm = this.ridStr+"small_money_confirm";
                SqlUtil.set(moneyConfirm,item[1])
                //uni.setStorageSync(moneyConfirm,item[1]);
            }
        }
        
        for(let betType in betTypes){
            const type = betTypes[betType];
            let moneyConfirm = this.ridStr+""+type+"_money_confirm";
            let money =  SqlUtil.get(moneyConfirm) ? SqlUtil.get(moneyConfirm) : 0;
            this[type+'_money_confirm'] = Number(money);
        }
        this.getChipByMoney1();
        
        room.xh = roomStr[1];
        if(this.userInfo.level=='5' ){
            room.xh = roomStr[20];
        }
        
        const pl = roomStr[14].split(":");
        let btxh = room.xh.split("-");
        room.zxh =room.xh;
        room.xxh =room.xh;
        room.xdxh =btxh[0]+"-"+ Math.floor((btxh[1]/Number(pl[3]))/100)+'00';
        room.zdxh =btxh[0]+"-"+ Math.floor((btxh[1]/Number(pl[4]))/100)+'00';
        room.hxh =btxh[0]+"-"+ Math.floor((btxh[1]/Number(pl[1]))/100)+'00';
        
        room.cc = roomStr[7];
        room.xueh = roomStr[7].split("-")[0];
        room.juh = roomStr[7].split("-")[1];
        room.name = roomStr[12];
        room.lsjg = roomStr[5];
        room.djs = roomStr[4];
        this.djs = Number(room.djs);
        room.zt = roomStr[3];
        room.pl = roomStr[14].split(":");
        if(room.zt=='1'){
            room.ztText = '下注中';
            that.gamedata.djs = room.djs;
            this.djsStart();
        }else if(room.zt=='2'){
            room.ztText = '停止下注';
        }else if(room.zt=='3'){
            room.ztText = '结算中';
            this.showResulta = true;
        }else {
            this.yl = 0 ;
            room.ztText = '洗牌中';
        }
        
        if(isStart){//首次加载视频 First time loading video
            setTimeout(() => {
                this.liveAddress = roomStr[13].split("*")[0];
                this.liveAddress = this.liveAddress.replaceAll("rtmp","https")+".flv";
                this.liveAddress0 = roomStr[13].split("*")[0];
                this.liveAddress0 = this.liveAddress0.replaceAll("rtmp","https")+".flv";
                this.liveAddress1 = roomStr[13].split("*")[1];
                this.liveAddress1 = this.liveAddress1.replaceAll("rtmp","https")+".flv";
                // this.$refs['jessibuca'].play(this.liveAddress);
                // if(this.$refs['jessibuca1']){
                //     this.$refs['jessibuca1'].play(this.liveAddress1);
                // }
                
            }, 1000)
        }
        room.onlinenum =  roomStr[6];
        room.lsjg = room.lsjg.split("^")
        let zps = [];
    
        let nzps = [];
        let lds = [];
        let newLds = [];
        let result = '';
        let row = 0;
        let col = 0;
        let win = 0;
        let b_remain = 1;
        let p_remain = 1;
        let t_remain = 0;
        let ld_row = 0;
        let ld_col = 0;
        
        let z = 0;
        let zd = 0;
        let x = 0;
        let xd = 0;
        let h = 0;

        
        //问路 Ask for directions
        let wlZps = getWlZps(room.lsjg+"a");//如果开庄 If the banker is opened
        const wlLzs= getLz(wlZps);
        let xqsWlArr = wlLzs.xqs;
        let xysWlArr = wlLzs.xys;
        let dysWlArr = wlLzs.dys;

        if(xqsWlArr && xqsWlArr.length>0){
          const wlResult =  (xqsWlArr[xqsWlArr.length-1]).img;
        
         if(wlResult=="1"){
          this.wxq = "1";
          this.wxqa = "2";
         }else{
           this.wxq = "2";
           this.wxqa = "1";
         }
        }
        
        if(xysWlArr && xysWlArr.length>0){
          const wlResult =  (xysWlArr[xysWlArr.length-1]).img;
          if(wlResult=="1"){
           this.wxy = "1";
           this.wxya = "2";
          }else{
            this.wxy = "2";
            this.wxya = "1";
          }
        }
        
        if(dysWlArr && dysWlArr.length>0){
          const wlResult =  (dysWlArr[dysWlArr.length-1]).img;
        
          if(wlResult=="1"){
           this.wdy = "1";
           this.wdya = "2";
          }else{
            this.wdy = "2";
            this.wdya = "1";
          }
        }
        
        let isHave = 0;
        for(let n in room.lsjg){ 
            let zp:any  = {};
            let six  = {};
            let nzp:any  = {};
            let ludan:any = {};
            let six_row:any = 0;
            let lsjg = room.lsjg[n];
                if (lsjg == 'a' || lsjg == 'b' || lsjg == 'c'|| lsjg == 'd') {
                    six_row++;
                    z++;
                    //清空和连赢
                    if(win==2){
                        t_remain = 0;
                        col++;
                        row = 1;
                    }else if(win==1){
                        t_remain = 0;
                        row++;
                    }
                    win = 1; 
                    zp.img= 'dl1_'+t_remain;
                    nzp.img='dl1_'+t_remain;
                    ludan.img = 'zp-100';
                    if(lsjg == 'b'){
                      ludan.img = 'zp-101';
                      xd++;
                    }else if(lsjg == 'c'){
                      ludan.img = 'zp-110';
                      zd++;
                    }else if(lsjg == 'd'){
                      ludan.img = 'zp-111';
                       xd++;
                       zd++;
                    }
                }
                if (lsjg == 'e' || lsjg == 'f' || lsjg == 'g' || lsjg == 'h') {
                    x++;
                    
                    if(win==1){
                        t_remain = 0;//清空和连赢
                        col++;
                        row = 1;
                    }else if(win==2){
                        t_remain = 0;//清空和连赢
                        row++;
                    }
                    six_row++;
                    win = 2;
                    zp.img = 'dl2_'+t_remain;
                    nzp.img=  'dl2_'+t_remain;
                    ludan.img = 'zp-200';
                    if(lsjg == 'f'){
                      ludan.img = 'zp-201';
                       xd++;
                    }else if(lsjg == 'g'){
                      ludan.img = 'zp-210';
                       zd++;
                    }else if(lsjg == 'h'){
                      ludan.img = 'zp-211';
                      xd++;
                      zd++;
                    }
                }
                if (lsjg == 'i' || lsjg == 'j'|| lsjg == 'k'|| lsjg == 'l') {
                    h++;
                    if(t_remain<3){
                        t_remain++;
                    }
                    if(win==2){//闲赢
                        zp.img= 'dl2_'+t_remain;
                        nzp.img=  'dl2_'+t_remain;
                    }else{
                        win==1; 
                        zp.img= 'dl1_'+t_remain;
                        nzp.img= 'dl1_'+t_remain;
                    }
                    ludan.img = 'zp-300';	
                    if(lsjg == 'j'){
                      ludan.img = 'zp-301';
                       xd++;
                    }else if(lsjg == 'k'){
                      ludan.img = 'zp-310';
                       zd++;
                    }else if(lsjg == 'l'){
                      ludan.img = 'zp-311';
                      xd++;
                      zd++;
                    } 
                }
            if(lsjg == 'z' ){
                ludan.img = 'ludan_f';
            }
            if(row==0){
                row=1;
            }
            
            
            if(row==1){
              isHave = 0;
            }
                    
                    
            if(isHave>0){
              let zpStr = zp.img+'';
              if(zpStr.endsWith("0")){
                isHave ++;
              }
                    
            }
            
              for(let z in zps){
                  if(zps[z].row==row && zps[z].col==col && t_remain==0){ //下面有露珠往右走
                       isHave=isHave==0?1:isHave;
                  }
              }
              if(isHave>0){
                 zp.row = row-isHave;
                 zp.col = col+isHave;
              }else{
                if(row>6){
                  zp.row = row-(row-6);
                  zp.col = col+(row-6);
                }else{
                  zp.row = row;
                  zp.col = col;
                }
              }
            
            
            
            nzp.row = row;
            nzp.col = col;
            if(ld_row%6==0){
                ld_col++;
                ld_row=0;
            }
            ld_row++;
            ludan.row = ld_row;
            ludan.col = ld_col;
            
            
            lds.push(ludan);
            if(win>0){
                zps.push(zp);
                nzps.push(nzp);
            }
             
        }			
        let sixs:any = [];
        let six_row:any = 0;
        let six_col:any = 0;
        
        for(let x in zps){
            
            
            const zstr = zps[x];

            const ztimg = zstr.img; 
            if(ztimg && ztimg!=''){
                if(ztimg.split("_")[1]!='0' && six_row>0){
                    six_row --;
                }
            }
            
            if(six_row>2){
                six_col++;
                six_row=0;
            }
            let six :any = {};
            six.img = zstr.img;
            six.row = six_row;
            six.col = six_col;
            six_row++;
            sixs.push(six);
        }
        room.zps = zps;
        room.sixs = sixs;
        room.nzps = nzps;
        
        
        let n = [];
        let allLds = lds.length;
        let countRow = Number( (allLds/6).toFixed(0))+1;
        
        for(let i in lds){
            let item = lds[i];
            
            if(countRow>14){
                item.col = item.col-(countRow-15);
            }
            n.push(item);
        }
        room.lds = n;
    
        const lzs= getLz(room.nzps);
        let xqsArr = lzs.xqs;
        let xysArr = lzs.xys;
        let dysArr = lzs.dys;
        room.dys = dysArr;
        room.xys = xysArr;
        room.xqs = xqsArr; 
        room.jgzj = [z,x,h,zd,xd];
        that.gamedata = room;
        if(this.bigRoadComponent && this.zpsRoadComponent && this.sixsRoadComponent && this.dysRoadComponent && this.xysRoadComponent && this.xqsRoadComponent){ 
            this.bigRoadComponent.createGrid(that.gamedata.lds)
            this.zpsRoadComponent.createGrid(that.gamedata.zps)
            this.sixsRoadComponent.createGrid(that.gamedata.sixs) 
            this.dysRoadComponent.createGrid(that.gamedata.dys)  
            this.xysRoadComponent.createGrid(that.gamedata.xys)  
            this.xqsRoadComponent.createGrid(that.gamedata.xqs)  
        }
       /// globalThis._eventTarget.emit('newData',that.gamedata) //emitting data 
       //
    }

    getImagePath(img){
        console.log(img,"getImagepath ************")
        return `poke/${img}/spriteFrame`;  // Adjust the path based on your image location
    }

    getMessage(message) {
        const msg = message;
        const msgData = msg.data;
        const that = this;
        if(msg.roomId==this.gamedata.desk && msg.rType=='bjl'){
            const brid = SqlUtil.get('brid')
            if(brid !=this.gamedata.desk){
                return;
            }
            
            let userInfo = this.userInfo
            console.log(userInfo,"ddddddddddddddd 780")

            if(msg && msg.data && msg.data.state){
                this.gamedata.zt = msg.data.state;
            }
            if(this.gamedata.zt=='1'){ 
                this.gamedata.ztText = '下注中';
            }else if(this.gamedata.zt=='2'){
                this.gamedata.ztText = '停止下注';
            }else if(this.gamedata.zt=='3'){
                this.gamedata.ztText = '结算中';
                this.showResulta = true;
            }else {
                this.gamedata.ztText = '洗牌中';
            }
            if(msg.code=="03"){//下注 Place a bet
                this.playMusic('mp3/common/StartBetting');
                console.log(msgData,"from msg data 7977777777777777")
                userInfo.ye = msgData?.ye;
                that.userInfo =userInfo;
                SqlUtil.set("userinfo",userInfo)
                this.cancelMoney();
                this.clearConfirm();
                that.gamedata.djs =msgData.betTime;
                this.djsStart();
                
                const pl = msgData.bl.split(":");
                let btxh = msgData.desk_limit;//普通台桌 Ordinary table
                if(userInfo.level=="5"){//电投 Electric investment
                    btxh = msgData.phone_desk_limit;
                }
                this.gamedata.xh = btxh;
                this.gamedata.zxh = btxh;
                this.gamedata.xxh = btxh;
                this.gamedata.xdxh =btxh.split("-")[0]+"-"+ Math.floor((msgData.xh/Number(pl[3]))/100)+'00';
                this.gamedata.zdxh =btxh.split("-")[0]+"-"+ Math.floor((msgData.xh/Number(pl[4]))/100)+'00';
                this.gamedata.hxh =btxh.split("-")[0]+"-"+ Math.floor((msgData.xh/Number(pl[1]))/100)+'00';

            }else if(msg.code=="04"){//停止下注
                this.playMusic('mp3/common/StopBetting');
                ToastManager.getInstance().showToast(msg.msg);
                that.cancelMoney(); 
                that.gamedata.djs = 0;
                that.djsTimer();
            }else if(msg.code=="05"){//开牌
                
                this.gamedata.zt='4'
                this.gamedata.ztText = '洗牌中';
            
                const lsjg =msgData?.result;
                if (lsjg == 'a' || lsjg == 'b' || lsjg == 'c'|| lsjg == 'd') {
                    this.gamedata.resultType = 'z';								
                }
                if (lsjg == 'e' || lsjg == 'f' || lsjg == 'g' || lsjg == 'h') {
                    this.gamedata.resultType = 'x';	
                }
                if (lsjg == 'i' || lsjg == 'j'|| lsjg == 'k'|| lsjg == 'l') {
                    this.gamedata.resultType = 'h';	
                }
                //this.playMusic("/bjl/bjl_"+lsjg);
                
                if(this.gamedata.isVip=='1'){
                    that.playMusic('mp3/bjl/Banker'+that.bCount);
                    setTimeout(() => {
                        that.playMusic('mp3/bjl/Player'+that.pCount);
                    }, 1000);
                }
                
                
                
                
                setTimeout(() => {
                    that.playMusic('mp3/bjl/'+that.gamedata.resultType);
                }, 2000);
                if (lsjg == 'b' ||  lsjg == 'f' ||  lsjg == 'j') {
                    setTimeout(() => {
                        that.playMusic('mp3/bjl/xd');
                    }, 3000);								
                }
                if (lsjg == 'c' ||  lsjg == 'g' ||  lsjg == 'k') {
                    setTimeout(() => {
                        that.playMusic('mp3/bjl/zd');
                    }, 3000);								
                }
                if (lsjg == 'd' ||  lsjg == 'h' ||  lsjg == 'l') {
                    setTimeout(() => {
                        that.playMusic('mp3/bjl/zxd');
                    }, 3000);								
                }
                
                
                            
                let resultText =setresult(lsjg);
                const bigOrSmall = msgData.isBit;
                    this.gamedata.resultText = resultText;
                // if(bigOrSmall){
                // 	this.gamedata.resultText = resultText + " 大";
                // }else{
                // 	this.gamedata.resultText = resultText + " 小";
                // }
                //重新加载
                setTimeout(() => {
                    that.cancelMoney();
                    that.clearConfirm();
                }, 4000)
            }else if(msg.code=="06"){//结算
                this.gamedata.zt='4'
                this.gamedata.ztText = '洗牌中';
                this.showResulta = true;
                this.yl =msgData.yl;
                
                if(Number(this.yl)>0){
                    this.playMusic('win');
                }
                userInfo.ye = msgData?.ye;
                that.userInfo =userInfo;
                SqlUtil.set('userinfo',userInfo)
            }else if(msg.code=="08"){//翻牌
                if(that.gamedata.djs>0 ){
                    that.gamedata.djs = 0;
                    that.djsTimer();
                    that.playMusic('mp3/common/StopBetting');
                    that.cancelMoney(); 
                }
                
                this.gamedata.zt='3'
                this.gamedata.ztText = '结算中';
                this.showResulta = true;

                this.pCard = msgData.result.pCard;
                this.bCard = msgData.result.bCard;
                
                this.bCount = msgData.result.bCount;
                this.pCount = msgData.result.pCount;
                
                
        }else if(msg.code=="109"){//彩池
                this.gamedata.caic = msgData;
                
        }else if(msg.code=='11'){//换靴
            this.cancelMoney();
            this.clearConfirm();
        }
        this.showImageResult()
        return;
        }
        const isFirst  = false;

        if(msg.action=='getdata'){
            
            if(msg.subMessage  && msg.subMessageTime!='' && msg.subMessage!='' && this.isSub=='2'){
                const times = new Date().getTime() - new Date(msg.subMessageTime).getTime();
                if(times<10000){
                    ToastManager.getInstance().showToast("指令:"+msg.subMessage);
                }
                this.sendMessage('bjl',"",'closeCommand','','','');	
            }
            this.ye = msg.ye;
            this.xh = msg.personxh.minBet+"-"+msg.personxh.maxBet
            let gameStr = msg.bjlganmedata;
            if(this.changeRoomsType==0){//百家乐
                gameStr=msg.bjlganmedata;
            }else if(this.changeRoomsType==1){
                gameStr=msg.lhganmedata;
            }else if(this.changeRoomsType==2){
                gameStr=msg.nnganmedata;
            }else if(this.changeRoomsType==3){
                gameStr=msg.zjhganmedata;
            }
            
            that.getroomsZps(JSON.stringify(gameStr));
            
        }else if(msg.action=='dobet'){//
            ToastManager.getInstance().showToast(msg.msg);
        }else if(msg.action=='sendXf'){//小费记录
    
            ToastManager.getInstance().showToast(msg.msg);
            this.sendClickCommandText('客人打赏小费'+this.xfje +'元');
            this.xfje = "";
            this.showXf = false;
        
                
        } 
        
        //globalThis._eventTarget.emit('newData',this.gamedata) //emitting data 
    }

    getroomsZps(bjlganmedata){
        const that = this;
        const a = JSON.parse(bjlganmedata);
        if(this.changeRoomsType!=2){//不等于牛牛
            let roomList = a;
            let newRoomList = [];
            for(let i in roomList){
                
                if(roomList[i].kf=='1' && roomList[i].kz=='1'){
                    let room = roomList[i];
                    if(room!=undefined && room!=null && room!='' && room.jgzj!='' && Object.prototype.toString.call(room.jgzj) == "[object String]"){		
                        let jgzj = room.jgzj.split("^");
                        room.jgzj = jgzj;
                        if(room.zt=='1'){
                            room.ztText = '下注中';
                        }else if(room.zt=='2'){
                            room.ztText = '开牌中';
                        }else if(room.zt=='3'){
                            room.ztText = '结算中';
                        }else if(room.zt=='4'){
                            room.ztText = '本局结束';
                        }else if(room.zt=='7'){
                            room.ztText = '停止下注';
                        }else{
                            room.ztText = '洗牌中';
                        }

                        let zps:any = [];
                        let result = '';
                        let row:any = 0;
                        let col:any = 0;
                        let win:any = 0;
                        let b_remain = 1;
                        let p_remain = 1;
                        let t_remain = 0;
                        for(let n in room.lsjg){
                            let zp:any  = {};
                            let lsjg = room.lsjg[n];
                            if (lsjg == 'a' || lsjg == 'b' || lsjg == 'c'|| lsjg == 'd') {
                            
                                if(win==2){
                                    t_remain = 0;
                                    col++;
                                    row = 1;
                                }else if(win==1){
                                    t_remain = 0;
                                    row++;
                                }
                                win = 1;
                                zp.img= 'dl1_0';
                        
                            }
                            if (lsjg == 'e' || lsjg == 'f' || lsjg == 'g' || lsjg == 'h') {
                                
                                if(win==1){
                                    t_remain = 0;//清空和连赢
                                    col++;
                                    row = 1;
                                }else if(win==2){
                                    t_remain = 0;//清空和连赢
                                    row++;
                                }
                                win = 2;
                                zp.img = 'dl2_0';
                                
                            }
                            if (lsjg == 'i' || lsjg == 'j'|| lsjg == 'k'|| lsjg == 'l') {
                                if(t_remain<3){
                                    t_remain++;
                                }
                                if(win==2){//闲赢
                                    zp.img= 'dl2_'+t_remain;
                                }else{
                                    win==1;
                                    zp.img= 'dl1_'+t_remain;
                                }	
                            }
                            
                            
                            if(row==0){
                                row=1;
                            }
                            if(row>6){
                                zp.row = row-(row-6);
                                zp.col = col+(row-6);
                            }else{
                                zp.row = row;
                                zp.col = col;
                            }
                                
                            zps.push(zp);
                            
                        }
                        room.zps = zps;
                        
                    }
                    newRoomList.push(room);
                }
                that.roomLists = newRoomList;
            }
        }else if(this.changeRoomsType==2){//等于牛牛
            let roomList =a;
            let newRoomList = [];
            for(let i in roomList){
                if(roomList[i].kf=='1' && roomList[i].kz=='1'){
                    let room = roomList[i];
                    if(room!=undefined && room!=null && room!='' && room.jgzj!='' && Object.prototype.toString.call(room.jgzj) == "[object String]"){
                        let jgzj = room.jgzj.split("^");
                        room.jgzj = jgzj;
                        if(room.zt=='1'){
                            room.ztText = '下注中';
                        }else if(room.zt=='2'){
                            room.ztText = '开牌中';
                        }else if(room.zt=='3'){
                            room.ztText = '结算中';
                            
                        }else if(room.zt=='4'){
                            room.ztText = '本局结束';
                        }else if(room.zt=='7'){
                            room.ztText = '停止下注';
                        }else{
                            room.ztText = '洗牌中';
                        }
                        let zps = [];
                        let result = '';
                        let row = 0;
                        let col = 0;
                        let win = 0;
                        let b_remain = 1;
                        let p_remain = 1;
                        let t_remain = 0;
                        
                        const ludans = room.lsjg.split("&");
                        
                        let zs = [];
                        let x1s = [];
                        let x2s = [];
                        let x3s = [];
            
                        for(let n in ludans){
                            let zp:any  = {};
                            let lsjg =ludans[n].split("-");
                            
                            const z = {'result':setNndata(lsjg[3]),'status':lsjg[7]};
                            const x1 = {'result':setNndata(lsjg[0]),'status':lsjg[4]};
                            const x2 = {'result':setNndata(lsjg[1]),'status':lsjg[5]};
                            const x3 ={'result':setNndata(lsjg[2]),'status':lsjg[6]};
                            
                            zs.push(z);
                            x1s.push(x1);
                            x2s.push(x2);
                            x3s.push(x3);
                            
                        }
                        room.zs = zs;
                        room.x1s = x1s;
                        room.x2s = x2s;
                        room.x3s = x3s;
                    }
                    newRoomList.push(room);
                }
                that.roomLists = newRoomList;
            }
        }
    }

    sendMessage(rType,roomId,action,betdata,cc,chat) {
        if(Global.socketObj && Global.socketObj.isConnect){
            const userInfo = SqlUtil.get('userinfo')
            let key = getKey();
            let dataParam = { userId:userInfo.id,token:userInfo.token, rType:rType, roomId:roomId, chat:chat, betdata:betdata, cc:cc, action:action }
            let strpara = JSON.stringify(dataParam);
            strpara = encrypt_data(strpara, key);
            let item = { key: encrypt(Global.publickey, key), data: strpara };
            Global.socketObj.sendMsg(item);
        }	
    }

    playMusic(src){
       // const bgm = uni.createInnerAudioContext();
        // bgm.src = '/static/sound/'+src+'.mp3'
        // bgm.loop = false;
        // if(Global.bgSound){
        //     bgm.play()
        // }
    }

    cancelMoney(){
        this.xd_money = 0;
        this.zd_money = 0;
        this.h_money = 0;
        this.z_money =0;
        this.x_money = 0;
        this.big_money = 0;
        this.small_money = 0;
        this.getChipByMoney();
    }

    showImageResult() {
        const { DisplayResult, gamedata, pCard, bCard, showResulta, bCount, pCount } = this;
    
        const WinNode = DisplayResult.getChildByPath('Win');
        const winLabel = WinNode.getChildByName('Label');
    
        if (showResulta && (pCard.length > 0 || gamedata.resultType !== '' || bCard.length > 0)) {
            DisplayResult.active = true;
    
            if (!this.animationPlayed) {
                DisplayResult.getComponent(Animation).play();
                this.animationPlayed = true;
            }
    
            if (gamedata.isVip === '1') {
                const setCardImage = (card, imgNode) => {
                    const imgPath = this.getImagePath(card);
                    resources.load(imgPath, SpriteFrame, (err, spriteFrame) => {
                        if (!err) {
                            imgNode.getComponent(Sprite).spriteFrame = spriteFrame;
                        } else {
                            console.error("Error loading image:", err);
                        }
                    });
                };
    
                const setCardImages = (cards, imgNodes) => {
                    cards.forEach((card, index) => {
                        const imgNode = imgNodes[index];
                        if (card && imgNode) {
                            setCardImage(card, imgNode);
                        } else {
                            imgNode.active = false;
                        }
                    });
                };
    
                const setPlayerCards = () => {
                    const playerResNodes = [
                        DisplayResult.getChildByPath('PlayerSection/PlayerRes1'),
                        DisplayResult.getChildByPath('PlayerSection/PlayerRes2'),
                        DisplayResult.getChildByPath('PlayerSection/PlayerRes3'),
                    ];
    
                    setCardImages(pCard.slice(0, 3), playerResNodes);
    
                    const playerPoint = DisplayResult.getChildByPath('PlayerSection/Playerpoint').getComponent(Label);
                    playerPoint.string = pCount;
                };
    
                const setBankerCards = () => {
                    const bankerResNodes = [
                        DisplayResult.getChildByPath('BankerSection/BankerRes1'),
                        DisplayResult.getChildByPath('BankerSection/BankerRes2'),
                        DisplayResult.getChildByPath('BankerSection/BankerRes3'),
                    ];
    
                    setCardImages(bCard.slice(0, 3), bankerResNodes);
    
                    const bankerPoint = DisplayResult.getChildByPath('BankerSection/BankerPoint').getComponent(Label);
                    bankerPoint.string = bCount;
                };
    
                setPlayerCards();
                setBankerCards();
            }
    
            const setColorAndText = (color, text) => {
                WinNode.active = true;
                winLabel.getComponent(Label).color = new Color(...color);
                winLabel.getComponent(Label).string = `${gamedata.resultText}赢`;
            };
    
            switch (gamedata.resultType) {
                case 'x':
                    setColorAndText([10, 114, 254], '赢');
                    break;
                case 'h':
                    setColorAndText([1, 153, 68], '赢');
                    break;
                case 'z':
                    setColorAndText([255, 61, 61], '赢');
                    break;
            }

            // Check for bCard[2] and pCard[2] here
            const Resut3Img = DisplayResult.getChildByPath('BankerSection/BankerRes3');
            const p_Resut3Img = DisplayResult.getChildByPath('PlayerSection/PlayerRes3');
            if (this.bCard[2]) {
                Resut3Img.active = true;
                const banker_imagepath3 = this.getImagePath(this.bCard[2]);
                resources.load(banker_imagepath3, SpriteFrame, (err, spriteFrame) => {
                    if (!err) {
                        const banker_result3 = Resut3Img.getComponent(Sprite);
                        if (banker_result3) {
                            banker_result3.spriteFrame = spriteFrame;
                        }
                    } else {
                        console.error("Error loading image:", err);
                    }
                });
            } else {
                Resut3Img.active = false;
            }
    
            if (this.pCard[2]) {
                p_Resut3Img.active = true;
                const player_imagepath3 = this.getImagePath(this.pCard[2]);
                resources.load(player_imagepath3, SpriteFrame, (err, spriteFrame) => {
                    if (!err) {
                        const player_result3 = p_Resut3Img.getComponent(Sprite);
                        if (player_result3) {
                            player_result3.spriteFrame = spriteFrame;
                        }
                    } else {
                        console.error("Error loading image:", err);
                    }
                });
            }  else {
                p_Resut3Img.active = false
            }

        } else {
            this.animationPlayed = false;
            DisplayResult.active = false;
            WinNode.active = false;
    
            const defaultSpriteFramePath = 'images/games/card/abg/spriteFrame';
            const defaultSpriteFrame = resources.get<SpriteFrame>(defaultSpriteFramePath);
    
            ['BankerRes1', 'BankerRes2', 'BankerRes3', 'PlayerRes1', 'PlayerRes2', 'PlayerRes3'].forEach((resName) => {
                const imgNode = DisplayResult.getChildByPath(`BankerSection/${resName}`) ||
                                DisplayResult.getChildByPath(`PlayerSection/${resName}`);
                const sprite = imgNode.getComponent(Sprite);
                if (sprite) sprite.spriteFrame = defaultSpriteFrame;
            });
    
        }
    }
    
    

    // showImageResult() {
    //     const WinNode = this.DisplayResult.getChildByPath('Win')
    //         const winLabel = WinNode.getChildByName('Label')
    //     if(this.showResulta && (this.pCard.length>0 || this.gamedata.resultType!='' || this.bCard.length>0 )){
    //         this.DisplayResult.active = true
    //        // Check if the animation has already played
    //             if (!this.animationPlayed) {
    //                 this.DisplayResult.getComponent(Animation).play();
    //                 this.animationPlayed = true;
    //             }
    //         if(this.gamedata.isVip == '1'){

    //             const BankerPoint = this.DisplayResult.getChildByPath('BankerSection/BankerPoint')
    //             const Resut1Img = this.DisplayResult.getChildByPath('BankerSection/BankerRes1')
    //             const Resut2Img = this.DisplayResult.getChildByPath('BankerSection/BankerRes2')
    //             const Resut3Img = this.DisplayResult.getChildByPath('BankerSection/BankerRes3')

    //             const PlayerPoint = this.DisplayResult.getChildByPath('PlayerSection/Playerpoint')
    //             const p_Resut1Img = this.DisplayResult.getChildByPath('PlayerSection/PlayerRes1')
    //             const p_Resut2Img = this.DisplayResult.getChildByPath('PlayerSection/PlayerRes2')
    //             const p_Resut3Img = this.DisplayResult.getChildByPath('PlayerSection/PlayerRes3')

    //             const bankerPoint = BankerPoint.getComponent(Label)
    //             const playerPoint = PlayerPoint.getComponent(Label)

    //             const banker_result = Resut1Img.getComponent(Sprite)
    //             const banker_result2 = Resut2Img.getComponent(Sprite)
    //             const banker_result3 = Resut3Img.getComponent(Sprite)

    //             const player_result = p_Resut1Img.getComponent(Sprite)
    //             const player_result2 = p_Resut2Img.getComponent(Sprite)
    //             const player_result3 = p_Resut3Img.getComponent(Sprite)

    //            const banker_imagepath = this.getImagePath(this.bCard[0])
    //            const banker_imagepath2 = this.getImagePath(this.bCard[1])
              

    //            const player_imagepath = this.getImagePath(this.pCard[0])
    //            const player_imagepath2 = this.getImagePath(this.pCard[1])
              

    //           if(this.bCard[0]){
    //             resources.load(banker_imagepath, SpriteFrame, (err, spriteFrame) => {
    //                 if (!err) {
    //                     banker_result.spriteFrame = spriteFrame;
    //                 } else {
    //                     console.error("Error loading image:", err);
    //                 }
    //             });
    //           }

    //            if(this.bCard[1]){
    //             resources.load(banker_imagepath2, SpriteFrame, (err, spriteFrame) => {
    //                 if (!err) {
    //                     banker_result2.spriteFrame = spriteFrame;
    //                 } else {
    //                     console.error("Error loading image:", err);
    //                 }
    //             });
    //            }

    //           if(this.bCard[2]){
    //             const banker_imagepath3 = this.getImagePath(this.bCard[2])
    //             Resut3Img.active = true
    //             resources.load(banker_imagepath3, SpriteFrame, (err, spriteFrame) => {
    //                 if (!err) {
    //                     banker_result3.spriteFrame = spriteFrame;
    //                 } else {
    //                     console.error("Error loading image:", err);
    //                 }
    //             });
    //           } else{
    //             Resut3Img.active = false
    //           }

    //           if(this.pCard[0]){
    //             resources.load(player_imagepath, SpriteFrame, (err, spriteFrame) => {
    //                 if (!err) {
    //                     player_result.spriteFrame = spriteFrame;
    //                 } else {
    //                     console.error("Error loading image:", err);
    //                 }
    //             });
    //           }

    //           if(this.pCard[1]){
    //             resources.load(player_imagepath2, SpriteFrame, (err, spriteFrame) => {
    //                 if (!err) {
    //                     player_result2.spriteFrame = spriteFrame;
    //                 } else {
    //                     console.error("Error loading image:", err);
    //                 }
    //             });
    //           }

    //           if(this.pCard[2]) {
    //             const player_imagepath3 = this.getImagePath(this.pCard[2])
    //             p_Resut3Img.active = true
    //             resources.load(player_imagepath3, SpriteFrame, (err, spriteFrame) => {
    //                 if (!err) {
    //                     player_result3.spriteFrame = spriteFrame;
    //                 } else {
    //                     console.error("Error loading image:", err);
    //                 }
    //             });
    //           } else{
    //             p_Resut3Img.active = false
    //           }

    //           bankerPoint.string = this.bCount
    //           playerPoint.string = this.pCount
    //         }
            
    //         if(this.gamedata.resultType == 'x'){
    //             WinNode.active = true
    //             winLabel.getComponent(Label).color = new Color(10,114,254)
    //             winLabel.getComponent(Label).string = this.gamedata.resultText + '赢'
    //         }
    //         if(this.gamedata.resultType == 'h'){
    //             WinNode.active = true
    //             winLabel.getComponent(Label).color = new Color(1,153,68)
    //             winLabel.getComponent(Label).string = this.gamedata.resultText + '赢'
    //         }
    //         if(this.gamedata.resultType == 'z'){
    //             WinNode.active = true
    //             winLabel.getComponent(Label).color = new Color(255,61,61)
    //             winLabel.getComponent(Label).string = this.gamedata.resultText + '赢'
    //         }
    //     }else {
    //         // Reset animation state when condition is false
    //         this.animationPlayed = false;
    //         this.DisplayResult.active = false;
    //         WinNode.active = false;
    //         // Set default SpriteFrames for Banker and Player images
    //         const defaultSpriteFramePath = 'images/games/card/abg/spriteFrame';  // Replace with the actual default path
    //         const defaultSpriteFrame = resources.get<SpriteFrame>(defaultSpriteFramePath);

    //         const Resut1Img = this.DisplayResult.getChildByPath('BankerSection/BankerRes1');
    //         const Resut2Img = this.DisplayResult.getChildByPath('BankerSection/BankerRes2');
    //         const Resut3Img = this.DisplayResult.getChildByPath('BankerSection/BankerRes3');

    //         const p_Resut1Img = this.DisplayResult.getChildByPath('PlayerSection/PlayerRes1');
    //         const p_Resut2Img = this.DisplayResult.getChildByPath('PlayerSection/PlayerRes2');
    //         const p_Resut3Img = this.DisplayResult.getChildByPath('PlayerSection/PlayerRes3');

    //         [Resut1Img, Resut2Img, Resut3Img, p_Resut1Img, p_Resut2Img, p_Resut3Img].forEach((image) => {
    //             const sprite = image.getComponent(Sprite);
    //             if (sprite) {
    //                 sprite.spriteFrame = defaultSpriteFrame;
    //             }
    //         });
    //     }
    // }

    getChipByMoney(){
        const list = ['z','x','h','zd','xd','small','big'];
        for(let i in list){
            const type = list[i];
            let money = Number( this[type+'_money'] )+Number( this[type+'_money_confirm'] );
            let chipArr = [];
            if(money>=10000){
                money = money%10000;
                chipArr.push(this.chipLists[7].img)
            }
            if(money>=5000){
                money = money%5000;
                chipArr.push(this.chipLists[6].img)
            }
            if(money>=1000){
                money = money%1000;
                chipArr.push(this.chipLists[5].img)
            }
            if(money>=500){
                money = money%500;
                chipArr.push(this.chipLists[4].img)
            }
            if(money>=100){
                money = money%100;
                chipArr.push(this.chipLists[3].img)
            }
            if(money>=50){
                money = money%50;
                chipArr.push(this.chipLists[2].img)
            }
            if(money>=20){
                money = money%20;
                chipArr.push(this.chipLists[1].img)
            }
            if(money>=10){
                money = money%10;
                chipArr.push(this.chipLists[0].img)
            }
            this[type+"ChipList"] = chipArr;
        }
    }

    getChipByMoney1(){
        const list = ['z','x','h','zd','xd','small','big'];
        for(let i in list){
            const type = list[i];
            let money = Number( this[type+'_money_confirm'] );
            let chipArr = [];
            if(money>=10000){
                money = money%10000;
                chipArr.push(this.chipLists[7].img)
            }
            if(money>=5000){
                money = money%5000;
                chipArr.push(this.chipLists[6].img)
            }
            if(money>=1000){
                money = money%1000;
                chipArr.push(this.chipLists[5].img)
            }
            if(money>=500){
                money = money%500;
                chipArr.push(this.chipLists[4].img)
            }
            if(money>=100){
                money = money%100;
                chipArr.push(this.chipLists[3].img)
            }
            if(money>=50){
                money = money%50;
                chipArr.push(this.chipLists[2].img)
            }
            if(money>=20){
                money = money%20;
                chipArr.push(this.chipLists[1].img)
            }
            if(money>=10){
                money = money%10;
                chipArr.push(this.chipLists[0].img)
            }
            this[type+"ChipList"] = chipArr;
        }
    }

    clearConfirm(){
        const that = this;
        this.showResulta = false;
        this.DisplayResult.active = false
        this.yl=0;
        this.gamedata.caic = null;
        this.gamedata.resultType  = '';
        this.bCard = [];
        this.pCard = [];
        this.bCount = '0';
        this.pCount = '0';
        const betTypes = ['z','x','h','zd','xd','big','small'];
        for(let betType in betTypes){
            const type = betTypes[betType];
            let moneyConfirm = this.ridStr+""+type+"_money_confirm";
            SqlUtil.set(moneyConfirm,0)
           // uni.setStorageSync(moneyConfirm,0)
             this[type+'_money_confirm'] = 0;
        }
        const userInfo = SqlUtil.get('userinfo')
        const msgParam = { userId: userInfo.userId, token: userInfo.token,rType:that.gtype,roomId:this.rid,player_type:userInfo.userType}
        
        setTimeout(() => {
            PomeloClient__.getInstance().send(msgParam,'bjl.bjlHandler.doSelectDesk',res=> {
                that.setRoomData(res,false);
            });
        }, 1000)
    }

    djsStart(){
        const that = this;
        clearTimeout(this.timerGetData);
        this.timerGetData = null;
        
        this.timerGetData = setInterval(() => {
            that.gamedata.djs--;
            that.djsTimer();
        }, 1000);
        
    }

    djsTimer(){
        if(this.gamedata.djs<11 && this.gamedata.djs>0){
            this.playWav(this.gamedata.djs);
        }
        
        if(this.timerGetData && this.gamedata.djs<1) {
            clearTimeout(this.timerGetData);  
            this.timerGetData = null;  
        } 
    }

    playWav(src){
        // const bgm = uni.createInnerAudioContext();
        // bgm.src = '/static/sound/djs/'+src+'.wav'
        // bgm.loop = false;
        // if(getApp().globalData.bgSound){
        //     bgm.play()
        // }
    }

    sendClickCommandText(bczl){
        this.sendMessage(bczl,this.rid,'sendCommand','','','');

        // uni.showToast({
        //     title:'已发送',
        // })
        ToastManager.getInstance().showToast('已发送');
    }

    update(deltaTime: number) {
        
    }
}


