(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{9684:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var i=t(5893),r=t(1120),s=t(9956),a=(0,r.Z)((function(n){return{header:{fontSize:75,marginBottom:"-1%"},main:{fontSize:30},container:{display:"inline-block"}}}));function o(n){var e=n.text,t=n.bold,r=a();return(0,i.jsxs)(s.Z,{className:r.container,children:[(0,i.jsx)(s.Z,{className:t?r.header:"",children:e.charAt(0)}),(0,i.jsx)("span",{className:r.main,children:e.substr(1).split("").map((function(n){return(0,i.jsxs)(i.Fragment,{children:[n," ",(0,i.jsx)("br",{})]})}))})]})}},2444:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return p}});var i=t(5893),r=t(9684),s=t(1120),a=t(8463),o=t(9738),c=t(2318),l=t(5984),d=(0,s.Z)((function(n){return{card:{width:"25%",margin:"2.5% 3%",backgroundColor:"#111111",color:"#ffffff",textAlign:"left",height:"auto",textDecoration:"none",minHeight:"15vh"},content:{padding:"2.5%",width:"100%",height:"100%"},description:{minHeight:"15%",color:"#aaaaaa"},stars:{display:"flex",flexDirection:"row",alignContent:"center",fontSize:"20px"}}}));function h(n){var e,t,r=n.repo,s=d();return(0,i.jsx)(a.Z,{className:s.card,children:(0,i.jsx)(o.Z,{style:{height:"100%"},children:(0,i.jsx)("a",{href:r.html_url,style:{textDecoration:"none",color:"white"},children:(0,i.jsxs)("div",{className:s.content,children:[(0,i.jsx)(c.Z,{variant:"h5",component:"div",children:r.name}),(0,i.jsx)("div",{className:s.description,children:(0,i.jsx)(c.Z,{style:{fontSize:14},children:null!==(e=r.description)&&void 0!==e?e:""})}),(0,i.jsxs)(c.Z,{style:{fontSize:14},children:["Language: ",null!==(t=r.language)&&void 0!==t?t:"none"]}),(0,i.jsxs)("div",{className:s.stars,children:[(0,i.jsx)(l.Z,{}),(0,i.jsx)(c.Z,{style:{fontSize:14,paddingLeft:"1%"},children:r.stargazers_count})]})]})})})})}var u=t(7294),f=t(282),x=(0,s.Z)((function(n){return{side:{display:"flex",flexDirection:"row"},column:{display:"flex",flexWrap:"wrap",width:"100%"},paddingBottom:{paddingBottom:"50%"},paddingHorizontal:{padding:"0px 5%"}}}));function p(){var n=(0,u.useState)([]),e=n[0],t=n[1];fetch("https://api.github.com/users/Ashvin-Ranjan/repos?sort=updated").then((function(n){return n.json().then((function(n){t(n)}))}));var s=x();return(0,i.jsx)("div",{className:"App",children:(0,i.jsx)("header",{className:"App-header",children:(0,i.jsxs)("div",{className:s.side,children:[(0,i.jsxs)("div",{className:s.paddingHorizontal,children:[(0,i.jsx)("h1",{children:(0,i.jsx)(r.Z,{text:".github"})}),(0,i.jsx)(f.Z,{href:"/",style:{color:"white",fontSize:30},children:"\u226a"})]}),(0,i.jsx)("div",{className:s.column,children:e.map((function(n){return(0,i.jsx)(h,{repo:n})}))})]})})})}},5696:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/github",function(){return t(2444)}])}},function(n){n.O(0,[760,282,815,774,888,179],(function(){return e=5696,n(n.s=e);var e}));var e=n.O();_N_E=e}]);