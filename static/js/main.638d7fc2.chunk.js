(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=(n(16),n(17),n(1)),s=n(2),l=n(4),m=n(3),u=n(5);function f(e){var t=e.size,n=e.children,a=e.style;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-".concat(e)}).join(" "),style:a},n)}function g(e){return r.a.createElement("div",Object.assign({},e,{className:"container"}))}function h(e){var t=e.children,n=e.className;return r.a.createElement("div",{className:n?"row ".concat(n):"row"},t)}var d=function(e){var t=e.label,n=e.alt,a=e.fileName,o=r.a.createRef();return r.a.createElement("span",{onClick:function(){o.current.blur(),e.onClick()},onKeyPress:e.onClick,role:"button",tabIndex:0,"aria-label":t,className:"p-1 d-inline-block",ref:o},r.a.createElement("img",{alt:n,src:"images/".concat(a),className:"img-thumbnail"}))},v=(n(18),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.heading,n=e.body,a=e.show,o=e.indicator;return r.a.createElement(p,{show:a},r.a.createElement("div",{className:"toast-header"},o,r.a.createElement("strong",{className:"mr-auto"},t)),r.a.createElement("div",{className:"toast-body"},n))}}]),t}(r.a.Component));function p(e){var t=e.show,n=e.children,a={top:t?0:"-100px",opacity:t?1:0};return r.a.createElement("div",{className:"toast mt-3 mr-3",role:"alert","aria-live":"assertive","aria-atomic":"true",style:a},n)}function w(e){var t=e.color;return r.a.createElement("svg",{className:"rounded mr-2",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",width:"15",height:"15"},r.a.createElement("rect",{fill:t,width:"100%",height:"100%"}))}var b="#dc3545";function E(e){var t=e.show,n=e.score,a={show:t,heading:"You lost",body:"Final score: ".concat(n),indicator:r.a.createElement(w,{color:b})};return r.a.createElement(v,a)}var y="#28a745";function k(e){var t={show:e.show,heading:"You win!",body:"All images selected once. Congratulations wizard!",indicator:r.a.createElement(w,{color:y})};return r.a.createElement(v,t)}var j=n(9);var N=function(e){var t,n,a,r=Object(j.a)(e);for(a=r.length-1;a>0;a-=1)t=Math.floor(Math.random()*(a+1)),n=r[a],r[a]=r[t],r[t]=n;return r},O="game-won",C="game-lost",L=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).game=n.props.newGame(),n.state={images:N(n.game.images()),score:0,topScore:0,toast:null,isLocked:!1},n.gameOver=function(e){return n.showToast(e?O:C).then(n.reset)},n.showToast=function(e){return n.setState({toast:e,isLocked:!0}),new Promise(function(e){setTimeout(e,1500)})},n.reset=function(){var e=n.game.points();n.game=n.props.newGame(),n.setState(function(t){var n=t.topScore;return{toast:null,score:0,topScore:Math.max(e,n),isLocked:!1}}),n.shuffleImages()},n.shuffleImages=function(){return n.setState({images:N(n.game.images())})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleImgThumbnailClick",value:function(e){var t=this;this.state.isLocked||(this.game.selectImage(e),this.setState({score:this.game.points()},function(){t.game.isGameOver()?t.gameOver(t.game.isGameWon()):t.shuffleImages()}))}},{key:"render",value:function(){var e=this,t=this.state.images.map(function(t){return r.a.createElement(d,{key:t.name(),label:t.name(),alt:t.alt(),fileName:t.src(),onClick:function(){return e.handleImgThumbnailClick(t.name())}})}),n={transition:"all 600ms",filter:this.state.isLocked?"blur(2px)":"none",opacity:this.state.isLocked?"0.8":"1"};return r.a.createElement("div",null,r.a.createElement(g,{style:n},r.a.createElement("h1",null,"Magic Memory"),r.a.createElement(h,null,r.a.createElement(f,{size:"md-8"},r.a.createElement("span",{className:"pl-1 pr-2"},"Score: ",this.state.score),r.a.createElement("span",{className:"pl-2 border-left"},"Top Score: ",this.state.topScore))),r.a.createElement("div",{className:"pt-3"},r.a.createElement(h,null,r.a.createElement(f,{size:"12",style:{maxWidth:"500px"}},t)))),r.a.createElement(E,{show:this.state.toast===C,score:this.state.score}),r.a.createElement(k,{show:this.state.toast===O}))}}]),t}(a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var x=n(8);function M(e){var t=e.name,n=e.src,a=e.alt;if(!t)throw G("name");if(!n)throw G("src");if(!a)throw G("alt");var r=!1;return Object.freeze({name:function(){return t},src:function(){return n},alt:function(){return a},isClicked:function(){return r},click:function(){r=!0}})}function G(e){return new Error("Must have '".concat(e,"'."))}function T(e){var t=e.images;if(!t||!t.length)throw new Error("Must have at least 1 image.");var n=!1,a=0,r=function(){return a===t.length};return Object.freeze({selectImage:function(e){var o=function(e){return t.find(function(t){return t.name()===e})}(e);(n=o.isClicked())||(a+=1),o.click(),n=r()||n},isGameOver:function(){return n},isGameWon:r,points:function(){return a},images:function(){return t}})}var W=Object({NODE_ENV:"production",PUBLIC_URL:"/react-memory-game"}).REACT_APP_IMAGE_SLICE_AT;var A=function(e){var t=e.imageData;return console.log(W),function(){return T({images:W?t.slice(0,W).map(M):t.map(M)})}}({imageData:x});i.a.render(r.a.createElement(L,{newGame:A}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-memory-game",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-memory-game","/service-worker.js");S?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):I(e)})}}()},8:function(e){e.exports=[{name:"dumbledore",alt:"Dumbledore",src:"dumbledore.jpg"},{name:"hagrid",alt:"Hagrid",src:"hagrid.jpg"},{name:"hermione",alt:"Hermione Granger",src:"hermione.jpg"},{name:"ron",alt:"Ron Weasley",src:"ron.jpg"},{name:"snape",alt:"Professor Snape",src:"snape.jpg"},{name:"voldemort",alt:"Lord Voldemort",src:"voldemort.jpg"},{name:"draco",alt:"Draco Malfoy",src:"draco.jpg"},{name:"ginny",alt:"Ginny Weasley",src:"ginny.jpg"},{name:"neville",alt:"Neville Longbottom",src:"neville.jpg"},{name:"luna",alt:"Luna Lovegood",src:"luna.jpg"}]}},[[10,1,2]]]);
//# sourceMappingURL=main.638d7fc2.chunk.js.map