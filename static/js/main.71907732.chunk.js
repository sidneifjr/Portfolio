(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),o=a.n(r),l=a(1),c=a(2),s=a(4),m=a(3),u=a(5),p=(a(13),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("aside",{className:"sidebar"},i.a.createElement("div",{className:"sidebar-image"},i.a.createElement("img",{src:"img/me.jpg",title:"Yep, that's me!",alt:""})),i.a.createElement("h1",null,"Sidnei Farias"),i.a.createElement("span",null,"Front-End Developer"),i.a.createElement("nav",{className:"sidebar-nav"},i.a.createElement("li",null,i.a.createElement("a",{"data-scroll":!0,href:"#portfolio"},"Portf\xf3lio")),i.a.createElement("li",null,i.a.createElement("a",{"data-scroll":!0,href:"#skills"},"Skills")),i.a.createElement("li",null,i.a.createElement("a",{"data-scroll":!0,href:"#contato"},"Contato"))),i.a.createElement("ul",{className:"sidebar-icons"},i.a.createElement("li",null,i.a.createElement("a",{href:"mailto:sidneijr.77@gmail.com",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fa fa-google","aria-hidden":"true"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/sidneifjr",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"}))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://codepen.io/sidneifjr/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:"fa fa-codepen","aria-hidden":"true"})))))}}]),t}(n.Component)),d=(a(14),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("span",{className:"tag "+this.props.color},this.props.text)}}]),t}(n.Component));d.defaultProps={text:"text",color:""};var g=d,f=(a(15),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.languages;return console.log(e),i.a.createElement("div",{className:"cs-style grid-item","data-anime":"box",key:this.props.id},this.props.image&&i.a.createElement("img",{src:this.props.image,alt:""}),i.a.createElement("a",{href:this.props.link},i.a.createElement("figcaption",null,i.a.createElement("div",{className:"grid-item-data"},i.a.createElement("h2",null,this.props.title),i.a.createElement("p",{className:"grid-item-data-description"},this.props.description)),i.a.createElement("div",{className:"tags"},e.map((function(e){return i.a.createElement(g,{text:e,color:e})}))))))}}]),t}(n.Component));f.defaultProps={image:"",link:"",title:"title",description:"description",id:"",languages:""};var h=f,b=(a(16),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"grid"},i.a.createElement("h1",{id:"portfolio","data-anime":"left-2"},"Portfolio"),[{image:"img/contact-github-api.png",link:"#",title:"Contact Github API",description:"Aplica\xe7\xe3o que retorna dados do usu\xe1rio pesquisado, provenientes da Github API.",languages:["SASS","React","Redux","Router","Axios","Javascript"],id:1},{image:"img/portfolio.png",link:"#",title:"Portfolio v2",description:"Segunda intera\xe7\xe3o.",languages:["SASS","React","Javascript"],id:2},{image:"img/VueJS-Punch-Bag.jpg",link:"https://github.com/sidneifjr/Vue.JS-Punching-Bag",title:"Vue.JS Punch Bag",description:"Um simples jogo, desenvolvido para pr\xe1tica de novas tecnologias.",languages:["SASS","Javascript","Vue"],id:3},{image:"img/design-dog.png",link:"https://github.com/sidneifjr/Criacao-de-Design-Zee.Dog",title:"Design Zee.Dog",description:"Uma propaganda fict\xedcia, sobre o lan\xe7amento de um produto pela empresa Zee.Dog.",languages:["SASS","Javascript"],id:4},{image:"img/metroid.jpg",link:"https://codepen.io/sidneifjr/pen/OmMBEw",title:"Metroid - Tribute in CSS",description:"Um tributo \xe0 Samus Aran, a hero\xedna que marcou minha inf\xe2ncia gamer.",languages:["SASS","jQuery"],id:5},{image:"img/form-validation.png",link:"https://codepen.io/sidneifjr/pen/vrPZWj",title:"Form Validation",description:"Uma valida\xe7\xe3o de formul\xe1rios completa, com layout experimental.",languages:["SASS","Javascript"],id:6},{image:"img/search-page-concept.jpg",link:"https://codepen.io/sidneifjr/pen/jYyLog",title:"Custom Searchbox",description:"Um conceito de barra de pesquisa baseado em feedback din\xe2mico do usu\xe1rio. Javascript e SCSS.",languages:["SASS","Javascript"],id:7},{image:"img/iphone-calculator.jpg",link:"https://codepen.io/sidneifjr/pen/gowgjo",title:"Iphone X Calculator",description:"Calculadora simples, inspirada na est\xe9tica do recente Iphone X.",languages:["SASS","Javascript"],id:8},{image:"img/simpsons.png",link:"https://codepen.io/sidneifjr/pen/oyqOdm",title:"The Simpsons",description:"Feito a partir da manipula\xe7\xe3o de objetos e arrays.",languages:["SASS","Javascript"],id:9}].map((function(e){return i.a.createElement(h,{key:e.id,image:e.image,link:e.link,title:e.title,description:e.description,languages:e.languages})})))}}]),t}(n.Component)),E=(a(17),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"skills",id:"skills","data-anime":"left"},i.a.createElement("h1",null," Skills "),i.a.createElement("ul",{className:"skills-list"},[{src:"img/skills/html5.svg",alt:"HTML5"},{src:"img/skills/css.svg",alt:"CSS"},{src:"img/skills/sass.svg",alt:"SASS"},{src:"img/skills/bootstrap.svg",alt:"Bootstrap"},{src:"img/skills/javascript.svg",alt:"Javascript"},{src:"img/skills/react.svg",alt:"React"},{src:"img/skills/github.svg",alt:"Github"},{src:"img/skills/illustrator.svg",alt:"Iillustrator"},{src:"img/skills/jquery.svg",alt:"jQuery"}].map((function(e){return i.a.createElement("li",null,i.a.createElement("img",{src:e.src,alt:e.alt,title:e.alt}))}))))}}]),t}(n.Component)),j=(a(18),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"btnTop"},i.a.createElement("button",null,i.a.createElement("i",{className:"fa fa-arrow-up","aria-hidden":"true"})))}}]),t}(n.Component)),v=(a(19),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"contact",id:"contact","data-anime":"left"},i.a.createElement("h1",null,"Contato"),i.a.createElement("p",null,"Atualmente, atuo como Estagi\xe1rio de Front-End na ",i.a.createElement("a",{href:"https://www.sirius.com.br/",target:"_blank",rel:"noopener noreferrer"},"Sirius Interativa.")),i.a.createElement("p",null,"Deseja ver meu curr\xedculo? ",i.a.createElement("a",{href:"Curr\xedculo Front-End.pdf",target:"_blank"},"Aproveite!")," Voc\xea pode falar comigo pelo formul\xe1rio abaixo... "),i.a.createElement("form",{className:"contact-form",method:"POST",action:"https://simple-form.com/sidneijr.77@gmail.com"},i.a.createElement("input",{type:"text",name:"name",placeholder:"Como se chama?",required:!0}),i.a.createElement("input",{type:"text",name:"email",placeholder:"Email, para retornar contato.",required:!0}),i.a.createElement("textarea",{type:"text",name:"description",placeholder:"O que deseja falar?",required:!0}),i.a.createElement("button",{type:"submit"},"Submit")))}}]),t}(n.Component)),O=(a(20),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"intro"},i.a.createElement("h1",{"data-anime":"fadeIn"},"Sobre"),i.a.createElement("p",{"data-anime":"left"},"Ol\xe1, bem vindo! Sou estudante de Sistemas de Informa\xe7\xe3o (5\xba per\xedodo), 23 anos, com foco em Front-End e UI/UX. Apaixonado por tecnologia, decidi seguir a carreira em Web ap\xf3s o fim de meu ensino t\xe9cnico."),i.a.createElement("p",{"data-anime":"left"},"Al\xe9m de Front-End, tamb\xe9m sou apaixonado por UI e UX Design, \xe1reas que me fascinam e inspiram a dizer muito falando pouco, buscando estudar seus conceitos concomitantemente com programa\xe7\xe3o. "),i.a.createElement("p",{"data-anime":"left"},"Meu foco \xe9 criar interfaces que inspiram o melhor em todos pois o Design, diferente do que muitos pensam, n\xe3o \xe9 s\xf3 beleza. Quando feito da maneira certa, \xe9 poss\xedvel mudar a vida das pessoas."))}}]),t}(n.Component)),S=(a(21),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"content"},i.a.createElement(O,null),i.a.createElement(b,null),i.a.createElement(E,null),i.a.createElement(v,null),i.a.createElement(j,null))}}]),t}(n.Component)),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null),i.a.createElement(S,null))}}]),t}(n.Component);a(22);var y=function(){return i.a.createElement("main",{className:"App"},i.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.71907732.chunk.js.map