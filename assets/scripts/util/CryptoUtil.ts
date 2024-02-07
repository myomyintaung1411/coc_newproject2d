import CryptoES from "crypto-es";

export class CryptoUtil {
    private static key: string = null!;
    private static iv: string = null!;

    static initCrypto(key: string, iv: string) {
        this.key = key;
        this.iv = iv;
    }

    static aesEncrypt(msg: string, key: string, iv: string): string {
        const encrypted = CryptoES.AES.encrypt(
            msg,
            CryptoES.enc.Utf8.parse(key),
            {
                iv: CryptoES.enc.Utf8.parse(iv),
                mode: CryptoES.mode.CBC,
                padding: CryptoES.pad.Pkcs7,
            },
        );
        return encrypted.toString();
    }

    static aesDecrypt(str: string, key: string, iv: string): string {
        const decrypted = CryptoES.AES.decrypt(
            str,
            CryptoES.enc.Utf8.parse(key),
            {
                iv: CryptoES.enc.Utf8.parse(iv),
                mode: CryptoES.mode.CBC,
                padding: CryptoES.pad.Pkcs7,
            },
        );
        return decrypted.toString(CryptoES.enc.Utf8);
    }

    private static JsonFormatter = {
        stringify: function (cipherParams: any) {
            const jsonObj: any = { ct: cipherParams.ciphertext.toString(CryptoES.enc.Base64) };
            if (cipherParams.iv) {
                jsonObj.iv = cipherParams.iv.toString();
            }
            if (cipherParams.salt) {
                jsonObj.s = cipherParams.salt.toString();
            }
            return JSON.stringify(jsonObj);
        },
        parse: function (jsonStr: any) {
            const jsonObj = JSON.parse(jsonStr);
            const cipherParams = CryptoES.lib.CipherParams.create(
                { ciphertext: CryptoES.enc.Base64.parse(jsonObj.ct) },
            );
            if (jsonObj.iv) {
                cipherParams.iv = CryptoES.enc.Hex.parse(jsonObj.iv)
            }
            if (jsonObj.s) {
                cipherParams.salt = CryptoES.enc.Hex.parse(jsonObj.s)
            }
            return cipherParams;
        },
    };
}
