"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[359],{7359:function(n,e,r){r.r(e),r.d(e,{default:function(){return nn}});var a,t,i,o=r(8129),s=r(9439),c=r(2791),l=r(1087),d=r(9434),p=r(1029),u=r(7633),f=r(168),g=r(8547),h=g.zo.form(a||(a=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-bottom: 16px;\n  @media (min-width: 768px) {\n    margin-bottom: 36px;\n  }\n  @media (min-width: 1280px) {\n    margin-bottom: 48px;\n  }\n"]))),x=g.zo.input(t||(t=(0,f.Z)(["\n  padding-left: 20px;\n  width: 224px;\n  height: 40px;\n  border: 1px solid orange;\n  border-radius: 8px;\n  background: transparent;\n  color: inherit;\n  &::placeholder {\n    font-family: 'Roboto-500', sans-serif;\n\n    font-weight: 500;\n    font-size: 14px;\n    line-height: calc(16 / 14);\n\n    color: #b7b7b7;\n  }\n  @media (min-width: 768px) {\n    width: 204px;\n  }\n  @media (min-width: 1280px) {\n    width: 334px;\n    padding-left: 24px;\n    &::placeholder {\n      font-size: 16px;\n      line-height: calc(19 / 16);\n    }\n  }\n"]))),m=g.zo.button(i||(i=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n  border-radius: 50%;\n  border: none;\n  &:hover {\n    border: 1px solid #f84119;\n    background: transparent;\n    fill: #ffc226;\n  }\n"]))),v=r(3329),b=function(n){var e=n.handleSubmit;return(0,v.jsxs)(h,{onSubmit:e,children:[(0,v.jsx)(m,{type:"submit",children:(0,v.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",children:(0,v.jsx)("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"white",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,v.jsx)(x,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"})]})},y=r(1413),j=r(5987),k=r(1694),w=r.n(k),Z=r(162),N=r(1691),q=["active","disabled","className","style","activeLabel","children","linkStyle","linkClassName"],z=["children"],C=c.forwardRef((function(n,e){var r=n.active,a=void 0!==r&&r,t=n.disabled,i=void 0!==t&&t,o=n.className,s=n.style,c=n.activeLabel,l=void 0===c?"(current)":c,d=n.children,p=n.linkStyle,u=n.linkClassName,f=(0,j.Z)(n,q),g=a||i?"span":N.Z;return(0,v.jsx)("li",{ref:e,style:s,className:w()(o,"page-item",{active:a,disabled:i}),children:(0,v.jsxs)(g,(0,y.Z)((0,y.Z)({className:w()("page-link",u),style:p},f),{},{children:[d,a&&l&&(0,v.jsx)("span",{className:"visually-hidden",children:l})]}))})}));C.displayName="PageItem";var P=C;function S(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,a=c.forwardRef((function(n,a){var t=n.children,i=(0,j.Z)(n,z);return(0,v.jsxs)(C,(0,y.Z)((0,y.Z)({},i),{},{ref:a,children:[(0,v.jsx)("span",{"aria-hidden":"true",children:t||e}),(0,v.jsx)("span",{className:"visually-hidden",children:r})]}))}));return a.displayName=n,a}var L=S("First","\xab"),R=S("Prev","\u2039","Previous"),I=S("Ellipsis","\u2026","More"),E=S("Next","\u203a"),F=S("Last","\xbb"),A=["bsPrefix","className","size"],_=c.forwardRef((function(n,e){var r=n.bsPrefix,a=n.className,t=n.size,i=(0,j.Z)(n,A),o=(0,Z.vE)(r,"pagination");return(0,v.jsx)("ul",(0,y.Z)((0,y.Z)({ref:e},i),{},{className:w()(a,o,t&&"".concat(o,"-").concat(t))}))}));_.displayName="Pagination";var Y,M,O,V,B,D=Object.assign(_,{First:L,Prev:R,Ellipsis:I,Item:P,Next:E,Last:F}),Q=(0,g.zo)(D)(Y||(Y=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n"]))),U=(0,g.zo)(D.Item)(M||(M=(0,f.Z)(["\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n\n    background-position: center;\n    background-repeat: no-repeat;\n    background-color: transparent;\n\n    border: 1px solid #595959;\n    border-radius: 50%;\n\n    color: orange;\n    &:hover {\n      transform: scale(1.1) translateZ(0);\n      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n      box-shadow: 0 0 20px var(--orange);\n      background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n      color: white;\n    }\n  }\n  span {\n    border-top-left-radius: none;\n    border-bottom-left-radius: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n\n    background-position: center;\n    background-repeat: no-repeat;\n    background-color: transparent;\n\n    border: 1px solid #595959;\n    border-radius: 50%;\n\n    box-shadow: 0 0 20px var(--orange);\n    background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n    color: white;\n  }\n"]))),X=(0,g.zo)(D.Next)(O||(O=(0,f.Z)(["\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n    background-color: transparent;\n    border: none;\n    color: orange;\n    &:hover {\n      transform: scale(1.1) translateZ(0);\n      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n      box-shadow: 0 0 20px var(--orange);\n      background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n      color: white;\n    }\n    &:focus {\n      background-color: transparent;\n      color: orange;\n    }\n  }\n"]))),G=(0,g.zo)(D.Prev)(V||(V=(0,f.Z)(["\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n    background-color: transparent;\n    border: none;\n    color: orange;\n    &:hover {\n      transform: scale(1.1) translateZ(0);\n      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n      box-shadow: 0 0 20px var(--orange);\n      background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n      color: white;\n    }\n    &:focus {\n      background-color: transparent;\n      color: orange;\n    }\n  }\n"]))),H=r(6351),J=function(n){var e=n.totalPages,r=n.onChangePage,a=n.setSearchParams,t=n.query,i=[],o=e<500?e:500,s=(0,d.v9)(H.Zp),c=Number(s);if(c>1&&i.push((0,v.jsx)(G,{onClick:function(){r(c-1),t&&a({query:t,page:c-1}),t||a({page:c-1})}},"prev")),o<=2&&2===c)for(var l=function(n){i.push((0,v.jsx)(U,{"data-page":n,active:n===c,onClick:function(){r(n),t&&a({query:t,page:n}),t||a({page:n})},children:n},n))},p=2;p<=o;p++)l(p);if(o>2&&2===c)for(var u=function(n){i.push((0,v.jsx)(U,{"data-page":n,active:n===c,onClick:function(){r(n),t&&a({query:t,page:n}),t||a({page:n})},children:n},n))},f=1;f<=c+3;f++)u(f);if(o<=2&&c<=1)for(var g=function(n){i.push((0,v.jsx)(U,{"data-page":n,active:n===c,onClick:function(){r(n),t&&a({query:t,page:n}),t||a({page:n})},children:n},n))},h=1;h<=o;h++)g(h);if(o>2&&c<=1)for(var x=function(n){i.push((0,v.jsx)(U,{"data-page":n,active:n===c,onClick:function(){r(n),t&&a({query:t,page:n}),t||a({page:n})},children:n},n))},m=1;m<=c+4;m++)x(m);if(o>2&&c<=o-2&&c>2)for(var b=function(n){i.push((0,v.jsx)(U,{"data-page":n,active:n===c,onClick:function(){r(n),t&&a({query:t,page:n}),t||a({page:n})},children:n},n))},y=c-2;y<=c+2;y++)b(y);if(o>2&&c===o-1)for(var j=function(n){i.push((0,v.jsx)(U,{"data-page":n,active:n===c,onClick:function(){r(n),t&&a({query:t,page:n}),t||a({page:n})},children:n},n))},k=c-3;k<=c+1;k++)j(k);if(o>2&&c>=o)for(var w=function(n){i.push((0,v.jsx)(U,{"data-page":n,active:n===c,onClick:function(){r(n),t&&a({query:t,page:n}),t||a({page:n})},children:n},n))},Z=c-4;Z<=c;Z++)w(Z);return c<o&&i.push((0,v.jsx)(X,{onClick:function(){r(c+1),t&&a({query:t,page:c+1}),t||a({page:c+1})}},"next")),(0,v.jsx)(Q,{children:i})},K=r(8983),T=r(9462),W=g.zo.section(B||(B=(0,f.Z)(["\n  padding-top: 16px;\n\n  @media (min-width: 768px) {\n    padding-top: 36px;\n  }\n  @media (min-width: 1280px) {\n    padding-top: 48px;\n  }\n"]))),$=function(){var n=(0,d.v9)(H.eA),e=(0,d.v9)(H.Ze),r=(0,d.v9)(H.OL),a=(0,d.v9)(H.zX),t=(0,d.v9)(H.UQ),i=(0,l.lr)(),o=(0,s.Z)(i,2),f=o[0],g=o[1],h=(0,c.useRef)(null),x=(0,c.useState)(null),m=(0,s.Z)(x,2),y=m[0],j=m[1],k=(0,d.I0)(),w=Number(f.get("page")),Z=f.get("query");(0,c.useEffect)((function(){h.current&&h.current.scrollIntoView({behavior:"smooth"}),Z||w&&(w>500&&g({page:500}),k((0,p.YA)(w)),k((0,p.z3)(w)))}),[k,w,Z,a,g]),(0,c.useEffect)((function(){if(h.current&&h.current.scrollIntoView({behavior:"smooth"}),Z){var n=Number(f.get("page"));e&&(n=Number(f.get("page"))>e?e:Number(f.get("page")));var r=f.get("query");j(r),g({query:r,page:n});var a={query:r,page:n};k((0,p.YA)(n)),k((0,p.Pv)(a))}}),[k,Z,f,g,e]);var N=function(n){k((0,p.YA)(n))};return(0,v.jsx)(W,{ref:h,children:(0,v.jsxs)(T.pR,{children:[(0,v.jsx)(b,{handleSubmit:function(n){n.preventDefault();var e=n.target.query.value.toLowerCase().trim();e?(N(1),g({query:e,page:1})):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441")}}),r?(0,v.jsx)(K.a,{}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(T.th,{children:[t&&t.map((function(n){return(0,v.jsx)(u.i,{movie:n},n.id)})),a&&a.map((function(n){return(0,v.jsx)(u.i,{movie:n},n.id)}))]}),!r&&n>1&&(0,v.jsx)(J,{totalPages:n,onChangePage:N,setSearchParams:g,query:y})]})]})})},nn=function(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.default,{}),(0,v.jsx)($,{})]})}}}]);
//# sourceMappingURL=359.b58fd540.chunk.js.map