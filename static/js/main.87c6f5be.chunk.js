(this.webpackJsonpmini_calculator=this.webpackJsonpmini_calculator||[]).push([[0],{10:function(e,t,r){},11:function(e,t,r){},13:function(e,t,r){"use strict";r.r(t);var a=r(2),c=r.n(a),n=r(5),i=r.n(n),d=(r(10),r(1)),u=r(4),s=(r(11),r(0));var p=function(e){var t=e.digit,r=e.dispatch;return Object(s.jsx)("button",{onClick:function(){return r({type:"add-digits",value:{digit:t}})},children:t})};var l=function(e){var t=e.operator,r=e.dispatch;return Object(s.jsx)("button",{onClick:function(){return r({type:"operations",value:{operator:t}})},children:t})},o=new Intl.NumberFormat("en-us",{maximumFractionDigits:0});function O(e){if(null!=e){var t=e.split("."),r=Object(u.a)(t,2),a=r[0],c=r[1];return console.log("Operand "+a+" "+c),null==c?o.format(a):"".concat(o.format(a),".").concat(c)}}function j(e,t){var r=t.type,a=t.value;switch(r){case"add-digits":return"0"===a.digit&&"0"===e.currOperand||null!=e.currOperand&&"."===a.digit&&e.currOperand.includes(".")?e:!0===e.isEvaluated?Object(d.a)(Object(d.a)({},e),{},{currOperand:a.digit,isEvaluated:!1}):Object(d.a)(Object(d.a)({},e),{},{currOperand:"".concat(e.currOperand||"").concat(a.digit)});case"operations":return void 0===e.prevOperand||null===e.prevOperand?Object(d.a)(Object(d.a)({},e),{},{operation:a.operator,prevOperand:e.currOperand,currOperand:null}):null===e.currOperand?Object(d.a)(Object(d.a)({},e),{},{operation:a.operator}):Object(d.a)(Object(d.a)({},e),{},{prevOperand:b(e),operation:a.operator,currOperand:null});case"evaluate":return null===e.currOperand||null===e.prevOperand||null===e.operation?e:Object(d.a)(Object(d.a)({},e),{},{isEvaluated:!0,prevOperand:null,operation:null,currOperand:b(e)});case"delete":return!0===e.isEvaluated?Object(d.a)(Object(d.a)({},e),{},{currOperand:null,isEvaluated:!1}):null===e.currOperand?e:1===e.currOperand.length?Object(d.a)(Object(d.a)({},e),{},{currOperand:null}):Object(d.a)(Object(d.a)({},e),{},{currOperand:e.currOperand.slice(0,e.currOperand.length-1)});case"clear":return{};default:return e}}function b(e){var t,r=parseFloat(e.prevOperand),a=parseFloat(e.currOperand);switch(e.operation){case"+":t=r+a;break;case"\u2212":t=r-a;break;case"x":t=r*a;break;case"\xf7":t=r/a;break;case"%":t=r%a;break;default:t=null}return t.toString()}var h=function(){var e=Object(a.useReducer)(j,{}),t=Object(u.a)(e,2),r=t[0],c=r.prevOperand,n=r.currOperand,i=r.operation,d=t[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Mini Calculator"}),Object(s.jsxs)("div",{className:"outerbox",children:[Object(s.jsxs)("div",{className:"inputArea",children:[Object(s.jsxs)("div",{className:"upper",children:[O(c)," ",i]}),Object(s.jsx)("div",{className:"lower",children:O(n)})]}),Object(s.jsx)("button",{onClick:function(){return d({type:"clear"})},children:"C"}),Object(s.jsx)(l,{operator:"%",dispatch:d}),Object(s.jsx)("button",{onClick:function(){return d({type:"delete"})},children:"Del"}),Object(s.jsx)(l,{operator:"\xf7",dispatch:d}),Object(s.jsx)(p,{digit:"7",dispatch:d}),Object(s.jsx)(p,{digit:"8",dispatch:d}),Object(s.jsx)(p,{digit:"9",dispatch:d}),Object(s.jsx)(l,{operator:"x",dispatch:d}),Object(s.jsx)(p,{digit:"4",dispatch:d}),Object(s.jsx)(p,{digit:"5",dispatch:d}),Object(s.jsx)(p,{digit:"6",dispatch:d}),Object(s.jsx)(l,{operator:"\u2212",dispatch:d}),Object(s.jsx)(p,{digit:"1",dispatch:d}),Object(s.jsx)(p,{digit:"2",dispatch:d}),Object(s.jsx)(p,{digit:"3",dispatch:d}),Object(s.jsx)(l,{operator:"+",dispatch:d}),Object(s.jsx)(p,{digit:"0",dispatch:d}),Object(s.jsx)(p,{digit:".",dispatch:d}),Object(s.jsx)("button",{className:"equalSign",onClick:function(){return d({type:"evaluate"})},children:"="})]})]})},v=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,14)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),v()}},[[13,1,2]]]);
//# sourceMappingURL=main.87c6f5be.chunk.js.map