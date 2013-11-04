/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/

(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/*!
 * FullCalendar v1.6.4
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */

/*
 * Use fullcalendar.css for basic styling.
 * For event drag & drop, requires jQuery UI draggable.
 * For event resizing, requires jQuery UI resizable.
 */

 
(function($, undefined) {


;;

var defaults = {

	// display
	defaultView: 'month',
	aspectRatio: 1.35,
	header: {
		left: 'title',
		center: '',
		right: 'today prev,next'
	},
	weekends: true,
	weekNumbers: false,
	weekNumberCalculation: 'iso',
	weekNumberTitle: 'W',
	
	// editing
	//editable: false,
	//disableDragging: false,
	//disableResizing: false,
	
	allDayDefault: true,
	ignoreTimezone: true,
	
	// event ajax
	lazyFetching: true,
	startParam: 'start',
	endParam: 'end',
	
	// time formats
	titleFormat: {
		month: 'MMMM yyyy',
		week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
		day: 'dddd, MMM d, yyyy'
	},
	columnFormat: {
		month: 'ddd',
		week: 'ddd M/d',
		day: 'dddd M/d'
	},
	timeFormat: { // for event elements
		'': 'h(:mm)t' // default
	},
	
	// locale
	isRTL: false,
	firstDay: 0,
	monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
	dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
	dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
	buttonText: {
		prev: "<span class='fc-text-arrow'>&lsaquo;</span>",
		next: "<span class='fc-text-arrow'>&rsaquo;</span>",
		prevYear: "<span class='fc-text-arrow'>&laquo;</span>",
		nextYear: "<span class='fc-text-arrow'>&raquo;</span>",
		today: 'today',
		month: 'month',
		week: 'week',
		day: 'day'
	},
	
	// jquery-ui theming
	theme: false,
	buttonIcons: {
		prev: 'circle-triangle-w',
		next: 'circle-triangle-e'
	},
	
	//selectable: false,
	unselectAuto: true,
	
	dropAccept: '*',
	
	handleWindowResize: true
	
};

// right-to-left defaults
var rtlDefaults = {
	header: {
		left: 'next,prev today',
		center: '',
		right: 'title'
	},
	buttonText: {
		prev: "<span class='fc-text-arrow'>&rsaquo;</span>",
		next: "<span class='fc-text-arrow'>&lsaquo;</span>",
		prevYear: "<span class='fc-text-arrow'>&raquo;</span>",
		nextYear: "<span class='fc-text-arrow'>&laquo;</span>"
	},
	buttonIcons: {
		prev: 'circle-triangle-e',
		next: 'circle-triangle-w'
	}
};



;;

var fc = $.fullCalendar = { version: "1.6.4" };
var fcViews = fc.views = {};


$.fn.fullCalendar = function(options) {


	// method calling
	if (typeof options == 'string') {
		var args = Array.prototype.slice.call(arguments, 1);
		var res;
		this.each(function() {
			var calendar = $.data(this, 'fullCalendar');
			if (calendar && $.isFunction(calendar[options])) {
				var r = calendar[options].apply(calendar, args);
				if (res === undefined) {
					res = r;
				}
				if (options == 'destroy') {
					$.removeData(this, 'fullCalendar');
				}
			}
		});
		if (res !== undefined) {
			return res;
		}
		return this;
	}

	options = options || {};
	
	// would like to have this logic in EventManager, but needs to happen before options are recursively extended
	var eventSources = options.eventSources || [];
	delete options.eventSources;
	if (options.events) {
		eventSources.push(options.events);
		delete options.events;
	}
	

	options = $.extend(true, {},
		defaults,
		(options.isRTL || options.isRTL===undefined && defaults.isRTL) ? rtlDefaults : {},
		options
	);
	
	
	this.each(function(i, _element) {
		var element = $(_element);
		var calendar = new Calendar(element, options, eventSources);
		element.data('fullCalendar', calendar); // TODO: look into memory leak implications
		calendar.render();
	});
	
	
	return this;
	
};


// function for adding/overriding defaults
function setDefaults(d) {
	$.extend(true, defaults, d);
}



;;

 
function Calendar(element, options, eventSources) {
	var t = this;
	
	
	// exports
	t.options = options;
	t.render = render;
	t.destroy = destroy;
	t.refetchEvents = refetchEvents;
	t.reportEvents = reportEvents;
	t.reportEventChange = reportEventChange;
	t.rerenderEvents = rerenderEvents;
	t.changeView = changeView;
	t.select = select;
	t.unselect = unselect;
	t.prev = prev;
	t.next = next;
	t.prevYear = prevYear;
	t.nextYear = nextYear;
	t.today = today;
	t.gotoDate = gotoDate;
	t.incrementDate = incrementDate;
	t.formatDate = function(format, date) { return formatDate(format, date, options) };
	t.formatDates = function(format, date1, date2) { return formatDates(format, date1, date2, options) };
	t.getDate = getDate;
	t.getView = getView;
	t.option = option;
	t.trigger = trigger;
	
	
	// imports
	EventManager.call(t, options, eventSources);
	var isFetchNeeded = t.isFetchNeeded;
	var fetchEvents = t.fetchEvents;
	
	
	// locals
	var _element = element[0];
	var header;
	var headerElement;
	var content;
	var tm; // for making theme classes
	var currentView;
	var elementOuterWidth;
	var suggestedViewHeight;
	var resizeUID = 0;
	var ignoreWindowResize = 0;
	var date = new Date();
	var events = [];
	var _dragElement;
	
	
	
	/* Main Rendering
	-----------------------------------------------------------------------------*/
	
	
	setYMD(date, options.year, options.month, options.date);
	
	
	function render(inc) {
		if (!content) {
			initialRender();
		}
		else if (elementVisible()) {
			// mainly for the public API
			calcSize();
			_renderView(inc);
		}
	}
	
	
	function initialRender() {
		tm = options.theme ? 'ui' : 'fc';
		element.addClass('fc');
		if (options.isRTL) {
			element.addClass('fc-rtl');
		}
		else {
			element.addClass('fc-ltr');
		}
		if (options.theme) {
			element.addClass('ui-widget');
		}

		content = $("<div class='fc-content' style='position:relative'/>")
			.prependTo(element);

		header = new Header(t, options);
		headerElement = header.render();
		if (headerElement) {
			element.prepend(headerElement);
		}

		changeView(options.defaultView);

		if (options.handleWindowResize) {
			$(window).resize(windowResize);
		}

		// needed for IE in a 0x0 iframe, b/c when it is resized, never triggers a windowResize
		if (!bodyVisible()) {
			lateRender();
		}
	}
	
	
	// called when we know the calendar couldn't be rendered when it was initialized,
	// but we think it's ready now
	function lateRender() {
		setTimeout(function() { // IE7 needs this so dimensions are calculated correctly
			if (!currentView.start && bodyVisible()) { // !currentView.start makes sure this never happens more than once
				renderView();
			}
		},0);
	}
	
	
	function destroy() {

		if (currentView) {
			trigger('viewDestroy', currentView, currentView, currentView.element);
			currentView.triggerEventDestroy();
		}

		$(window).unbind('resize', windowResize);

		header.destroy();
		content.remove();
		element.removeClass('fc fc-rtl ui-widget');
	}
	
	
	function elementVisible() {
		return element.is(':visible');
	}
	
	
	function bodyVisible() {
		return $('body').is(':visible');
	}
	
	
	
	/* View Rendering
	-----------------------------------------------------------------------------*/
	

	function changeView(newViewName) {
		if (!currentView || newViewName != currentView.name) {
			_changeView(newViewName);
		}
	}


	function _changeView(newViewName) {
		ignoreWindowResize++;

		if (currentView) {
			trigger('viewDestroy', currentView, currentView, currentView.element);
			unselect();
			currentView.triggerEventDestroy(); // trigger 'eventDestroy' for each event
			freezeContentHeight();
			currentView.element.remove();
			header.deactivateButton(currentView.name);
		}

		header.activateButton(newViewName);

		currentView = new fcViews[newViewName](
			$("<div class='fc-view fc-view-" + newViewName + "' style='position:relative'/>")
				.appendTo(content),
			t // the calendar object
		);

		renderView();
		unfreezeContentHeight();

		ignoreWindowResize--;
	}


	function renderView(inc) {
		if (
			!currentView.start || // never rendered before
			inc || date < currentView.start || date >= currentView.end // or new date range
		) {
			if (elementVisible()) {
				_renderView(inc);
			}
		}
	}


	function _renderView(inc) { // assumes elementVisible
		ignoreWindowResize++;

		if (currentView.start) { // already been rendered?
			trigger('viewDestroy', currentView, currentView, currentView.element);
			unselect();
			clearEvents();
		}

		freezeContentHeight();
		currentView.render(date, inc || 0); // the view's render method ONLY renders the skeleton, nothing else
		setSize();
		unfreezeContentHeight();
		(currentView.afterRender || noop)();

		updateTitle();
		updateTodayButton();

		trigger('viewRender', currentView, currentView, currentView.element);
		currentView.trigger('viewDisplay', _element); // deprecated

		ignoreWindowResize--;

		getAndRenderEvents();
	}
	
	

	/* Resizing
	-----------------------------------------------------------------------------*/
	
	
	function updateSize() {
		if (elementVisible()) {
			unselect();
			clearEvents();
			calcSize();
			setSize();
			renderEvents();
		}
	}
	
	
	function calcSize() { // assumes elementVisible
		if (options.contentHeight) {
			suggestedViewHeight = options.contentHeight;
		}
		else if (options.height) {
			suggestedViewHeight = options.height - (headerElement ? headerElement.height() : 0) - vsides(content);
		}
		else {
			suggestedViewHeight = Math.round(content.width() / Math.max(options.aspectRatio, .5));
		}
	}
	
	
	function setSize() { // assumes elementVisible

		if (suggestedViewHeight === undefined) {
			calcSize(); // for first time
				// NOTE: we don't want to recalculate on every renderView because
				// it could result in oscillating heights due to scrollbars.
		}

		ignoreWindowResize++;
		currentView.setHeight(suggestedViewHeight);
		currentView.setWidth(content.width());
		ignoreWindowResize--;

		elementOuterWidth = element.outerWidth();
	}
	
	
	function windowResize() {
		if (!ignoreWindowResize) {
			if (currentView.start) { // view has already been rendered
				var uid = ++resizeUID;
				setTimeout(function() { // add a delay
					if (uid == resizeUID && !ignoreWindowResize && elementVisible()) {
						if (elementOuterWidth != (elementOuterWidth = element.outerWidth())) {
							ignoreWindowResize++; // in case the windowResize callback changes the height
							updateSize();
							currentView.trigger('windowResize', _element);
							ignoreWindowResize--;
						}
					}
				}, 200);
			}else{
				// calendar must have been initialized in a 0x0 iframe that has just been resized
				lateRender();
			}
		}
	}
	
	
	
	/* Event Fetching/Rendering
	-----------------------------------------------------------------------------*/
	// TODO: going forward, most of this stuff should be directly handled by the view


	function refetchEvents() { // can be called as an API method
		clearEvents();
		fetchAndRenderEvents();
	}


	function rerenderEvents(modifiedEventID) { // can be called as an API method
		clearEvents();
		renderEvents(modifiedEventID);
	}


	function renderEvents(modifiedEventID) { // TODO: remove modifiedEventID hack
		if (elementVisible()) {
			currentView.setEventData(events); // for View.js, TODO: unify with renderEvents
			currentView.renderEvents(events, modifiedEventID); // actually render the DOM elements
			currentView.trigger('eventAfterAllRender');
		}
	}


	function clearEvents() {
		currentView.triggerEventDestroy(); // trigger 'eventDestroy' for each event
		currentView.clearEvents(); // actually remove the DOM elements
		currentView.clearEventData(); // for View.js, TODO: unify with clearEvents
	}
	

	function getAndRenderEvents() {
		if (!options.lazyFetching || isFetchNeeded(currentView.visStart, currentView.visEnd)) {
			fetchAndRenderEvents();
		}
		else {
			renderEvents();
		}
	}


	function fetchAndRenderEvents() {
		fetchEvents(currentView.visStart, currentView.visEnd);
			// ... will call reportEvents
			// ... which will call renderEvents
	}

	
	// called when event data arrives
	function reportEvents(_events) {
		events = _events;
		renderEvents();
	}


	// called when a single event's data has been changed
	function reportEventChange(eventID) {
		rerenderEvents(eventID);
	}



	/* Header Updating
	-----------------------------------------------------------------------------*/


	function updateTitle() {
		header.updateTitle(currentView.title);
	}


	function updateTodayButton() {
		var today = new Date();
		if (today >= currentView.start && today < currentView.end) {
			header.disableButton('today');
		}
		else {
			header.enableButton('today');
		}
	}
	


	/* Selection
	-----------------------------------------------------------------------------*/
	

	function select(start, end, allDay) {
		currentView.select(start, end, allDay===undefined ? true : allDay);
	}
	

	function unselect() { // safe to be called before renderView
		if (currentView) {
			currentView.unselect();
		}
	}
	
	
	
	/* Date
	-----------------------------------------------------------------------------*/
	
	
	function prev() {
		renderView(-1);
	}
	
	
	function next() {
		renderView(1);
	}
	
	
	function prevYear() {
		addYears(date, -1);
		renderView();
	}
	
	
	function nextYear() {
		addYears(date, 1);
		renderView();
	}
	
	
	function today() {
		date = new Date();
		renderView();
	}
	
	
	function gotoDate(year, month, dateOfMonth) {
		if (year instanceof Date) {
			date = cloneDate(year); // provided 1 argument, a Date
		}else{
			setYMD(date, year, month, dateOfMonth);
		}
		renderView();
	}
	
	
	function incrementDate(years, months, days) {
		if (years !== undefined) {
			addYears(date, years);
		}
		if (months !== undefined) {
			addMonths(date, months);
		}
		if (days !== undefined) {
			addDays(date, days);
		}
		renderView();
	}
	
	
	function getDate() {
		return cloneDate(date);
	}



	/* Height "Freezing"
	-----------------------------------------------------------------------------*/


	function freezeContentHeight() {
		content.css({
			width: '100%',
			height: content.height(),
			overflow: 'hidden'
		});
	}


	function unfreezeContentHeight() {
		content.css({
			width: '',
			height: '',
			overflow: ''
		});
	}
	
	
	
	/* Misc
	-----------------------------------------------------------------------------*/
	
	
	function getView() {
		return currentView;
	}
	
	
	function option(name, value) {
		if (value === undefined) {
			return options[name];
		}
		if (name == 'height' || name == 'contentHeight' || name == 'aspectRatio') {
			options[name] = value;
			updateSize();
		}
	}
	
	
	function trigger(name, thisObj) {
		if (options[name]) {
			return options[name].apply(
				thisObj || _element,
				Array.prototype.slice.call(arguments, 2)
			);
		}
	}
	
	
	
	/* External Dragging
	------------------------------------------------------------------------*/
	
	if (options.droppable) {
		$(document)
			.bind('dragstart', function(ev, ui) {
				var _e = ev.target;
				var e = $(_e);
				if (!e.parents('.fc').length) { // not already inside a calendar
					var accept = options.dropAccept;
					if ($.isFunction(accept) ? accept.call(_e, e) : e.is(accept)) {
						_dragElement = _e;
						currentView.dragStart(_dragElement, ev, ui);
					}
				}
			})
			.bind('dragstop', function(ev, ui) {
				if (_dragElement) {
					currentView.dragStop(_dragElement, ev, ui);
					_dragElement = null;
				}
			});
	}
	

}

;;

function Header(calendar, options) {
	var t = this;
	
	
	// exports
	t.render = render;
	t.destroy = destroy;
	t.updateTitle = updateTitle;
	t.activateButton = activateButton;
	t.deactivateButton = deactivateButton;
	t.disableButton = disableButton;
	t.enableButton = enableButton;
	
	
	// locals
	var element = $([]);
	var tm;
	


	function render() {
		tm = options.theme ? 'ui' : 'fc';
		var sections = options.header;
		if (sections) {
			element = $("<table class='fc-header' style='width:100%'/>")
				.append(
					$("<tr/>")
						.append(renderSection('left'))
						.append(renderSection('center'))
						.append(renderSection('right'))
				);
			return element;
		}
	}
	
	
	function destroy() {
		element.remove();
	}
	
	
	function renderSection(position) {
		var e = $("<td class='fc-header-" + position + "'/>");
		var buttonStr = options.header[position];
		if (buttonStr) {
			$.each(buttonStr.split(' '), function(i) {
				if (i > 0) {
					e.append("<span class='fc-header-space'/>");
				}
				var prevButton;
				$.each(this.split(','), function(j, buttonName) {
					if (buttonName == 'title') {
						e.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>");
						if (prevButton) {
							prevButton.addClass(tm + '-corner-right');
						}
						prevButton = null;
					}else{
						var buttonClick;
						if (calendar[buttonName]) {
							buttonClick = calendar[buttonName]; // calendar method
						}
						else if (fcViews[buttonName]) {
							buttonClick = function() {
								button.removeClass(tm + '-state-hover'); // forget why
								calendar.changeView(buttonName);
							};
						}
						if (buttonClick) {
							var icon = options.theme ? smartProperty(options.buttonIcons, buttonName) : null; // why are we using smartProperty here?
							var text = smartProperty(options.buttonText, buttonName); // why are we using smartProperty here?
							var button = $(
								"<span class='fc-button fc-button-" + buttonName + " " + tm + "-state-default'>" +
									(icon ?
										"<span class='fc-icon-wrap'>" +
											"<span class='ui-icon ui-icon-" + icon + "'/>" +
										"</span>" :
										text
										) +
								"</span>"
								)
								.click(function() {
									if (!button.hasClass(tm + '-state-disabled')) {
										buttonClick();
									}
								})
								.mousedown(function() {
									button
										.not('.' + tm + '-state-active')
										.not('.' + tm + '-state-disabled')
										.addClass(tm + '-state-down');
								})
								.mouseup(function() {
									button.removeClass(tm + '-state-down');
								})
								.hover(
									function() {
										button
											.not('.' + tm + '-state-active')
											.not('.' + tm + '-state-disabled')
											.addClass(tm + '-state-hover');
									},
									function() {
										button
											.removeClass(tm + '-state-hover')
											.removeClass(tm + '-state-down');
									}
								)
								.appendTo(e);
							disableTextSelection(button);
							if (!prevButton) {
								button.addClass(tm + '-corner-left');
							}
							prevButton = button;
						}
					}
				});
				if (prevButton) {
					prevButton.addClass(tm + '-corner-right');
				}
			});
		}
		return e;
	}
	
	
	function updateTitle(html) {
		element.find('h2')
			.html(html);
	}
	
	
	function activateButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.addClass(tm + '-state-active');
	}
	
	
	function deactivateButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.removeClass(tm + '-state-active');
	}
	
	
	function disableButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.addClass(tm + '-state-disabled');
	}
	
	
	function enableButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.removeClass(tm + '-state-disabled');
	}


}

;;

fc.sourceNormalizers = [];
fc.sourceFetchers = [];

var ajaxDefaults = {
	dataType: 'json',
	cache: false
};

var eventGUID = 1;


function EventManager(options, _sources) {
	var t = this;
	
	
	// exports
	t.isFetchNeeded = isFetchNeeded;
	t.fetchEvents = fetchEvents;
	t.addEventSource = addEventSource;
	t.removeEventSource = removeEventSource;
	t.updateEvent = updateEvent;
	t.renderEvent = renderEvent;
	t.removeEvents = removeEvents;
	t.clientEvents = clientEvents;
	t.normalizeEvent = normalizeEvent;
	
	
	// imports
	var trigger = t.trigger;
	var getView = t.getView;
	var reportEvents = t.reportEvents;
	
	
	// locals
	var stickySource = { events: [] };
	var sources = [ stickySource ];
	var rangeStart, rangeEnd;
	var currentFetchID = 0;
	var pendingSourceCnt = 0;
	var loadingLevel = 0;
	var cache = [];
	
	
	for (var i=0; i<_sources.length; i++) {
		_addEventSource(_sources[i]);
	}
	
	
	
	/* Fetching
	-----------------------------------------------------------------------------*/
	
	
	function isFetchNeeded(start, end) {
		return !rangeStart || start < rangeStart || end > rangeEnd;
	}
	
	
	function fetchEvents(start, end) {
		rangeStart = start;
		rangeEnd = end;
		cache = [];
		var fetchID = ++currentFetchID;
		var len = sources.length;
		pendingSourceCnt = len;
		for (var i=0; i<len; i++) {
			fetchEventSource(sources[i], fetchID);
		}
	}
	
	
	function fetchEventSource(source, fetchID) {
		_fetchEventSource(source, function(events) {
			if (fetchID == currentFetchID) {
				if (events) {

					if (options.eventDataTransform) {
						events = $.map(events, options.eventDataTransform);
					}
					if (source.eventDataTransform) {
						events = $.map(events, source.eventDataTransform);
					}
					// TODO: this technique is not ideal for static array event sources.
					//  For arrays, we'll want to process all events right in the beginning, then never again.
				
					for (var i=0; i<events.length; i++) {
						events[i].source = source;
						normalizeEvent(events[i]);
					}
					cache = cache.concat(events);
				}
				pendingSourceCnt--;
				if (!pendingSourceCnt) {
					reportEvents(cache);
				}
			}
		});
	}
	
	
	function _fetchEventSource(source, callback) {
		var i;
		var fetchers = fc.sourceFetchers;
		var res;
		for (i=0; i<fetchers.length; i++) {
			res = fetchers[i](source, rangeStart, rangeEnd, callback);
			if (res === true) {
				// the fetcher is in charge. made its own async request
				return;
			}
			else if (typeof res == 'object') {
				// the fetcher returned a new source. process it
				_fetchEventSource(res, callback);
				return;
			}
		}
		var events = source.events;
		if (events) {
			if ($.isFunction(events)) {
				pushLoading();
				events(cloneDate(rangeStart), cloneDate(rangeEnd), function(events) {
					callback(events);
					popLoading();
				});
			}
			else if ($.isArray(events)) {
				callback(events);
			}
			else {
				callback();
			}
		}else{
			var url = source.url;
			if (url) {
				var success = source.success;
				var error = source.error;
				var complete = source.complete;

				// retrieve any outbound GET/POST $.ajax data from the options
				var customData;
				if ($.isFunction(source.data)) {
					// supplied as a function that returns a key/value object
					customData = source.data();
				}
				else {
					// supplied as a straight key/value object
					customData = source.data;
				}

				// use a copy of the custom data so we can modify the parameters
				// and not affect the passed-in object.
				var data = $.extend({}, customData || {});

				var startParam = firstDefined(source.startParam, options.startParam);
				var endParam = firstDefined(source.endParam, options.endParam);
				if (startParam) {
					data[startParam] = Math.round(+rangeStart / 1000);
				}
				if (endParam) {
					data[endParam] = Math.round(+rangeEnd / 1000);
				}

				pushLoading();
				$.ajax($.extend({}, ajaxDefaults, source, {
					data: data,
					success: function(events) {
						events = events || [];
						var res = applyAll(success, this, arguments);
						if ($.isArray(res)) {
							events = res;
						}
						callback(events);
					},
					error: function() {
						applyAll(error, this, arguments);
						callback();
					},
					complete: function() {
						applyAll(complete, this, arguments);
						popLoading();
					}
				}));
			}else{
				callback();
			}
		}
	}
	
	
	
	/* Sources
	-----------------------------------------------------------------------------*/
	

	function addEventSource(source) {
		source = _addEventSource(source);
		if (source) {
			pendingSourceCnt++;
			fetchEventSource(source, currentFetchID); // will eventually call reportEvents
		}
	}
	
	
	function _addEventSource(source) {
		if ($.isFunction(source) || $.isArray(source)) {
			source = { events: source };
		}
		else if (typeof source == 'string') {
			source = { url: source };
		}
		if (typeof source == 'object') {
			normalizeSource(source);
			sources.push(source);
			return source;
		}
	}
	

	function removeEventSource(source) {
		sources = $.grep(sources, function(src) {
			return !isSourcesEqual(src, source);
		});
		// remove all client events from that source
		cache = $.grep(cache, function(e) {
			return !isSourcesEqual(e.source, source);
		});
		reportEvents(cache);
	}
	
	
	
	/* Manipulation
	-----------------------------------------------------------------------------*/
	
	
	function updateEvent(event) { // update an existing event
		var i, len = cache.length, e,
			defaultEventEnd = getView().defaultEventEnd, // getView???
			startDelta = event.start - event._start,
			endDelta = event.end ?
				(event.end - (event._end || defaultEventEnd(event))) // event._end would be null if event.end
				: 0;                                                      // was null and event was just resized
		for (i=0; i<len; i++) {
			e = cache[i];
			if (e._id == event._id && e != event) {
				e.start = new Date(+e.start + startDelta);
				if (event.end) {
					if (e.end) {
						e.end = new Date(+e.end + endDelta);
					}else{
						e.end = new Date(+defaultEventEnd(e) + endDelta);
					}
				}else{
					e.end = null;
				}
				e.title = event.title;
				e.url = event.url;
				e.allDay = event.allDay;
				e.className = event.className;
				e.editable = event.editable;
				e.color = event.color;
				e.backgroundColor = event.backgroundColor;
				e.borderColor = event.borderColor;
				e.textColor = event.textColor;
				normalizeEvent(e);
			}
		}
		normalizeEvent(event);
		reportEvents(cache);
	}
	
	
	function renderEvent(event, stick) {
		normalizeEvent(event);
		if (!event.source) {
			if (stick) {
				stickySource.events.push(event);
				event.source = stickySource;
			}
			cache.push(event);
		}
		reportEvents(cache);
	}
	
	
	function removeEvents(filter) {
		if (!filter) { // remove all
			cache = [];
			// clear all array sources
			for (var i=0; i<sources.length; i++) {
				if ($.isArray(sources[i].events)) {
					sources[i].events = [];
				}
			}
		}else{
			if (!$.isFunction(filter)) { // an event ID
				var id = filter + '';
				filter = function(e) {
					return e._id == id;
				};
			}
			cache = $.grep(cache, filter, true);
			// remove events from array sources
			for (var i=0; i<sources.length; i++) {
				if ($.isArray(sources[i].events)) {
					sources[i].events = $.grep(sources[i].events, filter, true);
				}
			}
		}
		reportEvents(cache);
	}
	
	
	function clientEvents(filter) {
		if ($.isFunction(filter)) {
			return $.grep(cache, filter);
		}
		else if (filter) { // an event ID
			filter += '';
			return $.grep(cache, function(e) {
				return e._id == filter;
			});
		}
		return cache; // else, return all
	}
	
	
	
	/* Loading State
	-----------------------------------------------------------------------------*/
	
	
	function pushLoading() {
		if (!loadingLevel++) {
			trigger('loading', null, true, getView());
		}
	}
	
	
	function popLoading() {
		if (!--loadingLevel) {
			trigger('loading', null, false, getView());
		}
	}
	
	
	
	/* Event Normalization
	-----------------------------------------------------------------------------*/
	
	
	function normalizeEvent(event) {
		var source = event.source || {};
		var ignoreTimezone = firstDefined(source.ignoreTimezone, options.ignoreTimezone);
		event._id = event._id || (event.id === undefined ? '_fc' + eventGUID++ : event.id + '');
		if (event.date) {
			if (!event.start) {
				event.start = event.date;
			}
			delete event.date;
		}
		event._start = cloneDate(event.start = parseDate(event.start, ignoreTimezone));
		event.end = parseDate(event.end, ignoreTimezone);
		if (event.end && event.end <= event.start) {
			event.end = null;
		}
		event._end = event.end ? cloneDate(event.end) : null;
		if (event.allDay === undefined) {
			event.allDay = firstDefined(source.allDayDefault, options.allDayDefault);
		}
		if (event.className) {
			if (typeof event.className == 'string') {
				event.className = event.className.split(/\s+/);
			}
		}else{
			event.className = [];
		}
		// TODO: if there is no start date, return false to indicate an invalid event
	}
	
	
	
	/* Utils
	------------------------------------------------------------------------------*/
	
	
	function normalizeSource(source) {
		if (source.className) {
			// TODO: repeat code, same code for event classNames
			if (typeof source.className == 'string') {
				source.className = source.className.split(/\s+/);
			}
		}else{
			source.className = [];
		}
		var normalizers = fc.sourceNormalizers;
		for (var i=0; i<normalizers.length; i++) {
			normalizers[i](source);
		}
	}
	
	
	function isSourcesEqual(source1, source2) {
		return source1 && source2 && getSourcePrimitive(source1) == getSourcePrimitive(source2);
	}
	
	
	function getSourcePrimitive(source) {
		return ((typeof source == 'object') ? (source.events || source.url) : '') || source;
	}


}

;;


fc.addDays = addDays;
fc.cloneDate = cloneDate;
fc.parseDate = parseDate;
fc.parseISO8601 = parseISO8601;
fc.parseTime = parseTime;
fc.formatDate = formatDate;
fc.formatDates = formatDates;



/* Date Math
-----------------------------------------------------------------------------*/

var dayIDs = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
	DAY_MS = 86400000,
	HOUR_MS = 3600000,
	MINUTE_MS = 60000;
	

function addYears(d, n, keepTime) {
	d.setFullYear(d.getFullYear() + n);
	if (!keepTime) {
		clearTime(d);
	}
	return d;
}


function addMonths(d, n, keepTime) { // prevents day overflow/underflow
	if (+d) { // prevent infinite looping on invalid dates
		var m = d.getMonth() + n,
			check = cloneDate(d);
		check.setDate(1);
		check.setMonth(m);
		d.setMonth(m);
		if (!keepTime) {
			clearTime(d);
		}
		while (d.getMonth() != check.getMonth()) {
			d.setDate(d.getDate() + (d < check ? 1 : -1));
		}
	}
	return d;
}


function addDays(d, n, keepTime) { // deals with daylight savings
	if (+d) {
		var dd = d.getDate() + n,
			check = cloneDate(d);
		check.setHours(9); // set to middle of day
		check.setDate(dd);
		d.setDate(dd);
		if (!keepTime) {
			clearTime(d);
		}
		fixDate(d, check);
	}
	return d;
}


function fixDate(d, check) { // force d to be on check's YMD, for daylight savings purposes
	if (+d) { // prevent infinite looping on invalid dates
		while (d.getDate() != check.getDate()) {
			d.setTime(+d + (d < check ? 1 : -1) * HOUR_MS);
		}
	}
}


function addMinutes(d, n) {
	d.setMinutes(d.getMinutes() + n);
	return d;
}


function clearTime(d) {
	d.setHours(0);
	d.setMinutes(0);
	d.setSeconds(0); 
	d.setMilliseconds(0);
	return d;
}


function cloneDate(d, dontKeepTime) {
	if (dontKeepTime) {
		return clearTime(new Date(+d));
	}
	return new Date(+d);
}


function zeroDate() { // returns a Date with time 00:00:00 and dateOfMonth=1
	var i=0, d;
	do {
		d = new Date(1970, i++, 1);
	} while (d.getHours()); // != 0
	return d;
}


function dayDiff(d1, d2) { // d1 - d2
	return Math.round((cloneDate(d1, true) - cloneDate(d2, true)) / DAY_MS);
}


function setYMD(date, y, m, d) {
	if (y !== undefined && y != date.getFullYear()) {
		date.setDate(1);
		date.setMonth(0);
		date.setFullYear(y);
	}
	if (m !== undefined && m != date.getMonth()) {
		date.setDate(1);
		date.setMonth(m);
	}
	if (d !== undefined) {
		date.setDate(d);
	}
}



/* Date Parsing
-----------------------------------------------------------------------------*/


function parseDate(s, ignoreTimezone) { // ignoreTimezone defaults to true
	if (typeof s == 'object') { // already a Date object
		return s;
	}
	if (typeof s == 'number') { // a UNIX timestamp
		return new Date(s * 1000);
	}
	if (typeof s == 'string') {
		if (s.match(/^\d+(\.\d+)?$/)) { // a UNIX timestamp
			return new Date(parseFloat(s) * 1000);
		}
		if (ignoreTimezone === undefined) {
			ignoreTimezone = true;
		}
		return parseISO8601(s, ignoreTimezone) || (s ? new Date(s) : null);
	}
	// TODO: never return invalid dates (like from new Date(<string>)), return null instead
	return null;
}


function parseISO8601(s, ignoreTimezone) { // ignoreTimezone defaults to false
	// derived from http://delete.me.uk/2005/03/iso8601.html
	// TODO: for a know glitch/feature, read tests/issue_206_parseDate_dst.html
	var m = s.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
	if (!m) {
		return null;
	}
	var date = new Date(m[1], 0, 1);
	if (ignoreTimezone || !m[13]) {
		var check = new Date(m[1], 0, 1, 9, 0);
		if (m[3]) {
			date.setMonth(m[3] - 1);
			check.setMonth(m[3] - 1);
		}
		if (m[5]) {
			date.setDate(m[5]);
			check.setDate(m[5]);
		}
		fixDate(date, check);
		if (m[7]) {
			date.setHours(m[7]);
		}
		if (m[8]) {
			date.setMinutes(m[8]);
		}
		if (m[10]) {
			date.setSeconds(m[10]);
		}
		if (m[12]) {
			date.setMilliseconds(Number("0." + m[12]) * 1000);
		}
		fixDate(date, check);
	}else{
		date.setUTCFullYear(
			m[1],
			m[3] ? m[3] - 1 : 0,
			m[5] || 1
		);
		date.setUTCHours(
			m[7] || 0,
			m[8] || 0,
			m[10] || 0,
			m[12] ? Number("0." + m[12]) * 1000 : 0
		);
		if (m[14]) {
			var offset = Number(m[16]) * 60 + (m[18] ? Number(m[18]) : 0);
			offset *= m[15] == '-' ? 1 : -1;
			date = new Date(+date + (offset * 60 * 1000));
		}
	}
	return date;
}


function parseTime(s) { // returns minutes since start of day
	if (typeof s == 'number') { // an hour
		return s * 60;
	}
	if (typeof s == 'object') { // a Date object
		return s.getHours() * 60 + s.getMinutes();
	}
	var m = s.match(/(\d+)(?::(\d+))?\s*(\w+)?/);
	if (m) {
		var h = parseInt(m[1], 10);
		if (m[3]) {
			h %= 12;
			if (m[3].toLowerCase().charAt(0) == 'p') {
				h += 12;
			}
		}
		return h * 60 + (m[2] ? parseInt(m[2], 10) : 0);
	}
}



/* Date Formatting
-----------------------------------------------------------------------------*/
// TODO: use same function formatDate(date, [date2], format, [options])


function formatDate(date, format, options) {
	return formatDates(date, null, format, options);
}


function formatDates(date1, date2, format, options) {
	options = options || defaults;
	var date = date1,
		otherDate = date2,
		i, len = format.length, c,
		i2, formatter,
		res = '';
	for (i=0; i<len; i++) {
		c = format.charAt(i);
		if (c == "'") {
			for (i2=i+1; i2<len; i2++) {
				if (format.charAt(i2) == "'") {
					if (date) {
						if (i2 == i+1) {
							res += "'";
						}else{
							res += format.substring(i+1, i2);
						}
						i = i2;
					}
					break;
				}
			}
		}
		else if (c == '(') {
			for (i2=i+1; i2<len; i2++) {
				if (format.charAt(i2) == ')') {
					var subres = formatDate(date, format.substring(i+1, i2), options);
					if (parseInt(subres.replace(/\D/, ''), 10)) {
						res += subres;
					}
					i = i2;
					break;
				}
			}
		}
		else if (c == '[') {
			for (i2=i+1; i2<len; i2++) {
				if (format.charAt(i2) == ']') {
					var subformat = format.substring(i+1, i2);
					var subres = formatDate(date, subformat, options);
					if (subres != formatDate(otherDate, subformat, options)) {
						res += subres;
					}
					i = i2;
					break;
				}
			}
		}
		else if (c == '{') {
			date = date2;
			otherDate = date1;
		}
		else if (c == '}') {
			date = date1;
			otherDate = date2;
		}
		else {
			for (i2=len; i2>i; i2--) {
				if (formatter = dateFormatters[format.substring(i, i2)]) {
					if (date) {
						res += formatter(date, options);
					}
					i = i2 - 1;
					break;
				}
			}
			if (i2 == i) {
				if (date) {
					res += c;
				}
			}
		}
	}
	return res;
};


var dateFormatters = {
	s	: function(d)	{ return d.getSeconds() },
	ss	: function(d)	{ return zeroPad(d.getSeconds()) },
	m	: function(d)	{ return d.getMinutes() },
	mm	: function(d)	{ return zeroPad(d.getMinutes()) },
	h	: function(d)	{ return d.getHours() % 12 || 12 },
	hh	: function(d)	{ return zeroPad(d.getHours() % 12 || 12) },
	H	: function(d)	{ return d.getHours() },
	HH	: function(d)	{ return zeroPad(d.getHours()) },
	d	: function(d)	{ return d.getDate() },
	dd	: function(d)	{ return zeroPad(d.getDate()) },
	ddd	: function(d,o)	{ return o.dayNamesShort[d.getDay()] },
	dddd: function(d,o)	{ return o.dayNames[d.getDay()] },
	M	: function(d)	{ return d.getMonth() + 1 },
	MM	: function(d)	{ return zeroPad(d.getMonth() + 1) },
	MMM	: function(d,o)	{ return o.monthNamesShort[d.getMonth()] },
	MMMM: function(d,o)	{ return o.monthNames[d.getMonth()] },
	yy	: function(d)	{ return (d.getFullYear()+'').substring(2) },
	yyyy: function(d)	{ return d.getFullYear() },
	t	: function(d)	{ return d.getHours() < 12 ? 'a' : 'p' },
	tt	: function(d)	{ return d.getHours() < 12 ? 'am' : 'pm' },
	T	: function(d)	{ return d.getHours() < 12 ? 'A' : 'P' },
	TT	: function(d)	{ return d.getHours() < 12 ? 'AM' : 'PM' },
	u	: function(d)	{ return formatDate(d, "yyyy-MM-dd'T'HH:mm:ss'Z'") },
	S	: function(d)	{
		var date = d.getDate();
		if (date > 10 && date < 20) {
			return 'th';
		}
		return ['st', 'nd', 'rd'][date%10-1] || 'th';
	},
	w   : function(d, o) { // local
		return o.weekNumberCalculation(d);
	},
	W   : function(d) { // ISO
		return iso8601Week(d);
	}
};
fc.dateFormatters = dateFormatters;


/* thanks jQuery UI (https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js)
 * 
 * Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
 * `date` - the date to get the week for
 * `number` - the number of the week within the year that contains this date
 */
function iso8601Week(date) {
	var time;
	var checkDate = new Date(date.getTime());

	// Find Thursday of this week starting on Monday
	checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

	time = checkDate.getTime();
	checkDate.setMonth(0); // Compare with Jan 1
	checkDate.setDate(1);
	return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
}


;;

fc.applyAll = applyAll;


/* Event Date Math
-----------------------------------------------------------------------------*/


function exclEndDay(event) {
	if (event.end) {
		return _exclEndDay(event.end, event.allDay);
	}else{
		return addDays(cloneDate(event.start), 1);
	}
}


function _exclEndDay(end, allDay) {
	end = cloneDate(end);
	return allDay || end.getHours() || end.getMinutes() ? addDays(end, 1) : clearTime(end);
	// why don't we check for seconds/ms too?
}



/* Event Element Binding
-----------------------------------------------------------------------------*/


function lazySegBind(container, segs, bindHandlers) {
	container.unbind('mouseover').mouseover(function(ev) {
		var parent=ev.target, e,
			i, seg;
		while (parent != this) {
			e = parent;
			parent = parent.parentNode;
		}
		if ((i = e._fci) !== undefined) {
			e._fci = undefined;
			seg = segs[i];
			bindHandlers(seg.event, seg.element, seg);
			$(ev.target).trigger(ev);
		}
		ev.stopPropagation();
	});
}



/* Element Dimensions
-----------------------------------------------------------------------------*/


function setOuterWidth(element, width, includeMargins) {
	for (var i=0, e; i<element.length; i++) {
		e = $(element[i]);
		e.width(Math.max(0, width - hsides(e, includeMargins)));
	}
}


function setOuterHeight(element, height, includeMargins) {
	for (var i=0, e; i<element.length; i++) {
		e = $(element[i]);
		e.height(Math.max(0, height - vsides(e, includeMargins)));
	}
}


function hsides(element, includeMargins) {
	return hpadding(element) + hborders(element) + (includeMargins ? hmargins(element) : 0);
}


function hpadding(element) {
	return (parseFloat($.css(element[0], 'paddingLeft', true)) || 0) +
	       (parseFloat($.css(element[0], 'paddingRight', true)) || 0);
}


function hmargins(element) {
	return (parseFloat($.css(element[0], 'marginLeft', true)) || 0) +
	       (parseFloat($.css(element[0], 'marginRight', true)) || 0);
}


function hborders(element) {
	return (parseFloat($.css(element[0], 'borderLeftWidth', true)) || 0) +
	       (parseFloat($.css(element[0], 'borderRightWidth', true)) || 0);
}


function vsides(element, includeMargins) {
	return vpadding(element) +  vborders(element) + (includeMargins ? vmargins(element) : 0);
}


function vpadding(element) {
	return (parseFloat($.css(element[0], 'paddingTop', true)) || 0) +
	       (parseFloat($.css(element[0], 'paddingBottom', true)) || 0);
}


function vmargins(element) {
	return (parseFloat($.css(element[0], 'marginTop', true)) || 0) +
	       (parseFloat($.css(element[0], 'marginBottom', true)) || 0);
}


function vborders(element) {
	return (parseFloat($.css(element[0], 'borderTopWidth', true)) || 0) +
	       (parseFloat($.css(element[0], 'borderBottomWidth', true)) || 0);
}



/* Misc Utils
-----------------------------------------------------------------------------*/


//TODO: arraySlice
//TODO: isFunction, grep ?


function noop() { }


function dateCompare(a, b) {
	return a - b;
}


function arrayMax(a) {
	return Math.max.apply(Math, a);
}


function zeroPad(n) {
	return (n < 10 ? '0' : '') + n;
}


function smartProperty(obj, name) { // get a camel-cased/namespaced property of an object
	if (obj[name] !== undefined) {
		return obj[name];
	}
	var parts = name.split(/(?=[A-Z])/),
		i=parts.length-1, res;
	for (; i>=0; i--) {
		res = obj[parts[i].toLowerCase()];
		if (res !== undefined) {
			return res;
		}
	}
	return obj[''];
}


function htmlEscape(s) {
	return s.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/'/g, '&#039;')
		.replace(/"/g, '&quot;')
		.replace(/\n/g, '<br />');
}


function disableTextSelection(element) {
	element
		.attr('unselectable', 'on')
		.css('MozUserSelect', 'none')
		.bind('selectstart.ui', function() { return false; });
}


/*
function enableTextSelection(element) {
	element
		.attr('unselectable', 'off')
		.css('MozUserSelect', '')
		.unbind('selectstart.ui');
}
*/


function markFirstLast(e) {
	e.children()
		.removeClass('fc-first fc-last')
		.filter(':first-child')
			.addClass('fc-first')
		.end()
		.filter(':last-child')
			.addClass('fc-last');
}


function setDayID(cell, date) {
	cell.each(function(i, _cell) {
		_cell.className = _cell.className.replace(/^fc-\w*/, 'fc-' + dayIDs[date.getDay()]);
		// TODO: make a way that doesn't rely on order of classes
	});
}


function getSkinCss(event, opt) {
	var source = event.source || {};
	var eventColor = event.color;
	var sourceColor = source.color;
	var optionColor = opt('eventColor');
	var backgroundColor =
		event.backgroundColor ||
		eventColor ||
		source.backgroundColor ||
		sourceColor ||
		opt('eventBackgroundColor') ||
		optionColor;
	var borderColor =
		event.borderColor ||
		eventColor ||
		source.borderColor ||
		sourceColor ||
		opt('eventBorderColor') ||
		optionColor;
	var textColor =
		event.textColor ||
		source.textColor ||
		opt('eventTextColor');
	var statements = [];
	if (backgroundColor) {
		statements.push('background-color:' + backgroundColor);
	}
	if (borderColor) {
		statements.push('border-color:' + borderColor);
	}
	if (textColor) {
		statements.push('color:' + textColor);
	}
	return statements.join(';');
}


function applyAll(functions, thisObj, args) {
	if ($.isFunction(functions)) {
		functions = [ functions ];
	}
	if (functions) {
		var i;
		var ret;
		for (i=0; i<functions.length; i++) {
			ret = functions[i].apply(thisObj, args) || ret;
		}
		return ret;
	}
}


function firstDefined() {
	for (var i=0; i<arguments.length; i++) {
		if (arguments[i] !== undefined) {
			return arguments[i];
		}
	}
}


;;

fcViews.month = MonthView;

function MonthView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'month');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var skipHiddenDays = t.skipHiddenDays;
	var getCellsPerWeek = t.getCellsPerWeek;
	var formatDate = calendar.formatDate;
	
	
	function render(date, delta) {

		if (delta) {
			addMonths(date, delta);
			date.setDate(1);
		}

		var firstDay = opt('firstDay');

		var start = cloneDate(date, true);
		start.setDate(1);

		var end = addMonths(cloneDate(start), 1);

		var visStart = cloneDate(start);
		addDays(visStart, -((visStart.getDay() - firstDay + 7) % 7));
		skipHiddenDays(visStart);

		var visEnd = cloneDate(end);
		addDays(visEnd, (7 - visEnd.getDay() + firstDay) % 7);
		skipHiddenDays(visEnd, -1, true);

		var colCnt = getCellsPerWeek();
		var rowCnt = Math.round(dayDiff(visEnd, visStart) / 7); // should be no need for Math.round

		if (opt('weekMode') == 'fixed') {
			addDays(visEnd, (6 - rowCnt) * 7); // add weeks to make up for it
			rowCnt = 6;
		}

		t.title = formatDate(start, opt('titleFormat'));

		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;

		renderBasic(rowCnt, colCnt, true);
	}
	
	
}

;;

fcViews.basicWeek = BasicWeekView;

function BasicWeekView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'basicWeek');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var skipHiddenDays = t.skipHiddenDays;
	var getCellsPerWeek = t.getCellsPerWeek;
	var formatDates = calendar.formatDates;
	
	
	function render(date, delta) {

		if (delta) {
			addDays(date, delta * 7);
		}

		var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));
		var end = addDays(cloneDate(start), 7);

		var visStart = cloneDate(start);
		skipHiddenDays(visStart);

		var visEnd = cloneDate(end);
		skipHiddenDays(visEnd, -1, true);

		var colCnt = getCellsPerWeek();

		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;

		t.title = formatDates(
			visStart,
			addDays(cloneDate(visEnd), -1),
			opt('titleFormat')
		);

		renderBasic(1, colCnt, false);
	}
	
	
}

;;

fcViews.basicDay = BasicDayView;


function BasicDayView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'basicDay');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var skipHiddenDays = t.skipHiddenDays;
	var formatDate = calendar.formatDate;
	
	
	function render(date, delta) {

		if (delta) {
			addDays(date, delta);
		}
		skipHiddenDays(date, delta < 0 ? -1 : 1);

		var start = cloneDate(date, true);
		var end = addDays(cloneDate(start), 1);

		t.title = formatDate(date, opt('titleFormat'));

		t.start = t.visStart = start;
		t.end = t.visEnd = end;

		renderBasic(1, 1, false);
	}
	
	
}

;;

setDefaults({
	weekMode: 'fixed'
});


function BasicView(element, calendar, viewName) {
	var t = this;
	
	
	// exports
	t.renderBasic = renderBasic;
	t.setHeight = setHeight;
	t.setWidth = setWidth;
	t.renderDayOverlay = renderDayOverlay;
	t.defaultSelectionEnd = defaultSelectionEnd;
	t.renderSelection = renderSelection;
	t.clearSelection = clearSelection;
	t.reportDayClick = reportDayClick; // for selection (kinda hacky)
	t.dragStart = dragStart;
	t.dragStop = dragStop;
	t.defaultEventEnd = defaultEventEnd;
	t.getHoverListener = function() { return hoverListener };
	t.colLeft = colLeft;
	t.colRight = colRight;
	t.colContentLeft = colContentLeft;
	t.colContentRight = colContentRight;
	t.getIsCellAllDay = function() { return true };
	t.allDayRow = allDayRow;
	t.getRowCnt = function() { return rowCnt };
	t.getColCnt = function() { return colCnt };
	t.getColWidth = function() { return colWidth };
	t.getDaySegmentContainer = function() { return daySegmentContainer };
	
	
	// imports
	View.call(t, element, calendar, viewName);
	OverlayManager.call(t);
	SelectionManager.call(t);
	BasicEventRenderer.call(t);
	var opt = t.opt;
	var trigger = t.trigger;
	var renderOverlay = t.renderOverlay;
	var clearOverlays = t.clearOverlays;
	var daySelectionMousedown = t.daySelectionMousedown;
	var cellToDate = t.cellToDate;
	var dateToCell = t.dateToCell;
	var rangeToSegments = t.rangeToSegments;
	var formatDate = calendar.formatDate;
	
	
	// locals
	
	var table;
	var head;
	var headCells;
	var body;
	var bodyRows;
	var bodyCells;
	var bodyFirstCells;
	var firstRowCellInners;
	var firstRowCellContentInners;
	var daySegmentContainer;
	
	var viewWidth;
	var viewHeight;
	var colWidth;
	var weekNumberWidth;
	
	var rowCnt, colCnt;
	var showNumbers;
	var coordinateGrid;
	var hoverListener;
	var colPositions;
	var colContentPositions;
	
	var tm;
	var colFormat;
	var showWeekNumbers;
	var weekNumberTitle;
	var weekNumberFormat;
	
	
	
	/* Rendering
	------------------------------------------------------------*/
	
	
	disableTextSelection(element.addClass('fc-grid'));
	
	
	function renderBasic(_rowCnt, _colCnt, _showNumbers) {
		rowCnt = _rowCnt;
		colCnt = _colCnt;
		showNumbers = _showNumbers;
		updateOptions();

		if (!body) {
			buildEventContainer();
		}

		buildTable();
	}
	
	
	function updateOptions() {
		tm = opt('theme') ? 'ui' : 'fc';
		colFormat = opt('columnFormat');

		// week # options. (TODO: bad, logic also in other views)
		showWeekNumbers = opt('weekNumbers');
		weekNumberTitle = opt('weekNumberTitle');
		if (opt('weekNumberCalculation') != 'iso') {
			weekNumberFormat = "w";
		}
		else {
			weekNumberFormat = "W";
		}
	}
	
	
	function buildEventContainer() {
		daySegmentContainer =
			$("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>")
				.appendTo(element);
	}
	
	
	function buildTable() {
		var html = buildTableHTML();

		if (table) {
			table.remove();
		}
		table = $(html).appendTo(element);

		head = table.find('thead');
		headCells = head.find('.fc-day-header');
		body = table.find('tbody');
		bodyRows = body.find('tr');
		bodyCells = body.find('.fc-day');
		bodyFirstCells = bodyRows.find('td:first-child');

		firstRowCellInners = bodyRows.eq(0).find('.fc-day > div');
		firstRowCellContentInners = bodyRows.eq(0).find('.fc-day-content > div');
		
		markFirstLast(head.add(head.find('tr'))); // marks first+last tr/th's
		markFirstLast(bodyRows); // marks first+last td's
		bodyRows.eq(0).addClass('fc-first');
		bodyRows.filter(':last').addClass('fc-last');

		bodyCells.each(function(i, _cell) {
			var date = cellToDate(
				Math.floor(i / colCnt),
				i % colCnt
			);
			trigger('dayRender', t, date, $(_cell));
		});

		dayBind(bodyCells);
	}



	/* HTML Building
	-----------------------------------------------------------*/


	function buildTableHTML() {
		var html =
			"<table class='fc-border-separate' style='width:100%' cellspacing='0'>" +
			buildHeadHTML() +
			buildBodyHTML() +
			"</table>";

		return html;
	}


	function buildHeadHTML() {
		var headerClass = tm + "-widget-header";
		var html = '';
		var col;
		var date;

		html += "<thead><tr>";

		if (showWeekNumbers) {
			html +=
				"<th class='fc-week-number " + headerClass + "'>" +
				htmlEscape(weekNumberTitle) +
				"</th>";
		}

		for (col=0; col<colCnt; col++) {
			date = cellToDate(0, col);
			html +=
				"<th class='fc-day-header fc-" + dayIDs[date.getDay()] + " " + headerClass + "'>" +
				htmlEscape(formatDate(date, colFormat)) +
				"</th>";
		}

		html += "</tr></thead>";

		return html;
	}


	function buildBodyHTML() {
		var contentClass = tm + "-widget-content";
		var html = '';
		var row;
		var col;
		var date;

		html += "<tbody>";

		for (row=0; row<rowCnt; row++) {

			html += "<tr class='fc-week'>";

			if (showWeekNumbers) {
				date = cellToDate(row, 0);
				html +=
					"<td class='fc-week-number " + contentClass + "'>" +
					"<div>" +
					htmlEscape(formatDate(date, weekNumberFormat)) +
					"</div>" +
					"</td>";
			}

			for (col=0; col<colCnt; col++) {
				date = cellToDate(row, col);
				html += buildCellHTML(date);
			}

			html += "</tr>";
		}

		html += "</tbody>";

		return html;
	}


	function buildCellHTML(date) {
		var contentClass = tm + "-widget-content";
		var month = t.start.getMonth();
		var today = clearTime(new Date());
		var html = '';
		var classNames = [
			'fc-day',
			'fc-' + dayIDs[date.getDay()],
			contentClass
		];

		if (date.getMonth() != month) {
			classNames.push('fc-other-month');
		}
		if (+date == +today) {
			classNames.push(
				'fc-today',
				tm + '-state-highlight'
			);
		}
		else if (date < today) {
			classNames.push('fc-past');
		}
		else {
			classNames.push('fc-future');
		}

		html +=
			"<td" +
			" class='" + classNames.join(' ') + "'" +
			" data-date='" + formatDate(date, 'yyyy-MM-dd') + "'" +
			">" +
			"<div>";

		if (showNumbers) {
			html += "<div class='fc-day-number'>" + date.getDate() + "</div>";
		}

		html +=
			"<div class='fc-day-content'>" +
			"<div style='position:relative'>&nbsp;</div>" +
			"</div>" +
			"</div>" +
			"</td>";

		return html;
	}



	/* Dimensions
	-----------------------------------------------------------*/
	
	
	function setHeight(height) {
		viewHeight = height;
		
		var bodyHeight = viewHeight - head.height();
		var rowHeight;
		var rowHeightLast;
		var cell;
			
		if (opt('weekMode') == 'variable') {
			rowHeight = rowHeightLast = Math.floor(bodyHeight / (rowCnt==1 ? 2 : 6));
		}else{
			rowHeight = Math.floor(bodyHeight / rowCnt);
			rowHeightLast = bodyHeight - rowHeight * (rowCnt-1);
		}
		
		bodyFirstCells.each(function(i, _cell) {
			if (i < rowCnt) {
				cell = $(_cell);
				cell.find('> div').css(
					'min-height',
					(i==rowCnt-1 ? rowHeightLast : rowHeight) - vsides(cell)
				);
			}
		});
		
	}
	
	
	function setWidth(width) {
		viewWidth = width;
		colPositions.clear();
		colContentPositions.clear();

		weekNumberWidth = 0;
		if (showWeekNumbers) {
			weekNumberWidth = head.find('th.fc-week-number').outerWidth();
		}

		colWidth = Math.floor((viewWidth - weekNumberWidth) / colCnt);
		setOuterWidth(headCells.slice(0, -1), colWidth);
	}
	
	
	
	/* Day clicking and binding
	-----------------------------------------------------------*/
	
	
	function dayBind(days) {
		days.click(dayClick)
			.mousedown(daySelectionMousedown);
	}
	
	
	function dayClick(ev) {
		if (!opt('selectable')) { // if selectable, SelectionManager will worry about dayClick
			var date = parseISO8601($(this).data('date'));
			trigger('dayClick', this, date, true, ev);
		}
	}
	
	
	
	/* Semi-transparent Overlay Helpers
	------------------------------------------------------*/
	// TODO: should be consolidated with AgendaView's methods


	function renderDayOverlay(overlayStart, overlayEnd, refreshCoordinateGrid) { // overlayEnd is exclusive

		if (refreshCoordinateGrid) {
			coordinateGrid.build();
		}

		var segments = rangeToSegments(overlayStart, overlayEnd);

		for (var i=0; i<segments.length; i++) {
			var segment = segments[i];
			dayBind(
				renderCellOverlay(
					segment.row,
					segment.leftCol,
					segment.row,
					segment.rightCol
				)
			);
		}
	}

	
	function renderCellOverlay(row0, col0, row1, col1) { // row1,col1 is inclusive
		var rect = coordinateGrid.rect(row0, col0, row1, col1, element);
		return renderOverlay(rect, element);
	}
	
	
	
	/* Selection
	-----------------------------------------------------------------------*/
	
	
	function defaultSelectionEnd(startDate, allDay) {
		return cloneDate(startDate);
	}
	
	
	function renderSelection(startDate, endDate, allDay) {
		renderDayOverlay(startDate, addDays(cloneDate(endDate), 1), true); // rebuild every time???
	}
	
	
	function clearSelection() {
		clearOverlays();
	}
	
	
	function reportDayClick(date, allDay, ev) {
		var cell = dateToCell(date);
		var _element = bodyCells[cell.row*colCnt + cell.col];
		trigger('dayClick', _element, date, allDay, ev);
	}
	
	
	
	/* External Dragging
	-----------------------------------------------------------------------*/
	
	
	function dragStart(_dragElement, ev, ui) {
		hoverListener.start(function(cell) {
			clearOverlays();
			if (cell) {
				renderCellOverlay(cell.row, cell.col, cell.row, cell.col);
			}
		}, ev);
	}
	
	
	function dragStop(_dragElement, ev, ui) {
		var cell = hoverListener.stop();
		clearOverlays();
		if (cell) {
			var d = cellToDate(cell);
			trigger('drop', _dragElement, d, true, ev, ui);
		}
	}
	
	
	
	/* Utilities
	--------------------------------------------------------*/
	
	
	function defaultEventEnd(event) {
		return cloneDate(event.start);
	}
	
	
	coordinateGrid = new CoordinateGrid(function(rows, cols) {
		var e, n, p;
		headCells.each(function(i, _e) {
			e = $(_e);
			n = e.offset().left;
			if (i) {
				p[1] = n;
			}
			p = [n];
			cols[i] = p;
		});
		p[1] = n + e.outerWidth();
		bodyRows.each(function(i, _e) {
			if (i < rowCnt) {
				e = $(_e);
				n = e.offset().top;
				if (i) {
					p[1] = n;
				}
				p = [n];
				rows[i] = p;
			}
		});
		p[1] = n + e.outerHeight();
	});
	
	
	hoverListener = new HoverListener(coordinateGrid);
	
	colPositions = new HorizontalPositionCache(function(col) {
		return firstRowCellInners.eq(col);
	});

	colContentPositions = new HorizontalPositionCache(function(col) {
		return firstRowCellContentInners.eq(col);
	});


	function colLeft(col) {
		return colPositions.left(col);
	}


	function colRight(col) {
		return colPositions.right(col);
	}
	
	
	function colContentLeft(col) {
		return colContentPositions.left(col);
	}
	
	
	function colContentRight(col) {
		return colContentPositions.right(col);
	}
	
	
	function allDayRow(i) {
		return bodyRows.eq(i);
	}
	
}

;;

function BasicEventRenderer() {
	var t = this;
	
	
	// exports
	t.renderEvents = renderEvents;
	t.clearEvents = clearEvents;
	

	// imports
	DayEventRenderer.call(t);

	
	function renderEvents(events, modifiedEventId) {
		t.renderDayEvents(events, modifiedEventId);
	}
	
	
	function clearEvents() {
		t.getDaySegmentContainer().empty();
	}


	// TODO: have this class (and AgendaEventRenderer) be responsible for creating the event container div

}

;;

fcViews.agendaWeek = AgendaWeekView;

function AgendaWeekView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	AgendaView.call(t, element, calendar, 'agendaWeek');
	var opt = t.opt;
	var renderAgenda = t.renderAgenda;
	var skipHiddenDays = t.skipHiddenDays;
	var getCellsPerWeek = t.getCellsPerWeek;
	var formatDates = calendar.formatDates;

	
	function render(date, delta) {

		if (delta) {
			addDays(date, delta * 7);
		}

		var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));
		var end = addDays(cloneDate(start), 7);

		var visStart = cloneDate(start);
		skipHiddenDays(visStart);

		var visEnd = cloneDate(end);
		skipHiddenDays(visEnd, -1, true);

		var colCnt = getCellsPerWeek();

		t.title = formatDates(
			visStart,
			addDays(cloneDate(visEnd), -1),
			opt('titleFormat')
		);

		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;

		renderAgenda(colCnt);
	}

}

;;

fcViews.agendaDay = AgendaDayView;


function AgendaDayView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	AgendaView.call(t, element, calendar, 'agendaDay');
	var opt = t.opt;
	var renderAgenda = t.renderAgenda;
	var skipHiddenDays = t.skipHiddenDays;
	var formatDate = calendar.formatDate;
	
	
	function render(date, delta) {

		if (delta) {
			addDays(date, delta);
		}
		skipHiddenDays(date, delta < 0 ? -1 : 1);

		var start = cloneDate(date, true);
		var end = addDays(cloneDate(start), 1);

		t.title = formatDate(date, opt('titleFormat'));

		t.start = t.visStart = start;
		t.end = t.visEnd = end;

		renderAgenda(1);
	}
	

}

;;

setDefaults({
	allDaySlot: true,
	allDayText: 'all-day',
	firstHour: 6,
	slotMinutes: 30,
	defaultEventMinutes: 120,
	axisFormat: 'h(:mm)tt',
	timeFormat: {
		agenda: 'h:mm{ - h:mm}'
	},
	dragOpacity: {
		agenda: .5
	},
	minTime: 0,
	maxTime: 24,
	slotEventOverlap: true
});


// TODO: make it work in quirks mode (event corners, all-day height)
// TODO: test liquid width, especially in IE6


function AgendaView(element, calendar, viewName) {
	var t = this;
	
	
	// exports
	t.renderAgenda = renderAgenda;
	t.setWidth = setWidth;
	t.setHeight = setHeight;
	t.afterRender = afterRender;
	t.defaultEventEnd = defaultEventEnd;
	t.timePosition = timePosition;
	t.getIsCellAllDay = getIsCellAllDay;
	t.allDayRow = getAllDayRow;
	t.getCoordinateGrid = function() { return coordinateGrid }; // specifically for AgendaEventRenderer
	t.getHoverListener = function() { return hoverListener };
	t.colLeft = colLeft;
	t.colRight = colRight;
	t.colContentLeft = colContentLeft;
	t.colContentRight = colContentRight;
	t.getDaySegmentContainer = function() { return daySegmentContainer };
	t.getSlotSegmentContainer = function() { return slotSegmentContainer };
	t.getMinMinute = function() { return minMinute };
	t.getMaxMinute = function() { return maxMinute };
	t.getSlotContainer = function() { return slotContainer };
	t.getRowCnt = function() { return 1 };
	t.getColCnt = function() { return colCnt };
	t.getColWidth = function() { return colWidth };
	t.getSnapHeight = function() { return snapHeight };
	t.getSnapMinutes = function() { return snapMinutes };
	t.defaultSelectionEnd = defaultSelectionEnd;
	t.renderDayOverlay = renderDayOverlay;
	t.renderSelection = renderSelection;
	t.clearSelection = clearSelection;
	t.reportDayClick = reportDayClick; // selection mousedown hack
	t.dragStart = dragStart;
	t.dragStop = dragStop;
	
	
	// imports
	View.call(t, element, calendar, viewName);
	OverlayManager.call(t);
	SelectionManager.call(t);
	AgendaEventRenderer.call(t);
	var opt = t.opt;
	var trigger = t.trigger;
	var renderOverlay = t.renderOverlay;
	var clearOverlays = t.clearOverlays;
	var reportSelection = t.reportSelection;
	var unselect = t.unselect;
	var daySelectionMousedown = t.daySelectionMousedown;
	var slotSegHtml = t.slotSegHtml;
	var cellToDate = t.cellToDate;
	var dateToCell = t.dateToCell;
	var rangeToSegments = t.rangeToSegments;
	var formatDate = calendar.formatDate;
	
	
	// locals
	
	var dayTable;
	var dayHead;
	var dayHeadCells;
	var dayBody;
	var dayBodyCells;
	var dayBodyCellInners;
	var dayBodyCellContentInners;
	var dayBodyFirstCell;
	var dayBodyFirstCellStretcher;
	var slotLayer;
	var daySegmentContainer;
	var allDayTable;
	var allDayRow;
	var slotScroller;
	var slotContainer;
	var slotSegmentContainer;
	var slotTable;
	var selectionHelper;
	
	var viewWidth;
	var viewHeight;
	var axisWidth;
	var colWidth;
	var gutterWidth;
	var slotHeight; // TODO: what if slotHeight changes? (see issue 650)

	var snapMinutes;
	var snapRatio; // ratio of number of "selection" slots to normal slots. (ex: 1, 2, 4)
	var snapHeight; // holds the pixel hight of a "selection" slot
	
	var colCnt;
	var slotCnt;
	var coordinateGrid;
	var hoverListener;
	var colPositions;
	var colContentPositions;
	var slotTopCache = {};
	
	var tm;
	var rtl;
	var minMinute, maxMinute;
	var colFormat;
	var showWeekNumbers;
	var weekNumberTitle;
	var weekNumberFormat;
	

	
	/* Rendering
	-----------------------------------------------------------------------------*/
	
	
	disableTextSelection(element.addClass('fc-agenda'));
	
	
	function renderAgenda(c) {
		colCnt = c;
		updateOptions();

		if (!dayTable) { // first time rendering?
			buildSkeleton(); // builds day table, slot area, events containers
		}
		else {
			buildDayTable(); // rebuilds day table
		}
	}
	
	
	function updateOptions() {

		tm = opt('theme') ? 'ui' : 'fc';
		rtl = opt('isRTL')
		minMinute = parseTime(opt('minTime'));
		maxMinute = parseTime(opt('maxTime'));
		colFormat = opt('columnFormat');

		// week # options. (TODO: bad, logic also in other views)
		showWeekNumbers = opt('weekNumbers');
		weekNumberTitle = opt('weekNumberTitle');
		if (opt('weekNumberCalculation') != 'iso') {
			weekNumberFormat = "w";
		}
		else {
			weekNumberFormat = "W";
		}

		snapMinutes = opt('snapMinutes') || opt('slotMinutes');
	}



	/* Build DOM
	-----------------------------------------------------------------------*/


	function buildSkeleton() {
		var headerClass = tm + "-widget-header";
		var contentClass = tm + "-widget-content";
		var s;
		var d;
		var i;
		var maxd;
		var minutes;
		var slotNormal = opt('slotMinutes') % 15 == 0;
		
		buildDayTable();
		
		slotLayer =
			$("<div style='position:absolute;z-index:2;left:0;width:100%'/>")
				.appendTo(element);
				
		if (opt('allDaySlot')) {
		
			daySegmentContainer =
				$("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>")
					.appendTo(slotLayer);
		
			s =
				"<table style='width:100%' class='fc-agenda-allday' cellspacing='0'>" +
				"<tr>" +
				"<th class='" + headerClass + " fc-agenda-axis'>" + opt('allDayText') + "</th>" +
				"<td>" +
				"<div class='fc-day-content'><div style='position:relative'/></div>" +
				"</td>" +
				"<th class='" + headerClass + " fc-agenda-gutter'>&nbsp;</th>" +
				"</tr>" +
				"</table>";
			allDayTable = $(s).appendTo(slotLayer);
			allDayRow = allDayTable.find('tr');
			
			dayBind(allDayRow.find('td'));
			
			slotLayer.append(
				"<div class='fc-agenda-divider " + headerClass + "'>" +
				"<div class='fc-agenda-divider-inner'/>" +
				"</div>"
			);
			
		}else{
		
			daySegmentContainer = $([]); // in jQuery 1.4, we can just do $()
		
		}
		
		slotScroller =
			$("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>")
				.appendTo(slotLayer);
				
		slotContainer =
			$("<div style='position:relative;width:100%;overflow:hidden'/>")
				.appendTo(slotScroller);
				
		slotSegmentContainer =
			$("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>")
				.appendTo(slotContainer);
		
		s =
			"<table class='fc-agenda-slots' style='width:100%' cellspacing='0'>" +
			"<tbody>";
		d = zeroDate();
		maxd = addMinutes(cloneDate(d), maxMinute);
		addMinutes(d, minMinute);
		slotCnt = 0;
		for (i=0; d < maxd; i++) {
			minutes = d.getMinutes();
			s +=
				"<tr class='fc-slot" + i + ' ' + (!minutes ? '' : 'fc-minor') + "'>" +
				"<th class='fc-agenda-axis " + headerClass + "'>" +
				((!slotNormal || !minutes) ? formatDate(d, opt('axisFormat')) : '&nbsp;') +
				"</th>" +
				"<td class='" + contentClass + "'>" +
				"<div style='position:relative'>&nbsp;</div>" +
				"</td>" +
				"</tr>";
			addMinutes(d, opt('slotMinutes'));
			slotCnt++;
		}
		s +=
			"</tbody>" +
			"</table>";
		slotTable = $(s).appendTo(slotContainer);
		
		slotBind(slotTable.find('td'));
	}



	/* Build Day Table
	-----------------------------------------------------------------------*/


	function buildDayTable() {
		var html = buildDayTableHTML();

		if (dayTable) {
			dayTable.remove();
		}
		dayTable = $(html).appendTo(element);

		dayHead = dayTable.find('thead');
		dayHeadCells = dayHead.find('th').slice(1, -1); // exclude gutter
		dayBody = dayTable.find('tbody');
		dayBodyCells = dayBody.find('td').slice(0, -1); // exclude gutter
		dayBodyCellInners = dayBodyCells.find('> div');
		dayBodyCellContentInners = dayBodyCells.find('.fc-day-content > div');

		dayBodyFirstCell = dayBodyCells.eq(0);
		dayBodyFirstCellStretcher = dayBodyCellInners.eq(0);
		
		markFirstLast(dayHead.add(dayHead.find('tr')));
		markFirstLast(dayBody.add(dayBody.find('tr')));

		// TODO: now that we rebuild the cells every time, we should call dayRender
	}


	function buildDayTableHTML() {
		var html =
			"<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>" +
			buildDayTableHeadHTML() +
			buildDayTableBodyHTML() +
			"</table>";

		return html;
	}


	function buildDayTableHeadHTML() {
		var headerClass = tm + "-widget-header";
		var date;
		var html = '';
		var weekText;
		var col;

		html +=
			"<thead>" +
			"<tr>";

		if (showWeekNumbers) {
			date = cellToDate(0, 0);
			weekText = formatDate(date, weekNumberFormat);
			if (rtl) {
				weekText += weekNumberTitle;
			}
			else {
				weekText = weekNumberTitle + weekText;
			}
			html +=
				"<th class='fc-agenda-axis fc-week-number " + headerClass + "'>" +
				htmlEscape(weekText) +
				"</th>";
		}
		else {
			html += "<th class='fc-agenda-axis " + headerClass + "'>&nbsp;</th>";
		}

		for (col=0; col<colCnt; col++) {
			date = cellToDate(0, col);
			html +=
				"<th class='fc-" + dayIDs[date.getDay()] + " fc-col" + col + ' ' + headerClass + "'>" +
				htmlEscape(formatDate(date, colFormat)) +
				"</th>";
		}

		html +=
			"<th class='fc-agenda-gutter " + headerClass + "'>&nbsp;</th>" +
			"</tr>" +
			"</thead>";

		return html;
	}


	function buildDayTableBodyHTML() {
		var headerClass = tm + "-widget-header"; // TODO: make these when updateOptions() called
		var contentClass = tm + "-widget-content";
		var date;
		var today = clearTime(new Date());
		var col;
		var cellsHTML;
		var cellHTML;
		var classNames;
		var html = '';

		html +=
			"<tbody>" +
			"<tr>" +
			"<th class='fc-agenda-axis " + headerClass + "'>&nbsp;</th>";

		cellsHTML = '';

		for (col=0; col<colCnt; col++) {

			date = cellToDate(0, col);

			classNames = [
				'fc-col' + col,
				'fc-' + dayIDs[date.getDay()],
				contentClass
			];
			if (+date == +today) {
				classNames.push(
					tm + '-state-highlight',
					'fc-today'
				);
			}
			else if (date < today) {
				classNames.push('fc-past');
			}
			else {
				classNames.push('fc-future');
			}

			cellHTML =
				"<td class='" + classNames.join(' ') + "'>" +
				"<div>" +
				"<div class='fc-day-content'>" +
				"<div style='position:relative'>&nbsp;</div>" +
				"</div>" +
				"</div>" +
				"</td>";

			cellsHTML += cellHTML;
		}

		html += cellsHTML;
		html +=
			"<td class='fc-agenda-gutter " + contentClass + "'>&nbsp;</td>" +
			"</tr>" +
			"</tbody>";

		return html;
	}


	// TODO: data-date on the cells

	
	
	/* Dimensions
	-----------------------------------------------------------------------*/

	
	function setHeight(height) {
		if (height === undefined) {
			height = viewHeight;
		}
		viewHeight = height;
		slotTopCache = {};
	
		var headHeight = dayBody.position().top;
		var allDayHeight = slotScroller.position().top; // including divider
		var bodyHeight = Math.min( // total body height, including borders
			height - headHeight,   // when scrollbars
			slotTable.height() + allDayHeight + 1 // when no scrollbars. +1 for bottom border
		);

		dayBodyFirstCellStretcher
			.height(bodyHeight - vsides(dayBodyFirstCell));
		
		slotLayer.css('top', headHeight);
		
		slotScroller.height(bodyHeight - allDayHeight - 1);
		
		// the stylesheet guarantees that the first row has no border.
		// this allows .height() to work well cross-browser.
		slotHeight = slotTable.find('tr:first').height() + 1; // +1 for bottom border

		snapRatio = opt('slotMinutes') / snapMinutes;
		snapHeight = slotHeight / snapRatio;
	}
	
	
	function setWidth(width) {
		viewWidth = width;
		colPositions.clear();
		colContentPositions.clear();

		var axisFirstCells = dayHead.find('th:first');
		if (allDayTable) {
			axisFirstCells = axisFirstCells.add(allDayTable.find('th:first'));
		}
		axisFirstCells = axisFirstCells.add(slotTable.find('th:first'));
		
		axisWidth = 0;
		setOuterWidth(
			axisFirstCells
				.width('')
				.each(function(i, _cell) {
					axisWidth = Math.max(axisWidth, $(_cell).outerWidth());
				}),
			axisWidth
		);
		
		var gutterCells = dayTable.find('.fc-agenda-gutter');
		if (allDayTable) {
			gutterCells = gutterCells.add(allDayTable.find('th.fc-agenda-gutter'));
		}

		var slotTableWidth = slotScroller[0].clientWidth; // needs to be done after axisWidth (for IE7)
		
		gutterWidth = slotScroller.width() - slotTableWidth;
		if (gutterWidth) {
			setOuterWidth(gutterCells, gutterWidth);
			gutterCells
				.show()
				.prev()
				.removeClass('fc-last');
		}else{
			gutterCells
				.hide()
				.prev()
				.addClass('fc-last');
		}
		
		colWidth = Math.floor((slotTableWidth - axisWidth) / colCnt);
		setOuterWidth(dayHeadCells.slice(0, -1), colWidth);
	}
	


	/* Scrolling
	-----------------------------------------------------------------------*/


	function resetScroll() {
		var d0 = zeroDate();
		var scrollDate = cloneDate(d0);
		scrollDate.setHours(opt('firstHour'));
		var top = timePosition(d0, scrollDate) + 1; // +1 for the border
		function scroll() {
			slotScroller.scrollTop(top);
		}
		scroll();
		setTimeout(scroll, 0); // overrides any previous scroll state made by the browser
	}


	function afterRender() { // after the view has been freshly rendered and sized
		resetScroll();
	}
	
	
	
	/* Slot/Day clicking and binding
	-----------------------------------------------------------------------*/
	

	function dayBind(cells) {
		cells.click(slotClick)
			.mousedown(daySelectionMousedown);
	}


	function slotBind(cells) {
		cells.click(slotClick)
			.mousedown(slotSelectionMousedown);
	}
	
	
	function slotClick(ev) {
		if (!opt('selectable')) { // if selectable, SelectionManager will worry about dayClick
			var col = Math.min(colCnt-1, Math.floor((ev.pageX - dayTable.offset().left - axisWidth) / colWidth));
			var date = cellToDate(0, col);
			var rowMatch = this.parentNode.className.match(/fc-slot(\d+)/); // TODO: maybe use data
			if (rowMatch) {
				var mins = parseInt(rowMatch[1]) * opt('slotMinutes');
				var hours = Math.floor(mins/60);
				date.setHours(hours);
				date.setMinutes(mins%60 + minMinute);
				trigger('dayClick', dayBodyCells[col], date, false, ev);
			}else{
				trigger('dayClick', dayBodyCells[col], date, true, ev);
			}
		}
	}
	
	
	
	/* Semi-transparent Overlay Helpers
	-----------------------------------------------------*/
	// TODO: should be consolidated with BasicView's methods


	function renderDayOverlay(overlayStart, overlayEnd, refreshCoordinateGrid) { // overlayEnd is exclusive

		if (refreshCoordinateGrid) {
			coordinateGrid.build();
		}

		var segments = rangeToSegments(overlayStart, overlayEnd);

		for (var i=0; i<segments.length; i++) {
			var segment = segments[i];
			dayBind(
				renderCellOverlay(
					segment.row,
					segment.leftCol,
					segment.row,
					segment.rightCol
				)
			);
		}
	}
	
	
	function renderCellOverlay(row0, col0, row1, col1) { // only for all-day?
		var rect = coordinateGrid.rect(row0, col0, row1, col1, slotLayer);
		return renderOverlay(rect, slotLayer);
	}
	

	function renderSlotOverlay(overlayStart, overlayEnd) {
		for (var i=0; i<colCnt; i++) {
			var dayStart = cellToDate(0, i);
			var dayEnd = addDays(cloneDate(dayStart), 1);
			var stretchStart = new Date(Math.max(dayStart, overlayStart));
			var stretchEnd = new Date(Math.min(dayEnd, overlayEnd));
			if (stretchStart < stretchEnd) {
				var rect = coordinateGrid.rect(0, i, 0, i, slotContainer); // only use it for horizontal coords
				var top = timePosition(dayStart, stretchStart);
				var bottom = timePosition(dayStart, stretchEnd);
				rect.top = top;
				rect.height = bottom - top;
				slotBind(
					renderOverlay(rect, slotContainer)
				);
			}
		}
	}
	
	
	
	/* Coordinate Utilities
	-----------------------------------------------------------------------------*/
	
	
	coordinateGrid = new CoordinateGrid(function(rows, cols) {
		var e, n, p;
		dayHeadCells.each(function(i, _e) {
			e = $(_e);
			n = e.offset().left;
			if (i) {
				p[1] = n;
			}
			p = [n];
			cols[i] = p;
		});
		p[1] = n + e.outerWidth();
		if (opt('allDaySlot')) {
			e = allDayRow;
			n = e.offset().top;
			rows[0] = [n, n+e.outerHeight()];
		}
		var slotTableTop = slotContainer.offset().top;
		var slotScrollerTop = slotScroller.offset().top;
		var slotScrollerBottom = slotScrollerTop + slotScroller.outerHeight();
		function constrain(n) {
			return Math.max(slotScrollerTop, Math.min(slotScrollerBottom, n));
		}
		for (var i=0; i<slotCnt*snapRatio; i++) { // adapt slot count to increased/decreased selection slot count
			rows.push([
				constrain(slotTableTop + snapHeight*i),
				constrain(slotTableTop + snapHeight*(i+1))
			]);
		}
	});
	
	
	hoverListener = new HoverListener(coordinateGrid);
	
	colPositions = new HorizontalPositionCache(function(col) {
		return dayBodyCellInners.eq(col);
	});
	
	colContentPositions = new HorizontalPositionCache(function(col) {
		return dayBodyCellContentInners.eq(col);
	});
	
	
	function colLeft(col) {
		return colPositions.left(col);
	}


	function colContentLeft(col) {
		return colContentPositions.left(col);
	}


	function colRight(col) {
		return colPositions.right(col);
	}
	
	
	function colContentRight(col) {
		return colContentPositions.right(col);
	}


	function getIsCellAllDay(cell) {
		return opt('allDaySlot') && !cell.row;
	}


	function realCellToDate(cell) { // ugh "real" ... but blame it on our abuse of the "cell" system
		var d = cellToDate(0, cell.col);
		var slotIndex = cell.row;
		if (opt('allDaySlot')) {
			slotIndex--;
		}
		if (slotIndex >= 0) {
			addMinutes(d, minMinute + slotIndex * snapMinutes);
		}
		return d;
	}
	
	
	// get the Y coordinate of the given time on the given day (both Date objects)
	function timePosition(day, time) { // both date objects. day holds 00:00 of current day
		day = cloneDate(day, true);
		if (time < addMinutes(cloneDate(day), minMinute)) {
			return 0;
		}
		if (time >= addMinutes(cloneDate(day), maxMinute)) {
			return slotTable.height();
		}
		var slotMinutes = opt('slotMinutes'),
			minutes = time.getHours()*60 + time.getMinutes() - minMinute,
			slotI = Math.floor(minutes / slotMinutes),
			slotTop = slotTopCache[slotI];
		if (slotTop === undefined) {
			slotTop = slotTopCache[slotI] =
				slotTable.find('tr').eq(slotI).find('td div')[0].offsetTop;
				// .eq() is faster than ":eq()" selector
				// [0].offsetTop is faster than .position().top (do we really need this optimization?)
				// a better optimization would be to cache all these divs
		}
		return Math.max(0, Math.round(
			slotTop - 1 + slotHeight * ((minutes % slotMinutes) / slotMinutes)
		));
	}
	
	
	function getAllDayRow(index) {
		return allDayRow;
	}
	
	
	function defaultEventEnd(event) {
		var start = cloneDate(event.start);
		if (event.allDay) {
			return start;
		}
		return addMinutes(start, opt('defaultEventMinutes'));
	}
	
	
	
	/* Selection
	---------------------------------------------------------------------------------*/
	
	
	function defaultSelectionEnd(startDate, allDay) {
		if (allDay) {
			return cloneDate(startDate);
		}
		return addMinutes(cloneDate(startDate), opt('slotMinutes'));
	}
	
	
	function renderSelection(startDate, endDate, allDay) { // only for all-day
		if (allDay) {
			if (opt('allDaySlot')) {
				renderDayOverlay(startDate, addDays(cloneDate(endDate), 1), true);
			}
		}else{
			renderSlotSelection(startDate, endDate);
		}
	}
	
	
	function renderSlotSelection(startDate, endDate) {
		var helperOption = opt('selectHelper');
		coordinateGrid.build();
		if (helperOption) {
			var col = dateToCell(startDate).col;
			if (col >= 0 && col < colCnt) { // only works when times are on same day
				var rect = coordinateGrid.rect(0, col, 0, col, slotContainer); // only for horizontal coords
				var top = timePosition(startDate, startDate);
				var bottom = timePosition(startDate, endDate);
				if (bottom > top) { // protect against selections that are entirely before or after visible range
					rect.top = top;
					rect.height = bottom - top;
					rect.left += 2;
					rect.width -= 5;
					if ($.isFunction(helperOption)) {
						var helperRes = helperOption(startDate, endDate);
						if (helperRes) {
							rect.position = 'absolute';
							selectionHelper = $(helperRes)
								.css(rect)
								.appendTo(slotContainer);
						}
					}else{
						rect.isStart = true; // conside rect a "seg" now
						rect.isEnd = true;   //
						selectionHelper = $(slotSegHtml(
							{
								title: '',
								start: startDate,
								end: endDate,
								className: ['fc-select-helper'],
								editable: false
							},
							rect
						));
						selectionHelper.css('opacity', opt('dragOpacity'));
					}
					if (selectionHelper) {
						slotBind(selectionHelper);
						slotContainer.append(selectionHelper);
						setOuterWidth(selectionHelper, rect.width, true); // needs to be after appended
						setOuterHeight(selectionHelper, rect.height, true);
					}
				}
			}
		}else{
			renderSlotOverlay(startDate, endDate);
		}
	}
	
	
	function clearSelection() {
		clearOverlays();
		if (selectionHelper) {
			selectionHelper.remove();
			selectionHelper = null;
		}
	}
	
	
	function slotSelectionMousedown(ev) {
		if (ev.which == 1 && opt('selectable')) { // ev.which==1 means left mouse button
			unselect(ev);
			var dates;
			hoverListener.start(function(cell, origCell) {
				clearSelection();
				if (cell && cell.col == origCell.col && !getIsCellAllDay(cell)) {
					var d1 = realCellToDate(origCell);
					var d2 = realCellToDate(cell);
					dates = [
						d1,
						addMinutes(cloneDate(d1), snapMinutes), // calculate minutes depending on selection slot minutes 
						d2,
						addMinutes(cloneDate(d2), snapMinutes)
					].sort(dateCompare);
					renderSlotSelection(dates[0], dates[3]);
				}else{
					dates = null;
				}
			}, ev);
			$(document).one('mouseup', function(ev) {
				hoverListener.stop();
				if (dates) {
					if (+dates[0] == +dates[1]) {
						reportDayClick(dates[0], false, ev);
					}
					reportSelection(dates[0], dates[3], false, ev);
				}
			});
		}
	}


	function reportDayClick(date, allDay, ev) {
		trigger('dayClick', dayBodyCells[dateToCell(date).col], date, allDay, ev);
	}
	
	
	
	/* External Dragging
	--------------------------------------------------------------------------------*/
	
	
	function dragStart(_dragElement, ev, ui) {
		hoverListener.start(function(cell) {
			clearOverlays();
			if (cell) {
				if (getIsCellAllDay(cell)) {
					renderCellOverlay(cell.row, cell.col, cell.row, cell.col);
				}else{
					var d1 = realCellToDate(cell);
					var d2 = addMinutes(cloneDate(d1), opt('defaultEventMinutes'));
					renderSlotOverlay(d1, d2);
				}
			}
		}, ev);
	}
	
	
	function dragStop(_dragElement, ev, ui) {
		var cell = hoverListener.stop();
		clearOverlays();
		if (cell) {
			trigger('drop', _dragElement, realCellToDate(cell), getIsCellAllDay(cell), ev, ui);
		}
	}
	

}

;;

function AgendaEventRenderer() {
	var t = this;
	
	
	// exports
	t.renderEvents = renderEvents;
	t.clearEvents = clearEvents;
	t.slotSegHtml = slotSegHtml;
	
	
	// imports
	DayEventRenderer.call(t);
	var opt = t.opt;
	var trigger = t.trigger;
	var isEventDraggable = t.isEventDraggable;
	var isEventResizable = t.isEventResizable;
	var eventEnd = t.eventEnd;
	var eventElementHandlers = t.eventElementHandlers;
	var setHeight = t.setHeight;
	var getDaySegmentContainer = t.getDaySegmentContainer;
	var getSlotSegmentContainer = t.getSlotSegmentContainer;
	var getHoverListener = t.getHoverListener;
	var getMaxMinute = t.getMaxMinute;
	var getMinMinute = t.getMinMinute;
	var timePosition = t.timePosition;
	var getIsCellAllDay = t.getIsCellAllDay;
	var colContentLeft = t.colContentLeft;
	var colContentRight = t.colContentRight;
	var cellToDate = t.cellToDate;
	var getColCnt = t.getColCnt;
	var getColWidth = t.getColWidth;
	var getSnapHeight = t.getSnapHeight;
	var getSnapMinutes = t.getSnapMinutes;
	var getSlotContainer = t.getSlotContainer;
	var reportEventElement = t.reportEventElement;
	var showEvents = t.showEvents;
	var hideEvents = t.hideEvents;
	var eventDrop = t.eventDrop;
	var eventResize = t.eventResize;
	var renderDayOverlay = t.renderDayOverlay;
	var clearOverlays = t.clearOverlays;
	var renderDayEvents = t.renderDayEvents;
	var calendar = t.calendar;
	var formatDate = calendar.formatDate;
	var formatDates = calendar.formatDates;


	// overrides
	t.draggableDayEvent = draggableDayEvent;

	
	
	/* Rendering
	----------------------------------------------------------------------------*/
	

	function renderEvents(events, modifiedEventId) {
		var i, len=events.length,
			dayEvents=[],
			slotEvents=[];
		for (i=0; i<len; i++) {
			if (events[i].allDay) {
				dayEvents.push(events[i]);
			}else{
				slotEvents.push(events[i]);
			}
		}

		if (opt('allDaySlot')) {
			renderDayEvents(dayEvents, modifiedEventId);
			setHeight(); // no params means set to viewHeight
		}

		renderSlotSegs(compileSlotSegs(slotEvents), modifiedEventId);
	}
	
	
	function clearEvents() {
		getDaySegmentContainer().empty();
		getSlotSegmentContainer().empty();
	}

	
	function compileSlotSegs(events) {
		var colCnt = getColCnt(),
			minMinute = getMinMinute(),
			maxMinute = getMaxMinute(),
			d,
			visEventEnds = $.map(events, slotEventEnd),
			i,
			j, seg,
			colSegs,
			segs = [];

		for (i=0; i<colCnt; i++) {

			d = cellToDate(0, i);
			addMinutes(d, minMinute);

			colSegs = sliceSegs(
				events,
				visEventEnds,
				d,
				addMinutes(cloneDate(d), maxMinute-minMinute)
			);

			colSegs = placeSlotSegs(colSegs); // returns a new order

			for (j=0; j<colSegs.length; j++) {
				seg = colSegs[j];
				seg.col = i;
				segs.push(seg);
			}
		}

		return segs;
	}


	function sliceSegs(events, visEventEnds, start, end) {
		var segs = [],
			i, len=events.length, event,
			eventStart, eventEnd,
			segStart, segEnd,
			isStart, isEnd;
		for (i=0; i<len; i++) {
			event = events[i];
			eventStart = event.start;
			eventEnd = visEventEnds[i];
			if (eventEnd > start && eventStart < end) {
				if (eventStart < start) {
					segStart = cloneDate(start);
					isStart = false;
				}else{
					segStart = eventStart;
					isStart = true;
				}
				if (eventEnd > end) {
					segEnd = cloneDate(end);
					isEnd = false;
				}else{
					segEnd = eventEnd;
					isEnd = true;
				}
				segs.push({
					event: event,
					start: segStart,
					end: segEnd,
					isStart: isStart,
					isEnd: isEnd
				});
			}
		}
		return segs.sort(compareSlotSegs);
	}


	function slotEventEnd(event) {
		if (event.end) {
			return cloneDate(event.end);
		}else{
			return addMinutes(cloneDate(event.start), opt('defaultEventMinutes'));
		}
	}
	
	
	// renders events in the 'time slots' at the bottom
	// TODO: when we refactor this, when user returns `false` eventRender, don't have empty space
	// TODO: refactor will include using pixels to detect collisions instead of dates (handy for seg cmp)
	
	function renderSlotSegs(segs, modifiedEventId) {
	
		var i, segCnt=segs.length, seg,
			event,
			top,
			bottom,
			columnLeft,
			columnRight,
			columnWidth,
			width,
			left,
			right,
			html = '',
			eventElements,
			eventElement,
			triggerRes,
			titleElement,
			height,
			slotSegmentContainer = getSlotSegmentContainer(),
			isRTL = opt('isRTL');
			
		// calculate position/dimensions, create html
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			event = seg.event;
			top = timePosition(seg.start, seg.start);
			bottom = timePosition(seg.start, seg.end);
			columnLeft = colContentLeft(seg.col);
			columnRight = colContentRight(seg.col);
			columnWidth = columnRight - columnLeft;

			// shave off space on right near scrollbars (2.5%)
			// TODO: move this to CSS somehow
			columnRight -= columnWidth * .025;
			columnWidth = columnRight - columnLeft;

			width = columnWidth * (seg.forwardCoord - seg.backwardCoord);

			if (opt('slotEventOverlap')) {
				// double the width while making sure resize handle is visible
				// (assumed to be 20px wide)
				width = Math.max(
					(width - (20/2)) * 2,
					width // narrow columns will want to make the segment smaller than
						// the natural width. don't allow it
				);
			}

			if (isRTL) {
				right = columnRight - seg.backwardCoord * columnWidth;
				left = right - width;
			}
			else {
				left = columnLeft + seg.backwardCoord * columnWidth;
				right = left + width;
			}

			// make sure horizontal coordinates are in bounds
			left = Math.max(left, columnLeft);
			right = Math.min(right, columnRight);
			width = right - left;

			seg.top = top;
			seg.left = left;
			seg.outerWidth = width;
			seg.outerHeight = bottom - top;
			html += slotSegHtml(event, seg);
		}

		slotSegmentContainer[0].innerHTML = html; // faster than html()
		eventElements = slotSegmentContainer.children();
		
		// retrieve elements, run through eventRender callback, bind event handlers
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			event = seg.event;
			eventElement = $(eventElements[i]); // faster than eq()
			triggerRes = trigger('eventRender', event, event, eventElement);
			if (triggerRes === false) {
				eventElement.remove();
			}else{
				if (triggerRes && triggerRes !== true) {
					eventElement.remove();
					eventElement = $(triggerRes)
						.css({
							position: 'absolute',
							top: seg.top,
							left: seg.left
						})
						.appendTo(slotSegmentContainer);
				}
				seg.element = eventElement;
				if (event._id === modifiedEventId) {
					bindSlotSeg(event, eventElement, seg);
				}else{
					eventElement[0]._fci = i; // for lazySegBind
				}
				reportEventElement(event, eventElement);
			}
		}
		
		lazySegBind(slotSegmentContainer, segs, bindSlotSeg);
		
		// record event sides and title positions
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			if (eventElement = seg.element) {
				seg.vsides = vsides(eventElement, true);
				seg.hsides = hsides(eventElement, true);
				titleElement = eventElement.find('.fc-event-title');
				if (titleElement.length) {
					seg.contentTop = titleElement[0].offsetTop;
				}
			}
		}
		
		// set all positions/dimensions at once
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			if (eventElement = seg.element) {
				eventElement[0].style.width = Math.max(0, seg.outerWidth - seg.hsides) + 'px';
				height = Math.max(0, seg.outerHeight - seg.vsides);
				eventElement[0].style.height = height + 'px';
				event = seg.event;
				if (seg.contentTop !== undefined && height - seg.contentTop < 10) {
					// not enough room for title, put it in the time (TODO: maybe make both display:inline instead)
					eventElement.find('div.fc-event-time')
						.text(formatDate(event.start, opt('timeFormat')) + ' - ' + event.title);
					eventElement.find('div.fc-event-title')
						.remove();
				}
				trigger('eventAfterRender', event, event, eventElement);
			}
		}
					
	}
	
	
	function slotSegHtml(event, seg) {
		var html = "<";
		var url = event.url;
		var skinCss = getSkinCss(event, opt);
		var classes = ['fc-event', 'fc-event-vert'];
		if (isEventDraggable(event)) {
			classes.push('fc-event-draggable');
		}
		if (seg.isStart) {
			classes.push('fc-event-start');
		}
		if (seg.isEnd) {
			classes.push('fc-event-end');
		}
		classes = classes.concat(event.className);
		if (event.source) {
			classes = classes.concat(event.source.className || []);
		}
		if (url) {
			html += "a href='" + htmlEscape(event.url) + "'";
		}else{
			html += "div";
		}
		html +=
			" class='" + classes.join(' ') + "'" +
			" style=" +
				"'" +
				"position:absolute;" +
				"top:" + seg.top + "px;" +
				"left:" + seg.left + "px;" +
				skinCss +
				"'" +
			">" +
			"<div class='fc-event-inner'>" +
			"<div class='fc-event-time'>" +
			htmlEscape(formatDates(event.start, event.end, opt('timeFormat'))) +
			"</div>" +
			"<div class='fc-event-title'>" +
			htmlEscape(event.title || '') +
			"</div>" +
			"</div>" +
			"<div class='fc-event-bg'></div>";
		if (seg.isEnd && isEventResizable(event)) {
			html +=
				"<div class='ui-resizable-handle ui-resizable-s'>=</div>";
		}
		html +=
			"</" + (url ? "a" : "div") + ">";
		return html;
	}
	
	
	function bindSlotSeg(event, eventElement, seg) {
		var timeElement = eventElement.find('div.fc-event-time');
		if (isEventDraggable(event)) {
			draggableSlotEvent(event, eventElement, timeElement);
		}
		if (seg.isEnd && isEventResizable(event)) {
			resizableSlotEvent(event, eventElement, timeElement);
		}
		eventElementHandlers(event, eventElement);
	}
	
	
	
	/* Dragging
	-----------------------------------------------------------------------------------*/
	
	
	// when event starts out FULL-DAY
	// overrides DayEventRenderer's version because it needs to account for dragging elements
	// to and from the slot area.
	
	function draggableDayEvent(event, eventElement, seg) {
		var isStart = seg.isStart;
		var origWidth;
		var revert;
		var allDay = true;
		var dayDelta;
		var hoverListener = getHoverListener();
		var colWidth = getColWidth();
		var snapHeight = getSnapHeight();
		var snapMinutes = getSnapMinutes();
		var minMinute = getMinMinute();
		eventElement.draggable({
			opacity: opt('dragOpacity', 'month'), // use whatever the month view was using
			revertDuration: opt('dragRevertDuration'),
			start: function(ev, ui) {
				trigger('eventDragStart', eventElement, event, ev, ui);
				hideEvents(event, eventElement);
				origWidth = eventElement.width();
				hoverListener.start(function(cell, origCell) {
					clearOverlays();
					if (cell) {
						revert = false;
						var origDate = cellToDate(0, origCell.col);
						var date = cellToDate(0, cell.col);
						dayDelta = dayDiff(date, origDate);
						if (!cell.row) {
							// on full-days
							renderDayOverlay(
								addDays(cloneDate(event.start), dayDelta),
								addDays(exclEndDay(event), dayDelta)
							);
							resetElement();
						}else{
							// mouse is over bottom slots
							if (isStart) {
								if (allDay) {
									// convert event to temporary slot-event
									eventElement.width(colWidth - 10); // don't use entire width
									setOuterHeight(
										eventElement,
										snapHeight * Math.round(
											(event.end ? ((event.end - event.start) / MINUTE_MS) : opt('defaultEventMinutes')) /
												snapMinutes
										)
									);
									eventElement.draggable('option', 'grid', [colWidth, 1]);
									allDay = false;
								}
							}else{
								revert = true;
							}
						}
						revert = revert || (allDay && !dayDelta);
					}else{
						resetElement();
						revert = true;
					}
					eventElement.draggable('option', 'revert', revert);
				}, ev, 'drag');
			},
			stop: function(ev, ui) {
				hoverListener.stop();
				clearOverlays();
				trigger('eventDragStop', eventElement, event, ev, ui);
				if (revert) {
					// hasn't moved or is out of bounds (draggable has already reverted)
					resetElement();
					eventElement.css('filter', ''); // clear IE opacity side-effects
					showEvents(event, eventElement);
				}else{
					// changed!
					var minuteDelta = 0;
					if (!allDay) {
						minuteDelta = Math.round((eventElement.offset().top - getSlotContainer().offset().top) / snapHeight)
							* snapMinutes
							+ minMinute
							- (event.start.getHours() * 60 + event.start.getMinutes());
					}
					eventDrop(this, event, dayDelta, minuteDelta, allDay, ev, ui);
				}
			}
		});
		function resetElement() {
			if (!allDay) {
				eventElement
					.width(origWidth)
					.height('')
					.draggable('option', 'grid', null);
				allDay = true;
			}
		}
	}
	
	
	// when event starts out IN TIMESLOTS
	
	function draggableSlotEvent(event, eventElement, timeElement) {
		var coordinateGrid = t.getCoordinateGrid();
		var colCnt = getColCnt();
		var colWidth = getColWidth();
		var snapHeight = getSnapHeight();
		var snapMinutes = getSnapMinutes();

		// states
		var origPosition; // original position of the element, not the mouse
		var origCell;
		var isInBounds, prevIsInBounds;
		var isAllDay, prevIsAllDay;
		var colDelta, prevColDelta;
		var dayDelta; // derived from colDelta
		var minuteDelta, prevMinuteDelta;

		eventElement.draggable({
			scroll: false,
			grid: [ colWidth, snapHeight ],
			axis: colCnt==1 ? 'y' : false,
			opacity: opt('dragOpacity'),
			revertDuration: opt('dragRevertDuration'),
			start: function(ev, ui) {

				trigger('eventDragStart', eventElement, event, ev, ui);
				hideEvents(event, eventElement);

				coordinateGrid.build();

				// initialize states
				origPosition = eventElement.position();
				origCell = coordinateGrid.cell(ev.pageX, ev.pageY);
				isInBounds = prevIsInBounds = true;
				isAllDay = prevIsAllDay = getIsCellAllDay(origCell);
				colDelta = prevColDelta = 0;
				dayDelta = 0;
				minuteDelta = prevMinuteDelta = 0;

			},
			drag: function(ev, ui) {

				// NOTE: this `cell` value is only useful for determining in-bounds and all-day.
				// Bad for anything else due to the discrepancy between the mouse position and the
				// element position while snapping. (problem revealed in PR #55)
				//
				// PS- the problem exists for draggableDayEvent() when dragging an all-day event to a slot event.
				// We should overhaul the dragging system and stop relying on jQuery UI.
				var cell = coordinateGrid.cell(ev.pageX, ev.pageY);

				// update states
				isInBounds = !!cell;
				if (isInBounds) {
					isAllDay = getIsCellAllDay(cell);

					// calculate column delta
					colDelta = Math.round((ui.position.left - origPosition.left) / colWidth);
					if (colDelta != prevColDelta) {
						// calculate the day delta based off of the original clicked column and the column delta
						var origDate = cellToDate(0, origCell.col);
						var col = origCell.col + colDelta;
						col = Math.max(0, col);
						col = Math.min(colCnt-1, col);
						var date = cellToDate(0, col);
						dayDelta = dayDiff(date, origDate);
					}

					// calculate minute delta (only if over slots)
					if (!isAllDay) {
						minuteDelta = Math.round((ui.position.top - origPosition.top) / snapHeight) * snapMinutes;
					}
				}

				// any state changes?
				if (
					isInBounds != prevIsInBounds ||
					isAllDay != prevIsAllDay ||
					colDelta != prevColDelta ||
					minuteDelta != prevMinuteDelta
				) {

					updateUI();

					// update previous states for next time
					prevIsInBounds = isInBounds;
					prevIsAllDay = isAllDay;
					prevColDelta = colDelta;
					prevMinuteDelta = minuteDelta;
				}

				// if out-of-bounds, revert when done, and vice versa.
				eventElement.draggable('option', 'revert', !isInBounds);

			},
			stop: function(ev, ui) {

				clearOverlays();
				trigger('eventDragStop', eventElement, event, ev, ui);

				if (isInBounds && (isAllDay || dayDelta || minuteDelta)) { // changed!
					eventDrop(this, event, dayDelta, isAllDay ? 0 : minuteDelta, isAllDay, ev, ui);
				}
				else { // either no change or out-of-bounds (draggable has already reverted)

					// reset states for next time, and for updateUI()
					isInBounds = true;
					isAllDay = false;
					colDelta = 0;
					dayDelta = 0;
					minuteDelta = 0;

					updateUI();
					eventElement.css('filter', ''); // clear IE opacity side-effects

					// sometimes fast drags make event revert to wrong position, so reset.
					// also, if we dragged the element out of the area because of snapping,
					// but the *mouse* is still in bounds, we need to reset the position.
					eventElement.css(origPosition);

					showEvents(event, eventElement);
				}
			}
		});

		function updateUI() {
			clearOverlays();
			if (isInBounds) {
				if (isAllDay) {
					timeElement.hide();
					eventElement.draggable('option', 'grid', null); // disable grid snapping
					renderDayOverlay(
						addDays(cloneDate(event.start), dayDelta),
						addDays(exclEndDay(event), dayDelta)
					);
				}
				else {
					updateTimeText(minuteDelta);
					timeElement.css('display', ''); // show() was causing display=inline
					eventElement.draggable('option', 'grid', [colWidth, snapHeight]); // re-enable grid snapping
				}
			}
		}

		function updateTimeText(minuteDelta) {
			var newStart = addMinutes(cloneDate(event.start), minuteDelta);
			var newEnd;
			if (event.end) {
				newEnd = addMinutes(cloneDate(event.end), minuteDelta);
			}
			timeElement.text(formatDates(newStart, newEnd, opt('timeFormat')));
		}

	}
	
	
	
	/* Resizing
	--------------------------------------------------------------------------------------*/
	
	
	function resizableSlotEvent(event, eventElement, timeElement) {
		var snapDelta, prevSnapDelta;
		var snapHeight = getSnapHeight();
		var snapMinutes = getSnapMinutes();
		eventElement.resizable({
			handles: {
				s: '.ui-resizable-handle'
			},
			grid: snapHeight,
			start: function(ev, ui) {
				snapDelta = prevSnapDelta = 0;
				hideEvents(event, eventElement);
				trigger('eventResizeStart', this, event, ev, ui);
			},
			resize: function(ev, ui) {
				// don't rely on ui.size.height, doesn't take grid into account
				snapDelta = Math.round((Math.max(snapHeight, eventElement.height()) - ui.originalSize.height) / snapHeight);
				if (snapDelta != prevSnapDelta) {
					timeElement.text(
						formatDates(
							event.start,
							(!snapDelta && !event.end) ? null : // no change, so don't display time range
								addMinutes(eventEnd(event), snapMinutes*snapDelta),
							opt('timeFormat')
						)
					);
					prevSnapDelta = snapDelta;
				}
			},
			stop: function(ev, ui) {
				trigger('eventResizeStop', this, event, ev, ui);
				if (snapDelta) {
					eventResize(this, event, 0, snapMinutes*snapDelta, ev, ui);
				}else{
					showEvents(event, eventElement);
					// BUG: if event was really short, need to put title back in span
				}
			}
		});
	}
	

}



/* Agenda Event Segment Utilities
-----------------------------------------------------------------------------*/


// Sets the seg.backwardCoord and seg.forwardCoord on each segment and returns a new
// list in the order they should be placed into the DOM (an implicit z-index).
function placeSlotSegs(segs) {
	var levels = buildSlotSegLevels(segs);
	var level0 = levels[0];
	var i;

	computeForwardSlotSegs(levels);

	if (level0) {

		for (i=0; i<level0.length; i++) {
			computeSlotSegPressures(level0[i]);
		}

		for (i=0; i<level0.length; i++) {
			computeSlotSegCoords(level0[i], 0, 0);
		}
	}

	return flattenSlotSegLevels(levels);
}


// Builds an array of segments "levels". The first level will be the leftmost tier of segments
// if the calendar is left-to-right, or the rightmost if the calendar is right-to-left.
function buildSlotSegLevels(segs) {
	var levels = [];
	var i, seg;
	var j;

	for (i=0; i<segs.length; i++) {
		seg = segs[i];

		// go through all the levels and stop on the first level where there are no collisions
		for (j=0; j<levels.length; j++) {
			if (!computeSlotSegCollisions(seg, levels[j]).length) {
				break;
			}
		}

		(levels[j] || (levels[j] = [])).push(seg);
	}

	return levels;
}


// For every segment, figure out the other segments that are in subsequent
// levels that also occupy the same vertical space. Accumulate in seg.forwardSegs
function computeForwardSlotSegs(levels) {
	var i, level;
	var j, seg;
	var k;

	for (i=0; i<levels.length; i++) {
		level = levels[i];

		for (j=0; j<level.length; j++) {
			seg = level[j];

			seg.forwardSegs = [];
			for (k=i+1; k<levels.length; k++) {
				computeSlotSegCollisions(seg, levels[k], seg.forwardSegs);
			}
		}
	}
}


// Figure out which path forward (via seg.forwardSegs) results in the longest path until
// the furthest edge is reached. The number of segments in this path will be seg.forwardPressure
function computeSlotSegPressures(seg) {
	var forwardSegs = seg.forwardSegs;
	var forwardPressure = 0;
	var i, forwardSeg;

	if (seg.forwardPressure === undefined) { // not already computed

		for (i=0; i<forwardSegs.length; i++) {
			forwardSeg = forwardSegs[i];

			// figure out the child's maximum forward path
			computeSlotSegPressures(forwardSeg);

			// either use the existing maximum, or use the child's forward pressure
			// plus one (for the forwardSeg itself)
			forwardPressure = Math.max(
				forwardPressure,
				1 + forwardSeg.forwardPressure
			);
		}

		seg.forwardPressure = forwardPressure;
	}
}


// Calculate seg.forwardCoord and seg.backwardCoord for the segment, where both values range
// from 0 to 1. If the calendar is left-to-right, the seg.backwardCoord maps to "left" and
// seg.forwardCoord maps to "right" (via percentage). Vice-versa if the calendar is right-to-left.
//
// The segment might be part of a "series", which means consecutive segments with the same pressure
// who's width is unknown until an edge has been hit. `seriesBackwardPressure` is the number of
// segments behind this one in the current series, and `seriesBackwardCoord` is the starting
// coordinate of the first segment in the series.
function computeSlotSegCoords(seg, seriesBackwardPressure, seriesBackwardCoord) {
	var forwardSegs = seg.forwardSegs;
	var i;

	if (seg.forwardCoord === undefined) { // not already computed

		if (!forwardSegs.length) {

			// if there are no forward segments, this segment should butt up against the edge
			seg.forwardCoord = 1;
		}
		else {

			// sort highest pressure first
			forwardSegs.sort(compareForwardSlotSegs);

			// this segment's forwardCoord will be calculated from the backwardCoord of the
			// highest-pressure forward segment.
			computeSlotSegCoords(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord);
			seg.forwardCoord = forwardSegs[0].backwardCoord;
		}

		// calculate the backwardCoord from the forwardCoord. consider the series
		seg.backwardCoord = seg.forwardCoord -
			(seg.forwardCoord - seriesBackwardCoord) / // available width for series
			(seriesBackwardPressure + 1); // # of segments in the series

		// use this segment's coordinates to computed the coordinates of the less-pressurized
		// forward segments
		for (i=0; i<forwardSegs.length; i++) {
			computeSlotSegCoords(forwardSegs[i], 0, seg.forwardCoord);
		}
	}
}


// Outputs a flat array of segments, from lowest to highest level
function flattenSlotSegLevels(levels) {
	var segs = [];
	var i, level;
	var j;

	for (i=0; i<levels.length; i++) {
		level = levels[i];

		for (j=0; j<level.length; j++) {
			segs.push(level[j]);
		}
	}

	return segs;
}


// Find all the segments in `otherSegs` that vertically collide with `seg`.
// Append into an optionally-supplied `results` array and return.
function computeSlotSegCollisions(seg, otherSegs, results) {
	results = results || [];

	for (var i=0; i<otherSegs.length; i++) {
		if (isSlotSegCollision(seg, otherSegs[i])) {
			results.push(otherSegs[i]);
		}
	}

	return results;
}


// Do these segments occupy the same vertical space?
function isSlotSegCollision(seg1, seg2) {
	return seg1.end > seg2.start && seg1.start < seg2.end;
}


// A cmp function for determining which forward segment to rely on more when computing coordinates.
function compareForwardSlotSegs(seg1, seg2) {
	// put higher-pressure first
	return seg2.forwardPressure - seg1.forwardPressure ||
		// put segments that are closer to initial edge first (and favor ones with no coords yet)
		(seg1.backwardCoord || 0) - (seg2.backwardCoord || 0) ||
		// do normal sorting...
		compareSlotSegs(seg1, seg2);
}


// A cmp function for determining which segment should be closer to the initial edge
// (the left edge on a left-to-right calendar).
function compareSlotSegs(seg1, seg2) {
	return seg1.start - seg2.start || // earlier start time goes first
		(seg2.end - seg2.start) - (seg1.end - seg1.start) || // tie? longer-duration goes first
		(seg1.event.title || '').localeCompare(seg2.event.title); // tie? alphabetically by title
}


;;


function View(element, calendar, viewName) {
	var t = this;
	
	
	// exports
	t.element = element;
	t.calendar = calendar;
	t.name = viewName;
	t.opt = opt;
	t.trigger = trigger;
	t.isEventDraggable = isEventDraggable;
	t.isEventResizable = isEventResizable;
	t.setEventData = setEventData;
	t.clearEventData = clearEventData;
	t.eventEnd = eventEnd;
	t.reportEventElement = reportEventElement;
	t.triggerEventDestroy = triggerEventDestroy;
	t.eventElementHandlers = eventElementHandlers;
	t.showEvents = showEvents;
	t.hideEvents = hideEvents;
	t.eventDrop = eventDrop;
	t.eventResize = eventResize;
	// t.title
	// t.start, t.end
	// t.visStart, t.visEnd
	
	
	// imports
	var defaultEventEnd = t.defaultEventEnd;
	var normalizeEvent = calendar.normalizeEvent; // in EventManager
	var reportEventChange = calendar.reportEventChange;
	
	
	// locals
	var eventsByID = {}; // eventID mapped to array of events (there can be multiple b/c of repeating events)
	var eventElementsByID = {}; // eventID mapped to array of jQuery elements
	var eventElementCouples = []; // array of objects, { event, element } // TODO: unify with segment system
	var options = calendar.options;
	
	
	
	function opt(name, viewNameOverride) {
		var v = options[name];
		if ($.isPlainObject(v)) {
			return smartProperty(v, viewNameOverride || viewName);
		}
		return v;
	}

	
	function trigger(name, thisObj) {
		return calendar.trigger.apply(
			calendar,
			[name, thisObj || t].concat(Array.prototype.slice.call(arguments, 2), [t])
		);
	}
	


	/* Event Editable Boolean Calculations
	------------------------------------------------------------------------------*/

	
	function isEventDraggable(event) {
		var source = event.source || {};
		return firstDefined(
				event.startEditable,
				source.startEditable,
				opt('eventStartEditable'),
				event.editable,
				source.editable,
				opt('editable')
			)
			&& !opt('disableDragging'); // deprecated
	}
	
	
	function isEventResizable(event) { // but also need to make sure the seg.isEnd == true
		var source = event.source || {};
		return firstDefined(
				event.durationEditable,
				source.durationEditable,
				opt('eventDurationEditable'),
				event.editable,
				source.editable,
				opt('editable')
			)
			&& !opt('disableResizing'); // deprecated
	}
	
	
	
	/* Event Data
	------------------------------------------------------------------------------*/
	
	
	function setEventData(events) { // events are already normalized at this point
		eventsByID = {};
		var i, len=events.length, event;
		for (i=0; i<len; i++) {
			event = events[i];
			if (eventsByID[event._id]) {
				eventsByID[event._id].push(event);
			}else{
				eventsByID[event._id] = [event];
			}
		}
	}


	function clearEventData() {
		eventsByID = {};
		eventElementsByID = {};
		eventElementCouples = [];
	}
	
	
	// returns a Date object for an event's end
	function eventEnd(event) {
		return event.end ? cloneDate(event.end) : defaultEventEnd(event);
	}
	
	
	
	/* Event Elements
	------------------------------------------------------------------------------*/
	
	
	// report when view creates an element for an event
	function reportEventElement(event, element) {
		eventElementCouples.push({ event: event, element: element });
		if (eventElementsByID[event._id]) {
			eventElementsByID[event._id].push(element);
		}else{
			eventElementsByID[event._id] = [element];
		}
	}


	function triggerEventDestroy() {
		$.each(eventElementCouples, function(i, couple) {
			t.trigger('eventDestroy', couple.event, couple.event, couple.element);
		});
	}
	
	
	// attaches eventClick, eventMouseover, eventMouseout
	function eventElementHandlers(event, eventElement) {
		eventElement
			.click(function(ev) {
				if (!eventElement.hasClass('ui-draggable-dragging') &&
					!eventElement.hasClass('ui-resizable-resizing')) {
						return trigger('eventClick', this, event, ev);
					}
			})
			.hover(
				function(ev) {
					trigger('eventMouseover', this, event, ev);
				},
				function(ev) {
					trigger('eventMouseout', this, event, ev);
				}
			);
		// TODO: don't fire eventMouseover/eventMouseout *while* dragging is occuring (on subject element)
		// TODO: same for resizing
	}
	
	
	function showEvents(event, exceptElement) {
		eachEventElement(event, exceptElement, 'show');
	}
	
	
	function hideEvents(event, exceptElement) {
		eachEventElement(event, exceptElement, 'hide');
	}
	
	
	function eachEventElement(event, exceptElement, funcName) {
		// NOTE: there may be multiple events per ID (repeating events)
		// and multiple segments per event
		var elements = eventElementsByID[event._id],
			i, len = elements.length;
		for (i=0; i<len; i++) {
			if (!exceptElement || elements[i][0] != exceptElement[0]) {
				elements[i][funcName]();
			}
		}
	}
	
	
	
	/* Event Modification Reporting
	---------------------------------------------------------------------------------*/
	
	
	function eventDrop(e, event, dayDelta, minuteDelta, allDay, ev, ui) {
		var oldAllDay = event.allDay;
		var eventId = event._id;
		moveEvents(eventsByID[eventId], dayDelta, minuteDelta, allDay);
		trigger(
			'eventDrop',
			e,
			event,
			dayDelta,
			minuteDelta,
			allDay,
			function() {
				// TODO: investigate cases where this inverse technique might not work
				moveEvents(eventsByID[eventId], -dayDelta, -minuteDelta, oldAllDay);
				reportEventChange(eventId);
			},
			ev,
			ui
		);
		reportEventChange(eventId);
	}
	
	
	function eventResize(e, event, dayDelta, minuteDelta, ev, ui) {
		var eventId = event._id;
		elongateEvents(eventsByID[eventId], dayDelta, minuteDelta);
		trigger(
			'eventResize',
			e,
			event,
			dayDelta,
			minuteDelta,
			function() {
				// TODO: investigate cases where this inverse technique might not work
				elongateEvents(eventsByID[eventId], -dayDelta, -minuteDelta);
				reportEventChange(eventId);
			},
			ev,
			ui
		);
		reportEventChange(eventId);
	}
	
	
	
	/* Event Modification Math
	---------------------------------------------------------------------------------*/
	
	
	function moveEvents(events, dayDelta, minuteDelta, allDay) {
		minuteDelta = minuteDelta || 0;
		for (var e, len=events.length, i=0; i<len; i++) {
			e = events[i];
			if (allDay !== undefined) {
				e.allDay = allDay;
			}
			addMinutes(addDays(e.start, dayDelta, true), minuteDelta);
			if (e.end) {
				e.end = addMinutes(addDays(e.end, dayDelta, true), minuteDelta);
			}
			normalizeEvent(e, options);
		}
	}
	
	
	function elongateEvents(events, dayDelta, minuteDelta) {
		minuteDelta = minuteDelta || 0;
		for (var e, len=events.length, i=0; i<len; i++) {
			e = events[i];
			e.end = addMinutes(addDays(eventEnd(e), dayDelta, true), minuteDelta);
			normalizeEvent(e, options);
		}
	}



	// ====================================================================================================
	// Utilities for day "cells"
	// ====================================================================================================
	// The "basic" views are completely made up of day cells.
	// The "agenda" views have day cells at the top "all day" slot.
	// This was the obvious common place to put these utilities, but they should be abstracted out into
	// a more meaningful class (like DayEventRenderer).
	// ====================================================================================================


	// For determining how a given "cell" translates into a "date":
	//
	// 1. Convert the "cell" (row and column) into a "cell offset" (the # of the cell, cronologically from the first).
	//    Keep in mind that column indices are inverted with isRTL. This is taken into account.
	//
	// 2. Convert the "cell offset" to a "day offset" (the # of days since the first visible day in the view).
	//
	// 3. Convert the "day offset" into a "date" (a JavaScript Date object).
	//
	// The reverse transformation happens when transforming a date into a cell.


	// exports
	t.isHiddenDay = isHiddenDay;
	t.skipHiddenDays = skipHiddenDays;
	t.getCellsPerWeek = getCellsPerWeek;
	t.dateToCell = dateToCell;
	t.dateToDayOffset = dateToDayOffset;
	t.dayOffsetToCellOffset = dayOffsetToCellOffset;
	t.cellOffsetToCell = cellOffsetToCell;
	t.cellToDate = cellToDate;
	t.cellToCellOffset = cellToCellOffset;
	t.cellOffsetToDayOffset = cellOffsetToDayOffset;
	t.dayOffsetToDate = dayOffsetToDate;
	t.rangeToSegments = rangeToSegments;


	// internals
	var hiddenDays = opt('hiddenDays') || []; // array of day-of-week indices that are hidden
	var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
	var cellsPerWeek;
	var dayToCellMap = []; // hash from dayIndex -> cellIndex, for one week
	var cellToDayMap = []; // hash from cellIndex -> dayIndex, for one week
	var isRTL = opt('isRTL');


	// initialize important internal variables
	(function() {

		if (opt('weekends') === false) {
			hiddenDays.push(0, 6); // 0=sunday, 6=saturday
		}

		// Loop through a hypothetical week and determine which
		// days-of-week are hidden. Record in both hashes (one is the reverse of the other).
		for (var dayIndex=0, cellIndex=0; dayIndex<7; dayIndex++) {
			dayToCellMap[dayIndex] = cellIndex;
			isHiddenDayHash[dayIndex] = $.inArray(dayIndex, hiddenDays) != -1;
			if (!isHiddenDayHash[dayIndex]) {
				cellToDayMap[cellIndex] = dayIndex;
				cellIndex++;
			}
		}

		cellsPerWeek = cellIndex;
		if (!cellsPerWeek) {
			throw 'invalid hiddenDays'; // all days were hidden? bad.
		}

	})();


	// Is the current day hidden?
	// `day` is a day-of-week index (0-6), or a Date object
	function isHiddenDay(day) {
		if (typeof day == 'object') {
			day = day.getDay();
		}
		return isHiddenDayHash[day];
	}


	function getCellsPerWeek() {
		return cellsPerWeek;
	}


	// Keep incrementing the current day until it is no longer a hidden day.
	// If the initial value of `date` is not a hidden day, don't do anything.
	// Pass `isExclusive` as `true` if you are dealing with an end date.
	// `inc` defaults to `1` (increment one day forward each time)
	function skipHiddenDays(date, inc, isExclusive) {
		inc = inc || 1;
		while (
			isHiddenDayHash[ ( date.getDay() + (isExclusive ? inc : 0) + 7 ) % 7 ]
		) {
			addDays(date, inc);
		}
	}


	//
	// TRANSFORMATIONS: cell -> cell offset -> day offset -> date
	//

	// cell -> date (combines all transformations)
	// Possible arguments:
	// - row, col
	// - { row:#, col: # }
	function cellToDate() {
		var cellOffset = cellToCellOffset.apply(null, arguments);
		var dayOffset = cellOffsetToDayOffset(cellOffset);
		var date = dayOffsetToDate(dayOffset);
		return date;
	}

	// cell -> cell offset
	// Possible arguments:
	// - row, col
	// - { row:#, col:# }
	function cellToCellOffset(row, col) {
		var colCnt = t.getColCnt();

		// rtl variables. wish we could pre-populate these. but where?
		var dis = isRTL ? -1 : 1;
		var dit = isRTL ? colCnt - 1 : 0;

		if (typeof row == 'object') {
			col = row.col;
			row = row.row;
		}
		var cellOffset = row * colCnt + (col * dis + dit); // column, adjusted for RTL (dis & dit)

		return cellOffset;
	}

	// cell offset -> day offset
	function cellOffsetToDayOffset(cellOffset) {
		var day0 = t.visStart.getDay(); // first date's day of week
		cellOffset += dayToCellMap[day0]; // normlize cellOffset to beginning-of-week
		return Math.floor(cellOffset / cellsPerWeek) * 7 // # of days from full weeks
			+ cellToDayMap[ // # of days from partial last week
				(cellOffset % cellsPerWeek + cellsPerWeek) % cellsPerWeek // crazy math to handle negative cellOffsets
			]
			- day0; // adjustment for beginning-of-week normalization
	}

	// day offset -> date (JavaScript Date object)
	function dayOffsetToDate(dayOffset) {
		var date = cloneDate(t.visStart);
		addDays(date, dayOffset);
		return date;
	}


	//
	// TRANSFORMATIONS: date -> day offset -> cell offset -> cell
	//

	// date -> cell (combines all transformations)
	function dateToCell(date) {
		var dayOffset = dateToDayOffset(date);
		var cellOffset = dayOffsetToCellOffset(dayOffset);
		var cell = cellOffsetToCell(cellOffset);
		return cell;
	}

	// date -> day offset
	function dateToDayOffset(date) {
		return dayDiff(date, t.visStart);
	}

	// day offset -> cell offset
	function dayOffsetToCellOffset(dayOffset) {
		var day0 = t.visStart.getDay(); // first date's day of week
		dayOffset += day0; // normalize dayOffset to beginning-of-week
		return Math.floor(dayOffset / 7) * cellsPerWeek // # of cells from full weeks
			+ dayToCellMap[ // # of cells from partial last week
				(dayOffset % 7 + 7) % 7 // crazy math to handle negative dayOffsets
			]
			- dayToCellMap[day0]; // adjustment for beginning-of-week normalization
	}

	// cell offset -> cell (object with row & col keys)
	function cellOffsetToCell(cellOffset) {
		var colCnt = t.getColCnt();

		// rtl variables. wish we could pre-populate these. but where?
		var dis = isRTL ? -1 : 1;
		var dit = isRTL ? colCnt - 1 : 0;

		var row = Math.floor(cellOffset / colCnt);
		var col = ((cellOffset % colCnt + colCnt) % colCnt) * dis + dit; // column, adjusted for RTL (dis & dit)
		return {
			row: row,
			col: col
		};
	}


	//
	// Converts a date range into an array of segment objects.
	// "Segments" are horizontal stretches of time, sliced up by row.
	// A segment object has the following properties:
	// - row
	// - cols
	// - isStart
	// - isEnd
	//
	function rangeToSegments(startDate, endDate) {
		var rowCnt = t.getRowCnt();
		var colCnt = t.getColCnt();
		var segments = []; // array of segments to return

		// day offset for given date range
		var rangeDayOffsetStart = dateToDayOffset(startDate);
		var rangeDayOffsetEnd = dateToDayOffset(endDate); // exclusive

		// first and last cell offset for the given date range
		// "last" implies inclusivity
		var rangeCellOffsetFirst = dayOffsetToCellOffset(rangeDayOffsetStart);
		var rangeCellOffsetLast = dayOffsetToCellOffset(rangeDayOffsetEnd) - 1;

		// loop through all the rows in the view
		for (var row=0; row<rowCnt; row++) {

			// first and last cell offset for the row
			var rowCellOffsetFirst = row * colCnt;
			var rowCellOffsetLast = rowCellOffsetFirst + colCnt - 1;

			// get the segment's cell offsets by constraining the range's cell offsets to the bounds of the row
			var segmentCellOffsetFirst = Math.max(rangeCellOffsetFirst, rowCellOffsetFirst);
			var segmentCellOffsetLast = Math.min(rangeCellOffsetLast, rowCellOffsetLast);

			// make sure segment's offsets are valid and in view
			if (segmentCellOffsetFirst <= segmentCellOffsetLast) {

				// translate to cells
				var segmentCellFirst = cellOffsetToCell(segmentCellOffsetFirst);
				var segmentCellLast = cellOffsetToCell(segmentCellOffsetLast);

				// view might be RTL, so order by leftmost column
				var cols = [ segmentCellFirst.col, segmentCellLast.col ].sort();

				// Determine if segment's first/last cell is the beginning/end of the date range.
				// We need to compare "day offset" because "cell offsets" are often ambiguous and
				// can translate to multiple days, and an edge case reveals itself when we the
				// range's first cell is hidden (we don't want isStart to be true).
				var isStart = cellOffsetToDayOffset(segmentCellOffsetFirst) == rangeDayOffsetStart;
				var isEnd = cellOffsetToDayOffset(segmentCellOffsetLast) + 1 == rangeDayOffsetEnd; // +1 for comparing exclusively

				segments.push({
					row: row,
					leftCol: cols[0],
					rightCol: cols[1],
					isStart: isStart,
					isEnd: isEnd
				});
			}
		}

		return segments;
	}
	

}

;;

function DayEventRenderer() {
	var t = this;

	
	// exports
	t.renderDayEvents = renderDayEvents;
	t.draggableDayEvent = draggableDayEvent; // made public so that subclasses can override
	t.resizableDayEvent = resizableDayEvent; // "
	
	
	// imports
	var opt = t.opt;
	var trigger = t.trigger;
	var isEventDraggable = t.isEventDraggable;
	var isEventResizable = t.isEventResizable;
	var eventEnd = t.eventEnd;
	var reportEventElement = t.reportEventElement;
	var eventElementHandlers = t.eventElementHandlers;
	var showEvents = t.showEvents;
	var hideEvents = t.hideEvents;
	var eventDrop = t.eventDrop;
	var eventResize = t.eventResize;
	var getRowCnt = t.getRowCnt;
	var getColCnt = t.getColCnt;
	var getColWidth = t.getColWidth;
	var allDayRow = t.allDayRow; // TODO: rename
	var colLeft = t.colLeft;
	var colRight = t.colRight;
	var colContentLeft = t.colContentLeft;
	var colContentRight = t.colContentRight;
	var dateToCell = t.dateToCell;
	var getDaySegmentContainer = t.getDaySegmentContainer;
	var formatDates = t.calendar.formatDates;
	var renderDayOverlay = t.renderDayOverlay;
	var clearOverlays = t.clearOverlays;
	var clearSelection = t.clearSelection;
	var getHoverListener = t.getHoverListener;
	var rangeToSegments = t.rangeToSegments;
	var cellToDate = t.cellToDate;
	var cellToCellOffset = t.cellToCellOffset;
	var cellOffsetToDayOffset = t.cellOffsetToDayOffset;
	var dateToDayOffset = t.dateToDayOffset;
	var dayOffsetToCellOffset = t.dayOffsetToCellOffset;


	// Render `events` onto the calendar, attach mouse event handlers, and call the `eventAfterRender` callback for each.
	// Mouse event will be lazily applied, except if the event has an ID of `modifiedEventId`.
	// Can only be called when the event container is empty (because it wipes out all innerHTML).
	function renderDayEvents(events, modifiedEventId) {

		// do the actual rendering. Receive the intermediate "segment" data structures.
		var segments = _renderDayEvents(
			events,
			false, // don't append event elements
			true // set the heights of the rows
		);

		// report the elements to the View, for general drag/resize utilities
		segmentElementEach(segments, function(segment, element) {
			reportEventElement(segment.event, element);
		});

		// attach mouse handlers
		attachHandlers(segments, modifiedEventId);

		// call `eventAfterRender` callback for each event
		segmentElementEach(segments, function(segment, element) {
			trigger('eventAfterRender', segment.event, segment.event, element);
		});
	}


	// Render an event on the calendar, but don't report them anywhere, and don't attach mouse handlers.
	// Append this event element to the event container, which might already be populated with events.
	// If an event's segment will have row equal to `adjustRow`, then explicitly set its top coordinate to `adjustTop`.
	// This hack is used to maintain continuity when user is manually resizing an event.
	// Returns an array of DOM elements for the event.
	function renderTempDayEvent(event, adjustRow, adjustTop) {

		// actually render the event. `true` for appending element to container.
		// Recieve the intermediate "segment" data structures.
		var segments = _renderDayEvents(
			[ event ],
			true, // append event elements
			false // don't set the heights of the rows
		);

		var elements = [];

		// Adjust certain elements' top coordinates
		segmentElementEach(segments, function(segment, element) {
			if (segment.row === adjustRow) {
				element.css('top', adjustTop);
			}
			elements.push(element[0]); // accumulate DOM nodes
		});

		return elements;
	}


	// Render events onto the calendar. Only responsible for the VISUAL aspect.
	// Not responsible for attaching handlers or calling callbacks.
	// Set `doAppend` to `true` for rendering elements without clearing the existing container.
	// Set `doRowHeights` to allow setting the height of each row, to compensate for vertical event overflow.
	function _renderDayEvents(events, doAppend, doRowHeights) {

		// where the DOM nodes will eventually end up
		var finalContainer = getDaySegmentContainer();

		// the container where the initial HTML will be rendered.
		// If `doAppend`==true, uses a temporary container.
		var renderContainer = doAppend ? $("<div/>") : finalContainer;

		var segments = buildSegments(events);
		var html;
		var elements;

		// calculate the desired `left` and `width` properties on each segment object
		calculateHorizontals(segments);

		// build the HTML string. relies on `left` property
		html = buildHTML(segments);

		// render the HTML. innerHTML is considerably faster than jQuery's .html()
		renderContainer[0].innerHTML = html;

		// retrieve the individual elements
		elements = renderContainer.children();

		// if we were appending, and thus using a temporary container,
		// re-attach elements to the real container.
		if (doAppend) {
			finalContainer.append(elements);
		}

		// assigns each element to `segment.event`, after filtering them through user callbacks
		resolveElements(segments, elements);

		// Calculate the left and right padding+margin for each element.
		// We need this for setting each element's desired outer width, because of the W3C box model.
		// It's important we do this in a separate pass from acually setting the width on the DOM elements
		// because alternating reading/writing dimensions causes reflow for every iteration.
		segmentElementEach(segments, function(segment, element) {
			segment.hsides = hsides(element, true); // include margins = `true`
		});

		// Set the width of each element
		segmentElementEach(segments, function(segment, element) {
			element.width(
				Math.max(0, segment.outerWidth - segment.hsides)
			);
		});

		// Grab each element's outerHeight (setVerticals uses this).
		// To get an accurate reading, it's important to have each element's width explicitly set already.
		segmentElementEach(segments, function(segment, element) {
			segment.outerHeight = element.outerHeight(true); // include margins = `true`
		});

		// Set the top coordinate on each element (requires segment.outerHeight)
		setVerticals(segments, doRowHeights);

		return segments;
	}


	// Generate an array of "segments" for all events.
	function buildSegments(events) {
		var segments = [];
		for (var i=0; i<events.length; i++) {
			var eventSegments = buildSegmentsForEvent(events[i]);
			segments.push.apply(segments, eventSegments); // append an array to an array
		}
		return segments;
	}


	// Generate an array of segments for a single event.
	// A "segment" is the same data structure that View.rangeToSegments produces,
	// with the addition of the `event` property being set to reference the original event.
	function buildSegmentsForEvent(event) {
		var startDate = event.start;
		var endDate = exclEndDay(event);
		var segments = rangeToSegments(startDate, endDate);
		for (var i=0; i<segments.length; i++) {
			segments[i].event = event;
		}
		return segments;
	}


	// Sets the `left` and `outerWidth` property of each segment.
	// These values are the desired dimensions for the eventual DOM elements.
	function calculateHorizontals(segments) {
		var isRTL = opt('isRTL');
		for (var i=0; i<segments.length; i++) {
			var segment = segments[i];

			// Determine functions used for calulating the elements left/right coordinates,
			// depending on whether the view is RTL or not.
			// NOTE:
			// colLeft/colRight returns the coordinate butting up the edge of the cell.
			// colContentLeft/colContentRight is indented a little bit from the edge.
			var leftFunc = (isRTL ? segment.isEnd : segment.isStart) ? colContentLeft : colLeft;
			var rightFunc = (isRTL ? segment.isStart : segment.isEnd) ? colContentRight : colRight;

			var left = leftFunc(segment.leftCol);
			var right = rightFunc(segment.rightCol);
			segment.left = left;
			segment.outerWidth = right - left;
		}
	}


	// Build a concatenated HTML string for an array of segments
	function buildHTML(segments) {
		var html = '';
		for (var i=0; i<segments.length; i++) {
			html += buildHTMLForSegment(segments[i]);
		}
		return html;
	}


	// Build an HTML string for a single segment.
	// Relies on the following properties:
	// - `segment.event` (from `buildSegmentsForEvent`)
	// - `segment.left` (from `calculateHorizontals`)
	function buildHTMLForSegment(segment) {
		var html = '';
		var isRTL = opt('isRTL');
		var event = segment.event;
		var url = event.url;

		// generate the list of CSS classNames
		var classNames = [ 'fc-event', 'fc-event-hori' ];
		if (isEventDraggable(event)) {
			classNames.push('fc-event-draggable');
		}
		if (segment.isStart) {
			classNames.push('fc-event-start');
		}
		if (segment.isEnd) {
			classNames.push('fc-event-end');
		}
		// use the event's configured classNames
		// guaranteed to be an array via `normalizeEvent`
		classNames = classNames.concat(event.className);
		if (event.source) {
			// use the event's source's classNames, if specified
			classNames = classNames.concat(event.source.className || []);
		}

		// generate a semicolon delimited CSS string for any of the "skin" properties
		// of the event object (`backgroundColor`, `borderColor` and such)
		var skinCss = getSkinCss(event, opt);

		if (url) {
			html += "<a href='" + htmlEscape(url) + "'";
		}else{
			html += "<div";
		}
		html +=
			" class='" + classNames.join(' ') + "'" +
			" style=" +
				"'" +
				"position:absolute;" +
				"left:" + segment.left + "px;" +
				skinCss +
				"'" +
			">" +
			"<div class='fc-event-inner'>";
		if (!event.allDay && segment.isStart) {
			html +=
				"<span class='fc-event-time'>" +
				htmlEscape(
					formatDates(event.start, event.end, opt('timeFormat'))
				) +
				"</span>";
		}
		html +=
			"<span class='fc-event-title'>" +
			htmlEscape(event.title || '') +
			"</span>" +
			"</div>";
		if (segment.isEnd && isEventResizable(event)) {
			html +=
				"<div class='ui-resizable-handle ui-resizable-" + (isRTL ? 'w' : 'e') + "'>" +
				"&nbsp;&nbsp;&nbsp;" + // makes hit area a lot better for IE6/7
				"</div>";
		}
		html += "</" + (url ? "a" : "div") + ">";

		// TODO:
		// When these elements are initially rendered, they will be briefly visibile on the screen,
		// even though their widths/heights are not set.
		// SOLUTION: initially set them as visibility:hidden ?

		return html;
	}


	// Associate each segment (an object) with an element (a jQuery object),
	// by setting each `segment.element`.
	// Run each element through the `eventRender` filter, which allows developers to
	// modify an existing element, supply a new one, or cancel rendering.
	function resolveElements(segments, elements) {
		for (var i=0; i<segments.length; i++) {
			var segment = segments[i];
			var event = segment.event;
			var element = elements.eq(i);

			// call the trigger with the original element
			var triggerRes = trigger('eventRender', event, event, element);

			if (triggerRes === false) {
				// if `false`, remove the event from the DOM and don't assign it to `segment.event`
				element.remove();
			}
			else {
				if (triggerRes && triggerRes !== true) {
					// the trigger returned a new element, but not `true` (which means keep the existing element)

					// re-assign the important CSS dimension properties that were already assigned in `buildHTMLForSegment`
					triggerRes = $(triggerRes)
						.css({
							position: 'absolute',
							left: segment.left
						});

					element.replaceWith(triggerRes);
					element = triggerRes;
				}

				segment.element = element;
			}
		}
	}



	/* Top-coordinate Methods
	-------------------------------------------------------------------------------------------------*/


	// Sets the "top" CSS property for each element.
	// If `doRowHeights` is `true`, also sets each row's first cell to an explicit height,
	// so that if elements vertically overflow, the cell expands vertically to compensate.
	function setVerticals(segments, doRowHeights) {
		var rowContentHeights = calculateVerticals(segments); // also sets segment.top
		var rowContentElements = getRowContentElements(); // returns 1 inner div per row
		var rowContentTops = [];

		// Set each row's height by setting height of first inner div
		if (doRowHeights) {
			for (var i=0; i<rowContentElements.length; i++) {
				rowContentElements[i].height(rowContentHeights[i]);
			}
		}

		// Get each row's top, relative to the views's origin.
		// Important to do this after setting each row's height.
		for (var i=0; i<rowContentElements.length; i++) {
			rowContentTops.push(
				rowContentElements[i].position().top
			);
		}

		// Set each segment element's CSS "top" property.
		// Each segment object has a "top" property, which is relative to the row's top, but...
		segmentElementEach(segments, function(segment, element) {
			element.css(
				'top',
				rowContentTops[segment.row] + segment.top // ...now, relative to views's origin
			);
		});
	}


	// Calculate the "top" coordinate for each segment, relative to the "top" of the row.
	// Also, return an array that contains the "content" height for each row
	// (the height displaced by the vertically stacked events in the row).
	// Requires segments to have their `outerHeight` property already set.
	function calculateVerticals(segments) {
		var rowCnt = getRowCnt();
		var colCnt = getColCnt();
		var rowContentHeights = []; // content height for each row
		var segmentRows = buildSegmentRows(segments); // an array of segment arrays, one for each row

		for (var rowI=0; rowI<rowCnt; rowI++) {
			var segmentRow = segmentRows[rowI];

			// an array of running total heights for each column.
			// initialize with all zeros.
			var colHeights = [];
			for (var colI=0; colI<colCnt; colI++) {
				colHeights.push(0);
			}

			// loop through every segment
			for (var segmentI=0; segmentI<segmentRow.length; segmentI++) {
				var segment = segmentRow[segmentI];

				// find the segment's top coordinate by looking at the max height
				// of all the columns the segment will be in.
				segment.top = arrayMax(
					colHeights.slice(
						segment.leftCol,
						segment.rightCol + 1 // make exclusive for slice
					)
				);

				// adjust the columns to account for the segment's height
				for (var colI=segment.leftCol; colI<=segment.rightCol; colI++) {
					colHeights[colI] = segment.top + segment.outerHeight;
				}
			}

			// the tallest column in the row should be the "content height"
			rowContentHeights.push(arrayMax(colHeights));
		}

		return rowContentHeights;
	}


	// Build an array of segment arrays, each representing the segments that will
	// be in a row of the grid, sorted by which event should be closest to the top.
	function buildSegmentRows(segments) {
		var rowCnt = getRowCnt();
		var segmentRows = [];
		var segmentI;
		var segment;
		var rowI;

		// group segments by row
		for (segmentI=0; segmentI<segments.length; segmentI++) {
			segment = segments[segmentI];
			rowI = segment.row;
			if (segment.element) { // was rendered?
				if (segmentRows[rowI]) {
					// already other segments. append to array
					segmentRows[rowI].push(segment);
				}
				else {
					// first segment in row. create new array
					segmentRows[rowI] = [ segment ];
				}
			}
		}

		// sort each row
		for (rowI=0; rowI<rowCnt; rowI++) {
			segmentRows[rowI] = sortSegmentRow(
				segmentRows[rowI] || [] // guarantee an array, even if no segments
			);
		}

		return segmentRows;
	}


	// Sort an array of segments according to which segment should appear closest to the top
	function sortSegmentRow(segments) {
		var sortedSegments = [];

		// build the subrow array
		var subrows = buildSegmentSubrows(segments);

		// flatten it
		for (var i=0; i<subrows.length; i++) {
			sortedSegments.push.apply(sortedSegments, subrows[i]); // append an array to an array
		}

		return sortedSegments;
	}


	// Take an array of segments, which are all assumed to be in the same row,
	// and sort into subrows.
	function buildSegmentSubrows(segments) {

		// Give preference to elements with certain criteria, so they have
		// a chance to be closer to the top.
		segments.sort(compareDaySegments);

		var subrows = [];
		for (var i=0; i<segments.length; i++) {
			var segment = segments[i];

			// loop through subrows, starting with the topmost, until the segment
			// doesn't collide with other segments.
			for (var j=0; j<subrows.length; j++) {
				if (!isDaySegmentCollision(segment, subrows[j])) {
					break;
				}
			}
			// `j` now holds the desired subrow index
			if (subrows[j]) {
				subrows[j].push(segment);
			}
			else {
				subrows[j] = [ segment ];
			}
		}

		return subrows;
	}


	// Return an array of jQuery objects for the placeholder content containers of each row.
	// The content containers don't actually contain anything, but their dimensions should match
	// the events that are overlaid on top.
	function getRowContentElements() {
		var i;
		var rowCnt = getRowCnt();
		var rowDivs = [];
		for (i=0; i<rowCnt; i++) {
			rowDivs[i] = allDayRow(i)
				.find('div.fc-day-content > div');
		}
		return rowDivs;
	}



	/* Mouse Handlers
	---------------------------------------------------------------------------------------------------*/
	// TODO: better documentation!


	function attachHandlers(segments, modifiedEventId) {
		var segmentContainer = getDaySegmentContainer();

		segmentElementEach(segments, function(segment, element, i) {
			var event = segment.event;
			if (event._id === modifiedEventId) {
				bindDaySeg(event, element, segment);
			}else{
				element[0]._fci = i; // for lazySegBind
			}
		});

		lazySegBind(segmentContainer, segments, bindDaySeg);
	}


	function bindDaySeg(event, eventElement, segment) {

		if (isEventDraggable(event)) {
			t.draggableDayEvent(event, eventElement, segment); // use `t` so subclasses can override
		}

		if (
			segment.isEnd && // only allow resizing on the final segment for an event
			isEventResizable(event)
		) {
			t.resizableDayEvent(event, eventElement, segment); // use `t` so subclasses can override
		}

		// attach all other handlers.
		// needs to be after, because resizableDayEvent might stopImmediatePropagation on click
		eventElementHandlers(event, eventElement);
	}

	
	function draggableDayEvent(event, eventElement) {
		var hoverListener = getHoverListener();
		var dayDelta;
		eventElement.draggable({
			delay: 50,
			opacity: opt('dragOpacity'),
			revertDuration: opt('dragRevertDuration'),
			start: function(ev, ui) {
				trigger('eventDragStart', eventElement, event, ev, ui);
				hideEvents(event, eventElement);
				hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
					eventElement.draggable('option', 'revert', !cell || !rowDelta && !colDelta);
					clearOverlays();
					if (cell) {
						var origDate = cellToDate(origCell);
						var date = cellToDate(cell);
						dayDelta = dayDiff(date, origDate);
						renderDayOverlay(
							addDays(cloneDate(event.start), dayDelta),
							addDays(exclEndDay(event), dayDelta)
						);
					}else{
						dayDelta = 0;
					}
				}, ev, 'drag');
			},
			stop: function(ev, ui) {
				hoverListener.stop();
				clearOverlays();
				trigger('eventDragStop', eventElement, event, ev, ui);
				if (dayDelta) {
					eventDrop(this, event, dayDelta, 0, event.allDay, ev, ui);
				}else{
					eventElement.css('filter', ''); // clear IE opacity side-effects
					showEvents(event, eventElement);
				}
			}
		});
	}

	
	function resizableDayEvent(event, element, segment) {
		var isRTL = opt('isRTL');
		var direction = isRTL ? 'w' : 'e';
		var handle = element.find('.ui-resizable-' + direction); // TODO: stop using this class because we aren't using jqui for this
		var isResizing = false;
		
		// TODO: look into using jquery-ui mouse widget for this stuff
		disableTextSelection(element); // prevent native <a> selection for IE
		element
			.mousedown(function(ev) { // prevent native <a> selection for others
				ev.preventDefault();
			})
			.click(function(ev) {
				if (isResizing) {
					ev.preventDefault(); // prevent link from being visited (only method that worked in IE6)
					ev.stopImmediatePropagation(); // prevent fullcalendar eventClick handler from being called
					                               // (eventElementHandlers needs to be bound after resizableDayEvent)
				}
			});
		
		handle.mousedown(function(ev) {
			if (ev.which != 1) {
				return; // needs to be left mouse button
			}
			isResizing = true;
			var hoverListener = getHoverListener();
			var rowCnt = getRowCnt();
			var colCnt = getColCnt();
			var elementTop = element.css('top');
			var dayDelta;
			var helpers;
			var eventCopy = $.extend({}, event);
			var minCellOffset = dayOffsetToCellOffset( dateToDayOffset(event.start) );
			clearSelection();
			$('body')
				.css('cursor', direction + '-resize')
				.one('mouseup', mouseup);
			trigger('eventResizeStart', this, event, ev);
			hoverListener.start(function(cell, origCell) {
				if (cell) {

					var origCellOffset = cellToCellOffset(origCell);
					var cellOffset = cellToCellOffset(cell);

					// don't let resizing move earlier than start date cell
					cellOffset = Math.max(cellOffset, minCellOffset);

					dayDelta =
						cellOffsetToDayOffset(cellOffset) -
						cellOffsetToDayOffset(origCellOffset);

					if (dayDelta) {
						eventCopy.end = addDays(eventEnd(event), dayDelta, true);
						var oldHelpers = helpers;

						helpers = renderTempDayEvent(eventCopy, segment.row, elementTop);
						helpers = $(helpers); // turn array into a jQuery object

						helpers.find('*').css('cursor', direction + '-resize');
						if (oldHelpers) {
							oldHelpers.remove();
						}

						hideEvents(event);
					}
					else {
						if (helpers) {
							showEvents(event);
							helpers.remove();
							helpers = null;
						}
					}
					clearOverlays();
					renderDayOverlay( // coordinate grid already rebuilt with hoverListener.start()
						event.start,
						addDays( exclEndDay(event), dayDelta )
						// TODO: instead of calling renderDayOverlay() with dates,
						// call _renderDayOverlay (or whatever) with cell offsets.
					);
				}
			}, ev);
			
			function mouseup(ev) {
				trigger('eventResizeStop', this, event, ev);
				$('body').css('cursor', '');
				hoverListener.stop();
				clearOverlays();
				if (dayDelta) {
					eventResize(this, event, dayDelta, 0, ev);
					// event redraw will clear helpers
				}
				// otherwise, the drag handler already restored the old events
				
				setTimeout(function() { // make this happen after the element's click event
					isResizing = false;
				},0);
			}
		});
	}
	

}



/* Generalized Segment Utilities
-------------------------------------------------------------------------------------------------*/


function isDaySegmentCollision(segment, otherSegments) {
	for (var i=0; i<otherSegments.length; i++) {
		var otherSegment = otherSegments[i];
		if (
			otherSegment.leftCol <= segment.rightCol &&
			otherSegment.rightCol >= segment.leftCol
		) {
			return true;
		}
	}
	return false;
}


function segmentElementEach(segments, callback) { // TODO: use in AgendaView?
	for (var i=0; i<segments.length; i++) {
		var segment = segments[i];
		var element = segment.element;
		if (element) {
			callback(segment, element, i);
		}
	}
}


// A cmp function for determining which segments should appear higher up
function compareDaySegments(a, b) {
	return (b.rightCol - b.leftCol) - (a.rightCol - a.leftCol) || // put wider events first
		b.event.allDay - a.event.allDay || // if tie, put all-day events first (booleans cast to 0/1)
		a.event.start - b.event.start || // if a tie, sort by event start date
		(a.event.title || '').localeCompare(b.event.title) // if a tie, sort by event title
}


;;

//BUG: unselect needs to be triggered when events are dragged+dropped

function SelectionManager() {
	var t = this;
	
	
	// exports
	t.select = select;
	t.unselect = unselect;
	t.reportSelection = reportSelection;
	t.daySelectionMousedown = daySelectionMousedown;
	
	
	// imports
	var opt = t.opt;
	var trigger = t.trigger;
	var defaultSelectionEnd = t.defaultSelectionEnd;
	var renderSelection = t.renderSelection;
	var clearSelection = t.clearSelection;
	
	
	// locals
	var selected = false;



	// unselectAuto
	if (opt('selectable') && opt('unselectAuto')) {
		$(document).mousedown(function(ev) {
			var ignore = opt('unselectCancel');
			if (ignore) {
				if ($(ev.target).parents(ignore).length) { // could be optimized to stop after first match
					return;
				}
			}
			unselect(ev);
		});
	}
	

	function select(startDate, endDate, allDay) {
		unselect();
		if (!endDate) {
			endDate = defaultSelectionEnd(startDate, allDay);
		}
		renderSelection(startDate, endDate, allDay);
		reportSelection(startDate, endDate, allDay);
	}
	
	
	function unselect(ev) {
		if (selected) {
			selected = false;
			clearSelection();
			trigger('unselect', null, ev);
		}
	}
	
	
	function reportSelection(startDate, endDate, allDay, ev) {
		selected = true;
		trigger('select', null, startDate, endDate, allDay, ev);
	}
	
	
	function daySelectionMousedown(ev) { // not really a generic manager method, oh well
		var cellToDate = t.cellToDate;
		var getIsCellAllDay = t.getIsCellAllDay;
		var hoverListener = t.getHoverListener();
		var reportDayClick = t.reportDayClick; // this is hacky and sort of weird
		if (ev.which == 1 && opt('selectable')) { // which==1 means left mouse button
			unselect(ev);
			var _mousedownElement = this;
			var dates;
			hoverListener.start(function(cell, origCell) { // TODO: maybe put cellToDate/getIsCellAllDay info in cell
				clearSelection();
				if (cell && getIsCellAllDay(cell)) {
					dates = [ cellToDate(origCell), cellToDate(cell) ].sort(dateCompare);
					renderSelection(dates[0], dates[1], true);
				}else{
					dates = null;
				}
			}, ev);
			$(document).one('mouseup', function(ev) {
				hoverListener.stop();
				if (dates) {
					if (+dates[0] == +dates[1]) {
						reportDayClick(dates[0], true, ev);
					}
					reportSelection(dates[0], dates[1], true, ev);
				}
			});
		}
	}


}

;;
 
function OverlayManager() {
	var t = this;
	
	
	// exports
	t.renderOverlay = renderOverlay;
	t.clearOverlays = clearOverlays;
	
	
	// locals
	var usedOverlays = [];
	var unusedOverlays = [];
	
	
	function renderOverlay(rect, parent) {
		var e = unusedOverlays.shift();
		if (!e) {
			e = $("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>");
		}
		if (e[0].parentNode != parent[0]) {
			e.appendTo(parent);
		}
		usedOverlays.push(e.css(rect).show());
		return e;
	}
	

	function clearOverlays() {
		var e;
		while (e = usedOverlays.shift()) {
			unusedOverlays.push(e.hide().unbind());
		}
	}


}

;;

function CoordinateGrid(buildFunc) {

	var t = this;
	var rows;
	var cols;
	
	
	t.build = function() {
		rows = [];
		cols = [];
		buildFunc(rows, cols);
	};
	
	
	t.cell = function(x, y) {
		var rowCnt = rows.length;
		var colCnt = cols.length;
		var i, r=-1, c=-1;
		for (i=0; i<rowCnt; i++) {
			if (y >= rows[i][0] && y < rows[i][1]) {
				r = i;
				break;
			}
		}
		for (i=0; i<colCnt; i++) {
			if (x >= cols[i][0] && x < cols[i][1]) {
				c = i;
				break;
			}
		}
		return (r>=0 && c>=0) ? { row:r, col:c } : null;
	};
	
	
	t.rect = function(row0, col0, row1, col1, originElement) { // row1,col1 is inclusive
		var origin = originElement.offset();
		return {
			top: rows[row0][0] - origin.top,
			left: cols[col0][0] - origin.left,
			width: cols[col1][1] - cols[col0][0],
			height: rows[row1][1] - rows[row0][0]
		};
	};

}

;;

function HoverListener(coordinateGrid) {


	var t = this;
	var bindType;
	var change;
	var firstCell;
	var cell;
	
	
	t.start = function(_change, ev, _bindType) {
		change = _change;
		firstCell = cell = null;
		coordinateGrid.build();
		mouse(ev);
		bindType = _bindType || 'mousemove';
		$(document).bind(bindType, mouse);
	};
	
	
	function mouse(ev) {
		_fixUIEvent(ev); // see below
		var newCell = coordinateGrid.cell(ev.pageX, ev.pageY);
		if (!newCell != !cell || newCell && (newCell.row != cell.row || newCell.col != cell.col)) {
			if (newCell) {
				if (!firstCell) {
					firstCell = newCell;
				}
				change(newCell, firstCell, newCell.row-firstCell.row, newCell.col-firstCell.col);
			}else{
				change(newCell, firstCell);
			}
			cell = newCell;
		}
	}
	
	
	t.stop = function() {
		$(document).unbind(bindType, mouse);
		return cell;
	};
	
	
}



// this fix was only necessary for jQuery UI 1.8.16 (and jQuery 1.7 or 1.7.1)
// upgrading to jQuery UI 1.8.17 (and using either jQuery 1.7 or 1.7.1) fixed the problem
// but keep this in here for 1.8.16 users
// and maybe remove it down the line

function _fixUIEvent(event) { // for issue 1168
	if (event.pageX === undefined) {
		event.pageX = event.originalEvent.pageX;
		event.pageY = event.originalEvent.pageY;
	}
}
;;

function HorizontalPositionCache(getElement) {

	var t = this,
		elements = {},
		lefts = {},
		rights = {};
		
	function e(i) {
		return elements[i] = elements[i] || getElement(i);
	}
	
	t.left = function(i) {
		return lefts[i] = lefts[i] === undefined ? e(i).position().left : lefts[i];
	};
	
	t.right = function(i) {
		return rights[i] = rights[i] === undefined ? t.left(i) + e(i).width() : rights[i];
	};
	
	t.clear = function() {
		elements = {};
		lefts = {};
		rights = {};
	};
	
}

;;

})(jQuery);
(function() {
  var addEvent, updateEvent;

  $(function() {
    $('#calendar').fullCalendar({
      header: {
        right: 'agendaDay agendaWeek month today prev next',
        defaultView: 'agendaWeek',
        height: 500,
        slotMinutes: 30,
        selectable: true,
        selectHelper: true,
        editable: true,
        titleFormat: {
          month: 'yyyy年 MMMM'
        },
        monthNames: ['１月', '２月', '３月', '４月', '５月', '６月', '７月', '８月', '９月', '１０月', '１１月', '１２月'],
        dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
        buttonText: [
          {
            today: '今日',
            month: '月',
            week: '週',
            day: '日'
          }
        ],
        events: '/albums/my_list'
      }
    });
    return {
      eventSources: [
        {
          url: '/albums/my_list',
          color: 'yellow',
          textColor: 'black'
        }
      ]({
        dragOpacity: "0.5",
        eventDrop: function(event, dayDelta, minuteDelta, allDay, revertFunc) {
          return updateEvent(event);
        },
        eventResize: function(event, dayDelta, minuteDelta, revertFunc) {
          return updateEvent(event);
        },
        select: function(start, end, allDay) {
          return addEvent(start, end, allDay);
        }
      }),
      eventDblClick: function(event, jsEvent) {
        var title;
        title = prompt('Event Title:');
        if (title) {
          $('#calendar').fullCalendar('renderEvent', {
            title: title,
            start: start,
            end: end,
            allDay: allDay
          }, true);
          return $('#calendar').fullCalendar('unselect');
        }
      }
    };
  });

  addEvent = function(start, end, allDay, the_event) {
    var title;
    title = prompt('Event Title:');
    if (title) {
      $('#calendar').fullCalendar('renderEvent', {
        title: title,
        start: start,
        end: end,
        allDay: allDay
      }, true);
    }
    return $('#calendar').fullCalendar('unselect');
  };

  updateEvent = function(the_event) {
    return $.update("/events/" + the_event.id, {
      event: {
        nama: the_event.nama,
        starts_at: "" + the_event.start,
        ends_at: "" + the_event.end,
        keterangan: the_event.keterangan
      }
    });
  };

}).call(this);
$(document).ready(function() {
    $('#calendar').fullCalendar({
        events: '/albums/my_list.json',
        selectable: true,
        selectHelper: true,
        select: function(start, end, allDay) {
            console.log('start:' + start);
            console.log('end:' + end);
            console.log('allDay:' + allDay);
            alert('selected');
        }
    });
});
/*!
 * FullCalendar v1.6.4 Google Calendar Plugin
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */

 
(function($) {


var fc = $.fullCalendar;
var formatDate = fc.formatDate;
var parseISO8601 = fc.parseISO8601;
var addDays = fc.addDays;
var applyAll = fc.applyAll;


fc.sourceNormalizers.push(function(sourceOptions) {
	if (sourceOptions.dataType == 'gcal' ||
		sourceOptions.dataType === undefined &&
		(sourceOptions.url || '').match(/^(http|https):\/\/www.google.com\/calendar\/feeds\//)) {
			sourceOptions.dataType = 'gcal';
			if (sourceOptions.editable === undefined) {
				sourceOptions.editable = false;
			}
		}
});


fc.sourceFetchers.push(function(sourceOptions, start, end) {
	if (sourceOptions.dataType == 'gcal') {
		return transformOptions(sourceOptions, start, end);
	}
});


function transformOptions(sourceOptions, start, end) {

	var success = sourceOptions.success;
	var data = $.extend({}, sourceOptions.data || {}, {
		'start-min': formatDate(start, 'u'),
		'start-max': formatDate(end, 'u'),
		'singleevents': true,
		'max-results': 9999
	});
	
	var ctz = sourceOptions.currentTimezone;
	if (ctz) {
		data.ctz = ctz = ctz.replace(' ', '_');
	}

	return $.extend({}, sourceOptions, {
		url: sourceOptions.url.replace(/\/basic$/, '/full') + '?alt=json-in-script&callback=?',
		dataType: 'jsonp',
		data: data,
		startParam: false,
		endParam: false,
		success: function(data) {
			var events = [];
			if (data.feed.entry) {
				$.each(data.feed.entry, function(i, entry) {
					var startStr = entry['gd$when'][0]['startTime'];
					var start = parseISO8601(startStr, true);
					var end = parseISO8601(entry['gd$when'][0]['endTime'], true);
					var allDay = startStr.indexOf('T') == -1;
					var url;
					$.each(entry.link, function(i, link) {
						if (link.type == 'text/html') {
							url = link.href;
							if (ctz) {
								url += (url.indexOf('?') == -1 ? '?' : '&') + 'ctz=' + ctz;
							}
						}
					});
					if (allDay) {
						addDays(end, -1); // make inclusive
					}
					events.push({
						id: entry['gCal$uid']['value'],
						title: entry['title']['$t'],
						url: url,
						start: start,
						end: end,
						allDay: allDay,
						location: entry['gd$where'][0]['valueString'],
						description: entry['content']['$t']
					});
				});
			}
			var args = [events].concat(Array.prototype.slice.call(arguments, 1));
			var res = applyAll(success, this, args);
			if ($.isArray(res)) {
				return res;
			}
			return events;
		}
	});
	
}


// legacy
fc.gcalFeed = function(url, sourceOptions) {
	return $.extend({}, sourceOptions, { url: url, dataType: 'gcal' });
};


})(jQuery);
function Map(mapId, options) {
    this.mapId = mapId;
    this.options = $.extend({}, options, this.DEFAULT_OPTIONS);
    this.markerMap = {};
    this.eventSource = null;
    this.map = this.createMap(this.mapId, this.options);
}

Map.prototype = {
    DEFAULT_OPTIONS: {
        zoom: 6,
        latitude: 34.649388888,
        longitude: 135.001472222,
        requestUrl: "/markers",
        mapTypeId: google.maps.MapTypeId.ROADMAP
    },

    createMap: function(mapId, options) {
        var map = new google.maps.Map(document.getElementById(mapId), {
            zoom: options.zoom,
            center: new google.maps.LatLng(options.latitude, options.longitude),
            mapTypeId: this.options.mapTypeId
        });

        var self = this;
        var mapChanged = function(event) { self.mapChanged(event); }
        google.maps.event.addListener(map, "dragend", mapChanged);
        google.maps.event.addListener(map, "zoom_changed", mapChanged);
        google.maps.event.addListenerOnce(map, "bounds_changed", mapChanged);

        return map;
    },

    mapChanged: function(event) {
        this.cancelRequest();
        this.removeOutsideMarkers();
        this.requestMarkers();
    },

    cancelRequest: function() {
        if(this.eventSource) {
            this.eventSource.close();
            this.eventSource = null;
        }
    },

    removeOutsideMarkers: function() {
        for(var key in this.markerMap) {
            if(!this.isInside(this.markerMap[key])) {
                this.markerMap[key].setMap(null);
                delete this.markerMap[key];
            }
        }
    },

    isInside: function(marker) {
        return this.map.getBounds().contains(marker.getPosition());
    },

    requestMarkers: function() {
        var self = this;
        this.eventSource = new EventSource(this.createRequestUrl());

        this.eventSource.addEventListener("marker", function(event) {
            self.addMarker(JSON.parse(event.data));
        });

        this.eventSource.addEventListener("done", function(event) {
            self.eventSource.close();
            self.eventSource = null;
        });
    },

    createRequestUrl: function() {
        var bounds = this.map.getBounds();
        var url = this.options.requestUrl;
        url += "?north=" + bounds.getNorthEast().lat();
        url += "&east=" + bounds.getNorthEast().lng();
        url += "&south=" + bounds.getSouthWest().lat();
        url += "&west=" + bounds.getSouthWest().lng();
        url += "&excludes=" + Object.keys(this.markerMap);
        return url;
    },

    addMarker: function(data) {
        if(this.markerMap[data.id]) {
            return;
        }

        var position = new google.maps.LatLng(data.latitude, data.longitude);
        var marker = new google.maps.Marker({map: this.map, position: position, title: data.name});
        this.markerMap[data.id] = marker;
    }
}

;
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//






;
