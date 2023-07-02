"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[843],{3309:function(n,e,t){t.d(e,{l:function(){return i}});var r,a=t(168),i=t(9202).Z.form(r||(r=(0,a.Z)(["\nborder: solid 1px black;\npadding: 20px;\nwidth: 180px;\nborder-radius: 4px;\nbutton {\n    display: block;\n    margin-top: 20px;\n}\n"])))},7843:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a=t(9434),i=t(5877),o=t(168),s=t(9202),c=s.Z.li(r||(r=(0,o.Z)(["\np {\n    display: inline-block;\n    margin-right: 20px;\n}\n"]))),u=t(7319),l=t(184),d=function(){var n=(0,a.I0)(),e=(0,a.v9)((function(n){return n.filter.filter})),t=(0,a.v9)((function(n){return n.contacts.items}));return(0,l.jsx)("ul",{children:t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).map((function(e){var t=e.id,r=e.name,a=e.number;return(0,l.jsxs)(c,{children:[(0,l.jsxs)("p",{children:[r," ",a]}),(0,l.jsx)(u.Z,{onClick:function(){return n((0,i.GK)(t))},children:"Delete"})]},t)}))})},m=t(9439),h=t(2791),p=t(3309);function f(){var n=(0,a.I0)(),e=(0,a.v9)((function(n){return n.contacts.items})),t=(0,h.useState)(""),r=(0,m.Z)(t,2),o=r[0],s=r[1],c=(0,h.useState)(""),d=(0,m.Z)(c,2),f=d[0],b=d[1],x=function(n){var e=n.currentTarget.value;"name"===n.currentTarget.name&&s(e),"number"===n.currentTarget.name&&b(e)},v=function(){s(""),b("")};return(0,l.jsxs)(p.l,{onSubmit:function(t){t.preventDefault();var r={name:"".concat(o),number:"".concat(f)};e.find((function(n){return n.name.toLowerCase().trim()===r.name.toLowerCase().trim()||n.number.trim()===r.number.trim()}))?alert("".concat(r.name,": is already in contacts")):n((0,i.uK)(r)),v()},children:[(0,l.jsxs)("label",{htmlFor:o,children:["Name",(0,l.jsx)("input",{type:"text",name:"name",value:o,pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain onle letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Bats de Castelmore d`Artagnan",required:!0,onChange:x,id:o})]}),(0,l.jsxs)("label",{htmlFor:f,children:["Number",(0,l.jsx)("input",{type:"tel",name:"number",value:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:x,id:f})]}),(0,l.jsx)(u.Z,{type:"submit",children:"Add contact"})]})}var b,x=t(8267),v=s.Z.input(b||(b=(0,o.Z)(["\ndisplay: block;\nmargin-top: 8px;\n}\n"]))),g=function(){var n=(0,a.I0)();return(0,l.jsxs)("label",{children:["Find contacts by name",(0,l.jsx)(v,{type:"text",onChange:function(e){return n((0,x.W)(e))}})]})},j=function(){var n=(0,a.I0)(),e=(0,a.v9)((function(n){return n.contacts.isLoading})),t=(0,a.v9)((function(n){return n.contacts.error}));return(0,h.useEffect)((function(){n((0,i.yF)())}),[n]),(0,l.jsxs)("div",{style:{height:"100vh",display:"block",marginLeft:"40px",fontSize:16,color:"#010101"},children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(f,{}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(g,{}),e&&!t&&(0,l.jsx)("b",{children:"Request in progress..."}),(0,l.jsx)(d,{})]})}}}]);
//# sourceMappingURL=843.46d99545.chunk.js.map