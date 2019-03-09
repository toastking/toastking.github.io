(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return x});var a=n(0),i=n.n(a),r=n(152),o=n(157),l=n(159),c=n(154),d=n(158),s=n(183),m=c.a.div.withConfig({displayName:"pages__PostCard",componentId:"sc-6kvjaa-0"})(["border-bottom:.05em solid #eeeeee;padding:2em;margin:1em;margin-top:0;display:flex;flex-direction:column;box-sizing:border-box;a{text-decoration:none;color:white;}a:hover{color:#cccccc;}"]),u=c.a.div.withConfig({displayName:"pages__CardContainer",componentId:"sc-6kvjaa-1"})(["display:flex;flex-direction:column;@media (min-width:1100px){margin-right:15vw;margin-left:15vw;}@media (min-width:800px) and (max-width:1100px){margin-right:15vw;margin-left:15vw;}@media (min-width:200px) and (max-width:400px){margin-right:5vw;margin-left:5vw;}"]),p=c.a.div.withConfig({displayName:"pages__DateText",componentId:"sc-6kvjaa-2"})(["font-weight:lighter;font-size:0.75em;margin-top:auto;margin-bottom:0;"]),g=c.a.p.withConfig({displayName:"pages__ReadMore",componentId:"sc-6kvjaa-3"})(["font-weight:300;"]),h=function(e){var t=e.item;return i.a.createElement(m,null,i.a.createElement(r.Link,{to:t.fields.slug},i.a.createElement("h3",null," ",t.frontmatter.title," ")),i.a.createElement("p",null," ",t.excerpt," "),i.a.createElement(r.Link,{to:t.fields.slug},i.a.createElement(g,null,"Read More...")),i.a.createElement(p,null,t.frontmatter.date))},f=c.a.div.withConfig({displayName:"pages__AccountDiv",componentId:"sc-6kvjaa-4"})(["background:rgba(24,24,24);padding:1em;margin-top:1em;border-radius:0.25em;color:white;@media (min-width:701px){flex-direction:row;display:flex;align-items:center;justify-content:center;}@media (max-width:700px){display:none;}"]),w=c.a.div.withConfig({displayName:"pages__AccountButton",componentId:"sc-6kvjaa-5"})(["border:none;border-radius:.1em;background:transparent;font-size:5em;padding:.5em;cursor:pointer;text-align:center;:hover{background:#4f4f4f;}a{text-decoration:none;}"]),y=c.a.p.withConfig({displayName:"pages__AccountLabel",componentId:"sc-6kvjaa-6"})(["font-size:0.25em;font-weight:lighter;"]),v=function(e){return i.a.createElement(f,null,i.a.createElement(w,null,i.a.createElement("a",{href:"https://twitter.com/delsig"},i.a.createElement(d.a,{icon:s.c}),i.a.createElement(y,null,"@delsig"))),i.a.createElement(w,null,i.a.createElement("a",{href:"https://github.com/toastking"},i.a.createElement(d.a,{icon:s.a}),i.a.createElement(y,null,"@toastking"))),i.a.createElement(w,null,i.a.createElement("a",{href:"https://www.linkedin.com/in/mattdelsig/"},i.a.createElement(d.a,{icon:s.b}),i.a.createElement(y,null,"LinkedIn"))))},x="3656497737";t.default=function(e){var t=e.data;return i.a.createElement(o.a,null,i.a.createElement(l.a,{title:"Matthew Del Signore",keywords:["coder","portfolio","frontend","react","gatsby"]}),i.a.createElement(v,null),i.a.createElement(u,null,t.allMarkdownRemark.edges.map(function(e){var t=e.node;return i.a.createElement(h,{item:t,key:t.id})})))}},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(151),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var d=n(153),s=n.n(d);n.d(t,"PageRenderer",function(){return s.a});var m=n(32);n.d(t,"parsePath",function(){return m.a});var u=i.a.createContext({}),p=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,n){var a;e.exports=(a=n(155))&&a.default||a},155:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(52),c=n(2),d=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Matt Del Signore"}}}}},157:function(e,t,n){"use strict";var a=n(156),i=n(0),r=n.n(i),o=n(4),l=n.n(o),c=n(152),d=n(154),s=n(7),m=n.n(s),u=n(51),p=n.n(u),g=n(158),h=n(161),f=d.a.div.withConfig({displayName:"header__HeaderContainer",componentId:"sc-31ozxh-0"})(["display:flex;width:100%;padding:.25em;background:rgb(24,24,24);color:white;font-weight:bold;font-family:'Roboto Mono','sans-serif';vertical-align:middle;position:absolute;opacity:0.8;z-index:999;a{text-decoration:none;color:white;}a:visited{color:white;}a:hover{color:#cccccc;}@media (min-width:701px){flex-direction:row;align-items:center;min-height:4em;}@media (max-width:700px){flex-direction:column;align-items:stretch;min-height:3em;}"]),w=d.a.div.withConfig({displayName:"header__Logo",componentId:"sc-31ozxh-1"})(["display:flex;flex-direction:row;margin-right:auto;margin-left:.1em;font-size:1.75em;opacity:1;@media (max-width:700px){width:100%;}"]),y=d.a.div.withConfig({displayName:"header__MenuDiv",componentId:"sc-31ozxh-2"})(["color:white;font-size:1.25em;opacity:1;text-align:center;@media (min-width:701px){flex-direction:row;display:flex;align-items:center;margin-right:.5em;margin-left:auto;}@media (max-width:700px){flex-direction:column;margin-top:.5em;margin-bottom:auto;display:",";p{padding:0.35em;}}"],function(e){return e.show?"flex":"none"}),v=d.a.p.withConfig({displayName:"header__MenuText",componentId:"sc-31ozxh-3"})(["margin:auto .25em auto .25em;"]),x=function(e){return r.a.createElement(v,null,r.a.createElement(c.Link,{to:e.url}," ",e.text," "))},b=d.a.div.withConfig({displayName:"header__MenuButtonDiv",componentId:"sc-31ozxh-4"})(["margin-left:auto;margin-right:.25em;.MenuButton{border:none;background:transparent;color:white;cursor:pointer;}.MenuButton:hover{color:#cccccc;}@media (min-width:701px){display:none;}@media (max-width:700px){display:block;}"]),E=function(e){return r.a.createElement(b,null,r.a.createElement("button",{className:"MenuButton",onClick:e.onToggleMenu},r.a.createElement(g.a,{icon:e.showMenu?h.b:h.a})))},k=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showMenu:!1},n.toggleMenu=n.toggleMenu.bind(p()(p()(n))),n}m()(t,e);var n=t.prototype;return n.toggleMenu=function(){var e=!this.state.showMenu;this.setState({showMenu:e})},n.render=function(){return r.a.createElement(f,null,r.a.createElement(w,null,r.a.createElement(x,{url:"/",text:this.props.title}),r.a.createElement(E,{showMenu:this.state.showMenu,onToggleMenu:this.toggleMenu})),r.a.createElement(y,{show:this.state.showMenu},r.a.createElement(x,{url:"/about",text:"About"}),r.a.createElement(x,{url:"/projects/projects",text:"Projects"}),r.a.createElement(v,null,r.a.createElement("a",{href:"/Matthew-Del-Signore-Resume.pdf"},"CV"))))},t}(r.a.Component),M=function(e){var t=e.siteTitle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{title:t}))};M.propTypes={siteTitle:l.a.string},M.defaultProps={siteTitle:""};var _=M,C=d.a.div.withConfig({displayName:"layout__Container",componentId:"ii2kc2-0"})(["height:100vh;width:100vw;display:flex;flex-direction:column;background:#495459;overflow:none;overflow-y:scroll;-webkit-overflow-scrolling:touch;"]),j=d.a.div.withConfig({displayName:"layout__Content",componentId:"ii2kc2-1"})(["padding:1em;padding-top:4em;a,a:visited{color:white;}"]),I=d.a.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-2"})(["font-weight:light;font-size:0.75em;text-align:center;position:absolute;bottom:0;width:100vw;background:#495459;"]),N=function(e){var t=e.children;return r.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(C,null,r.a.createElement(_,{siteTitle:e.site.siteMetadata.title}),r.a.createElement(j,null,t),r.a.createElement(I,null,"© Matthew Del Signore 2018, Built with ",r.a.createElement("a",{href:"http://www.gatsbyjs.org"},"Gatsby")))},data:a})};N.propTypes={children:l.a.node.isRequired};t.a=N},159:function(e,t,n){"use strict";var a=n(160),i=n(0),r=n.n(i),o=n(4),l=n.n(o),c=n(162),d=n.n(c),s=n(152);function m(e){var t=e.description,n=e.lang,i=e.meta,o=e.keywords,l=e.title;return r.a.createElement(s.StaticQuery,{query:u,render:function(e){var a=t||e.site.siteMetadata.description;return r.a.createElement(d.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:["programmer","javascript","frontend","web development"]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var u="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Matt Del Signore",description:"Personal website of software developer Matt Del Signore",author:"@delsig"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-790fea8662e5278ccb5b.js.map