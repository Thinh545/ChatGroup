(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(e,t,a){e.exports=a(381)},186:function(e,t,a){},198:function(e,t,a){},381:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(176),i=a.n(s),c=(a(186),a(10)),u=a(11),o=a(13),l=a(12),m=a(14),p=a(7),d=a(387),h=a(385),f=a(386),v=a(179),g=a.n(v),E=a(383),b=function(){return r.a.createElement("div",null,"404 - ",r.a.createElement(E.a,{to:"/"},"Go home"))},O=a(109),y=a.n(O),N=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"box-layout"},r.a.createElement("div",{className:"box-layout__box"},r.a.createElement("h1",{className:"box-layout__title"},"Chat Group 545"),r.a.createElement("p",null,"WELLCOME"),r.a.createElement("button",{className:"login-button",onClick:this.props.startLogin},"Login with Google")))}}]),t}(r.a.Component),j=Object(p.b)(null,function(e){return{startLogin:function(){return e(function(e,t,a){var n=a();return n.login({provider:"google",type:"popup"}).then(function(e){var t=e.user;n.database().ref("users/".concat(t.uid,"/uid")).set(t.uid)})})}}})(N),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).userOnClick=function(){a.props.handleOnClick(a.props.user)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("li",{className:"contact",onClick:function(){return e.userOnClick()}},r.a.createElement("div",{className:"wrap"},r.a.createElement("span",{className:this.props.user.active?"contact-status online":"contact-status"}),r.a.createElement("img",{src:this.props.user.avatarUrl,alt:""}),r.a.createElement("div",{className:"meta"},r.a.createElement("p",{className:"name"},this.props.user.displayName),r.a.createElement("p",{className:"preview"},this.props.user.active?"online":this.props.user.lastTime))))}}]),t}(r.a.Component),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={filter:""},a.createUserComponent=function(){var e=[];return a.props.users.forEach(function(t){""!==a.state.filter&&-1===t.displayName.toLowerCase().indexOf(a.state.filter.toLowerCase())||e.push(r.a.createElement(C,{key:t.uid,user:t,handleOnClick:a.props.handleOnClick}))}),e},a.handleSearchChange=function(e){a.setState({filter:e.target.value})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.props.startUsersList()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"search"},r.a.createElement("label",{htmlFor:""},r.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"})),r.a.createElement("input",{type:"text",placeholder:"Search contacts...",onChange:this.handleSearchChange})),r.a.createElement("div",{id:"contacts"},r.a.createElement("ul",null,this.createUserComponent())))}}]),t}(r.a.Component),S=Object(p.b)(function(e){return{auth:e.auth,users:e.users}},function(e){return{startUsersList:function(){return e(function(e,t,a){var n=a(),r=t().auth;return n.database().ref("users").on("value",function(t){var a=[];t.forEach(function(e){a.push(e.toJSON())});var n=a.find(function(e){return e.uid===r.uid});return a=a.sort(function(e,t){if(n&&n.stat){var a=n.stat["".concat(t.uid)],r=n.stat["".concat(e.uid)];return!0!==e.active&&!0===t.active||!0===e.active&&!0!==t.active?!0!==e.active?1:-1:a&&r?a.lastTime&&r.lastTime?(!0===a.star?6:1)*a.lastTime-(!0===r.star?6:1)*r.lastTime:!a.lastTime&&r.lastTime?-1:a.lastTime&&!r.lastTime?1:(!0===a.star?6:1)-(!0===r.star?6:1):a&&r?1:r?-1:1}if(!0!==e.active&&!0===t.active||!0===e.active&&!0!==t.active)return!0!==e.active?1:-1}),e(function(e){return{type:"USERS_LIST",users:e}}(a))})})}}})(k),w=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.mess.uid===this.props.auth.uid,n=[],s=this.props.mess.text.match(/(https?|ftp:)([^\s]+)/g);return s&&s.map(function(e,s){n.push(r.a.createElement("li",{className:a?"sent":"replies"},r.a.createElement("img",{src:a?t.props.auth.avatarUrl:t.props.user.avatarUrl,alt:""}),r.a.createElement("img",{className:"imageMess",key:s,src:e})))}),this.props.mess.media&&Object.values(this.props.mess.media).map(function(e,s){n.push(r.a.createElement("li",{className:a?"sent":"replies"},r.a.createElement("img",{src:a?t.props.auth.avatarUrl:t.props.user.avatarUrl,alt:""}),r.a.createElement("img",{className:"imageMess",key:s,src:e})))}),""!=this.props.mess.text&&(e=r.a.createElement("li",{className:a?"sent":"replies"},r.a.createElement("img",{src:a?this.props.auth.avatarUrl:this.props.user.avatarUrl,alt:""}),r.a.createElement("p",null,this.props.mess.text))),r.a.createElement("div",null,e,n)}}]),t}(r.a.Component),I=a(68),A=function(e,t){return{type:"USER_CHANGE",user:e,list:t}},U=function(e){return{type:"STAR_CHANGE",star:e}},T=function(e){return function(t,a,n){var r,s=a().auth,i=n();r=s.uid>e?s.uid+e:e+s.uid,i.database().ref("messages/".concat(r)).limitToLast(1).on("child_added",function(e){t({type:"MESSAGES_CHANGE",mess:e.toJSON()})})}},L=function(e){return function(t,a,n){var r,s=a().auth,i=n();r=s.uid>e?s.uid+e:e+s.uid,i.database().ref("messages/".concat(r)).off()}},_=function(e){return function(t,a,n){var r=n(),s=a().auth;return r.database().ref("users/".concat(s.uid,"/stat/").concat(e,"/star")).once("value",function(e){e.val()?t(U(e.val())):t(U(!1))})}},G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=e.target.message.value;if(!t.trim()&&a.state.inputImg===[])return console.log(a.state.inputImg),void(e.target.submit.diabled=!0);a.props.sendMessage(a.props.user.uid,t,a.state.inputImg),e.target.reset(),a.setState({preImg:[],inputImg:[]})},a.handleChosen=function(e){if(e.target.files&&e.target.files[0]){var t=new FileReader;t.onload=function(e){var t=a.state.preImg.concat(e);a.setState({preImg:t})},t.readAsDataURL(e.target.files[0]);var n=a.state.inputImg.concat(e.target.files[0]);a.setState({inputImg:n}),e.target.value=null}},a.scrollToBottom=function(){a.messagesEnd.scrollIntoView({behavior:"auto"})},a.handleStarClick=function(){console.log(a.props.mess.star),a.props.onStarClick(a.props.user.uid,!a.props.mess.star),a.props.changeStar(!a.props.mess.star)},a.handleImageClick=function(e){var t=e.target.getAttribute("data-key"),n=a.state.preImg;n.splice(t,1);var r=a.state.inputImg;r.splice(t,1),a.setState({inputImg:r,preImg:n})},a.state={preImg:[],inputImg:[]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this,t=[];this.props.mess.list.forEach(function(a){t.push(r.a.createElement(w,{mess:a,auth:e.props.auth,user:e.props.user}))});var a=this.state.preImg.map(function(t,a){return r.a.createElement("img",{key:a,"data-key":a,src:t.target.result,width:"48",height:"48",onClick:function(t){return e.handleImageClick(t)}})});return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"contact-profile"},r.a.createElement("img",{src:this.props.user?this.props.user.avatarUrl:"",alt:""}),r.a.createElement("p",null,this.props.user?this.props.user.displayName:""),r.a.createElement("div",{className:this.props.mess.star?"social-media-star":"social-media"},r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true",onClick:this.handleStarClick}))),r.a.createElement("div",{className:"messages"},r.a.createElement("ul",null,t),r.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}})),r.a.createElement("div",{className:"message-input"},r.a.createElement("div",{className:"wrap"},r.a.createElement("form",{onSubmit:this.onSubmit,autoComplete:"off"},r.a.createElement("input",{type:"text",name:"message",placeholder:"Write your message..."}),r.a.createElement("label",{htmlFor:"file"},r.a.createElement("i",{className:"fa fa-paperclip attachment","aria-hidden":"true"})),r.a.createElement("button",{name:"submit",className:"submit"},r.a.createElement("i",{className:"fa fa-paper-plane","aria-hidden":"true"})),r.a.createElement("input",{className:"inputfile",type:"file",id:"file",accept:"image/*",ref:"fileUploader",onChange:function(t){return e.handleChosen(t)}}))),r.a.createElement("div",null,a)))}}]),t}(r.a.Component),x=Object(p.b)(function(e){return{auth:e.auth,user:e.messages.user,mess:e.messages}},function(e){return{sendMessage:function(t,a,n){return e(function(e,t,a){return function(n,r,s){var i,c=s(),u=c.storage().ref(),o=r().auth,l={uid:o.uid,text:t,media:[]};if(o)if(i=o.uid>e?o.uid+e:e+o.uid,a.length>0){var m={contentType:"image/jpeg"},p=a.map(function(e){var t=new Date;return new Promise(function(a,n){u.child("images/".concat(t.getTime()).concat(e.name)).put(e,m).then(function(e){e.ref.getDownloadURL().then(function(e){a(e)})})})});Promise.all(p).then(function(e){e.forEach(function(e){l.media=Object(I.a)(l.media).concat([e])}),Promise.all(l.media).then(function(e){c.database().ref("messages/".concat(i)).push(l)})})}else c.database().ref("messages/".concat(i)).push(l);c.database().ref("users/".concat(o.uid,"/stat/").concat(e,"/lastTime")).set(Date.now())}}(t,a,n))},startListening:function(t){return e(T(t))},onStarClick:function(t,a){return e(function(e,t){return function(a,n,r){var s=r(),i=n().auth;s.database().ref("users/".concat(i.uid,"/stat/").concat(e,"/star")).set(t)}}(t,a))},changeStar:function(t){return e(U(t))}}})(G),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleOnClick=function(e){a.props.startUserChange(e)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.props.startOnline()}},{key:"render",value:function(){var e=this.props.auth;return r.a.createElement("div",{id:"frame"},r.a.createElement("div",{id:"sidepanel"},r.a.createElement("div",{id:"profile"},r.a.createElement("div",{className:"wrap"},r.a.createElement("img",{id:"profile-img",src:e.avatarUrl,className:"online",alt:""}),r.a.createElement("p",null,e.displayName),r.a.createElement("i",{className:"fa fa-chevron-down expand-button","aria-hidden":"true"}),r.a.createElement("div",{id:"status-options"},r.a.createElement("ul",null,r.a.createElement("li",{id:"status-online",className:"active"},r.a.createElement("span",{className:"status-circle"}),r.a.createElement("p",null,"Online")),r.a.createElement("li",{id:"status-away"},r.a.createElement("span",{className:"status-circle"}),r.a.createElement("p",null,"Away")),r.a.createElement("li",{id:"status-busy"},r.a.createElement("span",{className:"status-circle"}),r.a.createElement("p",null,"Busy")),r.a.createElement("li",{id:"status-offline"},r.a.createElement("span",{className:"status-circle"}),r.a.createElement("p",null,"Offline")))))),r.a.createElement(S,{handleOnClick:this.handleOnClick})),r.a.createElement(x,null))}}]),t}(r.a.Component),R=Object(p.b)(function(e){return{auth:e.auth,user:e.messages.user}},function(e){return{startUserChange:function(t){return e((a=t,function(e,t,n){t().messages.user&&e(L(t().messages.user.uid));var r,s=n(),i=t().auth;return r=i.uid>a.uid?i.uid+a.uid:a.uid+i.uid,s.database().ref("messages/".concat(r)).once("value",function(t){if(t.val()){var n=[];t.forEach(function(e){n.push(e.toJSON())}),n.pop(),e(A(a,n))}else e(A(a,[]));e(_(a.uid)),e(T(a.uid))})}));var a},startOnline:function(){return e(function(e,t,a){a().database().ref("users/".concat(t().auth.uid)).update({active:!0}),a().database().ref("users/".concat(t().auth.uid)).onDisconnect().update({active:!1,lastTime:y()(Date(),"yyyy/dd/mm HH:MM")})})}}})(M),D=a(69),H=a(384),W=Object(p.b)(void 0,function(e){return{startLogout:function(){return e(function(e,t,a){var n=t().auth;return a().database().ref("users/".concat(n.uid)).update({active:!1,lastTime:y()(Date(),"yyyy/dd/mm HH:MM")}),a().auth().signOut()})}}})(function(e){var t=e.startLogout;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"header__content"},r.a.createElement(E.a,{className:"header__title",to:"/join"},r.a.createElement("h1",null,"Chat Group 545")),r.a.createElement("button",{className:"button button--link",onClick:t},"Logout"))))}),B=Object(p.b)(function(e){return{isAuthenticated:!!e.auth.uid}})(function(e){var t=e.isAuthenticated,a=e.component,n=Object(D.a)(e,["isAuthenticated","component"]);return r.a.createElement(f.a,Object.assign({},n,{component:function(e){return t?r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement("div",null,r.a.createElement(a,e))):r.a.createElement(H.a,{to:"/"})}}))}),F=Object(p.b)(function(e){return{isAuthenticated:!!e.auth.uid}})(function(e){var t=e.isAuthenticated,a=e.component,n=Object(D.a)(e,["isAuthenticated","component"]);return r.a.createElement(f.a,Object.assign({},n,{component:function(e){return t?r.a.createElement(H.a,{to:"/home"}):r.a.createElement(a,e)}}))}),J=g()(),z=function(){return r.a.createElement(d.a,{history:J},r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(F,{path:"/",component:j,exact:!0}),r.a.createElement(B,{path:"/home",component:R}),r.a.createElement(f.a,{component:b}))))},P=(a(196),a(198),a(200),a(26)),K=a(70),V=a(67),$=a.n(V),q=a(180),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{uid:t.uid,displayName:t.name,avatarUrl:t.photo};case"LOGOUT":return{};default:return e}},X=[],Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS_LIST":var a=[];return t.users&&(a=t.users),a;default:return e}},Z=(a(380),{star:!1,user:{uid:null,displayName:"Chat With Ghost",avatarUrl:"http://icons.iconarchive.com/icons/google/noto-emoji-smileys/512/10100-ghost-icon.png"},list:[]}),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGES_CHANGE":return{star:e.star,user:e.user,list:Object(I.a)(e.list).concat([t.mess])};case"USER_CHANGE":return t.list?{star:e.star,user:t.user,list:t.list}:{star:e.star,user:t.user,list:[]};case"STAR_CHANGE":return{star:t.star,user:e.user,list:e.list};default:return e}},te={apiKey:"AIzaSyA9bkol6af0Wz-ozhS78n2TOs3LNya8xGg",authDomain:"chat-group-18857.firebaseapp.com",databaseURL:"https://chat-group-18857.firebaseio.com",projectId:"chat-group-18857",storageBucket:"chat-group-18857.appspot.com",messagingSenderId:"660645655047"},ae={userProfile:"users",firebaseStateName:"firebase"};var ne=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],$.a.initializeApp(te),Object(P.d)(Object(K.reactReduxFirebase)($.a,ae),Object(P.a)(q.a.withExtraArgument(K.getFirebase)))(P.e)(Object(P.c)({firebase:K.firebaseReducer,auth:Q,users:Y,messages:ee}))}(window.__INITIAL_STATE__);$.a.auth().onAuthStateChanged(function(e){if(e){var t=e.displayName?e.displayName:e.email;ne.dispatch(function(e,t,a){return{type:"LOGIN",uid:e,name:t,photo:a}}(e.uid,t,e.photoURL)),"/"===J.location.pathname&&J.push("/home")}else ne.dispatch({type:"LOGOUT"}),J.push("/")});var re=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:ne},r.a.createElement(z,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[181,2,1]]]);
//# sourceMappingURL=main.778a5014.chunk.js.map