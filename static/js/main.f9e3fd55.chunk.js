(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(8),i=n.n(c),r=(n(13),n(2)),u=n(3),o=n(6),l=n(5),j=n(4),h=n.p+"static/media/logo.6ce24c58.svg",d=(n(14),n(0)),b=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={date:new Date},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.xx=setInterval((function(){e.setState({date:new Date})}),500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.xx)}},{key:"render",value:function(){return Object(d.jsxs)("p",{children:[this.props.title,this.state.date.toLocaleTimeString()]})}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={name:"",message:""},e.handleData1=e.handleData.bind(Object(o.a)(e)),e}return Object(u.a)(n,[{key:"handleData",value:function(e){this.setState({name:e.target.value})}},{key:"sayHi",value:function(){console.log("click say hi"),this.props.onSayHi(this.state.name)}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",onKeyUp:this.handleData1}),Object(d.jsx)("button",{onClick:function(){return e.sayHi()},children:"Say Hi"})]})}}]),n}(a.Component),O=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.users.map((function(e){return Object(d.jsxs)("li",{children:[e.name,", ",e.age]},e.id)}));return Object(d.jsx)("ul",{children:e})}}]),n}(a.Component),m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).users=[{id:1,name:"User 01",age:10},{id:2,name:"User 02",age:20},{id:3,name:"User 03",age:30}],e.state={message:""},e.updateValue=e.updateValue.bind(Object(o.a)(e)),e}return Object(u.a)(n,[{key:"updateValue",value:function(e){this.setState({message:"New section : "+e})}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:h,className:"App-logo",alt:"logo"}),Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{users:this.users}),Object(d.jsx)(b,{title:"Current data naja = "}),Object(d.jsx)(p,{onSayHi:this.updateValue}),Object(d.jsx)("p",{children:this.state.message})]})]})})}}]),n}(a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.f9e3fd55.chunk.js.map