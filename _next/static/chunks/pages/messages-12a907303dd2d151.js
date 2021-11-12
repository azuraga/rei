(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[313],{8862:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var o=n(1048),r=n(2793),a=n(7294),i=(n(5697),n(6010)),s=n(4695),u=n(916),l=n(8430),c=n(8528);const d=["sx"];function m(e){const{sx:t}=e,n=(0,u.Z)(e,d),{systemProps:o,otherProps:r}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((n=>{c.G[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t})(n);let a;return a=Array.isArray(t)?[o,...t]:"function"===typeof t?(...e)=>{const n=t(...e);return(0,l.P)(n)?(0,s.Z)({},o,n):o}:(0,s.Z)({},o,t),(0,s.Z)({},r,{sx:a})}var p=n(7463),h=n(7229),f=n(7623),g=n(8216),v=n(6843);function x(e){return(0,v.Z)("MuiTypography",e)}(0,n(1271).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var y=n(5893);const Z=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],b=(0,h.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,g.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),_={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},j={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var N=a.forwardRef((function(e,t){const n=(0,f.Z)({props:e,name:"MuiTypography"}),a=(e=>j[e]||e)(n.color),s=m((0,r.Z)({},n,{color:a})),{align:u="inherit",className:l,component:c,gutterBottom:d=!1,noWrap:h=!1,paragraph:v=!1,variant:N="body1",variantMapping:w=_}=s,C=(0,o.Z)(s,Z),M=(0,r.Z)({},s,{align:u,color:a,className:l,component:c,gutterBottom:d,noWrap:h,paragraph:v,variant:N,variantMapping:w}),E=c||(v?"p":w[N]||_[N])||"span",R=(e=>{const{align:t,gutterBottom:n,noWrap:o,paragraph:r,variant:a,classes:i}=e,s={root:["root",a,"inherit"!==e.align&&`align${(0,g.Z)(t)}`,n&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return(0,p.Z)(s,x,i)})(M);return(0,y.jsx)(b,(0,r.Z)({as:E,ref:t,ownerState:M,className:(0,i.Z)(R.root,l)},C))}))},156:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/messages",function(){return n(801)}])},1521:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(5893),r=n(7737),a=n.n(r),i=n(9615),s=n(6067),u=n(3244),l=n(7294),c=n(1163);function d(e){var t=e.href,n=(0,l.useState)(!1),r=n[0],d=n[1],m=(0,c.useRouter)();return(0,o.jsx)(i.Z,{direction:"up",in:!r,timeout:1e3,onExited:function(){r&&m.push(t)},easing:{enter:s.Ui.easeInOut,exit:s.Ui.easeInOut},children:(0,o.jsx)(u.Z,{className:a().button,onClick:function(){return d(!0)},children:(0,o.jsx)("img",{className:a().image,alt:"next"})})})}},801:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ie}});var o=n(5893),r=n(9008),a=n(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s=n(7463),u=n(7229),l=n(7623),c=n(5408),d=n(8700),m=n(8430),p=n(4943),h=n(6010),f=(n(5697),n(6843)),g=n(1271);function v(e){return(0,f.Z)("MuiMasonry",e)}(0,g.Z)("MuiMasonry",["root"]);const x=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],y=e=>Number(e.replace("px","")),Z=(0,u.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const o={};if(e.isSSR){const r={},a=Number(t.spacing(e.defaultSpacing).replace("px",""));for(let t=1;t<=e.defaultColumns;t+=1)r[`&:nth-of-type(${e.defaultColumns}n+${t%e.defaultColumns})`]={order:t};return o.height=e.defaultHeight,o.margin=-a/2,o["& > *"]=i({},n["& > *"],r,{margin:a/2,width:`calc(${(100/e.defaultColumns).toFixed(2)}% - ${a}px)`}),i({},n,o)}const r=(0,c.P$)({values:e.spacing,breakpoints:t.breakpoints.values}),a=(0,d.hB)(t);n=(0,m.Z)(n,(0,c.k9)({theme:t},r,(t=>{const n=Number(t),o=Number((0,d.NA)(a,n).replace("px",""));return i({margin:-o/2,"& > *":{margin:o/2}},e.maxColumnHeight&&{height:Math.ceil(e.maxColumnHeight+o)})})));const s=(0,c.P$)({values:e.columns,breakpoints:t.breakpoints.values});return n=(0,m.Z)(n,(0,c.k9)({theme:t},s,(e=>({"& > *":{width:`calc(${`${(100/Number(e)).toFixed(2)}%`} - ${"object"!==typeof r?(0,d.NA)(a,Number(r)):"0px"})`}})))),"object"===typeof r&&(n=(0,m.Z)(n,(0,c.k9)({theme:t},r,((e,t)=>{if(t){const n=Number(e),o=Object.keys(s).pop(),r=(0,d.NA)(a,n);return{"& > *":{width:`calc(${`${(100/("object"===typeof s?s[t]||s[o]:s)).toFixed(2)}%`} - ${r})`}}}return null})))),n}));var b=a.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiMasonry"}),{children:r,className:u,component:c="div",columns:d=4,spacing:m=1,defaultColumns:f,defaultHeight:g,defaultSpacing:b}=n,_=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(n,x),j=a.useRef(),[N,w]=a.useState(),C=!N&&g&&void 0!==f&&void 0!==b,[M,E]=a.useState(C?f-1:0),R=i({},n,{spacing:m,columns:d,maxColumnHeight:N,defaultColumns:f,defaultHeight:g,defaultSpacing:b,isSSR:C}),S=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},v,t)})(R);a.useEffect((()=>{if("undefined"===typeof ResizeObserver)return;const e=new ResizeObserver((()=>{const e=j.current.clientWidth,t=j.current.firstChild.clientWidth,n=window.getComputedStyle(j.current.firstChild),o=y(n.marginLeft),r=y(n.marginRight);if(0===e||0===t)return;const a=Math.round(e/(t+o+r)),i=new Array(a).fill(0);let s=!1;if(j.current.childNodes.forEach((e=>{if(e.nodeType!==Node.ELEMENT_NODE||"line-break"===e.dataset.class||s)return;const t=window.getComputedStyle(e),n=y(t.marginTop),o=y(t.marginBottom),r=y(t.height)?Math.ceil(y(t.height))+n+o:0;if(0!==r){for(let t=0;t<e.childNodes.length;t+=1){const n=e.childNodes[t];if("IMG"===n.tagName&&0===n.clientHeight){s=!0;break}}if(!s){const t=i.indexOf(Math.min(...i));i[t]+=r;const n=t+1;e.style.order=n}}else s=!0})),!s){w(Math.max(...i));E(a>0?a-1:0)}})),t=j.current;return t&&(e.observe(t),t.firstChild&&e.observe(t.firstChild)),()=>{e.disconnect()}}),[d,m,r]);const P=(0,p.Z)(t,j),k={flexBasis:"100%",width:0,margin:0,padding:0},B=new Array(M).fill("").map(((e,t)=>(0,o.jsx)("span",{"data-class":"line-break",style:i({},k,{order:t+1})},t)));return(0,o.jsxs)(Z,i({as:c,className:(0,h.Z)(S.root,u),ref:P,ownerState:R},_,{children:[r,B]}))})),_=n(2793),j=n(1048),N=n(8885),w=n(2734),C=n(577),M=n(1705);const E=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function R(e){return`scale(${e}, ${e**2})`}const S={entering:{opacity:1,transform:R(1)},entered:{opacity:1,transform:"none"}},P=a.forwardRef((function(e,t){const{addEndListener:n,appear:r=!0,children:i,easing:s,in:u,onEnter:l,onEntered:c,onEntering:d,onExit:m,onExited:p,onExiting:h,style:f,timeout:g="auto",TransitionComponent:v=N.ZP}=e,x=(0,j.Z)(e,E),y=a.useRef(),Z=a.useRef(),b=(0,w.Z)(),P=a.useRef(null),k=(0,M.Z)(i.ref,t),B=(0,M.Z)(P,k),$=e=>t=>{if(e){const n=P.current;void 0===t?e(n):e(n,t)}},H=$(d),O=$(((e,t)=>{(0,C.n)(e);const{duration:n,delay:o,easing:r}=(0,C.C)({style:f,timeout:g,easing:s},{mode:"enter"});let a;"auto"===g?(a=b.transitions.getAutoHeightDuration(e.clientHeight),Z.current=a):a=n,e.style.transition=[b.transitions.create("opacity",{duration:a,delay:o}),b.transitions.create("transform",{duration:.666*a,delay:o,easing:r})].join(","),l&&l(e,t)})),T=$(c),F=$(h),q=$((e=>{const{duration:t,delay:n,easing:o}=(0,C.C)({style:f,timeout:g,easing:s},{mode:"exit"});let r;"auto"===g?(r=b.transitions.getAutoHeightDuration(e.clientHeight),Z.current=r):r=t,e.style.transition=[b.transitions.create("opacity",{duration:r,delay:n}),b.transitions.create("transform",{duration:.666*r,delay:n||.333*r,easing:o})].join(","),e.style.opacity="0",e.style.transform=R(.75),m&&m(e)})),A=$(p);return a.useEffect((()=>()=>{clearTimeout(y.current)}),[]),(0,o.jsx)(v,(0,_.Z)({appear:r,in:u,nodeRef:P,onEnter:O,onEntered:T,onEntering:H,onExit:q,onExited:A,onExiting:F,addEndListener:e=>{"auto"===g&&(y.current=setTimeout(e,Z.current||0)),n&&n(P.current,e)},timeout:"auto"===g?null:g},x,{children:(e,t)=>a.cloneElement(i,(0,_.Z)({style:(0,_.Z)({opacity:0,transform:R(.75),visibility:"exited"!==e||u?void 0:"hidden"},S[e],f,i.props.style),ref:B},t))}))}));P.muiSupportAuto=!0;var k=P,B=n(4889),$=n.n(B);function H(e){var t=e.messages;return(0,o.jsx)(b,{columns:3,spacing:3,className:$().board,children:t.map((function(e,t){return(0,o.jsx)(k,{in:!0,style:{transformOrigin:"0 0 0"},timeout:900*(t+1),children:(0,o.jsx)("div",{style:{background:"black"},children:e})},t)}))})}var O=n(1796);function T(e){return(0,f.Z)("MuiPaper",e)}(0,g.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const F=["className","component","elevation","square","variant"],q=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},A=(0,u.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>(0,_.Z)({backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${e.palette.divider}`},"elevation"===t.variant&&(0,_.Z)({boxShadow:e.shadows[t.elevation]},"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,O.Fq)("#fff",q(t.elevation))}, ${(0,O.Fq)("#fff",q(t.elevation))})`}))));var W=a.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiPaper"}),{className:r,component:a="div",elevation:i=1,square:u=!1,variant:c="elevation"}=n,d=(0,j.Z)(n,F),m=(0,_.Z)({},n,{component:a,elevation:i,square:u,variant:c}),p=(e=>{const{square:t,elevation:n,variant:o,classes:r}=e,a={root:["root",o,!t&&"rounded","elevation"===o&&`elevation${n}`]};return(0,s.Z)(a,T,r)})(m);return(0,o.jsx)(A,(0,_.Z)({as:a,ownerState:m,className:(0,h.Z)(p.root,r),ref:t},d))}));function z(e){return(0,f.Z)("MuiCard",e)}(0,g.Z)("MuiCard",["root"]);const L=["className","raised"],D=(0,u.ZP)(W,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var G=a.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiCard"}),{className:r,raised:a=!1}=n,i=(0,j.Z)(n,L),u=(0,_.Z)({},n,{raised:a}),c=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},z,t)})(u);return(0,o.jsx)(D,(0,_.Z)({className:(0,h.Z)(c.root,r),elevation:a?8:void 0,ref:t,ownerState:u},i))}));function I(e){return(0,f.Z)("MuiCardContent",e)}(0,g.Z)("MuiCardContent",["root"]);const U=["className","component"],X=(0,u.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var J=a.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiCardContent"}),{className:r,component:a="div"}=n,i=(0,j.Z)(n,U),u=(0,_.Z)({},n,{component:a}),c=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},I,t)})(u);return(0,o.jsx)(X,(0,_.Z)({as:a,className:(0,h.Z)(c.root,r),ownerState:u,ref:t},i))})),V=n(8862),Q=["#B0006A","#FF62BF","#FF099D","#DC0084","#FB7099"];function Y(){return Q[(e=0,t=Q.length,Math.floor(Math.random()*(t-e))+e)];var e,t}function K(e){var t=e.author,n=e.content;return(0,o.jsx)(G,{className:$().card,sx:{background:Y()},children:(0,o.jsxs)(J,{children:[(0,o.jsx)(V.Z,{className:$().content,children:n}),(0,o.jsx)(V.Z,{className:$().author,children:t})]})})}var ee=n(1521),te=n(3050),ne=n.n(te);function oe(){return(0,o.jsx)("footer",{className:ne().footer,children:(0,o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("img",{className:ne().logo,src:"/logo.png",alt:"Tadano Rei Birthday Project"})})})}var re=n(19),ae=n.n(re),ie=function(){var e=[(0,o.jsx)(K,{author:"The mouse of the evening watches",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},1),(0,o.jsx)(K,{author:"mouse",content:"\u304a\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\uff01\uff01"},1),(0,o.jsx)(K,{author:"mouse",content:"\u304a\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\uff01\uff01"},2),(0,o.jsx)(K,{author:"mouse",content:"\u304a\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\uff01\uff01"},3),(0,o.jsx)(K,{author:"mouse",content:"\u304a\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\uff01\uff01"},5),(0,o.jsx)(K,{author:"mouse",content:"\u304a\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\uff01\uff01"},4),(0,o.jsx)(K,{author:"mouse",content:"\u304a\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\uff01\uff01"},6),(0,o.jsx)(K,{author:"mouse",content:"\u304a\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\uff01\uff01"},7),(0,o.jsx)(K,{author:"mouse",content:"\u304a\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\uff01\uff01"},8),(0,o.jsx)(K,{author:"mouse",content:"\u304a\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\uff01\uff01"},9)];return(0,o.jsxs)("div",{className:ae().container,children:[(0,o.jsxs)(r.default,{children:[(0,o.jsx)("title",{children:"Tadano Rei Birthday Project"}),(0,o.jsx)("meta",{name:"description",content:"Happy birthday!"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"MessagePageHeader.svg",alt:"\u7686\u306e\u30e1\u30c3\u30bb\u30fc\u30b8"})}),(0,o.jsxs)("main",{className:ae().main,children:[(0,o.jsx)(H,{messages:e}),(0,o.jsx)(ee.Z,{href:"/"})]}),(0,o.jsx)(oe,{})]})}},7737:function(e){e.exports={button:"Button_button__3-u4P",image:"Button_image__2YXjf","zoom-in":"Button_zoom-in__2LAjD","zoom-out":"Button_zoom-out__3icFj","filter-change":"Button_filter-change__1qV1f"}},3050:function(e){e.exports={footer:"Footer_footer__1Njt-",logo:"Footer_logo___A_ll"}},4889:function(e){e.exports={card:"MessageCard_card__26rQZ",content:"MessageCard_content__SZ6JR",author:"MessageCard_author__6_pPT",board:"MessageCard_board__3150n"}},19:function(e){e.exports={container:"Home_container__3sao-",main:"Home_main__1Z1aG",logo:"Home_logo__3GqVp"}}},function(e){e.O(0,[774,223,888,179],(function(){return t=156,e(e.s=t);var t}));var t=e.O();_N_E=t}]);