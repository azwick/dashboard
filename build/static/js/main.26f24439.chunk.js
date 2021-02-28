(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),r=(n(11),n(1)),i=n.n(r),s=n(8),l=n(3),o=(n(12),function(e){var t=e.updateItem,n=Object(r.useState)(""),i=Object(a.a)(n,2),s=i[0],l=i[1];return Object(c.jsx)("form",{onSubmit:function(e){return e.preventDefault(),t(s,e)},children:Object(c.jsx)("input",{value:s,type:"text",onChange:function(e){l(e.currentTarget.value)},placeholder:"Benenne dein ToDo...",required:!0})})}),j=function(e){var t=e.item,n=e.handleToggle,a=e.handleDeletion,r=e.updateItem;return Object(c.jsxs)("li",{id:t.id,className:"item",children:[t.content?Object(c.jsx)("div",{onClick:n,className:t.complete?"done":"",children:t.content}):Object(c.jsx)(o,{updateItem:r}),Object(c.jsx)("span",{onClick:a,className:"delete",children:"\u2717"})]},t.id)},u=function(e){var t=e.title,n=e.maxCount,i=Object(r.useState)([]),o=Object(a.a)(i,2),u=o[0],d=o[1],b=Object(r.useState)(u.length),h=Object(a.a)(b,2),m=h[0],O=h[1],x=function(e){e.preventDefault();var t=u.map((function(t){return t.id===e.currentTarget.parentNode.id?Object(l.a)(Object(l.a)({},t),{},{complete:!t.complete}):Object(l.a)({},t)}));d(t)},f=function(e){e.preventDefault();var t=u.filter((function(t){return t.id!==e.currentTarget.parentNode.id}));d(t),O(m-1)},p=function(e,n){var c=u.map((function(c){if(c.id===n.currentTarget.parentNode.id){var a=(m+t+e).replace(/[^a-zA-Z0-9]/g,"");return Object(l.a)(Object(l.a)({},c),{},{id:a,content:e})}return c}));d(c)};return Object(c.jsxs)("div",{className:"checklist",children:[Object(c.jsxs)("h2",{className:"title",children:[t," ",Object(c.jsxs)("span",{className:"counter",children:[m," von ",n]})]}),m>0?Object(c.jsx)("ul",{className:"list",children:u.map((function(e){return Object(c.jsx)(j,{item:e,handleToggle:x,handleDeletion:f,updateItem:p},e.id)}))}):Object(c.jsx)("div",{className:"emptyState",children:"F\xfcge dein erstes ToDo hinzu..."}),m<n&&Object(c.jsx)("button",{onClick:function(e){var n=m+1+t.replace(/[^a-zA-Z0-9]/g,""),c=[].concat(Object(s.a)(u),[{id:n,content:null,complete:!1}]);d(c),O(m+1)},children:"+"})]})},d=function(){var e=Object(r.useState)(new Date),t=Object(a.a)(e,2),n=t[0],i=t[1],s=n.toLocaleString("de-DE",{hour:"numeric",minute:"numeric"});return Object(r.useEffect)((function(){var e=setInterval((function(){return i(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"clock",children:s}),Object(c.jsx)("div",{className:"date",children:n.toLocaleString("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]})},b=function(e){var t=e.href;return Object(c.jsxs)("a",{className:"gitHub",href:t,target:"_blank",rel:"noreferrer",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"View Code"]})},h=function(e){var t=e.setTheme,n=function(e){t(e),localStorage.setItem("theme",e)};return Object(c.jsxs)("div",{className:"themeSwitch",children:[Object(c.jsx)("span",{onClick:function(){return n("light")},children:"Light"}),Object(c.jsx)("div",{className:"toggle",children:Object(c.jsx)("span",{className:"O"})}),Object(c.jsx)("span",{onClick:function(){return n("dark")},children:"Dark"})]})},m=function(){var e=localStorage.getItem("theme"),t=Object(r.useState)(e||"light"),n=Object(a.a)(t,2),i=n[0],s=n[1];return Object(c.jsxs)("div",{className:"App "+i,children:[Object(c.jsx)(b,{href:"https://github.com/azwick/dashboard"}),Object(c.jsx)(h,{setTheme:s}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(d,{}),Object(c.jsxs)("div",{className:"grid",children:[Object(c.jsx)(u,{title:"Prio A",maxCount:3}),Object(c.jsx)(u,{title:"Prio B",maxCount:3}),Object(c.jsx)(u,{title:"Prio C",maxCount:3})]})]})]})},O=n(7);n.n(O).a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.26f24439.chunk.js.map