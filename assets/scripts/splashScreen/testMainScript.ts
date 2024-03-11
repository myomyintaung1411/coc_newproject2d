
import { _decorator, Component, director, error, EventTarget, instantiate, Node, Prefab, resources, ScrollView, Sprite, SpriteFrame, sys } from 'cc';
import { roomData } from './roomData';
import PomeloClient__ from '../util/test_pomelo';
import { Global } from '../common/Globals';
import { ToastManager } from '../ui/ToastManager';
import { encrypt, encrypt_data, getKey, getLz, setNndata } from '../common/release';
import { headerScript } from './headerScript';
import { SqlUtil } from '../util/SqlUtil';
import { roomData_Lh } from './roomData_Lh';
import { Notification_Alert } from './Notification_Alert_Msg';
import getTradeRecord from '../util/utils';
import { EncryptUtil } from '../util/EncryptUtil';
const { ccclass, property } = _decorator;

interface RoadMapItem {
    id: number;
    name: string;
    type: string;
    road: string;
}

@ccclass('testMainScript')
export class testMainScript extends Component {
    private eventTarget: EventTarget = new EventTarget();
    
    @property(Prefab) userMoneyInfoPrefab: Prefab = null!;
    @property(Prefab) documentationPrefab: Prefab = null!;
    @property(Prefab) ApplyWithdrawPrefab: Prefab = null!;
    @property(Prefab) BetRecordPrefab:Prefab = null!;
    @property(Prefab) headerPrefab: Prefab;
    @property(Prefab) kefuPrefab: Prefab = null!;
    @property(Prefab) NotiMessagePrefab:Prefab;
    @property(ScrollView) roomDataScroll : ScrollView = null!;
    @property(ScrollView) lh_roomDataScroll : ScrollView = null!;
    

    roadMapData:RoadMapItem[]  = []

    noticePm:''
    showNotice:boolean = false
    showCenter:boolean =false
    showBetRecord:boolean =false
    showRule:boolean =false
    showKf:boolean =false
    showKfs:boolean =false
    bgSound:boolean =true
    bgMusic:boolean =true
    showSetting:boolean =false
    showRePwd:boolean =false
    username:''
    nickname:''
    ye:0
    id:''
    isSub:any = ''
    showCommand:boolean =false
    showRecode:boolean =false
    showMenu:boolean =false
    showLanguage:boolean =false
    recordt_type:0
    showStart:boolean =false
    showEnd:boolean =false
    websocket:boolean =null
    timerGetData:any =  null!//定时器名称
    rType:String ='bjl'
    roomList:any = []
    rows:6
    rowsNn:4
    cols:6
    colsNn:15
    rowsDl:6
    colsDl:33
    colssix:30
    colsdy:25
    colsxy:25
    gameRecord:[]
    jyRecord:[]
    recordDate:0
    isMouseSelect:false
    gtype:any = 'bjl'
    showCm:false
    cmje:''
    cmphone:''
    ptype:'+86'
    notice:''
    showDown:false
    noticeContent:''
    currentPage:1
    pageSize:30
    rePassword:''
    oldPassword:''
    serverLink:''
    serverLinks:[]
    showWithdraw:false
    showWithdrawRecord:false
    txName:''
    txMoney:''
    txCard:''
    txBankName:''
    withdrawRecords:[]
    recordInfo:null
    userInfo:any = null!
    private notiNode:Node = null;
    private headerNode: Node = null; // Store a reference to the instantiated header node
    @property(Node) tabNode: Node = null!;  // Reference to the parent TabNode in the Cocos Creator editor
    private userMoneyInfoNode : Node = null!;  // Reference to the parent TabNode in the Cocos Creator editor

  //active color 9FBEB7
     onLoad(): void {
        this.gtype = Global.gtype
        if(this.gtype == 'bjl'){
            this.roomDataScroll.node.active = true
            this.lh_roomDataScroll.node.active = false
        }
        if(this.gtype == 'lh'){
            this.lh_roomDataScroll.node.active = true
            this.roomDataScroll.node.active = false
        }
        this.setActiveTabImage()
        console.log('******************************* onLoad start work')
        this.headerNode = instantiate(this.headerPrefab);
        this.notiNode = instantiate(this.NotiMessagePrefab);
        this.userMoneyInfoNode = instantiate(this.userMoneyInfoPrefab);
        const ApplyWithdrawNode = instantiate(this.ApplyWithdrawPrefab);
        const BetRecordNode = instantiate(this.BetRecordPrefab);
        const kefuNode = instantiate(this.kefuPrefab);
        const docuementNode = instantiate(this.documentationPrefab);
        this.node.addChild(this.headerNode);
        this.node.addChild(this.notiNode)
        this.node.addChild(this.userMoneyInfoNode)
        this.node.addChild(ApplyWithdrawNode)
        this.node.addChild(BetRecordNode)
        this.node.addChild(kefuNode)
        this.node.addChild(docuementNode)
        this.getUserInfo()
        PomeloClient__.getInstance().on('message',this.getMessage,this)
        // this.eventTarget.on('message', this.getMessage)

        let route = "bjl.bjlHandler.doSelectGame";
        if(this.gtype == 'lh' ){
            route = 'lh.lhHandler.doSelectGame';
        }else if(this.gtype=='nn' ){
            route = 'nn.nnHandler.doSelectGame';
        }
        const _user_data = sys.localStorage.getItem('userinfo');
        const userInfo = JSON.parse(_user_data)
        console.log(userInfo," --------> testmainScripts")
            if(userInfo && userInfo.token){
            const msg = { userId: userInfo.userId, token: userInfo.token,rType:this.gtype,roomId:'',player_type:userInfo.userType}
            PomeloClient__.getInstance().send(msg,route,(res)=> {
                console.log(res,"dddddddddd")
               // uni.hideLoading();
                this.setRoomData(res);
            });
        }else{
            this.exit();
        }

        // this.timerGetData = setInterval(() => {
        //     this.reloadDjs();
        // }, 1000);
    }


        // Separate function to set active tab image
        setActiveTabImage(activeTab: Node = null, inactiveTab: Node = null): void {
            // If activeTab is not provided, determine it based on gtype
            if (!activeTab) {
                activeTab = this.gtype === 'bjl' ? this.tabNode.getChildByName('Tab1') : this.tabNode.getChildByName('Tab2');
            }

            // If inactiveTab is not provided, determine it based on gtype
            if (!inactiveTab) {
                inactiveTab = this.gtype === 'bjl' ? this.tabNode.getChildByName('Tab2') : this.tabNode.getChildByName('Tab1');
            }

            const activeSprite = activeTab.getComponent(Sprite);
            const inactiveSprite = inactiveTab.getComponent(Sprite);

            if (activeSprite) {
                resources.load('texture/login/m_tab_sel/spriteFrame', SpriteFrame, (err, spriteFrame) => {
                    if (!err) {
                        activeSprite.spriteFrame = spriteFrame;
                    } else {
                        console.error("Error loading image:", err);
                    }
                });
            }

            if (inactiveSprite) {
                // Clear sprite on inactive tab
                inactiveSprite.spriteFrame = null;
            }
        }

        onTabClick(e, data): void {
            this.roomList = [];
            Global.roomList = [];
            console.log(data);
            this.gtype = data;
            Global.gtype = data;

            // Assuming Tab1 and Tab2 are direct children of TabNode
            const tab1 = this.tabNode.getChildByName('Tab1');
            const tab2 = this.tabNode.getChildByName('Tab2');

            if (data == 'bjl') {
                this.setActiveTabImage(tab1, tab2);

                this.roomDataScroll.node.active = true;
                this.lh_roomDataScroll.node.active = false;
                setTimeout(() => {
                    this.getRooms();
                }, 500);
            }

            if (data == 'lh') {
                this.setActiveTabImage(tab2, tab1);

                this.lh_roomDataScroll.node.active = true;
                this.roomDataScroll.node.active = false;
                setTimeout(() => {
                    this.getRooms();
                }, 500);
            }

            console.log(Global.roomList, "Global roomList ************");
        }


    getRooms() { 
        
        const userInfo = SqlUtil.get('userinfo')

        let route = "bjl.bjlHandler.doSelectGame"; 
        if(this.gtype=='lh'){
            route = 'lh.lhHandler.doSelectGame';
        }else if(this.gtype=='nn'){
            route = 'nn.nnHandler.doSelectGame';
        }
        console.log(route,"route *********************")
        // let routes = getCurrentPages(); // 获取当前打开过的页面路由数组 Get the currently opened page routing array
        // let curRoute = routes[routes.length - 1].route
        // if(curRoute=='pages/hh/pc/login/login'){
        //     clearTimeout(that.timerGetGames);  
        //     that.timerGetGames = null;
        // }
        
        const msg = { userId: userInfo.userId, token: userInfo.token,rType:this.gtype,roomId:'',player_type:userInfo.userType}
        PomeloClient__.getInstance().send(msg,route,(res)=> {
            //uni.hideLoading();
            this.roomList = []
            this.setRoomData(res);
        });
    }

    start() {
        const that = this;
        setTimeout(function () {
            if( Global.isLogin){
                Global.isLogin = false;
                that.noticeShow()
            }
        }, 1000);
       
        const headerComponent = this.headerNode.getComponent('headerScript') as headerScript;
        if (headerComponent) {
            headerComponent.setUserData(this.userInfo);
           
        }
        //api calling of bet record
       // getTradeRecord()
       if(Global.servicesLink == null){
           this.getServerLink()
       }
    }

    protected onDestroy(): void {
        PomeloClient__.getInstance().off('message',this.getMessage,this)

        if(this.timerGetData) {
            clearTimeout(this.timerGetData);  
            this.timerGetData = null;  
        } 
    }

    reloadDjs() {
        //console.log("11111111111")
        if(Global.roomList.length > 0)
        Global.roomList.map(item => {
            if(item.djs>0){
                item.djs = item.djs-1;
            }else{
                item.djs = 0;
            }
            
        })
        //this.roomDataComponent.setData(this.roomList)
    }

    setRoomData(dataStr){
        this.roomList = []
        Global.roomList = []
        //console.log(JSON.stringify(dataStr))
        const that = this;
        if(dataStr.code!=101){
            return;
        }
        if(dataStr.data==''){
            this.roomList = [];
            Global.roomList = []
            return;
        }
        let roomList = dataStr.data.split("#");
        let newRoomList = [];

        for(let i in roomList){
                let roomStr = roomList[i].split(",");				
                let room:any = {};
                const isDt =  roomStr[18];

                if(this.userInfo.level=='5' && isDt=='1'){
                    continue;
                }
                if(this.userInfo.level!='5' && isDt=='2'){
                    continue;
                }
                room.desk = roomStr[0];
                room.xh = roomStr[1];
                room.cc = roomStr[7];
                room.name = roomStr[12];
                room.lsjg = roomStr[5];
                room.djs = roomStr[4];
                room.zt = roomStr[3];
                room.onlinenum =  roomStr[6];
                room.lsjg = room.lsjg.split("^")
                let zps = [];
                let nzps = [];
                let lds = [];			
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
                let x = 0;
                let h = 0;
                let zd = 0;
                let xd = 0;
                let isHave = 0;
                for(let n in room.lsjg){ 
                    let zp:any  = {};
                    let nzp:any   = {};
                    let ludan :any = {};
                    let lsjg = room.lsjg[n];
                    if(that.gtype=='bjl'){
                        if (lsjg == 'a' || lsjg == 'b' || lsjg == 'c'|| lsjg == 'd') {
                            z++;
                            
                            if(win==2){
                                t_remain = 0;//清空和连赢 Clears and winning streaks
                                col++;
                                row = 1;
                            }else if(win==1){
                                t_remain = 0;//清空和连赢 Clears and winning streaks
                                row++;
                            }
                            win = 1; 
                            zp.img= 'dl1_'+t_remain;
                            nzp.img= 'dl1_'+t_remain;
                            ludan.img = 'zp-100';
                            if(lsjg == 'b'){
                                zd++;
                              ludan.img = 'zp-101';
                            }else if(lsjg == 'c'){
                                xd++;
                              ludan.img = 'zp-110';
                            }else if(lsjg == 'd'){
                                zd++;
                                xd++;
                              ludan.img = 'zp-111';
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
                            win = 2;
                            zp.img = 'dl2_'+t_remain;
                            nzp.img= 'dl2_'+t_remain;
                            ludan.img = 'zp-200';
                            if(lsjg == 'f'){
                                zd++;
                              ludan.img = 'zp-201';
                            }else if(lsjg == 'g'){
                                xd++;
                              ludan.img = 'zp-210';
                            }else if(lsjg == 'h'){
                                zd++;
                                xd++;
                              ludan.img = 'zp-211';
                            }
                        }
                        if (lsjg == 'i' || lsjg == 'j'|| lsjg == 'k'|| lsjg == 'l') {
                            h++;
                            if(t_remain<3){
                                t_remain++;
                            }
                            if(win==2){//闲赢 free win
                                zp.img= 'dl2_'+t_remain;
                                nzp.img=  'dl2_'+t_remain;
                            }else{
                                win==1;
                                zp.img= 'dl1_'+t_remain;
                                nzp.img= 'dl1_'+t_remain;
                            }
                            ludan.img = 'zp-300';	
                            if(lsjg == 'j'){
                                zd++;
                              ludan.img = 'zp-301';
                            }else if(lsjg == 'k'){
                                xd++;
                              ludan.img = 'zp-310';
                            }else if(lsjg == 'l'){
                                zd++;
                                xd++;
                              ludan.img = 'zp-311';
                            }
                        }
                    }else if(that.gtype=='lh'){
                        if (lsjg == 'a' ) {
                            z++;
                            
                            if(win==2){
                                t_remain = 0;//清空和连赢
                                col++;
                                row = 1;
                            }else if(win==1){
                                t_remain = 0;//清空和连赢
                                row++;
                            }
                            win = 1; 
                            zp.img= 'dl1_'+t_remain;
                            nzp.img= 'dl1_'+t_remain;
                            ludan.img = 'ludan_a';
                        }
                        if (lsjg == 'c') {
                            x++;
                            
                            if(win==1){
                                t_remain = 0;//清空和连赢
                                col++;
                                row = 1;
                            }else if(win==2){
                                t_remain = 0;//清空和连赢
                                row++;
                            }
                            win = 2;
                            zp.img = 'dl2_'+t_remain;
                            nzp.img=  'dl2_'+t_remain;
                            ludan.img = 'ludan_c';
                        }
                        if (lsjg == 'b') {
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
                            ludan.img = 'ludan_b';	

                        }
                    }else if(that.gtype=='nn'){
                        
                        //cblb-000,cfll-100,ljll-100,lelg-101,------
                        const ludans = room.lsjg;
                        let zs = [];
                        let x1s = [];
                        let x2s = [];
                        let x3s = [];
                         z = 0;
                         x = 0;
                         h = 0;
                        for(let n in ludans){
                            let zp  = {};
                            let lsjg =ludans[n];
                            if(lsjg==''){
                                continue;
                            }
                            let zStatus = '1';
                            const winStr = lsjg[5]+''+lsjg[6]+''+lsjg[7];
                            
                            if(lsjg[5]=='1'){
                                z++;
                            }
                            if(lsjg[6]=='1'){
                                x++;
                            }
                            if(lsjg[7]=='1'){
                                h++;
                            }
                            if(winStr=="111"){
                                zStatus = '0'
                            }
                            const z_c = {'result':setNndata(lsjg[0]),'status':zStatus};
                            const x1 = {'result':setNndata(lsjg[1]),'status':lsjg[5]};
                            const x2 = {'result':setNndata(lsjg[2]),'status':lsjg[6]};
                            const x3 ={'result':setNndata(lsjg[3]),'status':lsjg[7]};
                            zs.push(z_c);
                            x1s.push(x1);
                            x2s.push(x2);
                            x3s.push(x3);
                            
                        }
                        room.nnjgzj = [z,x,h,zd,xd];
                        room.zs = zs.splice(-9, 9);
                        room.x1s = x1s.splice(-9, 9);
                        room.x2s = x2s.splice(-9, 9);
                        room.x3s = x3s.splice(-9, 9);
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
                room.zps = zps;
                room.nzps = nzps;
                room.lds = lds;
            
                const lzs= getLz(room.nzps);
                
                
                let xqsArr = lzs.xqs;
                let xysArr = lzs.xys;
                let dysArr = lzs.dys;
                room.dys = dysArr;
                room.xys = xysArr;
                room.xqs = xqsArr; 
                room.jgzj = [z,x,h,zd,xd];
                newRoomList.push(room);
            //console.log("lzs---"+JSON.stringify(newRoomList));
            that.roomList = newRoomList;
            Global.roomList = newRoomList
            //console.log(that.roomList, that.roomList.length,"roomList ********************")
        }
         const roomDataComponent =  this.roomDataScroll.getComponent('roomData') as roomData
      const lh_roomDataComponent =  this.lh_roomDataScroll.getComponent('roomData_Lh') as roomData_Lh
         if(roomDataComponent && this.gtype == 'bjl') {
             roomDataComponent.setData(that.roomList)
         }
        if(lh_roomDataComponent && this.gtype == 'lh') {
            lh_roomDataComponent.setData(that.roomList)
        }

       
        
        //that.roomDataComponent.setData()
    }

     
     getMessage(msg){
        ///console.log(msg,"getMessage --------------->")
        
        if(msg?.action=='getdata'){
            if(msg.subMessage  && msg.subMessageTime!='' && msg.subMessage!='' && this.isSub=='2'){
                const times = new Date().getTime() - new Date(msg.subMessageTime).getTime();
                if(times<10000){
                    // uni.showToast({
                    //     icon:'none',
                    //     duration:6000, 
                    //     title:"指令:"+msg.subMessage
                    // }); 
                    ToastManager.getInstance().showToast("指令:"+msg.subMessage);
                }
                this.sendMessage('bjl',"",'closeCommand');	
            }
            this.notice = msg.loginnote;
            this.ye = msg.ye;

                
            
        }else if(msg.action=='getrecorddata'){//游戏记录

        }else{

        }
     }

     sendMessage(rType,roomId,action) {
        if(Global.socketObj && Global.socketObj.isConnect){
        const _user_data = sys.localStorage.getItem('userinfo');
        const userInfo = JSON.parse(_user_data)
            if(userInfo==undefined || userInfo==null || userInfo=='' || userInfo=='undefined' || userInfo.token==''){
                director.loadScene('loginScene')
                return;
            }
            let key = getKey();
            let dataParam = { userId:userInfo.id,token:userInfo.token, rType:rType, roomId:roomId, chat:'', betdata:'', cc:'', action:action }
            let strpara = JSON.stringify(dataParam);
            strpara = encrypt_data(strpara, key);
            let item = { key: encrypt(Global.publickey, key), data: strpara };
            Global.socketObj.sendMsg(item);
        }	
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

    exit(){
        sys.localStorage.setItem("userinfo","");
        PomeloClient__.getInstance().disconnectServer()
        director.loadScene("loginScene");
    }

    noticeShow(){
        const that = this;
        //this.showNotice = true;
        Global.showNotice = true;
        const userInfo = this.userInfo;
        const msg = {roomId:'',userId: userInfo.userId, token: userInfo.token,rType:that.gtype,player_type:userInfo.userType}
        PomeloClient__.getInstance().send(msg,'connector.entryHandler.getBulletin',res=> {
           // console.log(res,"connector.entryHandler.getBulletin")
            if( res.data.data){
                const noticeArr = res.data.data;
                for(let i in noticeArr){
                    if(noticeArr[i].address=='2'){
                        that.noticeContent = noticeArr[i].content
                    }else if(noticeArr[i].address=='1'){
                        Global.noticeContentLabel = noticeArr[i].content;
                        that.noticePm = noticeArr[i].content

                        const headerComponent = this.headerNode.getComponent('headerScript') as headerScript;
                        if (headerComponent) {
                            headerComponent.setText(that.noticePm);
                           
                        }
                        if(Global.showNotice == true) {
                            const notiComponent = this.notiNode.getComponent('Notification_Alert') as Notification_Alert;
                            if (notiComponent) {
                                notiComponent.openDialog()
                                notiComponent.setTextHere(Global.noticeContentLabel)
                               
                            }
                        }
                    }
                }
                
            }
        });
        
    }


    async fetchServiceLink(url: string, data: any) {
        try {
            const response = await fetch(url + '/call/get-services', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if needed
                },
                body: JSON.stringify(data),
            });
    
            console.log(response, "leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
            }
    
            const result = await response.text();
            console.log('API response:', result);
            return result;
            // Handle the API response here
    
        } catch (error) {
            console.error('Error:', error);
            const r = EncryptUtil.aesDecrypt(error.message, '@hKe9@A1lKe9$Tz1kE@8HnG7', '1234567890123456');
            console.log(error.message, r);
            // showToast(error.message); // Show the error message in your toast
            // Handle errors here
        }
    }

    async  getServerLink(){//获取客服链接

        const url = 'https://pc2.th371.com'
        const _user = SqlUtil.get('userinfo')
        const userInfo = JSON.parse(_user)
         let dataParam={userId:userInfo.userId};
        // const dataStr = {data: encryptTx( JSON.stringify(dataParam))};
        // let resutlData = await fetchServerLink(dataStr);
        // const r = txData(resutlData);
        // const result = JSON.parse(r);
        let enc =  JSON.stringify(dataParam)
        const data = EncryptUtil.aesEncrypt((enc),'@hKe9@A1lKe9$Tz1kE@8HnG7','1234567890123456')
        let resutlData = await this.fetchServiceLink(url, {data:data});
        const r = EncryptUtil.aesDecrypt(resutlData,'@hKe9@A1lKe9$Tz1kE@8HnG7','1234567890123456')
        const result = JSON.parse(r);
        console.log(result,"servicelink ************")
        Global.servicesLink = result.JsonData.services;
    }


    update(deltaTime: number) {
        
    }
}


