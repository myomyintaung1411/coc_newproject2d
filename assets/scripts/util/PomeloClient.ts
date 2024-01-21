import { resources, log, JsonAsset } from 'cc';
/**
 * Pomelo消息模块
 * 收发消息
 */
export class PomeloClient {
    static _instance: PomeloClient;

    _connection: any = window.pomelo;

    _ip: string = "pc2.th371.com";
    _port: number = 3010;

    _disconnectCallback!: (msg: any) => void;
    _errorCallback!: (msg: any) => void;
    _connectCallback!: (msg: any) => void;

    constructor() {
        //
    }

    static getInstance(): PomeloClient {
        if (this._instance == null) {
            this._instance = new PomeloClient();
        }
        return this._instance;
    }
    /**
     * 设置服务器地址
     * @param ip 
     * @param port 
     */
    public setServerAddress(ip: string, port: number) {
        this._ip = ip;
        this._port = port;
    }

    /**
     * 启动网络，只执行一次连接。
     * @param errcb 
     * @param discb 
     * @param connectcb 
     */
    public start(errcb: (msg: any) => void, discb: (msg: any) => void, connectcb: (msg: any) => void): void {
        console.log("start->connectcb()");

        this._connectCallback = connectcb;
        this._errorCallback = errcb;
        this._disconnectCallback = discb;
        this.initPomeloClient();
        this.createConnect();
    }

    /**
     * 初始化pomelo
     */
    private initPomeloClient(): void {
        // handle disconnect message, occours when the client is disconnect with servers
        this._connection.on('onTick', function (msg: any) {
            //log("onTick: ", msg);
        });

        this._connection.on('io-error', (msg: any) => {
            log("pomelo.on(io-error): ", msg);
            if (typeof this._errorCallback !== 'function') {
                return;
            }
            this._errorCallback(msg);
        });
    }
    private createConnect(): void {
        this._connection.init({
            host: this._ip,
            port: this._port
        }, () => {
            log("createConnect() callback");
            if (typeof this._connectCallback !== 'function') {
                this._errorCallback({error:"_connectCallback is null."});
                return;
            }
            this._connectCallback({code:0});
        });
    }

    /**
     * 发送消息
     * @param route 
     * @param msg 
     * @param cb 
     */
    public SendMsg(route: string, msg: JSON, cb: any = null): void {
        if (cb != null) {
            this._connection.request(route, msg, cb);
        } else {
            this._connection.notify(route, msg);
        }
    }

    /**
     * 注册消息
     * @param route 
     * @param cb 
     */
    public On(route: string, cb: any): void {
        var onCb = cb;
        this._connection.on(route, (msg: any) => {
            if (onCb) onCb(msg);
        });
    }
    /**
     * 取消监听
     * @param route 
     * @param cb 
     */
    public Off(route: string, cb: any = null): void {
        this._connection.off(route, (msg: any) => {
            //
        });
    }

    public Clear(): void {
        this._connection.clear();
    }
}
