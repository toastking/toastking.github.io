(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});var a=n(0),i=n.n(a),r=(n(149),n(151)),o=n(154),l=r.a.div.withConfig({displayName:"post__PostContainer",componentId:"q9naw2-0"})(["padding:1em;@media (min-width:800px){margin-right:15vw;margin-left:15vw;}@media (min-width:200px) and (max-width:400px){margin-right:5vw;margin-left:5vw;}"]),c=r.a.h3.withConfig({displayName:"post__PostDate",componentId:"q9naw2-1"})(["font-weight:300;"]);t.default=function(e){var t=e.data.markdownRemark;return i.a.createElement(o.a,null,i.a.createElement(l,null,i.a.createElement("h1",null,t.frontmatter.title),i.a.createElement(c,null,t.frontmatter.date),i.a.createElement("div",{className:"mattdelsig-post-body",dangerouslySetInnerHTML:{__html:t.html}})))};var u="474649493"},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(148),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(150),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var s=n(32);n.d(t,"parsePath",function(){return s.a});var m=i.a.createContext({}),h=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},152:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(52),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Matt Del Signore"}}}}},154:function(e,t,n){"use strict";var a=n(153),i=n(0),r=n.n(i),o=n(4),l=n.n(o),c=n(149),u=n(151),d=n(7),s=n.n(d),m=n(51),h=n.n(m),p=n(155),f=n(158),g=u.a.div.withConfig({displayName:"header__HeaderContainer",componentId:"sc-31ozxh-0"})(["display:flex;width:100vw;padding:.25em;background:rgb(24,24,24);color:white;font-weight:bold;font-family:'Roboto Mono','sans-serif';vertical-align:middle;position:absolute;opacity:0.8;z-index:999;a{text-decoration:none;color:white;}a:visited{color:white;}a:hover{color:#cccccc;}@media (min-width:701px){flex-direction:row;align-items:center;min-height:4em;}@media (max-width:700px){flex-direction:column;align-items:stretch;min-height:3em;}"]),w=u.a.div.withConfig({displayName:"header__Logo",componentId:"sc-31ozxh-1"})(["display:flex;flex-direction:row;margin-right:auto;margin-left:.1em;font-size:1.75em;opacity:1;@media (max-width:700px){width:100%;}"]),y=u.a.div.withConfig({displayName:"header__MenuDiv",componentId:"sc-31ozxh-2"})(["color:white;font-size:1.25em;opacity:1;text-align:center;@media (min-width:701px){flex-direction:row;display:flex;align-items:center;margin-right:.5em;margin-left:auto;}@media (max-width:700px){flex-direction:column;margin-top:.5em;margin-bottom:auto;display:",";}"],function(e){return e.show?"flex":"none"}),x=u.a.p.withConfig({displayName:"header__MenuText",componentId:"sc-31ozxh-3"})(["margin:auto .25em auto .25em;"]),v=function(e){return r.a.createElement(x,null,r.a.createElement(c.Link,{to:e.url}," ",e.text," "))},E=u.a.div.withConfig({displayName:"header__MenuButtonDiv",componentId:"sc-31ozxh-4"})(["margin-left:auto;margin-right:.25em;.MenuButton{border:none;background:transparent;color:white;cursor:pointer;}.MenuButton:hover{color:#cccccc;}@media (min-width:701px){display:none;}@media (max-width:700px){display:block;}"]),b=function(e){return r.a.createElement(E,null,r.a.createElement("button",{className:"MenuButton",onClick:e.onToggleMenu},r.a.createElement(p.a,{icon:e.showMenu?f.b:f.a})))},M=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showMenu:!1},n.toggleMenu=n.toggleMenu.bind(h()(h()(n))),n}s()(t,e);var n=t.prototype;return n.toggleMenu=function(){var e=!this.state.showMenu;this.setState({showMenu:e})},n.render=function(){return r.a.createElement(g,null,r.a.createElement(w,null,r.a.createElement(v,{url:"/",text:this.props.title}),r.a.createElement(b,{showMenu:this.state.showMenu,onToggleMenu:this.toggleMenu})),r.a.createElement(y,{show:this.state.showMenu},r.a.createElement(v,{url:"/about",text:"About"}),r.a.createElement(v,{url:"/projects/projects",text:"Projects"}),r.a.createElement(x,null,r.a.createElement("a",{href:"/Matthew-Del-Signore-Resume.pdf"},"Resume"))))},t}(r.a.Component),_=function(e){var t=e.siteTitle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{title:t}))};_.propTypes={siteTitle:l.a.string},_.defaultProps={siteTitle:""};var C=_,k=u.a.div.withConfig({displayName:"layout__Container",componentId:"ii2kc2-0"})(["height:100vh;width:100vw;display:flex;flex-direction:column;background:#495459;"]),q=u.a.div.withConfig({displayName:"layout__Content",componentId:"ii2kc2-1"})(["flex:1 1 auto;overflow-y:auto;padding:1em;padding-top:4em;a,a:visited{color:white;}"]),T=u.a.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-2"})(["font-weight:light;font-size:0.75em;text-align:center;"]),I=function(e){var t=e.children;return r.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(k,null,r.a.createElement(C,{siteTitle:e.site.siteMetadata.title}),r.a.createElement(q,null,t),r.a.createElement(T,null,"© Matthew Del Signore 2018, Built with ",r.a.createElement("a",{href:"http://www.gatsbyjs.org"},"Gatsby")))},data:a})};I.propTypes={children:l.a.node.isRequired};t.a=I}}]);
//# sourceMappingURL=component---src-templates-post-js-67a16a77dea1c2fe8e96.js.map