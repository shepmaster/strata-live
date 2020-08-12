(function () {
    'use strict';

    var process = {
        env: {
            NODE_ENV: 'production',
        },
    };

    function createCommonjsModule(fn, basedir, module) {
    	return module = {
    	  path: basedir,
    	  exports: {},
    	  require: function (path, base) {
          return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
        }
    	}, fn(module, module.exports), module.exports;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
    	if (val === null || val === undefined) {
    		throw new TypeError('Object.assign cannot be called with null or undefined');
    	}

    	return Object(val);
    }

    function shouldUseNative() {
    	try {
    		if (!Object.assign) {
    			return false;
    		}

    		// Detect buggy property enumeration order in older V8 versions.

    		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
    		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
    		test1[5] = 'de';
    		if (Object.getOwnPropertyNames(test1)[0] === '5') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test2 = {};
    		for (var i = 0; i < 10; i++) {
    			test2['_' + String.fromCharCode(i)] = i;
    		}
    		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
    			return test2[n];
    		});
    		if (order2.join('') !== '0123456789') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test3 = {};
    		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
    			test3[letter] = letter;
    		});
    		if (Object.keys(Object.assign({}, test3)).join('') !==
    				'abcdefghijklmnopqrst') {
    			return false;
    		}

    		return true;
    	} catch (err) {
    		// We don't expect any of the above to throw, but better to be safe.
    		return false;
    	}
    }

    var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    	var from;
    	var to = toObject(target);
    	var symbols;

    	for (var s = 1; s < arguments.length; s++) {
    		from = Object(arguments[s]);

    		for (var key in from) {
    			if (hasOwnProperty.call(from, key)) {
    				to[key] = from[key];
    			}
    		}

    		if (getOwnPropertySymbols) {
    			symbols = getOwnPropertySymbols(from);
    			for (var i = 0; i < symbols.length; i++) {
    				if (propIsEnumerable.call(from, symbols[i])) {
    					to[symbols[i]] = from[symbols[i]];
    				}
    			}
    		}
    	}

    	return to;
    };

    var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
    60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
    var D={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
    function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}var I=H.prototype=new G;I.constructor=H;objectAssign(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
    function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h;}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return {$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
    function N(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return {result:a,keyPrefix:b,func:c,context:e,count:0}}
    function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a);}
    function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e);}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
    0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++);}
    function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a));}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b);}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
    var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:objectAssign};var Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b);},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
    var Component=F;var Fragment=r;var Profiler=u;var PureComponent=H;var StrictMode=t;var Suspense=y;var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
    var cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=objectAssign({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h]);}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f;}return {$$typeof:p,type:a.type,
    key:d,ref:g,props:e,_owner:k}};var createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};var createElement=M;var createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};var createRef=function(){return {current:null}};var forwardRef=function(a){return {$$typeof:x,render:a}};var isValidElement=O;
    var lazy=function(a){return {$$typeof:A,_ctor:a,_status:-1,_result:null}};var memo=function(a,b){return {$$typeof:z,type:a,compare:void 0===b?null:b}};var useCallback=function(a,b){return Z().useCallback(a,b)};var useContext=function(a,b){return Z().useContext(a,b)};var useDebugValue=function(){};var useEffect=function(a,b){return Z().useEffect(a,b)};var useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
    var useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};var useMemo=function(a,b){return Z().useMemo(a,b)};var useReducer=function(a,b,c){return Z().useReducer(a,b,c)};var useRef=function(a){return Z().useRef(a)};var useState=function(a){return Z().useState(a)};var version="16.13.1";

    var react_production_min = {
    	Children: Children,
    	Component: Component,
    	Fragment: Fragment,
    	Profiler: Profiler,
    	PureComponent: PureComponent,
    	StrictMode: StrictMode,
    	Suspense: Suspense,
    	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    	cloneElement: cloneElement,
    	createContext: createContext,
    	createElement: createElement,
    	createFactory: createFactory,
    	createRef: createRef,
    	forwardRef: forwardRef,
    	isValidElement: isValidElement,
    	lazy: lazy,
    	memo: memo,
    	useCallback: useCallback,
    	useContext: useContext,
    	useDebugValue: useDebugValue,
    	useEffect: useEffect,
    	useImperativeHandle: useImperativeHandle,
    	useLayoutEffect: useLayoutEffect,
    	useMemo: useMemo,
    	useReducer: useReducer,
    	useRef: useRef,
    	useState: useState,
    	version: version
    };

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

    var ReactPropTypesSecret_1 = ReactPropTypesSecret;

    var react_development = createCommonjsModule(function (module, exports) {
    });

    var react = createCommonjsModule(function (module) {

    {
      module.exports = react_production_min;
    }
    });

    var scheduler_production_min = createCommonjsModule(function (module, exports) {
    var f,g,h,k,l;
    if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null;}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0));};g=function(a,b){q=setTimeout(a,b);};h=function(){clearTimeout(q);};k=function(){return !1};l=exports.unstable_forceFrameRate=function(){};}else {var w=window.performance,x=window.Date,
    y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");}if("object"===
    typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else {var B=x.now();exports.unstable_now=function(){return x.now()-B};}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5;};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
    function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null);}catch(b){throw I.postMessage(null),b;}}else C=!1;};f=function(a){D=a;C||(C=!0,I.postMessage(null));};g=function(a,b){E=y(function(){a(exports.unstable_now());},b);};h=function(){z(E);E=-1;};}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
    function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
    function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O);}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else {var b=L(O);null!==b&&g(W,b.startTime-a);}}
    function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b);}else M(N);Q=L(N);}if(null!==Q)var m=!0;else {var n=L(O);null!==n&&g(W,n.startTime-b);m=!1;}return m}finally{Q=null,R=c,S=!1;}}
    function Y(a){switch(a){case 1:return -1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X));};
    exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R;}var c=R;R=b;try{return a()}finally{R=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=R;R=a;try{return b()}finally{R=c;}};
    exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a);}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
    exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c;}}};
    });

    var scheduler_development = createCommonjsModule(function (module, exports) {
    });

    var scheduler = createCommonjsModule(function (module) {

    {
      module.exports = scheduler_production_min;
    }
    });

    function u$1(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!react)throw Error(u$1(227));
    function ba$1(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a;}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba$1.apply(ia,arguments);}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null;}else throw Error(u$1(198));fa||(fa=!0,ha=l);}}var la=null,ma=null,na=null;
    function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null;}var pa=null,qa={};
    function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u$1(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u$1(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u$1(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0;}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u$1(98,d,a));}}}}
    function ua(a,b,c){if(va[a])throw Error(u$1(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies;}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u$1(102,c));qa[c]=d;b=!0;}}b&&ra();}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
    function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u$1(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b));}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a;}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a]);}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea();}
    function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La();}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
    function Ra(a){if(Oa.call(Qa,a))return !0;if(Oa.call(Pa,a))return !1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return !1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
    function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function v$1(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;}var C$1={};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C$1[a]=new v$1(a,0,!1,a,null,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C$1[b]=new v$1(b,1,!1,a[1],null,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C$1[a]=new v$1(a,2,!1,a.toLowerCase(),null,!1);});
    ["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C$1[a]=new v$1(a,2,!1,a,null,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C$1[a]=new v$1(a,3,!1,a.toLowerCase(),null,!1);});
    ["checked","multiple","muted","selected"].forEach(function(a){C$1[a]=new v$1(a,3,!0,a,null,!1);});["capture","download"].forEach(function(a){C$1[a]=new v$1(a,4,!1,a,null,!1);});["cols","rows","size","span"].forEach(function(a){C$1[a]=new v$1(a,6,!1,a,null,!1);});["rowSpan","start"].forEach(function(a){C$1[a]=new v$1(a,5,!1,a.toLowerCase(),null,!1);});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
    Va);C$1[b]=new v$1(b,1,!1,a,null,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C$1[b]=new v$1(b,1,!1,a,"http://www.w3.org/1999/xlink",!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C$1[b]=new v$1(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1);});["tabIndex","crossOrigin"].forEach(function(a){C$1[a]=new v$1(a,1,!1,a.toLowerCase(),null,!1);});
    C$1.xlinkHref=new v$1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C$1[a]=new v$1(a,1,!1,a.toLowerCase(),null,!0);});var Wa=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
    function Xa(a,b,c,d){var e=C$1.hasOwnProperty(b)?C$1[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
    var Ya=/^(.*)[\\\/]/,E$1="function"===typeof Symbol&&Symbol.for,Za=E$1?Symbol.for("react.element"):60103,$a=E$1?Symbol.for("react.portal"):60106,ab=E$1?Symbol.for("react.fragment"):60107,bb=E$1?Symbol.for("react.strict_mode"):60108,cb=E$1?Symbol.for("react.profiler"):60114,db=E$1?Symbol.for("react.provider"):60109,eb=E$1?Symbol.for("react.context"):60110,fb=E$1?Symbol.for("react.concurrent_mode"):60111,gb=E$1?Symbol.for("react.forward_ref"):60112,hb=E$1?Symbol.for("react.suspense"):60113,ib=E$1?Symbol.for("react.suspense_list"):
    60120,jb=E$1?Symbol.for("react.memo"):60115,kb=E$1?Symbol.for("react.lazy"):60116,lb=E$1?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return "function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}}
    function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return "Fragment";case $a:return "Portal";case cb:return "Profiler";case bb:return "StrictMode";case hb:return "Suspense";case ib:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return "Context.Consumer";case db:return "Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
    "ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f;}b+=c;a=a.return;}while(a);return b}
    function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}function sb(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
    function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
    null;delete a[b];}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a));}function yb(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return objectAssign({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
    function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1);}
    function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
    function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
    function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}function Fb(a){var b="";react.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}function Gb(a,b){a=objectAssign({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
    function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
    function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u$1(91));return objectAssign({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u$1(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u$1(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:rb(c)};}
    function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
    function Nb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
    var Pb,Qb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else {Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
    function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
    ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
    var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
    function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u$1(188));}
    function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u$1(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling;}throw Error(u$1(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
    c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(u$1(189));}}if(c.alternate!==d)throw Error(u$1(190));}if(3!==c.tag)throw Error(u$1(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
    function ic(a,b){if(null==b)throw Error(u$1(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a);}var kc=null;
    function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a);}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u$1(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
    function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return !1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a);}
    function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return {topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
    function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else {for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d);}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
    ic(h,l));}mc(h);}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F$1(a,b);}c.set(a,null);}}
    var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
    function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c);});Ic.forEach(function(a){uc(a,b,c);});}function Kc(a,b,c,d,e){return {blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
    function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId);}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
    function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return !1}
    function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;scheduler.unstable_runWithPriority(a.priority,function(){yc(c);});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}function Qc(a){if(null!==a.blockedOn)return !1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return !1}return !0}
    function Sc(a,b,c){Qc(a)&&c.delete(b);}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift();}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc);}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority,Tc)));}
    function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift();}
    var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
    "seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f;}}
    ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
    ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
    var dd=scheduler.unstable_UserBlockingPriority,ed=scheduler.unstable_runWithPriority,fd=!0;function F$1(a,b){vc(b,a,!1);}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a);}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1);}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d);}finally{(Ja=f)||La();}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d));}
    function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else {var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a);}finally{qc(a);}}}}
    function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else {var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null;}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null;}else e!==c&&(c=null);}}a=rc(a,d,c,b);try{Ma(sc,a);}finally{qc(a);}return null}
    var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
    floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a];});});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
    function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var nd=objectAssign({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
    function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u$1(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u$1(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u$1(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u$1(62,""));}}
    function pd(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c);}function sd(){}
    function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=ud(c);}}
    function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=td(a.document);}return b}
    function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}
    function Gd(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
    function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--;}else c===Ad&&b++;}a=a.previousSibling;}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
    function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a);}return b}a=c;c=a.parentNode;}return null}function Nc(a){a=a[Md]||a[Od];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u$1(33));}function Qd(a){return a[Nd]||null}
    function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
    function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==typeof c)throw Error(u$1(231,
    b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a);}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a);}}
    function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a));}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a);}function Xd(a){jc(a,Ud);}var Yd=null,Zd=null,$d=null;
    function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return !0}function ce(){return !1}
    function G$1(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
    objectAssign(G$1.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be);},persist:function(){this.isPersistent=be;},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
    b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null;}});G$1.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
    G$1.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;objectAssign(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=objectAssign({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G$1);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
    function fe(a){if(!(a instanceof this))throw Error(u$1(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a);}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe;}var ge=G$1.extend({data:null}),he=G$1.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
    var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
    captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
    function qe(a,b){switch(a){case "keyup":return -1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return !0;default:return !1}}function re(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
    function ue(a,b){if(se)return "compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
    var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0;}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
    b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!we[a.type]:"textarea"===b?!0:!1}
    var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G$1.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a);}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
    function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null);}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else {Ja=!0;try{Fa(Ce,a);}finally{Ja=!1,La();}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge();}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
    var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else {g=Je;var h=Ie;}else (f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value);}},Ne=G$1.extend({view:null,detail:null}),
    Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
    var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
    var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
    dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null;}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
    a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse";}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
    k=Rd(k);m=Rd(m);}k=null;}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d);}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p);}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
    function bf(a,b){if($e(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return !1;return !0}
    var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
    function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G$1.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
    var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0;}f=!e;}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
    case "keydown":case "keyup":return jf(c,d)}return null}},lf=G$1.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G$1.extend({clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
    var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
    116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return "keypress"===
    a.type?of(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G$1.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in
    a?-a.wheelDeltaX:0},deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
    Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
    We;break;default:a=G$1;}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u$1(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H$1(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--);}
    function I$1(a,b){zf++;yf[zf]=a.current;a.current=b;}var Af={},J$1={current:Af},K$1={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L$1(a){a=a.childContextTypes;return null!==a&&void 0!==a}
    function Df(){H$1(K$1);H$1(J$1);}function Ef(a,b,c){if(J$1.current!==Af)throw Error(u$1(168));I$1(J$1,b);I$1(K$1,c);}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u$1(108,pb(b)||"Unknown",e));return objectAssign({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J$1.current;I$1(J$1,a);I$1(K$1,K$1.current);return !0}
    function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u$1(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H$1(K$1),H$1(J$1),I$1(J$1,a)):H$1(K$1);I$1(K$1,c);}
    var If=scheduler.unstable_runWithPriority,Jf=scheduler.unstable_scheduleCallback,Kf=scheduler.unstable_cancelCallback,Lf=scheduler.unstable_requestPaint,Mf=scheduler.unstable_now,Nf=scheduler.unstable_getCurrentPriorityLevel,Of=scheduler.unstable_ImmediatePriority,Pf=scheduler.unstable_UserBlockingPriority,Qf=scheduler.unstable_NormalPriority,Rf=scheduler.unstable_LowPriority,Sf=scheduler.unstable_IdlePriority,Tf={},Uf=scheduler.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
    function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u$1(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u$1(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a);}fg();}
    function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null;}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1;}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=objectAssign({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null;}
    function og(a){var b=jg.current;H$1(jg);a.type._context._currentValue=b;}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return;}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null);}
    function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u$1(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null};}else lg=lg.next=b;}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null};}
    function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects});}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}}
    function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b);}
    function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h;}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g));}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
    ca,m=k):x=x.next=ca;g>l&&(l=g);}else {null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=objectAssign({},k,g);break a;case 2:tg=!0;}}null!==z.callback&&
    (a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z));}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null;}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k;}}
    function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u$1(191,d));d.call(e);}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new react.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:objectAssign({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c);}
    var Jg={isMounted:function(a){return (a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d);},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
    c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c);}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
    function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L$1(b)?Bf:J$1.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
    function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null);}
    function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L$1(b)?Bf:J$1.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
    (b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4);}var Og=Array.isArray;
    function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u$1(309));var d=c.stateNode;}if(!d)throw Error(u$1(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u$1(284));if(!c._owner)throw Error(u$1(290,a));}return a}
    function Qg(a,b){if("textarea"!==a.type)throw Error(u$1(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
    function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
    2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
    c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
    nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b);}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c);}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
    a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d);}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
    m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A;}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u$1(150));h=k.call(h);
    if(null==h)throw Error(u$1(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A;}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
    q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
    k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling;}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h);}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=
    d.sibling;}d=Vg(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u$1(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
    function ch(a){if(a===Zg)throw Error(u$1(174));return a}function dh(a,b){I$1(bh,b);I$1(ah,a);I$1($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a);}H$1($g);I$1($g,b);}function eh(){H$1($g);H$1(ah);H$1(bh);}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I$1(ah,a),I$1($g,c));}function gh(a){ah.current===a&&(H$1($g),H$1(ah));}var M$1={current:0};
    function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}function ih(a,b){return {responder:a,props:b}}
    var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N$1=null,O$1=null,P$1=null,mh=!1;function Q$1(){throw Error(u$1(321));}function nh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return !1;return !0}
    function oh(a,b,c,d,e,f){lh=f;N$1=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u$1(301));f+=1;P$1=O$1=null;b.updateQueue=null;jh.current=rh;a=c(d,e);}while(b.expirationTime===lh)}jh.current=sh;b=null!==O$1&&null!==O$1.next;lh=0;P$1=O$1=N$1=null;mh=!1;if(b)throw Error(u$1(300));return a}
    function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P$1?N$1.memoizedState=P$1=a:P$1=P$1.next=a;return P$1}function uh(){if(null===O$1){var a=N$1.alternate;a=null!==a?a.memoizedState:null;}else a=O$1.next;var b=null===P$1?N$1.memoizedState:P$1.next;if(null!==b)P$1=b,O$1=a;else {if(null===a)throw Error(u$1(310));O$1=a;a={memoizedState:O$1.memoizedState,baseState:O$1.baseState,baseQueue:O$1.baseQueue,queue:O$1.queue,next:null};null===P$1?N$1.memoizedState=P$1=a:P$1=P$1.next=a;}return P$1}
    function vh(a,b){return "function"===typeof b?b(a):b}
    function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u$1(311));c.lastRenderedReducer=a;var d=O$1,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N$1.expirationTime&&
    (N$1.expirationTime=l,Bg(l));}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next;}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d;}return [b.memoizedState,c.dispatch]}
    function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u$1(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}
    function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N$1,a);return [b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N$1.updateQueue;null===b?(b={lastEffect:null},N$1.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
    function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N$1.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d);}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O$1){var g=O$1.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N$1.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d);}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
    function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
    function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0);});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c();}finally{kh.suspense=d;}});}
    function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N$1||null!==f&&f===N$1)mh=!0,e.expirationTime=lh,N$1.expirationTime=lh;else {if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
    d);}}
    var sh={readContext:sg,useCallback:Q$1,useContext:Q$1,useEffect:Q$1,useImperativeHandle:Q$1,useLayoutEffect:Q$1,useMemo:Q$1,useReducer:Q$1,useRef:Q$1,useState:Q$1,useDebugValue:Q$1,useResponder:Q$1,useDeferredValue:Q$1,useTransition:Q$1},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
    b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N$1,a);return [d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a);}finally{kh.suspense=
    c;}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return [Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a);}finally{kh.suspense=c;}},[a,b]);return d},useTransition:function(a){var b=
    wh(vh),c=b[0];b=b[1];return [Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a);}finally{kh.suspense=c;}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return [Lh(Nh.bind(null,
    b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}
    function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
    function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c);}Oh=a;Ph=Jd(b.firstChild);}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a;}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a;}
    function Wh(a){if(a!==Oh)return !1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u$1(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--;}else c!==zd&&c!==Cd&&c!==Bd||b++;}a=a.nextSibling;}Ph=null;}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return !0}
    function Xh(){Ph=Oh=null;Qh=!1;}var Yh=Wa.ReactCurrentOwner,rg=!1;function R$1(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d);}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R$1(a,b,d,e);return b.child}
    function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
    function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128;}function di(a,b,c,d,e){var f=L$1(c)?Bf:J$1.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R$1(a,b,c,e);return b.child}
    function fi(a,b,c,d,e){if(L$1(c)){var f=!0;Gf(b);}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L$1(c)?Bf:J$1.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
    "function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K$1.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
    typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1);}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L$1(c)?Bf:J$1.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
    typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K$1.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
    x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
    ("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
    function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R$1(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo);}
    var ii={dehydrated:null,retryTime:0};
    function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M$1.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I$1(M$1,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
    b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
    c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
    function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b);}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f);}
    function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R$1(a,b,d.children,c);d=M$1.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else {if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}I$1(M$1,d);if(0===(b.mode&2))b.memoizedState=
    null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child}
    function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u$1(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}var ni,oi,pi,qi;
    ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};oi=function(){};
    pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=objectAssign({},f,{value:void 0});d=objectAssign({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd);}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
    h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else "dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
    c[k]=l[k]);}else c||(a||(a=[]),a.push(h,c)),c=l;else "dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l));}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4;}};
    qi=function(a,b,c,d){c!==d&&(b.effectTag|=4);};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
    function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L$1(b.type)&&Df(),null;case 3:return eh(),H$1(K$1),H$1(J$1),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else {if(!d){if(null===b.stateNode)throw Error(u$1(166));
    return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F$1("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F$1(ac[a],d);break;case "source":F$1("error",d);break;case "img":case "image":case "link":F$1("error",d);F$1("load",d);break;case "form":F$1("reset",d);F$1("submit",d);break;case "details":F$1("toggle",d);break;case "input":Ab(d,f);F$1("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
    {wasMultiple:!!f.multiple};F$1("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F$1("invalid",d),rd(c,"onChange");}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g);}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
    (d.onclick=sd);}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4);}else {g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F$1("load",
    a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F$1(ac[h],a);h=d;break;case "source":F$1("error",a);h=d;break;case "img":case "image":case "link":F$1("error",a);F$1("load",a);h=d;break;case "form":F$1("reset",a);F$1("submit",a);h=d;break;case "details":F$1("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F$1("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=objectAssign({},d,{value:void 0});F$1("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
    d);h=Ib(a,d);F$1("invalid",a);rd(c,"onChange");break;default:h=d;}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g));}switch(e){case "input":xb(a);Eb(a,d,!1);
    break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd);}Fd(e,d)&&(b.effectTag|=4);}null!==b.ref&&(b.effectTag|=128);}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(u$1(166));
    c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c);}return null;case 13:H$1(M$1);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
    e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M$1.current&1))S$1===ti&&(S$1=ui);else {if(S$1===ti||S$1===ui)S$1=vi;0!==wi&&null!==T$1&&(xi(T$1,U$1),yi(T$1,wi));}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L$1(b.type)&&Df(),null;case 19:H$1(M$1);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else {if(S$1!==ti||null!==a&&0!==(a.effectTag&
    64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
    e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I$1(M$1,M$1.current&1|2);return b.child}f=f.sibling;}}else {if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
    b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f);}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M$1.current,I$1(M$1,e?b&1|2:b&1),c):null}throw Error(u$1(156,
    b.tag));}function zi(a){switch(a.tag){case 1:L$1(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H$1(K$1);H$1(J$1);b=a.effectTag;if(0!==(b&64))throw Error(u$1(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H$1(M$1),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H$1(M$1),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return {value:a,source:b,stack:qb(b)}}
    var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b);}catch(e){setTimeout(function(){throw e;});}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount();}catch(c){Ei(a,c);}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Ei(a,c);}else b.current=null;}
    function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u$1(163));}
    function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d();}c=c.next;}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}
    function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else {var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate);}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode;}Cg(c,b,a);}return;
    case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u$1(163));}
    function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c();}catch(h){Ei(g,h);}}a=a.next;}while(a!==d)});}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c);}}
    function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b);}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
    function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return;}throw Error(u$1(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u$1(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
    if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b);}
    function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling;}
    function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling;}
    function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u$1(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return;}e=!0;}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else {if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return;}m.sibling.return=m.return;m=m.sibling;}g?(h=
    f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode);}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1);}d.sibling.return=d.return;d=d.sibling;}}
    function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b);}switch(a){case "input":Cb(c,d);break;
    case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1));}}}return;case 6:if(null===b.stateNode)throw Error(u$1(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
    d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
    f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u$1(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
    var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b);};return c}
    function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
    var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V$1=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W$1=V$1,T$1=null,X$1=null,U$1=0,S$1=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y$1=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return (W$1&(fj|gj))!==V$1?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
    function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W$1&fj)!==V$1)return U$1;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u$1(326));}null!==T$1&&a===U$1&&--a;return a}
    function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u$1(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W$1&ej)!==V$1&&(W$1&(fj|gj))===V$1?yj(a):(Z$1(a),W$1===V$1&&gg()):Z$1(a);(W$1&4)===V$1||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)));}}
    function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return;}null!==e&&(T$1===e&&(Bg(b),S$1===vi&&xi(e,U$1)),yi(e,b));return e}
    function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
    function Z$1(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else {var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else {var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c);}a.callbackExpirationTime=
    b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b;}}}
    function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z$1(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W$1&(fj|gj))!==V$1)throw Error(u$1(327));Dj();a===T$1&&c===U$1||Ej(a,c);if(null!==X$1){var d=W$1;W$1|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h);}while(1);ng();W$1=d;cj.current=e;if(S$1===hj)throw b=kj,Ej(a,c),xi(a,c),Z$1(a),b;if(null===X$1)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S$1,T$1=null,d){case ti:case hj:throw Error(u$1(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
    c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
    d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
    Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u$1(329));}Z$1(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
    function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W$1&(fj|gj))!==V$1)throw Error(u$1(327));Dj();a===T$1&&b===U$1||Ej(a,b);if(null!==X$1){var c=W$1;W$1|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e);}while(1);ng();W$1=c;cj.current=d;if(S$1===hj)throw c=kj,Ej(a,b),xi(a,b),Z$1(a),c;if(null!==X$1)throw Error(u$1(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T$1=null;Jj(a);Z$1(a);}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z$1(c);});gg();}}
    function Mj(a,b){var c=W$1;W$1|=1;try{return a(b)}finally{W$1=c,W$1===V$1&&gg();}}function Nj(a,b){var c=W$1;W$1&=-2;W$1|=ej;try{return a(b)}finally{W$1=c,W$1===V$1&&gg();}}
    function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X$1)for(c=X$1.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H$1(K$1);H$1(J$1);break;case 5:gh(d);break;case 4:eh();break;case 13:H$1(M$1);break;case 19:H$1(M$1);break;case 10:og(d);}c=c.return;}T$1=a;X$1=Sg(a.current,null);U$1=b;S$1=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1;}
    function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N$1.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next;}lh=0;P$1=O$1=N$1=null;mh=!1;if(null===X$1||null===X$1.return)return S$1=hj,kj=b,X$1=null;a:{var e=a,f=X$1.return,g=X$1,h=b;b=U$1;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
    null,g.memoizedState=null);}var m=0!==(M$1.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else {var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0;}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t;}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else {var y=wg(1073741823,null);y.tag=2;xg(g,y);}g.expirationTime=1073741823;
    break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q);}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return;}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g));}S$1!==
    jj&&(S$1=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return;}while(null!==p)}X$1=Pj(X$1);}catch(Xc){b=Xc;continue}break}while(1)}
    function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b);}function Bg(a){a>wi&&(wi=a);}function Kj(){for(;null!==X$1;)X$1=Qj(X$1);}function Gj(){for(;null!==X$1&&!Uf();)X$1=Qj(X$1);}function Qj(a){var b=Rj(a.alternate,a,U$1);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
    function Pj(a){X$1=a;do{var b=X$1.alternate;a=X$1.return;if(0===(X$1.effectTag&2048)){b=si(b,X$1,U$1);if(1===U$1||1!==X$1.childExpirationTime){for(var c=0,d=X$1.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling;}X$1.childExpirationTime=c;}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X$1.firstEffect),null!==X$1.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X$1.firstEffect),a.lastEffect=X$1.lastEffect),1<X$1.effectTag&&(null!==
    a.lastEffect?a.lastEffect.nextEffect=X$1:a.firstEffect=X$1,a.lastEffect=X$1));}else {b=zi(X$1);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048);}b=X$1.sibling;if(null!==b)return b;X$1=a;}while(null!==X$1);S$1===ti&&(S$1=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
    function Sj(a,b){do Dj();while(null!==rj);if((W$1&(fj|gj))!==V$1)throw Error(u$1(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u$1(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
    d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T$1&&(X$1=T$1=null,U$1=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W$1;W$1|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
    m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType;}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A;}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode;}t=A;}h=-1===x||-1===z?null:{start:x,end:z};}else h=null;}h=h||{start:0,end:0};}else h=
    null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y$1=e;do try{Tj();}catch(wb){if(null===Y$1)throw Error(u$1(330));Ei(Y$1,wb);Y$1=Y$1.nextEffect;}while(null!==Y$1);Y$1=e;do try{for(g=a,h=b;null!==Y$1;){var q=Y$1.effectTag;q&16&&Rb(Y$1.stateNode,"");if(q&128){var B=Y$1.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null);}}switch(q&1038){case 2:Pi(Y$1);Y$1.effectTag&=-3;break;case 6:Pi(Y$1);Y$1.effectTag&=-3;Si(Y$1.alternate,Y$1);break;case 1024:Y$1.effectTag&=-1025;break;case 1028:Y$1.effectTag&=
    -1025;Si(Y$1.alternate,Y$1);break;case 4:Si(Y$1.alternate,Y$1);break;case 8:l=Y$1,Mi(g,l,h),Ni(l);}Y$1=Y$1.nextEffect;}}catch(wb){if(null===Y$1)throw Error(u$1(330));Ei(Y$1,wb);Y$1=Y$1.nextEffect;}while(null!==Y$1);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
    (w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
    top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top;}fd=!!Dd;Ed=Dd=null;a.current=c;Y$1=e;do try{for(q=a;null!==Y$1;){var ub=Y$1.effectTag;ub&36&&Ji(q,Y$1.alternate,Y$1);if(ub&128){B=void 0;var vb=Y$1.ref;if(null!==vb){var Xc=Y$1.stateNode;switch(Y$1.tag){case 5:B=Xc;break;default:B=Xc;}"function"===typeof vb?vb(B):vb.current=B;}}Y$1=Y$1.nextEffect;}}catch(wb){if(null===Y$1)throw Error(u$1(330));Ei(Y$1,wb);Y$1=Y$1.nextEffect;}while(null!==Y$1);Y$1=
    null;Vf();W$1=f;}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y$1=e;null!==Y$1;)b=Y$1.nextEffect,Y$1.nextEffect=null,Y$1=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z$1(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W$1&ej)!==V$1)return null;gg();return null}function Tj(){for(;null!==Y$1;){var a=Y$1.effectTag;0!==(a&256)&&Gi(Y$1.alternate,Y$1);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y$1=Y$1.nextEffect;}}
    function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return !1;var a=rj;rj=null;if((W$1&(fj|gj))!==V$1)throw Error(u$1(331));var b=W$1;W$1|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c);}}catch(d){if(null===a)throw Error(u$1(330));Ei(a,d);}c=a.nextEffect;a.nextEffect=null;a=c;}W$1=b;gg();return !0}
    function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z$1(a);}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z$1(c);break}}c=c.return;}}
    function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T$1===a&&U$1===c?S$1===vi||S$1===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U$1):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z$1(a)));}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z$1(a);}var Rj;
    Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K$1.current)rg=!0;else {if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L$1(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I$1(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
    if(0!==d&&d>=c)return ji(a,b,c);I$1(M$1,M$1.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I$1(M$1,M$1.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I$1(M$1,M$1.current);if(!d)return null}return $h(a,b,c)}rg=!1;}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J$1.current);qg(b,c);e=oh(null,
    b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L$1(d)){var f=!0;Gf(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c);}else b.tag=0,R$1(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
    null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u$1(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
    case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u$1(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else {if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R$1(a,b,d,c),Xh();b=b.child;}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
    null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R$1(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R$1(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R$1(a,b,b.pendingProps,c),b.child;case 8:return R$1(a,
    b,b.pendingProps.children,c),b.child;case 12:return R$1(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I$1(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K$1.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
    k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=
    g;}R$1(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R$1(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L$1(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
    b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u$1(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return !1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return !0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64));}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a);}catch(e){}};}catch(d){}return !0}
    function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null;}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
    function bi(a){a=a.prototype;return !(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
    function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
    firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
    function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
    10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u$1(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
    function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
    function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0;}
    function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0);}
    function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b));}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b;}
    function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u$1(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L$1(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return;}while(null!==h);throw Error(u$1(171));}if(1===c.tag){var k=c.type;if(L$1(k)){c=Ff(c,k,h);break a}}c=h;}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
    d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b);}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b);}
    function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d;}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null);};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null;});};
    function gk(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
    function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a);};}bk(b,g,a,e);}else {f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a);};}Nj(function(){bk(b,g,a,e);});}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
    wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b);}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3));};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b);}};
    za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u$1(90));yb(d);Cb(d,e);}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1);}};Fa=Mj;
    Ga=function(a,b,c,d,e){var f=W$1;W$1|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W$1=f,W$1===V$1&&gg();}};Ha=function(){(W$1&(1|fj|gj))===V$1&&(Lj(),Dj());};Ia=function(a,b){var c=W$1;W$1|=2;try{return a(b)}finally{W$1=c,W$1===V$1&&gg();}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u$1(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd);},Da,Ea,id,mc,Dj,{current:!1}]};
    (function(a){var b=a.findFiberByHostInstance;return Yj(objectAssign({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.13.1",
    rendererPackageName:"react-dom"});var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$1=lk;var createPortal=kk;var findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u$1(188));throw Error(u$1(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
    var flushSync=function(a,b){if((W$1&(fj|gj))!==V$1)throw Error(u$1(187));var c=W$1;W$1|=1;try{return cg(99,a.bind(null,b))}finally{W$1=c,gg();}};var hydrate=function(a,b,c){if(!gk(b))throw Error(u$1(200));return ik(null,a,b,!0,c)};var render=function(a,b,c){if(!gk(b))throw Error(u$1(200));return ik(null,a,b,!1,c)};
    var unmountComponentAtNode=function(a){if(!gk(a))throw Error(u$1(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null;});}),!0):!1};var unstable_batchedUpdates=Mj;var unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
    var unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u$1(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u$1(38));return ik(a,b,c,!1,d)};var version$1="16.13.1";

    var reactDom_production_min = {
    	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED$1,
    	createPortal: createPortal,
    	findDOMNode: findDOMNode,
    	flushSync: flushSync,
    	hydrate: hydrate,
    	render: render,
    	unmountComponentAtNode: unmountComponentAtNode,
    	unstable_batchedUpdates: unstable_batchedUpdates,
    	unstable_createPortal: unstable_createPortal,
    	unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
    	version: version$1
    };

    /** @license React v0.19.1
     * scheduler-tracing.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var b=0;var __interactionsRef=null;var __subscriberRef=null;var unstable_clear=function(a){return a()};var unstable_getCurrent=function(){return null};var unstable_getThreadID=function(){return ++b};var unstable_subscribe=function(){};var unstable_trace=function(a,d,c){return c()};var unstable_unsubscribe=function(){};var unstable_wrap=function(a){return a};

    var schedulerTracing_production_min = {
    	__interactionsRef: __interactionsRef,
    	__subscriberRef: __subscriberRef,
    	unstable_clear: unstable_clear,
    	unstable_getCurrent: unstable_getCurrent,
    	unstable_getThreadID: unstable_getThreadID,
    	unstable_subscribe: unstable_subscribe,
    	unstable_trace: unstable_trace,
    	unstable_unsubscribe: unstable_unsubscribe,
    	unstable_wrap: unstable_wrap
    };

    var schedulerTracing_development = createCommonjsModule(function (module, exports) {
    });

    var tracing = createCommonjsModule(function (module) {

    {
      module.exports = schedulerTracing_production_min;
    }
    });

    var reactDom_development = createCommonjsModule(function (module, exports) {
    });

    var reactDom = createCommonjsModule(function (module) {

    function checkDCE() {
      /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
      ) {
        return;
      }
      try {
        // Verify that the code above has been dead code eliminated (DCE'd).
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        // DevTools shouldn't crash React, no matter what.
        // We should still report in case we break this code.
        console.error(err);
      }
    }

    {
      // DCE check should happen before ReactDOM bundle executes so that
      // DevTools can report bad minification during injection.
      checkDCE();
      module.exports = reactDom_production_min;
    }
    });

    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var b$1="function"===typeof Symbol&&Symbol.for,c=b$1?Symbol.for("react.element"):60103,d=b$1?Symbol.for("react.portal"):60106,e=b$1?Symbol.for("react.fragment"):60107,f=b$1?Symbol.for("react.strict_mode"):60108,g=b$1?Symbol.for("react.profiler"):60114,h=b$1?Symbol.for("react.provider"):60109,k=b$1?Symbol.for("react.context"):60110,l=b$1?Symbol.for("react.async_mode"):60111,m=b$1?Symbol.for("react.concurrent_mode"):60111,n$1=b$1?Symbol.for("react.forward_ref"):60112,p$1=b$1?Symbol.for("react.suspense"):60113,q$1=b$1?
    Symbol.for("react.suspense_list"):60120,r$1=b$1?Symbol.for("react.memo"):60115,t$1=b$1?Symbol.for("react.lazy"):60116,v$2=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$1=b$1?Symbol.for("react.responder"):60118,y$1=b$1?Symbol.for("react.scope"):60119;
    function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k:case n$1:case t$1:case r$1:case h:return a;default:return u}}case d:return u}}}function A$1(a){return z$1(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element$1=c;var ForwardRef=n$1;var Fragment$1=e;var Lazy=t$1;var Memo=r$1;var Portal=d;
    var Profiler$1=g;var StrictMode$1=f;var Suspense$1=p$1;var isAsyncMode=function(a){return A$1(a)||z$1(a)===l};var isConcurrentMode=A$1;var isContextConsumer=function(a){return z$1(a)===k};var isContextProvider=function(a){return z$1(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z$1(a)===n$1};var isFragment=function(a){return z$1(a)===e};var isLazy=function(a){return z$1(a)===t$1};
    var isMemo=function(a){return z$1(a)===r$1};var isPortal=function(a){return z$1(a)===d};var isProfiler=function(a){return z$1(a)===g};var isStrictMode=function(a){return z$1(a)===f};var isSuspense=function(a){return z$1(a)===p$1};
    var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r$1||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n$1||a.$$typeof===w$1||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v$2)};var typeOf=z$1;

    var reactIs_production_min = {
    	AsyncMode: AsyncMode,
    	ConcurrentMode: ConcurrentMode,
    	ContextConsumer: ContextConsumer,
    	ContextProvider: ContextProvider,
    	Element: Element$1,
    	ForwardRef: ForwardRef,
    	Fragment: Fragment$1,
    	Lazy: Lazy,
    	Memo: Memo,
    	Portal: Portal,
    	Profiler: Profiler$1,
    	StrictMode: StrictMode$1,
    	Suspense: Suspense$1,
    	isAsyncMode: isAsyncMode,
    	isConcurrentMode: isConcurrentMode,
    	isContextConsumer: isContextConsumer,
    	isContextProvider: isContextProvider,
    	isElement: isElement,
    	isForwardRef: isForwardRef,
    	isFragment: isFragment,
    	isLazy: isLazy,
    	isMemo: isMemo,
    	isPortal: isPortal,
    	isProfiler: isProfiler,
    	isStrictMode: isStrictMode,
    	isSuspense: isSuspense,
    	isValidElementType: isValidElementType,
    	typeOf: typeOf
    };

    var reactIs_development = createCommonjsModule(function (module, exports) {
    });

    var reactIs = createCommonjsModule(function (module) {

    {
      module.exports = reactIs_production_min;
    }
    });

    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    function emptyFunction() {}
    function emptyFunctionWithReset() {}
    emptyFunctionWithReset.resetWarningCache = emptyFunction;

    var factoryWithThrowingShims = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret_1) {
          // It is still safe when called from React.
          return;
        }
        var err = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
          'Use PropTypes.checkPropTypes() to call them. ' +
          'Read more at http://fb.me/use-check-prop-types'
        );
        err.name = 'Invariant Violation';
        throw err;
      }  shim.isRequired = shim;
      function getShim() {
        return shim;
      }  // Important!
      // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
      var ReactPropTypes = {
        array: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,

        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,

        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };

      ReactPropTypes.PropTypes = ReactPropTypes;

      return ReactPropTypes;
    };

    var propTypes = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      module.exports = factoryWithThrowingShims();
    }
    });

    var ReactReduxContext =
    /*#__PURE__*/
    react.createContext(null);

    // Default to a dummy "batch" implementation that just runs the callback
    function defaultNoopBatch(callback) {
      callback();
    }

    var batch = defaultNoopBatch; // Allow injecting another batching function later

    var setBatch = function setBatch(newBatch) {
      return batch = newBatch;
    }; // Supply a getter just to skip dealing with ESM bindings

    var getBatch = function getBatch() {
      return batch;
    };

    // well as nesting subscriptions of descendant components, so that we can ensure the
    // ancestor components re-render before descendants

    var nullListeners = {
      notify: function notify() {}
    };

    function createListenerCollection() {
      var batch = getBatch();
      var first = null;
      var last = null;
      return {
        clear: function clear() {
          first = null;
          last = null;
        },
        notify: function notify() {
          batch(function () {
            var listener = first;

            while (listener) {
              listener.callback();
              listener = listener.next;
            }
          });
        },
        get: function get() {
          var listeners = [];
          var listener = first;

          while (listener) {
            listeners.push(listener);
            listener = listener.next;
          }

          return listeners;
        },
        subscribe: function subscribe(callback) {
          var isSubscribed = true;
          var listener = last = {
            callback: callback,
            next: null,
            prev: last
          };

          if (listener.prev) {
            listener.prev.next = listener;
          } else {
            first = listener;
          }

          return function unsubscribe() {
            if (!isSubscribed || first === null) return;
            isSubscribed = false;

            if (listener.next) {
              listener.next.prev = listener.prev;
            } else {
              last = listener.prev;
            }

            if (listener.prev) {
              listener.prev.next = listener.next;
            } else {
              first = listener.next;
            }
          };
        }
      };
    }

    var Subscription =
    /*#__PURE__*/
    function () {
      function Subscription(store, parentSub) {
        this.store = store;
        this.parentSub = parentSub;
        this.unsubscribe = null;
        this.listeners = nullListeners;
        this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
      }

      var _proto = Subscription.prototype;

      _proto.addNestedSub = function addNestedSub(listener) {
        this.trySubscribe();
        return this.listeners.subscribe(listener);
      };

      _proto.notifyNestedSubs = function notifyNestedSubs() {
        this.listeners.notify();
      };

      _proto.handleChangeWrapper = function handleChangeWrapper() {
        if (this.onStateChange) {
          this.onStateChange();
        }
      };

      _proto.isSubscribed = function isSubscribed() {
        return Boolean(this.unsubscribe);
      };

      _proto.trySubscribe = function trySubscribe() {
        if (!this.unsubscribe) {
          this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
          this.listeners = createListenerCollection();
        }
      };

      _proto.tryUnsubscribe = function tryUnsubscribe() {
        if (this.unsubscribe) {
          this.unsubscribe();
          this.unsubscribe = null;
          this.listeners.clear();
          this.listeners = nullListeners;
        }
      };

      return Subscription;
    }();

    function Provider(_ref) {
      var store = _ref.store,
          context = _ref.context,
          children = _ref.children;
      var contextValue = react.useMemo(function () {
        var subscription = new Subscription(store);
        subscription.onStateChange = subscription.notifyNestedSubs;
        return {
          store: store,
          subscription: subscription
        };
      }, [store]);
      var previousState = react.useMemo(function () {
        return store.getState();
      }, [store]);
      react.useEffect(function () {
        var subscription = contextValue.subscription;
        subscription.trySubscribe();

        if (previousState !== store.getState()) {
          subscription.notifyNestedSubs();
        }

        return function () {
          subscription.tryUnsubscribe();
          subscription.onStateChange = null;
        };
      }, [contextValue, previousState]);
      var Context = context || ReactReduxContext;
      return react.createElement(Context.Provider, {
        value: contextValue
      }, children);
    }

    var FORWARD_REF_STATICS = {
      '$$typeof': true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      '$$typeof': true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

    // To get around it, we can conditionally useEffect on the server (no-op) and
    // useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
    // subscription callback always has the selector from the latest render commit
    // available, otherwise a store update may happen between render and the effect,
    // which may cause missed updates; we also must ensure the store subscription
    // is created synchronously, otherwise a store update may occur before the
    // subscription is created and an inconsistent state may be observed

    var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react.useLayoutEffect : react.useEffect;

    function symbolObservablePonyfill(root) {
    	var result;
    	var Symbol = root.Symbol;

    	if (typeof Symbol === 'function') {
    		if (Symbol.observable) {
    			result = Symbol.observable;
    		} else {
    			result = Symbol('observable');
    			Symbol.observable = result;
    		}
    	} else {
    		result = '@@observable';
    	}

    	return result;
    }

    /* global window */

    var root;

    if (typeof self !== 'undefined') {
      root = self;
    } else if (typeof window !== 'undefined') {
      root = window;
    } else if (typeof global !== 'undefined') {
      root = global;
    } else if (typeof module !== 'undefined') {
      root = module;
    } else {
      root = Function('return this')();
    }

    var result = symbolObservablePonyfill(root);

    /**
     * These are private action types reserved by Redux.
     * For any unknown actions, you must return the current state.
     * If the current state is undefined, you must return the initial state.
     * Do not reference these action types directly in your code.
     */
    var randomString = function randomString() {
      return Math.random().toString(36).substring(7).split('').join('.');
    };

    var ActionTypes = {
      INIT: "@@redux/INIT" + randomString(),
      REPLACE: "@@redux/REPLACE" + randomString(),
      PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
      }
    };

    /**
     * @param {any} obj The object to inspect.
     * @returns {boolean} True if the argument appears to be a plain object.
     */
    function isPlainObject(obj) {
      if (typeof obj !== 'object' || obj === null) return false;
      var proto = obj;

      while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
      }

      return Object.getPrototypeOf(obj) === proto;
    }

    /**
     * Creates a Redux store that holds the state tree.
     * The only way to change the data in the store is to call `dispatch()` on it.
     *
     * There should only be a single store in your app. To specify how different
     * parts of the state tree respond to actions, you may combine several reducers
     * into a single reducer function by using `combineReducers`.
     *
     * @param {Function} reducer A function that returns the next state tree, given
     * the current state tree and the action to handle.
     *
     * @param {any} [preloadedState] The initial state. You may optionally specify it
     * to hydrate the state from the server in universal apps, or to restore a
     * previously serialized user session.
     * If you use `combineReducers` to produce the root reducer function, this must be
     * an object with the same shape as `combineReducers` keys.
     *
     * @param {Function} [enhancer] The store enhancer. You may optionally specify it
     * to enhance the store with third-party capabilities such as middleware,
     * time travel, persistence, etc. The only store enhancer that ships with Redux
     * is `applyMiddleware()`.
     *
     * @returns {Store} A Redux store that lets you read the state, dispatch actions
     * and subscribe to changes.
     */

    function createStore(reducer, preloadedState, enhancer) {
      var _ref2;

      if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
        throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
      }

      if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
      }

      if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
          throw new Error('Expected the enhancer to be a function.');
        }

        return enhancer(createStore)(reducer, preloadedState);
      }

      if (typeof reducer !== 'function') {
        throw new Error('Expected the reducer to be a function.');
      }

      var currentReducer = reducer;
      var currentState = preloadedState;
      var currentListeners = [];
      var nextListeners = currentListeners;
      var isDispatching = false;
      /**
       * This makes a shallow copy of currentListeners so we can use
       * nextListeners as a temporary list while dispatching.
       *
       * This prevents any bugs around consumers calling
       * subscribe/unsubscribe in the middle of a dispatch.
       */

      function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
          nextListeners = currentListeners.slice();
        }
      }
      /**
       * Reads the state tree managed by the store.
       *
       * @returns {any} The current state tree of your application.
       */


      function getState() {
        if (isDispatching) {
          throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
        }

        return currentState;
      }
      /**
       * Adds a change listener. It will be called any time an action is dispatched,
       * and some part of the state tree may potentially have changed. You may then
       * call `getState()` to read the current state tree inside the callback.
       *
       * You may call `dispatch()` from a change listener, with the following
       * caveats:
       *
       * 1. The subscriptions are snapshotted just before every `dispatch()` call.
       * If you subscribe or unsubscribe while the listeners are being invoked, this
       * will not have any effect on the `dispatch()` that is currently in progress.
       * However, the next `dispatch()` call, whether nested or not, will use a more
       * recent snapshot of the subscription list.
       *
       * 2. The listener should not expect to see all state changes, as the state
       * might have been updated multiple times during a nested `dispatch()` before
       * the listener is called. It is, however, guaranteed that all subscribers
       * registered before the `dispatch()` started will be called with the latest
       * state by the time it exits.
       *
       * @param {Function} listener A callback to be invoked on every dispatch.
       * @returns {Function} A function to remove this change listener.
       */


      function subscribe(listener) {
        if (typeof listener !== 'function') {
          throw new Error('Expected the listener to be a function.');
        }

        if (isDispatching) {
          throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
        }

        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
          if (!isSubscribed) {
            return;
          }

          if (isDispatching) {
            throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
          }

          isSubscribed = false;
          ensureCanMutateNextListeners();
          var index = nextListeners.indexOf(listener);
          nextListeners.splice(index, 1);
          currentListeners = null;
        };
      }
      /**
       * Dispatches an action. It is the only way to trigger a state change.
       *
       * The `reducer` function, used to create the store, will be called with the
       * current state tree and the given `action`. Its return value will
       * be considered the **next** state of the tree, and the change listeners
       * will be notified.
       *
       * The base implementation only supports plain object actions. If you want to
       * dispatch a Promise, an Observable, a thunk, or something else, you need to
       * wrap your store creating function into the corresponding middleware. For
       * example, see the documentation for the `redux-thunk` package. Even the
       * middleware will eventually dispatch plain object actions using this method.
       *
       * @param {Object} action A plain object representing “what changed”. It is
       * a good idea to keep actions serializable so you can record and replay user
       * sessions, or use the time travelling `redux-devtools`. An action must have
       * a `type` property which may not be `undefined`. It is a good idea to use
       * string constants for action types.
       *
       * @returns {Object} For convenience, the same action object you dispatched.
       *
       * Note that, if you use a custom middleware, it may wrap `dispatch()` to
       * return something else (for example, a Promise you can await).
       */


      function dispatch(action) {
        if (!isPlainObject(action)) {
          throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
        }

        if (typeof action.type === 'undefined') {
          throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
        }

        if (isDispatching) {
          throw new Error('Reducers may not dispatch actions.');
        }

        try {
          isDispatching = true;
          currentState = currentReducer(currentState, action);
        } finally {
          isDispatching = false;
        }

        var listeners = currentListeners = nextListeners;

        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          listener();
        }

        return action;
      }
      /**
       * Replaces the reducer currently used by the store to calculate the state.
       *
       * You might need this if your app implements code splitting and you want to
       * load some of the reducers dynamically. You might also need this if you
       * implement a hot reloading mechanism for Redux.
       *
       * @param {Function} nextReducer The reducer for the store to use instead.
       * @returns {void}
       */


      function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') {
          throw new Error('Expected the nextReducer to be a function.');
        }

        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
        // Any reducers that existed in both the new and old rootReducer
        // will receive the previous state. This effectively populates
        // the new state tree with any relevant data from the old one.

        dispatch({
          type: ActionTypes.REPLACE
        });
      }
      /**
       * Interoperability point for observable/reactive libraries.
       * @returns {observable} A minimal observable of state changes.
       * For more information, see the observable proposal:
       * https://github.com/tc39/proposal-observable
       */


      function observable() {
        var _ref;

        var outerSubscribe = subscribe;
        return _ref = {
          /**
           * The minimal observable subscription method.
           * @param {Object} observer Any object that can be used as an observer.
           * The observer object should have a `next` method.
           * @returns {subscription} An object with an `unsubscribe` method that can
           * be used to unsubscribe the observable from the store, and prevent further
           * emission of values from the observable.
           */
          subscribe: function subscribe(observer) {
            if (typeof observer !== 'object' || observer === null) {
              throw new TypeError('Expected the observer to be an object.');
            }

            function observeState() {
              if (observer.next) {
                observer.next(getState());
              }
            }

            observeState();
            var unsubscribe = outerSubscribe(observeState);
            return {
              unsubscribe: unsubscribe
            };
          }
        }, _ref[result] = function () {
          return this;
        }, _ref;
      } // When a store is created, an "INIT" action is dispatched so that every
      // reducer returns their initial state. This effectively populates
      // the initial state tree.


      dispatch({
        type: ActionTypes.INIT
      });
      return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
      }, _ref2[result] = observable, _ref2;
    }

    function getUndefinedStateErrorMessage(key, action) {
      var actionType = action && action.type;
      var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
      return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
    }

    function assertReducerShape(reducers) {
      Object.keys(reducers).forEach(function (key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, {
          type: ActionTypes.INIT
        });

        if (typeof initialState === 'undefined') {
          throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
        }

        if (typeof reducer(undefined, {
          type: ActionTypes.PROBE_UNKNOWN_ACTION()
        }) === 'undefined') {
          throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
        }
      });
    }
    /**
     * Turns an object whose values are different reducer functions, into a single
     * reducer function. It will call every child reducer, and gather their results
     * into a single state object, whose keys correspond to the keys of the passed
     * reducer functions.
     *
     * @param {Object} reducers An object whose values correspond to different
     * reducer functions that need to be combined into one. One handy way to obtain
     * it is to use ES6 `import * as reducers` syntax. The reducers may never return
     * undefined for any action. Instead, they should return their initial state
     * if the state passed to them was undefined, and the current state for any
     * unrecognized action.
     *
     * @returns {Function} A reducer function that invokes every reducer inside the
     * passed object, and builds a state object with the same shape.
     */


    function combineReducers(reducers) {
      var reducerKeys = Object.keys(reducers);
      var finalReducers = {};

      for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];

        if (typeof reducers[key] === 'function') {
          finalReducers[key] = reducers[key];
        }
      }

      var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same

      var shapeAssertionError;

      try {
        assertReducerShape(finalReducers);
      } catch (e) {
        shapeAssertionError = e;
      }

      return function combination(state, action) {
        if (state === void 0) {
          state = {};
        }

        if (shapeAssertionError) {
          throw shapeAssertionError;
        }

        var hasChanged = false;
        var nextState = {};

        for (var _i = 0; _i < finalReducerKeys.length; _i++) {
          var _key = finalReducerKeys[_i];
          var reducer = finalReducers[_key];
          var previousStateForKey = state[_key];
          var nextStateForKey = reducer(previousStateForKey, action);

          if (typeof nextStateForKey === 'undefined') {
            var errorMessage = getUndefinedStateErrorMessage(_key, action);
            throw new Error(errorMessage);
          }

          nextState[_key] = nextStateForKey;
          hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }

        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
      };
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        keys.push.apply(keys, Object.getOwnPropertySymbols(object));
      }

      if (enumerableOnly) keys = keys.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      return keys;
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(source, true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(source).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    /**
     * Composes single-argument functions from right to left. The rightmost
     * function can take multiple arguments as it provides the signature for
     * the resulting composite function.
     *
     * @param {...Function} funcs The functions to compose.
     * @returns {Function} A function obtained by composing the argument functions
     * from right to left. For example, compose(f, g, h) is identical to doing
     * (...args) => f(g(h(...args))).
     */
    function compose() {
      for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }

      if (funcs.length === 0) {
        return function (arg) {
          return arg;
        };
      }

      if (funcs.length === 1) {
        return funcs[0];
      }

      return funcs.reduce(function (a, b) {
        return function () {
          return a(b.apply(void 0, arguments));
        };
      });
    }

    /**
     * Creates a store enhancer that applies middleware to the dispatch method
     * of the Redux store. This is handy for a variety of tasks, such as expressing
     * asynchronous actions in a concise manner, or logging every action payload.
     *
     * See `redux-thunk` package as an example of the Redux middleware.
     *
     * Because middleware is potentially asynchronous, this should be the first
     * store enhancer in the composition chain.
     *
     * Note that each middleware will be given the `dispatch` and `getState` functions
     * as named arguments.
     *
     * @param {...Function} middlewares The middleware chain to be applied.
     * @returns {Function} A store enhancer applying the middleware.
     */

    function applyMiddleware() {
      for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
        middlewares[_key] = arguments[_key];
      }

      return function (createStore) {
        return function () {
          var store = createStore.apply(void 0, arguments);

          var _dispatch = function dispatch() {
            throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
          };

          var middlewareAPI = {
            getState: store.getState,
            dispatch: function dispatch() {
              return _dispatch.apply(void 0, arguments);
            }
          };
          var chain = middlewares.map(function (middleware) {
            return middleware(middlewareAPI);
          });
          _dispatch = compose.apply(void 0, chain)(store.dispatch);
          return _objectSpread2({}, store, {
            dispatch: _dispatch
          });
        };
      };
    }

    /**
     * A hook to access the value of the `ReactReduxContext`. This is a low-level
     * hook that you should usually not need to call directly.
     *
     * @returns {any} the value of the `ReactReduxContext`
     *
     * @example
     *
     * import React from 'react'
     * import { useReduxContext } from 'react-redux'
     *
     * export const CounterComponent = ({ value }) => {
     *   const { store } = useReduxContext()
     *   return <div>{store.getState()}</div>
     * }
     */

    function useReduxContext() {
      var contextValue = react.useContext(ReactReduxContext);

      return contextValue;
    }

    /**
     * Hook factory, which creates a `useStore` hook bound to a given context.
     *
     * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
     * @returns {Function} A `useStore` hook bound to the specified context.
     */

    function createStoreHook(context) {
      if (context === void 0) {
        context = ReactReduxContext;
      }

      var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function () {
        return react.useContext(context);
      };
      return function useStore() {
        var _useReduxContext = useReduxContext$1(),
            store = _useReduxContext.store;

        return store;
      };
    }
    /**
     * A hook to access the redux store.
     *
     * @returns {any} the redux store
     *
     * @example
     *
     * import React from 'react'
     * import { useStore } from 'react-redux'
     *
     * export const ExampleComponent = () => {
     *   const store = useStore()
     *   return <div>{store.getState()}</div>
     * }
     */

    var useStore =
    /*#__PURE__*/
    createStoreHook();

    /**
     * Hook factory, which creates a `useDispatch` hook bound to a given context.
     *
     * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
     * @returns {Function} A `useDispatch` hook bound to the specified context.
     */

    function createDispatchHook(context) {
      if (context === void 0) {
        context = ReactReduxContext;
      }

      var useStore$1 = context === ReactReduxContext ? useStore : createStoreHook(context);
      return function useDispatch() {
        var store = useStore$1();
        return store.dispatch;
      };
    }
    /**
     * A hook to access the redux `dispatch` function.
     *
     * @returns {any|function} redux store's `dispatch` function
     *
     * @example
     *
     * import React, { useCallback } from 'react'
     * import { useDispatch } from 'react-redux'
     *
     * export const CounterComponent = ({ value }) => {
     *   const dispatch = useDispatch()
     *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
     *   return (
     *     <div>
     *       <span>{value}</span>
     *       <button onClick={increaseCounter}>Increase counter</button>
     *     </div>
     *   )
     * }
     */

    var useDispatch =
    /*#__PURE__*/
    createDispatchHook();

    var refEquality = function refEquality(a, b) {
      return a === b;
    };

    function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
      var _useReducer = react.useReducer(function (s) {
        return s + 1;
      }, 0),
          forceRender = _useReducer[1];

      var subscription = react.useMemo(function () {
        return new Subscription(store, contextSub);
      }, [store, contextSub]);
      var latestSubscriptionCallbackError = react.useRef();
      var latestSelector = react.useRef();
      var latestStoreState = react.useRef();
      var latestSelectedState = react.useRef();
      var storeState = store.getState();
      var selectedState;

      try {
        if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
          selectedState = selector(storeState);
        } else {
          selectedState = latestSelectedState.current;
        }
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
        }

        throw err;
      }

      useIsomorphicLayoutEffect(function () {
        latestSelector.current = selector;
        latestStoreState.current = storeState;
        latestSelectedState.current = selectedState;
        latestSubscriptionCallbackError.current = undefined;
      });
      useIsomorphicLayoutEffect(function () {
        function checkForUpdates() {
          try {
            var newSelectedState = latestSelector.current(store.getState());

            if (equalityFn(newSelectedState, latestSelectedState.current)) {
              return;
            }

            latestSelectedState.current = newSelectedState;
          } catch (err) {
            // we ignore all errors here, since when the component
            // is re-rendered, the selectors are called again, and
            // will throw again, if neither props nor store state
            // changed
            latestSubscriptionCallbackError.current = err;
          }

          forceRender();
        }

        subscription.onStateChange = checkForUpdates;
        subscription.trySubscribe();
        checkForUpdates();
        return function () {
          return subscription.tryUnsubscribe();
        };
      }, [store, subscription]);
      return selectedState;
    }
    /**
     * Hook factory, which creates a `useSelector` hook bound to a given context.
     *
     * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
     * @returns {Function} A `useSelector` hook bound to the specified context.
     */


    function createSelectorHook(context) {
      if (context === void 0) {
        context = ReactReduxContext;
      }

      var useReduxContext$1 = context === ReactReduxContext ? useReduxContext : function () {
        return react.useContext(context);
      };
      return function useSelector(selector, equalityFn) {
        if (equalityFn === void 0) {
          equalityFn = refEquality;
        }

        var _useReduxContext = useReduxContext$1(),
            store = _useReduxContext.store,
            contextSub = _useReduxContext.subscription;

        var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
        react.useDebugValue(selectedState);
        return selectedState;
      };
    }
    /**
     * A hook to access the redux store's state. This hook takes a selector function
     * as an argument. The selector is called with the store state.
     *
     * This hook takes an optional equality comparison function as the second parameter
     * that allows you to customize the way the selected state is compared to determine
     * whether the component needs to be re-rendered.
     *
     * @param {Function} selector the selector function
     * @param {Function=} equalityFn the function that will be used to determine equality
     *
     * @returns {any} the selected state
     *
     * @example
     *
     * import React from 'react'
     * import { useSelector } from 'react-redux'
     *
     * export const CounterComponent = () => {
     *   const counter = useSelector(state => state.counter)
     *   return <div>{counter}</div>
     * }
     */

    var useSelector =
    /*#__PURE__*/
    createSelectorHook();

    setBatch(reactDom.unstable_batchedUpdates);

    function n$2(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t$2(n){return !!n&&!!n[Q$2]}function r$2(n){return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var t=Object.getPrototypeOf(n);return !t||t===Object.prototype}(n)||Array.isArray(n)||!!n[L$2]||!!n.constructor[L$2]||s(n)||v$3(n))}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:Z$2)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n);})):n.forEach((function(r,e){return t(e,r,n)}));}function o(n){var t=n[Q$2];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v$3(n)?3:0}function u$2(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f$1(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r;}function c$1(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X$2&&n instanceof Map}function v$3(n){return q$2&&n instanceof Set}function p$2(n){return n.o||n.t}function l$1(n){if(Array.isArray(n))return n.slice();var t=nn(n);delete t[Q$2];for(var r=Z$2(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),t)}function d$1(n,e){b$2(n)||t$2(n)||!r$2(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h$1),Object.freeze(n),e&&i(n,(function(n,t){return d$1(t,!0)}),!0));}function h$1(){n$2(2);}function b$2(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function y$2(t){var r=tn[t];return r||n$2(19,t),r}function m$1(n,t){tn[n]=t;}function _(){return U$2}function j(n,t){t&&(y$2("Patches"),n.u=[],n.s=[],n.v=t);}function g$1(n){O$2(n),n.p.forEach(S$2),n.p=null;}function O$2(n){n===U$2&&(U$2=n.l);}function w$2(n){return U$2={p:[],l:U$2,h:n,m:!0,_:0}}function S$2(n){var t=n[Q$2];0===t.i||1===t.i?t.j():t.g=!0;}function P$2(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.O||y$2("ES5").S(e,t,o),o?(i[Q$2].P&&(g$1(e),n$2(4)),r$2(t)&&(t=M$2(e,t),e.l||x$2(e,t)),e.u&&y$2("Patches").M(i[Q$2],t,e.u,e.s)):t=M$2(e,i,[]),g$1(e),e.u&&e.v(e.u,e.s),t!==H$2?t:void 0}function M$2(n,t,r){if(b$2(t))return t;var e=t[Q$2];if(!e)return i(t,(function(i,o){return A$2(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x$2(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l$1(e.k):e.o;i(3===e.i?new Set(o):o,(function(t,i){return A$2(n,e,o,t,i,r)})),x$2(n,o,!1),r&&n.u&&y$2("Patches").R(e,r,n.u,n.s);}return e.o}function A$2(e,i,o,a,c,s){if(t$2(c)){var v=M$2(e,c,s&&i&&3!==i.i&&!u$2(i.D,a)?s.concat(a):void 0);if(f$1(o,a,v),!t$2(v))return;e.m=!1;}if(r$2(c)&&!b$2(c)){if(!e.h.N&&e._<1)return;M$2(e,c),i&&i.A.l||x$2(e,c);}}function x$2(n,t,r){void 0===r&&(r=!1),n.h.N&&n.m&&d$1(t,r);}function z$2(n,t){var r=n[Q$2];return (r?p$2(r):n)[t]}function I$2(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r);}}function E$2(n){n.P||(n.P=!0,n.l&&E$2(n.l));}function k$1(n){n.o||(n.o=l$1(n.t));}function R$2(n,t,r){var e=s(t)?y$2("MapSet").T(t,r):v$3(t)?y$2("MapSet").F(t,r):n.O?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=rn;r&&(i=[e],o=en);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):y$2("ES5").J(t,r);return (r?r.A:_()).p.push(e),e}function D$1(e){return t$2(e)||n$2(22,e),function n(t){if(!r$2(t))return t;var e,u=t[Q$2],c=o(t);if(u){if(!u.P&&(u.i<4||!y$2("ES5").K(u)))return u.t;u.I=!0,e=N$2(t,c),u.I=!1;}else e=N$2(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f$1(e,t,n(r));})),3===c?new Set(e):e}(e)}function N$2(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l$1(n)}function T$2(){function r(n,t){var r=s[n];return r?r.enumerable=t:s[n]=r={configurable:!0,enumerable:t,get:function(){var t=this[Q$2];return rn.get(t,n)},set:function(t){var r=this[Q$2];rn.set(r,n,t);}},r}function e(n){for(var t=n.length-1;t>=0;t--){var r=n[t][Q$2];if(!r.P)switch(r.i){case 5:a(r)&&E$2(r);break;case 4:o(r)&&E$2(r);}}}function o(n){for(var t=n.t,r=n.k,e=Z$2(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q$2){var a=t[o];if(void 0===a&&!u$2(t,o))return !0;var f=r[o],s=f&&f[Q$2];if(s?s.t!==a:!c$1(f,a))return !0}}var v=!!t[Q$2];return e.length!==Z$2(t).length+(v?0:1)}function a(n){var t=n.k;if(t.length!==n.t.length)return !0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return !(!r||r.get)}var s={};m$1("ES5",{J:function(n,t){var e=Array.isArray(n),i=function(n,t){if(n){for(var e=Array(t.length),i=0;i<t.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=nn(t);delete o[Q$2];for(var u=Z$2(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,n||!!o[f].enumerable);}return Object.create(Object.getPrototypeOf(t),o)}(e,n),o={i:e?5:4,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q$2,{value:o,writable:!0}),i},S:function(n,r,o){o?t$2(r)&&r[Q$2].A===n&&e(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[Q$2];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(t){t!==Q$2&&(void 0!==e[t]||u$2(e,t)?f[t]||n(o[t]):(f[t]=!0,E$2(r)));})),i(e,(function(n){void 0!==o[n]||u$2(o,n)||(f[n]=!1,E$2(r));}));else if(5===c){if(a(r)&&(E$2(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l]);}}}}(n.p[0]),e(n.p));},K:function(n){return 4===n.i?o(n):a(n)}});}var G$2,U$2,W$2="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X$2="undefined"!=typeof Map,q$2="undefined"!=typeof Set,B$1="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H$2=W$2?Symbol.for("immer-nothing"):((G$2={})["immer-nothing"]=!0,G$2),L$2=W$2?Symbol.for("immer-draftable"):"__$immer_draftable",Q$2=W$2?Symbol.for("immer-state"):"__$immer_state",Z$2="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,nn=Object.getOwnPropertyDescriptors||function(n){var t={};return Z$2(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r);})),t},tn={},rn={get:function(n,t){if(t===Q$2)return n;var e=p$2(n);if(!u$2(e,t))return function(n,t,r){var e,i=I$2(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r$2(i)?i:i===z$2(n.t,t)?(k$1(n),n.o[t]=R$2(n.A.h,i,n)):i},has:function(n,t){return t in p$2(n)},ownKeys:function(n){return Reflect.ownKeys(p$2(n))},set:function(n,t,r){var e=I$2(p$2(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(n.D[t]=!0,!n.P){if(c$1(r,z$2(p$2(n),t))&&(void 0!==r||u$2(n.t,t)))return !0;k$1(n),E$2(n);}return n.o[t]=r,!0},deleteProperty:function(n,t){return void 0!==z$2(n.t,t)||t in n.t?(n.D[t]=!1,k$1(n),E$2(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p$2(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n$2(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n$2(12);}},en={};i(rn,(function(n,t){en[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)};})),en.deleteProperty=function(t,r){return rn.deleteProperty.call(this,t[0],r)},en.set=function(t,r,e){return rn.set.call(this,t[0],r,e,t[0])};var on=function(){function e(n){this.O=B$1,this.N="production"!==process.env.NODE_ENV,"boolean"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),"boolean"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this);}var i=e.prototype;return i.produce=function(t,e,i){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(n){var t=this;void 0===n&&(n=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(n,(function(n){var r;return (r=e).call.apply(r,[t,n].concat(i))}))}}var a;if("function"!=typeof e&&n$2(6),void 0!==i&&"function"!=typeof i&&n$2(7),r$2(t)){var f=w$2(this),c=R$2(this,t,void 0),s=!0;try{a=e(c),s=!1;}finally{s?g$1(f):O$2(f);}return "undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return j(f,i),P$2(n,f)}),(function(n){throw g$1(f),n})):(j(f,i),P$2(a,f))}if(!t||"object"!=typeof t){if((a=e(t))===H$2)return;return void 0===a&&(a=t),this.N&&d$1(a,!0),a}n$2(21,t);},i.produceWithPatches=function(n,t){var r,e,i=this;return "function"==typeof n?function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(e))}))}:[this.produce(n,t,(function(n,t){r=n,e=t;})),r,e]},i.createDraft=function(e){r$2(e)||n$2(8),t$2(e)&&(e=D$1(e));var i=w$2(this),o=R$2(this,e,void 0);return o[Q$2].C=!0,O$2(i),o},i.finishDraft=function(t,r){var e=t&&t[Q$2];var i=e.A;return j(i,r),P$2(void 0,i)},i.setAutoFreeze=function(n){this.N=n;},i.setUseProxies=function(t){t&&!B$1&&n$2(20),this.O=t;},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=y$2("Patches").$;return t$2(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),un=new on,an=un.produce,fn=un.produceWithPatches.bind(un),cn=un.setAutoFreeze.bind(un),sn=un.setUseProxies.bind(un),vn=un.applyPatches.bind(un),pn=un.createDraft.bind(un),ln=un.finishDraft.bind(un);

    function defaultEqualityCheck(a, b) {
      return a === b;
    }

    function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
      if (prev === null || next === null || prev.length !== next.length) {
        return false;
      }

      // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
      var length = prev.length;
      for (var i = 0; i < length; i++) {
        if (!equalityCheck(prev[i], next[i])) {
          return false;
        }
      }

      return true;
    }

    function defaultMemoize(func) {
      var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

      var lastArgs = null;
      var lastResult = null;
      // we reference arguments instead of spreading them for performance reasons
      return function () {
        if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
          // apply arguments instead of spreading for performance.
          lastResult = func.apply(null, arguments);
        }

        lastArgs = arguments;
        return lastResult;
      };
    }

    function getDependencies(funcs) {
      var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

      if (!dependencies.every(function (dep) {
        return typeof dep === 'function';
      })) {
        var dependencyTypes = dependencies.map(function (dep) {
          return typeof dep;
        }).join(', ');
        throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
      }

      return dependencies;
    }

    function createSelectorCreator(memoize) {
      for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        memoizeOptions[_key - 1] = arguments[_key];
      }

      return function () {
        for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          funcs[_key2] = arguments[_key2];
        }

        var recomputations = 0;
        var resultFunc = funcs.pop();
        var dependencies = getDependencies(funcs);

        var memoizedResultFunc = memoize.apply(undefined, [function () {
          recomputations++;
          // apply arguments instead of spreading for performance.
          return resultFunc.apply(null, arguments);
        }].concat(memoizeOptions));

        // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
        var selector = memoize(function () {
          var params = [];
          var length = dependencies.length;

          for (var i = 0; i < length; i++) {
            // apply arguments instead of spreading and mutate a local list of params for performance.
            params.push(dependencies[i].apply(null, arguments));
          }

          // apply arguments instead of spreading for performance.
          return memoizedResultFunc.apply(null, params);
        });

        selector.resultFunc = resultFunc;
        selector.dependencies = dependencies;
        selector.recomputations = function () {
          return recomputations;
        };
        selector.resetRecomputations = function () {
          return recomputations = 0;
        };
        return selector;
      };
    }

    var createSelector = createSelectorCreator(defaultMemoize);

    function createThunkMiddleware(extraArgument) {
      return function (_ref) {
        var dispatch = _ref.dispatch,
            getState = _ref.getState;
        return function (next) {
          return function (action) {
            if (typeof action === 'function') {
              return action(dispatch, getState, extraArgument);
            }

            return next(action);
          };
        };
      };
    }

    var thunk = createThunkMiddleware();
    thunk.withExtraArgument = createThunkMiddleware;

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;

      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }

      return _construct.apply(null, arguments);
    }

    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : undefined;

      _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;

        if (typeof Class !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }

        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) return _cache.get(Class);

          _cache.set(Class, Wrapper);
        }

        function Wrapper() {
          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }

        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class);
      };

      return _wrapNativeSuper(Class);
    }

    /**
     * @public
     */

    var composeWithDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    };

    /**
     * Returns true if the passed value is "plain" object, i.e. an object whose
     * protoype is the root `Object.prototype`. This includes objects created
     * using object literals, but not for instance for class instances.
     *
     * @param {any} value The value to inspect.
     * @returns {boolean} True if the argument appears to be a plain object.
     */
    function isPlainObject$1(value) {
      if (typeof value !== 'object' || value === null) return false;
      var proto = value;

      while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
      }

      return Object.getPrototypeOf(value) === proto;
    }
    /**
     * @public
     */

    var MiddlewareArray =
    /*#__PURE__*/
    function (_Array) {
      _inheritsLoose(MiddlewareArray, _Array);

      function MiddlewareArray() {
        return _Array.apply(this, arguments) || this;
      }

      var _proto = MiddlewareArray.prototype;

      _proto.concat = function concat() {
        var _Array$prototype$conc;

        for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
          arr[_key] = arguments[_key];
        }

        return _construct(MiddlewareArray, (_Array$prototype$conc = _Array.prototype.concat).call.apply(_Array$prototype$conc, [this].concat(arr)));
      };

      _proto.prepend = function prepend() {
        for (var _len2 = arguments.length, arr = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          arr[_key2] = arguments[_key2];
        }

        if (arr.length === 1 && Array.isArray(arr[0])) {
          return _construct(MiddlewareArray, arr[0].concat(this));
        }

        return _construct(MiddlewareArray, arr.concat(this));
      };

      return MiddlewareArray;
    }(
    /*#__PURE__*/
    _wrapNativeSuper(Array));

    function isBoolean(x) {
      return typeof x === 'boolean';
    }

    function curryGetDefaultMiddleware() {
      return function curriedGetDefaultMiddleware(options) {
        return getDefaultMiddleware(options);
      };
    }
    /**
     * Returns any array containing the default middleware installed by
     * `configureStore()`. Useful if you want to configure your store with a custom
     * `middleware` array but still keep the default set.
     *
     * @return The default middleware used by `configureStore()`.
     *
     * @public
     */

    function getDefaultMiddleware(options) {
      if (options === void 0) {
        options = {};
      }

      var _options = options,
          _options$thunk = _options.thunk,
          thunk$1 = _options$thunk === void 0 ? true : _options$thunk,
          _options$immutableChe = _options.immutableCheck,
          _options$serializable = _options.serializableCheck;
      var middlewareArray = new MiddlewareArray();

      if (thunk$1) {
        if (isBoolean(thunk$1)) {
          middlewareArray.push(thunk);
        } else {
          middlewareArray.push(thunk.withExtraArgument(thunk$1.extraArgument));
        }
      }

      return middlewareArray;
    }

    var IS_PRODUCTION = process.env.NODE_ENV === 'production';
    /**
     * A friendly abstraction over the standard Redux `createStore()` function.
     *
     * @param config The store configuration.
     * @returns A configured Redux store.
     *
     * @public
     */

    function configureStore(options) {
      var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();

      var _ref = options || {},
          _ref$reducer = _ref.reducer,
          reducer = _ref$reducer === void 0 ? undefined : _ref$reducer,
          _ref$middleware = _ref.middleware,
          middleware = _ref$middleware === void 0 ? curriedGetDefaultMiddleware() : _ref$middleware,
          _ref$devTools = _ref.devTools,
          devTools = _ref$devTools === void 0 ? true : _ref$devTools,
          _ref$preloadedState = _ref.preloadedState,
          preloadedState = _ref$preloadedState === void 0 ? undefined : _ref$preloadedState,
          _ref$enhancers = _ref.enhancers,
          enhancers = _ref$enhancers === void 0 ? undefined : _ref$enhancers;

      var rootReducer;

      if (typeof reducer === 'function') {
        rootReducer = reducer;
      } else if (isPlainObject$1(reducer)) {
        rootReducer = combineReducers(reducer);
      } else {
        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
      }

      var middlewareEnhancer = applyMiddleware.apply(void 0, typeof middleware === 'function' ? middleware(curriedGetDefaultMiddleware) : middleware);
      var finalCompose = compose;

      if (devTools) {
        finalCompose = composeWithDevTools(_extends({
          // Enable capture of stack traces for dispatched Redux actions
          trace: !IS_PRODUCTION
        }, typeof devTools === 'object' && devTools));
      }

      var storeEnhancers = [middlewareEnhancer];

      if (Array.isArray(enhancers)) {
        storeEnhancers = [middlewareEnhancer].concat(enhancers);
      } else if (typeof enhancers === 'function') {
        storeEnhancers = enhancers(storeEnhancers);
      }

      var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
      return createStore(rootReducer, preloadedState, composedEnhancer);
    }

    function createAction(type, prepareAction) {
      function actionCreator() {
        if (prepareAction) {
          var prepared = prepareAction.apply(void 0, arguments);

          if (!prepared) {
            throw new Error('prepareAction did not return an object');
          }

          return _extends({
            type: type,
            payload: prepared.payload
          }, 'meta' in prepared && {
            meta: prepared.meta
          }, {}, 'error' in prepared && {
            error: prepared.error
          });
        }

        return {
          type: type,
          payload: arguments.length <= 0 ? undefined : arguments[0]
        };
      }

      actionCreator.toString = function () {
        return "" + type;
      };

      actionCreator.type = type;

      actionCreator.match = function (action) {
        return action.type === type;
      };

      return actionCreator;
    }

    function executeReducerBuilderCallback(builderCallback) {
      var actionsMap = {};
      var actionMatchers = [];
      var defaultCaseReducer;
      var builder = {
        addCase: function addCase(typeOrActionCreator, reducer) {

          var type = typeof typeOrActionCreator === 'string' ? typeOrActionCreator : typeOrActionCreator.type;

          if (type in actionsMap) {
            throw new Error('addCase cannot be called with two reducers for the same action type');
          }

          actionsMap[type] = reducer;
          return builder;
        },
        addMatcher: function addMatcher(matcher, reducer) {

          actionMatchers.push({
            matcher: matcher,
            reducer: reducer
          });
          return builder;
        },
        addDefaultCase: function addDefaultCase(reducer) {

          defaultCaseReducer = reducer;
          return builder;
        }
      };
      builderCallback(builder);
      return [actionsMap, actionMatchers, defaultCaseReducer];
    }

    function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
      if (actionMatchers === void 0) {
        actionMatchers = [];
      }

      var _ref = typeof mapOrBuilderCallback === 'function' ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer],
          actionsMap = _ref[0],
          finalActionMatchers = _ref[1],
          finalDefaultCaseReducer = _ref[2];

      return function (state, action) {
        if (state === void 0) {
          state = initialState;
        }

        var caseReducers = [actionsMap[action.type]].concat(finalActionMatchers.filter(function (_ref2) {
          var matcher = _ref2.matcher;
          return matcher(action);
        }).map(function (_ref3) {
          var reducer = _ref3.reducer;
          return reducer;
        }));

        if (caseReducers.filter(function (cr) {
          return !!cr;
        }).length === 0) {
          caseReducers = [finalDefaultCaseReducer];
        }

        return caseReducers.reduce(function (previousState, caseReducer) {
          if (caseReducer) {
            if (t$2(previousState)) {
              // If it's already a draft, we must already be inside a `createNextState` call,
              // likely because this is being wrapped in `createReducer`, `createSlice`, or nested
              // inside an existing draft. It's safe to just pass the draft to the mutator.
              var draft = previousState; // We can assume this is already a draft

              var result = caseReducer(draft, action);

              if (typeof result === 'undefined') {
                return previousState;
              }

              return result;
            } else if (!r$2(previousState)) {
              // If state is not draftable (ex: a primitive, such as 0), we want to directly
              // return the caseReducer func and not wrap it with produce.
              var _result = caseReducer(previousState, action);

              if (typeof _result === 'undefined') {
                throw Error('A case reducer on a non-draftable value must not return undefined');
              }

              return _result;
            } else {
              // @ts-ignore createNextState() produces an Immutable<Draft<S>> rather
              // than an Immutable<S>, and TypeScript cannot find out how to reconcile
              // these two types.
              return an(previousState, function (draft) {
                return caseReducer(draft, action);
              });
            }
          }

          return previousState;
        }, state);
      };
    }

    function getType$1(slice, actionKey) {
      return slice + "/" + actionKey;
    }
    /**
     * A function that accepts an initial state, an object full of reducer
     * functions, and a "slice name", and automatically generates
     * action creators and action types that correspond to the
     * reducers and state.
     *
     * The `reducer` argument is passed to `createReducer()`.
     *
     * @public
     */


    function createSlice(options) {
      var name = options.name,
          initialState = options.initialState;

      if (!name) {
        throw new Error('`name` is a required option for createSlice');
      }

      var reducers = options.reducers || {};

      var _ref = typeof options.extraReducers === 'undefined' ? [] : typeof options.extraReducers === 'function' ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers],
          _ref$ = _ref[0],
          extraReducers = _ref$ === void 0 ? {} : _ref$,
          _ref$2 = _ref[1],
          actionMatchers = _ref$2 === void 0 ? [] : _ref$2,
          _ref$3 = _ref[2],
          defaultCaseReducer = _ref$3 === void 0 ? undefined : _ref$3;

      var reducerNames = Object.keys(reducers);
      var sliceCaseReducersByName = {};
      var sliceCaseReducersByType = {};
      var actionCreators = {};
      reducerNames.forEach(function (reducerName) {
        var maybeReducerWithPrepare = reducers[reducerName];
        var type = getType$1(name, reducerName);
        var caseReducer;
        var prepareCallback;

        if ('reducer' in maybeReducerWithPrepare) {
          caseReducer = maybeReducerWithPrepare.reducer;
          prepareCallback = maybeReducerWithPrepare.prepare;
        } else {
          caseReducer = maybeReducerWithPrepare;
        }

        sliceCaseReducersByName[reducerName] = caseReducer;
        sliceCaseReducersByType[type] = caseReducer;
        actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
      });

      var finalCaseReducers = _extends({}, extraReducers, {}, sliceCaseReducersByType);

      var reducer = createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
      return {
        name: name,
        reducer: reducer,
        actions: actionCreators,
        caseReducers: sliceCaseReducersByName
      };
    }

    // A type of promise-like that resolves synchronously and supports only one observer

    const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

    const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

    // we assume RTK will be used with React Native and other Proxy-less
    // environments.  In addition, that's how Immer 4 behaved, and since
    // we want to ship this in an RTK minor, we should keep the same behavior.

    T$2();

    let wasm;

    let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

    cachedTextDecoder.decode();

    let cachegetUint8Memory0 = null;
    function getUint8Memory0() {
        if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
            cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachegetUint8Memory0;
    }

    function getStringFromWasm0(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
    }

    const heap = new Array(32).fill(undefined);

    heap.push(undefined, null, true, false);

    let heap_next = heap.length;

    function addHeapObject(obj) {
        if (heap_next === heap.length) heap.push(heap.length + 1);
        const idx = heap_next;
        heap_next = heap[idx];

        heap[idx] = obj;
        return idx;
    }

    function getObject(idx) { return heap[idx]; }

    function dropObject(idx) {
        if (idx < 36) return;
        heap[idx] = heap_next;
        heap_next = idx;
    }

    function takeObject(idx) {
        const ret = getObject(idx);
        dropObject(idx);
        return ret;
    }

    let WASM_VECTOR_LEN = 0;

    let cachedTextEncoder = new TextEncoder('utf-8');

    const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
        ? function (arg, view) {
        return cachedTextEncoder.encodeInto(arg, view);
    }
        : function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    });

    function passStringToWasm0(arg, malloc, realloc) {

        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length);
            getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len);

        const mem = getUint8Memory0();

        let offset = 0;

        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr + offset] = code;
        }

        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3);
            const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
            const ret = encodeString(arg, view);

            offset += ret.written;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
    }

    let cachegetInt32Memory0 = null;
    function getInt32Memory0() {
        if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
            cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
        }
        return cachegetInt32Memory0;
    }

    let cachegetUint64Memory0 = null;
    function getUint64Memory0() {
        if (cachegetUint64Memory0 === null || cachegetUint64Memory0.buffer !== wasm.memory.buffer) {
            cachegetUint64Memory0 = new BigUint64Array(wasm.memory.buffer);
        }
        return cachegetUint64Memory0;
    }

    function getArrayU64FromWasm0(ptr, len) {
        return getUint64Memory0().subarray(ptr / 8, ptr / 8 + len);
    }
    /**
    */
    class IndexedSource {

        static __wrap(ptr) {
            const obj = Object.create(IndexedSource.prototype);
            obj.ptr = ptr;

            return obj;
        }

        free() {
            const ptr = this.ptr;
            this.ptr = 0;

            wasm.__wbg_indexedsource_free(ptr);
        }
        /**
        * @param {string} s
        */
        constructor(s) {
            var ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            var ret = wasm.indexedsource_new(ptr0, len0);
            return IndexedSource.__wrap(ret);
        }
        /**
        * @param {string} ident
        * @returns {BigUint64Array}
        */
        searchIdent(ident) {
            try {
                const retptr = wasm.__wbindgen_export_2.value - 16;
                wasm.__wbindgen_export_2.value = retptr;
                var ptr0 = passStringToWasm0(ident, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len0 = WASM_VECTOR_LEN;
                wasm.indexedsource_searchIdent(retptr, this.ptr, ptr0, len0);
                var r0 = getInt32Memory0()[retptr / 4 + 0];
                var r1 = getInt32Memory0()[retptr / 4 + 1];
                var v1 = getArrayU64FromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 8);
                return v1;
            } finally {
                wasm.__wbindgen_export_2.value += 16;
            }
        }
        /**
        * @returns {number}
        */
        expressionDepth() {
            var ret = wasm.indexedsource_expressionDepth(this.ptr);
            return ret >>> 0;
        }
        /**
        * @param {string} layer
        * @param {string} ident
        * @returns {BigUint64Array}
        */
        searchLayer(layer, ident) {
            try {
                const retptr = wasm.__wbindgen_export_2.value - 16;
                wasm.__wbindgen_export_2.value = retptr;
                var ptr0 = passStringToWasm0(layer, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len0 = WASM_VECTOR_LEN;
                var ptr1 = passStringToWasm0(ident, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                wasm.indexedsource_searchLayer(retptr, this.ptr, ptr0, len0, ptr1, len1);
                var r0 = getInt32Memory0()[retptr / 4 + 0];
                var r1 = getInt32Memory0()[retptr / 4 + 1];
                var v2 = getArrayU64FromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 8);
                return v2;
            } finally {
                wasm.__wbindgen_export_2.value += 16;
            }
        }
    }

    async function load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {

            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);

                } catch (e) {
                    if (module.headers.get('Content-Type') != 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else {
                        throw e;
                    }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);

        } else {

            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };

            } else {
                return instance;
            }
        }
    }

    async function init(input) {
        if (typeof input === 'undefined') {
            input = (document.currentScript && document.currentScript.src || new URL('strata.js', document.baseURI).href).replace(/\.js$/, '_bg.wasm');
        }
        const imports = {};
        imports.wbg = {};
        imports.wbg.__wbindgen_json_parse = function(arg0, arg1) {
            var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
            var ret = getStringFromWasm0(arg0, arg1);
            return addHeapObject(ret);
        };
        imports.wbg.__wbindgen_throw = function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        };
        imports.wbg.__wbindgen_rethrow = function(arg0) {
            throw takeObject(arg0);
        };

        if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
            input = fetch(input);
        }

        const { instance, module } = await load(await input, imports);

        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;

        return wasm;
    }

    var exports$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        IndexedSource: IndexedSource,
        'default': init
    });

    var bindings = async () => {
                            await init("assets/bindings-2cee37da.wasm");
                            return exports$1;
                        };

    const INITIAL = {
        IndexedSource: undefined,
    };
    const { actions, reducer } = createSlice({
        name: 'bindings',
        initialState: INITIAL,
        reducers: {
            loaded: (state, action) => ({ ...state, ...action.payload }),
        },
    });
    const { loaded } = actions;

    var Layer;
    (function (Layer) {
        Layer["Function"] = "function";
    })(Layer || (Layer = {}));
    const INITIAL$1 = {
        text: '',
        layer: Layer.Function,
        ident: '',
    };
    const { actions: actions$1, reducer: reducer$1 } = createSlice({
        name: 'source',
        initialState: INITIAL$1,
        reducers: {
            textChange: (state, action) => {
                state.text = action.payload;
            },
            layerChange: (state, action) => {
                state.layer = action.payload;
            },
            identChange: (state, action) => {
                state.ident = action.payload;
            },
        },
    });
    const { textChange, layerChange, identChange } = actions$1;

    const reducer$2 = combineReducers({
        bindings: reducer,
        source: reducer$1,
    });

    var option = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNone = exports.isSome = exports.none_constructor = exports.some_constructor = exports.None = exports.Some = exports.OptionType = void 0;
    exports.OptionType = {
        Some: Symbol(":some"),
        None: Symbol(":none"),
    };
    function Some(val) {
        return typeof val === "undefined"
            ? none_constructor()
            : some_constructor(val);
    }
    exports.Some = Some;
    exports.None = none_constructor();
    function some_constructor(val) {
        if (typeof val === "undefined") {
            throw new TypeError("Some has to contain a value. Constructor received undefined.");
        }
        return {
            type: exports.OptionType.Some,
            isSome() {
                return true;
            },
            isNone() {
                return false;
            },
            match(fn) {
                return fn.some(val);
            },
            map(fn) {
                return some_constructor(fn(val));
            },
            andThen(fn) {
                return fn(val);
            },
            or(_optb) {
                return this;
            },
            and(optb) {
                return optb;
            },
            unwrapOr(_def) {
                return val;
            },
            unwrap() {
                return val;
            },
        };
    }
    exports.some_constructor = some_constructor;
    function none_constructor() {
        return {
            type: exports.OptionType.None,
            isSome() {
                return false;
            },
            isNone() {
                return true;
            },
            match(matchObject) {
                const { none } = matchObject;
                if (typeof none === "function") {
                    return none();
                }
                return none;
            },
            map(_fn) {
                return none_constructor();
            },
            andThen(_fn) {
                return none_constructor();
            },
            or(optb) {
                return optb;
            },
            and(_optb) {
                return none_constructor();
            },
            unwrapOr(def) {
                if (def == null) {
                    throw new Error("Cannot call unwrapOr with a missing value.");
                }
                return def;
            },
            unwrap() {
                throw new ReferenceError("Trying to unwrap None.");
            },
        };
    }
    exports.none_constructor = none_constructor;
    function isSome(val) {
        return val.isSome();
    }
    exports.isSome = isSome;
    function isNone(val) {
        return val.isNone();
    }
    exports.isNone = isNone;

    });

    var either = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isRight = exports.isLeft = exports.Right = exports.Left = exports.EitherType = void 0;

    exports.EitherType = {
        Left: Symbol(":left"),
        Right: Symbol(":right"),
    };
    function Left(val) {
        return {
            type: exports.EitherType.Left,
            isLeft() {
                return true;
            },
            isRight() {
                return false;
            },
            left() {
                return option.Some(val);
            },
            leftAndThen(fn) {
                return fn(val);
            },
            right() {
                return option.None;
            },
            rightAndThen(_fn) {
                return Left(val);
            },
            unwrap() {
                return val;
            },
            unwrapLeft() {
                return val;
            },
            unwrapLeftOr(_other) {
                return val;
            },
            unwrapLeftOrElse(_fn) {
                return val;
            },
            unwrapRight() {
                throw new ReferenceError("Cannot unwrap Right value of Either.Left");
            },
            unwrapRightOr(other) {
                return other;
            },
            unwrapRightOrElse(fn) {
                return fn(val);
            },
            match(matchObject) {
                return matchObject.left(val);
            },
            map(fn) {
                return Left(fn(val));
            },
            mapLeft(fn) {
                return Left(fn(val));
            },
            mapRight(_fn) {
                return Left(val);
            },
        };
    }
    exports.Left = Left;
    function Right(val) {
        return {
            type: exports.EitherType.Right,
            isLeft() {
                return false;
            },
            isRight() {
                return true;
            },
            left() {
                return option.None;
            },
            leftAndThen(_fn) {
                return Right(val);
            },
            right() {
                return option.Some(val);
            },
            rightAndThen(fn) {
                return fn(val);
            },
            unwrap() {
                return val;
            },
            unwrapLeft() {
                throw new ReferenceError("Cannot unwrap Left value of Either.Right");
            },
            unwrapLeftOr(other) {
                return other;
            },
            unwrapLeftOrElse(fn) {
                return fn(val);
            },
            unwrapRight() {
                return val;
            },
            unwrapRightOr(_other) {
                return val;
            },
            unwrapRightOrElse(_fn) {
                return val;
            },
            match(matchObject) {
                return matchObject.right(val);
            },
            map(fn) {
                return Right(fn(val));
            },
            mapLeft(_fn) {
                return Right(val);
            },
            mapRight(fn) {
                return Right(fn(val));
            },
        };
    }
    exports.Right = Right;
    function isLeft(val) {
        return val.isLeft();
    }
    exports.isLeft = isLeft;
    function isRight(val) {
        return val.isRight();
    }
    exports.isRight = isRight;

    });

    var result$1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isErr = exports.isOk = exports.Err = exports.Ok = exports.ResultType = void 0;

    exports.ResultType = {
        Ok: Symbol(":ok"),
        Err: Symbol(":err"),
    };
    function Ok(val) {
        return {
            type: exports.ResultType.Ok,
            isOk() {
                return true;
            },
            isErr() {
                return false;
            },
            ok() {
                return option.Some(val);
            },
            err() {
                return option.None;
            },
            unwrap() {
                return val;
            },
            unwrapOr(_optb) {
                return val;
            },
            unwrapOrElse(_fn) {
                return val;
            },
            unwrapErr() {
                throw new ReferenceError("Cannot unwrap Err value of Result.Ok");
            },
            match(matchObject) {
                return matchObject.ok(val);
            },
            map(fn) {
                return Ok(fn(val));
            },
            mapErr(_fn) {
                return Ok(val);
            },
            andThen(fn) {
                return fn(val);
            },
            orElse(_fn) {
                return Ok(val);
            },
        };
    }
    exports.Ok = Ok;
    function Err(err) {
        return {
            type: exports.ResultType.Err,
            isOk() {
                return false;
            },
            isErr() {
                return true;
            },
            ok() {
                return option.None;
            },
            err() {
                return option.Some(err);
            },
            unwrap() {
                throw new ReferenceError("Cannot unwrap Ok value of Result.Err");
            },
            unwrapOr(optb) {
                return optb;
            },
            unwrapOrElse(fn) {
                return fn(err);
            },
            unwrapErr() {
                return err;
            },
            match(matchObject) {
                return matchObject.err(err);
            },
            map(_fn) {
                return Err(err);
            },
            mapErr(fn) {
                return Err(fn(err));
            },
            andThen(_fn) {
                return Err(err);
            },
            orElse(fn) {
                return fn(err);
            },
        };
    }
    exports.Err = Err;
    function isOk(val) {
        return val.isOk();
    }
    exports.isOk = isOk;
    function isErr(val) {
        return val.isErr();
    }
    exports.isErr = isErr;

    });

    var lib = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });

    Object.defineProperty(exports, "Left", { enumerable: true, get: function () { return either.Left; } });
    Object.defineProperty(exports, "Right", { enumerable: true, get: function () { return either.Right; } });
    Object.defineProperty(exports, "isLeft", { enumerable: true, get: function () { return either.isLeft; } });
    Object.defineProperty(exports, "isRight", { enumerable: true, get: function () { return either.isRight; } });

    Object.defineProperty(exports, "Some", { enumerable: true, get: function () { return option.Some; } });
    Object.defineProperty(exports, "None", { enumerable: true, get: function () { return option.None; } });
    Object.defineProperty(exports, "isSome", { enumerable: true, get: function () { return option.isSome; } });
    Object.defineProperty(exports, "isNone", { enumerable: true, get: function () { return option.isNone; } });

    Object.defineProperty(exports, "Ok", { enumerable: true, get: function () { return result$1.Ok; } });
    Object.defineProperty(exports, "Err", { enumerable: true, get: function () { return result$1.Err; } });
    Object.defineProperty(exports, "isOk", { enumerable: true, get: function () { return result$1.isOk; } });
    Object.defineProperty(exports, "isErr", { enumerable: true, get: function () { return result$1.isErr; } });

    });

    function strataErr(f) {
        try {
            return lib.Ok(f());
        }
        catch (e) {
            if (e.name == 'StrataError') {
                return lib.Err(e);
            }
            else {
                throw e;
            }
        }
    }
    const getIndexedSource = (state) => state.bindings.IndexedSource;
    const getSourceText = (state) => state.source.text;
    const getSourceLayer = (state) => state.source.layer;
    const getSourceIdent = (state) => state.source.ident;
    const getIsLoaded = createSelector([getIndexedSource], (a) => !!a);
    const getIndex = createSelector([getIndexedSource, getSourceText], (IndexedSource, source) => IndexedSource && strataErr(() => new IndexedSource(source)));
    const getExpressionDepth = createSelector([getIndex], (idx) => idx?.map((i) => i.expressionDepth()));
    const getFound = createSelector([getIndex, getSourceLayer, getSourceIdent], (idx, layer, ident) => idx?.andThen((idx) => strataErr(() => idx.searchLayer(layer, ident))));
    const formatExtentList = (found) => {
        let output = '';
        for (let i = 0; i < found.length; i += 2) {
            output += `[${found[i]}, ${found[i + 1]}]`;
        }
        return output;
    };
    const getExecutionResult = createSelector([getFound], (found) => found
        ?.map((found) => ({ output: formatExtentList(found) }))
        .unwrapOrElse((e) => ({ error: JSON.stringify(e) })));
    const zz = (src, found) => {
        // TODO: All the coercion seems wrong
        // TODO: Are we correctly slicing by bytes?
        let start = 0n;
        const parts = [];
        for (let i = 0; i < found.length; i += 2) {
            const s = found[i];
            const e = found[i + 1];
            const not = src.slice(Number(start), Number(s));
            const is = src.slice(Number(s), Number(e));
            parts.push({ not, is });
            start = e;
        }
        const not = src.slice(Number(start));
        parts.push({ not, is: '' });
        return parts;
    };
    const getLayer0 = createSelector([getSourceText, getFound], (src, found) => found?.map((found) => zz(src, found)));

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = ".Input-module_source__KUesD {\n    width: 100%;\n    font-family: monospace;\n}\n";
    var css = {"source":"Input-module_source__KUesD"};
    styleInject(css_248z);

    const TOUR_ID_SOURCE = 'source';
    const TOUR_ID_LAYER = 'layer';
    const TOUR_ID_IDENT = 'ident';
    const Input = () => {
        const dispatch = useDispatch();
        const source = useSelector(getSourceText);
        const expressionDepth = useSelector(getExpressionDepth)?.unwrapOr(0);
        const layer = useSelector(getSourceLayer);
        const ident = useSelector(getSourceIdent);
        const executionResult = useSelector(getExecutionResult);
        const expressions = Array.from(Array(expressionDepth).keys()).map((i) => (react.createElement("option", { key: i },
            "expression-",
            i)));
        const { output = '', error = '' } = executionResult;
        return (react.createElement(react.Fragment, null,
            react.createElement("section", null,
                react.createElement("h1", null, "Source code"),
                react.createElement("textarea", { value: source, onChange: (e) => dispatch(textChange(e.currentTarget.value)), "data-tour-id": TOUR_ID_SOURCE, className: css.source })),
            react.createElement("section", null,
                react.createElement("h1", null, "Layer"),
                react.createElement("select", { value: layer, onChange: (e) => dispatch(layerChange(e.currentTarget.value)), "data-tour-id": TOUR_ID_LAYER },
                    react.createElement("option", null, "function"),
                    expressions)),
            react.createElement("section", null,
                react.createElement("h1", null, "Ident"),
                react.createElement("textarea", { value: ident, onChange: (e) => dispatch(identChange(e.currentTarget.value)), "data-tour-id": TOUR_ID_IDENT, className: css.source })),
            react.createElement("section", null,
                react.createElement("h1", null, "Output"),
                react.createElement("div", null, output)),
            react.createElement("section", null,
                react.createElement("h1", null, "Error"),
                react.createElement("div", null, error))));
    };

    var css_248z$1 = ".Output-module_container__bTAHU {\n    position: relative;\n    height: 100%;\n    width: 100%;\n}\n\n.Output-module_code__23Vx0 {\n    position: absolute;\n}\n\n.Output-module_layer__355Uj {\n    position: absolute;\n    color: rgba(0, 0, 0, 0);\n}\n\n.Output-module_layer0__JoD8o {\n}\n\n.Output-module_layer0__JoD8o > b {\n    background-color: rgba(255, 255, 0, 0.5);\n}\n";
    var css$1 = {"container":"Output-module_container__bTAHU","code":"Output-module_code__23Vx0","layer":"Output-module_layer__355Uj","layer0":"Output-module_layer0__JoD8o Output-module_layer__355Uj"};
    styleInject(css_248z$1);

    const TOUR_ID_OUTPUT = 'output';
    const Output = () => {
        const source = useSelector(getSourceText);
        const layer0 = useSelector(getLayer0);
        const layer0Html = layer0.unwrapOr([]).map(({ not, is }, i) => (react.createElement(react.Fragment, { key: i },
            not,
            react.createElement("b", null, is))));
        return (react.createElement("div", { className: css$1.container, "data-tour-id": TOUR_ID_OUTPUT },
            react.createElement("pre", { className: css$1.layer0 }, layer0Html),
            react.createElement("pre", { className: css$1.code }, source)));
    };

    /*! shepherd.js 7.1.5 */

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _extends$1() {
      _extends$1 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends$1.apply(this, arguments);
    }

    function _inheritsLoose$1(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    var isMergeableObject = function isMergeableObject(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };

    function isNonNullObject(value) {
      return !!value && typeof value === 'object';
    }

    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
    } // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


    var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }

    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }

    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
    }

    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function (element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }

    function getMergeFunction(key, options) {
      if (!options.customMerge) {
        return deepmerge;
      }

      var customMerge = options.customMerge(key);
      return typeof customMerge === 'function' ? customMerge : deepmerge;
    }

    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
        return target.propertyIsEnumerable(symbol);
      }) : [];
    }

    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }

    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    } // Protects from prototype poisoning and unexpected merging up the prototype chain.


    function propertyIsUnsafe(target, key) {
      return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
      && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
      && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
    }

    function mergeObject(target, source, options) {
      var destination = {};

      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function (key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }

      getKeys(source).forEach(function (key) {
        if (propertyIsUnsafe(target, key)) {
          return;
        }

        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
      });
      return destination;
    }

    function deepmerge(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
      // implementations can use it. The caller may not replace it.

      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }

    deepmerge.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error('first argument should be an array');
      }

      return array.reduce(function (prev, next) {
        return deepmerge(prev, next, options);
      }, {});
    };

    var deepmerge_1 = deepmerge;
    var cjs = deepmerge_1;

    /**
     * Checks if `value` is classified as an `HTMLElement`.
     * @param {*} value The param to check if it is an HTMLElement
     */
    function isElement$1(value) {
      return value instanceof HTMLElement;
    }
    /**
     * Checks if `value` is classified as a `Function` object.
     * @param {*} value The param to check if it is a function
     */

    function isFunction(value) {
      return typeof value === 'function';
    }
    /**
     * Checks if `value` is classified as a `String` object.
     * @param {*} value The param to check if it is a string
     */

    function isString(value) {
      return typeof value === 'string';
    }
    /**
     * Checks if `value` is undefined.
     * @param {*} value The param to check if it is undefined
     */

    function isUndefined(value) {
      return value === undefined;
    }

    var Evented = /*#__PURE__*/function () {
      function Evented() {}

      var _proto = Evented.prototype;

      _proto.on = function on(event, handler, ctx, once) {
        if (once === void 0) {
          once = false;
        }

        if (isUndefined(this.bindings)) {
          this.bindings = {};
        }

        if (isUndefined(this.bindings[event])) {
          this.bindings[event] = [];
        }

        this.bindings[event].push({
          handler: handler,
          ctx: ctx,
          once: once
        });
        return this;
      };

      _proto.once = function once(event, handler, ctx) {
        return this.on(event, handler, ctx, true);
      };

      _proto.off = function off(event, handler) {
        var _this = this;

        if (isUndefined(this.bindings) || isUndefined(this.bindings[event])) {
          return this;
        }

        if (isUndefined(handler)) {
          delete this.bindings[event];
        } else {
          this.bindings[event].forEach(function (binding, index) {
            if (binding.handler === handler) {
              _this.bindings[event].splice(index, 1);
            }
          });
        }

        return this;
      };

      _proto.trigger = function trigger(event) {
        var _this2 = this;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        if (!isUndefined(this.bindings) && this.bindings[event]) {
          this.bindings[event].forEach(function (binding, index) {
            var ctx = binding.ctx,
                handler = binding.handler,
                once = binding.once;
            var context = ctx || _this2;
            handler.apply(context, args);

            if (once) {
              _this2.bindings[event].splice(index, 1);
            }
          });
        }

        return this;
      };

      return Evented;
    }();

    /**
     * Binds all the methods on a JS Class to the `this` context of the class.
     * Adapted from https://github.com/sindresorhus/auto-bind
     * @param {object} self The `this` context of the class
     * @return {object} The `this` context of the class
     */
    function autoBind(self) {
      var keys = Object.getOwnPropertyNames(self.constructor.prototype);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var val = self[key];

        if (key !== 'constructor' && typeof val === 'function') {
          self[key] = val.bind(self);
        }
      }

      return self;
    }

    /**
     * Sets up the handler to determine if we should advance the tour
     * @param {string} selector
     * @param {Step} step The step instance
     * @return {Function}
     * @private
     */

    function _setupAdvanceOnHandler(selector, step) {
      return function (event) {
        if (step.isOpen()) {
          var targetIsEl = step.el && event.currentTarget === step.el;
          var targetIsSelector = !isUndefined(selector) && event.currentTarget.matches(selector);

          if (targetIsSelector || targetIsEl) {
            step.tour.next();
          }
        }
      };
    }
    /**
     * Bind the event handler for advanceOn
     * @param {Step} step The step instance
     */


    function bindAdvance(step) {
      // An empty selector matches the step element
      var _ref = step.options.advanceOn || {},
          event = _ref.event,
          selector = _ref.selector;

      if (event) {
        var handler = _setupAdvanceOnHandler(selector, step); // TODO: this should also bind/unbind on show/hide


        var el;

        try {
          el = document.querySelector(selector);
        } catch (e) {// TODO
        }

        if (!isUndefined(selector) && !el) {
          return console.error("No element was found for the selector supplied to advanceOn: " + selector);
        } else if (el) {
          el.addEventListener(event, handler);
          step.on('destroy', function () {
            return el.removeEventListener(event, handler);
          });
        } else {
          document.body.addEventListener(event, handler, true);
          step.on('destroy', function () {
            return document.body.removeEventListener(event, handler, true);
          });
        }
      } else {
        return console.error('advanceOn was defined, but no event name was passed.');
      }
    }

    function getBoundingClientRect(element) {
      var rect = element.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        x: rect.left,
        y: rect.top
      };
    }

    /*:: import type { Window } from '../types'; */

    /*:: declare function getWindow(node: Node | Window): Window; */
    function getWindow(node) {
      if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView : window;
      }

      return node;
    }

    function getWindowScroll(node) {
      var win = getWindow(node);
      var scrollLeft = win.pageXOffset;
      var scrollTop = win.pageYOffset;
      return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      };
    }

    /*:: declare function isElement(node: mixed): boolean %checks(node instanceof
      Element); */

    function isElement$1$1(node) {
      var OwnElement = getWindow(node).Element;
      return node instanceof OwnElement || node instanceof Element;
    }
    /*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
      HTMLElement); */


    function isHTMLElement(node) {
      var OwnElement = getWindow(node).HTMLElement;
      return node instanceof OwnElement || node instanceof HTMLElement;
    }

    function getHTMLElementScroll(element) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }

    function getNodeScroll(node) {
      if (node === getWindow(node) || !isHTMLElement(node)) {
        return getWindowScroll(node);
      } else {
        return getHTMLElementScroll(node);
      }
    }

    function getNodeName(element) {
      return element ? (element.nodeName || '').toLowerCase() : null;
    }

    function getDocumentElement(element) {
      // $FlowFixMe: assume body is always available
      return (isElement$1$1(element) ? element.ownerDocument : element.document).documentElement;
    }

    function getWindowScrollBarX(element) {
      // If <html> has a CSS width greater than the viewport, then this will be
      // incorrect for RTL.
      // Popper 1 is broken in this case and never had a bug report so let's assume
      // it's not an issue. I don't think anyone ever specifies width on <html>
      // anyway.
      // Browsers where the left scrollbar doesn't cause an issue report `0` for
      // this (e.g. Edge 2019, IE11, Safari)
      return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
    }

    function getComputedStyle(element) {
      return getWindow(element).getComputedStyle(element);
    }

    function isScrollParent(element) {
      // Firefox wants us to check `-x` and `-y` variations as well
      var _getComputedStyle = getComputedStyle(element),
          overflow = _getComputedStyle.overflow,
          overflowX = _getComputedStyle.overflowX,
          overflowY = _getComputedStyle.overflowY;

      return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
    }

    // Composite means it takes into account transforms as well as layout.

    function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
      if (isFixed === void 0) {
        isFixed = false;
      }

      var documentElement = getDocumentElement(offsetParent);
      var rect = getBoundingClientRect(elementOrVirtualElement);
      var scroll = {
        scrollLeft: 0,
        scrollTop: 0
      };
      var offsets = {
        x: 0,
        y: 0
      };

      if (!isFixed) {
        if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
        isScrollParent(documentElement)) {
          scroll = getNodeScroll(offsetParent);
        }

        if (isHTMLElement(offsetParent)) {
          offsets = getBoundingClientRect(offsetParent);
          offsets.x += offsetParent.clientLeft;
          offsets.y += offsetParent.clientTop;
        } else if (documentElement) {
          offsets.x = getWindowScrollBarX(documentElement);
        }
      }

      return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
      };
    }

    // Returns the layout rect of an element relative to its offsetParent. Layout
    // means it doesn't take into account transforms.
    function getLayoutRect(element) {
      return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight
      };
    }

    function getParentNode(element) {
      if (getNodeName(element) === 'html') {
        return element;
      }

      return (// $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
        element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
        element.parentNode || // DOM Element detected
        // $FlowFixMe: need a better way to handle this...
        element.host || // ShadowRoot detected
        // $FlowFixMe: HTMLElement is a Node
        getDocumentElement(element) // fallback

      );
    }

    function getScrollParent(node) {
      if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
        // $FlowFixMe: assume body is always available
        return node.ownerDocument.body;
      }

      if (isHTMLElement(node) && isScrollParent(node)) {
        return node;
      }

      return getScrollParent(getParentNode(node));
    }

    function listScrollParents(element, list) {
      if (list === void 0) {
        list = [];
      }

      var scrollParent = getScrollParent(element);
      var isBody = getNodeName(scrollParent) === 'body';
      var win = getWindow(scrollParent);
      var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
      var updatedList = list.concat(target);
      return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)));
    }

    function isTableElement(element) {
      return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
    }

    function getTrueOffsetParent(element) {
      if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
      getComputedStyle(element).position === 'fixed') {
        return null;
      }

      return element.offsetParent;
    }

    function getOffsetParent(element) {
      var window = getWindow(element);
      var offsetParent = getTrueOffsetParent(element); // Find the nearest non-table offsetParent

      while (offsetParent && isTableElement(offsetParent)) {
        offsetParent = getTrueOffsetParent(offsetParent);
      }

      if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
        return window;
      }

      return offsetParent || window;
    }

    var top = 'top';
    var bottom = 'bottom';
    var right = 'right';
    var left = 'left';
    var auto = 'auto';
    var basePlacements = [top, bottom, right, left];
    var start = 'start';
    var end = 'end';
    var clippingParents = 'clippingParents';
    var viewport = 'viewport';
    var popper = 'popper';
    var reference = 'reference';
    var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
      return acc.concat([placement + "-" + start, placement + "-" + end]);
    }, []);
    var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
      return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
    }, []); // modifiers that need to read the DOM

    var beforeRead = 'beforeRead';
    var read = 'read';
    var afterRead = 'afterRead'; // pure-logic modifiers

    var beforeMain = 'beforeMain';
    var main = 'main';
    var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

    var beforeWrite = 'beforeWrite';
    var write = 'write';
    var afterWrite = 'afterWrite';
    var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

    function order(modifiers) {
      var map = new Map();
      var visited = new Set();
      var result = [];
      modifiers.forEach(function (modifier) {
        map.set(modifier.name, modifier);
      }); // On visiting object, check for its dependencies and visit them recursively

      function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function (dep) {
          if (!visited.has(dep)) {
            var depModifier = map.get(dep);

            if (depModifier) {
              sort(depModifier);
            }
          }
        });
        result.push(modifier);
      }

      modifiers.forEach(function (modifier) {
        if (!visited.has(modifier.name)) {
          // check for visited object
          sort(modifier);
        }
      });
      return result;
    }

    function orderModifiers(modifiers) {
      // order based on dependencies
      var orderedModifiers = order(modifiers); // order based on phase

      return modifierPhases.reduce(function (acc, phase) {
        return acc.concat(orderedModifiers.filter(function (modifier) {
          return modifier.phase === phase;
        }));
      }, []);
    }

    function debounce(fn) {
      var pending;
      return function () {
        if (!pending) {
          pending = new Promise(function (resolve) {
            Promise.resolve().then(function () {
              pending = undefined;
              resolve(fn());
            });
          });
        }

        return pending;
      };
    }

    function getBasePlacement(placement) {
      return placement.split('-')[0];
    }

    function mergeByName(modifiers) {
      var merged = modifiers.reduce(function (merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, {}, current, {
          options: Object.assign({}, existing.options, {}, current.options),
          data: Object.assign({}, existing.data, {}, current.data)
        }) : current;
        return merged;
      }, {}); // IE11 does not support Object.values

      return Object.keys(merged).map(function (key) {
        return merged[key];
      });
    }

    var DEFAULT_OPTIONS = {
      placement: 'bottom',
      modifiers: [],
      strategy: 'absolute'
    };

    function areValidElements() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return !args.some(function (element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
      });
    }

    function popperGenerator(generatorOptions) {
      if (generatorOptions === void 0) {
        generatorOptions = {};
      }

      var _generatorOptions = generatorOptions,
          _generatorOptions$def = _generatorOptions.defaultModifiers,
          defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
          _generatorOptions$def2 = _generatorOptions.defaultOptions,
          defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
      return function createPopper(reference, popper, options) {
        if (options === void 0) {
          options = defaultOptions;
        }

        var state = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, DEFAULT_OPTIONS, {}, defaultOptions),
          modifiersData: {},
          elements: {
            reference: reference,
            popper: popper
          },
          attributes: {},
          styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
          state: state,
          setOptions: function setOptions(options) {
            cleanupModifierEffects();
            state.options = Object.assign({}, defaultOptions, {}, state.options, {}, options);
            state.scrollParents = {
              reference: isElement$1$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
              popper: listScrollParents(popper)
            }; // Orders the modifiers based on their dependencies and `phase`
            // properties

            var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

            state.orderedModifiers = orderedModifiers.filter(function (m) {
              return m.enabled;
            }); // Validate the provided modifiers so that the consumer will get warned

            runModifierEffects();
            return instance.update();
          },
          // Sync update – it will always be executed, even if not necessary. This
          // is useful for low frequency updates where sync behavior simplifies the
          // logic.
          // For high frequency updates (e.g. `resize` and `scroll` events), always
          // prefer the async Popper#update method
          forceUpdate: function forceUpdate() {
            if (isDestroyed) {
              return;
            }

            var _state$elements = state.elements,
                reference = _state$elements.reference,
                popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
            // anymore

            if (!areValidElements(reference, popper)) {

              return;
            } // Store the reference and popper rects to be read by modifiers


            state.rects = {
              reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
              popper: getLayoutRect(popper)
            }; // Modifiers have the ability to reset the current update cycle. The
            // most common use case for this is the `flip` modifier changing the
            // placement, which then needs to re-run all the modifiers, because the
            // logic was previously ran for the previous placement and is therefore
            // stale/incorrect

            state.reset = false;
            state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
            // is filled with the initial data specified by the modifier. This means
            // it doesn't persist and is fresh on each update.
            // To ensure persistent data, use `${name}#persistent`

            state.orderedModifiers.forEach(function (modifier) {
              return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
            });

            for (var index = 0; index < state.orderedModifiers.length; index++) {

              if (state.reset === true) {
                state.reset = false;
                index = -1;
                continue;
              }

              var _state$orderedModifie = state.orderedModifiers[index],
                  fn = _state$orderedModifie.fn,
                  _state$orderedModifie2 = _state$orderedModifie.options,
                  _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                  name = _state$orderedModifie.name;

              if (typeof fn === 'function') {
                state = fn({
                  state: state,
                  options: _options,
                  name: name,
                  instance: instance
                }) || state;
              }
            }
          },
          // Async and optimistically optimized update – it will not be executed if
          // not necessary (debounced to run at most once-per-tick)
          update: debounce(function () {
            return new Promise(function (resolve) {
              instance.forceUpdate();
              resolve(state);
            });
          }),
          destroy: function destroy() {
            cleanupModifierEffects();
            isDestroyed = true;
          }
        };

        if (!areValidElements(reference, popper)) {

          return instance;
        }

        instance.setOptions(options).then(function (state) {
          if (!isDestroyed && options.onFirstUpdate) {
            options.onFirstUpdate(state);
          }
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.

        function runModifierEffects() {
          state.orderedModifiers.forEach(function (_ref3) {
            var name = _ref3.name,
                _ref3$options = _ref3.options,
                options = _ref3$options === void 0 ? {} : _ref3$options,
                effect = _ref3.effect;

            if (typeof effect === 'function') {
              var cleanupFn = effect({
                state: state,
                name: name,
                instance: instance,
                options: options
              });

              var noopFn = function noopFn() {};

              effectCleanupFns.push(cleanupFn || noopFn);
            }
          });
        }

        function cleanupModifierEffects() {
          effectCleanupFns.forEach(function (fn) {
            return fn();
          });
          effectCleanupFns = [];
        }

        return instance;
      };
    }

    var passive = {
      passive: true
    };

    function effect(_ref) {
      var state = _ref.state,
          instance = _ref.instance,
          options = _ref.options;
      var _options$scroll = options.scroll,
          scroll = _options$scroll === void 0 ? true : _options$scroll,
          _options$resize = options.resize,
          resize = _options$resize === void 0 ? true : _options$resize;
      var window = getWindow(state.elements.popper);
      var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.addEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.addEventListener('resize', instance.update, passive);
      }

      return function () {
        if (scroll) {
          scrollParents.forEach(function (scrollParent) {
            scrollParent.removeEventListener('scroll', instance.update, passive);
          });
        }

        if (resize) {
          window.removeEventListener('resize', instance.update, passive);
        }
      };
    } // eslint-disable-next-line import/no-unused-modules


    var eventListeners = {
      name: 'eventListeners',
      enabled: true,
      phase: 'write',
      fn: function fn() {},
      effect: effect,
      data: {}
    };

    function getVariation(placement) {
      return placement.split('-')[1];
    }

    function getMainAxisFromPlacement(placement) {
      return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
    }

    function computeOffsets(_ref) {
      var reference = _ref.reference,
          element = _ref.element,
          placement = _ref.placement;
      var basePlacement = placement ? getBasePlacement(placement) : null;
      var variation = placement ? getVariation(placement) : null;
      var commonX = reference.x + reference.width / 2 - element.width / 2;
      var commonY = reference.y + reference.height / 2 - element.height / 2;
      var offsets;

      switch (basePlacement) {
        case top:
          offsets = {
            x: commonX,
            y: reference.y - element.height
          };
          break;

        case bottom:
          offsets = {
            x: commonX,
            y: reference.y + reference.height
          };
          break;

        case right:
          offsets = {
            x: reference.x + reference.width,
            y: commonY
          };
          break;

        case left:
          offsets = {
            x: reference.x - element.width,
            y: commonY
          };
          break;

        default:
          offsets = {
            x: reference.x,
            y: reference.y
          };
      }

      var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

      if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';

        switch (variation) {
          case start:
            offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
            break;

          case end:
            offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
            break;
        }
      }

      return offsets;
    }

    function popperOffsets(_ref) {
      var state = _ref.state,
          name = _ref.name; // Offsets are the actual position the popper needs to have to be
      // properly positioned near its reference element
      // This is the most basic placement, and will be adjusted by
      // the modifiers in the next step

      state.modifiersData[name] = computeOffsets({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
      });
    } // eslint-disable-next-line import/no-unused-modules


    var popperOffsets$1 = {
      name: 'popperOffsets',
      enabled: true,
      phase: 'read',
      fn: popperOffsets,
      data: {}
    };

    var unsetSides = {
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto'
    }; // Round the offsets to the nearest suitable subpixel based on the DPR.
    // Zooming can change the DPR, but it seems to report a value that will
    // cleanly divide the values into the appropriate subpixels.

    function roundOffsets(_ref) {
      var x = _ref.x,
          y = _ref.y;
      var win = window;
      var dpr = win.devicePixelRatio || 1;
      return {
        x: Math.round(x * dpr) / dpr || 0,
        y: Math.round(y * dpr) / dpr || 0
      };
    }

    function mapToStyles(_ref2) {
      var _Object$assign2;

      var popper = _ref2.popper,
          popperRect = _ref2.popperRect,
          placement = _ref2.placement,
          offsets = _ref2.offsets,
          position = _ref2.position,
          gpuAcceleration = _ref2.gpuAcceleration,
          adaptive = _ref2.adaptive;

      var _roundOffsets = roundOffsets(offsets),
          x = _roundOffsets.x,
          y = _roundOffsets.y;

      var hasX = offsets.hasOwnProperty('x');
      var hasY = offsets.hasOwnProperty('y');
      var sideX = left;
      var sideY = top;
      var win = window;

      if (adaptive) {
        var offsetParent = getOffsetParent(popper);

        if (offsetParent === getWindow(popper)) {
          offsetParent = getDocumentElement(popper);
        } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

        /*:: offsetParent = (offsetParent: Element); */


        if (placement === top) {
          sideY = bottom;
          y -= offsetParent.clientHeight - popperRect.height;
          y *= gpuAcceleration ? 1 : -1;
        }

        if (placement === left) {
          sideX = right;
          x -= offsetParent.clientWidth - popperRect.width;
          x *= gpuAcceleration ? 1 : -1;
        }
      }

      var commonStyles = Object.assign({
        position: position
      }, adaptive && unsetSides);

      if (gpuAcceleration) {
        var _Object$assign;

        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
      }

      return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
    }

    function computeStyles(_ref3) {
      var state = _ref3.state,
          options = _ref3.options;
      var _options$gpuAccelerat = options.gpuAcceleration,
          gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
          _options$adaptive = options.adaptive,
          adaptive = _options$adaptive === void 0 ? true : _options$adaptive;

      var commonStyles = {
        placement: getBasePlacement(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration
      };

      if (state.modifiersData.popperOffsets != null) {
        state.styles.popper = Object.assign({}, state.styles.popper, {}, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.popperOffsets,
          position: state.options.strategy,
          adaptive: adaptive
        })));
      }

      if (state.modifiersData.arrow != null) {
        state.styles.arrow = Object.assign({}, state.styles.arrow, {}, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.arrow,
          position: 'absolute',
          adaptive: false
        })));
      }

      state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-placement': state.placement
      });
    } // eslint-disable-next-line import/no-unused-modules


    var computeStyles$1 = {
      name: 'computeStyles',
      enabled: true,
      phase: 'beforeWrite',
      fn: computeStyles,
      data: {}
    };

    // and applies them to the HTMLElements such as popper and arrow

    function applyStyles(_ref) {
      var state = _ref.state;
      Object.keys(state.elements).forEach(function (name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        } // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe


        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (name) {
          var value = attributes[name];

          if (value === false) {
            element.removeAttribute(name);
          } else {
            element.setAttribute(name, value === true ? '' : value);
          }
        });
      });
    }

    function effect$1(_ref2) {
      var state = _ref2.state;
      var initialStyles = {
        popper: {
          position: state.options.strategy,
          left: '0',
          top: '0',
          margin: '0'
        },
        arrow: {
          position: 'absolute'
        },
        reference: {}
      };
      Object.assign(state.elements.popper.style, initialStyles.popper);

      if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
      }

      return function () {
        Object.keys(state.elements).forEach(function (name) {
          var element = state.elements[name];
          var attributes = state.attributes[name] || {};
          var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

          var style = styleProperties.reduce(function (style, property) {
            style[property] = '';
            return style;
          }, {}); // arrow is optional + virtual elements

          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          } // Flow doesn't support to extend this property, but it's the most
          // effective way to apply styles to an HTMLElement
          // $FlowFixMe


          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function (attribute) {
            element.removeAttribute(attribute);
          });
        });
      };
    } // eslint-disable-next-line import/no-unused-modules


    var applyStyles$1 = {
      name: 'applyStyles',
      enabled: true,
      phase: 'write',
      fn: applyStyles,
      effect: effect$1,
      requires: ['computeStyles']
    };

    function distanceAndSkiddingToXY(placement, rects, offset) {
      var basePlacement = getBasePlacement(placement);
      var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

      var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
        placement: placement
      })) : offset,
          skidding = _ref[0],
          distance = _ref[1];

      skidding = skidding || 0;
      distance = (distance || 0) * invertDistance;
      return [left, right].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
      } : {
        x: skidding,
        y: distance
      };
    }

    function offset(_ref2) {
      var state = _ref2.state,
          options = _ref2.options,
          name = _ref2.name;
      var _options$offset = options.offset,
          offset = _options$offset === void 0 ? [0, 0] : _options$offset;
      var data = placements.reduce(function (acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
        return acc;
      }, {});
      var _data$state$placement = data[state.placement],
          x = _data$state$placement.x,
          y = _data$state$placement.y;

      if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
      }

      state.modifiersData[name] = data;
    } // eslint-disable-next-line import/no-unused-modules


    var offset$1 = {
      name: 'offset',
      enabled: true,
      phase: 'main',
      requires: ['popperOffsets'],
      fn: offset
    };

    var hash = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    function getOppositePlacement(placement) {
      return placement.replace(/left|right|bottom|top/g, function (matched) {
        return hash[matched];
      });
    }

    var hash$1 = {
      start: 'end',
      end: 'start'
    };
    function getOppositeVariationPlacement(placement) {
      return placement.replace(/start|end/g, function (matched) {
        return hash$1[matched];
      });
    }

    function getViewportRect(element) {
      var win = getWindow(element);
      var visualViewport = win.visualViewport;
      var width = win.innerWidth;
      var height = win.innerHeight; // We don't know which browsers have buggy or odd implementations of this, so
      // for now we're only applying it to iOS to fix the keyboard issue.
      // Investigation required

      if (visualViewport && /iPhone|iPod|iPad/.test(navigator.platform)) {
        width = visualViewport.width;
        height = visualViewport.height;
      }

      return {
        width: width,
        height: height,
        x: 0,
        y: 0
      };
    }

    function getDocumentRect(element) {
      var win = getWindow(element);
      var winScroll = getWindowScroll(element);
      var documentRect = getCompositeRect(getDocumentElement(element), win);
      documentRect.height = Math.max(documentRect.height, win.innerHeight);
      documentRect.width = Math.max(documentRect.width, win.innerWidth);
      documentRect.x = -winScroll.scrollLeft;
      documentRect.y = -winScroll.scrollTop;
      return documentRect;
    }

    function toNumber(cssValue) {
      return parseFloat(cssValue) || 0;
    }

    function getBorders(element) {
      var computedStyle = isHTMLElement(element) ? getComputedStyle(element) : {};
      return {
        top: toNumber(computedStyle.borderTopWidth),
        right: toNumber(computedStyle.borderRightWidth),
        bottom: toNumber(computedStyle.borderBottomWidth),
        left: toNumber(computedStyle.borderLeftWidth)
      };
    }

    function getDecorations(element) {
      var win = getWindow(element);
      var borders = getBorders(element);
      var isHTML = getNodeName(element) === 'html';
      var winScrollBarX = getWindowScrollBarX(element);
      var x = element.clientWidth + borders.right;
      var y = element.clientHeight + borders.bottom; // HACK:
      // document.documentElement.clientHeight on iOS reports the height of the
      // viewport including the bottom bar, even if the bottom bar isn't visible.
      // If the difference between window innerHeight and html clientHeight is more
      // than 50, we assume it's a mobile bottom bar and ignore scrollbars.
      // * A 50px thick scrollbar is likely non-existent (macOS is 15px and Windows
      //   is about 17px)
      // * The mobile bar is 114px tall

      if (isHTML && win.innerHeight - element.clientHeight > 50) {
        y = win.innerHeight - borders.bottom;
      }

      return {
        top: isHTML ? 0 : element.clientTop,
        right: // RTL scrollbar (scrolling containers only)
        element.clientLeft > borders.left ? borders.right : // LTR scrollbar
        isHTML ? win.innerWidth - x - winScrollBarX : element.offsetWidth - x,
        bottom: isHTML ? win.innerHeight - y : element.offsetHeight - y,
        left: isHTML ? winScrollBarX : element.clientLeft
      };
    }

    function contains(parent, child) {
      // $FlowFixMe: hasOwnProperty doesn't seem to work in tests
      var isShadow = Boolean(child.getRootNode && child.getRootNode().host); // First, attempt with faster native method

      if (parent.contains(child)) {
        return true;
      } // then fallback to custom implementation with Shadow DOM support
      else if (isShadow) {
          var next = child;

          do {
            if (next && parent.isSameNode(next)) {
              return true;
            } // $FlowFixMe: need a better way to handle this...


            next = next.parentNode || next.host;
          } while (next);
        } // Give up, the result is false


      return false;
    }

    function rectToClientRect(rect) {
      return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
      });
    }

    function getClientRectFromMixedType(element, clippingParent) {
      return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
    } // A "clipping parent" is an overflowable container with the characteristic of
    // clipping (or hiding) overflowing elements with a position different from
    // `initial`


    function getClippingParents(element) {
      var clippingParents = listScrollParents(element);
      var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
      var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

      if (!isElement$1$1(clipperElement)) {
        return [];
      } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


      return clippingParents.filter(function (clippingParent) {
        return isElement$1$1(clippingParent) && contains(clippingParent, clipperElement);
      });
    } // Gets the maximum area that the element is visible in due to any number of
    // clipping parents


    function getClippingRect(element, boundary, rootBoundary) {
      var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
      var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
      var firstClippingParent = clippingParents[0];
      var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        var decorations = getDecorations(isHTMLElement(clippingParent) ? clippingParent : getDocumentElement(element));
        accRect.top = Math.max(rect.top + decorations.top, accRect.top);
        accRect.right = Math.min(rect.right - decorations.right, accRect.right);
        accRect.bottom = Math.min(rect.bottom - decorations.bottom, accRect.bottom);
        accRect.left = Math.max(rect.left + decorations.left, accRect.left);
        return accRect;
      }, getClientRectFromMixedType(element, firstClippingParent));
      clippingRect.width = clippingRect.right - clippingRect.left;
      clippingRect.height = clippingRect.bottom - clippingRect.top;
      clippingRect.x = clippingRect.left;
      clippingRect.y = clippingRect.top;
      return clippingRect;
    }

    function getFreshSideObject() {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }

    function mergePaddingObject(paddingObject) {
      return Object.assign({}, getFreshSideObject(), {}, paddingObject);
    }

    function expandToHashMap(value, keys) {
      return keys.reduce(function (hashMap, key) {
        hashMap[key] = value;
        return hashMap;
      }, {});
    }

    function detectOverflow(state, options) {
      if (options === void 0) {
        options = {};
      }

      var _options = options,
          _options$placement = _options.placement,
          placement = _options$placement === void 0 ? state.placement : _options$placement,
          _options$boundary = _options.boundary,
          boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
          _options$rootBoundary = _options.rootBoundary,
          rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
          _options$elementConte = _options.elementContext,
          elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
          _options$altBoundary = _options.altBoundary,
          altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
          _options$padding = _options.padding,
          padding = _options$padding === void 0 ? 0 : _options$padding;
      var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
      var altContext = elementContext === popper ? reference : popper;
      var referenceElement = state.elements.reference;
      var popperRect = state.rects.popper;
      var element = state.elements[altBoundary ? altContext : elementContext];
      var clippingClientRect = getClippingRect(isElement$1$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
      var referenceClientRect = getBoundingClientRect(referenceElement);
      var popperOffsets = computeOffsets({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
      });
      var popperClientRect = rectToClientRect(Object.assign({}, popperRect, {}, popperOffsets));
      var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
      // 0 or negative = within the clipping rect

      var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
      };
      var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

      if (elementContext === popper && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function (key) {
          var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
          var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
          overflowOffsets[key] += offset[axis] * multiply;
        });
      }

      return overflowOffsets;
    }

    /*:: type OverflowsMap = { [ComputedPlacement]: number }; */

    /*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */

    function computeAutoPlacement(state, options) {
      if (options === void 0) {
        options = {};
      }

      var _options = options,
          placement = _options.placement,
          boundary = _options.boundary,
          rootBoundary = _options.rootBoundary,
          padding = _options.padding,
          flipVariations = _options.flipVariations,
          _options$allowedAutoP = _options.allowedAutoPlacements,
          allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
      var variation = getVariation(placement);
      var placements$1 = (variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
        return getVariation(placement) === variation;
      }) : basePlacements).filter(function (placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
      }); // $FlowFixMe: Flow seems to have problems with two array unions...

      var overflows = placements$1.reduce(function (acc, placement) {
        acc[placement] = detectOverflow(state, {
          placement: placement,
          boundary: boundary,
          rootBoundary: rootBoundary,
          padding: padding
        })[getBasePlacement(placement)];
        return acc;
      }, {});
      return Object.keys(overflows).sort(function (a, b) {
        return overflows[a] - overflows[b];
      });
    }

    function getExpandedFallbackPlacements(placement) {
      if (getBasePlacement(placement) === auto) {
        return [];
      }

      var oppositePlacement = getOppositePlacement(placement);
      return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
    }

    function flip(_ref) {
      var state = _ref.state,
          options = _ref.options,
          name = _ref.name;

      if (state.modifiersData[name]._skip) {
        return;
      }

      var _options$mainAxis = options.mainAxis,
          checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
          _options$altAxis = options.altAxis,
          checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
          specifiedFallbackPlacements = options.fallbackPlacements,
          padding = options.padding,
          boundary = options.boundary,
          rootBoundary = options.rootBoundary,
          altBoundary = options.altBoundary,
          _options$flipVariatio = options.flipVariations,
          flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
          allowedAutoPlacements = options.allowedAutoPlacements;
      var preferredPlacement = state.options.placement;
      var basePlacement = getBasePlacement(preferredPlacement);
      var isBasePlacement = basePlacement === preferredPlacement;
      var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
      var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
        return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
          placement: placement,
          boundary: boundary,
          rootBoundary: rootBoundary,
          padding: padding,
          flipVariations: flipVariations,
          allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
      }, []);
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var checksMap = new Map();
      var makeFallbackChecks = true;
      var firstFittingPlacement = placements[0];

      for (var i = 0; i < placements.length; i++) {
        var placement = placements[i];

        var _basePlacement = getBasePlacement(placement);

        var isStartVariation = getVariation(placement) === start;
        var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = detectOverflow(state, {
          placement: placement,
          boundary: boundary,
          rootBoundary: rootBoundary,
          altBoundary: altBoundary,
          padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

        if (referenceRect[len] > popperRect[len]) {
          mainVariationSide = getOppositePlacement(mainVariationSide);
        }

        var altVariationSide = getOppositePlacement(mainVariationSide);
        var checks = [];

        if (checkMainAxis) {
          checks.push(overflow[_basePlacement] <= 0);
        }

        if (checkAltAxis) {
          checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        }

        if (checks.every(function (check) {
          return check;
        })) {
          firstFittingPlacement = placement;
          makeFallbackChecks = false;
          break;
        }

        checksMap.set(placement, checks);
      }

      if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;

        var _loop = function _loop(_i) {
          var fittingPlacement = placements.find(function (placement) {
            var checks = checksMap.get(placement);

            if (checks) {
              return checks.slice(0, _i).every(function (check) {
                return check;
              });
            }
          });

          if (fittingPlacement) {
            firstFittingPlacement = fittingPlacement;
            return "break";
          }
        };

        for (var _i = numberOfChecks; _i > 0; _i--) {
          var _ret = _loop(_i);

          if (_ret === "break") break;
        }
      }

      if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
      }
    } // eslint-disable-next-line import/no-unused-modules


    var flip$1 = {
      name: 'flip',
      enabled: true,
      phase: 'main',
      fn: flip,
      requiresIfExists: ['offset'],
      data: {
        _skip: false
      }
    };

    function getAltAxis(axis) {
      return axis === 'x' ? 'y' : 'x';
    }

    function within(min, value, max) {
      return Math.max(min, Math.min(value, max));
    }

    function preventOverflow(_ref) {
      var state = _ref.state,
          options = _ref.options,
          name = _ref.name;
      var _options$mainAxis = options.mainAxis,
          checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
          _options$altAxis = options.altAxis,
          checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
          boundary = options.boundary,
          rootBoundary = options.rootBoundary,
          altBoundary = options.altBoundary,
          padding = options.padding,
          _options$tether = options.tether,
          tether = _options$tether === void 0 ? true : _options$tether,
          _options$tetherOffset = options.tetherOffset,
          tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
      var overflow = detectOverflow(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
      });
      var basePlacement = getBasePlacement(state.placement);
      var variation = getVariation(state.placement);
      var isBasePlacement = !variation;
      var mainAxis = getMainAxisFromPlacement(basePlacement);
      var altAxis = getAltAxis(mainAxis);
      var popperOffsets = state.modifiersData.popperOffsets;
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
      })) : tetherOffset;
      var data = {
        x: 0,
        y: 0
      };

      if (!popperOffsets) {
        return;
      }

      if (checkMainAxis) {
        var mainSide = mainAxis === 'y' ? top : left;
        var altSide = mainAxis === 'y' ? bottom : right;
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset = popperOffsets[mainAxis];
        var min = popperOffsets[mainAxis] + overflow[mainSide];
        var max = popperOffsets[mainAxis] - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds

        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
          width: 0,
          height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)

        var arrowLen = within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
        var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
        var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
        var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
      }

      if (checkAltAxis) {
        var _mainSide = mainAxis === 'x' ? top : left;

        var _altSide = mainAxis === 'x' ? bottom : right;

        var _offset = popperOffsets[altAxis];

        var _min = _offset + overflow[_mainSide];

        var _max = _offset - overflow[_altSide];

        var _preventedOffset = within(_min, _offset, _max);

        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
      }

      state.modifiersData[name] = data;
    } // eslint-disable-next-line import/no-unused-modules


    var preventOverflow$1 = {
      name: 'preventOverflow',
      enabled: true,
      phase: 'main',
      fn: preventOverflow,
      requiresIfExists: ['offset']
    };

    function arrow(_ref) {
      var _state$modifiersData$;

      var state = _ref.state,
          name = _ref.name;
      var arrowElement = state.elements.arrow;
      var popperOffsets = state.modifiersData.popperOffsets;
      var basePlacement = getBasePlacement(state.placement);
      var axis = getMainAxisFromPlacement(basePlacement);
      var isVertical = [left, right].indexOf(basePlacement) >= 0;
      var len = isVertical ? 'height' : 'width';

      if (!arrowElement || !popperOffsets) {
        return;
      }

      var paddingObject = state.modifiersData[name + "#persistent"].padding;
      var arrowRect = getLayoutRect(arrowElement);
      var minProp = axis === 'y' ? top : left;
      var maxProp = axis === 'y' ? bottom : right;
      var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
      var startDiff = popperOffsets[axis] - state.rects.reference[axis];
      var arrowOffsetParent = getOffsetParent(arrowElement);
      var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
      var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
      // outside of the popper bounds

      var min = paddingObject[minProp];
      var max = clientSize - arrowRect[len] - paddingObject[maxProp];
      var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
      var offset = within(min, center, max); // Prevents breaking syntax highlighting...

      var axisProp = axis;
      state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
    }

    function effect$2(_ref2) {
      var state = _ref2.state,
          options = _ref2.options,
          name = _ref2.name;
      var _options$element = options.element,
          arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
          _options$padding = options.padding,
          padding = _options$padding === void 0 ? 0 : _options$padding;

      if (arrowElement == null) {
        return;
      } // CSS selector


      if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);

        if (!arrowElement) {
          return;
        }
      }

      if (!contains(state.elements.popper, arrowElement)) {

        return;
      }

      state.elements.arrow = arrowElement;
      state.modifiersData[name + "#persistent"] = {
        padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
      };
    } // eslint-disable-next-line import/no-unused-modules


    var arrow$1 = {
      name: 'arrow',
      enabled: true,
      phase: 'main',
      fn: arrow,
      effect: effect$2,
      requires: ['popperOffsets'],
      requiresIfExists: ['preventOverflow']
    };

    function getSideOffsets(overflow, rect, preventedOffsets) {
      if (preventedOffsets === void 0) {
        preventedOffsets = {
          x: 0,
          y: 0
        };
      }

      return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
      };
    }

    function isAnySideFullyClipped(overflow) {
      return [top, right, bottom, left].some(function (side) {
        return overflow[side] >= 0;
      });
    }

    function hide(_ref) {
      var state = _ref.state,
          name = _ref.name;
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var preventedOffsets = state.modifiersData.preventOverflow;
      var referenceOverflow = detectOverflow(state, {
        elementContext: 'reference'
      });
      var popperAltOverflow = detectOverflow(state, {
        altBoundary: true
      });
      var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
      var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
      var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
      var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
      state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
      };
      state.attributes.popper = Object.assign({}, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
      });
    } // eslint-disable-next-line import/no-unused-modules


    var hide$1 = {
      name: 'hide',
      enabled: true,
      phase: 'main',
      requiresIfExists: ['preventOverflow'],
      fn: hide
    };

    var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
    var createPopper = /*#__PURE__*/popperGenerator({
      defaultModifiers: defaultModifiers
    }); // eslint-disable-next-line import/no-unused-modules

    function _getCenteredStylePopperModifier() {
      return [{
        name: 'applyStyles',
        fn: function fn(_ref) {
          var state = _ref.state;
          Object.keys(state.elements).forEach(function (name) {
            if (name !== 'popper') {
              return;
            }

            var style = {
              position: 'fixed',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            };
            var attributes = state.attributes[name] || {};
            var element = state.elements[name];
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function (name) {
              var value = attributes[name];

              if (value === false) {
                element.removeAttribute(name);
              } else {
                element.setAttribute(name, value === true ? '' : value);
              }
            });
          });
        }
      }, {
        name: 'computeStyles',
        options: {
          adaptive: false
        }
      }];
    }
    /**
     * Generates the array of options for a tooltip that doesn't have a
     * target element in the DOM -- and thus is positioned in the center
     * of the view
     *
     * @param {Step} step The step instance
     * @return {Object} The final Popper options object
     */


    function makeCenteredPopper(step) {
      var centeredStylePopperModifier = _getCenteredStylePopperModifier();

      var popperOptions = {
        placement: 'top',
        strategy: 'fixed',
        modifiers: [{
          name: 'focusAfterRender',
          enabled: true,
          phase: 'afterWrite',
          fn: function fn() {
            setTimeout(function () {
              step.el.focus();
            }, 300);
          }
        }]
      };
      popperOptions = _extends$1(_extends$1({}, popperOptions), {}, {
        modifiers: Array.from(new Set([].concat(popperOptions.modifiers, centeredStylePopperModifier)))
      });
      return popperOptions;
    }

    /**
     * Ensure class prefix ends in `-`
     * @param {string} prefix The prefix to prepend to the class names generated by nano-css
     * @return {string} The prefix ending in `-`
     */

    function normalizePrefix(prefix) {
      if (!isString(prefix) || prefix === '') {
        return '';
      }

      return prefix.charAt(prefix.length - 1) !== '-' ? prefix + "-" : prefix;
    }
    /**
     * Checks if options.attachTo.element is a string, and if so, tries to find the element
     * @param {Step} step The step instance
     * @returns {{element, on}}
     * `element` is a qualified HTML Element
     * `on` is a string position value
     */

    function parseAttachTo(step) {
      var options = step.options.attachTo || {};
      var returnOpts = Object.assign({}, options);

      if (isString(options.element)) {
        // Can't override the element in user opts reference because we can't
        // guarantee that the element will exist in the future.
        try {
          returnOpts.element = document.querySelector(options.element);
        } catch (e) {// TODO
        }

        if (!returnOpts.element) {
          console.error("The element for this Shepherd step was not found " + options.element);
        }
      }

      return returnOpts;
    }
    /**
     * Determines options for the tooltip and initializes
     * `step.tooltip` as a Popper instance.
     * @param {Step} step The step instance
     */

    function setupTooltip(step) {
      if (step.tooltip) {
        step.tooltip.destroy();
      }

      var attachToOptions = parseAttachTo(step);
      var target = attachToOptions.element;
      var popperOptions = getPopperOptions(attachToOptions, step);

      if (step.isCentered()) {
        target = document.body;
        var content = step.shepherdElementComponent.getElement();
        content.classList.add('shepherd-centered');
      }

      step.tooltip = createPopper(target, step.el, popperOptions);
      step.target = attachToOptions.element;
      return popperOptions;
    }
    /**
     * Create a unique id for steps, tours, modals, etc
     * @return {string}
     */

    function uuid() {
      var d = Date.now();
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
    }
    /**
     * Gets the `Popper` options from a set of base `attachTo` options
     * @param attachToOptions
     * @param {Step} step The step instance
     * @return {Object}
     * @private
     */

    function getPopperOptions(attachToOptions, step) {
      var popperOptions = {
        modifiers: [{
          name: 'preventOverflow',
          options: {
            altAxis: true
          }
        }, {
          name: 'focusAfterRender',
          enabled: true,
          phase: 'afterWrite',
          fn: function fn() {
            setTimeout(function () {
              step.el.focus();
            }, 300);
          }
        }],
        strategy: 'absolute'
      };

      if (step.isCentered()) {
        popperOptions = makeCenteredPopper(step);
      } else {
        popperOptions.placement = attachToOptions.on;
      }

      var defaultStepOptions = step.tour && step.tour.options && step.tour.options.defaultStepOptions;

      if (defaultStepOptions) {
        popperOptions = _mergeModifiers(defaultStepOptions, popperOptions);
      }

      popperOptions = _mergeModifiers(step.options, popperOptions);
      return popperOptions;
    }

    function _mergeModifiers(stepOptions, popperOptions) {
      if (stepOptions.popperOptions) {
        var mergedPopperOptions = Object.assign({}, popperOptions, stepOptions.popperOptions);

        if (stepOptions.popperOptions.modifiers && stepOptions.popperOptions.modifiers.length > 0) {
          var names = stepOptions.popperOptions.modifiers.map(function (mod) {
            return mod.name;
          });
          var filteredModifiers = popperOptions.modifiers.filter(function (mod) {
            return !names.includes(mod.name);
          });
          mergedPopperOptions.modifiers = Array.from(new Set([].concat(filteredModifiers, stepOptions.popperOptions.modifiers)));
        }

        return mergedPopperOptions;
      }

      return popperOptions;
    }

    function noop() {}

    function assign(tar, src) {
      // @ts-ignore
      for (var k in src) {
        tar[k] = src[k];
      }

      return tar;
    }

    function run(fn) {
      return fn();
    }

    function blank_object() {
      return Object.create(null);
    }

    function run_all(fns) {
      fns.forEach(run);
    }

    function is_function(thing) {
      return typeof thing === 'function';
    }

    function safe_not_equal(a, b) {
      return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
    }

    function append(target, node) {
      target.appendChild(node);
    }

    function insert(target, node, anchor) {
      target.insertBefore(node, anchor || null);
    }

    function detach(node) {
      node.parentNode.removeChild(node);
    }

    function destroy_each(iterations, detaching) {
      for (var i = 0; i < iterations.length; i += 1) {
        if (iterations[i]) iterations[i].d(detaching);
      }
    }

    function element(name) {
      return document.createElement(name);
    }

    function svg_element(name) {
      return document.createElementNS('http://www.w3.org/2000/svg', name);
    }

    function text(data) {
      return document.createTextNode(data);
    }

    function space() {
      return text(' ');
    }

    function empty() {
      return text('');
    }

    function listen(node, event, handler, options) {
      node.addEventListener(event, handler, options);
      return function () {
        return node.removeEventListener(event, handler, options);
      };
    }

    function attr(node, attribute, value) {
      if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
    }

    function set_attributes(node, attributes) {
      // @ts-ignore
      var descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

      for (var key in attributes) {
        if (attributes[key] == null) {
          node.removeAttribute(key);
        } else if (key === 'style') {
          node.style.cssText = attributes[key];
        } else if (key === '__value' || descriptors[key] && descriptors[key].set) {
          node[key] = attributes[key];
        } else {
          attr(node, key, attributes[key]);
        }
      }
    }

    function children(element) {
      return Array.from(element.childNodes);
    }

    function toggle_class(element, name, toggle) {
      element.classList[toggle ? 'add' : 'remove'](name);
    }

    var current_component;

    function set_current_component(component) {
      current_component = component;
    }

    function get_current_component() {
      if (!current_component) throw new Error("Function called outside component initialization");
      return current_component;
    }

    function onMount(fn) {
      get_current_component().$$.on_mount.push(fn);
    }

    function afterUpdate(fn) {
      get_current_component().$$.after_update.push(fn);
    }

    var dirty_components = [];
    var binding_callbacks = [];
    var render_callbacks = [];
    var flush_callbacks = [];
    var resolved_promise = Promise.resolve();
    var update_scheduled = false;

    function schedule_update() {
      if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
      }
    }

    function add_render_callback(fn) {
      render_callbacks.push(fn);
    }

    var flushing = false;
    var seen_callbacks = new Set();

    function flush() {
      if (flushing) return;
      flushing = true;

      do {
        // first, call beforeUpdate functions
        // and update components
        for (var i = 0; i < dirty_components.length; i += 1) {
          var component = dirty_components[i];
          set_current_component(component);
          update(component.$$);
        }

        dirty_components.length = 0;

        while (binding_callbacks.length) {
          binding_callbacks.pop()();
        } // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...


        for (var _i = 0; _i < render_callbacks.length; _i += 1) {
          var callback = render_callbacks[_i];

          if (!seen_callbacks.has(callback)) {
            // ...so guard against infinite loops
            seen_callbacks.add(callback);
            callback();
          }
        }

        render_callbacks.length = 0;
      } while (dirty_components.length);

      while (flush_callbacks.length) {
        flush_callbacks.pop()();
      }

      update_scheduled = false;
      flushing = false;
      seen_callbacks.clear();
    }

    function update($$) {
      if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        var dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
      }
    }

    var outroing = new Set();
    var outros;

    function group_outros() {
      outros = {
        r: 0,
        c: [],
        p: outros // parent group

      };
    }

    function check_outros() {
      if (!outros.r) {
        run_all(outros.c);
      }

      outros = outros.p;
    }

    function transition_in(block, local) {
      if (block && block.i) {
        outroing.delete(block);
        block.i(local);
      }
    }

    function transition_out(block, local, detach, callback) {
      if (block && block.o) {
        if (outroing.has(block)) return;
        outroing.add(block);
        outros.c.push(function () {
          outroing.delete(block);

          if (callback) {
            if (detach) block.d(1);
            callback();
          }
        });
        block.o(local);
      }
    }

    function get_spread_update(levels, updates) {
      var update = {};
      var to_null_out = {};
      var accounted_for = {
        $$scope: 1
      };
      var i = levels.length;

      while (i--) {
        var o = levels[i];
        var n = updates[i];

        if (n) {
          for (var key in o) {
            if (!(key in n)) to_null_out[key] = 1;
          }

          for (var _key3 in n) {
            if (!accounted_for[_key3]) {
              update[_key3] = n[_key3];
              accounted_for[_key3] = 1;
            }
          }

          levels[i] = n;
        } else {
          for (var _key4 in o) {
            accounted_for[_key4] = 1;
          }
        }
      }

      for (var _key5 in to_null_out) {
        if (!(_key5 in update)) update[_key5] = undefined;
      }

      return update;
    }

    function create_component(block) {
      block && block.c();
    }

    function mount_component(component, target, anchor) {
      var _component$$$ = component.$$,
          fragment = _component$$$.fragment,
          on_mount = _component$$$.on_mount,
          on_destroy = _component$$$.on_destroy,
          after_update = _component$$$.after_update;
      fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

      add_render_callback(function () {
        var new_on_destroy = on_mount.map(run).filter(is_function);

        if (on_destroy) {
          on_destroy.push.apply(on_destroy, new_on_destroy);
        } else {
          // Edge case - component was destroyed immediately,
          // most likely as a result of a binding initialising
          run_all(new_on_destroy);
        }

        component.$$.on_mount = [];
      });
      after_update.forEach(add_render_callback);
    }

    function destroy_component(component, detaching) {
      var $$ = component.$$;

      if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)

        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
      }
    }

    function make_dirty(component, i) {
      if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
      }

      component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
    }

    function init$1(component, options, instance, create_fragment, not_equal, props, dirty) {
      if (dirty === void 0) {
        dirty = [-1];
      }

      var parent_component = current_component;
      set_current_component(component);
      var prop_values = options.props || {};
      var $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props: props,
        update: noop,
        not_equal: not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : []),
        // everything else
        callbacks: blank_object(),
        dirty: dirty
      };
      var ready = false;
      $$.ctx = instance ? instance(component, prop_values, function (i, ret) {
        var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

        if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
          if ($$.bound[i]) $$.bound[i](value);
          if (ready) make_dirty(component, i);
        }

        return ret;
      }) : [];
      $$.update();
      ready = true;
      run_all($$.before_update); // `false` as a special case of no DOM component

      $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

      if (options.target) {
        if (options.hydrate) {
          var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

          $$.fragment && $$.fragment.l(nodes);
          nodes.forEach(detach);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          $$.fragment && $$.fragment.c();
        }

        if (options.intro) transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor);
        flush();
      }

      set_current_component(parent_component);
    }

    var SvelteComponent = /*#__PURE__*/function () {
      function SvelteComponent() {}

      var _proto3 = SvelteComponent.prototype;

      _proto3.$destroy = function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      };

      _proto3.$on = function $on(type, callback) {
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      };

      _proto3.$set = function $set() {// overridden by instance, if it has props
      };

      return SvelteComponent;
    }();

    function create_fragment(ctx) {
      var button;
      var button_aria_label_value;
      var button_class_value;
      var dispose;
      return {
        c: function c() {
          button = element("button");
          attr(button, "aria-label", button_aria_label_value =
          /*label*/
          ctx[4] ?
          /*label*/
          ctx[4] : null);
          attr(button, "class", button_class_value = (
          /*classes*/
          ctx[1] || "") + " shepherd-button " + (
          /*secondary*/
          ctx[2] ? "shepherd-button-secondary" : ""));
          button.disabled =
          /*disabled*/
          ctx[5];
          attr(button, "tabindex", "0");
        },
        m: function m(target, anchor, remount) {
          insert(target, button, anchor);
          button.innerHTML =
          /*text*/
          ctx[3];
          if (remount) dispose();
          dispose = listen(button, "click", function () {
            if (is_function(
            /*action*/
            ctx[0]))
              /*action*/
              ctx[0].apply(this, arguments);
          });
        },
        p: function p(new_ctx, _ref) {
          var dirty = _ref[0];
          ctx = new_ctx;
          if (dirty &
          /*text*/
          8) button.innerHTML =
          /*text*/
          ctx[3];

          if (dirty &
          /*label*/
          16 && button_aria_label_value !== (button_aria_label_value =
          /*label*/
          ctx[4] ?
          /*label*/
          ctx[4] : null)) {
            attr(button, "aria-label", button_aria_label_value);
          }

          if (dirty &
          /*classes, secondary*/
          6 && button_class_value !== (button_class_value = (
          /*classes*/
          ctx[1] || "") + " shepherd-button " + (
          /*secondary*/
          ctx[2] ? "shepherd-button-secondary" : ""))) {
            attr(button, "class", button_class_value);
          }

          if (dirty &
          /*disabled*/
          32) {
            button.disabled =
            /*disabled*/
            ctx[5];
          }
        },
        i: noop,
        o: noop,
        d: function d(detaching) {
          if (detaching) detach(button);
          dispose();
        }
      };
    }

    function instance($$self, $$props, $$invalidate) {
      var config = $$props.config,
          step = $$props.step;
      var action, classes, secondary, text, label, disabled;

      function getDisabled(disabled) {
        if (isFunction(disabled)) {
          return disabled = disabled.call(step);
        }

        return disabled;
      }

      $$self.$set = function ($$props) {
        if ("config" in $$props) $$invalidate(6, config = $$props.config);
        if ("step" in $$props) $$invalidate(7, step = $$props.step);
      };

      $$self.$$.update = function () {
        if ($$self.$$.dirty &
        /*config, step*/
        192) {
           {
            $$invalidate(0, action = config.action ? config.action.bind(step.tour) : null);
            $$invalidate(1, classes = config.classes);
            $$invalidate(2, secondary = config.secondary);
            $$invalidate(3, text = config.text);
            $$invalidate(4, label = config.label);
            $$invalidate(5, disabled = config.disabled ? getDisabled(config.disabled) : false);
          }
        }
      };

      return [action, classes, secondary, text, label, disabled, config, step];
    }

    var Shepherd_button = /*#__PURE__*/function (_SvelteComponent) {
      _inheritsLoose$1(Shepherd_button, _SvelteComponent);

      function Shepherd_button(options) {
        var _this;

        _this = _SvelteComponent.call(this) || this;
        init$1(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
          config: 6,
          step: 7
        });
        return _this;
      }

      return Shepherd_button;
    }(SvelteComponent);

    function get_each_context(ctx, list, i) {
      var child_ctx = ctx.slice();
      child_ctx[2] = list[i];
      return child_ctx;
    } // (25:4) {#if buttons}


    function create_if_block(ctx) {
      var each_1_anchor;
      var current;
      var each_value =
      /*buttons*/
      ctx[1];
      var each_blocks = [];

      for (var i = 0; i < each_value.length; i += 1) {
        each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
      }

      var out = function out(i) {
        return transition_out(each_blocks[i], 1, 1, function () {
          each_blocks[i] = null;
        });
      };

      return {
        c: function c() {
          for (var _i = 0; _i < each_blocks.length; _i += 1) {
            each_blocks[_i].c();
          }

          each_1_anchor = empty();
        },
        m: function m(target, anchor) {
          for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
            each_blocks[_i2].m(target, anchor);
          }

          insert(target, each_1_anchor, anchor);
          current = true;
        },
        p: function p(ctx, dirty) {
          if (dirty &
          /*buttons, step*/
          3) {
            each_value =
            /*buttons*/
            ctx[1];

            var _i3;

            for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
              var child_ctx = get_each_context(ctx, each_value, _i3);

              if (each_blocks[_i3]) {
                each_blocks[_i3].p(child_ctx, dirty);

                transition_in(each_blocks[_i3], 1);
              } else {
                each_blocks[_i3] = create_each_block(child_ctx);

                each_blocks[_i3].c();

                transition_in(each_blocks[_i3], 1);

                each_blocks[_i3].m(each_1_anchor.parentNode, each_1_anchor);
              }
            }

            group_outros();

            for (_i3 = each_value.length; _i3 < each_blocks.length; _i3 += 1) {
              out(_i3);
            }

            check_outros();
          }
        },
        i: function i(local) {
          if (current) return;

          for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
            transition_in(each_blocks[_i4]);
          }

          current = true;
        },
        o: function o(local) {
          each_blocks = each_blocks.filter(Boolean);

          for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
            transition_out(each_blocks[_i5]);
          }

          current = false;
        },
        d: function d(detaching) {
          destroy_each(each_blocks, detaching);
          if (detaching) detach(each_1_anchor);
        }
      };
    } // (26:8) {#each buttons as config}


    function create_each_block(ctx) {
      var current;
      var shepherdbutton = new Shepherd_button({
        props: {
          config:
          /*config*/
          ctx[2],
          step:
          /*step*/
          ctx[0]
        }
      });
      return {
        c: function c() {
          create_component(shepherdbutton.$$.fragment);
        },
        m: function m(target, anchor) {
          mount_component(shepherdbutton, target, anchor);
          current = true;
        },
        p: function p(ctx, dirty) {
          var shepherdbutton_changes = {};
          if (dirty &
          /*buttons*/
          2) shepherdbutton_changes.config =
          /*config*/
          ctx[2];
          if (dirty &
          /*step*/
          1) shepherdbutton_changes.step =
          /*step*/
          ctx[0];
          shepherdbutton.$set(shepherdbutton_changes);
        },
        i: function i(local) {
          if (current) return;
          transition_in(shepherdbutton.$$.fragment, local);
          current = true;
        },
        o: function o(local) {
          transition_out(shepherdbutton.$$.fragment, local);
          current = false;
        },
        d: function d(detaching) {
          destroy_component(shepherdbutton, detaching);
        }
      };
    }

    function create_fragment$1(ctx) {
      var footer;
      var current;
      var if_block =
      /*buttons*/
      ctx[1] && create_if_block(ctx);
      return {
        c: function c() {
          footer = element("footer");
          if (if_block) if_block.c();
          attr(footer, "class", "shepherd-footer");
        },
        m: function m(target, anchor) {
          insert(target, footer, anchor);
          if (if_block) if_block.m(footer, null);
          current = true;
        },
        p: function p(ctx, _ref) {
          var dirty = _ref[0];

          if (
          /*buttons*/
          ctx[1]) {
            if (if_block) {
              if_block.p(ctx, dirty);

              if (dirty &
              /*buttons*/
              2) {
                transition_in(if_block, 1);
              }
            } else {
              if_block = create_if_block(ctx);
              if_block.c();
              transition_in(if_block, 1);
              if_block.m(footer, null);
            }
          } else if (if_block) {
            group_outros();
            transition_out(if_block, 1, 1, function () {
              if_block = null;
            });
            check_outros();
          }
        },
        i: function i(local) {
          if (current) return;
          transition_in(if_block);
          current = true;
        },
        o: function o(local) {
          transition_out(if_block);
          current = false;
        },
        d: function d(detaching) {
          if (detaching) detach(footer);
          if (if_block) if_block.d();
        }
      };
    }

    function instance$1($$self, $$props, $$invalidate) {
      var step = $$props.step;

      $$self.$set = function ($$props) {
        if ("step" in $$props) $$invalidate(0, step = $$props.step);
      };

      var buttons;

      $$self.$$.update = function () {
        if ($$self.$$.dirty &
        /*step*/
        1) {
           $$invalidate(1, buttons = step.options.buttons);
        }
      };

      return [step, buttons];
    }

    var Shepherd_footer = /*#__PURE__*/function (_SvelteComponent) {
      _inheritsLoose$1(Shepherd_footer, _SvelteComponent);

      function Shepherd_footer(options) {
        var _this;

        _this = _SvelteComponent.call(this) || this;
        init$1(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
          step: 0
        });
        return _this;
      }

      return Shepherd_footer;
    }(SvelteComponent);

    function create_fragment$2(ctx) {
      var button;
      var span;
      var button_aria_label_value;
      var dispose;
      return {
        c: function c() {
          button = element("button");
          span = element("span");
          span.textContent = "×";
          attr(span, "aria-hidden", "true");
          attr(button, "aria-label", button_aria_label_value =
          /*cancelIcon*/
          ctx[0].label ?
          /*cancelIcon*/
          ctx[0].label : "Close Tour");
          attr(button, "class", "shepherd-cancel-icon");
          attr(button, "type", "button");
        },
        m: function m(target, anchor, remount) {
          insert(target, button, anchor);
          append(button, span);
          if (remount) dispose();
          dispose = listen(button, "click",
          /*handleCancelClick*/
          ctx[1]);
        },
        p: function p(ctx, _ref) {
          var dirty = _ref[0];

          if (dirty &
          /*cancelIcon*/
          1 && button_aria_label_value !== (button_aria_label_value =
          /*cancelIcon*/
          ctx[0].label ?
          /*cancelIcon*/
          ctx[0].label : "Close Tour")) {
            attr(button, "aria-label", button_aria_label_value);
          }
        },
        i: noop,
        o: noop,
        d: function d(detaching) {
          if (detaching) detach(button);
          dispose();
        }
      };
    }

    function instance$2($$self, $$props, $$invalidate) {
      var cancelIcon = $$props.cancelIcon,
          step = $$props.step;
      /**
      * Add a click listener to the cancel link that cancels the tour
      */

      var handleCancelClick = function handleCancelClick(e) {
        e.preventDefault();
        step.cancel();
      };

      $$self.$set = function ($$props) {
        if ("cancelIcon" in $$props) $$invalidate(0, cancelIcon = $$props.cancelIcon);
        if ("step" in $$props) $$invalidate(2, step = $$props.step);
      };

      return [cancelIcon, handleCancelClick, step];
    }

    var Shepherd_cancel_icon = /*#__PURE__*/function (_SvelteComponent) {
      _inheritsLoose$1(Shepherd_cancel_icon, _SvelteComponent);

      function Shepherd_cancel_icon(options) {
        var _this;

        _this = _SvelteComponent.call(this) || this;
        init$1(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
          cancelIcon: 0,
          step: 2
        });
        return _this;
      }

      return Shepherd_cancel_icon;
    }(SvelteComponent);

    function create_fragment$3(ctx) {
      var h3;
      return {
        c: function c() {
          h3 = element("h3");
          attr(h3, "id",
          /*labelId*/
          ctx[1]);
          attr(h3, "class", "shepherd-title");
        },
        m: function m(target, anchor) {
          insert(target, h3, anchor);
          /*h3_binding*/

          ctx[3](h3);
        },
        p: function p(ctx, _ref) {
          var dirty = _ref[0];

          if (dirty &
          /*labelId*/
          2) {
            attr(h3, "id",
            /*labelId*/
            ctx[1]);
          }
        },
        i: noop,
        o: noop,
        d: function d(detaching) {
          if (detaching) detach(h3);
          /*h3_binding*/

          ctx[3](null);
        }
      };
    }

    function instance$3($$self, $$props, $$invalidate) {
      var labelId = $$props.labelId,
          element = $$props.element,
          title = $$props.title;
      afterUpdate(function () {
        if (isFunction(title)) {
          $$invalidate(2, title = title());
        }

        $$invalidate(0, element.innerHTML = title, element);
      });

      function h3_binding($$value) {
        binding_callbacks[$$value ? "unshift" : "push"](function () {
          $$invalidate(0, element = $$value);
        });
      }

      $$self.$set = function ($$props) {
        if ("labelId" in $$props) $$invalidate(1, labelId = $$props.labelId);
        if ("element" in $$props) $$invalidate(0, element = $$props.element);
        if ("title" in $$props) $$invalidate(2, title = $$props.title);
      };

      return [element, labelId, title, h3_binding];
    }

    var Shepherd_title = /*#__PURE__*/function (_SvelteComponent) {
      _inheritsLoose$1(Shepherd_title, _SvelteComponent);

      function Shepherd_title(options) {
        var _this;

        _this = _SvelteComponent.call(this) || this;
        init$1(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
          labelId: 1,
          element: 0,
          title: 2
        });
        return _this;
      }

      return Shepherd_title;
    }(SvelteComponent);

    function create_if_block_1(ctx) {
      var current;
      var shepherdtitle = new Shepherd_title({
        props: {
          labelId:
          /*labelId*/
          ctx[0],
          title:
          /*title*/
          ctx[2]
        }
      });
      return {
        c: function c() {
          create_component(shepherdtitle.$$.fragment);
        },
        m: function m(target, anchor) {
          mount_component(shepherdtitle, target, anchor);
          current = true;
        },
        p: function p(ctx, dirty) {
          var shepherdtitle_changes = {};
          if (dirty &
          /*labelId*/
          1) shepherdtitle_changes.labelId =
          /*labelId*/
          ctx[0];
          if (dirty &
          /*title*/
          4) shepherdtitle_changes.title =
          /*title*/
          ctx[2];
          shepherdtitle.$set(shepherdtitle_changes);
        },
        i: function i(local) {
          if (current) return;
          transition_in(shepherdtitle.$$.fragment, local);
          current = true;
        },
        o: function o(local) {
          transition_out(shepherdtitle.$$.fragment, local);
          current = false;
        },
        d: function d(detaching) {
          destroy_component(shepherdtitle, detaching);
        }
      };
    } // (40:4) {#if cancelIcon && cancelIcon.enabled}


    function create_if_block$1(ctx) {
      var current;
      var shepherdcancelicon = new Shepherd_cancel_icon({
        props: {
          cancelIcon:
          /*cancelIcon*/
          ctx[3],
          step:
          /*step*/
          ctx[1]
        }
      });
      return {
        c: function c() {
          create_component(shepherdcancelicon.$$.fragment);
        },
        m: function m(target, anchor) {
          mount_component(shepherdcancelicon, target, anchor);
          current = true;
        },
        p: function p(ctx, dirty) {
          var shepherdcancelicon_changes = {};
          if (dirty &
          /*cancelIcon*/
          8) shepherdcancelicon_changes.cancelIcon =
          /*cancelIcon*/
          ctx[3];
          if (dirty &
          /*step*/
          2) shepherdcancelicon_changes.step =
          /*step*/
          ctx[1];
          shepherdcancelicon.$set(shepherdcancelicon_changes);
        },
        i: function i(local) {
          if (current) return;
          transition_in(shepherdcancelicon.$$.fragment, local);
          current = true;
        },
        o: function o(local) {
          transition_out(shepherdcancelicon.$$.fragment, local);
          current = false;
        },
        d: function d(detaching) {
          destroy_component(shepherdcancelicon, detaching);
        }
      };
    }

    function create_fragment$4(ctx) {
      var header;
      var t;
      var current;
      var if_block0 =
      /*title*/
      ctx[2] && create_if_block_1(ctx);
      var if_block1 =
      /*cancelIcon*/
      ctx[3] &&
      /*cancelIcon*/
      ctx[3].enabled && create_if_block$1(ctx);
      return {
        c: function c() {
          header = element("header");
          if (if_block0) if_block0.c();
          t = space();
          if (if_block1) if_block1.c();
          attr(header, "class", "shepherd-header");
        },
        m: function m(target, anchor) {
          insert(target, header, anchor);
          if (if_block0) if_block0.m(header, null);
          append(header, t);
          if (if_block1) if_block1.m(header, null);
          current = true;
        },
        p: function p(ctx, _ref) {
          var dirty = _ref[0];

          if (
          /*title*/
          ctx[2]) {
            if (if_block0) {
              if_block0.p(ctx, dirty);

              if (dirty &
              /*title*/
              4) {
                transition_in(if_block0, 1);
              }
            } else {
              if_block0 = create_if_block_1(ctx);
              if_block0.c();
              transition_in(if_block0, 1);
              if_block0.m(header, t);
            }
          } else if (if_block0) {
            group_outros();
            transition_out(if_block0, 1, 1, function () {
              if_block0 = null;
            });
            check_outros();
          }

          if (
          /*cancelIcon*/
          ctx[3] &&
          /*cancelIcon*/
          ctx[3].enabled) {
            if (if_block1) {
              if_block1.p(ctx, dirty);

              if (dirty &
              /*cancelIcon*/
              8) {
                transition_in(if_block1, 1);
              }
            } else {
              if_block1 = create_if_block$1(ctx);
              if_block1.c();
              transition_in(if_block1, 1);
              if_block1.m(header, null);
            }
          } else if (if_block1) {
            group_outros();
            transition_out(if_block1, 1, 1, function () {
              if_block1 = null;
            });
            check_outros();
          }
        },
        i: function i(local) {
          if (current) return;
          transition_in(if_block0);
          transition_in(if_block1);
          current = true;
        },
        o: function o(local) {
          transition_out(if_block0);
          transition_out(if_block1);
          current = false;
        },
        d: function d(detaching) {
          if (detaching) detach(header);
          if (if_block0) if_block0.d();
          if (if_block1) if_block1.d();
        }
      };
    }

    function instance$4($$self, $$props, $$invalidate) {
      var labelId = $$props.labelId,
          step = $$props.step;
      var title, cancelIcon;

      $$self.$set = function ($$props) {
        if ("labelId" in $$props) $$invalidate(0, labelId = $$props.labelId);
        if ("step" in $$props) $$invalidate(1, step = $$props.step);
      };

      $$self.$$.update = function () {
        if ($$self.$$.dirty &
        /*step*/
        2) {
           {
            $$invalidate(2, title = step.options.title);
            $$invalidate(3, cancelIcon = step.options.cancelIcon);
          }
        }
      };

      return [labelId, step, title, cancelIcon];
    }

    var Shepherd_header = /*#__PURE__*/function (_SvelteComponent) {
      _inheritsLoose$1(Shepherd_header, _SvelteComponent);

      function Shepherd_header(options) {
        var _this;

        _this = _SvelteComponent.call(this) || this;
        init$1(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
          labelId: 0,
          step: 1
        });
        return _this;
      }

      return Shepherd_header;
    }(SvelteComponent);

    function create_fragment$5(ctx) {
      var div;
      return {
        c: function c() {
          div = element("div");
          attr(div, "class", "shepherd-text");
          attr(div, "id",
          /*descriptionId*/
          ctx[1]);
        },
        m: function m(target, anchor) {
          insert(target, div, anchor);
          /*div_binding*/

          ctx[3](div);
        },
        p: function p(ctx, _ref) {
          var dirty = _ref[0];

          if (dirty &
          /*descriptionId*/
          2) {
            attr(div, "id",
            /*descriptionId*/
            ctx[1]);
          }
        },
        i: noop,
        o: noop,
        d: function d(detaching) {
          if (detaching) detach(div);
          /*div_binding*/

          ctx[3](null);
        }
      };
    }

    function instance$5($$self, $$props, $$invalidate) {
      var descriptionId = $$props.descriptionId,
          element = $$props.element,
          step = $$props.step;
      afterUpdate(function () {
        var text = step.options.text;

        if (isFunction(text)) {
          text = text.call(step);
        }

        if (isElement$1(text)) {
          element.appendChild(text);
        } else {
          $$invalidate(0, element.innerHTML = text, element);
        }
      });

      function div_binding($$value) {
        binding_callbacks[$$value ? "unshift" : "push"](function () {
          $$invalidate(0, element = $$value);
        });
      }

      $$self.$set = function ($$props) {
        if ("descriptionId" in $$props) $$invalidate(1, descriptionId = $$props.descriptionId);
        if ("element" in $$props) $$invalidate(0, element = $$props.element);
        if ("step" in $$props) $$invalidate(2, step = $$props.step);
      };

      return [element, descriptionId, step, div_binding];
    }

    var Shepherd_text = /*#__PURE__*/function (_SvelteComponent) {
      _inheritsLoose$1(Shepherd_text, _SvelteComponent);

      function Shepherd_text(options) {
        var _this;

        _this = _SvelteComponent.call(this) || this;
        init$1(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {
          descriptionId: 1,
          element: 0,
          step: 2
        });
        return _this;
      }

      return Shepherd_text;
    }(SvelteComponent);

    function create_if_block_2(ctx) {
      var current;
      var shepherdheader = new Shepherd_header({
        props: {
          labelId:
          /*labelId*/
          ctx[1],
          step:
          /*step*/
          ctx[2]
        }
      });
      return {
        c: function c() {
          create_component(shepherdheader.$$.fragment);
        },
        m: function m(target, anchor) {
          mount_component(shepherdheader, target, anchor);
          current = true;
        },
        p: function p(ctx, dirty) {
          var shepherdheader_changes = {};
          if (dirty &
          /*labelId*/
          2) shepherdheader_changes.labelId =
          /*labelId*/
          ctx[1];
          if (dirty &
          /*step*/
          4) shepherdheader_changes.step =
          /*step*/
          ctx[2];
          shepherdheader.$set(shepherdheader_changes);
        },
        i: function i(local) {
          if (current) return;
          transition_in(shepherdheader.$$.fragment, local);
          current = true;
        },
        o: function o(local) {
          transition_out(shepherdheader.$$.fragment, local);
          current = false;
        },
        d: function d(detaching) {
          destroy_component(shepherdheader, detaching);
        }
      };
    } // (29:2) {#if !isUndefined(step.options.text)}


    function create_if_block_1$1(ctx) {
      var current;
      var shepherdtext = new Shepherd_text({
        props: {
          descriptionId:
          /*descriptionId*/
          ctx[0],
          step:
          /*step*/
          ctx[2]
        }
      });
      return {
        c: function c() {
          create_component(shepherdtext.$$.fragment);
        },
        m: function m(target, anchor) {
          mount_component(shepherdtext, target, anchor);
          current = true;
        },
        p: function p(ctx, dirty) {
          var shepherdtext_changes = {};
          if (dirty &
          /*descriptionId*/
          1) shepherdtext_changes.descriptionId =
          /*descriptionId*/
          ctx[0];
          if (dirty &
          /*step*/
          4) shepherdtext_changes.step =
          /*step*/
          ctx[2];
          shepherdtext.$set(shepherdtext_changes);
        },
        i: function i(local) {
          if (current) return;
          transition_in(shepherdtext.$$.fragment, local);
          current = true;
        },
        o: function o(local) {
          transition_out(shepherdtext.$$.fragment, local);
          current = false;
        },
        d: function d(detaching) {
          destroy_component(shepherdtext, detaching);
        }
      };
    } // (36:2) {#if Array.isArray(step.options.buttons) && step.options.buttons.length}


    function create_if_block$2(ctx) {
      var current;
      var shepherdfooter = new Shepherd_footer({
        props: {
          step:
          /*step*/
          ctx[2]
        }
      });
      return {
        c: function c() {
          create_component(shepherdfooter.$$.fragment);
        },
        m: function m(target, anchor) {
          mount_component(shepherdfooter, target, anchor);
          current = true;
        },
        p: function p(ctx, dirty) {
          var shepherdfooter_changes = {};
          if (dirty &
          /*step*/
          4) shepherdfooter_changes.step =
          /*step*/
          ctx[2];
          shepherdfooter.$set(shepherdfooter_changes);
        },
        i: function i(local) {
          if (current) return;
          transition_in(shepherdfooter.$$.fragment, local);
          current = true;
        },
        o: function o(local) {
          transition_out(shepherdfooter.$$.fragment, local);
          current = false;
        },
        d: function d(detaching) {
          destroy_component(shepherdfooter, detaching);
        }
      };
    }

    function create_fragment$6(ctx) {
      var div;
      var show_if_2 = !isUndefined(
      /*step*/
      ctx[2].options.title) ||
      /*step*/
      ctx[2].options.cancelIcon &&
      /*step*/
      ctx[2].options.cancelIcon.enabled;
      var t0;
      var show_if_1 = !isUndefined(
      /*step*/
      ctx[2].options.text);
      var t1;
      var show_if = Array.isArray(
      /*step*/
      ctx[2].options.buttons) &&
      /*step*/
      ctx[2].options.buttons.length;
      var current;
      var if_block0 = show_if_2 && create_if_block_2(ctx);
      var if_block1 = show_if_1 && create_if_block_1$1(ctx);
      var if_block2 = show_if && create_if_block$2(ctx);
      return {
        c: function c() {
          div = element("div");
          if (if_block0) if_block0.c();
          t0 = space();
          if (if_block1) if_block1.c();
          t1 = space();
          if (if_block2) if_block2.c();
          attr(div, "class", "shepherd-content");
        },
        m: function m(target, anchor) {
          insert(target, div, anchor);
          if (if_block0) if_block0.m(div, null);
          append(div, t0);
          if (if_block1) if_block1.m(div, null);
          append(div, t1);
          if (if_block2) if_block2.m(div, null);
          current = true;
        },
        p: function p(ctx, _ref) {
          var dirty = _ref[0];
          if (dirty &
          /*step*/
          4) show_if_2 = !isUndefined(
          /*step*/
          ctx[2].options.title) ||
          /*step*/
          ctx[2].options.cancelIcon &&
          /*step*/
          ctx[2].options.cancelIcon.enabled;

          if (show_if_2) {
            if (if_block0) {
              if_block0.p(ctx, dirty);

              if (dirty &
              /*step*/
              4) {
                transition_in(if_block0, 1);
              }
            } else {
              if_block0 = create_if_block_2(ctx);
              if_block0.c();
              transition_in(if_block0, 1);
              if_block0.m(div, t0);
            }
          } else if (if_block0) {
            group_outros();
            transition_out(if_block0, 1, 1, function () {
              if_block0 = null;
            });
            check_outros();
          }

          if (dirty &
          /*step*/
          4) show_if_1 = !isUndefined(
          /*step*/
          ctx[2].options.text);

          if (show_if_1) {
            if (if_block1) {
              if_block1.p(ctx, dirty);

              if (dirty &
              /*step*/
              4) {
                transition_in(if_block1, 1);
              }
            } else {
              if_block1 = create_if_block_1$1(ctx);
              if_block1.c();
              transition_in(if_block1, 1);
              if_block1.m(div, t1);
            }
          } else if (if_block1) {
            group_outros();
            transition_out(if_block1, 1, 1, function () {
              if_block1 = null;
            });
            check_outros();
          }

          if (dirty &
          /*step*/
          4) show_if = Array.isArray(
          /*step*/
          ctx[2].options.buttons) &&
          /*step*/
          ctx[2].options.buttons.length;

          if (show_if) {
            if (if_block2) {
              if_block2.p(ctx, dirty);

              if (dirty &
              /*step*/
              4) {
                transition_in(if_block2, 1);
              }
            } else {
              if_block2 = create_if_block$2(ctx);
              if_block2.c();
              transition_in(if_block2, 1);
              if_block2.m(div, null);
            }
          } else if (if_block2) {
            group_outros();
            transition_out(if_block2, 1, 1, function () {
              if_block2 = null;
            });
            check_outros();
          }
        },
        i: function i(local) {
          if (current) return;
          transition_in(if_block0);
          transition_in(if_block1);
          transition_in(if_block2);
          current = true;
        },
        o: function o(local) {
          transition_out(if_block0);
          transition_out(if_block1);
          transition_out(if_block2);
          current = false;
        },
        d: function d(detaching) {
          if (detaching) detach(div);
          if (if_block0) if_block0.d();
          if (if_block1) if_block1.d();
          if (if_block2) if_block2.d();
        }
      };
    }

    function instance$6($$self, $$props, $$invalidate) {
      var descriptionId = $$props.descriptionId,
          labelId = $$props.labelId,
          step = $$props.step;

      $$self.$set = function ($$props) {
        if ("descriptionId" in $$props) $$invalidate(0, descriptionId = $$props.descriptionId);
        if ("labelId" in $$props) $$invalidate(1, labelId = $$props.labelId);
        if ("step" in $$props) $$invalidate(2, step = $$props.step);
      };

      return [descriptionId, labelId, step];
    }

    var Shepherd_content = /*#__PURE__*/function (_SvelteComponent) {
      _inheritsLoose$1(Shepherd_content, _SvelteComponent);

      function Shepherd_content(options) {
        var _this;

        _this = _SvelteComponent.call(this) || this;
        init$1(_assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, {
          descriptionId: 0,
          labelId: 1,
          step: 2
        });
        return _this;
      }

      return Shepherd_content;
    }(SvelteComponent);

    function create_if_block$3(ctx) {
      var div;
      return {
        c: function c() {
          div = element("div");
          attr(div, "class", "shepherd-arrow");
          attr(div, "data-popper-arrow", "");
        },
        m: function m(target, anchor) {
          insert(target, div, anchor);
        },
        d: function d(detaching) {
          if (detaching) detach(div);
        }
      };
    }

    function create_fragment$7(ctx) {
      var div;
      var t;
      var current;
      var dispose;
      var if_block =
      /*step*/
      ctx[4].options.arrow &&
      /*step*/
      ctx[4].options.attachTo &&
      /*step*/
      ctx[4].options.attachTo.element && create_if_block$3();
      var shepherdcontent = new Shepherd_content({
        props: {
          descriptionId:
          /*descriptionId*/
          ctx[2],
          labelId:
          /*labelId*/
          ctx[3],
          step:
          /*step*/
          ctx[4]
        }
      });
      var div_levels = [{
        "aria-describedby": !isUndefined(
        /*step*/
        ctx[4].options.text) ?
        /*descriptionId*/
        ctx[2] : null
      }, {
        "aria-labelledby":
        /*step*/
        ctx[4].options.title ?
        /*labelId*/
        ctx[3] : null
      },
      /*dataStepId*/
      ctx[1], {
        role: "dialog"
      }, {
        tabindex: "0"
      }];
      var div_data = {};

      for (var i = 0; i < div_levels.length; i += 1) {
        div_data = assign(div_data, div_levels[i]);
      }

      return {
        c: function c() {
          div = element("div");
          if (if_block) if_block.c();
          t = space();
          create_component(shepherdcontent.$$.fragment);
          set_attributes(div, div_data);
          toggle_class(div, "shepherd-has-cancel-icon",
          /*hasCancelIcon*/
          ctx[5]);
          toggle_class(div, "shepherd-has-title",
          /*hasTitle*/
          ctx[6]);
          toggle_class(div, "shepherd-element", true);
        },
        m: function m(target, anchor, remount) {
          insert(target, div, anchor);
          if (if_block) if_block.m(div, null);
          append(div, t);
          mount_component(shepherdcontent, div, null);
          /*div_binding*/

          ctx[17](div);
          current = true;
          if (remount) dispose();
          dispose = listen(div, "keydown",
          /*handleKeyDown*/
          ctx[7]);
        },
        p: function p(ctx, _ref) {
          var dirty = _ref[0];

          if (
          /*step*/
          ctx[4].options.arrow &&
          /*step*/
          ctx[4].options.attachTo &&
          /*step*/
          ctx[4].options.attachTo.element) {
            if (if_block) ; else {
              if_block = create_if_block$3();
              if_block.c();
              if_block.m(div, t);
            }
          } else if (if_block) {
            if_block.d(1);
            if_block = null;
          }

          var shepherdcontent_changes = {};
          if (dirty &
          /*descriptionId*/
          4) shepherdcontent_changes.descriptionId =
          /*descriptionId*/
          ctx[2];
          if (dirty &
          /*labelId*/
          8) shepherdcontent_changes.labelId =
          /*labelId*/
          ctx[3];
          if (dirty &
          /*step*/
          16) shepherdcontent_changes.step =
          /*step*/
          ctx[4];
          shepherdcontent.$set(shepherdcontent_changes);
          set_attributes(div, get_spread_update(div_levels, [dirty &
          /*isUndefined, step, descriptionId*/
          20 && {
            "aria-describedby": !isUndefined(
            /*step*/
            ctx[4].options.text) ?
            /*descriptionId*/
            ctx[2] : null
          }, dirty &
          /*step, labelId*/
          24 && {
            "aria-labelledby":
            /*step*/
            ctx[4].options.title ?
            /*labelId*/
            ctx[3] : null
          }, dirty &
          /*dataStepId*/
          2 &&
          /*dataStepId*/
          ctx[1], {
            role: "dialog"
          }, {
            tabindex: "0"
          }]));
          toggle_class(div, "shepherd-has-cancel-icon",
          /*hasCancelIcon*/
          ctx[5]);
          toggle_class(div, "shepherd-has-title",
          /*hasTitle*/
          ctx[6]);
          toggle_class(div, "shepherd-element", true);
        },
        i: function i(local) {
          if (current) return;
          transition_in(shepherdcontent.$$.fragment, local);
          current = true;
        },
        o: function o(local) {
          transition_out(shepherdcontent.$$.fragment, local);
          current = false;
        },
        d: function d(detaching) {
          if (detaching) detach(div);
          if (if_block) if_block.d();
          destroy_component(shepherdcontent);
          /*div_binding*/

          ctx[17](null);
          dispose();
        }
      };
    }

    var KEY_TAB = 9;
    var KEY_ESC = 27;
    var LEFT_ARROW = 37;
    var RIGHT_ARROW = 39;

    function getClassesArray(classes) {
      return classes.split(" ").filter(function (className) {
        return !!className.length;
      });
    }

    function instance$7($$self, $$props, $$invalidate) {
      var classPrefix = $$props.classPrefix,
          element = $$props.element,
          descriptionId = $$props.descriptionId,
          firstFocusableElement = $$props.firstFocusableElement,
          focusableElements = $$props.focusableElements,
          labelId = $$props.labelId,
          lastFocusableElement = $$props.lastFocusableElement,
          step = $$props.step,
          dataStepId = $$props.dataStepId;
      var hasCancelIcon, hasTitle, classes;

      var getElement = function getElement() {
        return element;
      };

      onMount(function () {
        var _dataStepId;

        // Get all elements that are focusable
        $$invalidate(1, dataStepId = (_dataStepId = {}, _dataStepId["data-" + classPrefix + "shepherd-step-id"] = step.id, _dataStepId));
        $$invalidate(9, focusableElements = element.querySelectorAll("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex=\"0\"]"));
        $$invalidate(8, firstFocusableElement = focusableElements[0]);
        $$invalidate(10, lastFocusableElement = focusableElements[focusableElements.length - 1]);
      });
      afterUpdate(function () {
        if (classes !== step.options.classes) {
          updateDynamicClasses();
        }
      });

      function updateDynamicClasses() {
        removeClasses(classes);
        classes = step.options.classes;
        addClasses(classes);
      }

      function removeClasses(classes) {
        if (isString(classes)) {
          var oldClasses = getClassesArray(classes);

          if (oldClasses.length) {
            var _element$classList;

            (_element$classList = element.classList).remove.apply(_element$classList, oldClasses);
          }
        }
      }

      function addClasses(classes) {
        if (isString(classes)) {
          var newClasses = getClassesArray(classes);

          if (newClasses.length) {
            var _element$classList2;

            (_element$classList2 = element.classList).add.apply(_element$classList2, newClasses);
          }
        }
      }
      /**
      * Setup keydown events to allow closing the modal with ESC
      *
      * Borrowed from this great post! https://bitsofco.de/accessible-modal-dialog/
      *
      * @private
      */


      var handleKeyDown = function handleKeyDown(e) {
        var _step = step,
            tour = _step.tour;

        switch (e.keyCode) {
          case KEY_TAB:
            if (focusableElements.length === 0) {
              e.preventDefault();
              break;
            } // Backward tab


            if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus();
              }
            } else {
              if (document.activeElement === lastFocusableElement) {
                e.preventDefault();
                firstFocusableElement.focus();
              }
            }

            break;

          case KEY_ESC:
            if (tour.options.exitOnEsc) {
              step.cancel();
            }

            break;

          case LEFT_ARROW:
            if (tour.options.keyboardNavigation) {
              tour.back();
            }

            break;

          case RIGHT_ARROW:
            if (tour.options.keyboardNavigation) {
              tour.next();
            }

            break;
        }
      };

      function div_binding($$value) {
        binding_callbacks[$$value ? "unshift" : "push"](function () {
          $$invalidate(0, element = $$value);
        });
      }

      $$self.$set = function ($$props) {
        if ("classPrefix" in $$props) $$invalidate(11, classPrefix = $$props.classPrefix);
        if ("element" in $$props) $$invalidate(0, element = $$props.element);
        if ("descriptionId" in $$props) $$invalidate(2, descriptionId = $$props.descriptionId);
        if ("firstFocusableElement" in $$props) $$invalidate(8, firstFocusableElement = $$props.firstFocusableElement);
        if ("focusableElements" in $$props) $$invalidate(9, focusableElements = $$props.focusableElements);
        if ("labelId" in $$props) $$invalidate(3, labelId = $$props.labelId);
        if ("lastFocusableElement" in $$props) $$invalidate(10, lastFocusableElement = $$props.lastFocusableElement);
        if ("step" in $$props) $$invalidate(4, step = $$props.step);
        if ("dataStepId" in $$props) $$invalidate(1, dataStepId = $$props.dataStepId);
      };

      $$self.$$.update = function () {
        if ($$self.$$.dirty &
        /*step*/
        16) {
           {
            $$invalidate(5, hasCancelIcon = step.options && step.options.cancelIcon && step.options.cancelIcon.enabled);
            $$invalidate(6, hasTitle = step.options && step.options.title);
          }
        }
      };

      return [element, dataStepId, descriptionId, labelId, step, hasCancelIcon, hasTitle, handleKeyDown, firstFocusableElement, focusableElements, lastFocusableElement, classPrefix, getElement, classes, updateDynamicClasses, removeClasses, addClasses, div_binding];
    }

    var Shepherd_element = /*#__PURE__*/function (_SvelteComponent) {
      _inheritsLoose$1(Shepherd_element, _SvelteComponent);

      function Shepherd_element(options) {
        var _this;

        _this = _SvelteComponent.call(this) || this;
        init$1(_assertThisInitialized(_this), options, instance$7, create_fragment$7, safe_not_equal, {
          classPrefix: 11,
          element: 0,
          descriptionId: 2,
          firstFocusableElement: 8,
          focusableElements: 9,
          labelId: 3,
          lastFocusableElement: 10,
          step: 4,
          dataStepId: 1,
          getElement: 12
        });
        return _this;
      }

      _createClass(Shepherd_element, [{
        key: "getElement",
        get: function get() {
          return this.$$.ctx[12];
        }
      }]);

      return Shepherd_element;
    }(SvelteComponent);

    function createCommonjsModule$1(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var smoothscroll = createCommonjsModule$1(function (module, exports) {
      /* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
      (function () {

        function polyfill() {
          // aliases
          var w = window;
          var d = document; // return if scroll behavior is supported and polyfill is not forced

          if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
            return;
          } // globals


          var Element = w.HTMLElement || w.Element;
          var SCROLL_TIME = 468; // object gathering original scroll methods

          var original = {
            scroll: w.scroll || w.scrollTo,
            scrollBy: w.scrollBy,
            elementScroll: Element.prototype.scroll || scrollElement,
            scrollIntoView: Element.prototype.scrollIntoView
          }; // define timing method

          var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
          /**
           * indicates if a the current browser is made by Microsoft
           * @method isMicrosoftBrowser
           * @param {String} userAgent
           * @returns {Boolean}
           */

          function isMicrosoftBrowser(userAgent) {
            var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
            return new RegExp(userAgentPatterns.join('|')).test(userAgent);
          }
          /*
           * IE has rounding bug rounding down clientHeight and clientWidth and
           * rounding up scrollHeight and scrollWidth causing false positives
           * on hasScrollableSpace
           */


          var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
          /**
           * changes scroll position inside an element
           * @method scrollElement
           * @param {Number} x
           * @param {Number} y
           * @returns {undefined}
           */

          function scrollElement(x, y) {
            this.scrollLeft = x;
            this.scrollTop = y;
          }
          /**
           * returns result of applying ease math function to a number
           * @method ease
           * @param {Number} k
           * @returns {Number}
           */


          function ease(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
          }
          /**
           * indicates if a smooth behavior should be applied
           * @method shouldBailOut
           * @param {Number|Object} firstArg
           * @returns {Boolean}
           */


          function shouldBailOut(firstArg) {
            if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
              // first argument is not an object/null
              // or behavior is auto, instant or undefined
              return true;
            }

            if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
              // first argument is an object and behavior is smooth
              return false;
            } // throw error when behavior is not supported


            throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
          }
          /**
           * indicates if an element has scrollable space in the provided axis
           * @method hasScrollableSpace
           * @param {Node} el
           * @param {String} axis
           * @returns {Boolean}
           */


          function hasScrollableSpace(el, axis) {
            if (axis === 'Y') {
              return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
            }

            if (axis === 'X') {
              return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
            }
          }
          /**
           * indicates if an element has a scrollable overflow property in the axis
           * @method canOverflow
           * @param {Node} el
           * @param {String} axis
           * @returns {Boolean}
           */


          function canOverflow(el, axis) {
            var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
            return overflowValue === 'auto' || overflowValue === 'scroll';
          }
          /**
           * indicates if an element can be scrolled in either axis
           * @method isScrollable
           * @param {Node} el
           * @param {String} axis
           * @returns {Boolean}
           */


          function isScrollable(el) {
            var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
            var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
            return isScrollableY || isScrollableX;
          }
          /**
           * finds scrollable parent of an element
           * @method findScrollableParent
           * @param {Node} el
           * @returns {Node} el
           */


          function findScrollableParent(el) {
            while (el !== d.body && isScrollable(el) === false) {
              el = el.parentNode || el.host;
            }

            return el;
          }
          /**
           * self invoked function that, given a context, steps through scrolling
           * @method step
           * @param {Object} context
           * @returns {undefined}
           */


          function step(context) {
            var time = now();
            var value;
            var currentX;
            var currentY;
            var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

            elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

            value = ease(elapsed);
            currentX = context.startX + (context.x - context.startX) * value;
            currentY = context.startY + (context.y - context.startY) * value;
            context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

            if (currentX !== context.x || currentY !== context.y) {
              w.requestAnimationFrame(step.bind(w, context));
            }
          }
          /**
           * scrolls window or element with a smooth behavior
           * @method smoothScroll
           * @param {Object|Node} el
           * @param {Number} x
           * @param {Number} y
           * @returns {undefined}
           */


          function smoothScroll(el, x, y) {
            var scrollable;
            var startX;
            var startY;
            var method;
            var startTime = now(); // define scroll context

            if (el === d.body) {
              scrollable = w;
              startX = w.scrollX || w.pageXOffset;
              startY = w.scrollY || w.pageYOffset;
              method = original.scroll;
            } else {
              scrollable = el;
              startX = el.scrollLeft;
              startY = el.scrollTop;
              method = scrollElement;
            } // scroll looping over a frame


            step({
              scrollable: scrollable,
              method: method,
              startTime: startTime,
              startX: startX,
              startY: startY,
              x: x,
              y: y
            });
          } // ORIGINAL METHODS OVERRIDES
          // w.scroll and w.scrollTo


          w.scroll = w.scrollTo = function () {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) {
              return;
            } // avoid smooth behavior if not required


            if (shouldBailOut(arguments[0]) === true) {
              original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
              arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
              return;
            } // LET THE SMOOTHNESS BEGIN!


            smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
          }; // w.scrollBy


          w.scrollBy = function () {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) {
              return;
            } // avoid smooth behavior if not required


            if (shouldBailOut(arguments[0])) {
              original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
              return;
            } // LET THE SMOOTHNESS BEGIN!


            smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
          }; // Element.prototype.scroll and Element.prototype.scrollTo


          Element.prototype.scroll = Element.prototype.scrollTo = function () {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) {
              return;
            } // avoid smooth behavior if not required


            if (shouldBailOut(arguments[0]) === true) {
              // if one number is passed, throw error to match Firefox implementation
              if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
                throw new SyntaxError('Value could not be converted');
              }

              original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
              arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
              arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
              return;
            }

            var left = arguments[0].left;
            var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

            smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
          }; // Element.prototype.scrollBy


          Element.prototype.scrollBy = function () {
            // avoid action when no arguments are passed
            if (arguments[0] === undefined) {
              return;
            } // avoid smooth behavior if not required


            if (shouldBailOut(arguments[0]) === true) {
              original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
              return;
            }

            this.scroll({
              left: ~~arguments[0].left + this.scrollLeft,
              top: ~~arguments[0].top + this.scrollTop,
              behavior: arguments[0].behavior
            });
          }; // Element.prototype.scrollIntoView


          Element.prototype.scrollIntoView = function () {
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0]) === true) {
              original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
              return;
            } // LET THE SMOOTHNESS BEGIN!


            var scrollableParent = findScrollableParent(this);
            var parentRects = scrollableParent.getBoundingClientRect();
            var clientRects = this.getBoundingClientRect();

            if (scrollableParent !== d.body) {
              // reveal element inside parent
              smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

              if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
                w.scrollBy({
                  left: parentRects.left,
                  top: parentRects.top,
                  behavior: 'smooth'
                });
              }
            } else {
              // reveal element in viewport
              w.scrollBy({
                left: clientRects.left,
                top: clientRects.top,
                behavior: 'smooth'
              });
            }
          };
        }

        {
          // commonjs
          module.exports = {
            polyfill: polyfill
          };
        }
      })();
    });
    var smoothscroll_1 = smoothscroll.polyfill;

    smoothscroll.polyfill();
    /**
     * A class representing steps to be added to a tour.
     * @extends {Evented}
     */

    var Step = /*#__PURE__*/function (_Evented) {
      _inheritsLoose$1(Step, _Evented);

      /**
       * Create a step
       * @param {Tour} tour The tour for the step
       * @param {Object} options The options for the step
       * @param {boolean} options.arrow Whether to display the arrow for the tooltip or not. Defaults to `true`.
       * @param {Object} options.attachTo What element the step should be attached to on the page.
       * It should be an object with the properties `element` and `on`, where `element` is an element selector string
       * or a DOM element and `on` is the optional direction to place the Popper tooltip.
       *
       * ```js
       * const step = new Step(tour, {
       *   attachTo: { element: '.some .selector-path', on: 'left' },
       *   ...moreOptions
       * });
       * ```
       *
       * If you don’t specify an attachTo the element will appear in the middle of the screen.
       * If you omit the `on` portion of `attachTo`, the element will still be highlighted, but the tooltip will appear
       * in the middle of the screen, without an arrow pointing to the target.
       * @param {HTMLElement|string} options.attachTo.element
       * @param {string} options.attachTo.on
       * @param {Object} options.advanceOn An action on the page which should advance shepherd to the next step.
       * It should be an object with a string `selector` and an `event` name
       * ```js
       * const step = new Step(tour, {
       *   advanceOn: { selector: '.some .selector-path', event: 'click' },
       *   ...moreOptions
       * });
       * ```
       * `event` doesn’t have to be an event inside the tour, it can be any event fired on any element on the page.
       * You can also always manually advance the Tour by calling `myTour.next()`.
       * @param {function} options.beforeShowPromise A function that returns a promise.
       * When the promise resolves, the rest of the `show` code for the step will execute.
       * @param {Object[]} options.buttons An array of buttons to add to the step. These will be rendered in a
       * footer below the main body text.
       * @param {function} options.buttons.button.action A function executed when the button is clicked on.
       * It is automatically bound to the `tour` the step is associated with, so things like `this.next` will
       * work inside the action.
       * You can use action to skip steps or navigate to specific steps, with something like:
       * ```js
       * action() {
       *   return this.show('some_step_name');
       * }
       * ```
       * @param {string} options.buttons.button.classes Extra classes to apply to the `<a>`
       * @param {boolean} options.buttons.button.secondary If true, a shepherd-button-secondary class is applied to the button
       * @param {string} options.buttons.button.text The HTML text of the button
       * @param {boolean} options.buttons.button.disabled Should the button be disabled?
       * @param {string} options.buttons.button.label The aria-label text of the button
       * @param {boolean} options.canClickTarget A boolean, that when set to false, will set `pointer-events: none` on the target
       * @param {object} options.cancelIcon Options for the cancel icon
       * @param {boolean} options.cancelIcon.enabled Should a cancel “✕” be shown in the header of the step?
       * @param {string} options.cancelIcon.label The label to add for `aria-label`
       * @param {string} options.classes A string of extra classes to add to the step's content element.
       * @param {string} options.highlightClass An extra class to apply to the `attachTo` element when it is
       * highlighted (that is, when its step is active). You can then target that selector in your CSS.
       * @param {string} options.id The string to use as the `id` for the step.
       * @param {object} options.popperOptions Extra options to pass to Popper
       * @param {boolean|Object} options.scrollTo Should the element be scrolled to when this step is shown? If true, uses the default `scrollIntoView`,
       * if an object, passes that object as the params to `scrollIntoView` i.e. `{behavior: 'smooth', block: 'center'}`
       * @param {function} options.scrollToHandler A function that lets you override the default scrollTo behavior and
       * define a custom action to do the scrolling, and possibly other logic.
       * @param {function} options.showOn A function that, when it returns `true`, will show the step.
       * If it returns false, the step will be skipped.
       * @param {string} options.text The text in the body of the step. It can be one of three types:
       * ```
       * - HTML string
       * - `HTMLElement` object
       * - `Function` to be executed when the step is built. It must return one the two options above.
       * ```
       * @param {string} options.title The step's title. It becomes an `h3` at the top of the step. It can be one of two types:
       * ```
       * - HTML string
       * - `Function` to be executed when the step is built. It must return HTML string.
       * ```
       * @param {Object} options.when You can define `show`, `hide`, etc events inside `when`. For example:
       * ```js
       * when: {
       *   show: function() {
       *     window.scrollTo(0, 0);
       *   }
       * }
       * ```
       * @param {Number} options.modalOverlayOpeningPadding An amount of padding to add around the modal overlay opening
       * @param {Number} options.modalOverlayOpeningRadius An amount of border radius to add around the modal overlay opening
       * @return {Step} The newly created Step instance
       */
      function Step(tour, options) {
        var _this;

        if (options === void 0) {
          options = {};
        }

        _this = _Evented.call(this, tour, options) || this;
        _this.tour = tour;
        _this.classPrefix = _this.tour.options ? normalizePrefix(_this.tour.options.classPrefix) : '';
        _this.styles = tour.styles;
        autoBind(_assertThisInitialized(_this));

        _this._setOptions(options);

        return _assertThisInitialized(_this) || _assertThisInitialized(_this);
      }
      /**
       * Cancel the tour
       * Triggers the `cancel` event
       */


      var _proto = Step.prototype;

      _proto.cancel = function cancel() {
        this.tour.cancel();
        this.trigger('cancel');
      }
      /**
       * Complete the tour
       * Triggers the `complete` event
       */
      ;

      _proto.complete = function complete() {
        this.tour.complete();
        this.trigger('complete');
      }
      /**
       * Remove the step, delete the step's element, and destroy the Popper instance for the step.
       * Triggers `destroy` event
       */
      ;

      _proto.destroy = function destroy() {
        if (this.tooltip) {
          this.tooltip.destroy();
          this.tooltip = null;
        }

        if (isElement$1(this.el) && this.el.parentNode) {
          this.el.parentNode.removeChild(this.el);
          this.el = null;
        }

        if (this.target) {
          this._updateStepTargetOnHide();
        }

        this.trigger('destroy');
      }
      /**
       * Returns the tour for the step
       * @return {Tour} The tour instance
       */
      ;

      _proto.getTour = function getTour() {
        return this.tour;
      }
      /**
       * Hide the step
       */
      ;

      _proto.hide = function hide() {
        this.tour.modal.hide();
        this.trigger('before-hide');

        if (this.el) {
          this.el.hidden = true;
        }

        if (this.target) {
          this._updateStepTargetOnHide();
        }

        this.trigger('hide');
      }
      /**
       * Checks if the step should be centered or not
       * @return {boolean} True if the step is centered
       */
      ;

      _proto.isCentered = function isCentered() {
        var attachToOptions = parseAttachTo(this);
        return !attachToOptions.element || !attachToOptions.on;
      }
      /**
       * Check if the step is open and visible
       * @return {boolean} True if the step is open and visible
       */
      ;

      _proto.isOpen = function isOpen() {
        return Boolean(this.el && !this.el.hidden);
      }
      /**
       * Wraps `_show` and ensures `beforeShowPromise` resolves before calling show
       * @return {*|Promise}
       */
      ;

      _proto.show = function show() {
        var _this2 = this;

        if (isFunction(this.options.beforeShowPromise)) {
          var beforeShowPromise = this.options.beforeShowPromise();

          if (!isUndefined(beforeShowPromise)) {
            return beforeShowPromise.then(function () {
              return _this2._show();
            });
          }
        }

        this._show();
      }
      /**
       * Updates the options of the step.
       *
       * @param {Object} options The options for the step
       */
      ;

      _proto.updateStepOptions = function updateStepOptions(options) {
        Object.assign(this.options, options);

        if (this.shepherdElementComponent) {
          this.shepherdElementComponent.$set({
            step: this
          });
        }
      }
      /**
       * Creates Shepherd element for step based on options
       *
       * @return {Element} The DOM element for the step tooltip
       * @private
       */
      ;

      _proto._createTooltipContent = function _createTooltipContent() {
        var descriptionId = this.id + "-description";
        var labelId = this.id + "-label";
        this.shepherdElementComponent = new Shepherd_element({
          target: document.body,
          props: {
            classPrefix: this.classPrefix,
            descriptionId: descriptionId,
            labelId: labelId,
            step: this,
            styles: this.styles
          }
        });
        return this.shepherdElementComponent.getElement();
      }
      /**
       * If a custom scrollToHandler is defined, call that, otherwise do the generic
       * scrollIntoView call.
       *
       * @param {boolean|Object} scrollToOptions If true, uses the default `scrollIntoView`,
       * if an object, passes that object as the params to `scrollIntoView` i.e. `{ behavior: 'smooth', block: 'center' }`
       * @private
       */
      ;

      _proto._scrollTo = function _scrollTo(scrollToOptions) {
        var _parseAttachTo = parseAttachTo(this),
            element = _parseAttachTo.element;

        if (isFunction(this.options.scrollToHandler)) {
          this.options.scrollToHandler(element);
        } else if (isElement$1(element) && typeof element.scrollIntoView === 'function') {
          element.scrollIntoView(scrollToOptions);
        }
      }
      /**
       * _getClassOptions gets all possible classes for the step
       * @param {Object} stepOptions The step specific options
       * @returns {String} unique string from array of classes
       * @private
       */
      ;

      _proto._getClassOptions = function _getClassOptions(stepOptions) {
        var defaultStepOptions = this.tour && this.tour.options && this.tour.options.defaultStepOptions;
        var stepClasses = stepOptions.classes ? stepOptions.classes : '';
        var defaultStepOptionsClasses = defaultStepOptions && defaultStepOptions.classes ? defaultStepOptions.classes : '';
        var allClasses = [].concat(stepClasses.split(' '), defaultStepOptionsClasses.split(' '));
        var uniqClasses = new Set(allClasses);
        return Array.from(uniqClasses).join(' ').trim();
      }
      /**
       * Sets the options for the step, maps `when` to events, sets up buttons
       * @param {Object} options The options for the step
       * @private
       */
      ;

      _proto._setOptions = function _setOptions(options) {
        var _this3 = this;

        if (options === void 0) {
          options = {};
        }

        var tourOptions = this.tour && this.tour.options && this.tour.options.defaultStepOptions;
        tourOptions = cjs({}, tourOptions || {});
        this.options = Object.assign({
          arrow: true
        }, tourOptions, options);
        var when = this.options.when;
        this.options.classes = this._getClassOptions(options);
        this.destroy();
        this.id = this.options.id || "step-" + uuid();

        if (when) {
          Object.keys(when).forEach(function (event) {
            _this3.on(event, when[event], _this3);
          });
        }
      }
      /**
       * Create the element and set up the Popper instance
       * @private
       */
      ;

      _proto._setupElements = function _setupElements() {
        if (!isUndefined(this.el)) {
          this.destroy();
        }

        this.el = this._createTooltipContent();

        if (this.options.advanceOn) {
          bindAdvance(this);
        }

        setupTooltip(this);
      }
      /**
       * Triggers `before-show`, generates the tooltip DOM content,
       * sets up a Popper instance for the tooltip, then triggers `show`.
       * @private
       */
      ;

      _proto._show = function _show() {
        var _this4 = this;

        this.trigger('before-show');

        this._setupElements();

        if (!this.tour.modal) {
          this.tour._setupModal();
        }

        this.tour.modal.setupForStep(this);

        this._styleTargetElementForStep(this);

        this.el.hidden = false; // start scrolling to target before showing the step

        if (this.options.scrollTo) {
          setTimeout(function () {
            _this4._scrollTo(_this4.options.scrollTo);
          });
        }

        this.el.hidden = false;
        var content = this.shepherdElementComponent.getElement();
        var target = this.target || document.body;
        target.classList.add(this.classPrefix + "shepherd-enabled");
        target.classList.add(this.classPrefix + "shepherd-target");
        content.classList.add('shepherd-enabled');
        this.trigger('show');
      }
      /**
       * Modulates the styles of the passed step's target element, based on the step's options and
       * the tour's `modal` option, to visually emphasize the element
       *
       * @param step The step object that attaches to the element
       * @private
       */
      ;

      _proto._styleTargetElementForStep = function _styleTargetElementForStep(step) {
        var targetElement = step.target;

        if (!targetElement) {
          return;
        }

        if (step.options.highlightClass) {
          targetElement.classList.add(step.options.highlightClass);
        }

        if (step.options.canClickTarget === false) {
          targetElement.classList.add('shepherd-target-click-disabled');
        }
      }
      /**
       * When a step is hidden, remove the highlightClass and 'shepherd-enabled'
       * and 'shepherd-target' classes
       * @private
       */
      ;

      _proto._updateStepTargetOnHide = function _updateStepTargetOnHide() {
        if (this.options.highlightClass) {
          this.target.classList.remove(this.options.highlightClass);
        }

        this.target.classList.remove(this.classPrefix + "shepherd-enabled", this.classPrefix + "shepherd-target");
      };

      return Step;
    }(Evented);

    /**
     * Cleanup the steps and set pointerEvents back to 'auto'
     * @param tour The tour object
     */
    function cleanupSteps(tour) {
      if (tour) {
        var steps = tour.steps;
        steps.forEach(function (step) {
          if (step.options && step.options.canClickTarget === false && step.options.attachTo) {
            if (step.target instanceof HTMLElement) {
              step.target.classList.remove('shepherd-target-click-disabled');
            }
          }
        });
      }
    }

    /**
     * Generates the svg path data for a rounded rectangle overlay
     * @param {Object} dimension - Dimensions of rectangle.
     * @param {number} width - Width.
     * @param {number} height - Height.
     * @param {number} [x=0] - Offset from top left corner in x axis. default 0.
     * @param {number} [y=0] - Offset from top left corner in y axis. default 0.
     * @param {number} [r=0] - Corner Radius. Keep this smaller than  half of width or height.
     * @returns {string} - Rounded rectangle overlay path data.
     */
    function makeOverlayPath(_ref) {
      var width = _ref.width,
          height = _ref.height,
          _ref$x = _ref.x,
          x = _ref$x === void 0 ? 0 : _ref$x,
          _ref$y = _ref.y,
          y = _ref$y === void 0 ? 0 : _ref$y,
          _ref$r = _ref.r,
          r = _ref$r === void 0 ? 0 : _ref$r;
      var _window = window,
          w = _window.innerWidth,
          h = _window.innerHeight;
      return "M" + w + "," + h + "H0V0H" + w + "V" + h + "ZM" + (x + r) + "," + y + "a" + r + "," + r + ",0,0,0-" + r + "," + r + "V" + (height + y - r) + "a" + r + "," + r + ",0,0,0," + r + "," + r + "H" + (width + x - r) + "a" + r + "," + r + ",0,0,0," + r + "-" + r + "V" + (y + r) + "a" + r + "," + r + ",0,0,0-" + r + "-" + r + "Z";
    }

    function create_fragment$8(ctx) {
      var svg;
      var path;
      var svg_class_value;
      var dispose;
      return {
        c: function c() {
          svg = svg_element("svg");
          path = svg_element("path");
          attr(path, "d",
          /*pathDefinition*/
          ctx[2]);
          attr(svg, "class", svg_class_value = (
          /*modalIsVisible*/
          ctx[1] ? "shepherd-modal-is-visible" : "") + " shepherd-modal-overlay-container");
        },
        m: function m(target, anchor, remount) {
          insert(target, svg, anchor);
          append(svg, path);
          /*svg_binding*/

          ctx[17](svg);
          if (remount) dispose();
          dispose = listen(svg, "touchmove",
          /*_preventModalOverlayTouch*/
          ctx[3]);
        },
        p: function p(ctx, _ref) {
          var dirty = _ref[0];

          if (dirty &
          /*pathDefinition*/
          4) {
            attr(path, "d",
            /*pathDefinition*/
            ctx[2]);
          }

          if (dirty &
          /*modalIsVisible*/
          2 && svg_class_value !== (svg_class_value = (
          /*modalIsVisible*/
          ctx[1] ? "shepherd-modal-is-visible" : "") + " shepherd-modal-overlay-container")) {
            attr(svg, "class", svg_class_value);
          }
        },
        i: noop,
        o: noop,
        d: function d(detaching) {
          if (detaching) detach(svg);
          /*svg_binding*/

          ctx[17](null);
          dispose();
        }
      };
    }

    function _getScrollParent(element) {
      if (!element) {
        return null;
      }

      var isHtmlElement = element instanceof HTMLElement;
      var overflowY = isHtmlElement && window.getComputedStyle(element).overflowY;
      var isScrollable = overflowY !== "hidden" && overflowY !== "visible";

      if (isScrollable && element.scrollHeight >= element.clientHeight) {
        return element;
      }

      return _getScrollParent(element.parentElement);
    }
    /**
    * Get the visible height of the target element relative to its scrollParent.
    * If there is no scroll parent, the height of the element is returned.
    *
    * @param {HTMLElement} element The target element
    * @param {HTMLElement} [scrollParent] The scrollable parent element
    * @returns {{y: number, height: number}}
    * @private
    */


    function _getVisibleHeight(element, scrollParent) {
      var elementRect = element.getBoundingClientRect();
      var top = elementRect.y || elementRect.top;
      var bottom = elementRect.bottom || top + elementRect.height;

      if (scrollParent) {
        var scrollRect = scrollParent.getBoundingClientRect();
        var scrollTop = scrollRect.y || scrollRect.top;
        var scrollBottom = scrollRect.bottom || scrollTop + scrollRect.height;
        top = Math.max(top, scrollTop);
        bottom = Math.min(bottom, scrollBottom);
      }

      var height = Math.max(bottom - top, 0); // Default to 0 if height is negative

      return {
        y: top,
        height: height
      };
    }

    function instance$8($$self, $$props, $$invalidate) {
      var element = $$props.element,
          openingProperties = $$props.openingProperties;
      var guid = uuid();
      var modalIsVisible = false;
      var rafId = undefined;
      var pathDefinition;
      closeModalOpening();

      var getElement = function getElement() {
        return element;
      };

      function closeModalOpening() {
        $$invalidate(4, openingProperties = {
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          r: 0
        });
      }

      function hide() {
        $$invalidate(1, modalIsVisible = false); // Ensure we cleanup all event listeners when we hide the modal

        _cleanupStepEventListeners();
      }

      function positionModalOpening(targetElement, scrollParent, modalOverlayOpeningPadding, modalOverlayOpeningRadius) {
        if (modalOverlayOpeningPadding === void 0) {
          modalOverlayOpeningPadding = 0;
        }

        if (modalOverlayOpeningRadius === void 0) {
          modalOverlayOpeningRadius = 0;
        }

        if (targetElement.getBoundingClientRect) {
          var _getVisibleHeight2 = _getVisibleHeight(targetElement, scrollParent),
              y = _getVisibleHeight2.y,
              height = _getVisibleHeight2.height;

          var _targetElement$getBou = targetElement.getBoundingClientRect(),
              x = _targetElement$getBou.x,
              width = _targetElement$getBou.width,
              left = _targetElement$getBou.left; // getBoundingClientRect is not consistent. Some browsers use x and y, while others use left and top


          $$invalidate(4, openingProperties = {
            width: width + modalOverlayOpeningPadding * 2,
            height: height + modalOverlayOpeningPadding * 2,
            x: (x || left) - modalOverlayOpeningPadding,
            y: y - modalOverlayOpeningPadding,
            r: modalOverlayOpeningRadius
          });
        }
      }

      function setupForStep(step) {
        // Ensure we move listeners from the previous step, before we setup new ones
        _cleanupStepEventListeners();

        if (step.tour.options.useModalOverlay) {
          _styleForStep(step);

          show();
        } else {
          hide();
        }
      }

      function show() {
        $$invalidate(1, modalIsVisible = true);
      }

      var _preventModalBodyTouch = function _preventModalBodyTouch(e) {
        e.preventDefault();
      };

      var _preventModalOverlayTouch = function _preventModalOverlayTouch(e) {
        e.stopPropagation();
      };
      /**
      * Add touchmove event listener
      * @private
      */


      function _addStepEventListeners() {
        // Prevents window from moving on touch.
        window.addEventListener("touchmove", _preventModalBodyTouch, {
          passive: false
        });
      }
      /**
      * Cancel the requestAnimationFrame loop and remove touchmove event listeners
      * @private
      */


      function _cleanupStepEventListeners() {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = undefined;
        }

        window.removeEventListener("touchmove", _preventModalBodyTouch, {
          passive: false
        });
      }
      /**
      * Style the modal for the step
      * @param {Step} step The step to style the opening for
      * @private
      */


      function _styleForStep(step) {
        var _step$options = step.options,
            modalOverlayOpeningPadding = _step$options.modalOverlayOpeningPadding,
            modalOverlayOpeningRadius = _step$options.modalOverlayOpeningRadius;

        if (step.target) {
          var scrollParent = _getScrollParent(step.target); // Setup recursive function to call requestAnimationFrame to update the modal opening position


          var rafLoop = function rafLoop() {
            rafId = undefined;
            positionModalOpening(step.target, scrollParent, modalOverlayOpeningPadding, modalOverlayOpeningRadius);
            rafId = requestAnimationFrame(rafLoop);
          };

          rafLoop();

          _addStepEventListeners();
        } else {
          closeModalOpening();
        }
      }

      function svg_binding($$value) {
        binding_callbacks[$$value ? "unshift" : "push"](function () {
          $$invalidate(0, element = $$value);
        });
      }

      $$self.$set = function ($$props) {
        if ("element" in $$props) $$invalidate(0, element = $$props.element);
        if ("openingProperties" in $$props) $$invalidate(4, openingProperties = $$props.openingProperties);
      };

      $$self.$$.update = function () {
        if ($$self.$$.dirty &
        /*openingProperties*/
        16) {
           $$invalidate(2, pathDefinition = makeOverlayPath(openingProperties));
        }
      };

      return [element, modalIsVisible, pathDefinition, _preventModalOverlayTouch, openingProperties, getElement, closeModalOpening, hide, positionModalOpening, setupForStep, show, rafId, guid, _preventModalBodyTouch, _addStepEventListeners, _cleanupStepEventListeners, _styleForStep, svg_binding];
    }

    var Shepherd_modal = /*#__PURE__*/function (_SvelteComponent) {
      _inheritsLoose$1(Shepherd_modal, _SvelteComponent);

      function Shepherd_modal(options) {
        var _this;

        _this = _SvelteComponent.call(this) || this;
        init$1(_assertThisInitialized(_this), options, instance$8, create_fragment$8, safe_not_equal, {
          element: 0,
          openingProperties: 4,
          getElement: 5,
          closeModalOpening: 6,
          hide: 7,
          positionModalOpening: 8,
          setupForStep: 9,
          show: 10
        });
        return _this;
      }

      _createClass(Shepherd_modal, [{
        key: "getElement",
        get: function get() {
          return this.$$.ctx[5];
        }
      }, {
        key: "closeModalOpening",
        get: function get() {
          return this.$$.ctx[6];
        }
      }, {
        key: "hide",
        get: function get() {
          return this.$$.ctx[7];
        }
      }, {
        key: "positionModalOpening",
        get: function get() {
          return this.$$.ctx[8];
        }
      }, {
        key: "setupForStep",
        get: function get() {
          return this.$$.ctx[9];
        }
      }, {
        key: "show",
        get: function get() {
          return this.$$.ctx[10];
        }
      }]);

      return Shepherd_modal;
    }(SvelteComponent);

    var Shepherd = new Evented();
    /**
     * Class representing the site tour
     * @extends {Evented}
     */

    var Tour = /*#__PURE__*/function (_Evented) {
      _inheritsLoose$1(Tour, _Evented);

      /**
       * @param {Object} options The options for the tour
       * @param {boolean} options.confirmCancel If true, will issue a `window.confirm` before cancelling
       * @param {string} options.confirmCancelMessage The message to display in the confirm dialog
       * @param {string} options.classPrefix The prefix to add to the `shepherd-enabled` and `shepherd-target` class names as well as the `data-shepherd-step-id`.
       * @param {Object} options.defaultStepOptions Default options for Steps ({@link Step#constructor}), created through `addStep`
       * @param {boolean} options.exitOnEsc Exiting the tour with the escape key will be enabled unless this is explicitly
       * set to false.
       * @param {boolean} options.keyboardNavigation Navigating the tour via left and right arrow keys will be enabled
       * unless this is explicitly set to false.
       * @param {HTMLElement} options.modalContainer An optional container element for the modal.
       * If not set, the modal will be appended to `document.body`.
       * @param {object[] | Step[]} options.steps An array of step options objects or Step instances to initialize the tour with
       * @param {string} options.tourName An optional "name" for the tour. This will be appended to the the tour's
       * dynamically generated `id` property -- which is also set on the `body` element as the `data-shepherd-active-tour` attribute
       * whenever the tour becomes active.
       * @param {boolean} options.useModalOverlay Whether or not steps should be placed above a darkened
       * modal overlay. If true, the overlay will create an opening around the target element so that it
       * can remain interactive
       * @returns {Tour}
       */
      function Tour(options) {
        var _this;

        if (options === void 0) {
          options = {};
        }

        _this = _Evented.call(this, options) || this;
        autoBind(_assertThisInitialized(_this));
        var defaultTourOptions = {
          exitOnEsc: true,
          keyboardNavigation: true
        };
        _this.options = Object.assign({}, defaultTourOptions, options);
        _this.classPrefix = normalizePrefix(_this.options.classPrefix);
        _this.steps = [];

        _this.addSteps(_this.options.steps); // Pass these events onto the global Shepherd object


        var events = ['active', 'cancel', 'complete', 'inactive', 'show', 'start'];
        events.map(function (event) {
          (function (e) {
            _this.on(e, function (opts) {
              opts = opts || {};
              opts.tour = _assertThisInitialized(_this);
              Shepherd.trigger(e, opts);
            });
          })(event);
        });

        _this._setTourID();

        return _assertThisInitialized(_this) || _assertThisInitialized(_this);
      }
      /**
       * Adds a new step to the tour
       * @param {Object|Step} options An object containing step options or a Step instance
       * @param {number} index The optional index to insert the step at. If undefined, the step
       * is added to the end of the array.
       * @return {Step} The newly added step
       */


      var _proto = Tour.prototype;

      _proto.addStep = function addStep(options, index) {
        var step = options;

        if (!(step instanceof Step)) {
          step = new Step(this, step);
        } else {
          step.tour = this;
        }

        if (!isUndefined(index)) {
          this.steps.splice(index, 0, step);
        } else {
          this.steps.push(step);
        }

        return step;
      }
      /**
       * Add multiple steps to the tour
       * @param {Array<object> | Array<Step>} steps The steps to add to the tour
       */
      ;

      _proto.addSteps = function addSteps(steps) {
        var _this2 = this;

        if (Array.isArray(steps)) {
          steps.forEach(function (step) {
            _this2.addStep(step);
          });
        }

        return this;
      }
      /**
       * Go to the previous step in the tour
       */
      ;

      _proto.back = function back() {
        var index = this.steps.indexOf(this.currentStep);
        this.show(index - 1, false);
      }
      /**
       * Calls _done() triggering the 'cancel' event
       * If `confirmCancel` is true, will show a window.confirm before cancelling
       */
      ;

      _proto.cancel = function cancel() {
        if (this.options.confirmCancel) {
          var cancelMessage = this.options.confirmCancelMessage || 'Are you sure you want to stop the tour?';
          var stopTour = window.confirm(cancelMessage);

          if (stopTour) {
            this._done('cancel');
          }
        } else {
          this._done('cancel');
        }
      }
      /**
       * Calls _done() triggering the `complete` event
       */
      ;

      _proto.complete = function complete() {
        this._done('complete');
      }
      /**
       * Gets the step from a given id
       * @param {Number|String} id The id of the step to retrieve
       * @return {Step} The step corresponding to the `id`
       */
      ;

      _proto.getById = function getById(id) {
        return this.steps.find(function (step) {
          return step.id === id;
        });
      }
      /**
       * Gets the current step
       * @returns {Step|null}
       */
      ;

      _proto.getCurrentStep = function getCurrentStep() {
        return this.currentStep;
      }
      /**
       * Hide the current step
       */
      ;

      _proto.hide = function hide() {
        var currentStep = this.getCurrentStep();

        if (currentStep) {
          return currentStep.hide();
        }
      }
      /**
       * Check if the tour is active
       * @return {boolean}
       */
      ;

      _proto.isActive = function isActive() {
        return Shepherd.activeTour === this;
      }
      /**
       * Go to the next step in the tour
       * If we are at the end, call `complete`
       */
      ;

      _proto.next = function next() {
        var index = this.steps.indexOf(this.currentStep);

        if (index === this.steps.length - 1) {
          this.complete();
        } else {
          this.show(index + 1, true);
        }
      }
      /**
       * Removes the step from the tour
       * @param {String} name The id for the step to remove
       */
      ;

      _proto.removeStep = function removeStep(name) {
        var _this3 = this;

        var current = this.getCurrentStep(); // Find the step, destroy it and remove it from this.steps

        this.steps.some(function (step, i) {
          if (step.id === name) {
            if (step.isOpen()) {
              step.hide();
            }

            step.destroy();

            _this3.steps.splice(i, 1);

            return true;
          }
        });

        if (current && current.id === name) {
          this.currentStep = undefined; // If we have steps left, show the first one, otherwise just cancel the tour

          this.steps.length ? this.show(0) : this.cancel();
        }
      }
      /**
       * Show a specific step in the tour
       * @param {Number|String} key The key to look up the step by
       * @param {Boolean} forward True if we are going forward, false if backward
       */
      ;

      _proto.show = function show(key, forward) {
        if (key === void 0) {
          key = 0;
        }

        if (forward === void 0) {
          forward = true;
        }

        var step = isString(key) ? this.getById(key) : this.steps[key];

        if (step) {
          this._updateStateBeforeShow();

          var shouldSkipStep = isFunction(step.options.showOn) && !step.options.showOn(); // If `showOn` returns false, we want to skip the step, otherwise, show the step like normal

          if (shouldSkipStep) {
            this._skipStep(step, forward);
          } else {
            this.trigger('show', {
              step: step,
              previous: this.currentStep
            });
            this.currentStep = step;
            step.show();
          }
        }
      }
      /**
       * Start the tour
       */
      ;

      _proto.start = function start() {
        this.trigger('start'); // Save the focused element before the tour opens

        this.focusedElBeforeOpen = document.activeElement;
        this.currentStep = null;

        this._setupModal();

        this._setupActiveTour();

        this.next();
      }
      /**
       * Called whenever the tour is cancelled or completed, basically anytime we exit the tour
       * @param {String} event The event name to trigger
       * @private
       */
      ;

      _proto._done = function _done(event) {
        var index = this.steps.indexOf(this.currentStep);

        if (Array.isArray(this.steps)) {
          this.steps.forEach(function (step) {
            return step.destroy();
          });
        }

        cleanupSteps(this);
        this.trigger(event, {
          index: index
        });
        Shepherd.activeTour = null;
        this.trigger('inactive', {
          tour: this
        });

        if (this.modal) {
          this.modal.hide();
        }

        if (event === 'cancel' || event === 'complete') {
          if (this.modal) {
            var modalContainer = document.querySelector('.shepherd-modal-overlay-container');

            if (modalContainer) {
              modalContainer.remove();
            }
          }
        } // Focus the element that was focused before the tour started


        if (isElement$1(this.focusedElBeforeOpen)) {
          this.focusedElBeforeOpen.focus();
        }
      }
      /**
       * Make this tour "active"
       * @private
       */
      ;

      _proto._setupActiveTour = function _setupActiveTour() {
        this.trigger('active', {
          tour: this
        });
        Shepherd.activeTour = this;
      }
      /**
       * _setupModal create the modal container and instance
       * @private
       */
      ;

      _proto._setupModal = function _setupModal() {
        this.modal = new Shepherd_modal({
          target: this.options.modalContainer || document.body,
          props: {
            classPrefix: this.classPrefix,
            styles: this.styles
          }
        });
      }
      /**
       * Called when `showOn` evaluates to false, to skip the step
       * @param {Step} step The step to skip
       * @param {Boolean} forward True if we are going forward, false if backward
       * @private
       */
      ;

      _proto._skipStep = function _skipStep(step, forward) {
        var index = this.steps.indexOf(step);
        var nextIndex = forward ? index + 1 : index - 1;
        this.show(nextIndex, forward);
      }
      /**
       * Before showing, hide the current step and if the tour is not
       * already active, call `this._setupActiveTour`.
       * @private
       */
      ;

      _proto._updateStateBeforeShow = function _updateStateBeforeShow() {
        if (this.currentStep) {
          this.currentStep.hide();
        }

        if (!this.isActive()) {
          this._setupActiveTour();
        }
      }
      /**
       * Sets this.id to `${tourName}--${uuid}`
       * @private
       */
      ;

      _proto._setTourID = function _setTourID() {
        var tourName = this.options.tourName || 'tour';
        this.id = tourName + "--" + uuid();
      };

      return Tour;
    }(Evented);

    Object.assign(Shepherd, {
      Tour: Tour,
      Step: Step
    });

    var ShepherdTourContext = react.createContext(null);
    var ShepherdTourContextConsumer = ShepherdTourContext.Consumer;
    /**
     * Take a set of steps and formats to use actions on the buttons in the current context
     * @param {Array} steps
     * @param {Array} tour
     * @private
     */
    var addSteps = function (steps, tour) {
        // Return nothing if there are no steps
        if (!steps.length) {
            return [];
        }
        var parsedStepsforAction = steps.map(function (step) {
            var buttons = step.buttons;
            if (buttons) {
                step.buttons = buttons.map(function (button) {
                    var action = button.action, classes = button.classes, disabled = button.disabled, label = button.label, text = button.text, type = button.type;
                    return {
                        // TypeScript doesn't have great support for dynamic method calls with
                        // bracket notation, so we use the `any` escape hatch
                        action: action || tour[type],
                        classes: classes,
                        disabled: disabled,
                        label: label,
                        text: text,
                        type: type
                    };
                });
            }
            return step;
        });
        parsedStepsforAction.forEach(function (step) { return tour.addStep(step); });
    };
    var ShepherdTour = function (props) {
        var tourOptions = props.tourOptions, steps = props.steps;
        var tourObject = react.useMemo(function () {
            var tourObject = new Shepherd.Tour(tourOptions);
            addSteps(steps, tourObject);
            return tourObject;
        }, [tourOptions, steps]);
        return (react.createElement(ShepherdTourContext.Provider, { value: tourObject }, props.children));
    };

    var css_248z$2 = ".Tour-module_container__2TbQh {\n    background: white;\n    padding: 0.5em;\n    border: 1px solid;\n}\n\n.Tour-module_container__2TbQh .shepherd-footer {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    grid-template-areas: 'prev action next';\n    grid-gap: 0.5em;\n}\n\n.Tour-module_prevButton__2Mt9j {\n    grid-area: prev;\n}\n\n.Tour-module_actionButton__JEpE0 {\n    grid-area: action;\n}\n\n.Tour-module_nextButton__o8Hw3 {\n    grid-area: next;\n}\n\n.Tour-module_container__2TbQh .shepherd-arrow {\n    height: 52px;\n    width: 35px;\n}\n\n.Tour-module_container__2TbQh .shepherd-arrow:after {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 35px;\n}\n\n.Tour-module_container__2TbQh[data-popper-placement^='left'] .shepherd-arrow,\n.Tour-module_container__2TbQh.shepherd-pinned-left .shepherd-arrow {\n    right: -40px;\n}\n\n.Tour-module_container__2TbQh[data-popper-placement^='left'] .shepherd-arrow:after,\n.Tour-module_container__2TbQhshepherd-pinned-left .shepherd-arrow:after {\n    content: '\\1F449';\n}\n\n.Tour-module_container__2TbQh[data-popper-placement^='right'] .shepherd-arrow,\n.Tour-module_container__2TbQh.shepherd-pinned-right .shepherd-arrow {\n    left: -40px;\n}\n\n.Tour-module_container__2TbQh[data-popper-placement^='right'] .shepherd-arrow:after,\n.Tour-module_container__2TbQhshepherd-pinned-right .shepherd-arrow:after {\n    content: '\\1F448';\n}\n\n.Tour-module_container__2TbQh[data-popper-placement^='top'] .shepherd-arrow,\n.Tour-module_container__2TbQh.shepherd-pinned-top .shepherd-arrow {\n    bottom: -47px;\n}\n\n.Tour-module_container__2TbQh[data-popper-placement^='top'] .shepherd-arrow:after,\n.Tour-module_container__2TbQhshepherd-pinned-top .shepherd-arrow:after {\n    content: '\\1F447';\n}\n\n.Tour-module_container__2TbQh[data-popper-placement^='bottom'] .shepherd-arrow,\n.Tour-module_container__2TbQh.shepherd-pinned-bottom .shepherd-arrow {\n    top: -47px;\n}\n\n.Tour-module_container__2TbQh[data-popper-placement^='bottom'] .shepherd-arrow:after,\n.Tour-module_container__2TbQhshepherd-pinned-bottom .shepherd-arrow:after {\n    content: '\\1F446';\n}\n";
    var css$2 = {"container":"Tour-module_container__2TbQh","prevButton":"Tour-module_prevButton__2Mt9j","actionButton":"Tour-module_actionButton__JEpE0","nextButton":"Tour-module_nextButton__o8Hw3"};
    styleInject(css_248z$2);

    const DEMO_SOURCE = `fn foo() {
    let alpha = 42;
}

fn bar() {
    let beta = 99;
}`;
    const DEMO_IDENT = 'alpha';
    const Button = () => {
        const tour = react.useContext(ShepherdTourContext);
        return react.createElement("button", { onClick: tour.start }, "Quick Tour");
    };
    const Tour$1 = () => {
        const dispatch = useDispatch();
        const tourOptions = {
            useModalOverlay: false,
            defaultStepOptions: {
                classes: css$2.container,
                popperOptions: {
                    modifiers: [{ name: 'offset', options: { offset: [0, 40] } }],
                },
            },
        };
        const back = {
            type: 'back',
            text: 'Back',
            classes: css$2.prevButton,
        };
        const next = {
            type: 'next',
            text: 'Next',
            classes: css$2.nextButton,
        };
        const done = {
            type: 'next',
            text: 'Done',
            classes: css$2.nextButton,
        };
        const setSource = {
            text: '✨ Example ✨',
            action: function () {
                dispatch(textChange(DEMO_SOURCE));
                this.next();
            },
            classes: css$2.actionButton,
        };
        const setLayer = {
            text: '✨ Example ✨',
            action: function () {
                dispatch(layerChange(Layer.Function));
                this.next();
            },
            classes: css$2.actionButton,
        };
        const setIdent = {
            text: '✨ Example ✨',
            action: function () {
                dispatch(identChange(DEMO_IDENT));
                this.next();
            },
            classes: css$2.actionButton,
        };
        const steps = [
            {
                id: 'source',
                attachTo: {
                    element: `[data-tour-id="${TOUR_ID_SOURCE}"]`,
                    on: 'right',
                },
                title: 'Provide source code',
                text: ['Enter some valid Rust source code here'],
                buttons: [setSource, next],
            },
            {
                id: 'layer',
                attachTo: {
                    element: `[data-tour-id="${TOUR_ID_LAYER}"]`,
                    on: 'right',
                },
                title: 'Select a layer',
                text: ['A layer is a section of the code you are interested in'],
                buttons: [back, setLayer, next],
            },
            {
                id: 'ident',
                attachTo: {
                    element: `[data-tour-id="${TOUR_ID_IDENT}"]`,
                    on: 'right',
                },
                title: 'Search for an identifier',
                text: ['All layers containing this identifier will be matched'],
                buttons: [back, setIdent, next],
            },
            {
                id: 'output',
                attachTo: {
                    element: `[data-tour-id="${TOUR_ID_OUTPUT}"]`,
                    on: 'bottom-start',
                },
                title: 'See matching layers',
                text: ['Any layer that matched will be highlighted here'],
                buttons: [back, done],
            },
        ];
        return (react.createElement(ShepherdTour, { steps: steps, tourOptions: tourOptions },
            react.createElement(Button, null)));
    };

    var css_248z$3 = ".Application-module_container__2qTq_ {\n    min-height: 100vh;\n\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 9fr 1fr;\n    grid-template-areas:\n        'input output'\n        'help help';\n\n    grid-gap: 0.5em;\n}\n\n.Application-module_input__2Akxm {\n    grid-area: input;\n}\n\n.Application-module_output__3poFl {\n    grid-area: output;\n}\n\n.Application-module_help__20qK_ {\n    grid-area: help;\n    text-align: center;\n}\n";
    var css$3 = {"container":"Application-module_container__2qTq_","input":"Application-module_input__2Akxm","output":"Application-module_output__3poFl","help":"Application-module_help__20qK_"};
    styleInject(css_248z$3);

    const Application = () => {
        const isLoaded = useSelector(getIsLoaded);
        if (!isLoaded) {
            return react.createElement("div", null, "Loading...");
        }
        else {
            return (react.createElement("div", { className: css$3.container },
                react.createElement("div", { className: css$3.input },
                    react.createElement(Input, null)),
                react.createElement("div", { className: css$3.output },
                    react.createElement(Output, null)),
                react.createElement("div", { className: css$3.help },
                    react.createElement(Tour$1, null))));
        }
    };

    var css_248z$4 = "/* https://dev.to/hankchizljaw/a-modern-css-reset-6p3 */\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* Remove default padding */\nul[class],\nol[class] {\n    padding: 0;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n    margin: 0;\n}\n\n/* Set core body defaults */\nbody {\n    min-height: 100vh;\n    scroll-behavior: smooth;\n    text-rendering: optimizeSpeed;\n    line-height: 1.5;\n}\n\n/* Remove list styles on ul, ol elements with a class attribute */\nul[class],\nol[class] {\n    list-style: none;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n    text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg {\n    max-width: 100%;\n    display: block;\n}\n\n/* Natural flow and rhythm in articles by default */\narticle > * + * {\n    margin-top: 1em;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\n/* Remove all animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n    * {\n        animation-duration: 0.01ms !important;\n        animation-iteration-count: 1 !important;\n        transition-duration: 0.01ms !important;\n        scroll-behavior: auto !important;\n    }\n}\n\n/* ---- */\n\n#main {\n    min-height: 100vh;\n}\n";
    styleInject(css_248z$4);

    const store = configureStore({
        reducer: reducer$2,
        middleware: getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['bindings/loaded'],
                ignoredPaths: ['bindings.IndexedSource'],
            },
        }),
    });
    const App = () => (react.createElement(Provider, { store: store },
        react.createElement(Application, null)));
    // TODO: Should actually have basic HTML structure in the HTML
    const main$1 = document.createElement('div');
    main$1.id = 'main';
    const body = document.getElementsByTagName('body')[0];
    body.prepend(main$1);
    reactDom.render(react.createElement(App, null), main$1);
    async function bootup() {
        const { IndexedSource } = await bindings();
        store.dispatch(loaded({ IndexedSource }));
    }
    bootup();

}());
