(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(156),o=n(158);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(o.a,{title:"404: Not found"}),i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(150),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(152),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var m=i.a.createContext({}),p=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},154:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(52),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Matt Del Signore"}}}}},156:function(e,t,n){"use strict";var a=n(155),i=n(0),r=n.n(i),o=n(4),l=n.n(o),c=n(151),u=n(153),s=n(7),d=n.n(s),m=n(51),p=n.n(m),h=n(157),g=n(160),f=u.a.div.withConfig({displayName:"header__HeaderContainer",componentId:"sc-31ozxh-0"})(["display:flex;width:100vw;padding:.25em;background:rgb(24,24,24);color:white;font-weight:bold;font-family:'Roboto Mono','sans-serif';vertical-align:middle;position:absolute;opacity:0.8;z-index:999;a{text-decoration:none;color:white;}a:visited{color:white;}a:hover{color:#cccccc;}@media (min-width:701px){flex-direction:row;align-items:center;min-height:4em;}@media (max-width:700px){flex-direction:column;align-items:stretch;min-height:3em;}"]),w=u.a.div.withConfig({displayName:"header__Logo",componentId:"sc-31ozxh-1"})(["display:flex;flex-direction:row;margin-right:auto;margin-left:.1em;font-size:1.75em;opacity:1;@media (max-width:700px){width:100%;}"]),y=u.a.div.withConfig({displayName:"header__MenuDiv",componentId:"sc-31ozxh-2"})(["color:white;font-size:1.25em;opacity:1;text-align:center;@media (min-width:701px){flex-direction:row;display:flex;align-items:center;margin-right:.5em;margin-left:auto;}@media (max-width:700px){flex-direction:column;margin-top:.5em;margin-bottom:auto;display:",";p{padding:0.35em;}}"],function(e){return e.show?"flex":"none"}),x=u.a.p.withConfig({displayName:"header__MenuText",componentId:"sc-31ozxh-3"})(["margin:auto .25em auto .25em;"]),v=function(e){return r.a.createElement(x,null,r.a.createElement(c.Link,{to:e.url}," ",e.text," "))},b=u.a.div.withConfig({displayName:"header__MenuButtonDiv",componentId:"sc-31ozxh-4"})(["margin-left:auto;margin-right:.25em;.MenuButton{border:none;background:transparent;color:white;cursor:pointer;}.MenuButton:hover{color:#cccccc;}@media (min-width:701px){display:none;}@media (max-width:700px){display:block;}"]),E=function(e){return r.a.createElement(b,null,r.a.createElement("button",{className:"MenuButton",onClick:e.onToggleMenu},r.a.createElement(h.a,{icon:e.showMenu?g.b:g.a})))},M=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showMenu:!1},n.toggleMenu=n.toggleMenu.bind(p()(p()(n))),n}d()(t,e);var n=t.prototype;return n.toggleMenu=function(){var e=!this.state.showMenu;this.setState({showMenu:e})},n.render=function(){return r.a.createElement(f,null,r.a.createElement(w,null,r.a.createElement(v,{url:"/",text:this.props.title}),r.a.createElement(E,{showMenu:this.state.showMenu,onToggleMenu:this.toggleMenu})),r.a.createElement(y,{show:this.state.showMenu},r.a.createElement(v,{url:"/about",text:"About"}),r.a.createElement(v,{url:"/projects/projects",text:"Projects"}),r.a.createElement(x,null,r.a.createElement("a",{href:"/Matthew-Del-Signore-Resume.pdf"},"Resume"))))},t}(r.a.Component),k=function(e){var t=e.siteTitle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{title:t}))};k.propTypes={siteTitle:l.a.string},k.defaultProps={siteTitle:""};var C=k,T=u.a.div.withConfig({displayName:"layout__Container",componentId:"ii2kc2-0"})(["height:100vh;width:100vw;display:flex;flex-direction:column;background:#495459;"]),_=u.a.div.withConfig({displayName:"layout__Content",componentId:"ii2kc2-1"})(["flex:1 1 auto;overflow-y:scroll;-webkit-overflow-scrolling:touch;padding:1em;padding-top:4em;a,a:visited{color:white;}"]),q=u.a.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-2"})(["font-weight:light;font-size:0.75em;text-align:center;"]),N=function(e){var t=e.children;return r.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(T,null,r.a.createElement(C,{siteTitle:e.site.siteMetadata.title}),r.a.createElement(_,null,t),r.a.createElement(q,null,"© Matthew Del Signore 2018, Built with ",r.a.createElement("a",{href:"http://www.gatsbyjs.org"},"Gatsby")))},data:a})};N.propTypes={children:l.a.node.isRequired};t.a=N},158:function(e,t,n){"use strict";var a=n(159),i=n(0),r=n.n(i),o=n(4),l=n.n(o),c=n(161),u=n.n(c),s=n(151);function d(e){var t=e.description,n=e.lang,i=e.meta,o=e.keywords,l=e.title;return r.a.createElement(s.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return r.a.createElement(u.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="1025518380"},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Matt Del Signore",description:"Personal website of software developer Matt Del Signore",author:"@delsig"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-64e160d452cc7e4b4d87.js.map