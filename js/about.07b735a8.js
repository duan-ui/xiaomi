(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"34eb":function(e,t,n){(function(o){function r(){return!("undefined"===typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function a(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var o="color: "+this.color;e.splice(1,0,o,"color: inherit");var r=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(a=r))})),e.splice(a,0,o)}}function i(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}}function c(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof o&&"env"in o&&(e=Object({NODE_ENV:"production",BASE_URL:""}).DEBUG),e}function u(){try{return window.localStorage}catch(e){}}t=e.exports=n("96fe"),t.log=i,t.formatArgs=a,t.save=s,t.load=c,t.useColors=r,t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(c())}).call(this,n("4362"))},"4de4":function(e,t,n){"use strict";var o=n("23e7"),r=n("b727").filter,a=n("1dde"),i=n("ae40"),s=a("filter"),c=i("filter");o({target:"Array",proto:!0,forced:!s||!c},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"582e":function(e,t,n){n("c975"),n("b0c0"),n("ac1f"),n("5319");var o=n("34eb")("jsonp");e.exports=i;var r=0;function a(){}function i(e,t,n){"function"==typeof t&&(n=t,t={}),t||(t={});var i,s,c=t.prefix||"__jp",u=t.name||c+r++,f=t.param||"callback",l=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,p=document.getElementsByTagName("script")[0]||document.head;function h(){i.parentNode&&i.parentNode.removeChild(i),window[u]=a,s&&clearTimeout(s)}function m(){window[u]&&h()}return l&&(s=setTimeout((function(){h(),n&&n(new Error("Timeout"))}),l)),window[u]=function(e){o("jsonp got",e),h(),n&&n(null,e)},e+=(~e.indexOf("?")?"&":"?")+f+"="+d(u),e=e.replace("?&","?"),o('jsonp req "%s"',e),i=document.createElement("script"),i.src=e,p.parentNode.insertBefore(i,p),m}},"91aa":function(e,t,n){},9363:function(e,t){var n=1e3,o=60*n,r=60*o,a=24*r,i=365.25*a;function s(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var s=parseFloat(t[1]),c=(t[2]||"ms").toLowerCase();switch(c){case"years":case"year":case"yrs":case"yr":case"y":return s*i;case"days":case"day":case"d":return s*a;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*o;case"seconds":case"second":case"secs":case"sec":case"s":return s*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}}}function c(e){return e>=a?Math.round(e/a)+"d":e>=r?Math.round(e/r)+"h":e>=o?Math.round(e/o)+"m":e>=n?Math.round(e/n)+"s":e+"ms"}function u(e){return f(e,a,"day")||f(e,r,"hour")||f(e,o,"minute")||f(e,n,"second")||e+" ms"}function f(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return s(e);if("number"===n&&!1===isNaN(e))return t.long?u(e):c(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},"96fe":function(e,t,n){var o;function r(e){var n,o=0;for(n in e)o=(o<<5)-o+e.charCodeAt(n),o|=0;return t.colors[Math.abs(o)%t.colors.length]}function a(e){function n(){if(n.enabled){var e=n,r=+new Date,a=r-(o||r);e.diff=a,e.prev=o,e.curr=r,o=r;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var c=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,o){if("%%"===n)return n;c++;var r=t.formatters[o];if("function"===typeof r){var a=i[c];n=r.call(e,a),i.splice(c,1),c--}return n})),t.formatArgs.call(e,i);var u=n.log||t.log||console.log.bind(console);u.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=r(e),"function"===typeof t.init&&t.init(n),n}function i(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),o=n.length,r=0;r<o;r++)n[r]&&(e=n[r].replace(/\*/g,".*?"),"-"===e[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))}function s(){t.enable("")}function c(e){var n,o;for(n=0,o=t.skips.length;n<o;n++)if(t.skips[n].test(e))return!1;for(n=0,o=t.names.length;n<o;n++)if(t.names[n].test(e))return!0;return!1}function u(e){return e instanceof Error?e.stack||e.message:e}t=e.exports=a.debug=a["default"]=a,t.coerce=u,t.disable=s,t.enable=i,t.enabled=c,t.humanize=n("9363"),t.names=[],t.skips=[],t.formatters={}},a640:function(e,t,n){"use strict";var o=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&o((function(){n.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,n){var o=n("83ab"),r=n("d039"),a=n("5135"),i=Object.defineProperty,s={},c=function(e){throw e};e.exports=function(e,t){if(a(s,e))return s[e];t||(t={});var n=[][e],u=!!a(t,"ACCESSORS")&&t.ACCESSORS,f=a(t,0)?t[0]:c,l=a(t,1)?t[1]:void 0;return s[e]=!!n&&!r((function(){if(u&&!o)return!0;var e={length:-1};u?i(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,f,l)}))}},b0c0:function(e,t,n){var o=n("83ab"),r=n("9bf2").f,a=Function.prototype,i=a.toString,s=/^\s*function ([^ (]*)/,c="name";!o||c in a||r(a,c,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})},b727:function(e,t,n){var o=n("0366"),r=n("44ad"),a=n("7b0b"),i=n("50c4"),s=n("65f0"),c=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,f=4==e,l=6==e,d=5==e||l;return function(p,h,m,g){for(var v,y,w=a(p),b=r(w),x=o(h,m,3),_=i(b.length),k=0,E=g||s,A=t?E(p,_):n?E(p,0):void 0;_>k;k++)if((d||k in b)&&(v=b[k],y=x(v,k,w),e))if(t)A[k]=y;else if(y)switch(e){case 3:return!0;case 5:return v;case 6:return k;case 2:c.call(A,v)}else if(f)return!1;return l?-1:u||f?f:A}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c975:function(e,t,n){"use strict";var o=n("23e7"),r=n("4d64").indexOf,a=n("a640"),i=n("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,u=a("indexOf"),f=i("indexOf",{ACCESSORS:!0,1:0});o({target:"Array",proto:!0,forced:c||!u||!f},{indexOf:function(e){return c?s.apply(this,arguments)||0:r(this,e,arguments.length>1?arguments[1]:void 0)}})},e76e:function(e,t,n){"use strict";var o=n("91aa"),r=n.n(o);r.a},f820:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[e._l(e.movies,(function(t,o){return n("h3",{key:o},[e._v(" "+e._s(t.MovieName)+" --票房:"+e._s(t.amount)+"万 ")])})),n("input",{ref:"file",attrs:{type:"file"}}),e._v(" "),n("button",{on:{click:e.upImg}},[e._v("上传")]),e.pic?n("img",{attrs:{src:e.pic,width:"200",alt:""}}):e._e(),n("h1",[e._v(e._s(e.add))]),e._l(e.feiyan,(function(t,o){return n("h3",{key:o},[e._v(e._s(t.one_level_area)+" "+e._s(t.sure_cnt))])}))],2)},r=[],a=(n("99af"),n("4de4"),n("582e")),i=n.n(a),s={data:function(){return{joks:[],page:1,isLoading:!1,movies:[],pic:"",add:"",feiyan:""}},created:function(){this.getJoks(),this.getMovies(),this.getAdd(),this.getFeiyan()},methods:{getFeiyan:function(){var e=this;this.$http.get("http://localhost:8080/feiyan/special?uc_param_str=pccplomi&feiyan=1&district=1&tabStart=0&tabEnd=1&tabBrief=1&aid=3804775841868884355").then((function(t){e.feiyan=t.data.data.feiyan.cities.filter((function(e){return"中国"!=e.country})).sort((function(e,t){return e.sure_cnt>t.sure_cnt?-1:1}))})).catch((function(e){console.log("err",e)}))},getAdd:function(){var e=this;i()("http://api.map.baidu.com/location/ip?ak=I5p02PxH5e459CAk9vt4elbXNTkgfxde",{},(function(t,n){e.add=n.content.address}))},upImg:function(){var e=this,t=this.$refs.file.files[0],n=new FormData;n.append("file",t);var o={headers:{"Content-Type":"multipart/form-data"}};this.$http({method:"post",url:"/ajax/file.php",data:n,configs:o}).then((function(t){console.log(t),0==t.data.error&&(e.pic="http://www.520mg.com"+t.data.pic,e.$refs.file.value="")}))},getMovies:function(){var e=this;this.$http.post("http://www.endata.com.cn/API/GetData.ashx","MethodName=BoxOffice_GetPcHomeList",{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(t){console.log(t.data),e.movies=t.data.Data.Table1.sort((function(e,t){return e.amount>t.amount?-1:1}))})).catch((function(e){console.log(e)}))},getJoks:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;2==t&&(this.isLoading=!0),this.$http.get("http://www.520mg.com/mi/list.php?page="+this.page).then((function(n){1==t?e.joks=e.joks.concat(n.data.result.filter((function(e){return e.title}))):2==t&&(e.joks=n.data.result.filter((function(e){return e.title})).concat(e.joks)),e.page++,e.isLoading=!1})).catch((function(e){console.log(e)}))}}},c=s,u=(n("e76e"),n("2877")),f=Object(u["a"])(c,o,r,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=about.07b735a8.js.map