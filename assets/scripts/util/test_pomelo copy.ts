import { EventTarget } from "cc";
import { SqlUtil } from "./SqlUtil";
import { EncryptUtil } from "./EncryptUtil";

class PomeloClient__ {
    private nHeartBeat = 0;
    private s_timer:  any = null;
    private interval:  any = null;
    private isConn = true;
    private kickk = false;
    private reconnet_success = false;
     

    private  p_server: any = window.pomelo
    private  p_server2: any = window.pomelo
    private n: any = 0

    private eventTarget: EventTarget = new EventTarget();
    static _instance: PomeloClient__;

    static getInstance(): PomeloClient__ {
      if (this._instance == null) {
          this._instance = new PomeloClient__();
      }
      return this._instance;
  }
  
    constructor() {
      this.initListeners();
    }
  
    private initListeners() {
      this.p_server2.on('close', (e: any) => this.handleClose(e));
      this.p_server2.on('onMsg', (e: any) => this.handleMsg(e));
      this.p_server2.on('onKick', (e: any) => this.handleKick(e));
    }
  
    private handleClose(e: any) {
      console.log('close 断线关闭', new Date());
      this.isConn = true;
      this.reconnet_success = false;
      this.clsInterval(this.interval);
  
      if (this.isConn && !this.kickk) {
        this.interval = setInterval(() => {
          if (this.isConn) {
            this.conn((err: any, res: any) => {
              if (res.code == 200) {
                this.clsInterval(this.interval);
                this.reconnet_success = true;
              }
            });
          }
        }, 5000);
      }
    }
  
    private handleMsg(e: any) {
    // uni.$emit('message', e);
   // systemEvent.emit('message', e)
    //director.emit('message',e)
    this.eventTarget.emit('message', e);
    console.log('message')
    
    }
  
    private handleKick(e: any) {
      this.kickk = true;
      this.nHeartBeat = 0;
      this.clsInterval(this.interval);
      this.clsInterval(this.s_timer);
      this.p_server2.disconnect();
      this.kick();
    }
  
    private kick() {
        console.log("kick")
      // Implement your kick logic here
    }
  
    private clsInterval(interval: any | null) {
      if (interval !== null) {
        clearInterval(interval);
        interval = null!;
      }
    }
  
    private startTimer() {
      this.clsInterval(this.s_timer);
      console.log('开启心跳');
      this.s_timer = setInterval(() => {
        this.chkHeartBeat(this.p_server2);
      }, 5000);
    }
  
    private chkHeartBeat(server: any) {
      console.log(this.nHeartBeat);
      if (this.nHeartBeat > 70) {
        console.log('重连时间过长...请检查网络链接或重新登录!');
        this.clsInterval(this.s_timer);
        server.disconnect();
        window.location.reload();
  
        if (this.nHeartBeat > 300) {
          this.clsInterval(this.s_timer);
          server.disconnect();
          window.location.reload();
        }
      }
      this.nHeartBeat += 5;
      const _storage_user = SqlUtil.get('userinfo')
      const userInfo = JSON.parse(_storage_user)
      var msg = { uid: userInfo.userId };
      var route = 'bjl.bjlHandler.chkHardBean';
      server.request(route, msg, (data: any) => {
        if (data.code === '07') {
          this.nHeartBeat = 0;
        }
      });
    }
  
    public conn(cb: (err: any, res: any) => void): boolean {
      let host = 'pc2.th371.com' + '/conn2';
      const _storage_user = SqlUtil.get('userinfo')
      const userInfo = JSON.parse(_storage_user)
      console.log(userInfo)
    //  const userInfo = { userId: "", token: 'token', userType: '' };
  
      let msg = { uid: userInfo.userId };
      let msg2 = { userId: userInfo.userId, token: userInfo.token, rType: userInfo.userType, roomId: userInfo.roomId };
  
      // this.p_server.init({ host: host, port: '', log: true }, () => {
      //   this.p_server.request('gate.gateHandler.queryEntry', msg, (res: any) => {
      //     this.p_server.disconnect();
      //     console.log(res,"response ******************")
      //     if (res.code == 200) {
      //       let port = res.port;
      //       if (port == '3010') {
      //         host = 'pc2.th371.com' + '/conn4';
      //       }
      //       if (port == '3011') {
      //         host = 'pc2.th371.com' + '/conn5';
      //       }
      //       if (port == '3012') {
      //         host = 'pc2.th371.com' + '/conn6';
      //       }
      //       port = '';
      //       this.p_server2.init({ host: host, port: port, log: true }, () => {
      //         this.p_server2.request('connector.entryHandler.entry', msg2, (res: any) => {
      //           if (res.code == 200) {
      //             this.isConn = false;
      //             this.clsInterval(this.interval);
      //             this.clsInterval(this.s_timer);
      //             this.startTimer();
      //             cb(res,res);
      //           }
      //         });
      //       });
      //     }
      //   });
      // });
      let that = this
      that.p_server.init({ host:host, port: '', log: true },
      function () {
        that.p_server.request("gate.gateHandler.queryEntry", msg, function (res) {
         console.log(res,msg,"response ******************")
          that.p_server.disconnect();
          if (res.code == 200) {
        let port = res.port;
        if(port=="3010"){
          host = 'pc2.th371.com' + '/conn4';
          }
          if(port=="3011"){
            host = 'pc2.th371.com' + '/conn5';
          }
          if(port=="3012"){
            host = 'pc2.th371.com' + '/conn6';
          }
          port = '';
           console.log(port,"response ****************** 222222222")
            that.p_server2.init({ host: host, port: port, log: true },function (res) {
                that.p_server2.request("connector.entryHandler.entry", msg2, function (res) {
              if (res.code == 200) {
              that.isConn = false
              that.clsInterval(that.interval);
              that.clsInterval(that.s_timer);
               that.startTimer();
               cb(res,res);
                 }
                })
              }
            )
          }
        })
      }
    )
  
      return this.isConn;
    }

    public on(eventName: string, callback: Function, target?: any) {
        // Add listener for your custom event
        this.eventTarget.on(eventName, callback(), target);
      }
  
    public disconnectServer() {
      this.clsInterval(this.interval);
      this.clsInterval(this.s_timer);
      this.p_server2.disconnect();
    }
    public send(msg: any, route: string, cb: (res: any) => void) {
      this.n =  this.n + 1
      this.p_server2.request(route, msg, (res: any) => {
        console.log(JSON.stringify(res)+"-=---收到信息")
        cb(res);
      });
    }

    public sendcb(route,msg, cb) {
      this.n = this.n + 1
      // const en = global.en
        let enc =  JSON.parse(JSON.stringify(msg))
       let encyrpt = EncryptUtil.aesEncrypt((JSON.stringify(enc)),'#4dFER#@&wqDcv#@67$jNLj#','8975624324562108')

      //const msgSend = AES.encrypt(JSON.stringify(msg), en)
     // var route = process.env.VUE_APP_AGENT
      this.p_server2.request(route, encyrpt, function (res) {
        // console.log('res ', res)
        const decrypt = JSON.parse(EncryptUtil.aesDecrypt(res,'#4dFER#@&wqDcv#@67$jNLj#','8975624324562108'))
        cb(decrypt)
      })
    }
  }
  
  export default PomeloClient__;
  