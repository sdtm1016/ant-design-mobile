webpackJsonp([33],{15:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(8),o=p(e),c=s(1),l=t(c);a["default"]=function(n){var a=n.type,s=n.className,t=void 0===s?"":s;return l.createElement("i",(0,o["default"])({},n,{className:(t+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},19:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var p=s(29),e=t(p),o=s(28),c=t(o);a["default"]=function(){function n(n,a){var s=[],t=!0,p=!1,e=void 0;try{for(var o,l=(0,c["default"])(n);!(t=(o=l.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(u){p=!0,e=u}finally{try{!t&&l["return"]&&l["return"]()}finally{if(p)throw e}}return s}return function(a,s){if(Array.isArray(a))return a;if((0,e["default"])(Object(a)))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},21:function(n,a){"use strict";function s(n,a){var s={},t={};return Object.keys(n).forEach(function(p){a.indexOf(p)!==-1?s[p]=n[p]:t[p]=n[p]}),[s,t]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},28:function(n,a,s){n.exports={"default":s(30),__esModule:!0}},29:function(n,a,s){n.exports={"default":s(31),__esModule:!0}},30:function(n,a,s){s(22),s(17),n.exports=s(32)},31:function(n,a,s){s(22),s(17),n.exports=s(33)},32:function(n,a,s){var t=s(38),p=s(42);n.exports=s(12).getIterator=function(n){var a=p(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return t(a.call(n))}},33:function(n,a,s){var t=s(51),p=s(20)("iterator"),e=s(39);n.exports=s(12).isIterable=function(n){var a=Object(n);return void 0!==a[p]||"@@iterator"in a||e.hasOwnProperty(t(a))}},138:function(n,a,s){"use strict";function t(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(8),o=p(e),c=s(6),l=p(c),u=s(19),i=p(u),k=s(3),r=p(k),d=s(5),f=p(d),m=s(4),v=p(m),g=s(1),y=t(g),h=s(2),N=p(h),b=s(15),E=p(b),C=s(21),B=p(C),_=function(n){function a(){return(0,r["default"])(this,a),(0,f["default"])(this,n.apply(this,arguments))}return(0,v["default"])(a,n),a.prototype.render=function(){var n,a=(0,B["default"])(this.props,["prefixCls","children","mode","className","iconName","leftContent","rightContent","onLeftClick"]),s=(0,i["default"])(a,2),t=s[0],p=t.prefixCls,e=t.children,c=t.mode,u=t.className,k=t.iconName,r=t.leftContent,d=t.rightContent,f=t.onLeftClick,m=s[1],v=(0,N["default"])((n={},(0,l["default"])(n,u,u),(0,l["default"])(n,p,!0),(0,l["default"])(n,p+"-"+c,!0),n));return y.createElement("div",(0,o["default"])({},m,{className:v}),y.createElement("div",{className:p+"-left",onClick:f},k?y.createElement("span",{className:p+"-left-icon"},y.createElement(E["default"],{type:k})):null,y.createElement("span",{className:p+"-left-content"},r)),y.createElement("div",{className:p+"-title"},e),y.createElement("div",{className:p+"-right"},d))},a}(y.Component);a["default"]=_,_.defaultProps={prefixCls:"am-navbar",mode:"dark",iconName:"left",onLeftClick:function(){}},n.exports=a["default"]},668:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=s(138),e=t(p),o=s(15),c=t(o),l=s(1),u=t(l),i=s(7);t(i);n.exports={content:[["p","\u6a21\u5f0f"]],meta:{order:0,title:"mode",filename:"components/nav-bar/demo/basic.md",id:"components-nav-bar-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NavBar<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >leftContent</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd4\u56de<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >rightContent={[&lt;Icon</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>user<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>search<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>plus<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >]</span><span class="token punctuation" >}</span>\n    <span class="token operator" >></span>NavBar<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >leftContent</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd4\u56de<span class="token punctuation" >"</span></span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>light<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >rightContent={[&lt;Icon</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>user<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>search<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>plus<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >]</span><span class="token punctuation" >}</span>\n    <span class="token operator" >></span>NavBar<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement("div",{style:{padding:8}},u["default"].createElement(e["default"],{leftContent:"\u8fd4\u56de",rightContent:[u["default"].createElement(c["default"],{key:"0",type:"user"}),u["default"].createElement(c["default"],{key:"1",type:"search"}),u["default"].createElement(c["default"],{key:"2",type:"plus"})]},"NavBar"),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(e["default"],{leftContent:"\u8fd4\u56de",mode:"light",rightContent:[u["default"].createElement(c["default"],{key:"0",type:"user"}),u["default"].createElement(c["default"],{key:"1",type:"search"}),u["default"].createElement(c["default"],{key:"2",type:"plus"})]},"NavBar"))}}},669:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=s(138),e=t(p),o=s(15),c=t(o),l=s(1),u=t(l),i=s(7);t(i);n.exports={content:[["p","\u5de6\u4fa7\u6216\u53f3\u4fa7\u65e0\u5185\u5bb9"]],meta:{order:1,title:"other",filename:"components/nav-bar/demo/basic1.md",id:"components-nav-bar-demo-basic1"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NavBar<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >rightContent={[&lt;Icon</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>user<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>search<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>plus<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >]</span><span class="token punctuation" >}</span>\n    <span class="token operator" >></span>NavBar<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >leftContent</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8fd4\u56de<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>NavBar<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >rightContent={&lt;Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ellipsis<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >}</span>\n    <span class="token operator" >></span>NavBar<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >leftContent</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53d6\u6d88<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >rightContent</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5b8c\u6210<span class="token punctuation" >"</span></span>\n    <span class="token punctuation" >></span></span>NavBar<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement("div",{style:{padding:8}},u["default"].createElement(e["default"],{iconName:!1,rightContent:[u["default"].createElement(c["default"],{key:"0",type:"user"}),u["default"].createElement(c["default"],{key:"1",type:"search"}),u["default"].createElement(c["default"],{key:"2",type:"plus"})]},"NavBar"),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(e["default"],{leftContent:"\u8fd4\u56de"},"NavBar"),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(e["default"],{iconName:!1,rightContent:u["default"].createElement(c["default"],{type:"ellipsis"})},"NavBar"),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(e["default"],{iconName:!1,leftContent:"\u53d6\u6d88",rightContent:"\u5b8c\u6210"},"NavBar"))}}},821:function(n,a,s){n.exports={basic:s(668),basic1:s(669)}}});