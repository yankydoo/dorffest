(this.webpackJsonprechna=this.webpackJsonprechna||[]).push([[0],{40:function(e,n,r){},41:function(e,n,r){},47:function(e,n,r){"use strict";r.r(n);var t=r(0),c=r(11),a=r.n(c),i=(r(40),r(41),r(27)),o=r(28),s=r(62),l=r(63),j=r(64),m=r(65),u=r(66),h=r(67),d=r(68),p=r(71),b=r(72),x=r(69),O=r(70),f=r(4),v=new Intl.NumberFormat("de-AT",{style:"currency",currency:"EUR"}),y=function(e){var n=Object(t.useState)(e.menuItems.map((function(){return 0}))),r=Object(o.a)(n,2),c=r[0],a=r[1],y=function(e,n,r){var t=Object(i.a)(e);return t[n]=Math.max(e[n]+r,0),t};return Object(f.jsxs)(s.a,{size:"small",children:[Object(f.jsx)(l.a,{children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(m.a,{children:"Speise"}),Object(f.jsx)(m.a,{children:"Preis"}),Object(f.jsx)(m.a,{align:"center",children:"Anzahl"})]})}),Object(f.jsx)(u.a,{children:e.menuItems.map((function(e,n){return Object(f.jsxs)(j.a,{children:[Object(f.jsx)(m.a,{children:e.name}),Object(f.jsxs)(m.a,{children:[Object(f.jsx)(h.a,{variant:"caption",color:"textSecondary",children:v.format(e.price)}),Object(f.jsx)("br",{}),v.format(e.price*c[n])]}),Object(f.jsx)(m.a,{align:"center",children:Object(f.jsxs)(h.a,{variant:"h6",color:"textPrimary",noWrap:!0,children:[Object(f.jsx)(d.a,{onClick:function(){return a(y(c,n,-1))},color:"primary",children:Object(f.jsx)(x.a,{})}),c[n],Object(f.jsx)(d.a,{onClick:function(){return a(y(c,n,1))},color:"primary",children:Object(f.jsx)(O.a,{})})]})})]},n)}))}),Object(f.jsx)(p.a,{children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(m.a,{children:"Summe"}),Object(f.jsx)(m.a,{children:Object(f.jsx)(h.a,{variant:"h6",color:"textPrimary",children:v.format(c.map((function(n,r){return e.menuItems[r].price*n})).reduce((function(e,n){return e+n}),0))})}),Object(f.jsx)(m.a,{align:"center",children:Object(f.jsx)(b.a,{variant:"outlined",onClick:function(){return a(e.menuItems.map((function(){return 0})))},color:"primary",children:"Reset"})})]})})]})},w=[{name:"Bier, Radler",price:3},{name:"1/8 rot/wei\xdf",price:2},{name:"G'spritzter, Kaiser",price:2.5},{name:"1/8 Veltliner Tradition",price:2.5},{name:"Cola, Fanta, Almd. 0,33 l",price:2},{name:"Korl, Schurli",price:2.5},{name:"Mineral 0,33 l",price:1.5},{name:"Kaffee",price:1.5},{name:"Mehlspeise",price:2},{name:"Pommes",price:2.5},{name:"Kotelettsemmel",price:4},{name:"Kotelett + Pommes/Semmel + Salat",price:9},{name:"Kotelett Kinderportion",price:6}],g=r(73),k=function(){return Object(f.jsx)(g.a,{className:"App",children:Object(f.jsx)(y,{menuItems:w})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(f.jsx)(k,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.4f947ad3.chunk.js.map