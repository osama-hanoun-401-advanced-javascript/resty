(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{26:function(e,t,a){},30:function(e,t,a){e.exports=a(57)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),o=a.n(l),s=(a(35),a(8)),u=a(9),c=a(11),i=a(10),m=a(12),h=a(1),d=(a(36),a(37),a(26)),f=a.n(d),p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"}," Home")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/history"}," History")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/help"}," Help"))))},E=function(){return r.a.createElement("header",{className:f.a.header},r.a.createElement("h1",null,"RESTy"),r.a.createElement(p,null))},y=(a(43),function(e){return r.a.createElement("footer",{className:"footer-"+e.footerClass},r.a.createElement("p",null,"Made with \u2665 by ",r.a.createElement("a",{href:"https://www.linkedin.com/in/osama-hanoun/"},"Osama Hanoun")," "))}),g=a(28),b=a(18),v=a.n(b),x=a(29),k=(a(45),a(19)),O=a.n(k),S=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e))._handleSubmit=function(){var e=Object(x.a)(v.a.mark((function e(t,a){var r,l,o,s,u,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=t.target.method.value,l=t.target.url.value,o=!!n.state.textArea&&t.target.textArea.value,console.log("url ",l," method ",r," textarea",o),c=localStorage.getItem("history")?JSON.parse(localStorage.getItem("history")):[],e.prev=7,!n.state.textArea){e.next=16;break}return e.next=11,O.a[r](l).send(o);case 11:s=e.sent,u=s.status,c.unshift({textArea:o,method:r,url:l,status:u,results:s}),e.next=21;break;case 16:return e.next=18,O.a[r](l);case 18:s=e.sent,u=s.status,c.unshift({method:r,url:l,status:u,results:s});case 21:localStorage.setItem("history",JSON.stringify(c)),"5",a("5",s,!0),e.next=30;break;case 26:e.prev=26,e.t0=e.catch(7),console.log("Invalid Link ",typeof c),s="Invalid Link ";case 30:case"end":return e.stop()}}),e,null,[[7,26]])})));return function(t,a){return e.apply(this,arguments)}}(),n._handleTextArea=function(e){var t=e.target.value;t&&(["get","delete"].includes(t)?n.setState({textArea:!1}):["post","put"].includes(t)&&n.setState({textArea:!0}))},n.onChangeHandler=function(e){n.setState(Object(g.a)({},e.target.name,e.target.value))},n.state={textArea:!1,url:"",method:"",body:""},n}return Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(e){console.log(e);var t=!!"postput".includes(e.formValues.method);this.setState({url:e.formValues.url,method:e.formValues.method,body:e.formValues.body,textArea:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("main",null,r.a.createElement("div",null,r.a.createElement("form",{onClick:this._handleTextArea,onSubmit:function(t){return e._handleSubmit(t,e.props.formHandler)}},r.a.createElement("input",{id:"url",type:"url",name:"url",placeholder:"url",defaultValue:this.state.url,required:!0}),r.a.createElement("button",{type:"submit"}," GO! "),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"get",name:"method",value:"get",required:!0,onChange:function(t){return e.onChangeHandler(t)},checked:"get"===this.state.method}),r.a.createElement("label",{htmlFor:"get"},"GET"),r.a.createElement("input",{type:"radio",id:"post",name:"method",value:"post",required:!0,onChange:function(t){return e.onChangeHandler(t)},checked:"post"===this.state.method}),r.a.createElement("label",{htmlFor:"post"},"POST"),r.a.createElement("input",{type:"radio",id:"put",name:"method",value:"put",required:!0,onChange:function(t){return e.onChangeHandler(t)},checked:"put"===this.state.method}),r.a.createElement("label",{htmlFor:"put"},"PUT"),r.a.createElement("input",{type:"radio",id:"delete",name:"method",value:"delete",required:!0,onChange:function(t){return e.onChangeHandler(t)},checked:"delete"===this.state.method}),r.a.createElement("label",{htmlFor:"delete"},"DELETE"),this.state.textArea?r.a.createElement("textarea",{name:"textArea",id:"body",cols:"30",rows:"10",defaultValue:this.state.body?this.state.body:""}):null)))}}]),a}(r.a.Component),H=(a(55),a(13)),w=(a(56),a(20)),N=a.n(w),A=function(e){return r.a.createElement("div",{className:"json-div"},r.a.createElement("h3",null,"Header"),r.a.createElement(N.a,{src:e.results.header}),r.a.createElement("h3",null,"Body"),r.a.createElement(N.a,{src:e.results.body}))},j=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e))._handleHistory2Form=function(e,t,a){if(a)n.setState({results:JSON.parse(e.currentTarget.attributes[0].nodeValue)});else{var r={};e.currentTarget.childNodes.forEach((function(e){r[e.className]=e.innerText})),t(r)}},n.state={results:!1},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"method"),r.a.createElement("th",null,"status"),r.a.createElement("th",null," url"),r.a.createElement("th",null,"body"))),r.a.createElement("tbody",null,r.a.createElement(H.When,{condition:null!==this.props.history},this.props.history.map((function(t,a){return r.a.createElement("tr",{dataset:JSON.stringify(t.results),onClick:function(t){return e._handleHistory2Form(t,e.props.formValuesHandler,e.props.withBody)},key:a},Object.keys(t).map((function(e,a){return"results"!==e?r.a.createElement("td",{className:e,key:a},t[e]):null})))}))))),r.a.createElement(H.When,{condition:this.props.withBody&&this.state.results},r.a.createElement(A,{results:this.state.results})))}}]),a}(r.a.Component),C=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={count:null,resultArr:null,footerToggle:!1,history:JSON.parse(localStorage.getItem("history")),formValues:{url:NaN,method:NaN,body:NaN}},e.formHandler=function(t,a){e.setState({count:t,resultArr:a,footerToggle:!e.state.footerToggle,history:JSON.parse(localStorage.getItem("history"))})},e.formValuesHandler=function(t){console.log("clicked-app"),e.setState({formValues:t})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(E,null),r.a.createElement(h.a,{exact:!0,path:"/"},r.a.createElement(S,{formHandler:this.formHandler,formValues:this.state.formValues}),r.a.createElement(H.When,{condition:void 0!==this.state.history},r.a.createElement(j,{formValuesHandler:this.formValuesHandler,history:this.state.history,withBody:!1})),r.a.createElement(H.When,{condition:!!this.state.resultArr},r.a.createElement(A,{exact:!0,pa:!0,results:this.state.resultArr}))),r.a.createElement(h.a,{exact:!0,path:"/History"},r.a.createElement(j,{history:this.state.history,withBody:!0})),r.a.createElement(h.a,{exact:!0,path:"/help"},r.a.createElement("p",null,"This is help ")),r.a.createElement(y,{footerClass:this.state.footerToggle})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.80a679bd.chunk.js.map