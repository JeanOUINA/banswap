!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("$vite_WS",[],t):"object"==typeof exports?exports.$vite_WS=t():e.$vite_WS=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=607)}({119:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(s,e);var t,n,r,c=u(s);function s(e){var t,n=e.onEventTypes,r=e.sendFuncName,o=e.path;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this)).path=o,t._onEventTypes=n||[],t._sendFuncName=r,t.connectStatus=!1,t.responseCbs={},t._connectEnd=null,t._connectError=null,t._connectTimeout=null,t._connectConnect=null,t._connectClose=null,t.subscribeMethod=null,t}return t=s,(n=[{key:"_connected",value:function(){this.connectStatus=!0,this._connectConnect&&this._connectConnect()}},{key:"_closed",value:function(){this.connectStatus=!1,this._connectClose&&this._connectClose()}},{key:"_errored",value:function(e){this._connectError&&this._connectError(e)}},{key:"_parse",value:function(e){var t=this,n=[];e.forEach((function(e){if(e)try{var t=JSON.parse(e);if(!(t instanceof Array)&&t.result)try{t.result=JSON.parse(t.result)}catch(e){}n.push(t)}catch(e){}})),n.forEach((function(e){if(e instanceof Array||e.id)if(e.id)t.responseCbs[e.id]&&t.responseCbs[e.id](e);else for(var n=0;n<e.length;n++)if(e[n].id){var r=e[n].id;t.responseCbs[r]&&t.responseCbs[r](e)}else t.subscribeMethod&&t.subscribeMethod(e[n]);else t.subscribeMethod&&t.subscribeMethod(e)}))}},{key:"_checkOnType",value:function(e){if(this._onEventTypes.indexOf(e)<0)return!1;var t=e.substring(0,1).toUpperCase()+e.substring(1);return"_connect".concat(t)}},{key:"_onSend",value:function(e){var t=this,n=function(e){var t;if(e instanceof Array){for(var n=0;n<e.length;n++)if(e[n].id){t=e[n].id;break}}else t=e.id||null;return t}(e);if(n)return new Promise((function(e,r){var o=!1,i={id:n,abort:function(){o=!0}};t.responseCbs[n]=function(t){if(c(),t&&t.error)return r(t);e(t)};var u=t._addReq({request:i,rej:function(e){c(),r(e)}}),c=function(){for(var e in s&&clearTimeout(s),s=null,t._removeReq(u),t.responseCbs)if(t.responseCbs[e]===n){delete t.responseCbs[e];break}},s=t.timeout?setTimeout((function(){if(!o)return c(),r(t.ERRORS.TIMEOUT(t.timeout))}),t.timeout):null}))}},{key:"_send",value:function(e){return this.connectStatus?(this.socket[this._sendFuncName](JSON.stringify(e)),this._onSend(e)):Promise.reject(this.ERRORS.CONNECT(this.path))}},{key:"on",value:function(e,t){var n=this._checkOnType(e);return n?t?void(this[n]=t):this.ERRORS.IPC_ON_CB(e):this.ERRORS.IPC_ON(e)}},{key:"remove",value:function(e){var t=this._checkOnType(e);t&&(this[t]=null)}},{key:"request",value:function(e,t){var n=this._getRequestPayload(e,t);return n instanceof Error?Promise.reject(n):this._send(n)}},{key:"sendNotification",value:function(e,t){var n=this._getNotificationPayload(e,t);if(n instanceof Error)return n;this._send(n)}},{key:"batch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=this._getBatchPayload(e);return t instanceof Error?Promise.reject(t):this._send(t)}},{key:"subscribe",value:function(e){if("function"!=typeof e)throw new Error("[Error] callback should be a function.");this.subscribeMethod=e}},{key:"unsubscribe",value:function(){this.subscribeMethod=null}}])&&o(t.prototype,n),r&&o(t,r),s}(n(57).a);t.a=a},124:function(e,t,n){var r,o,i,u,c=this&&this.__extends||(u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});!function(u){if("object"==typeof e.exports){var c=u(n(125),t);void 0!==c&&(e.exports=c)}else o=[n,t],void 0===(i="function"==typeof(r=u)?r.apply(t,o):r)||(e.exports=i)}((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.prototype.hasOwnProperty,r="function"==typeof Number.isSafeInteger?Number.isSafeInteger:function(e){return"number"==typeof e&&isFinite(e)&&e===Math.floor(e)&&Math.abs(e)<=9007199254740991},o=function(){function e(){this.jsonrpc="2.0"}return e.prototype.serialize=function(){return JSON.stringify(this)},e.VERSION="2.0",e}();t.JsonRpc=o;var i=function(e){function t(t,n,r){var o=e.call(this)||this;return o.id=t,o.method=n,void 0!==r&&(o.params=r),o}return c(t,e),t}(o);t.RequestObject=i;var u=function(e){function t(t,n){var r=e.call(this)||this;return r.method=t,void 0!==n&&(r.params=n),r}return c(t,e),t}(o);t.NotificationObject=u;var s=function(e){function t(t,n){var r=e.call(this)||this;return r.id=t,r.result=n,r}return c(t,e),t}(o);t.SuccessObject=s;var a=function(e){function t(t,n){var r=e.call(this)||this;return r.id=t,r.error=n,r.id=t,r.error=n,r}return c(t,e),t}(o);t.ErrorObject=a;var f=function(e,t){this.payload=e,this.type=t,this.payload=e,this.type=t};t.JsonRpcParsed=f;var l=function(){function e(e,t,n){this.message=e,this.code=r(t)?t:0,null!=n&&(this.data=n)}return e.invalidRequest=function(t){return new e("Invalid request",-32600,t)},e.methodNotFound=function(t){return new e("Method not found",-32601,t)},e.invalidParams=function(t){return new e("Invalid params",-32602,t)},e.internalError=function(t){return new e("Internal error",-32603,t)},e.parseError=function(t){return new e("Parse error",-32700,t)},e}();function p(e,t,n){var r=new i(e,t,n);return m(r,!0),r}function h(e,t){var n=new u(e,t);return m(n,!0),n}function d(e,t){var n=new s(e,t);return m(n,!0),n}function y(e,t){var n=new a(e,t);return m(n,!0),n}function v(e){if(!w(e))return new f(l.invalidRequest(e),"invalid");var t;try{t=JSON.parse(e)}catch(t){return new f(l.parseError(e),"invalid")}return b(t)}function b(e){if(!Array.isArray(e))return _(e);if(0===e.length)return new f(l.invalidRequest(e),"invalid");for(var t=[],n=0,r=e.length;n<r;n++)t[n]=_(e[n]);return t}function _(e){var t=null,r=null,c="invalid";if(null==e||e.jsonrpc!==o.VERSION)t=l.invalidRequest(e),c="invalid";else if(n.call(e,"id")){if(n.call(e,"method")){t=m(r=new i((h=e).id,h.method,h.params)),c="request"}else if(n.call(e,"result")){t=m(r=new s((h=e).id,h.result)),c="success"}else if(n.call(e,"error")){if(c="error",null==(h=e).error)t=l.internalError(h);else{var p=new l(h.error.message,h.error.code,h.error.data);t=p.message!==h.error.message||p.code!==h.error.code?l.internalError(h):m(r=new a(h.id,p))}}}else{var h;t=m(r=new u((h=e).method,h.params)),c="notification"}return null==t&&null!=r?new f(r,c):new f(null!=t?t:l.invalidRequest(e),"invalid")}function m(e,t){var n=null;if(e instanceof i?(null==(n=g(e.id))&&(n=O(e.method)),null==n&&(n=R(e.params))):e instanceof u?null==(n=O(e.method))&&(n=R(e.params)):e instanceof s?null==(n=g(e.id))&&(n=void 0===e.result?l.internalError("Result must exist for success Response objects"):null):e instanceof a&&null==(n=g(e.id,!0))&&(n=function(e){if(!(e instanceof l))return l.internalError("Error must be an instance of JsonRpcError");if(!r(e.code))return l.internalError("Invalid error code. It must be an integer.");if(!w(e.message))return l.internalError("Message must exist or must be a string.");return null}(e.error)),t&&null!=n)throw n;return n}function g(e,t){return t&&null===e||w(e)||r(e)?null:l.internalError('"id" must be provided, a string or an integer.')}function O(e){return w(e)?null:l.invalidRequest(e)}function R(e){if(void 0===e)return null;if(Array.isArray(e)||null!=(t=e)&&"object"==typeof t&&!Array.isArray(t))try{return JSON.stringify(e),null}catch(t){return l.parseError(e)}var t;return l.invalidParams(e)}function w(e){return""!==e&&"string"==typeof e}t.JsonRpcError=l,t.request=p,t.notification=h,t.success=d,t.error=y,t.parse=v,t.parseJsonRpcObject=b,t.parseJsonRpcString=v,t.parseObject=_;var E={JsonRpc:o,JsonRpcError:l,request:p,notification:h,success:d,error:y,parse:v,parseObject:_,parseJsonRpcObject:b,parseJsonRpcString:t.parseJsonRpcString};t.jsonrpc=E,t.default=E}))},125:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=125},57:function(e,t,n){"use strict";var r={CONNECT:function(e){return new Error("CONNECTION ERROR: Couldn't connect to node ".concat(e,"."))},ABORT:function(){return new Error("ABORT ERROR: Request already aborted.")},PARAMS:function(){return new Error("PARAMS ERROR.")},TIMEOUT:function(e){return new Error("CONNECTION TIMEOUT: timeout of ".concat(e," ms achived"))},INVAILID_RESPONSE:function(e){return new Error("Invalid JSON RPC response: ".concat(JSON.stringify(e)))},IPC_ON:function(e){return new Error("Invalid IPC event on: ".concat(JSON.stringify(e)))},IPC_ON_CB:function(e){return new Error("The IPC on event ".concat(JSON.stringify(e),", cb is necessary"))}};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(124),u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ERRORS=r,this.jsonrpc=i,this._requestManager=[],this._requestId=0}var t,n,u;return t=e,(n=[{key:"abort",value:function(){var e=this;this._requestManager.forEach((function(t){var n=t.request,r=t.rej;n.abort(),r(e.ERRORS.ABORT())})),this._requestManager=[]}},{key:"_addReq",value:function(e){var t={request:e.request,rej:e.rej};return this._requestManager.push(t),t}},{key:"_removeReq",value:function(e){for(var t=0;t<this._requestManager.length;t++)if(this._requestManager[t]===e){this._requestManager.splice(t,1);break}}},{key:"_getRequestPayload",value:function(e,t){return e?(this._requestId++,this.jsonrpc.request(this._requestId,e,t)):r.PARAMS()}},{key:"_getNotificationPayload",value:function(e,t){return e?this.jsonrpc.notification(e,t):r.PARAMS()}},{key:"_getBatchPayload",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e||!e.length)return r.PARAMS();for(var t=[],n=0;n<e.length;n++){var o=e[n];if(!o||!o.type||"request"!==o.type&&"notification"!==o.type)return r.PARAMS();var i="notification"===o.type?this._getNotificationPayload(o.methodName,o.params):this._getRequestPayload(o.methodName,o.params);if(i instanceof Error)return i;t.push(i)}return t}}])&&o(t.prototype,n),u&&o(t,u),e}();t.a=u},607:function(e,t,n){"use strict";n.r(t),n.d(t,"WS_RPC",(function(){return p}));var r=n(119);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=n(608).w3cwebsocket,p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(a,e);var t,n,r,o=s(a);function a(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ws://localhost:31420",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e4,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{protocol:"",headers:"",clientConfig:"",retryTimes:10,retryInterval:1e4};if(i(this,a),e=o.call(this,{onEventTypes:["error","close","connect"],sendFuncName:"send",path:t}),!t)throw e.ERRORS.CONNECT(t);e.timeout=n,e.protocol=r.protocol,e.headers=r.headers,e.clientConfig=r.clientConfig,e._timeout=null,e._destroyed=!1,e.reconnect();var u=0;return e.on("connect",(function(){u=0})),e.on("close",(function(){u>r.retryTimes||(e._timeout=setTimeout((function(){u++,e.reconnect()}),r.retryInterval))})),e}return t=a,(n=[{key:"reconnect",value:function(){var e=this;this._destroyed||(this.disconnect(),this.socket=new l(this.path,this.protocol,null,this.headers,null,this.clientConfig),this.socket.onopen=function(){e.socket.readyState===e.socket.OPEN&&e._connected()},this.socket.onclose=function(){e._closed()},this.socket.onerror=function(t){e._errored(t)},this.socket.onmessage=function(t){var n="string"==typeof t.data?t.data:"";e._parse([n])})}},{key:"disconnect",value:function(){this.socket&&this.socket.close&&this.socket.close(),clearTimeout(this._timeout),this.socket=null}},{key:"destroy",value:function(){this.disconnect(),this.remove("error"),this.remove("close"),this.remove("connect"),this._destroyed=!0}}])&&u(t.prototype,n),r&&u(t,r),a}(r.a);t.default=p},608:function(e,t,n){var r;try{r=n(609)}catch(e){}finally{if(r||"undefined"==typeof window||(r=window),!r)throw new Error("Could not determine global this")}var o=r.WebSocket||r.MozWebSocket,i=n(610);function u(e,t){return t?new o(e,t):new o(e)}o&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(e){Object.defineProperty(u,e,{get:function(){return o[e]}})})),e.exports={w3cwebsocket:o?u:null,version:i}},609:function(e,t){var n=function(){if("object"==typeof self&&self)return self;if("object"==typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};e.exports=function(){if(this)return this;if("object"==typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return n()}try{return __global__||n()}finally{delete Object.prototype.__global__}}()},610:function(e,t,n){e.exports=n(611).version},611:function(e){e.exports=JSON.parse('{"name":"websocket","description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"author":"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)","contributors":["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],"version":"1.0.31","repository":{"type":"git","url":"https://github.com/theturtle32/WebSocket-Node.git"},"homepage":"https://github.com/theturtle32/WebSocket-Node","engines":{"node":">=0.10.0"},"dependencies":{"debug":"^2.2.0","es5-ext":"^0.10.50","nan":"^2.14.0","typedarray-to-buffer":"^3.1.5","yaeti":"^0.0.6"},"devDependencies":{"buffer-equal":"^1.0.0","faucet":"^0.0.1","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1","jshint":"^2.0.0","tape":"^4.9.1"},"config":{"verbose":false},"scripts":{"install":"(node-gyp rebuild 2> builderror.log) || (exit 0)","test":"faucet test/unit","gulp":"gulp"},"main":"index","directories":{"lib":"./lib"},"browser":"lib/browser.js","license":"Apache-2.0"}')}})}));