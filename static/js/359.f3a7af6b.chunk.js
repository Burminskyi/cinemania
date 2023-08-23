"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[359],{7359:function(n,e,r){r.r(e),r.d(e,{default:function(){return nn}});var a,t,i,o,s=r(4265),c=r(4165),l=r(5861),d=r(9439),u=r(7633),p=r(168),g=r(8547),f=g.zo.form(a||(a=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-bottom: 16px;\n  @media (min-width: 768px) {\n    margin-bottom: 36px;\n  }\n  @media (min-width: 1280px) {\n    margin-bottom: 48px;\n  }\n"]))),h=g.zo.input(t||(t=(0,p.Z)(["\n  padding-left: 20px;\n  width: 224px;\n  height: 40px;\n  border: 1px solid var(--white);\n  border-radius: 8px;\n  background: transparent;\n  color: var(--white);\n  &::placeholder {\n    font-family: 'Roboto-500', sans-serif;\n\n    font-weight: 500;\n    font-size: 14px;\n    line-height: calc(16 / 14);\n\n    color: #b7b7b7;\n  }\n  @media (min-width: 768px) {\n    width: 204px;\n  }\n  @media (min-width: 1280px) {\n    width: 334px;\n    padding-left: 24px;\n    &::placeholder {\n      font-size: 16px;\n      line-height: calc(19 / 16);\n    }\n  }\n"]))),x=g.zo.button(i||(i=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n  border-radius: 50%;\n  border: none;\n  &:hover {\n    border: 1px solid #f84119;\n    background: transparent;\n    fill: #ffc226;\n  }\n"]))),v=r(184),m=function(n){var e=n.handleSubmit;return(0,v.jsxs)(f,{onSubmit:e,children:[(0,v.jsx)(x,{type:"submit",children:(0,v.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",children:(0,v.jsx)("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"white",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,v.jsx)(h,{name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"})]})},b=r(9462),y=g.zo.section(o||(o=(0,p.Z)(["\n  padding-top: 16px;\n\n  @media (min-width: 768px) {\n    padding-top: 36px;\n  }\n  @media (min-width: 1280px) {\n    padding-top: 48px;\n  }\n"]))),k=r(2791),w=r(9323),j=r(1087),P=r(1413),Z=r(5987),L=r(1694),N=r.n(L),C=r(162),M=r(1691),z=["active","disabled","className","style","activeLabel","children","linkStyle","linkClassName"],T=["children"],q=k.forwardRef((function(n,e){var r=n.active,a=void 0!==r&&r,t=n.disabled,i=void 0!==t&&t,o=n.className,s=n.style,c=n.activeLabel,l=void 0===c?"(current)":c,d=n.children,u=n.linkStyle,p=n.linkClassName,g=(0,Z.Z)(n,z),f=a||i?"span":M.Z;return(0,v.jsx)("li",{ref:e,style:s,className:N()(o,"page-item",{active:a,disabled:i}),children:(0,v.jsxs)(f,(0,P.Z)((0,P.Z)({className:N()("page-link",p),style:u},g),{},{children:[d,a&&l&&(0,v.jsx)("span",{className:"visually-hidden",children:l})]}))})}));q.displayName="PageItem";var S=q;function F(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,a=k.forwardRef((function(n,a){var t=n.children,i=(0,Z.Z)(n,T);return(0,v.jsxs)(q,(0,P.Z)((0,P.Z)({},i),{},{ref:a,children:[(0,v.jsx)("span",{"aria-hidden":"true",children:t||e}),(0,v.jsx)("span",{className:"visually-hidden",children:r})]}))}));return a.displayName=n,a}var R=F("First","\xab"),_=F("Prev","\u2039","Previous"),B=F("Ellipsis","\u2026","More"),E=F("Next","\u203a"),I=F("Last","\xbb"),A=["bsPrefix","className","size"],D=k.forwardRef((function(n,e){var r=n.bsPrefix,a=n.className,t=n.size,i=(0,Z.Z)(n,A),o=(0,C.vE)(r,"pagination");return(0,v.jsx)("ul",(0,P.Z)((0,P.Z)({ref:e},i),{},{className:N()(a,o,t&&"".concat(o,"-").concat(t))}))}));D.displayName="Pagination";var O,G,H,J,K=Object.assign(D,{First:R,Prev:_,Ellipsis:B,Item:S,Next:E,Last:I}),Q=(0,g.zo)(K)(O||(O=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n"]))),U=(0,g.zo)(K.Item)(G||(G=(0,p.Z)(["\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 30px;\n    height: 30px;\n\n    background-position: center;\n    background-repeat: no-repeat;\n    background-color: transparent;\n\n    border: 1px solid #595959;\n    border-radius: 50%;\n\n    color: orange;\n    &:hover {\n      transform: scale(1.1) translateZ(0);\n      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n      box-shadow: 0 0 20px var(--orange);\n      background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n      color: white;\n    }\n  }\n  span {\n    border-top-left-radius: none;\n    border-bottom-left-radius: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 30px;\n    height: 30px;\n\n    background-position: center;\n    background-repeat: no-repeat;\n    background-color: transparent;\n\n    border: 1px solid #595959;\n    border-radius: 50%;\n\n    box-shadow: 0 0 20px var(--orange);\n    background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n    color: white;\n  }\n"]))),V=(0,g.zo)(K.Next)(H||(H=(0,p.Z)(["\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 30px;\n    height: 30px;\n    background-color: transparent;\n    border: none;\n    color: orange;\n    &:hover {\n      transform: scale(1.1) translateZ(0);\n      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n      box-shadow: 0 0 20px var(--orange);\n      background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n      color: white;\n    }\n    &:focus {\n      background-color: transparent;\n      color: orange;\n    }\n  }\n"]))),W=(0,g.zo)(K.Prev)(J||(J=(0,p.Z)(["\n  a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 30px;\n    height: 30px;\n    background-color: transparent;\n    border: none;\n    color: orange;\n    &:hover {\n      transform: scale(1.1) translateZ(0);\n      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n      box-shadow: 0 0 20px var(--orange);\n      background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);\n      color: white;\n    }\n    &:focus {\n      background-color: transparent;\n      color: orange;\n    }\n  }\n"]))),X=function(n){var e=n.totalPages,r=n.currentPage,a=n.onChangePage,t=n.setSearchParams,i=n.query,o=[];if(r>1&&o.push((0,v.jsx)(W,{onClick:function(){a(r-1),i&&t({query:i,page:r-1}),i||t({page:r-1})}},"prev")),1===r)for(var s=function(n){o.push((0,v.jsx)(U,{"data-page":n,active:n===r,onClick:function(){a(n),i&&t({query:i,page:n}),i||t({page:n})},children:n},n))},c=r;c<=r+4;c++)s(c);if(2===r)for(var l=function(n){o.push((0,v.jsx)(U,{"data-page":n,active:n===r,onClick:function(){a(n),i&&t({query:i,page:n}),i||t({page:n})},children:n},n))},d=r-1;d<=r+3;d++)l(d);if(r>=3&&r<e-2)for(var u=function(n){o.push((0,v.jsx)(U,{"data-page":n,active:n===r,onClick:function(){a(n),i&&t({query:i,page:n}),i||t({page:n})},children:n},n))},p=r-2;p<=r+2;p++)u(p);if(r===e-2)for(var g=function(n){o.push((0,v.jsx)(U,{"data-page":n,active:n===r,onClick:function(){a(n),i&&t({query:i,page:n}),i||t({page:n})},children:n},n))},f=r-3;f<=r+1;f++)g(f);if(r===e-1)for(var h=function(n){o.push((0,v.jsx)(U,{"data-page":n,active:n===r,onClick:function(){a(n),i&&t({query:i,page:n}),i||t({page:n})},children:n},n))},x=r-4;x<=r;x++)h(x);return r<e&&o.push((0,v.jsx)(V,{onClick:function(){a(r+1),i&&t({query:i,page:r+1}),i||t({page:r+1})}},"next")),(0,v.jsx)(Q,{children:o})},Y=r(8983),$=function(n){var e=n.weeklyTrendingMovies,r=n.addToLibrary,a=n.removeFromLibrary,t=n.favoriteMovies,i=n.totalPages,o=n.currentPage,s=n.onChangePage,p=n.setTotalMoviesByNamePagesAmount,g=n.isTrendingMoviesLoading,f=(0,k.useState)(!1),h=(0,d.Z)(f,2),x=h[0],P=h[1],Z=(0,k.useState)(null),L=(0,d.Z)(Z,2),N=L[0],C=L[1],M=(0,k.useState)([]),z=(0,d.Z)(M,2),T=z[0],q=z[1],S=(0,j.lr)(),F=(0,d.Z)(S,2),R=F[0],_=F[1];(0,k.useEffect)((function(){var n=R.get("query");if(C(n),n){var e=function(){var e=(0,l.Z)((0,c.Z)().mark((function e(){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,P(!0),e.next=4,(0,w.IR)(n,o);case 4:r=e.sent,p(r.total_pages),q(r.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:return e.prev=12,P(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[o,R,p]);return(0,v.jsx)(y,{children:(0,v.jsxs)(b.pR,{children:[(0,v.jsx)(m,{handleSubmit:function(n){n.preventDefault();var e=n.target.query.value.toLowerCase().trim();e?(s(1),_({query:e,page:1})):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441")}}),x||g?(0,v.jsx)(Y.a,{}):(0,v.jsx)(b.th,{children:T.length?T.map((function(n){return(0,v.jsx)(u.i,{movie:n,addToLibrary:r,removeFromLibrary:a,favoriteMovies:t},n.id)})):e.map((function(n){return(0,v.jsx)(u.i,{movie:n,addToLibrary:r,removeFromLibrary:a,favoriteMovies:t},n.id)}))}),i>1&&(0,v.jsx)(X,{totalPages:i,currentPage:o,onChangePage:s,setSearchParams:_,query:N})]})})},nn=function(n){var e=n.weeklyTrendingMovies,r=n.addToLibrary,a=n.removeFromLibrary,t=n.favoriteMovies,i=n.totalPages,o=n.currentPage,c=n.onChangePage,l=n.setTotalMoviesByNamePagesAmount,d=n.isTrendingMoviesLoading;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s.default,{addToLibrary:r,removeFromLibrary:a,favoriteMovies:t}),(0,v.jsx)($,{weeklyTrendingMovies:e,addToLibrary:r,removeFromLibrary:a,favoriteMovies:t,totalPages:i,currentPage:o,onChangePage:c,setTotalMoviesByNamePagesAmount:l,isTrendingMoviesLoading:d})]})}}}]);
//# sourceMappingURL=359.f3a7af6b.chunk.js.map