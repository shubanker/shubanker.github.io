(this["webpackJsonpshell-folio-shub"]=this["webpackJsonpshell-folio-shub"]||[]).push([[0],[,,,function(e,t,n){e.exports={container:"social-card_container__YG7xi",box:"social-card_box__FmQFb",boxText:"social-card_boxText__3mpq6",boxTitle:"social-card_boxTitle__WrcM0",profile:"social-card_profile__2-OPW",icon:"social-card_icon__2s3V3"}},function(e,t,n){e.exports={bash:"bashCmd_bash__1kVEg",username:"bashCmd_username__-8nhS",processor:"bashCmd_processor__3ZYS1",cmd:"bashCmd_cmd__-t7A-",typeingDone:"bashCmd_typeingDone__3pVub",cursor:"bashCmd_cursor__DbI-l"}},function(e,t,n){e.exports={listBox:"listBox_listBox__1b0pm","listBox-header":"listBox_listBox-header__1OUZk","listBox-body":"listBox_listBox-body__2ghON","listBox-item":"listBox_listBox-item__2dh74","listBox-item-label":"listBox_listBox-item-label__3t9i_"}},,,,function(e,t,n){e.exports={themeSelector:"App_themeSelector__2G17O",themeBlock:"App_themeBlock__3DZxL",active:"App_active__2bYUg"}},,,function(e,t,n){e.exports={container:"Folio_container__3QjW7"}},function(e,t,n){e.exports={icon:"Toolbar_icon__rM-_P"}},,,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,o=n(1),r=n.n(o),a=n(11),i=n.n(a),s=(n(20),n(2)),l=n(14),u=(n(21),n(0)),d=n(5),m=n.n(d),b=function(e){var t=e.next,n=e.items,c=void 0===n?[]:n,r=e.title;return Object(o.useEffect)((function(){var e=setTimeout((function(){null===t||void 0===t||t()}),1e3);return function(){return clearTimeout(e)}}),[t]),Object(u.jsxs)("div",{className:m.a.listBox,children:[r?Object(u.jsx)("div",{className:m.a["listBox-header"],children:r}):null,Object(u.jsx)("div",{className:m.a["listBox-body"],children:c.map((function(e){var t=e.label,n=e.iconClass,c=e.linkUrl;return Object(u.jsx)("div",{className:m.a["listBox-item"],children:Object(u.jsxs)("div",{className:m.a["listBox-item-label"],children:[n&&Object(u.jsx)("i",{className:"fa ".concat(n)}),c?Object(u.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:t}):t]})},t)}))})]})},j="Shubanker Chourasia",f="Shub@JS",x=[{ficon:"fa-github",title:"github",path:"https://github.com/shubanker"},{ficon:"fa-linkedin",title:"linkedin",path:"https://www.linkedin.com/in/shubanker/"},{ficon:"fa-stack-overflow",title:"StackOverflow",path:"https://stackoverflow.com/users/3623892/shubanker"}],h=n(3),p=n.n(h),O=[{command:"whoami",typeWritterText:"Shubanker Chourasia"},{command:"ls",component:function(e){var t=e.next;Object(o.useEffect)((function(){var e=setTimeout((function(){t()}),1e3);return function(){return clearTimeout(e)}}),[t]);return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:["about.txt","card.md","skills.txt","skills-summary.md"].map((function(e){return Object(u.jsx)("div",{className:"col-4 p-0",children:e},e)}))})})}},{command:"cat about.txt",typeWritterText:"\n    Super nerd who loves JavaScript & its frameworks, libraries and enjoys to customize all of the development environment.\n    Interested in devising a better problem solving method for challenging tasks,\n    and learning new technologies and tools.\n  ",typeWritterOptions:{typingSpeed:25}},{command:"du -sh skills.txt",component:function(e){var t=e.next,n=e.txt,c=void 0===n?"":n,r=e.styles;return Object(o.useEffect)((function(){var e=setTimeout((function(){t()}),1e3);return function(){return clearTimeout(e)}}),[t]),Object(u.jsx)("span",{className:"blinker",style:r,children:c})},componentProps:{txt:"233 TB skills.txt",styles:{color:"red"}}},{command:"skp-md-viewer skills-summary.md",component:function(e){var t=e.next;Object(o.useEffect)((function(){var e=setTimeout((function(){null===t||void 0===t||t()}),1e3);return function(){return clearTimeout(e)}}),[t]);var n=["JavaScript / Typescript","Nodejs","Angular","React","Redux / NgRx","Express"].map((function(e){return{label:e}})),c=["Git","Microservices","Nginx","Docker","K8s","NATS Streaming"].map((function(e){return{label:e}}));return Object(u.jsxs)("div",{className:"row justify-content-around",children:[Object(u.jsx)("div",{className:"col-8 col-md-4 col-lg-3",children:Object(u.jsx)(b,{items:n,title:"Languages / Frameworks"})}),Object(u.jsx)("div",{className:"col-8 col-md-4 col-lg-3",children:Object(u.jsx)(b,{items:c,title:"Tools"})}),Object(u.jsx)("div",{className:"col-lg-3"})]})}},{command:"skp-md-viewer card.md",component:function(e){var t=e.next;Object(o.useEffect)((function(){var e=setTimeout((function(){t()}),1e3);return function(){return clearTimeout(e)}}),[t]);return Object(u.jsx)("div",{className:"container ".concat(p.a.container),children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-4 col-md-6 col-12",children:Object(u.jsxs)("div",{className:p.a.box,children:[Object(u.jsx)("img",{className:p.a.profile,src:"https://avatars.githubusercontent.com/u/12107685",alt:j}),Object(u.jsx)("div",{className:p.a.boxTitle,children:j}),Object(u.jsx)("div",{className:p.a.boxText,children:Object(u.jsx)("span",{children:"JavaScript Developer"})}),Object(u.jsx)("div",{className:p.a.icons,children:x.map((function(e){var t=e.ficon,n=e.path;return Object(u.jsx)("a",{href:n,children:Object(u.jsx)("i",{className:"".concat(p.a.icon," fa ").concat(t)})},t+n)}))})]})})})})}}],v=function(e){return Object(o.useEffect)(e,[])},_=n(8),g=n.n(_),y=n(4),N=n.n(y),k=function(e){var t=e.userName,n=e.next,c=e.cmd,r=void 0===c?"":c,a=e.retainCursor,i=void 0!==a&&a,l=Object(o.useState)(!1),d=Object(s.a)(l,2),m=d[0],b=d[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:N.a.bash,children:[Object(u.jsxs)("span",{className:N.a.username,children:[t," "]})," ",Object(u.jsx)("span",{className:N.a.processor,children:"~/Welcome"})]}),Object(u.jsxs)("div",{className:"".concat(N.a.cmd," ").concat(m?N.a.typeingDone:""),children:["$",Object(u.jsx)(g.a,{options:{cursorClassName:"Typewriter__cursor ".concat(N.a.cursor)},onInit:function(e){e.changeDelay(55).pauseFor(500).typeString(r||"").callFunction((function(){b(!i),null===n||void 0===n||n()})).start()}})]})]})},w=n(15),S=(n(24),function(e){var t,n=e.command,c=e.next,r=Object(o.useState)(!1),a=Object(s.a)(r,2),i=a[0],l=a[1],d=n.component,m=n.typeWritterText,b=n.typeWritterOptions,j=n.componentProps;if(d)t=Object(u.jsx)(d,Object(w.a)({next:c},j));else{var f,x=null!==(f=null===m||void 0===m?void 0:m.trim().split("\n"))&&void 0!==f?f:[];t=i?null===x||void 0===x?void 0:x.map((function(e){return Object(u.jsx)("span",{className:"command-line",children:e},e)})):Object(u.jsx)(g.a,{options:null!==b&&void 0!==b?b:{},onInit:function(e){var t;e.changeDelay(null!==(t=null===b||void 0===b?void 0:b.typingSpeed)&&void 0!==t?t:35),x.forEach((function(t){return e.typeString(t+"<br>").pauseFor(600)})),e.callFunction((function(){c(),l(!0)})).start()}})}return Object(u.jsx)(u.Fragment,{children:t})}),B=function(e){var t=e.command,n=e.next,c=Object(o.useState)(!1),r=Object(s.a)(c,2),a=r[0],i=r[1],l=Object(o.useCallback)((function(){n()}),[n]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{userName:f,cmd:t.command,next:function(){return i(!0)}}),a?Object(u.jsx)(S,{command:t,next:l}):null]})},T=n(12),C=n.n(T),E=["title","titleId"];function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,c,o=function(e,t){if(null==e)return{};var n,c,o={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function I(e,t){var n=e.title,r=e.titleId,a=D(e,E);return o.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",width:54,height:14,viewBox:"0 0 54 14",ref:t,"aria-labelledby":r},a),n?o.createElement("title",{id:r},n):null,c||(c=o.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)"},o.createElement("circle",{cx:6,cy:6,r:6,fill:"#FF5F56",stroke:"#E0443E",strokeWidth:.5}),o.createElement("circle",{cx:26,cy:6,r:6,fill:"#FFBD2E",stroke:"#DEA123",strokeWidth:.5}),o.createElement("circle",{cx:46,cy:6,r:6,fill:"#27C93F",stroke:"#1AAB29",strokeWidth:.5}))))}var W=o.forwardRef(I),A=(n.p,function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(!1),a=Object(s.a)(r,2),i=a[0],d=a[1],m=Object(o.useState)(null),b=Object(s.a)(m,2),j=b[0],x=b[1],h=Object(o.useCallback)((function(){window.scrollTo({behavior:"smooth",top:document.body.scrollHeight})}),[]),p=Object(o.useCallback)((function(){d(!1),setTimeout((function(){if(n.length<O.length){var e=[].concat(Object(l.a)(n),[O[n.length]]);c(e),d(!0)}else h(),clearInterval(j)}),400)}),[n,h,j]),_=Object(o.useCallback)((function(){}),[]);v((function(){p(),x(setInterval((function(){h()}),2e3))}));var g=n.map((function(e,t){return Object(u.jsx)(B,{command:e,next:t===n.length-1?p:_},t)}));return Object(u.jsxs)("div",{className:"shell-container ".concat(C.a.container),children:[Object(u.jsx)(W,{}),g,i?null:Object(u.jsx)(k,{userName:f,cmd:"",retainCursor:!0})]})}),P=(n(9),n(13)),J=n.n(P),L=function(){return Object(u.jsx)("div",{className:"row justify-content-end mb-2 toolbar",children:Object(u.jsx)("div",{className:"col col-md-6 col-lg-4",children:Object(u.jsx)("div",{className:"row justify-content-end",children:x.map((function(e){var t=e.ficon,n=e.path,c=e.title;return Object(u.jsx)("div",{className:"col-1 ".concat(J.a.icon),children:Object(u.jsx)("a",{href:n,title:c,children:Object(u.jsx)("i",{className:"fa ".concat(t)})})},t+n)}))})})})},M="theme-default";var R=function(){var e=Object(o.useState)(M),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(o.useMemo)((function(){return{"#222":"theme-default","#fff":"theme-light","#02203c":"theme-blue"}}),[]);return Object(o.useMemo)((function(){return Object.keys(r)}),[r]),v((function(){document.body.classList.add(n)})),Object(o.useCallback)((function(e){document.body.classList.replace(n,r[e]),c(r[e]),localStorage.setItem("theme",r[e])}),[r,n]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(L,{}),Object(u.jsx)(A,{}),null]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root")),G()}],[[25,1,2]]]);
//# sourceMappingURL=main.3dfc12a3.chunk.js.map