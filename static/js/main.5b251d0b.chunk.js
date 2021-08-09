(this["webpackJsonpshell-folio-shub"]=this["webpackJsonpshell-folio-shub"]||[]).push([[0],[,,,function(e,t,n){e.exports={container:"social-card_container__YG7xi",box:"social-card_box__FmQFb",boxText:"social-card_boxText__3mpq6",boxTitle:"social-card_boxTitle__WrcM0",profile:"social-card_profile__2-OPW",icon:"social-card_icon__2s3V3"}},function(e,t,n){e.exports={bash:"bashCmd_bash__1kVEg",username:"bashCmd_username__-8nhS",processor:"bashCmd_processor__3ZYS1",cmd:"bashCmd_cmd__-t7A-",typeingDone:"bashCmd_typeingDone__3pVub",cursor:"bashCmd_cursor__DbI-l"}},function(e,t,n){e.exports={listBox:"listBox_listBox__1b0pm","listBox-header":"listBox_listBox-header__1OUZk","listBox-body":"listBox_listBox-body__2ghON","listBox-item":"listBox_listBox-item__2dh74","listBox-item-label":"listBox_listBox-item-label__3t9i_"}},,,,function(e,t,n){e.exports={themeSelector:"App_themeSelector__2G17O",themeBlock:"App_themeBlock__3DZxL",active:"App_active__2bYUg"}},,,function(e,t,n){e.exports={container:"Folio_container__3QjW7"}},function(e,t,n){e.exports={icon:"Toolbar_icon__rM-_P"}},,,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(11),s=n.n(a),i=(n(20),n(2)),r=n(14),l=(n(21),n(0)),u=n(5),d=n.n(u),m=function(e){var t=e.next,n=e.items,o=void 0===n?[]:n,a=e.title;return Object(c.useEffect)((function(){var e=setTimeout((function(){null===t||void 0===t||t()}),1e3);return function(){return clearTimeout(e)}}),[t]),Object(l.jsxs)("div",{className:d.a.listBox,children:[a?Object(l.jsx)("div",{className:d.a["listBox-header"],children:a}):null,Object(l.jsx)("div",{className:d.a["listBox-body"],children:o.map((function(e){var t=e.label,n=e.iconClass,c=e.linkUrl;return Object(l.jsx)("div",{className:d.a["listBox-item"],children:Object(l.jsxs)("div",{className:d.a["listBox-item-label"],children:[n&&Object(l.jsx)("i",{className:"fa ".concat(n)}),c?Object(l.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:t}):t]})},t)}))})]})},b="Shubanker Chourasia",j="Shub@JS",x=[{ficon:"fa-github",title:"github",path:"https://github.com/shubanker"},{ficon:"fa-linkedin",title:"linkedin",path:"https://www.linkedin.com/in/shubanker/"},{ficon:"fa-stack-overflow",title:"StackOverflow",path:"https://stackoverflow.com/users/story/3623892"},{ficon:"fa-download",title:"Resume",path:"/docs/Shubanker_resume.pdf"}],f=n(3),h=n.n(f),p=[{command:"whoami",typeWritterText:"Shubanker Chourasia"},{command:"ls",component:function(e){var t=e.next;Object(c.useEffect)((function(){var e=setTimeout((function(){t()}),1e3);return function(){return clearTimeout(e)}}),[t]);return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",children:["about.txt","card.md","skills.txt","skills-summary.md"].map((function(e){return Object(l.jsx)("div",{className:"col-4 p-0",children:e},e)}))})})}},{command:"cat about.txt",typeWritterText:"\n    Super nerd who loves JavaScript & its frameworks, libraries and enjoys to customize all of the development environment.\n    Interested in devising a better problem solving method for challenging tasks,\n    and learning new technologies and tools.\n  ",typeWritterOptions:{typingSpeed:25}},{command:"du -sh skills.txt",component:function(e){var t=e.next,n=e.txt,o=void 0===n?"":n,a=e.styles;return Object(c.useEffect)((function(){var e=setTimeout((function(){t()}),1e3);return function(){return clearTimeout(e)}}),[t]),Object(l.jsx)("span",{className:"blinker",style:a,children:o})},componentProps:{txt:"233 TB skills.txt",styles:{color:"red"}}},{command:"skp-md-viewer skills-summary.md",component:function(e){var t=e.next;Object(c.useEffect)((function(){var e=setTimeout((function(){null===t||void 0===t||t()}),1e3);return function(){return clearTimeout(e)}}),[t]);var n=["JavaScript / Typescript","Nodejs","Angular","React","Redux / NgRx","Express","Java / SpringBoot"].map((function(e){return{label:e}})),o=["Git","Microservices","Nginx","Docker","K8s","NATS Streaming"].map((function(e){return{label:e}}));return Object(l.jsxs)("div",{className:"row justify-content-around",children:[Object(l.jsx)("div",{className:"col-8 col-md-4 col-lg-3",children:Object(l.jsx)(m,{items:n,title:"Languages / Frameworks"})}),Object(l.jsx)("div",{className:"col-8 col-md-4 col-lg-3",children:Object(l.jsx)(m,{items:o,title:"Tools"})}),Object(l.jsx)("div",{className:"col-lg-3"})]})}},{command:"skp-md-viewer card.md",component:function(e){var t=e.next;Object(c.useEffect)((function(){var e=setTimeout((function(){t()}),1e3);return function(){return clearTimeout(e)}}),[t]);return Object(l.jsx)("div",{className:"container ".concat(h.a.container),children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-lg-4 col-md-6 col-12",children:Object(l.jsxs)("div",{className:h.a.box,children:[Object(l.jsx)("img",{className:h.a.profile,src:"https://avatars.githubusercontent.com/u/12107685",alt:b}),Object(l.jsx)("div",{className:h.a.boxTitle,children:b}),Object(l.jsx)("div",{className:h.a.boxText,children:Object(l.jsx)("span",{children:"JavaScript Developer"})}),Object(l.jsx)("div",{className:h.a.icons,children:x.map((function(e){var t=e.ficon,n=e.path;return Object(l.jsx)("a",{href:n,children:Object(l.jsx)("i",{className:"".concat(h.a.icon," fa ").concat(t)})},t+n)}))})]})})})})}}],v=function(e){return Object(c.useEffect)(e,[])},O=n(8),_=n.n(O),g=n(4),N=n.n(g),k=function(e){var t=e.userName,n=e.next,o=e.cmd,a=void 0===o?"":o,s=e.retainCursor,r=void 0!==s&&s,u=Object(c.useState)(!1),d=Object(i.a)(u,2),m=d[0],b=d[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:N.a.bash,children:[Object(l.jsxs)("span",{className:N.a.username,children:[t," "]})," ",Object(l.jsx)("span",{className:N.a.processor,children:"~/Welcome"})]}),Object(l.jsxs)("div",{className:"".concat(N.a.cmd," ").concat(m?N.a.typeingDone:""),children:["$",Object(l.jsx)(_.a,{options:{cursorClassName:"Typewriter__cursor ".concat(N.a.cursor)},onInit:function(e){e.changeDelay(55).pauseFor(500).typeString(a||"").callFunction((function(){b(!r),null===n||void 0===n||n()})).start()}})]})]})},y=n(15),S=(n(24),function(e){var t,n=e.command,o=e.next,a=Object(c.useState)(!1),s=Object(i.a)(a,2),r=s[0],u=s[1],d=n.component,m=n.typeWritterText,b=n.typeWritterOptions,j=n.componentProps;if(d)t=Object(l.jsx)(d,Object(y.a)({next:o},j));else{var x,f=null!==(x=null===m||void 0===m?void 0:m.trim().split("\n"))&&void 0!==x?x:[];t=r?null===f||void 0===f?void 0:f.map((function(e){return Object(l.jsx)("span",{className:"command-line",children:e},e)})):Object(l.jsx)(_.a,{options:null!==b&&void 0!==b?b:{},onInit:function(e){var t;e.changeDelay(null!==(t=null===b||void 0===b?void 0:b.typingSpeed)&&void 0!==t?t:35),f.forEach((function(t){return e.typeString(t+"<br>").pauseFor(600)})),e.callFunction((function(){o(),u(!0)})).start()}})}return Object(l.jsx)(l.Fragment,{children:t})}),T=function(e){var t=e.command,n=e.next,o=Object(c.useState)(!1),a=Object(i.a)(o,2),s=a[0],r=a[1],u=Object(c.useCallback)((function(){n()}),[n]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(k,{userName:j,cmd:t.command,next:function(){return r(!0)}}),s?Object(l.jsx)(S,{command:t,next:u}):null]})},B=n(12),w=n.n(B),C=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(!1),s=Object(i.a)(a,2),u=s[0],d=s[1],m=Object(c.useState)(null),b=Object(i.a)(m,2),x=b[0],f=b[1],h=Object(c.useCallback)((function(){window.scrollTo({behavior:"smooth",top:document.body.scrollHeight})}),[]),O=Object(c.useCallback)((function(){d(!1),setTimeout((function(){if(n.length<p.length){var e=[].concat(Object(r.a)(n),[p[n.length]]);o(e),d(!0)}else h(),clearInterval(x)}),400)}),[n,h,x]),_=Object(c.useCallback)((function(){}),[]);v((function(){O(),f(setInterval((function(){h()}),2e3))}));var g=n.map((function(e,t){return Object(l.jsx)(T,{command:e,next:t===n.length-1?O:_},t)}));return Object(l.jsxs)("div",{className:"shell-container ".concat(w.a.container),children:[g,u?null:Object(l.jsx)(k,{userName:j,cmd:"",retainCursor:!0})]})},F=n(9),D=n.n(F),E=n(13),W=n.n(E),I=function(){return Object(l.jsx)("div",{className:"row justify-content-end mb-2 toolbar",children:Object(l.jsx)("div",{className:"col col-md-6 col-lg-4",children:Object(l.jsx)("div",{className:"row justify-content-end",children:x.map((function(e){var t=e.ficon,n=e.path,c=e.title;return Object(l.jsx)("div",{className:"col-1 ".concat(W.a.icon),children:Object(l.jsx)("a",{href:n,title:c,children:Object(l.jsx)("i",{className:"fa ".concat(t)})})},t+n)}))})})})};var J=function(){var e=Object(c.useState)("theme-default"),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(c.useMemo)((function(){return{"#222":"theme-default","#fff":"theme-light","#02203c":"theme-blue"}}),[]),s=Object(c.useMemo)((function(){return Object.keys(a)}),[a]);v((function(){document.body.classList.add(n)}));var r=Object(c.useCallback)((function(e){document.body.classList.replace(n,a[e]),o(a[e])}),[a,n]),u=Object(l.jsx)("div",{className:D.a.themeSelector,children:s.map((function(e){return Object(l.jsx)("div",{className:"".concat(D.a.themeBlock," ").concat(a[e]===n?D.a.active:""),style:{backgroundColor:e},onClick:function(){return r(e)}},e)}))});return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(I,{}),Object(l.jsx)(C,{}),u]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(J,{})}),document.getElementById("root")),A()}],[[25,1,2]]]);
//# sourceMappingURL=main.5b251d0b.chunk.js.map