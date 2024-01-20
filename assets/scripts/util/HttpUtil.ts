import { _decorator, Component, Node, Button } from 'cc';

// export class HttpUtil {
//     /** 延迟多久没回复就返回False */
//     private static TimeOut: number = 5000;
//     /** 连接服务器地址 */
//     public static ServerURL: string = "http://192.168.99.112:1126/";
//     /**
//      * GET请求
//      *
//      * @static
//      * @param {*} url
//      * @param {object} [params={}]
//      * @param {*} callback
//      * @memberof HttpUtil
//      */
//     public static GET(url, param: any, callback: Function, thisobj: any) {
//         param = param || {};

//         url = HttpUtil.ServerURL + url;

//         let xhr = new XMLHttpRequest();
//         xhr.open("GET", url, true);
//         xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 let response = JSON.parse(xhr.responseText);
//                 if (xhr.status >= 200 && xhr.status < 300) {
//                     let httpStatus = xhr.statusText;
//                     // callback(true, JSON.parse(response));
//                     callback.call(thisobj, response);
//                 } else {
//                     callback.call(thisobj, response);
//                 }
//             }
//         };
//         xhr.timeout = this.TimeOut; 
//         xhr.ontimeout = function () {
//             console.log("POST 超时!");
//         }
//         xhr.onerror = function (event) {
//             console.log("POST Error! event=" + JSON.stringify(event));
//             console.log(event);
//         }
//         var data = JSON.stringify(param);
//         console.log("Post: url=" + url + " data:" + data);
//         xhr.send(data);
//     }
    
//     /**
//      * POST请求
//      *
//      * @static
//      * @param {*} url
//      * @param {object} [param={}]
//      * @param {*} callback
//      * @memberof HttpUtil
//      */
//     public static POST(url, param: any, callback: Function, thisobj: any, FunParam?: any) {
//         param = param || {};

//         url = HttpUtil.ServerURL + url;

//         var xhr = new XMLHttpRequest()
//         //xhr.withCredentials = true;
//         xhr.open("POST", url, true);
//         xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
//                 console.log("POST readyState=" + xhr.readyState + ",status" + xhr.status);
//                 let response = null;
//                 if (xhr.responseText) {
//                     response = JSON.parse(xhr.responseText);
//                 } else {
//                     console.error("返回了空字符串");
//                     response = { isSuccess: false };
//                 }
//                 if (response.succ == 500) {
//                     console.error("500");
//                     return response;//自定义类型500，玩家验证失效，需要重新登录
//                 }
//                 callback.call(thisobj, response, FunParam);
//                 //callback(response, FunParam);
//             }
//         };
//         xhr.timeout = this.TimeOut;
//         xhr.ontimeout = function () {
//             console.error("POST 超时!");
//             callback.call(thisobj, { succ: 800 }, FunParam);
//         }
//         xhr.onerror = function (event) {
//             console.error("POST Error! event=" + JSON.stringify(event));
//            // callback(null, FunParam);
//         }
//         console.log(param);
//         var data = JSON.stringify(param);
//         console.log("Post: url=" + url + " data:" + data);
//         //console.log(JSON.stringify(data))
//         xhr.send(data);
//     }
// }


export class HttpUtil {
    /** 延迟多久没回复就返回False */
    private static TimeOut: number = 5000;
    /** 连接服务器地址 */
    public static ServerURL: string = "http://192.168.99.112:1126/";

    /**
     * GET请求
     *
     * @static
     * @param {*} url
     * @param {object} [params={}]
     * @memberof HttpUtil
     */
    public static async GET(url: string, param: any): Promise<any> {
        param = param || {};
        url = HttpUtil.ServerURL + url;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            } else {
                console.error('GET Request failed:', response.statusText);
                return { isSuccess: false };
            }
        } catch (error) {
            console.error('Error in GET request:', error);
            return { isSuccess: false };
        }
    }

    /**
     * POST请求
     *
     * @static
     * @param {*} url
     * @param {object} [param={}]
     * @memberof HttpUtil
     */
    public static async POST(url: string, param: any): Promise<any> {
        param = param || {};
        url = HttpUtil.ServerURL + url;
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(param),
            });
    
            if (!response.ok) {
                console.error('POST Request failed:', response.statusText);
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to fetch data');
            }
    
            const jsonResponse = await response.json();
            return jsonResponse;
        } catch (error) {
            console.error('Error in POST request:', error.message);
            throw error; // Re-throw the error to be caught by the caller
        }
    }
    
    
}
