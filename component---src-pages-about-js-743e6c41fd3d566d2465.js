(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(155),o=a(157),s=a(179),l=a(149),d=a(180),c=a.n(d),u=function(){return n.a.createElement(l.StaticQuery,{query:"399171331",render:function(e){return n.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:s})},f=a(151),A=f.a.div.withConfig({displayName:"about__AboutContainer",componentId:"sc-190nmfb-0"})(["display:flex;@media (min-width:800px){flex-direction:row;}@media (max-width:800px){flex-direction:column-reverse;}padding:1.5em;"]),p=f.a.div.withConfig({displayName:"about__AvatarCol",componentId:"sc-190nmfb-1"})(["flex;1;min-width:300px;max-height:500px;"]),h=f.a.div.withConfig({displayName:"about__BioCol",componentId:"sc-190nmfb-2"})(["flex:2;margin-left:1em;margin-right:auto;margin-bottom:2em;"]);t.default=function(){return n.a.createElement(r.a,null,n.a.createElement(o.a,{title:"Matthew Del Signore",keywords:["coder","portfolio","frontend","react","gatsby","about"]}),n.a.createElement(A,null,n.a.createElement(p,null,n.a.createElement(u,null)),n.a.createElement(h,null,"I am fullstack software engineer in the New York City area. I currently work at ",n.a.createElement("a",{href:"https://1010data.com/"},"1010data"),". My speciality is building data visualization and data analysis tools.",n.a.createElement("br",null),"If you like what you see, ",n.a.createElement("a",{href:"mailto:mattdelsig@me.com"},"drop me a line at mattdelsig@me.com"),".",n.a.createElement("br",null),"Check out my ",n.a.createElement("a",{href:"https://github.com/toastking"},"Github"),".",n.a.createElement("br",null),"You can also find me on ",n.a.createElement("a",{href:"https://www.linkedin.com/in/mattdelsig/"},"LinkedIn"),".",n.a.createElement("br",null))))}},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return A});var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(148),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(150),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var f=n.a.createContext({}),A=function(e){return n.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}A.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var i;e.exports=(i=a(152))&&i.default||i},152:function(e,t,a){"use strict";a.r(t);a(33);var i=a(0),n=a.n(i),r=a(4),o=a.n(r),s=a(52),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Matt Del Signore"}}}}},154:function(e,t,a){},155:function(e,t,a){"use strict";var i=a(153),n=a(0),r=a.n(n),o=a(4),s=a.n(o),l=a(149),d=a(151),c=a(7),u=a.n(c),f=a(51),A=a.n(f),p=a(156),h=a(159),m=d.a.div.withConfig({displayName:"header__HeaderContainer",componentId:"sc-31ozxh-0"})(["display:flex;width:100vw;padding:.25em;background:rgba(24,24,24);color:white;font-weight:bold;font-family:'Roboto Mono','sans-serif';vertical-align:middle;position:absolute;opacity:0.8;z-index:999;a{text-decoration:none;color:white;}a:visited{color:white;}a:hover{color:#cccccc;}@media (min-width:701px){flex-direction:row;align-items:center;min-height:4em;}@media (max-width:700px){flex-direction:column;align-items:stretch;min-height:3em;}"]),g=d.a.div.withConfig({displayName:"header__Logo",componentId:"sc-31ozxh-1"})(["display:flex;flex-direction:row;margin-right:auto;margin-left:.1em;font-size:1.75em;opacity:1;@media (max-width:700px){width:100%;}"]),y=d.a.div.withConfig({displayName:"header__MenuDiv",componentId:"sc-31ozxh-2"})(["color:white;font-size:1.25em;opacity:1;text-align:center;@media (min-width:701px){flex-direction:row;display:flex;align-items:center;margin-right:.5em;margin-left:auto;}@media (max-width:700px){flex-direction:column;margin-top:.5em;margin-bottom:auto;display:",";}"],function(e){return e.show?"flex":"none"}),w=d.a.p.withConfig({displayName:"header__MenuText",componentId:"sc-31ozxh-3"})(["margin:auto .25em auto .25em;"]),b=function(e){return r.a.createElement(w,null,r.a.createElement(l.Link,{to:e.url}," ",e.text," "))},E=d.a.div.withConfig({displayName:"header__MenuButtonDiv",componentId:"sc-31ozxh-4"})(["margin-left:auto;margin-right:.25em;.MenuButton{border:none;background:transparent;color:white;cursor:pointer;}.MenuButton:hover{color:#cccccc;}@media (min-width:701px){display:none;}@media (max-width:700px){display:block;}"]),v=function(e){return r.a.createElement(E,null,r.a.createElement("button",{class:"MenuButton",onClick:e.onToggleMenu},r.a.createElement(p.a,{icon:e.showMenu?h.b:h.a})))},x=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showMenu:!1},a.toggleMenu=a.toggleMenu.bind(A()(A()(a))),a}u()(t,e);var a=t.prototype;return a.toggleMenu=function(){var e=!this.state.showMenu;this.setState({showMenu:e})},a.render=function(){return r.a.createElement(m,null,r.a.createElement(g,null,r.a.createElement(b,{url:"/",text:this.props.title}),r.a.createElement(v,{showMenu:this.state.showMenu,onToggleMenu:this.toggleMenu})),r.a.createElement(y,{show:this.state.showMenu},r.a.createElement(b,{url:"/about",text:"About"}),r.a.createElement(b,{url:"/projects/projects",text:"Projects"}),r.a.createElement(b,{url:"/Matthew-Del-Signore-Resume.pdf",text:"Resume"})))},t}(r.a.Component),S=function(e){var t=e.siteTitle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{title:t}))};S.propTypes={siteTitle:s.a.string},S.defaultProps={siteTitle:""};var I=S,M=(a(154),d.a.div.withConfig({displayName:"layout__Container",componentId:"ii2kc2-0"})(["height:100vh;width:100vw;display:flex;flex-direction:column;background:#495459;"])),B=d.a.div.withConfig({displayName:"layout__Content",componentId:"ii2kc2-1"})(["flex:1 1 auto;overflow-y:auto;padding:1em;padding-top:4em;a,a:visited{color:white;}"]),C=d.a.footer.withConfig({displayName:"layout__Footer",componentId:"ii2kc2-2"})(["font-weight:light;font-size:0.75em;text-align:center;"]),R=function(e){var t=e.children;return r.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(M,null,r.a.createElement(I,{siteTitle:e.site.siteMetadata.title}),r.a.createElement(B,null,t),r.a.createElement(C,null,"© Matthew Del Signore 2018, Built with ",r.a.createElement("a",{href:"http://www.gatsbyjs.org"},"Gatsby")))},data:i})};R.propTypes={children:s.a.node.isRequired};t.a=R},157:function(e,t,a){"use strict";var i=a(158),n=a(0),r=a.n(n),o=a(4),s=a.n(o),l=a(160),d=a.n(l),c=a(149);function u(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title;return r.a.createElement(c.StaticQuery,{query:f,render:function(e){var i=t||e.site.siteMetadata.description;return r.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:s},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:i}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var f="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Matt Del Signore",description:"Personal website of software developer Matt Del Signore",author:"@delsig"}}}}},179:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EABcBAQEBAQAAAAAAAAAAAAAAAAEAAgP/2gAMAwEAAhADEAAAAcyqe1aQ6o8fuHS2Bn//xAAdEAACAgEFAAAAAAAAAAAAAAACAwABEwQREiEz/9oACAEBAAEFAmO4WF713HGJM07F48wSoHpP/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBEEL/2gAIAQMBAT8BUIRmv//EABgRAAIDAAAAAAAAAAAAAAAAAAARARBB/9oACAECAQE/AXIza//EABsQAAEEAwAAAAAAAAAAAAAAABEAAQIQEiEx/9oACAEBAAY/AsYxN6QLFl1qNf/EABsQAQADAAMBAAAAAAAAAAAAAAEAESExQVHh/9oACAEBAAE/IX1lLb6lW1T4zPBEm1MWdgDRh9KYVOYmttuCk//aAAwDAQACAAMAAAAQ9y8C/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQESH/2gAIAQMBAT8QyMpL/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQESH/2gAIAQIBAT8Q2aLy/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBUWFxkf/aAAgBAQABPxAKQBFQHUIgqZTT7nGIdbmBoiDFnXiGGYzERuBK+EG0IHCMHY2CvdvMsQXdz//Z",aspectRatio:1,src:"/static/45d24f682eba2583cc4da6b6029ff07b/2a334/avatar.jpeg",srcSet:"/static/45d24f682eba2583cc4da6b6029ff07b/1ea63/avatar.jpeg 50w,\n/static/45d24f682eba2583cc4da6b6029ff07b/31918/avatar.jpeg 100w,\n/static/45d24f682eba2583cc4da6b6029ff07b/2a334/avatar.jpeg 200w,\n/static/45d24f682eba2583cc4da6b6029ff07b/2d280/avatar.jpeg 300w,\n/static/45d24f682eba2583cc4da6b6029ff07b/20f06/avatar.jpeg 400w,\n/static/45d24f682eba2583cc4da6b6029ff07b/1e2bc/avatar.jpeg 460w",sizes:"(max-width: 200px) 100vw, 200px"}}}}}},180:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var n,r=i(a(7)),o=i(a(51)),s=i(a(161)),l=i(a(162)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},A=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+n+"<img "+s+l+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,n=e.onError,r=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},r,{onLoad:i,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});g.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!1,r=t.fadeIn,s=A(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:n,fadeIn:r,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:A(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,w=e.Tag,b="boolean"==typeof y?"lightgray":y,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),x={title:t,alt:this.state.isVisible?"":a,style:E,className:A};if(p){var S=p;return d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(S.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&d.default.createElement(g,(0,l.default)({src:S.base64},x)),S.tracedSVG&&d.default.createElement(g,(0,l.default)({src:S.tracedSVG},x)),b&&d.default.createElement(w,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,S.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),d.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),d.default.createElement(g,{alt:a,title:t,src:S.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},S))}}))}if(h){var I=h,M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},r);return"inherit"===r.display&&delete M.display,d.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},I.base64&&d.default.createElement(g,(0,l.default)({src:I.base64},x)),I.tracedSVG&&d.default.createElement(g,(0,l.default)({src:I.tracedSVG},x)),b&&d.default.createElement(w,{title:t,style:{backgroundColor:b,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),d.default.createElement(g,{alt:a,title:t,width:I.width,height:I.height,src:I.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:I.width,height:I.height},I))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),b=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:w,sizes:b,fixed:w,fluid:b,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var E=y;t.default=E}}]);
//# sourceMappingURL=component---src-pages-about-js-743e6c41fd3d566d2465.js.map