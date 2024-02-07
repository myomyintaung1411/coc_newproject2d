/**
 *
 * @file EncryptUtil.ts
 * @author dream
 * @description 一些加密解密方法
 *
 */

// let G_KP = {
//     key: "#4dFER#@&wqDcv#@67$jNLj#",
//     iv: '8975624324562108'
  
//   }
//   let G_KP_TX = {
//     key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
//     iv: '1234567890123456'
//   }
export module EncryptUtil {

    /**
     * AES 加密
     * @param msg 
     * @param key 
     * @param iv 
     * @returns 
     */
    export function aesEncrypt(msg: string, key: string, iv: string): string {
        let encrypt = CryptoJS.AES.encrypt(msg, utf8Parse(key), {
            iv: utf8Parse(iv),
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
        let decrypt = CryptoJS.AES.decrypt(str, utf8Parse(key), {
            iv: utf8Parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        //console.log(decrypt,"leeeeeeeeeeedeccccccccccccc*********")
        return CryptoJS.enc.Utf8.stringify(decrypt);

    }

    export function w_aesDecrypt(str: string, key: string, iv: string): string {
        let decrypt = CryptoJS.AES.decrypt(str, utf8Parse(key), {
            iv: utf8Parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypt.toString()
    }

    function utf8Parse(utf8Str: string): string {
        return CryptoJS.enc.Utf8.parse(utf8Str);
    }

}