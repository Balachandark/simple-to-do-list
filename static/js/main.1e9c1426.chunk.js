(this["webpackJsonpsimple-to-do-list"]=this["webpackJsonpsimple-to-do-list"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(3),c=n.n(s),i=(n(14),n(1)),l=n(4),r=n(5),m=n(7),u=n(6),d=n(8),h=(n(15),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).changeHandler=function(e){n.setState({itemName:e.target.value})},n.clickHandler=function(e){console.log(e.target),n.setState((function(e){var t=Object(i.a)(e.todoItems);return t.push(e.itemName),{todoItems:t,itemName:""}}))},n.handleKeyDown=function(e){"Enter"===e.key&&n.setState((function(e){var t=Object(i.a)(e.todoItems);return t.push(e.itemName),{todoItems:t,itemName:""}}))},n.closeHandler=function(e){console.log(e);var t=Object(i.a)(n.state.todoItems);t.splice(e,1),console.log(t),n.setState({todoItems:t})},n.state={todoItems:["Learn React","Learn TypeScript"],itemName:""},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.todoItems;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"To-Do List"),o.a.createElement("input",{type:"text",className:"addNewItem",placeholder:"Add a new todo list ...",value:this.state.itemName,onKeyDown:this.handleKeyDown,onChange:this.changeHandler}),o.a.createElement("button",{className:"addButton",onClick:this.clickHandler},"Add"),o.a.createElement("ul",{className:"list-group"},t.map((function(t,n){return o.a.createElement("li",{className:"list-item",key:n},o.a.createElement("div",{className:"item"},t),o.a.createElement("span",{type:"button",className:"close",onClick:function(){return e.closeHandler(n)}},"\xd7"))}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.1e9c1426.chunk.js.map