



// !function(t){"use strict";var h,u;void 0===t.btoa&&(t.btoa=(h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),function(r){var e,t,n,o,a,c,i;for(t=n=0,o=r.length,c=(o-=a=o%3)/3<<2,0<a&&(c+=4),e=new Array(c);t<o;)i=r.charCodeAt(t++)<<16|r.charCodeAt(t++)<<8|r.charCodeAt(t++),e[n++]=h[i>>18]+h[i>>12&63]+h[i>>6&63]+h[63&i];return 1==a?(i=r.charCodeAt(t++),e[n++]=h[i>>2]+h[(3&i)<<4]+"=="):2==a&&(i=r.charCodeAt(t++)<<8|r.charCodeAt(t++),e[n++]=h[i>>10]+h[i>>4&63]+h[(15&i)<<2]+"="),e.join("")})),void 0===t.atob&&(t.atob=(u=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1],function(r){var e,t,n,o,a,c,i,h,f,d;if((i=r.length)%4!=0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(r))return"";for(f=i,0<(h="="==r.charAt(i-2)?1:"="==r.charAt(i-1)?2:0)&&(f-=4),f=3*(f>>2)+h,d=new Array(f),a=c=0;a<i&&-1!=(e=u[r.charCodeAt(a++)])&&-1!=(t=u[r.charCodeAt(a++)])&&(d[c++]=String.fromCharCode(e<<2|(48&t)>>4),-1!=(n=u[r.charCodeAt(a++)]))&&(d[c++]=String.fromCharCode((15&t)<<4|(60&n)>>2),-1!=(o=u[r.charCodeAt(a++)]));)d[c++]=String.fromCharCode((3&n)<<6|o);return d.join("")}));var d=2654435769;function n(r,e){var t=r.length,n=t<<2;if(e){var o=r[t-1];if(o<(n-=4)-3||n<o)return null;n=o}for(var a=0;a<t;a++)r[a]=String.fromCharCode(255&r[a],r[a]>>>8&255,r[a]>>>16&255,r[a]>>>24&255);var c=r.join("");return e?c.substring(0,n):c}function o(r,e){var t,n=r.length,o=n>>2;0!=(3&n)&&++o,e?(t=new Array(o+1))[o]=n:t=new Array(o);for(var a=0;a<n;++a)t[a>>2]|=r.charCodeAt(a)<<((3&a)<<3);return t}function s(r){return 4294967295&r}function C(r,e,t,n,o,a){return(t>>>5^e<<2)+(e>>>3^t<<4)^(r^e)+(a[3&n^o]^t)}function a(r){return r.length<4&&(r.length=4),r}function c(r){if(/^[\x00-\x7f]*$/.test(r))return r;for(var e=[],t=r.length,n=0,o=0;n<t;++n,++o){var a=r.charCodeAt(n);if(a<128)e[o]=r.charAt(n);else if(a<2048)e[o]=String.fromCharCode(192|a>>6,128|63&a);else{if(!(a<55296||57343<a)){if(n+1<t){var c=r.charCodeAt(n+1);if(a<56320&&56320<=c&&c<=57343){var i=65536+((1023&a)<<10|1023&c);e[o]=String.fromCharCode(240|i>>18&63,128|i>>12&63,128|i>>6&63,128|63&i),++n;continue}}throw new Error("Malformed string")}e[o]=String.fromCharCode(224|a>>12,128|a>>6&63,128|63&a)}}return e.join("")}function i(r,e){return(null==e||e<0)&&(e=r.length),0===e?"":/^[\x00-\x7f]*$/.test(r)||!/^[\x00-\xff]*$/.test(r)?e===r.length?r:r.substr(0,e):(e<32767?function(r,e){for(var t=new Array(e),n=0,o=0,a=r.length;n<e&&o<a;n++){var c=r.charCodeAt(o++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:t[n]=c;break;case 12:case 13:if(!(o<a))throw new Error("Unfinished UTF-8 octet sequence");t[n]=(31&c)<<6|63&r.charCodeAt(o++);break;case 14:if(!(o+1<a))throw new Error("Unfinished UTF-8 octet sequence");t[n]=(15&c)<<12|(63&r.charCodeAt(o++))<<6|63&r.charCodeAt(o++);break;case 15:if(!(o+2<a))throw new Error("Unfinished UTF-8 octet sequence");var i=((7&c)<<18|(63&r.charCodeAt(o++))<<12|(63&r.charCodeAt(o++))<<6|63&r.charCodeAt(o++))-65536;if(!(0<=i&&i<=1048575))throw new Error("Character outside valid Unicode range: 0x"+i.toString(16));t[n++]=i>>10&1023|55296,t[n]=1023&i|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+c.toString(16))}}return n<e&&(t.length=n),String.fromCharCode.apply(String,t)}:function(r,e){for(var t=[],n=new Array(32768),o=0,a=0,c=r.length;o<e&&a<c;o++){var i=r.charCodeAt(a++);switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n[o]=i;break;case 12:case 13:if(!(a<c))throw new Error("Unfinished UTF-8 octet sequence");n[o]=(31&i)<<6|63&r.charCodeAt(a++);break;case 14:if(!(a+1<c))throw new Error("Unfinished UTF-8 octet sequence");n[o]=(15&i)<<12|(63&r.charCodeAt(a++))<<6|63&r.charCodeAt(a++);break;case 15:if(!(a+2<c))throw new Error("Unfinished UTF-8 octet sequence");var h=((7&i)<<18|(63&r.charCodeAt(a++))<<12|(63&r.charCodeAt(a++))<<6|63&r.charCodeAt(a++))-65536;if(!(0<=h&&h<=1048575))throw new Error("Character outside valid Unicode range: 0x"+h.toString(16));n[o++]=h>>10&1023|55296,n[o]=1023&h|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+i.toString(16))}if(32766<=o){var f=o+1;n.length=f,t[t.length]=String.fromCharCode.apply(String,n),e-=f,o=-1}}return 0<o&&(n.length=o,t[t.length]=String.fromCharCode.apply(String,n)),t.join("")})(r,e)}function f(r,e){return null==r||0===r.length?r:(r=c(r),e=c(e),n(function(r,e){var t,n,o,a,c,i,h=r.length,f=h-1;for(n=r[f],i=(o=0)|Math.floor(6+52/h);0<i;--i){for(a=(o=s(o+d))>>>2&3,c=0;c<f;++c)t=r[c+1],n=r[c]=s(r[c]+C(o,t,n,c,a,e));t=r[0],n=r[f]=s(r[f]+C(o,t,n,f,a,e))}return r}(o(r,!0),a(o(e,!1))),!1))}function l(r,e){return null==r||0===r.length?r:(e=c(e),i(n(function(r,e){var t,n,o,a,c,i=r.length,h=i-1;for(t=r[0],o=s(Math.floor(6+52/i)*d);0!==o;o=s(o-d)){for(a=o>>>2&3,c=h;0<c;--c)n=r[c-1],t=r[c]=s(r[c]-C(o,t,n,c,a,e));n=r[h],t=r[0]=s(r[0]-C(o,t,n,0,a,e))}return r}(o(r,!1),a(o(e,!1))),!0)))}t.XXTEA={utf8Encode:c,utf8Decode:i,encrypt:f,encryptToBase64:function(r,e){return t.btoa(f(r,e))},decrypt:l,decryptFromBase64:function(r,e){return null==r||0===r.length?r:l(t.atob(r),e)}}}(this||[eval][0]("this"));





var __encode = 'sojson.com', _a = {}, _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"]; (function (_0xd642x1) { _0xd642x1[_0xb483[0]] = _0xb483[1] })(_a); var __Ox8d527 = ["\x56\x4B\x56\x33\x57\x57\x34\x61\x44\x43\x34\x57\x38\x57\x55\x46\x64\x76\x66\x64\x35\x38\x61\x35\x61\x67\x36\x35\x34\x65", "\x65\x6E\x63\x72\x79\x70\x74\x54\x6F\x42\x61\x73\x65\x36\x34", "\x64\x65\x63\x72\x79\x70\x74\x46\x72\x6F\x6D\x42\x61\x73\x65\x36\x34", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x6C\x6F\x67", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x73\x6F\x6A\x73", "\x6F\x6E\x2E\x63\x6F\x6D"]; function encrypt_data(_0x5bbfx2, _0x5bbfx3) { return XXTEA[__Ox8d527[0x1]](_0x5bbfx2, __Ox8d527[0x0]) } function decrypt_data(_0x5bbfx2, _0x5bbfx3) { return XXTEA[__Ox8d527[0x2]](_0x5bbfx2, __Ox8d527[0x0]) } (function (_0x5bbfx5, _0x5bbfx6, _0x5bbfx7, _0x5bbfx8, _0x5bbfx9, _0x5bbfxa) { _0x5bbfxa = __Ox8d527[0x3]; _0x5bbfx8 = function (_0x5bbfxb) { if (typeof alert !== _0x5bbfxa) { alert(_0x5bbfxb) }; if (typeof console !== _0x5bbfxa) { console[__Ox8d527[0x4]](_0x5bbfxb) } }; _0x5bbfx7 = function (_0x5bbfxc, _0x5bbfx5) { return _0x5bbfxc + _0x5bbfx5 }; _0x5bbfx9 = _0x5bbfx7(__Ox8d527[0x5], _0x5bbfx7(__Ox8d527[0x6], __Ox8d527[0x7])); try { _0x5bbfx5 = __encode; if (!(typeof _0x5bbfx5 !== _0x5bbfxa && _0x5bbfx5 === _0x5bbfx7(__Ox8d527[0x8], __Ox8d527[0x9]))) { _0x5bbfx8(_0x5bbfx9) } } catch (e) { _0x5bbfx8(_0x5bbfx9) } })({})

//RSA加密
// eval(function(p,a,c,k,e,r){e=String;if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0-4]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('function 0(1,2){3 0=new JSEncrypt();0.setPublicKey(1);3 4=0.0(2);return 4}',[],5,'encrypt|key|text|var|data'.split('|'),0,{}))

//混淆
function hxdm(){
	console.log("混淆")
}

// function startplay() {
// 	if (!ispaly) {
// 		ispaly = true;
// 		myAudio.src = path + arr[0];
// 		myAudio.play();
// 	}
// }
// function playorpaus() {
// 	if (!myAudio.currentSrc) {
// 		myAudio.src = path + arr[0];
// 	}
// 	if (myAudio.paused) {
// 		myAudio.play();
// 	} else {
// 		myAudio.pause();
// 	}

// }
// function setVolume(v) {
// 	myAudio.volume = v;
// }
// function Next() {
// 	if (index < arr.length-1) {
// 		index += 1;
// 	} else {
// 		index = 0;
// 	}
// 	myAudio.pause();
// 	myAudio.src = path + arr[index];
// 	myAudio.play();
// }
// function Previous() {
// 	if (index > 0) {
// 		index -= 1;
// 	} else {
// 		index = arr.length-1;
// 	}
// 	myAudio.pause();
// 	myAudio.src = path + arr[index];
// 	myAudio.play();
// }
// function getcurrentsong() {
// 	return arr[index];
// }
//背景音乐//


////////////////////////////////////////视频关键代码

// var players = {};
// function video_start(playurl, video) {
// 	if (document.getElementById(video.id + 'bg')) {
// 		document.getElementById(video.id + 'bg').remove()
// 	}
// 	var bg = document.createElement("img");
// 	bg.style.position = 'absolute'
// 	bg.id = video.id + 'bg';
// 	bg.src = 'img/bg.jpg';
// 	bg.style.zIndex = 0;
// 	bg.style.left = video.style.left;
// 	bg.style.top = video.style.top;
// 	bg.style.width = video.style.width;
// 	bg.style.height = video.style.height;
// 	document.body.appendChild(bg);

// 	if (players[video.id]) {
// 		players[video.id].player.stop();
// 		players[video.id] = null;
// 	}
// 	var player = new NodePlayer();
// 	player.setView(video.id);
// 	player.setScaleMode(0);
// 	player.setBufferTime(500);
// 	player.enableAudio(false);
// 	player.start(playurl);
// 	var info = { player: null, canvas: null, url: '' };
// 	info.player = player;
// 	info.canvas = video;
// 	info.url = playurl;
// 	players[video.id] = info;

// 	player.on("stats", (stats) => {
// 		if (document.getElementById(video.id + 'bg')) {
// 			document.getElementById(video.id + 'bg').remove()
// 		}
// 	})


// }
// function video_destroy(id = '') {
// 	if (id && players[id]) {
// 		if (document.getElementById(id + 'bg')) {
// 			document.getElementById(id + 'bg').remove()
// 		}
// 		players[id].player.stop();
// 		players[id] = null;
// 	}
// 	if (id == '') {
// 		if (players) {
// 			for (var item in players) {
// 				if (players[item]) {
// 					players[item].player.stop();
// 					players[item] = null;
// 				}
// 			}

// 		}
// 	}


// }

// function videoreload() {
// 	if (players) {
// 		for (var item in players) {
// 			if (players[item]) {
// 				video_start(players[item].url, players[item].canvas);
// 			}
// 		}

// 	}
// }


function encrypt(str:any, pwd:any) {
        if (str == "") return "";
        str = escape(str);
        if (!pwd || pwd == "") {
            var pwd:any = "1234";
        }
        pwd = escape(pwd);
        if (pwd == null || pwd.length <= 0) {
            alert("Please enter a password with which to encrypt the message.");
            return null;
        }
        var prand:any = "";
        for (var I = 0; I < pwd.length; I++) {
            prand += pwd.charCodeAt(I).toString();
        }
        var sPos = Math.floor(prand.length / 5);
        var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
        var incr = Math.ceil(pwd.length / 2);
        var modu = Math.pow(2, 31) - 1;
        if (mult < 2) {
            alert("Algorithm cannot find a suitable hash. Please choose a different password. /n Possible considerations are to choose a more complex or longer password.");
            return null;
        }
        var salt:any = Math.round(Math.random() * 1000000000) % 100000000;
        prand += salt;
        while (prand.length > 10) {
            prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
        }
        prand = (mult * prand + incr) % modu;
        var enc_chr:any = "";
        var enc_str:any = "";
        for (var I = 0; I < str.length; I++) {
            enc_chr = parseInt(str.charCodeAt(I) ^ Math.floor((prand / modu) * 255));
            if (enc_chr < 16) {
                enc_str += "0" + enc_chr.toString(16);
            } else
                enc_str += enc_chr.toString(16);
            prand = (mult * prand + incr) % modu;
        }
        salt = salt.toString(16);
        while (salt.length < 8) salt = "0" + salt;
        enc_str += salt;
        return enc_str;
    }

	function getKey(length = 16){
		let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		let str = "";
		for (let i = 0; i < length; i++) {
			str = str + random.charAt(Math.random() * random.length)
		}
		return str;
	}
	function gameType(num) {//1.百家乐(bjl)   2.龙虎(lh)   3.牛牛(nn)   4.炸金花(xjh)  5.大小(dx)   6.推筒子(tts)   7.时时彩（ssc)  8.江苏快3(jsk3)  9.北京赛车(bjcs)
		switch (num) {
			case 1: return "百家乐";
			case 2: return "龙虎";
			case 3: return "牛牛";
			case 4: return "炸金花";
		}
	}
	function getbetresult(yxm, code) {
		var result = '';
		if (code) {
			if (yxm == 1) {//百家乐
				if (code == 'b' || code == 'd' || code == 'f' || code == 'h') {
					result = '闲对';
				}
				if (code == 'c' || code == 'd' || code == 'g' || code == 'h') {
					result = '庄对';
				}
				if (code == 'a' || code == 'b' || code == 'c' || code == 'd') {
					result = '庄' + ',' + result;
				}
				if (code == 'e' || code == 'f' || code == 'g' || code == 'h') {
					result = '闲' + ',' + result;
				}
				if (code == 'i' || code == 'j' || code == 'k' || code == 'l') {
					result = '和' + ',' + result;
				}
			}
			if (yxm == 2)//龙虎
			{
				if (code == 'a') {
					result = '龙';
				}
				if (code == 'i') {
					result = '和';
				}
				if (code == 'e') {
					result = '虎';
				}
			} if (yxm == 3) {
				var _result = code.split('-');
		
				if (_result[7] == '1') {
					result += "庄赢";
				} else {
					if (_result[4] == '1') {
						result += "闲1赢";
					}
					if (_result[5] == '1') {
						result += "闲2赢";
					}
					if (_result[6] == '1') {
						result += "闲3赢";
					}
				}
				var nnResult = {
					a: "牛1",
					b: "牛2",
					c: "牛3",
					d: "牛4",
					e: "牛5",
					f: "牛6",
					g: "牛7",
					h: "牛8",
					i: "牛9",
					j: "牛牛", //牛牛
					k: "炸弹", //炸弹
					l: "无牛" //没牛
				}
				result += "[庄" + nnResult[_result[3]] + " 闲1" + nnResult[_result[0]] + " 闲2" + nnResult[_result[1]] + " 闲3" + nnResult[_result[2]] + "]";
			}
		
		}
		return result;
	}
	function getstatus(num) {//0：待开牌 1：已结算 2：玩家取消 3 台面作废 4修改结果
		switch (num) {
			case '0': return "待开牌";
			case '1': return "已结算";
			case '2': return "退押";
			case '3': return "作废";
			case '4': return "修改结果";
		}
	}
	function strJson(str, sign) {
	        var data = null;
	        if (str) { data = str.split(sign) }
	        return data;
	    }
	function getxzmx(yxm, xz) {
				var result = '';
				if (xz) {
					let zxlist = strJson(xz, "^");
					if (yxm == 1) {
						if (parseInt(zxlist[0]) > 0) {
							result = '闲:' + zxlist[0];
						}
						if (parseInt(zxlist[1]) > 0) {
							result = result + ' ' + '闲对:' + zxlist[1];
						}
						if (parseInt(zxlist[2]) > 0) {
							result = result + ' ' + '和:' + zxlist[2];
						}
						if (parseInt(zxlist[3]) > 0) {
							result = result + ' ' + '庄对:' + zxlist[3];
						}
						if (parseInt(zxlist[4]) > 0) {
							result = result + ' ' + '庄:' + zxlist[4];
						}
					}
					if (yxm == 2) {
						if (parseInt(zxlist[0]) > 0) {
							result = '龙:' + zxlist[0];
						}
						if (parseInt(zxlist[1]) > 0) {
							result = result + ' ' + '和:' + zxlist[1];
						}
						if (parseInt(zxlist[2]) > 0) {
							result = result + ' ' + '虎:' + zxlist[2];
						}
					}
					if (yxm == 3) {
						if (parseInt(zxlist[1]) > 0) {
							result = '闲1翻倍:' + zxlist[1];
						}
						if (parseInt(zxlist[3]) > 0) {
							result = result + ' ' + '闲1平倍:' + zxlist[3];
						}
						if (parseInt(zxlist[5]) > 0) {
							result = result + ' ' + '闲2翻倍:' + zxlist[5];
						}
						if (parseInt(zxlist[7]) > 0) {
							result = result + ' ' + '闲2平倍:' + zxlist[7];
						}
						if (parseInt(zxlist[9]) > 0) {
							result = result + ' ' + '闲3翻倍:' + zxlist[9];
						}
						if (parseInt(zxlist[11]) > 0) {
							result = result + ' ' + '闲3平倍:' + zxlist[11];
						}
					}
				}
				return result;
			}
			function setresult(type) {
				var result = '';
				var color = null;
				if (type == 'a') {
					result = '庄';
					//SoundManager.playSoundOnce('zhuangying_mp3');
					color = 0xea2215;
				}
	
				if (type == 'b') {
					result = '庄 闲对';
					//SoundManager.playSoundOnce('zhuangyingxiandui_mp3');
					color = 0xea2215;
				}
	
				if (type == 'c') {
					result = '庄 庄对';
					//SoundManager.playSoundOnce('zhuangyingzhuangdui_mp3');
					color = 0xea2215;
				}
	
				if (type == 'd') {
					result = '庄 闲对 庄对';
					//SoundManager.playSoundOnce('zhuangyingzhuangduixiandui_mp3');
					color = 0xea2215;
				}
	
				if (type == 'e') {
					result = '闲';
					//	SoundManager.playSoundOnce('xianying_mp3');
					color = 0x0c23c9;
				}
	
				if (type == 'f') {
					result = '闲 闲对';
					//	SoundManager.playSoundOnce('xianyingxiandui_mp3');
					color = 0x0c23c9;
				}
	
				if (type == 'g') {
					result = '闲 庄对';
					//SoundManager.playSoundOnce('xianyingzhuangdui_mp3');
					color = 0x0c23c9;
				}
	
				if (type == 'h') {
					result = '闲 闲对 庄对';
					//SoundManager.playSoundOnce('xianyingzhuangduixiandui_mp3');
					color = 0x0c23c9;
				}
				if (type == 'i') {
					result = '和';
					//SoundManager.playSoundOnce('heju_mp3');
					color = 0x0ca50b;
				}
	
				if (type == 'j') {
					result = '和 闲对';
					//SoundManager.playSoundOnce('hejuxiandui_mp3');
					color = 0x0ca50b;
				}
	
				if (type == 'k') {
					result = '和 庄对';
					//SoundManager.playSoundOnce('hejuzhuangdui_mp3');
					color = 0x0ca50b;
				}
	
				if (type == 'l') {
					result = '和 闲对 庄对';
					//	SoundManager.playSoundOnce('hejuzhuangduixiandui_mp3');
					color = 0x0ca50b;
				}
				return result;
			}
			//龙虎结果渲染
			function setLhResult(type) {
				var result = '';
				var color = null;
				if (type == 'a') {
					result = '龙';
					color = 0xea2215;
				}
				else if (type == 'c') {
					result = '虎';
					color = 0x0c23c9;
				}
				else if (type == 'b') {
					result = '和';
					color = 0x0ca50b;
				}
						
				return result;
				
			}
			
			function setNndata(txt) {
				const nnResult = {a: "牛1",b: "牛2",c: "牛3",d: "牛4",e: "牛5",f: "牛6",g: "牛7",h: "牛8",i: "牛9",j: "牛牛",k: "炸弹",l: "无牛"}
				if (txt == 'z') {
					return '作废';
				}
				var num = nnResult[txt];
				return num;
			}
			//豪华版
			function setHhNndata(txt) {
				const nnResult = {a: "1",b: "2",c: "3",d: "4",e: "5",f: "6",g: "7",h: "8",i: "9",j: "0",k: "13",l: "12"}
				if (txt == 'z') {
					return '作废';
				}
				var num = nnResult[txt];
				return num;
			}
	
				//显示结果
			function setNnresult(type) {
				if (type.indexOf('-') == -1) {
					return;
				}
				var dataarr =type.split("-");
				var result = '';
				if (dataarr[7] == '1') {
					result = '庄赢';
				} else {
					if (dataarr[4] == '1') {
						result += '闲1赢 ';
					}
					if (dataarr[5] == '1') {
						result += '闲2赢 ';
					}
					if (dataarr[6] == '1') {
						result += '闲3赢 ';
					}
				}
				return result;
			}
			
			function getZjhresult(type) {
				if (type.indexOf('-') == -1) {
					return;
				}
				var retarr =type.split("-");
				let px = converresult(retarr[1]);
				let px_val = converresult(retarr[2]);
				var ret = retarr[0];
				var result = '';
				if (ret == 'a') {
					result = '凤赢';
				} else if (ret == 'e') {
					result = '龙赢';
				} else if (ret == 'i') {
					result = '和';
				}
				const rMap = {'px':px,'result':result,'px_val':px_val,}
				return rMap;
			}
			function converresult(data) {
				switch (data.substring(0, 1)) {
					case 'A': return '豹子 ' + data.slice(1);
					case 'B': return '同花顺 ' + data.slice(1);
					case 'C': return '同花 ' + data.slice(1);
					case 'D': return '顺子 ' + data.slice(1);
					case 'E': return '对子 ' + data.slice(1);
					case 'F': return '散牌 ' + data.slice(1);
					case 'G': return '豹子杀手 ' + data.slice(1);
				}
			}
			//经典版 随机生成字符串
			 function randomString(len, charSet) {
			        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/';
			        var randomString = '';
			        for (var i = 0; i < len; i++) {
			            var randomPoz = Math.floor(Math.random() * charSet.length);
			            randomString += charSet.substring(randomPoz,randomPoz+1);
			        }
			        return randomString;
			    }
			//经典版 encrypt
			 function encryptJd(data){
				let data1 = base64ToEncrypt(JSON.stringify(data))
				let data2 = data1.substring(0, 8)
				let data3 = data1.substring(8)
				let add8 = data2 + randomString(8,'')
				let token = randomString(9,'') + add8 + data3
				return token;
				 
			 }
			 //
			 let CryptoJS = window.CryptoJS
			 let G_KP = {
					key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
					iv: '1234567890123456'
				  }
			 function tokenData(data) {
				// console.log(data , G_KP);
				var key = CryptoJS.enc.Utf8.parse(G_KP.key);
				var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);

				// var base64 = CryptoJS.enc.Base64.parse(data);
				// var src = CryptoJS.enc.Base64.stringify(base64);

				var decrypted = CryptoJS.AES.decrypt(data, key, {
				  iv: iv,
				  mode: CryptoJS.mode.CBC,
				  padding: CryptoJS.pad.Pkcs7,
				});
				//console.log("Decrypted Text ===========> ", decrypted);
				return decrypted.toString(CryptoJS.enc.Utf8);
			  }
			  
			 function encryptToken(data) {
			    var key = CryptoJS.enc.Utf8.parse(G_KP.key);
			    var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);
			    var encrypted = CryptoJS.AES.encrypt(data, key, {
			      iv: iv,
			      mode: CryptoJS.mode.CBC,
			      padding: CryptoJS.pad.Pkcs7,
			    });
			    return encrypted.toString();
			  }
			  
			  let G_KP_TX = {
				key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
				iv: '1234567890123456'
			  }
			  
			  function txData(data) {
					var key = CryptoJS.enc.Utf8.parse(G_KP_TX.key);
					var iv = CryptoJS.enc.Utf8.parse(G_KP_TX.iv);
					var decrypted = CryptoJS.AES.decrypt(data, key, {
					  iv: iv,
					  mode: CryptoJS.mode.CBC,
					  padding: CryptoJS.pad.Pkcs7,
					});
					//console.log("Decrypted Text ===========> ", decrypted);
					return decrypted.toString(CryptoJS.enc.Utf8);
			   }
			   function encryptTx(data) {
			      var key = CryptoJS.enc.Utf8.parse(G_KP_TX.key);
			      var iv = CryptoJS.enc.Utf8.parse(G_KP_TX.iv);
			      var encrypted = CryptoJS.AES.encrypt(data, key, {
			        iv: iv,
			        mode: CryptoJS.mode.CBC,
			        padding: CryptoJS.pad.Pkcs7,
			      });
			      return encrypted.toString();
			    }
			  
			  
						 
			 function base64ToEncrypt(data){
				 let  base64Str = '';
				 let wordArray = CryptoJS.enc.Utf8.parse(data);
				  base64Str = CryptoJS.enc.Base64.stringify(wordArray);
				 return base64Str;
			 }
			 //经典版 解析返回数据
			 function strJsonJd(str,sign){
				 var data = str.split(sign)
				 return data;
			 }
			 
			  //获取系统类型 
			  function systemType() {
			          var ua = window.navigator.userAgent.toLowerCase();
			          var microStr = "" + ua.match(/MicroMessenger/i);
			          if(("" + ua.match(/windows nt/i)) == "windows nt") {
			              return "windows";
			          } else if(("" + ua.match(/iphone/i)) == "iphone") {
			              return "h5";//苹果版h5
			          } else if(("" + ua.match(/android/i)) == "android") {
			              return "h5";//安卓版h5
			          } else if(("" + ua.match(/ipad/i)) == "ipad") {
			              return "ipad";
			          } else if(("" + ua.match(/linux/i)) == "linux") {
			              return "linux";
			          } else if(("" + ua.match(/mac/i)) == "mac") {
			              return "mac";
			          } else if(("" + ua.match(/ucbrower/i)) == "ucbrower") {
			              return "ucbrower";
			          } else {
			              console.log("未知系统类型");
			              return "h5"
			          }
			      }
				  
			
			function getBjlWin(key){
				switch (key) {
					case '1': return '庄';
					case '2': return '和';
					case '3': return '闲';
					case '4': return '庄对';
					case '5': return '闲对';
					case '6': return '大';
					case '7': return '小';
					default:return "";
					
				}
			}
			function getLhWin(key){
				switch (key) {
					case '1': return '龙';
					case '2': return '和';
					case '3': return '虎';
					case '4': return '龙单';
					case '5': return '龙双';
					case '6': return '虎单';
					case '7': return '虎双';
					default:return "";
					
				}
			}
			function getNnWin(key){
				switch (key) {
					case '1': return '庄1翻倍';
					case '2': return '闲1翻倍';
					case '3': return '庄1平倍';
					case '4': return '闲1平倍';
					case '5': return '庄2翻倍';
					case '6': return '闲2翻倍';
					case '7': return '庄2平倍';
					case '8': return '闲2平倍';
					case '9': return '庄3翻倍';
					case '10': return '闲3翻倍';
					case '11': return '庄3平倍';
					case '12': return '闲3平倍';
					default:return "";	
				}
			}
			
			function getBjJg(str){
				const jg = str.split("_")[0];
				const dx = str.split("_")[1];
				let jgStr = "";
				
				let dxStr = "大";
				if(dx=='2'){
					 dxStr = "小";
				}
				dxStr = "";//暂时取消大小
				switch (jg) {
					case 'a':  return '庄 '+dxStr;
					case 'b':  return '庄 闲对 '+dxStr;
					case 'c':  return '庄 庄对 '+dxStr;
					case 'd':  return '庄 闲对 庄对 '+dxStr;
					case 'e':  return '闲'+dxStr;
					case 'f':  return '闲 庄对 '+dxStr;
					case 'g':  return '闲 庄对 '+dxStr;
					case 'h':  return '闲 闲对 庄对 '+dxStr;
					case 'i':  return '和'+dxStr;
					case 'j':  return '和 闲对 '+dxStr;
					case 'k':  return '和 庄对 '+dxStr;
					case 'l':  return '和 闲对 庄对 '+dxStr;
				}
				
				
				
			 }
			 
			 function getLhJg(str){
				 if(str==null){
					 return "";
				 }
				 console.log(str)
			 	const jg = str.split("_")[0];
			 	const dx = str.split("_")[1];
			 	let  jgStr = "";
			 	let dxStr = "";
				
				if(jg=='a'){
					 jgStr = "龙";
				}else if(jg=='b'){
					jgStr = "和";
				}else if(jg=='c'){
					jgStr = "虎";
				}
				if(dx=='a'){
					 dxStr = "龙双虎双";
				}else if(dx=='b'){
					dxStr = "龙单虎单";
				}else if(dx=='c'){
					dxStr = "龙单虎双";
				}else if(dx=='d'){
					dxStr = "龙双虎单";
				}
			 	return jgStr+" "+dxStr;
			  }
		function getWlZps(lsjgs){
		    let zps = [];
		        let nzps:any = [];
		        let sixs:any = [];
		      	let lds:any = [];
		      	let result:any = '';
		      	let row:any = 0;
		      	let col:any = 0;
		      	let win:any = 0;
		      	let b_remain:any = 1;
		      	let p_remain :any= 1;
		      	let t_remain:any = 0;
		      	let ld_row:any = 0;
		      	let ld_col:any = 0;
		        let six_row:any = 0;
		        let six_col:any = 0;
		        let arr:any = [];
		        let isEnd:any = 0;
		        let isHave:any = 0;
		      	for(let n in lsjgs){
		          isEnd = 0;
		      		let zp:any  = {};
		          let nzp:any  = {};
		          let six:any  = {};
		      		let ludan:any = {};
		      		let lsjg:any = lsjgs[n];
		      		if (lsjg == 'a' || lsjg == 'b' || lsjg == 'c'|| lsjg == 'd') {
		      		//t_remain = 0;//清空和连赢 Clears and winning streaks
		      			if(win==2){
		              t_remain = 0;//清空和连赢
		      				col++;
		      				row = 1;
		
		      			}else if(win==1){
		              t_remain = 0;//清空和连赢/
		      				row++;
		
		      			}
		      			win = 1;
		      			zp.img= 100+t_remain;
		      			nzp.img=100+t_remain;
		            ludan.img = '100';
		            if(lsjg == 'b'){
		              ludan.img = '101';
		            }else if(lsjg == 'c'){
		              ludan.img = '110';
		            }else if(lsjg == 'd'){
		              ludan.img = '111';
		            }
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
		      			zp.img= 200+t_remain;
		      			nzp.img=200+t_remain;
		      			ludan.img = '200';
		            if(lsjg == 'f'){
		              ludan.img = '201';
		            }else if(lsjg == 'g'){
		              ludan.img = '210';
		            }else if(lsjg == 'h'){
		              ludan.img = '211';
		            }
		      		}
		      		if (lsjg == 'i' || lsjg == 'j'|| lsjg == 'k'|| lsjg == 'l') {
		      			if(t_remain<3){
		      				t_remain++;
		      			}
		      			if(win==2){//闲赢 free win
		      				zp.img= 200+t_remain;
		              nzp.img=200+t_remain;
		      			}else{
		      				win==1;
		      				zp.img= 100+t_remain;
		              nzp.img=100+t_remain;
		      			}
		      			ludan.img = '300';
		            if(lsjg == 'j'){
		              ludan.img = '301';
		            }else if(lsjg == 'k'){
		              ludan.img = '310';
		            }else if(lsjg == 'l'){
		              ludan.img = '311';
		            }
		      		}else{
		            t_remain=0;
		          }
		
		      		if(lsjg == 'z' ){
		
		      			ludan.img = '400';
		            continue;
		      		}
		      		if(row==0){
		      			row=1;
		      		}
		
		
		            if(ld_row%6==0){
		              ld_col++;
		              ld_row=0;
		            }
		            ld_row++;
		            ludan.row = ld_row;
		            ludan.col = ld_col;
		            arr.push(ludan);
		
		
		
		          if(row==1){
		            isHave = 0;
		          }
		
		
		          if(isHave>0){
		            let zpStr = zp.img+'';
		            if(zpStr.endsWith("0")){
		              isHave ++;
		            }
		
		          }
		          if(lsjg!='z'){
		            for(let z in zps){
		                if(zps[z].row==row && zps[z].col==col && t_remain==0){ //There are dewdrops below, go right//下面有露珠往右走
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
		
		
		              if(win>0){
		
		                // if(t_remain>0){
		
		                //   six_row = six_row-1;
		                // }
		
		                if(six_row%3==0){
		                  if(t_remain==0){
		                     six_col++;
		                      six_row=0;
		                  }
		
		
		                }
		                if(t_remain==0){
		                   six_row++;
		                }
		
		                six.row = six_row;
		                six.col = six_col-1;
		                six.img = zp.img;
		                sixs.push(six);
		              }
		
		           if(win>0){
		              zps.push(zp);
		              nzps.push(nzp);
		            }
		          }
		      }
		      return nzps;
		}
			  
function getLhWlZps(lsjgs){
		    let zps = [];
		        let nzps:any = [];
		        let sixs:any = [];
		      	let lds:any = [];
		      	let result:any = '';
		      	let row:any = 0;
		      	let col:any = 0;
		      	let win:any = 0;
		      	let b_remain:any = 1;
		      	let p_remain:any = 1;
		      	let t_remain:any = 0;
		      	let ld_row:any = 0;
		      	let ld_col:any = 0;
		        let six_row:any = 0;
		        let six_col:any = 0;
		        let arr:any = [];
		        let isEnd:any = 0;
		        let isHave:any = 0;
		      	for(let n in lsjgs){
		          isEnd = 0;
		      		let zp:any  = {};
		          let nzp:any  = {};
		          let six :any = {};
		      		let ludan :any= {};
		      		let lsjg:any = lsjgs[n];
		      		if (lsjg == 'a') {
		      		//t_remain = 0;//清空和连赢
		      			if(win==2){
		              t_remain = 0;//清空和连赢
		      				col++;
		      				row = 1;
		
		      			}else if(win==1){
		              t_remain = 0;//清空和连赢/
		      				row++;
		
		      			}
		      			win = 1;
		      			zp.img= 100+t_remain;
		      			nzp.img=100+t_remain;
		            ludan.img = '100';
		       
		      		}
		      		if (lsjg == 'c') {
		
		      			if(win==1){
		              t_remain = 0;//清空和连赢
		      				col++;
		      				row = 1;
		
		      			}else if(win==2){
		              t_remain = 0;//清空和连赢
		      				row++;
		
		      			}
		      			win = 2;
		      			zp.img= 200+t_remain;
		      			nzp.img=200+t_remain;
		      			ludan.img = '200';

		      		}
		      		if (lsjg == 'b') {
		      			if(t_remain<3){
		      				t_remain++;
		      			}
		      			if(win==2){//闲赢
		      				zp.img= 200+t_remain;
		              nzp.img=200+t_remain;
		      			}else{
		      				win==1;
		      				zp.img= 100+t_remain;
		              nzp.img=100+t_remain;
		      			}
		      			ludan.img = '300';
		           
		      		}else{
		            t_remain=0;
		          }
		
		      		if(lsjg == 'z' ){
		
		      			ludan.img = '400';
		            continue;
		      		}
		      		if(row==0){
		      			row=1;
		      		}
		
		
		            if(ld_row%6==0){
		              ld_col++;
		              ld_row=0;
		            }
		            ld_row++;
		            ludan.row = ld_row;
		            ludan.col = ld_col;
		            arr.push(ludan);
		
		
		
		          if(row==1){
		            isHave = 0;
		          }
		
		
		          if(isHave>0){
		            let zpStr = zp.img+'';
		            if(zpStr.endsWith("0")){
		              isHave ++;
		            }
		
		          }
		          if(lsjg!='z'){
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
		
		
		              if(win>0){
		
		                // if(t_remain>0){
		
		                //   six_row = six_row-1;
		                // }
		
		                if(six_row%3==0){
		                  if(t_remain==0){
		                     six_col++;
		                      six_row=0;
		                  }
		
		
		                }
		                if(t_remain==0){
		                   six_row++;
		                }
		
		                six.row = six_row;
		                six.col = six_col-1;
		                six.img = zp.img;
		                sixs.push(six);
		              }
		
		           if(win>0){
		              zps.push(zp);
		              nzps.push(nzp);
		            }
		          }
		      }
		      return nzps;
		}
		function getLz(daluArr:any){
		   let n = 0;
		   let count = 0;
		   let dls:any = [];
		
		   for(let dalu in daluArr){
		   	let item = daluArr[dalu];
		     let str = item.img+"";
		     str = str.substring(str.length-1);
		       if (item.col == n){
		           count = item.row
		       }else {
		           dls.push(count);
		           count = item.row
		           n++;
		       }
		
		   	if (dalu== daluArr.length-1) {
		   	    dls.push(count);
		   	}
		   }
		
		
		   let v ;//1红 2蓝 1 red 2 blue
		   let latV:any = -1;
		   let dyCol:any = 0;
		   let dyTCol:any = 0;
		   let dyRow:any = 0;
		   let dys:any = [];
		   let xys:any = [];
		   let xqs:any = [];
		   for (let x=0;x<dls.length;x++) {
		  let isHave = 0;
		   	if (x == 0){
		
		   	}//第1行不做处理 Line 1 is not processed
		   	else if (x == 1 && dls[x] > 1){//第二行并且第二行第二粒有数据 The second row and the second grain in the second row have data
		
		   		 for (let y = 0; y < dls[x]; y++){
		   			if (y != 0){
		   				if (dls[0] >= y+1){ //有对画红 There are pairs of painted red
		   					v = 1;
		   				}else{ //无对画蓝、齐脚跳画红、突脚跳画蓝、突脚连画红
						//Draw blue for no pairs, draw red for jumping with one foot, draw blue for jumping with protruding feet, 
						//and draw red for protruding feet.
		   					v = 2;
		   				}
		
		           if(y>1){
		             if (dls[x - 1] >= y+1)
		             { //有对画红 There are pairs of painted red
		             	v = 1;
		             }
		             else
		             { //无对画蓝  No pair of painted blue
		             	v = 2;
		             }
		
		             if((y+1)-dls[x - 1]>1){
		               v = 1;
		             }
		           }
		
		   				//大眼 tlpDy big eyes
		   				if (latV!=-1) {
		   					if (latV != v){
		   						dyCol++;
		   						dyRow = 0;
		   					}
		   					else{
		   						dyRow++;
		   					}
		   				}
		   				const dy:any = {};
		   				dy.img = v;
		   				if(dyRow>4){
		   					dy.row =  dyRow-(dyRow-5);
		   					dy.col =dyCol+(dyRow-5);
		   				}else{
		   					dy.col =dyCol;
		   					dy.row = dyRow;
		   				}
		   				dys.push(dy);
		   				latV = v;
		   			}
		   		}
		   	}
		   	else if (x > 1){//三行 three lines
		   		for (let y = 0; y < dls[x]; y++){
		   			if (y == 0){
		   				if (dls[x - 2] == dls[x - 1]){//、齐脚跳画红 Jumping together and painting red
		   					v = 1;
		   				}else{ //、突脚跳画蓝 Jumping to draw blue
		   					v = 2;
		   				}
		   				if (latV != -1){
		   					if (latV != v){
		   						dyCol++;
		   						dyRow = 0;
		   					}else{
		   						dyRow++;
		   					}
		   				}
		   				const dy:any = {};
		   				dy.img = v;
		   				if(dyRow>4){
		   					dy.row =  dyRow-(dyRow-5);
		   					dy.col =dyCol+(dyRow-5);
		   				}else{
		   					dy.col =dyCol;
		   					dy.row = dyRow;
		   				}
		   				dys.push(dy);
		   				latV = v;
		   			}
		   			else if (y != 0)
		   			{
		   				if (dls[x - 1] >= y+1)
		   				{ //有对画红 There are pairs of painted red
		             v = 1;
		   				}
		   				else
		   				{ //无对画蓝 No pair of painted blue
		   					v = 2;
		   				}
		
		           if((y+1)-dls[x - 1]>1){
		             v = 1;
		           }
		   				//大眼 tlpDy
		   				if (latV != -1)
		   				{
		   					if (latV != v)
		   					{
		   						dyCol++;
		   						dyRow = 0;
		   					}
		   					else
		   					{
		   						dyRow++;
		   					}
		   				}
		   			   const dy:any = {};
		   			   dy.img = v;
		   			  if(dyRow==0){
		   			    isHave = 0;
		   			  }
		   			  if(isHave>0){
		   			    isHave ++;
		   			  }
		   			  for(let z in dys){
		   			      if(dys[z].row==dyRow && dys[z].col==dyCol){ //下面有露珠往右走 There are dewdrops below, go right
		   			           isHave=isHave==0?1:isHave;
		   			      }
		   			  }
		   			  if(isHave>0){
		   			     dy.row = dyRow-isHave;
		   			     dy.col = dyCol+isHave;
		   			  }else{
		   			    if(dyRow>4){
		   			    	dy.row =  dyRow-(dyRow-5);
		   			    	dy.col =dyCol+(dyRow-5);
		   			    }else{
		   			    	dy.col =dyCol;
		   			    	dy.row = dyRow;
		   			    }
		   			  }
		   			   dys.push(dy);
		   				latV = v;
		   			}
		   		}
		   	}
		   }

		   latV = -1;
		    dyCol = 0;
		    dyTCol = 0;
		    dyRow = 0;
		   for (let x=0;x<dls.length;x++) {
		      let isHave = 0;
		   	if (x == 0){
		
		   	}//第1行不做处理 Line 1 is not processed
		   	else if (x == 2 && dls[x] > 1){//第二行并且第二行第二粒有数据 The second row and the second grain in the second row have data
		   		 for (let y = 0; y < dls[x]; y++){
		   			if (y != 0){
		   				if (dls[0] >= y+1){ //有对画红 There are pairs of painted red
		   					v = 1;
		   				}else{ //无对画蓝、齐脚跳画红、突脚跳画蓝、突脚连画红
						//Draw blue for no pairs, draw red for jumping with one foot, draw blue for jumping with protruding feet, 
						//and draw red for protruding feet.
		   					v = 2;
		   				}
		
		           if(y>1){
		             if (dls[x - 2] >= y+1)
		             { //有对画红 There are pairs of painted red
		             	v = 1;
		             }
		             else
		             { //无对画蓝 No pair of painted blue
		             	v = 2;
		             }
		
		             if((y+1)-dls[x - 2]>1){
		               v = 1;
		             }
		           }
		
		   				//大眼 tlpDy
		   				if (latV!=-1) {
		   					if (latV != v){
		   						dyCol++;
		   						dyRow = 0;
		   					}
		   					else{
		   						dyRow++;
		
		   					}
		   				}
		
		   				const dy:any = {};
		   				dy.img = v;
		   				if(dyRow>4){
		   					dy.row =  dyRow-(dyRow-5);
		   					dy.col =dyCol+(dyRow-5);
		   				}else{
		   					dy.col =dyCol;
		   					dy.row = dyRow;
		   				}
		   				xys.push(dy);
		   				latV = v;
		   			}
		   		}
		   	}
		   	else if (x > 2){//三行 three lines
		   		for (let y = 0; y < dls[x]; y++){
		   			if (y == 0)
		   			{
		   				if (dls[x - 3] == dls[x - 1])
		   				{//、齐脚跳画红 Jumping together and painting red
		   					v = 1;
		   				}
		   				else
		   				{ //、突脚跳画蓝 Jumping to draw blue
		   					v = 2;
		   				}
		   				if (latV != -1)
		   				{
		   					if (latV != v)
		   					{
		   						dyCol++;
		   						dyRow = 0;
		   					}
		   					else
		   					{
		   						dyRow++;
		
		   					}
		   				}
		   				const dy:any = {};
		   				dy.img = v;
		   				if(dyRow>4){
		   					dy.row =  dyRow-(dyRow-5);
		   					dy.col =dyCol+(dyRow-5);
		   				}else{
		   					dy.col =dyCol;
		   					dy.row = dyRow;
		   				}
		   				xys.push(dy);
		   				latV = v;
		   			}
		   			else if (y != 0)
		   			{
		   				if (dls[x - 2] >= y+1)
		   				{ //有对画红
		   					v = 1;
		   				}
		   				else
		   				{ //无对画蓝
		   					v = 2;
		   				}
		
		           if((y+1)-dls[x - 2]>1){
		             v = 1;
		           }
		   				//大眼 tlpDy
		   				if (latV != -1)
		   				{
		   					if (latV != v)
		   					{
		   						dyCol++;
		   						dyRow = 0;
		   					}
		   					else
		   					{
		   						dyRow++;
		
		   					}
		   				}
		   			   const dy:any = {};
		   			   dy.img =v;
		
		          if(dyRow==1){
		            isHave = 0;
		          }
		          if(isHave>0){
		            isHave ++;
		          }
		          for(let z in xys){
		              if(xys[z].row==dyRow && xys[z].col==dyCol){ //下面有露珠往右走
		                   isHave=isHave==0?1:isHave;
		              }
		          }
		          if(isHave>0){
		             dy.row = dyRow-isHave;
		             dy.col = dyCol+isHave;
		          }else{
		            if(dyRow>4){
		            	dy.row =  dyRow-(dyRow-5);
		            	dy.col =dyCol+(dyRow-5);
		            }else{
		            	dy.col =dyCol;
		            	dy.row = dyRow;
		            }
		          }
		
		   			   xys.push(dy);
		   				latV = v;
		
		   			}
		   		}
		   	}
		   	//问路
		   }
		   latV = -1;
		    dyCol = 0;
		    dyTCol = 0;
		    dyRow = 0;
		   for (let x=0;x<dls.length;x++) {
		      let isHave = 0;
		   	if (x == 0){
		   	}//第1行不做处理
		   	else if (x == 3 && dls[x] > 1){//第四列并且第二粒有数据
		   		 for (let y = 0; y < dls[x]; y++){
		   			if (y != 0){
		   				if (dls[0] >= y+1){ //有对画红
		   					v = 1;
		   				}else{ //无对画蓝、齐脚跳画红、突脚跳画蓝、突脚连画红
		   					v = 2;
		   				}
		
		           if((y+1)-dls[x - 3]>1){
		             v = 1;
		           }
		
		   				//大眼 tlpDy
		   				if (latV!=-1) {
		   					if (latV != v){
		   						dyCol++;
		   						dyRow = 0;
		   					}
		   					else{
		   						dyRow++;
		
		   					}
		   				}
		   				const dy:any = {};
		   				dy.img = v;
		   				if(dyRow>4){
		   					dy.row =  dyRow-(dyRow-5);
		   					dy.col =dyCol+(dyRow-5);
		   				}else{
		   					dy.col =dyCol;
		   					dy.row = dyRow;
		   				}
		   				xqs.push(dy);
		   				latV = v;
		   			}
		   		}
		   	}
		   	else if (x > 3){//三行
		   		for (let y = 0; y < dls[x]; y++){
		   			if (y == 0)
		   			{
		   				if (dls[x - 4] == dls[x - 1])
		   				{//、齐脚跳画红
		   					v = 1;
		   				}
		   				else
		   				{ //、突脚跳画蓝
		   					v = 2;
		   				}
		   				if (latV != -1)
		   				{
		   					if (latV != v)
		   					{
		   						dyCol++;
		   						dyRow = 0;
		   					}
		   					else
		   					{
		   						dyRow++;
		
		   					}
		   				}
		   				const dy:any = {};
		   				dy.img = v;
		   				if(dyRow>4){
		   					dy.row =  dyRow-(dyRow-5);
		   					dy.col =dyCol+(dyRow-5);
		   				}else{
		   					dy.col =dyCol;
		   					dy.row = dyRow;
		   				}
		   				xqs.push(dy);
		   				latV = v;
		   			}
		   			else if (y != 0)
		   			{
		   				if (dls[x - 3] >= y+1)
		   				{ //有对画红
		   					v = 1;
		   				}
		   				else
		   				{ //无对画蓝
		   					v = 2;
		   				}
		
		
		           if((y+1)-dls[x - 3]>1){
		             v = 1;
		           }
		   				//大眼 tlpDy
		   				if (latV != -1)
		   				{
		   					if (latV != v)
		   					{
		   						dyCol++;
		   						dyRow = 0;
		   					}
		   					else
		   					{
		   						dyRow++;
		
		   					}
		   				}
		   			   const dy:any = {};
		   			   dy.img = v;
		   			  if(dyRow==1){
		   			    isHave = 0;
		   			  }
		   			  if(isHave>0){
		   			    isHave ++;
		   			  }
		   			  for(let z in xqs){
		   			      if(xqs[z].row==dyRow && xqs[z].col==dyCol){ //下面有露珠往右走
		   			           isHave=isHave==0?1:isHave;
		   			      }
		   			  }
		   			  if(isHave>0){
		   			     dy.row = dyRow-isHave;
		   			     dy.col = dyCol+isHave;
		   			  }else{
		   			    if(dyRow>4){
		   			    	dy.row =  dyRow-(dyRow-5);
		   			    	dy.col =dyCol+(dyRow-5);
		   			    }else{
		   			    	dy.col =dyCol;
		   			    	dy.row = dyRow;
		   			    }
		   			  }
		   			   xqs.push(dy);
		   			latV = v;
		   			}
		   		}
		   	}
		   }
		   const room:any = {};
		   room.dys = dys;
		   room.xys = xys;
		   room.xqs = xqs;
		   return room;
		 }
		 
		 
		 function setBjlData(roomStr){//房间信息		
				let room:any = {};
				room.chipIndex = 1;
				room.chipImgs = [];
				room.bCard= [];
				room.pCard= [];
				room.pCount = '0';
				room.bCount = '0';
				room.isVip = roomStr[19];
				room.desk = roomStr[0];
				
				console.log(roomStr)
				let xzs:any = [];
				if(roomStr[10]){
					xzs = roomStr[10].split('$');
				}
				 
				const betTypes = ['z','x','h','zd','xd','big','small'];
				room.zcMoney=0,room.hcMoney=0,room.xcMoney=0,room.zdcMoney=0,room.xdcMoney=0;
				room.zMoney=0,room.hMoney=0,room.xMoney=0,room.zdMoney=0,room.xdMoney=0;
				for(let xz in xzs){
					const item = xzs[xz].split('^');
					if(item[0]=='1'){
						room.zcMoney = Number(item[1]);
					}else if(item[0]=='2'){
						room.hcMoney = Number(item[1]);
					}else if(item[0]=='3'){
						room.xcMoney = Number(item[1]);
					}else if(item[0]=='4'){
						room.zdcMoney = Number(item[1]);
					}else if(item[0]=='5'){
						room.xdMoney = Number(item[1]);
					}
				}
		 			room.chipImgs = getChipByMoney(room,'bjl');	
	
		 				//this.getChipByMoney1();
		 				room.xh = roomStr[1];
		 				room.cc = roomStr[7];
		 				room.xueh = roomStr[7].split("-")[0];
		 				room.juh = roomStr[7].split("-")[1];
		 				room.name = roomStr[12];
		 				room.lsjg = roomStr[5];
		 				room.djs = roomStr[4];
		 				room.zt = roomStr[3];
		 				room.pl = roomStr[14].split(":");
		 				if(room.zt=='1'){
		 					room.ztText = '下注中';
		 					//that.gamedata.djs = room.djs;
		 					//this.djsStart();
		 				}else if(room.zt=='2'){
		 					room.ztText = '停止下注';
		 				}else if(room.zt=='3'){
		 					room.ztText = '结算中';
		 					room.showResulta = true;
		 				}else {
		 					room.yl = 0 ;
		 					room.ztText = '洗牌中';
		 				}
		 				room.liveAddress = roomStr[13].split("*")[0];
		 				room.liveAddress = room.liveAddress.replaceAll("rtmp","http")+".flv";
		 				room.onlinenum =  roomStr[6];
		 				room.lsjg = room.lsjg.split("^")
		 				let zps:any = [];
		 				let nzps:any = [];
		 				let lds:any = [];
		 				let newLds = [];
		 				let result = '';
		 				let row:any = 0;
		 				let col:any = 0;
		 				let win:any = 0;
		 				let b_remain:any = 1;
		 				let p_remain:any = 1;
		 				let t_remain :any= 0;
		 				let ld_row:any = 0;
		 				let ld_col:any = 0;
		 				let z:any = 0;
		 				let zd:any = 0;
		 				let x :any= 0;
		 				let xd :any= 0;
		 				let h :any= 0;
		 				//问路
		 				let wlZps = getWlZps(room.lsjg+"a");//如果开庄
		 				const wlLzs= getLz(wlZps);
		 				let xqsWlArr = wlLzs.xqs;
		 				let xysWlArr = wlLzs.xys;
		 				let dysWlArr = wlLzs.dys;
		 		
		 				if(xqsWlArr && xqsWlArr.length>0){
		 				  const wlResult =  (xqsWlArr[xqsWlArr.length-1]).img;
		 				
		 				 if(wlResult=="1"){
		 				  room.wxq = "1";
		 				  room.wxqa = "2";
		 				 }else{
		 				   room.wxq = "2";
		 				   room.wxqa = "1";
		 				 }
		 				}
		 				
		 				if(xysWlArr && xysWlArr.length>0){
		 				  const wlResult =  (xysWlArr[xysWlArr.length-1]).img;
		 				  if(wlResult=="1"){
		 				   room.wxy = "1";
		 				   room.wxya = "2";
		 				  }else{
		 				    room.wxy = "2";
		 				    room.wxya = "1";
		 				  }
		 				}
		 				
		 				if(dysWlArr && dysWlArr.length>0){
		 				  const wlResult =  (dysWlArr[dysWlArr.length-1]).img;
		 				
		 				  if(wlResult=="1"){
		 				   room.wdy = "1";
		 				   room.wdya = "2";
		 				  }else{
		 				    room.wdy = "2";
		 				    room.wdya = "1";
		 				  }
		 				}
		 				
		 				let isHave = 0;
		 				for(let n in room.lsjg){ 
		 					let zp:any  = {};
		 					let six:any  = {};
		 					let nzp:any  = {};
		 					let ludan:any = {};
		 					
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
		 					let six:any = {};
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
		 				return room;
		 				
		 			}
		function setLhData(roomStr){//房间信息 room information
			let room:any = {};
			room.chipIndex = 1;
			room.chipImgs = [];
			room.pks= [];
			room.pCount = '0';
			room.bCount = '0';
			room.isVip = roomStr[19];//1.点击  2.三合一 Click 2. Three-in-one
			room.desk = roomStr[0];
			const xzs = roomStr[10].split('$');
			const betTypes = ['z','x','h','ld','hd','ls','hs'];
		
		room.zcMoney=0,room.hcMoney=0,room.xcMoney=0,room.ldcMoney=0,room.lscMoney=0,room.hdcMoney=0,room.hscMoney=0;
		room.zMoney=0,room.hMoney=0,room.xMoney=0,room.ldMoney=0,room.hdMoney=0,room.lsMoney=0,room.hsMoney=0;
		for(let xz in xzs){
			const item = xzs[xz].split('^');
			if(item[0]=='1'){
				room.zcMoney = Number(item[1]);
			}else if(item[0]=='2'){
				room.hcMoney = Number(item[1]);
			}else if(item[0]=='3'){
				room.xcMoney = Number(item[1]);
			}else if(item[0]=='4'){
				room.ldcMoney = Number(item[1]);
			}else if(item[0]=='5'){
				room.lscMoney =Number(item[1]);
			}else if(item[0]=='6'){
				room.hdcMoney = Number(item[1]);
			}else if(item[0]=='7'){
				room.hscMoney = Number(item[1]);
			}
		}
			room.chipImgs = getChipByMoney(room,'lh');
		
			//this.getChipByMoney1();
			
			room.xh = roomStr[1];
			room.cc = roomStr[7];
			room.xueh = roomStr[7].split("-")[0];
			room.juh = roomStr[7].split("-")[1];
			room.name = roomStr[12];
			room.lsjg = roomStr[5];
			room.djs = roomStr[4];
			room.zt = roomStr[3];
			room.pl = roomStr[14].split(":");
			if(room.zt=='1'){
				room.ztText = '下注中';
				// that.gamedata.djs = room.djs;
				// this.djsStart();
			}else if(room.zt=='2'){
				room.ztText = '停止下注';
			}else if(room.zt=='3'){
				room.ztText = '结算中';
				room.showResulta = true;
			}else {
				room.yl = 0 ;
				room.ztText = '洗牌中';
			}
			room.liveAddress = roomStr[13].split("*")[0];
			room.liveAddress = room.liveAddress.replaceAll("rtmp","http")+".flv";
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
			let l = 0;
			let fu = 0;
			let h = 0;
			
		//问路
		let wlZps = getLhWlZps(room.lsjg+"a");//如果开庄
		const wlLzs= getLz(wlZps);
		let xqsWlArr = wlLzs.xqs;
		let xysWlArr = wlLzs.xys;
		let dysWlArr = wlLzs.dys;
		
		if(xqsWlArr && xqsWlArr.length>0){
		  const wlResult =  (xqsWlArr[xqsWlArr.length-1]).img;
		 
		 if(wlResult=="1"){
		  room.wxq = "1";
		  room.wxqa = "2";
		 }else{
		   room.wxq = "2";
		   room.wxqa = "1";
		 }
		}
		
		if(xysWlArr && xysWlArr.length>0){
		  const wlResult =  (xysWlArr[xysWlArr.length-1]).img;
		  if(wlResult=="1"){
		   room.wxy = "1";
		   room.wxya = "2";
		  }else{
		    room.wxy = "2";
		    room.wxya = "1";
		  }
		}
		
		if(dysWlArr && dysWlArr.length>0){
		  const wlResult =  (dysWlArr[dysWlArr.length-1]).img;
		
		  if(wlResult=="1"){
		   room.wdy = "1";
		   room.wdya = "2";
		  }else{
		    room.wdy = "2";
		    room.wdya = "1";
		  }
		}
		let isHave = 0;
			for(let n in room.lsjg){
				let zp:any  = {};
				let nzp:any  = {};
				let ludan:any  = {};
				let lsjg = room.lsjg[n];
				if (lsjg == 'a' ) {
					l++;
					
					if(win==2){
						t_remain = 0;//清空和连赢
						col++;
						row = 1;
					}else if(win==1){
						t_remain = 0;//清空和连赢
						row++;
					}
					win = 1; 
					zp.img= 'dl1_0';
					nzp.img= 'dl1_0';
					ludan.img = 'ludan_a';
				}
				if (lsjg == 'c') {
					fu++;
					
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
					nzp.img=  'dl2_0';
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
				if(lsjg!='z'){
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
			
			let sixs:any  = [];
			let six_row:any  = 0;
			let six_col:any  = 0;
			for(let x in zps){
				const zstr = zps[x];
				const ztimg = zstr.img;
				if(ztimg && ztimg!=''){
					if(ztimg.split("_")[1]!='0' && six_row>0){
						six_row--;
					}
				}
				if(six_row>2){
					six_col++;
					six_row=0;
				}
				let six:any  = {};
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
			room.jgzj = [l,fu,h];
			return room;
		}
		function setNnDtData(roomStr){//房间信息	room information
			let room :any = {};
			room.chipIndex = 1;
			room.chipImgs = [];
			room.desk = roomStr[0];
			room.pks = [];
			room.dwp = "";
			room.zResult = "";
			room.x1Result = "";
			room.x2Result = "";
			room.x3Result = "";
			const xzs = roomStr[10].split('$');
			const betTypes = ['z1f','z1p','z2f','z2p','z3f','z3p','x1f','x1p','x2f','x2p','x3f','x3p'];
			
			room.z1fcMoney=0,room.z2fcMoney=0,room.z3fcMoney=0,room.z1pcMoney=0,room.z2pcMoney=0,room.z3pcMoney=0;
			room.x1fcMoney=0,room.x2fcMoney=0,room.x3fcMoney=0,room.x1pcMoney=0,room.x2pcMoney=0,room.x3pcMoney=0;
			
			room.z1fMoney=0,room.z2fMoney=0,room.z3fMoney=0,room.z1pMoney=0,room.z2pMoney=0,room.z3pMoney=0;
			room.x1fMoney=0,room.x2fMoney=0,room.x3fMoney=0,room.x1pMoney=0,room.x2pMoney=0,room.x3pMoney=0;
			
			for(let xz in xzs){
				const item = xzs[xz].split('^');
				if(item[0]=='1'){
					room.z1fcMoney = Number(item[1]);
				}else if(item[0]=='2'){
					room.x1fcMoney = Number(item[1]);
				}else if(item[0]=='3'){
					room.z1pcMoney = Number(item[1]);
				}else if(item[0]=='4'){
					room.x1pcMoney = Number(item[1]);
				}else if(item[0]=='5'){
					room.z2fcMoney = Number(item[1]);
				}else if(item[0]=='6'){
					room.x2fcMoney = Number(item[1]);
				}else if(item[0]=='7'){
					room.z2pcMoney = Number(item[1]);
				}else if(item[0]=='8'){
					room.x2pcMoney = Number(item[1]);
				}else if(item[0]=='9'){
					room.z3fcMoney = Number(item[1]);
				}else if(item[0]=='10'){
					room.x3fcMoney = Number(item[1]);
				}else if(item[0]=='11'){
					room.z3pcMoney = Number(item[1]);
				}else if(item[0]=='12'){
					room.x3pcMoney = Number(item[1]);
				}
			}
			
			room.chipImgs = getChipByMoney(room,'nn');
			room.xh = roomStr[1];
			room.cc = roomStr[7];
			room.xueh = roomStr[7].split("-")[0];
			room.juh = roomStr[7].split("-")[1];
			room.name = roomStr[12];
			room.lsjg = roomStr[5];
			room.djs = roomStr[4];
			room.zt = roomStr[3];
			room.pl = roomStr[14].split(":");
			if(room.zt=='1'){
				room.ztText = '下注中';
				// that.gamedata.djs = room.djs;
				// this.djsStart();
			}else if(room.zt=='2'){
				room.ztText = '停止下注';
			}else if(room.zt=='3'){
				room.ztText = '结算中';
				room.showResulta = true;
			}else {
				room.yl = 0 ;
				room.ztText = '洗牌中';
			}

			room.liveAddress = roomStr[13].split("*")[0];
			room.liveAddress = room.liveAddress.replaceAll("rtmp","http")+".flv";
		
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
			let zd = 0;
			let x = 0;
			let xd = 0;
			let h = 0;
		
				//cblb-000,cfll-100,ljll-100,lelg-101,------
				const ludans = room.lsjg;
				
				let zs = [];
				let x1s = [];
				let x2s = [];
				let x3s = [];
		
				let zn = 0;
				let xn = 0;
				let hn = 0;
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
					if(lsjg[5]=='1'){
						zn++;
					}
					if(lsjg[6]=='1'){
						xn++;
					}
					if(lsjg[7]=='1'){
						hn++;
					}
					zs.push(z_c);
					x1s.push(x1);
					x2s.push(x2);
					x3s.push(x3);
				}
				
				
			room.nnjgzj = [zn,xn,hn];
			room.zs = zs.splice(-8, 8);
			room.x1s = x1s.splice(-8, 8);
			room.x2s = x2s.splice(-8, 8);
			room.x3s = x3s.splice(-8, 8);
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
			return room;	
		}
		
			function getChipByMoney(item,rtype){
				const chipList =  [
					{
						img: '/static/images/chip/10.png',
						number: 10,
					},
					{
						img: '/static/images/chip/20.png',
						number: 20,
						isShow:true,
					}, {
						img: '/static/images/chip/50.png',
						number: 50,
						isShow:true,
					}, {
						img: '/static/images/chip/100.png',
						number: 100,
						isShow:true,
					}, {
						img: '/static/images/chip/500.png',
						number: 500,
						isShow:true,
					}, {
						img: '/static/images/chip/1000.png',
						number: 1000,
						isShow:true,
					}, {
						img: '/static/images/chip/5000.png',
						number: 5000,
						isShow:true,
					}, {
						img: '/static/images/chip/10000.png',
						number: 10000,
						isShow:true,
					}
				];
				let chipImgs = {};
				let list = ['z','x','h','zd','xd'];
				if(rtype=='lh'){
					list = ['z','x','h','ld','hd','ls','hs']
				}else if(rtype=='nn'){
					list =  ['z1f','z1p','z2f','z2p','z3f','z3p','x1f','x1p','x2f','x2p','x3f','x3p']
				}
				for(let i in list){
					const type = list[i];
					let money = Number( item[type+'Money'] )+Number( item[type+'cMoney'] );
					let chipArr = [];
					if(money>=10000){
						money = money%10000;
						chipArr.push(chipList[7].img)
					}
					if(money>=5000){
						money = money%5000;
						chipArr.push(chipList[6].img)
					}
					if(money>=1000){
						money = money%1000;
						chipArr.push(chipList[5].img)
					}
					if(money>=500){
						money = money%500;
						chipArr.push(chipList[4].img)
					}
					if(money>=100){
						money = money%100;
						chipArr.push(chipList[3].img)
					}
					if(money>=50){
						money = money%50;
						chipArr.push(chipList[2].img)
					}
					if(money>=20){
						money = money%20;
						chipArr.push(chipList[1].img)
					}
					if(money>=10){
						money = money%10;
						chipArr.push(chipList[0].img)
					}
					chipImgs[type+"ChipList"] = chipArr;
				}
				return chipImgs;
			}
		
		
			
			
export  {setHhNndata,setBjlData,setLhData,setNnDtData,getLz,encryptTx,txData,tokenData,encryptToken,getBjlWin,getLhWin,getNnWin,systemType,strJsonJd,encryptJd,hxdm,encrypt_data,encrypt,decrypt_data,getKey,gameType,getbetresult,getxzmx,getstatus,setresult,setLhResult,setNndata,setNnresult,getZjhresult,getBjJg,getLhJg,getWlZps,getLhWlZps}