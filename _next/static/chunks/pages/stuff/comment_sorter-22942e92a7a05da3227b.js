(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[120],{9334:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(4942),i=n(7294),s=n(282),o=n(1120),c=n(5893);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=(0,o.Z)((function(e){return l(l({},e.spreadIt),{},{title:{height:"10%",fontSize:75},side:{display:"flex",flexDirection:"column",width:"100%"},column:{display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center",width:"100%"}})}));function m(){var e=u(),t=(0,i.useState)(null),n=t[0],r=t[1],o="https://youtube-comment-selection-backend.asra.repl.co",a=function(){fetch("".concat(o,"/random_comment")).then((function(e){if(!e.ok)throw new Error("HTTP error ".concat(e.status));e.json().then((function(e){return r(e)}))}))},l=function(e){return function(){fetch("".concat(o,"/catagorize_comment/").concat(n.id,"/").concat(e.toString()),{method:"POST",body:"{}"}),a()}};return(0,i.useEffect)((function(){a()}),[]),(0,c.jsx)("div",{className:"App",children:(0,c.jsxs)("header",{className:"App-header-align-top",children:[(0,c.jsx)("div",{className:e.title,children:"Youtube Comment sorter"}),(0,c.jsxs)("div",{className:e.side,children:[n?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:e.column,style:{marginTop:"5%"},children:["Decide whether a comment is spam or not spam, this will be used later for a machine learning algorithm ",(0,c.jsx)("br",{}),"The way to decide is to see whether it links a random youtube video, or if there is repetitive phrases or self-promotion."]}),(0,c.jsxs)("div",{className:e.column,style:{marginTop:"1%"},children:["From @",n.author,":",(0,c.jsx)("br",{}),'"',n.content.split("\n")[0],n.content.split("\n").slice(1).map((function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("br",{}),e]})})),'"']}),(0,c.jsxs)("div",{className:e.column,style:{marginTop:"5%"},children:[(0,c.jsx)(s.Z,{className:e.button,style:{alignSelf:"center",marginRight:"2%"},onClick:l(!0),children:"Spam"}),(0,c.jsx)(s.Z,{className:e.button,style:{alignSelf:"center",marginRight:"2%"},onClick:l(!1),children:"Not Spam"}),(0,c.jsx)(s.Z,{className:e.button,style:{alignSelf:"center"},onClick:a,children:"Next"})]})]}):(0,c.jsx)("div",{className:e.column,style:{marginTop:"5%"},children:"Uh Oh! The backend API is down, please let me know that this is happening and I will try to fix it if this does not stop in 5 minutes."}),(0,c.jsx)("div",{className:e.column,style:{marginTop:"5%"},children:(0,c.jsx)(s.Z,{className:e.button,style:{alignSelf:"center"},href:"/stuff",children:"Back"})})]})]})})}},8997:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stuff/comment_sorter",function(){return n(9334)}])}},function(e){e.O(0,[760,282,774,888,179],(function(){return t=8997,e(e.s=t);var t}));var t=e.O();_N_E=t}]);