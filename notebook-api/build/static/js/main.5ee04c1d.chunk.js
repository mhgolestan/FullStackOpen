(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{39:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(0),o=e(2),r=e(15),i=e.n(r),a=e(6),u=e(3),s=function(t){var n=t.note,e=t.toggleImportance,o=n.important?"make not important":"make important";return Object(c.jsxs)("li",{className:"note",children:[n.content,Object(c.jsx)("button",{onClick:e,children:o})]})},j=function(t){var n=t.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},l=e(4),f=e.n(l),b="/api/notes",d=function(){var t=f.a.get(b),n={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(n)}))},m=function(t){return f.a.post(b,t).then((function(t){return t.data}))},h=function(t,n){return f.a.put("".concat(b,"/").concat(t),n).then((function(t){return t.data}))},O=function(){return Object(c.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(c.jsx)("br",{}),Object(c.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2020"})]})},p=function(){var t=Object(o.useState)([]),n=Object(u.a)(t,2),e=n[0],r=n[1],i=Object(o.useState)(""),l=Object(u.a)(i,2),f=l[0],b=l[1],p=Object(o.useState)(!0),v=Object(u.a)(p,2),x=v[0],g=v[1],S=Object(o.useState)(null),k=Object(u.a)(S,2),y=k[0],w=k[1];Object(o.useEffect)((function(){d().then((function(t){r(t)}))}),[]);var N=x?e:e.filter((function(t){return t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)(j,{message:y}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})}),Object(c.jsx)("ul",{children:N.map((function(t,n){return Object(c.jsx)(s,{note:t,toggleImportance:function(){return function(t){"http://localhost:3001/notes/".concat(t);var n=e.find((function(n){return n.id===t})),c=Object(a.a)(Object(a.a)({},n),{},{important:!n.important});h(t,c).then((function(n){r(e.map((function(e){return e.id!==t?e:n})))})).catch((function(t){w("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3)}))}(t.id)}},n)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:f,date:(new Date).toISOString(),important:Math.random()>.5,id:e.length+1};m(n).then((function(t){r(e.concat(t)),b("")}))},children:[Object(c.jsx)("input",{value:f,onChange:function(t){b(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"save"})]}),Object(c.jsx)(O,{})]})};e(39);i.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5ee04c1d.chunk.js.map