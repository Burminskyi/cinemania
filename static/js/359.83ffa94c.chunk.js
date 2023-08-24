"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[359],{7359:function(n,e,r){r.r(e),r.d(e,{default:function(){return nn}});var a,t,i,o,s=r(4265),c=r(4165),l=r(5861),d=r(9439),u=r(7633),p=r(168),g=r(8547),f=g.zo.form(a||(a=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-bottom: 16px;\n  @media (min-width: 768px) {\n    margin-bottom: 36px;\n  }\n  @media (min-width: 1280px) {\n    margin-bottom: 48px;\n  }\n"]))),h=g.zo.input(t||(t=(0,p.Z)(["\n  padding-left: 20px;\n  width: 224px;\n  height: 40px;\n  border: 1px solid orange;\n  border-radius: 8px;\n  background: transparent;\n  color: inherit;\n  &::placeholder {\n    font-family: 'Roboto-500', sans-serif;\n\n    font-weight: 500;\n    font-size: 14px;\n    line-height: calc(16 / 14);\n\n    color: #b7b7b7;\n  }\n  @media (min-width: 768px) {\n    width: 204px;\n  }\n  @media (min-width: 1280px) {\n    width: 334px;\n    padding-left: 24px;\n    &::placeholder {\n      font-size: 16px;\n      line-height: calc(19 / 16);\n    }\n  }\n"]))),x=g.zo.button(i||(i=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n  border-radius: 50%;\n  border: none;\n  &:hover {\n    border: 1px solid #f84119;\n    background: transparent;\n    fill: #ffc226;\n  }\n"]))),v=r(184),m=function(n){var e=n.handleSubmit;return(0,v.jsxs)(f,{onSubmit:e,children:[(0,v.jsx)(x,{type:"submit",children:(0,v.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",children:(0,v.jsx)("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"white",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,v.jsx)(h,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"})]})},b=r(9462),y=g.zo.section(o||(o=(0,p.Z)(["\n  padding-top: 16px;\n\n  @media (min-width: 768px) {\n    padding-top: 36px;\n  }\n  @media (min-width: 1280px) {\n    padding-top: 48px;\n  }\n"]))),k=r(2791),j=r(9323),w=r(1087),P=r(1413),Z=r(5987),L=r(1694),C=r.n(L),N=r(162),M=r(1691),q=["active","disabled","className","style","activeLabel","children","linkStyle","linkClassName"],z=["children"],T=k.forwardRef((function(n,e){var r=n.active,a=void 0!==r&&r,t=n.disabled,i=void 0!==t&&t,o=n.className,s=n.style,c=n.activeLabel,l=void 0===c?"(current)":c,d=n.children,u=n.linkStyle,p=n.linkClassName,g=(0,Z.Z)(n,q),f=a||i?"span":M.Z;return(0,v.jsx)("li",{ref:e,style:s,className:C()(o,"page-item",{active:a,disabled:i}),children:(0,v.jsxs)(f,(0,P.Z)((0,P.Z)({className:C()("page-link",p),style:u},g),{},{children:[d,a&&l&&(0,v.jsx)("span",{className:"visually-hidden",children:l})]}))})}));T.displayName="PageItem";var F=T;function S(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,a=k.forwardRef((function(n,a){var t=n.children,i=(0,Z.Z)(n,z);return(0,v.jsxs)(T,(0,P.Z)((0,P.Z)({},i),{},{ref:a,children:[(0,v.jsx)("span",{"aria-hidden":"true",children:t||e}),(0,v.jsx)("span",{className:"visually-hidden",children:r})]}))}));return a.displayName=n,a}var R=S("First","\xab"),I=S("Prev","\u2039","Previous"),_=S("Ellipsis","\u2026","More"),B=S("Next","\u203a"),E=S("Last","\xbb"),A=["bsPrefix","className","size"],D=k.forwardRef((function(n,e){var r=n.bsPrefix,a=n.className,t=n.size,i=(0,Z.Z)(n,A),o=(0,N.vE)(r,"pagination");return(0,v.jsx)("ul",(0,P.Z)((0,P.Z)({ref:e},i),{},{className:C()(a,o,t&&"".concat(o,"-").concat(t))}))}));D.displayName="Pagination";var O,V,G,H,J=Object.assign(D,{First:R,Prev:I,Ellipsis:_,Item:F,Next:B,Last:E}),K=(0,g.zo)(J)(O||(O=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n"]))),Q=(0,g.zo)(J.Item)(V||(V=(0,p.Z)(["\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n\n    background-position: center;\n    background-repeat: no-repeat;\n    background-color: transparent;\n\n    border: 1px solid #595959;\n    border-radius: 50%;\n\n    color: orange;\n    &:hover {\n      transform: scale(1.1) translateZ(0);\n      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n      box-shadow: 0 0 20px var(--orange);\n      background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n      color: white;\n    }\n  }\n  span {\n    border-top-left-radius: none;\n    border-bottom-left-radius: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n\n    background-position: center;\n    background-repeat: no-repeat;\n    background-color: transparent;\n\n    border: 1px solid #595959;\n    border-radius: 50%;\n\n    box-shadow: 0 0 20px var(--orange);\n    background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n    color: white;\n  }\n"]))),U=(0,g.zo)(J.Next)(G||(G=(0,p.Z)(["\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n    background-color: transparent;\n    border: none;\n    color: orange;\n    &:hover {\n      transform: scale(1.1) translateZ(0);\n      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n      box-shadow: 0 0 20px var(--orange);\n      background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n      color: white;\n    }\n    &:focus {\n      background-color: transparent;\n      color: orange;\n    }\n  }\n"]))),W=(0,g.zo)(J.Prev)(H||(H=(0,p.Z)(["\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n    background-color: transparent;\n    border: none;\n    color: orange;\n    &:hover {\n      transform: scale(1.1) translateZ(0);\n      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n      box-shadow: 0 0 20px var(--orange);\n      background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n      color: white;\n    }\n    &:focus {\n      background-color: transparent;\n      color: orange;\n    }\n  }\n"]))),X=function(n){var e=n.totalPages,r=n.currentPage,a=n.onChangePage,t=n.setSearchParams,i=n.query,o=[],s=e<500?e:500;if(r>1&&o.push((0,v.jsx)(W,{onClick:function(){a(r-1),i&&t({query:i,page:r-1}),i||t({page:r-1})}},"prev")),s<=2&&2===r)for(var c=function(n){o.push((0,v.jsx)(Q,{"data-page":n,active:n===r,onClick:function(){a(n),i&&t({query:i,page:n}),i||t({page:n})},children:n},n))},l=2;l<=s;l++)c(l);if(s>2&&2===r)for(var d=function(n){o.push((0,v.jsx)(Q,{"data-page":n,active:n===r,onClick:function(){a(n),i&&t({query:i,page:n}),i||t({page:n})},children:n},n))},u=1;u<=r+3;u++)d(u);if(s<=2&&r<=1)for(var p=function(n){o.push((0,v.jsx)(Q,{"data-page":n,active:n===r,onClick:function(){a(n),i&&t({query:i,page:n}),i||t({page:n})},children:n},n))},g=1;g<=s;g++)p(g);if(s>2&&r<=1)for(var f=function(n){o.push((0,v.jsx)(Q,{"data-page":n,active:n===r,onClick:function(){a(n),i&&t({query:i,page:n}),i||t({page:n})},children:n},n))},h=1;h<=r+4;h++)f(h);if(s>2&&r<=s-2&&r>2)for(var x=function(n){o.push((0,v.jsx)(Q,{"data-page":n,active:n===r,onClick:function(){a(n),i&&t({query:i,page:n}),i||t({page:n})},children:n},n))},m=r-2;m<=r+2;m++)x(m);if(s>2&&r===s-1)for(var b=function(n){o.push((0,v.jsx)(Q,{"data-page":n,active:n===r,onClick:function(){a(n),i&&t({query:i,page:n}),i||t({page:n})},children:n},n))},y=r-3;y<=r+1;y++)b(y);if(s>2&&r>=s)for(var k=function(n){o.push((0,v.jsx)(Q,{"data-page":n,active:n===r,onClick:function(){a(n),i&&t({query:i,page:n}),i||t({page:n})},children:n},n))},j=r-4;j<=r;j++)k(j);return r<s&&o.push((0,v.jsx)(U,{onClick:function(){a(r+1),i&&t({query:i,page:r+1}),i||t({page:r+1})}},"next")),(0,v.jsx)(K,{children:o})},Y=r(8983),$=function(n){var e=n.weeklyTrendingMovies,r=n.addToLibrary,a=n.removeFromLibrary,t=n.favoriteMovies,i=n.totalPages,o=n.currentPage,s=n.onChangePage,p=n.setTotalMoviesByNamePagesAmount,g=n.isTrendingMoviesLoading,f=i<500?i:500,h=(0,k.useRef)(null),x=(0,k.useState)(!1),P=(0,d.Z)(x,2),Z=P[0],L=P[1],C=(0,k.useState)(null),N=(0,d.Z)(C,2),M=N[0],q=N[1],z=(0,k.useState)([]),T=(0,d.Z)(z,2),F=T[0],S=T[1],R=(0,w.lr)(),I=(0,d.Z)(R,2),_=I[0],B=I[1];(0,k.useEffect)((function(){h.current&&h.current.scrollIntoView({behavior:"smooth"});var n=_.get("query");q(n);var e=_.get("page");e>=f&&null!==n&&(B({query:n,page:f}),s(f)),e>=f&&null===n&&(B({page:f}),s(f)),e&&s(e);var r=function(){var r=(0,l.Z)((0,c.Z)().mark((function r(){var a;return(0,c.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,L(!0),n){r.next=4;break}return r.abrupt("return");case 4:return r.next=6,(0,j.IR)(n,e||1);case 6:a=r.sent,p(a.total_pages),S(a.results),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),console.log(r.t0.message);case 14:return r.prev=14,L(!1),r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[0,11,14,17]])})));return function(){return r.apply(this,arguments)}}();r()}),[f,o,s,M,_,B,p]);return(0,v.jsx)(y,{ref:h,children:(0,v.jsxs)(b.pR,{children:[(0,v.jsx)(m,{handleSubmit:function(n){n.preventDefault();var e=n.target.query.value.toLowerCase().trim();e?(s(1),B({query:e,page:1})):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441")}}),Z||g?(0,v.jsx)(Y.a,{}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b.th,{children:F.length?F.map((function(n){return(0,v.jsx)(u.i,{movie:n,addToLibrary:r,removeFromLibrary:a,favoriteMovies:t},n.id)})):e.map((function(n){return(0,v.jsx)(u.i,{movie:n,addToLibrary:r,removeFromLibrary:a,favoriteMovies:t},n.id)}))}),!Z&&i>1&&(0,v.jsx)(X,{totalPages:i,currentPage:o,onChangePage:s,setSearchParams:B,query:M})]})]})})},nn=function(n){var e=n.weeklyTrendingMovies,r=n.addToLibrary,a=n.removeFromLibrary,t=n.favoriteMovies,i=n.totalPages,o=n.currentPage,c=n.onChangePage,l=n.setTotalMoviesByNamePagesAmount,d=n.isTrendingMoviesLoading;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s.default,{addToLibrary:r,removeFromLibrary:a,favoriteMovies:t}),(0,v.jsx)($,{weeklyTrendingMovies:e,addToLibrary:r,removeFromLibrary:a,favoriteMovies:t,totalPages:i,currentPage:o,onChangePage:c,setTotalMoviesByNamePagesAmount:l,isTrendingMoviesLoading:d})]})}}}]);
//# sourceMappingURL=359.83ffa94c.chunk.js.map