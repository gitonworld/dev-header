(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{DKAG:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("phZJ")),o=r(n("lFqo")),i=r(n("Jmq7")),l=r(n("aDmP")),s=r(n("IVAY")),u=r(n("cjBy")),c=r(n("xK7m")),p=r(n("j8BX")),m=r(n("q1tI"));r(n("17x9")),r(n("2W6z"));var f,d=(f=null,function(){if(null!==f)return f;var e,t,n,r=!1;try{window.addEventListener("test",null,(e={},t="passive",n={get:function(){r=!0}},Object.defineProperty(e,t,n)))}catch(a){}return f=r,r}()),h={capture:!1,passive:!1};function y(e){return p({},h,e)}function v(e,t,n){var r=[e,t];return r.push(d?n:n.capture),r}function g(e,t,n,r){e.addEventListener.apply(e,v(t,n,r))}function b(e,t,n,r){e.removeEventListener.apply(e,v(t,n,r))}function x(e,t){e.children,e.target;var n=c(e,["children","target"]);Object.keys(n).forEach((function(e){if("on"===e.substring(0,2)){var r=n[e],a=u(r),o="object"===a;if(o||"function"===a){var i="capture"===e.substr(-7).toLowerCase(),l=e.substring(2).toLowerCase();l=i?l.substring(0,l.length-7):l,o?t(l,r.handler,r.options):t(l,r,y({capture:i}))}}}))}var E=function(e){function t(){return a(this,t),i(this,l(t).apply(this,arguments))}return s(t,e),o(t,[{key:"componentDidMount",value:function(){this.applyListeners(g)}},{key:"componentDidUpdate",value:function(e){this.applyListeners(b,e),this.applyListeners(g)}},{key:"componentWillUnmount",value:function(){this.applyListeners(b)}},{key:"applyListeners",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props,n=t.target;if(n){var r=n;"string"==typeof n&&(r=window[n]),x(t,e.bind(null,r))}}},{key:"render",value:function(){return this.props.children||null}}]),t}(m.PureComponent);E.propTypes={},t.withOptions=function(e,t){return{handler:e,options:y(t)}},t.default=E},iq04:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Hk+Y"),i=n.n(o),l=n("aoJa"),s=n("HdOC"),u=n("SpY8"),c=n("FJqC"),p=(n("91GP"),n("y4MT")),m={section:{padding:"70px 0"},title:Object.assign(Object.assign({},p.v),{},{marginBottom:"50px",marginTop:"30px",minHeight:"32px",textDecoration:"none",textAlign:"center"}),description:{color:"#999",textAlign:"center"},textCenter:{textAlign:"center"},textArea:{marginRight:"15px",marginLeft:"15px"}};var f=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props.classes;return a.a.createElement("div",{className:e.section},a.a.createElement(l.a,{justify:"center"},a.a.createElement(s.a,{cs:12,sm:12,md:8},a.a.createElement("h2",{className:e.title},"Work with us"),a.a.createElement("h4",{className:e.description},"Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours."),a.a.createElement("form",null,a.a.createElement(l.a,null,a.a.createElement(s.a,{xs:12,sm:12,md:6},a.a.createElement(u.a,{labelText:"Your Name",id:"name",formControlProps:{fullWidth:!0}})),a.a.createElement(s.a,{xs:12,sm:12,md:6},a.a.createElement(u.a,{labelText:"Your Email",id:"email",formControlProps:{fullWidth:!0}})),a.a.createElement(u.a,{labelText:"Your Message",id:"message",formControlProps:{fullWidth:!0,className:e.textArea},inputProps:{multiline:!0,rows:5}}),a.a.createElement(l.a,{justify:"center"},a.a.createElement(s.a,{xs:12,sm:12,md:4,className:e.textCenter},a.a.createElement(c.a,{color:"primary"},"Send Message"))))))))},r}(a.a.Component);t.default=i()(m)(f)},"sBL/":function(e,t,n){function r(e,t,n){var r,a,o,i,l;function s(){var u=Date.now()-i;u<t&&u>=0?r=setTimeout(s,t-u):(r=null,n||(l=e.apply(o,a),o=a=null))}null==t&&(t=100);var u=function(){o=this,a=arguments,i=Date.now();var u=n&&!r;return r||(r=setTimeout(s,t)),u&&(l=e.apply(o,a),o=a=null),l};return u.clear=function(){r&&(clearTimeout(r),r=null)},u.flush=function(){r&&(l=e.apply(o,a),o=a=null,clearTimeout(r),r=null)},u}n("eM6i"),r.debounce=r,e.exports=r}}]);
//# sourceMappingURL=component---src-pages-landing-page-sections-work-section-jsx-7ce66f6bfbbae66a6b60.js.map