(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[622],{3228:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(5893),i=n(2809),a=n(7294),s=n(282),l=n(1731);function c(e){var t=e.translate,n=e.text,i=e.className,a=e.allowLowercase,s=e.highlightUntranslated;return console.log(),(0,r.jsx)("span",{className:i,children:(a?n:n.toUpperCase()).split("").map((function(e){return t[e]&&t[e]!==e?(0,r.jsx)(r.Fragment,{children:t[e]}):s?(0,r.jsx)("span",{style:{backgroundColor:"red"},children:e}):(0,r.jsx)(r.Fragment,{children:e})}))})}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=(0,n(1120).Z)((function(e){return u(u({},e.spreadIt),{},{title:{height:"10%",fontSize:75},side:{display:"flex",flexDirection:"column",width:"100%"},column:{display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center",width:"100%"}})}));function f(e){var t=e.name,n=e.dictionary,i=e.allowLowercase,o=e.highlightUntranslated,u=d(),f=(0,a.useState)(""),h=f[0],p=f[1];return(0,r.jsx)("div",{className:"App",children:(0,r.jsxs)("header",{className:"App-header-align-top",children:[(0,r.jsx)("div",{className:u.title,children:t}),(0,r.jsxs)("div",{className:u.side,children:[(0,r.jsx)("div",{className:u.column,style:{marginTop:"15%"},children:(0,r.jsx)(l.Z,{id:"outlined-basic",className:u.inputField,style:{alignSelf:"center",justifySelf:"center",width:"25%"},color:"primary",label:"Text",variant:"filled",onChange:function(e){p(e.target.value)}})}),(0,r.jsx)("div",{className:u.column,children:(0,r.jsx)(c,{translate:n,text:h,allowLowercase:i,highlightUntranslated:o})}),(0,r.jsx)("div",{className:u.column,style:{marginTop:"15%"},children:(0,r.jsx)(s.Z,{className:u.button,style:{alignSelf:"center"},href:"/stuff",children:"Back"})})]})]})})}},4159:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),i=n(3228),a=JSON.parse('{"A":"\u0391","a":"\u0430","B":"\u0392","b":"\u0185","C":"\u0421","c":"\u0441","D":"\u13a0","d":"\u0501","E":"\u0395","e":"\u0435","F":"\u0492","f":"\u01ad","G":"\u050c","g":"\u0261","H":"\u0397","h":"\u04bb","I":"\u0399","i":"\u0456","J":"\u13ab","j":"\u0458","K":"\u039a","k":"\u2c95","L":"\u13de","l":"\u217c","M":"\u039c","m":"\u217f","N":"\u039d","n":"\u2d16","O":"\u039f","o":"\u043e","P":"\u03a1","p":"\u2ca3","Q":"\u051a","q":"\u051b","R":"\u13d2","r":"\u027e","S":"\u0405","s":"\u0455","T":"\u03a4","t":"\u03ef","U":"\u22c3","u":"\u222a","V":"\u13d9","v":"\u2228","W":"\u051c","w":"\u051d","X":"\u03a7","x":"\u0445","Y":"\u03a5","y":"\u04af","Z":"\u0396","z":"\u2c8d",";":"\u037e"," ":"\xa0"}');function s(){return(0,r.jsx)(i.Z,{name:"Similar Text Generator",dictionary:a,allowLowercase:!0,highlightUntranslated:!0})}},6032:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stuff/similar",function(){return n(4159)}])}},function(e){e.O(0,[760,282,731,774,888,179],(function(){return t=6032,e(e.s=t);var t}));var t=e.O();_N_E=t}]);