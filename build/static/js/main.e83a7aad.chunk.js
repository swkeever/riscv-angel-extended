(this["webpackJsonpriscv-angel-extended"]=this["webpackJsonpriscv-angel-extended"]||[]).push([[0],{65:function(e,a,t){e.exports=t(72)},72:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(9),i=t.n(l),o=t(25),c=t(2),s=function(e){var a=e.registers,t=Object(r.useState)("all"),l=Object(c.a)(t,2),i=l[0],o=l[1],s=function(){switch(i){case"callee-saved":return a.filter((function(e){return"Callee"===e.saver}));case"caller-saved":return a.filter((function(e){return"Caller"===e.saver}));case"all":return a;default:throw Error("unknown filter")}}(),u=function(e){return e===i?"btn-active":void 0},m=function(){return n.a.createElement("div",{className:"btn-group",role:"group"},n.a.createElement("button",{className:u("callee-saved"),type:"button",onClick:function(){return o("callee-saved")}},"Callee-saved"),n.a.createElement("button",{className:u("caller-saved"),type:"button",onClick:function(){return o("caller-saved")}},"Caller-saved"),n.a.createElement("button",{className:u("all"),type:"button",onClick:function(){return o("all")}},"All"))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,null),n.a.createElement("ul",{className:"register-list"},s.map((function(e){return n.a.createElement("li",{className:"register-row",key:"reg-".concat(e.abiName)},n.a.createElement("span",{className:"register-name"},e.name),n.a.createElement("span",{className:"register-abi"},e.abiName),n.a.createElement("span",{className:"register-value"},"".concat((e.value>>>0).toString(16))))}))))},u=[{name:"x0",abiName:"zero",description:"hardwired zero",saver:null},{name:"x1",abiName:"ra",description:"return address",saver:"Caller"},{name:"x2",abiName:"sp",description:"stack pointer",saver:"Callee"},{name:"x3",abiName:"gp",description:"global pointer",saver:null},{name:"x4",abiName:"tp",description:"thread pointer",saver:null},{name:"x5",abiName:"t0",description:"temporary register",saver:"Caller"},{name:"x6",abiName:"t1",description:"temporary register",saver:"Caller"},{name:"x7",abiName:"t2",description:"temporary register",saver:"Caller"},{name:"x8",abiName:"s0 / fp",description:"saved register / frame pointer",saver:"Callee"},{name:"x9",abiName:"s1",description:"saved register",saver:"Callee"},{name:"x10",abiName:"a0",description:"function argument / return value",saver:"Caller"},{name:"x11",abiName:"a1",description:"function argument / return value",saver:"Caller"},{name:"x12",abiName:"a2",description:"function argument",saver:"Caller"},{name:"x13",abiName:"a3",description:"function argument",saver:"Caller"},{name:"x14",abiName:"a4",description:"function argument",saver:"Caller"},{name:"x15",abiName:"a5",description:"function argument",saver:"Caller"},{name:"x16",abiName:"a6",description:"function argument",saver:"Caller"},{name:"x17",abiName:"a7",description:"function argument",saver:"Caller"},{name:"x18",abiName:"s2",description:"saved register",saver:"Callee"},{name:"x19",abiName:"s3",description:"saved register",saver:"Callee"},{name:"x20",abiName:"s4",description:"saved register",saver:"Callee"},{name:"x21",abiName:"s5",description:"saved register",saver:"Callee"},{name:"x22",abiName:"s6",description:"saved register",saver:"Callee"},{name:"x23",abiName:"s7",description:"saved register",saver:"Callee"},{name:"x24",abiName:"s8",description:"saved register",saver:"Callee"},{name:"x25",abiName:"s9",description:"saved register",saver:"Callee"},{name:"x26",abiName:"s10",description:"saved register",saver:"Callee"},{name:"x27",abiName:"s11",description:"saved register",saver:"Callee"},{name:"x28",abiName:"t3",description:"temporary register",saver:"Caller"},{name:"x29",abiName:"t4",description:"temporary register",saver:"Caller"},{name:"x30",abiName:"t5",description:"temporary register",saver:"Caller"},{name:"x31",abiName:"t6",description:"temporary register",saver:"Caller"}],m=function(){return u};var d=function(e,a){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=e}),[e]),Object(r.useEffect)((function(){if(null!==a){var e=setInterval((function(){t.current()}),a);return function(){return clearInterval(e)}}return null}),[a])};var v=function(){var e=Object(r.useState)(null),a=Object(c.a)(e,2),t=a[0],n=a[1];return d((function(){n(window.myCpu)}),1e3),t||null},p=function(){return n.a.createElement("div",{className:"loader"},"Loading...")},f=function(e){var a=e.title;return n.a.createElement("h2",{className:"module-header"},a)},g=function(){var e=v();if(!e)return n.a.createElement(p,null);var a=m(),t=e.registers.map((function(e,t){return Object(o.a)({},a[t],{value:e.low_})}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{title:"Registers"}),n.a.createElement(s,{registers:t}))},b=t(17);function N(e,a){return e.data.value/parseFloat(a)*100}for(var C=function(e){var a=e.pie,t=e.total,r=b.a().innerRadius(0).outerRadius(200);return a.filter((function(e){return Math.floor(N(e,t))>0})).map((function(e,a){return n.a.createElement("g",{className:"inst-pie-slice-".concat(a),key:"".concat(a.toString())},n.a.createElement("path",{key:"".concat(e.data.label,"value"),d:r(e)}),n.a.createElement("text",{x:"0",key:"".concat(e.data.label,"label"),transform:"translate(".concat(r.centroid(e),")")},n.a.createElement("tspan",{className:"inst-pie-name"},e.data.label),n.a.createElement("tspan",{x:"0",dy:"1.2em",className:"inst-pie-percent"},"".concat(N(e,t).toFixed(2),"%"))))}))},x=function(e){var a=e.data,t=e.total;if(a.filter((function(e){return 0===e.value})).length>0)return n.a.createElement(p,null);var r=b.b().value((function(e){return e.value}))(a);return n.a.createElement("svg",{className:"inst-pie",height:400,width:400},n.a.createElement("g",{transform:"translate(".concat(200,", ").concat(200,")")},n.a.createElement(C,{pie:r,total:t})))},E=function(){var e=v();return e?n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{title:"Instruction Ratios"}),n.a.createElement(x,{data:e.instruction_amounts,total:e.totalInstructions})):n.a.createElement(p,null)},y=t(5),h=t.n(y),j=getComputedStyle(document.body),O={},k=1;k<=9;k+=1)O["colorP".concat(k)]=j.getPropertyValue("--color-p".concat(k)),O["colorG".concat(k)]=j.getPropertyValue("--color-g".concat(k)),O["sz".concat(k)]=j.getPropertyValue("--sz-".concat(k)),k<=4&&(O["tiny".concat(k)]=j.getPropertyValue("--tiny-".concat(k)));O.font=j.getPropertyValue("--font"),O.fontMono=j.getPropertyValue("--font-mono");var P=O;h.a.defaults.global.defaultFontFamily=P.font,h.a.defaults.global.defaultFontColor=P.colorG5,h.a.defaults.global.defaultFontSize=parseInt(P.sz1,10);var w=function(){var e=Object(r.useState)([]),a=Object(c.a)(e,2),t=a[0],l=a[1],i=Object(r.useState)([0]),o=Object(c.a)(i,2),s=o[0],u=o[1],m=v(),d=n.a.createRef(),g=Object(r.useState)(null),b=Object(c.a)(g,2),N=b[0],C=b[1],x={labels:["5","4","3","2","1"],datasets:[{fill:!1,borderColor:P.colorP4,pointBackgroundColor:P.colorP4,hoverBackgroundColor:P.colorP3,data:t}]};return Object(r.useEffect)((function(){if(m&&!N){var e=d.current.getContext("2d");C(new h.a(e,{type:"line",data:x,options:{responsive:!0,aspectRatio:1.5,legend:{display:!1},scales:{xAxes:[{gridLines:{color:P.colorG8}}],yAxes:[{gridLines:{color:P.colorG8}}]}}}))}else m&&N&&(N.data=x,N.update(0))}),[m,N,d,x]),Object(r.useEffect)((function(){if(m&&s!==m.nonzeroMemoryTotal){if(10===t.length){var e=t.filter((function(e,a){return 0!==a})).concat(m.nonzeroMemoryTotal);l(e)}else{var a=t.concat(m.nonzeroMemoryTotal);l(a)}u(m.nonzeroMemoryTotal)}}),[m,t,s]),m?n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{title:"Number of Non-zero Words"}),n.a.createElement("div",{className:"mem-graph"},n.a.createElement("canvas",{id:"myChart",ref:d}))):n.a.createElement(p,null)};i.a.render(n.a.createElement(g,null),document.querySelector("#registerPanel")),i.a.render(n.a.createElement(E,null),document.querySelector("#instructionPanel")),i.a.render(n.a.createElement(w,null),document.querySelector("#memoryPanel"))}},[[65,1,2]]]);
//# sourceMappingURL=main.e83a7aad.chunk.js.map