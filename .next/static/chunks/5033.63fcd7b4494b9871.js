(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5033,8848,833],{1482:function(t,n,e){"use strict";e.d(n,{v:function(){return a}});var i=e(45624),r=e(77191),o=e.n(r);class a extends i.J5{async authenticateUser(){var t;if(!this.provider||null===(t=this.chainConfig)||void 0===t||!t.chainId)throw i.RM.notConnectedError();const{chainNamespace:n,chainId:e}=this.chainConfig;if(this.status!==i.MP.CONNECTED)throw i.RM.notConnectedError("Not connected with wallet, Please login/connect first");const r=await this.provider.request({method:"getAccounts"});if(r&&r.length>0){const t=(0,i.Cb)(r[0],this.name);if(t){if(!(0,i.$E)(t))return{idToken:t}}const a={domain:window.location.origin,uri:window.location.href,address:r[0],chainId:parseInt(e,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:(new Date).toISOString()},s=await(0,i.tV)(a,n),h=(new TextEncoder).encode(s),c=await this.provider.request({method:"signMessage",params:{message:h,display:"utf8"}}),l=await(0,i.rn)(n,o().encode(c),s,this.name,this.sessionTime);return(0,i.Fr)(r[0],this.name,l),{idToken:l}}throw i.RM.notConnectedError("Not connected with wallet, Please login/connect first")}async disconnect(){if(this.status!==i.MP.CONNECTED)throw i.RM.disconnectionError("Not connected with wallet");const t=await this.provider.request({method:"getAccounts"});t&&t.length>0&&(0,i.qz)(t[0],this.name)}}},42848:function(t,n,e){"use strict";e.r(n),e.d(n,{PhantomAdapter:function(){return h}});var i=e(4942),r=e(45624),o=e(1482),a=e(44445);function s(t,n,e){return new Promise(((i,r)=>{e>0?setTimeout((async()=>{const o=await t();o&&i(o),o||s(t,n,e-1).then((t=>(i(t),t))).catch((t=>r(t)))}),n):i(!1)}))}class h extends o.v{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),(0,i.Z)(this,"name",r.rW.PHANTOM),(0,i.Z)(this,"adapterNamespace",r.yk.SOLANA),(0,i.Z)(this,"currentChainNamespace",r.EN.SOLANA),(0,i.Z)(this,"type",r.hN.EXTERNAL),(0,i.Z)(this,"status",r.MP.NOT_READY),(0,i.Z)(this,"_wallet",null),(0,i.Z)(this,"phantomProvider",null),(0,i.Z)(this,"rehydrated",!1),(0,i.Z)(this,"_onDisconnect",(()=>{this._wallet&&(this._wallet.off("disconnect",this._onDisconnect),this.rehydrated=!1,this.status=this.status===r.MP.CONNECTED?r.MP.READY:r.MP.NOT_READY,this.emit(r.n2.DISCONNECTED))})),this.chainConfig=t.chainConfig||null,this.sessionTime=t.sessionTime||86400}get isWalletConnected(){var t;return!(null===(t=this._wallet)||void 0===t||!t.isConnected||this.status!==r.MP.CONNECTED)}get provider(){var t;return(null===(t=this.phantomProvider)||void 0===t?void 0:t.provider)||null}set provider(t){throw new Error("Not implemented")}setAdapterSettings(t){this.status!==r.MP.READY&&null!==t&&void 0!==t&&t.sessionTime&&(this.sessionTime=t.sessionTime)}async init(t){if(super.checkInitializationRequirements(),this.chainConfig||(this.chainConfig=(0,r.h2)(r.EN.SOLANA,"0x1")),this._wallet=await async function(){var t;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{interval:1e3,count:3};if("undefined"!==typeof window&&null!==(t=window.solana)&&void 0!==t&&t.isPhantom)return window.solana;return await s((()=>{var t;return null===(t=window.solana)||void 0===t?void 0:t.isPhantom}),n.interval,n.count)?window.solana:null}({interval:500,count:3}),!this._wallet)throw r.Ty.notInstalled();this.phantomProvider=new a.PhantomInjectedProvider({config:{chainConfig:this.chainConfig}}),this.status=r.MP.READY,this.emit(r.n2.READY,r.rW.PHANTOM);try{r.cM.debug("initializing phantom adapter"),t.autoConnect&&(this.rehydrated=!0,await this.connect())}catch(n){r.cM.error("Failed to connect with cached phantom provider",n),this.emit("ERRORED",n)}}async connect(){var t=this;try{if(super.checkConnectionRequirements(),this.status=r.MP.CONNECTING,this.emit(r.n2.CONNECTING,{adapter:r.rW.PHANTOM}),!this._wallet)throw r.Ty.notInstalled();if(this._wallet.isConnected)await this.connectWithProvider(this._wallet);else{const e=this._wallet._handleDisconnect;try{await new Promise(((n,i)=>{if(!this._wallet)return i(r.Ty.notInstalled());this._wallet.once("connect",(async()=>{await this.connectWithProvider(this._wallet),n(this.provider)})),this._wallet._handleDisconnect=function(){i(r.Ty.windowClosed());for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e.apply(t._wallet,o)},this._wallet.connect().catch((t=>{i(t)}))}))}catch(n){if(n instanceof r.up)throw n;throw r.RM.connectionError(null===n||void 0===n?void 0:n.message)}finally{this._wallet._handleDisconnect=e}}if(!this._wallet.publicKey)throw r.RM.connectionError();return this._wallet.on("disconnect",this._onDisconnect),this.provider}catch(n){throw this.status=r.MP.READY,this.rehydrated=!1,this.emit(r.n2.ERRORED,n),n}}async disconnect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};await super.disconnect();try{var n;await(null===(n=this._wallet)||void 0===n?void 0:n.disconnect()),t.cleanup&&(this.status=r.MP.NOT_READY,this.phantomProvider=null,this._wallet=null),this.emit(r.n2.DISCONNECTED)}catch(e){this.emit(r.n2.ERRORED,r.RM.disconnectionError(null===e||void 0===e?void 0:e.message))}}async getUserInfo(){if(!this.isWalletConnected)throw r.RM.notConnectedError("Not connected with wallet, Please login/connect first");return{}}async connectWithProvider(t){if(!this.phantomProvider)throw r.RM.connectionError("No phantom provider");return await this.phantomProvider.setupProvider(t),this.status=r.MP.CONNECTED,this.emit(r.n2.CONNECTED,{adapter:r.rW.PHANTOM,reconnected:this.rehydrated}),this.provider}}},58162:function(t){"use strict";t.exports=function(t){if(t.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),e=0;e<n.length;e++)n[e]=255;for(var i=0;i<t.length;i++){var r=t.charAt(i),o=r.charCodeAt(0);if(255!==n[o])throw new TypeError(r+" is ambiguous");n[o]=i}var a=t.length,s=t.charAt(0),h=Math.log(a)/Math.log(256),c=Math.log(256)/Math.log(a);function l(t){if("string"!==typeof t)throw new TypeError("Expected String");if(0===t.length)return new Uint8Array;for(var e=0,i=0,r=0;t[e]===s;)i++,e++;for(var o=(t.length-e)*h+1>>>0,c=new Uint8Array(o);t[e];){var l=n[t.charCodeAt(e)];if(255===l)return;for(var d=0,w=o-1;(0!==l||d<r)&&-1!==w;w--,d++)l+=a*c[w]>>>0,c[w]=l%256>>>0,l=l/256>>>0;if(0!==l)throw new Error("Non-zero carry");r=d,e++}for(var u=o-r;u!==o&&0===c[u];)u++;for(var f=new Uint8Array(i+(o-u)),v=i;u!==o;)f[v++]=c[u++];return f}return{encode:function(n){if(n instanceof Uint8Array||(ArrayBuffer.isView(n)?n=new Uint8Array(n.buffer,n.byteOffset,n.byteLength):Array.isArray(n)&&(n=Uint8Array.from(n))),!(n instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===n.length)return"";for(var e=0,i=0,r=0,o=n.length;r!==o&&0===n[r];)r++,e++;for(var h=(o-r)*c+1>>>0,l=new Uint8Array(h);r!==o;){for(var d=n[r],w=0,u=h-1;(0!==d||w<i)&&-1!==u;u--,w++)d+=256*l[u]>>>0,l[u]=d%a>>>0,d=d/a>>>0;if(0!==d)throw new Error("Non-zero carry");i=w,r++}for(var f=h-i;f!==h&&0===l[f];)f++;for(var v=s.repeat(e);f<h;++f)v+=t.charAt(l[f]);return v},decodeUnsafe:l,decode:function(t){var n=l(t);if(n)return n;throw new Error("Non-base"+a+" character")}}}},77191:function(t,n,e){const i=e(58162);t.exports=i("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},78848:function(){}}]);