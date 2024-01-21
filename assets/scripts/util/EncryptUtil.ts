/**
 *
 * @file EncryptUtil.ts
 * @author dream
 * @description 一些加密解密方法
 *
 */

let G_KP = {
    key: "#4dFER#@&wqDcv#@67$jNLj#",
    iv: '8975624324562108'
  
  }

export module EncryptUtil {

    /**
     * AES 加密
     * @param msg 
     * @param key 
     * @param iv 
     * @returns 
     */
    export function aesEncrypt(msg: string, key: string, iv: string): string {
        let encrypt = CryptoJS.AES.encrypt(msg, utf8Parse(G_KP.key || key), {
            iv: utf8Parse(G_KP.iv || iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypt.toString();
    }

    /**
     * AES 解密
     * @param str 
     * @param key 
     * @param iv 
     * @returns 
     */
    export function aesDecrypt(str: string, key: string, iv: string): string {
        let decrypt = CryptoJS.AES.decrypt(str, utf8Parse(G_KP.key || key), {
            iv: utf8Parse(G_KP.iv || iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return CryptoJS.enc.Utf8.stringify(decrypt);
    }

    function utf8Parse(utf8Str: string): string {
        return CryptoJS.enc.Utf8.parse(utf8Str);
    }

}