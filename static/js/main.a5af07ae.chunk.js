(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{46:function(e,t,a){e.exports=a.p+"static/media/placeholder.9e4e5e0e.PNG"},47:function(e,t,a){e.exports=a.p+"static/media/placeholder2.367d78cb.PNG"},48:function(e,t,a){e.exports=a.p+"static/media/placeholder3.4fae378e.PNG"},59:function(e,t,a){e.exports=a(76)},64:function(e,t,a){},65:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),i=a(21),r=a.n(i),c=(a(64),a(7)),s=a(10),m=a(9),o=a(8),u=a(24),d=a(5),b=a(27),h=a(25),f=a(58),p=(a(65),a(28)),E=a(29);var g=function(){return n.a.createElement("footer",{className:"mt-5"},n.a.createElement(b.a,{fluid:!0},n.a.createElement(p.a,{className:"border-top justify-content-between p-3"},n.a.createElement(E.a,{className:"p-0",md:3,sm:12},"Holt Picklesimer"),n.a.createElement(E.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Holt Picklesimer."))))},k=a(45);var v=function(e){return n.a.createElement(k.a,{className:"bg-transparent jumbotron-fluid p-0"},n.a.createElement(b.a,{fluid:!0},n.a.createElement(p.a,{className:"justify-content-center py-5"},n.a.createElement(E.a,{md:8,sm:12},e.title&&n.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&n.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&n.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},y=a(20),C=a(41);var S=function(e){var t=Object(C.b)({opacity:1,from:{opacity:0}});return n.a.createElement(C.a.div,{className:"item-card-info",style:t},n.a.createElement("p",{className:"item-card-title"},e.title),n.a.createElement("p",{className:"item-card-sub-title"},e.subTitle),n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var N=function(e){return n.a.createElement("div",{className:"d-inline-block item-card",onClick:function(t){return e.click(e.item)}},n.a.createElement("img",{className:"item-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&n.a.createElement(S,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},j=a(46),x=a.n(j),T=a(47),w=a.n(T),O=a(48),P=a.n(O),H=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).handleCardClick=function(e,t){var a=Object(y.a)(l.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),l.setState({items:a})},l.makeItems=function(e){return e.map((function(e){return n.a.createElement(N,{item:e,click:function(t){return l.handleCardClick(e.id,t)},key:e.id})}))},l.state={items:[{id:0,title:"Title 1",subTitle:"Some subtitle",imgSrc:x.a,link:"https://github.com/HoltPicklesimer",selected:!1},{id:1,title:"Title 2",subTitle:"Some subtitle 2",imgSrc:w.a,link:"https://github.com/HoltPicklesimer",selected:!1},{id:2,title:"Title 3",subTitle:"Some subtitle 3",imgSrc:P.a,link:"https://github.com/HoltPicklesimer",selected:!1}]},l}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(b.a,{fluid:!0},n.a.createElement(p.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(n.a.Component);var A=function(e){return n.a.createElement("div",null,n.a.createElement(v,{title:e.title,subTitle:e.subTitle,text:e.text}),n.a.createElement(H,null))};var V=function(e){return n.a.createElement(b.a,{fluid:!0},n.a.createElement(p.a,{className:"justify-content-center"},n.a.createElement(E.a,{md:8},e.children)))};var _=function(e){return n.a.createElement("div",null,n.a.createElement(v,{title:e.title}),n.a.createElement(V,null,n.a.createElement("p",null,"Paragraph 1"),n.a.createElement("p",null,"Paragraph 2"),n.a.createElement("p",null,"Paragraph 3"),n.a.createElement("p",null,"Paragraph 4")))},F=a(19),G=a(12),L=a(49),B=a.n(L),I=a(50),K=a.n(I),M=a(15),D=a(51),J=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;l.setState(Object(F.a)({},n,a))},l.handleSubmit=function(e){l.setState({disabled:!0}),B.a.sendForm("gmail","portfolio",e.target,"user_qKi3RpI6gqF7Y7UDjciy6").then((function(e){e?l.setState({disabled:!0,emailSent:!0}):l.setState({disabled:!0,emailSent:!1})}),(function(e){console.log(e),l.setState({disabled:!0,emailSent:!1})}))},l.checkVerified=l.checkVerified.bind(Object(G.a)(l)),l.verifyCallback=l.verifyCallback.bind(Object(G.a)(l)),l.expireCallback=l.expireCallback.bind(Object(G.a)(l)),l.state={from_name:"",from_email:"",message:"",disabled:!1,emailSent:null,isVerified:!1},l}return Object(s.a)(a,[{key:"expireCallback",value:function(){alert("Captcha verification expired. Please re-verify.")}},{key:"checkVerified",value:function(e){e.preventDefault(),this.state.isVerified?this.handleSubmit(e):alert("Please verify the recaptcha before submitting.")}},{key:"verifyCallback",value:function(e){e&&this.setState({isVerified:!0})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(v,{title:this.props.title}),n.a.createElement(V,null,n.a.createElement(M.a,{onSubmit:this.checkVerified},n.a.createElement(M.a.Group,null,n.a.createElement(M.a.Label,{htmlFor:"full-name"},"Full Name"),n.a.createElement(M.a.Control,{id:"full-name",name:"from_name",type:"text",value:this.state.from_name,onChange:this.handleChange})),n.a.createElement(M.a.Group,null,n.a.createElement(M.a.Label,{htmlFor:"email"},"Email"),n.a.createElement(M.a.Control,{id:"email",name:"from_email",type:"email",value:this.state.from_email,onChange:this.handleChange})),n.a.createElement(M.a.Group,null,n.a.createElement(M.a.Label,{htmlFor:"message"},"Message"),n.a.createElement(M.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),n.a.createElement(K.a,{className:"recaptcha",siteKey:"6LcvCdMZAAAAADt8iHKTJY-0ikSHIKrtC-UbyKbj",onVerify:this.verifyCallback,onExpire:this.expireCallback}),n.a.createElement("br",null),n.a.createElement(D.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&n.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&n.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(n.a.Component),q=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={title:"Holt Picklesimer",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Ethan Picklesimer",subTitle:"Software Engineering BS",text:"Checkout my projects below"},about:{title:"About Me",subTitle:"Software Engineering BS",text:"Checkout my projects below."},contact:{title:"Let's Talk"}},l}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(u.a,null,n.a.createElement(b.a,{className:"p-0",fluid:!0},n.a.createElement(h.a,{className:"border-bottom",bg:"transparent",expand:"lg"},n.a.createElement(h.a.Brand,null,"Holt Picklesimer"),n.a.createElement(h.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),n.a.createElement(h.a.Collapse,{id:"navbar-toggle"},n.a.createElement(f.a,{className:"ml-auto"},n.a.createElement(u.b,{className:"nav-link",to:"/portfolio"},"Home"),n.a.createElement(u.b,{className:"nav-link",to:"/About"},"About"),n.a.createElement(u.b,{className:"nav-link",to:"/Contact"},"Contact")))),n.a.createElement(d.a,{path:"/portfolio",exact:!0,render:function(){return n.a.createElement(A,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),n.a.createElement(d.a,{path:"/About",render:function(){return n.a.createElement(_,{title:e.state.about.title,subTitle:e.state.about.subTitle,text:e.state.about.text})}}),n.a.createElement(d.a,{path:"/Contact",render:function(){return n.a.createElement(J,{title:e.state.contact.title,subTitle:e.state.contact.subTitle,text:e.state.contact.text})}}),n.a.createElement(g,null)))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(75);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.a5af07ae.chunk.js.map