(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return y});var a=n(0),i=n.n(a),o=n(155),r=n(160),l=n(162),c=n(157),d=n(161),m=n(186),s=c.a.div.withConfig({displayName:"pages__PostCard",componentId:"sc-6kvjaa-0"})(["border-bottom:.05em solid #eeeeee;padding:2em;margin:1em;margin-top:0;display:flex;flex-direction:column;box-sizing:border-box;a{text-decoration:none;color:white;}a:hover{color:#cccccc;}"]),u=c.a.div.withConfig({displayName:"pages__CardContainer",componentId:"sc-6kvjaa-1"})(["display:flex;flex-direction:column;@media (min-width:1100px){margin-right:15vw;margin-left:15vw;}@media (min-width:800px) and (max-width:1100px){margin-right:15vw;margin-left:15vw;}@media (min-width:200px) and (max-width:400px){margin-right:5vw;margin-left:5vw;}"]),p=c.a.div.withConfig({displayName:"pages__DateText",componentId:"sc-6kvjaa-2"})(["font-weight:lighter;font-size:0.75em;margin-top:auto;margin-bottom:0;"]),g=c.a.p.withConfig({displayName:"pages__ReadMore",componentId:"sc-6kvjaa-3"})(["font-weight:300;"]),h=function(e){var t=e.item;return i.a.createElement(s,null,i.a.createElement(o.a,{to:t.fields.slug},i.a.createElement("h3",null," ",t.frontmatter.title," ")),i.a.createElement("p",null," ",t.excerpt," "),i.a.createElement(o.a,{to:t.fields.slug},i.a.createElement(g,null,"Read More...")),i.a.createElement(p,null,t.frontmatter.date))},f=c.a.div.withConfig({displayName:"pages__AccountDiv",componentId:"sc-6kvjaa-4"})(["background:rgb(24,24,24);padding:1em;margin-top:1em;border-radius:0.25em;color:white;@media (min-width:701px){flex-direction:row;display:flex;align-items:center;justify-content:center;}@media (max-width:700px){display:none;}"]),w=c.a.div.withConfig({displayName:"pages__AccountButton",componentId:"sc-6kvjaa-5"})(["border:none;border-radius:.1em;background:transparent;font-size:5em;padding:.5em;cursor:pointer;text-align:center;:hover{background:#4f4f4f;}a{text-decoration:none;}"]),v=c.a.p.withConfig({displayName:"pages__AccountLabel",componentId:"sc-6kvjaa-6"})(["font-size:0.25em;font-weight:lighter;"]),x=function(e){return i.a.createElement(f,null,i.a.createElement(w,null,i.a.createElement("a",{href:"https://twitter.com/delsig"},i.a.createElement(d.a,{icon:m.c}),i.a.createElement(v,null,"@delsig"))),i.a.createElement(w,null,i.a.createElement("a",{href:"https://github.com/toastking"},i.a.createElement(d.a,{icon:m.a}),i.a.createElement(v,null,"@toastking"))),i.a.createElement(w,null,i.a.createElement("a",{href:"https://www.linkedin.com/in/mattdelsig/"},i.a.createElement(d.a,{icon:m.b}),i.a.createElement(v,null,"LinkedIn"))))},y="3656497737";t.default=function(e){var t=e.data;return i.a.createElement(r.a,null,i.a.createElement(l.a,{title:"Matthew Del Signore",keywords:["coder","portfolio","frontend","react","gatsby"]}),i.a.createElement(x,null),i.a.createElement(u,null,t.allMarkdownRemark.edges.map(function(e){var t=e.node;return i.a.createElement(h,{item:t,key:t.id})})))}},155:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(32),c=n.n(l);n.d(t,"a",function(){return c.a});n(156);var d=i.a.createContext({}),m=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},156:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},158:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(54),c=n(2),d=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=d},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Matt Del Signore"}}}}},160:function(e,t,n){"use strict";var a=n(159),i=n(0),o=n.n(i),r=n(4),l=n.n(r),c=n(155),d=n(157),m=n(33),s=n.n(m),u=n(7),p=n.n(u),g=n(161),h=n(164),f=d.a.div.withConfig({displayName:"header__HeaderContainer",componentId:"sc-31ozxh-0"})(["display:flex;width:100%;padding:.25em;background:rgb(24,24,24);color:white;font-weight:bold;font-family:'Roboto Mono','sans-serif';vertical-align:middle;position:fixed;top:0;left:0;opacity:0.8;z-index:2;a{text-decoration:none;color:white;}a:visited{color:white;}a:hover{color:#cccccc;}@media (min-width:701px){flex-direction:row;align-items:center;min-height:4em;}@media (max-width:700px){flex-direction:column;align-items:stretch;min-height:3em;}"]),w=d.a.div.withConfig({displayName:"header__Logo",componentId:"sc-31ozxh-1"})(["display:flex;flex-direction:row;margin-right:auto;margin-left:.1em;font-size:1.75em;opacity:1;@media (max-width:700px){width:100%;}"]),v=d.a.div.withConfig({displayName:"header__MenuDiv",componentId:"sc-31ozxh-2"})(["color:white;font-size:1.25em;opacity:1;text-align:center;@media (min-width:701px){flex-direction:row;display:flex;align-items:center;margin-right:.5em;margin-left:auto;}@media (max-width:700px){flex-direction:column;margin-top:.5em;margin-bottom:auto;display:",";p{padding:0.35em;}}"],function(e){return e.show?"flex":"none"}),x=d.a.p.withConfig({displayName:"header__MenuText",componentId:"sc-31ozxh-3"})(["margin:auto .25em auto .25em;"]),y=function(e){return o.a.createElement(x,null,o.a.createElement(c.a,{to:e.url}," ",e.text," "))},E=d.a.div.withConfig({displayName:"header__MenuButtonDiv",componentId:"sc-31ozxh-4"})(["margin-left:auto;margin-right:.25em;.MenuButton{border:none;background:transparent;color:white;cursor:pointer;}.MenuButton:hover{color:#cccccc;}@media (min-width:701px){display:none;}@media (max-width:700px){display:block;}"]),b=function(e){return o.a.createElement(E,null,o.a.createElement("button",{className:"MenuButton",onClick:e.onToggleMenu},o.a.createElement(g.a,{icon:e.showMenu?h.b:h.a})))},k=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showMenu:!1},n.toggleMenu=n.toggleMenu.bind(s()(n)),n}p()(t,e);var n=t.prototype;return n.toggleMenu=function(){var e=!this.state.showMenu;this.setState({showMenu:e})},n.render=function(){return o.a.createElement(f,null,o.a.createElement(w,null,o.a.createElement(y,{url:"/",text:this.props.title}),o.a.createElement(b,{showMenu:this.state.showMenu,onToggleMenu:this.toggleMenu})),o.a.createElement(v,{show:this.state.showMenu},o.a.createElement(y,{url:"/about",text:"About"}),o.a.createElement(y,{url:"/projects/projects",text:"Projects"}),o.a.createElement(x,null,o.a.createElement("a",{href:"/Matthew-Del-Signore-Resume.pdf"},"CV"))))},t}(o.a.Component),M=function(e){var t=e.siteTitle;return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{title:t}))};M.propTypes={siteTitle:l.a.string},M.defaultProps={siteTitle:""};var _=M,C=d.a.div.withConfig({displayName:"layout__Container",componentId:"ii2kc2-0"})(["height:100vh;width:100vw;display:flex;flex-direction:column;background:#495459;overflow:none;overflow-y:scroll;-webkit-overflow-scrolling:touch;"]),j=d.a.div.withConfig({displayName:"layout__Content",componentId:"ii2kc2-1"})(["padding:1em;padding-top:4em;a,a:visited{color:white;}"]),I=(d.a.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-2"})(["font-weight:light;font-size:0.75em;text-align:center;position:absolute;bottom:0;width:100vw;background:#495459;"]),function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(C,null,o.a.createElement(_,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(j,null,t))},data:a})});I.propTypes={children:l.a.node.isRequired};t.a=I},162:function(e,t,n){"use strict";var a=n(163),i=n(0),o=n.n(i),r=n(4),l=n.n(r),c=n(165),d=n.n(c),m=n(155);function s(e){var t=e.description,n=e.lang,i=e.meta,r=e.keywords,l=e.title;return o.a.createElement(m.b,{query:u,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})},data:a})}s.defaultProps={lang:"en",meta:[],keywords:["programmer","javascript","frontend","web development"]},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=s;var u="1025518380"},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Matt Del Signore",description:"Personal website of software developer Matt Del Signore",author:"@delsig"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-a0e63d11b3fcbbd3a69a.js.map