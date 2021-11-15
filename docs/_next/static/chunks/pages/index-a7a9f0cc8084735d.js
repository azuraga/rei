(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3321:function(e,o,t){"use strict";t.d(o,{Z:function(){return w}});var a=t(1048),i=t(2793),n=t(7294),r=(t(5697),t(6010)),l=t(7463),s=t(1796),d=t(1496),c=t(7623),p=t(6054),u=t(8216),h=t(1420);function m(e){return(0,h.Z)("MuiButton",e)}var b=(0,t(1271).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var x=n.createContext({}),v=t(5893);const f=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],g=e=>(0,i.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],o[`${t.variant}${(0,u.Z)(t.color)}`],o[`size${(0,u.Z)(t.size)}`],o[`${t.variant}Size${(0,u.Z)(t.size)}`],"inherit"===t.color&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})((({theme:e,ownerState:o})=>(0,i.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:(0,s.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:(0,s.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:`1px solid ${e.palette[o.color].main}`,backgroundColor:(0,s.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:e.palette[o.color].dark,"@media (hover: none)":{backgroundColor:e.palette[o.color].main}}),"&:active":(0,i.Z)({},"contained"===o.variant&&{boxShadow:e.shadows[8]}),[`&.${b.focusVisible}`]:(0,i.Z)({},"contained"===o.variant&&{boxShadow:e.shadows[6]}),[`&.${b.disabled}`]:(0,i.Z)({color:e.palette.action.disabled},"outlined"===o.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===o.variant&&"secondary"===o.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===o.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:e.palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===o.variant&&"inherit"!==o.color&&{color:e.palette[o.color].main,border:`1px solid ${(0,s.Fq)(e.palette[o.color].main,.5)}`},"contained"===o.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:e.palette[o.color].contrastText,backgroundColor:e.palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}})),z=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.startIcon,o[`iconSize${(0,u.Z)(t.size)}`]]}})((({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},g(e)))),y=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.endIcon,o[`iconSize${(0,u.Z)(t.size)}`]]}})((({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},g(e))));var w=n.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiButton"}),{className:s,color:d,disabled:p,disableElevation:h,disableFocusRipple:b,disableRipple:g,fullWidth:w,size:Z,variant:_}=n.useContext(x),{children:R,className:I,color:C,component:k="button",disabled:$,disableElevation:N,disableFocusRipple:B,disableRipple:E,endIcon:j,focusVisibleClassName:F,fullWidth:W,size:M,startIcon:T,type:L,variant:P}=t,O=(0,a.Z)(t,f),V=C||d||"primary",G=$||p||!1,q=N||h||!1,D=B||b||!1,J=W||w||!1,A=M||Z||"medium",H=P||_||"text",X=E||g||!1,K=(0,i.Z)({},t,{color:V,component:k,disabled:G,disableElevation:q,disableFocusRipple:D,fullWidth:J,size:A,type:L,variant:H}),Q=(e=>{const{color:o,disableElevation:t,fullWidth:a,size:n,variant:r,classes:s}=e,d={root:["root",r,`${r}${(0,u.Z)(o)}`,`size${(0,u.Z)(n)}`,`${r}Size${(0,u.Z)(n)}`,"inherit"===o&&"colorInherit",t&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,u.Z)(n)}`],endIcon:["endIcon",`iconSize${(0,u.Z)(n)}`]},c=(0,l.Z)(d,m,s);return(0,i.Z)({},s,c)})(K),U=T&&(0,v.jsx)(z,{className:Q.startIcon,ownerState:K,children:T}),Y=j&&(0,v.jsx)(y,{className:Q.endIcon,ownerState:K,children:j});return(0,v.jsxs)(S,(0,i.Z)({ownerState:K,className:(0,r.Z)(I,s),component:k,disabled:G,disableRipple:X,focusRipple:!D,focusVisibleClassName:(0,r.Z)(Q.focusVisible,F),ref:o,type:L},O,{classes:Q,children:[U,R,Y]}))}))},5301:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6727)}])},6727:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return b}});var a=t(5893),i=t(9008),n=t(8174),r=t.n(n),l=t(8083),s=t.n(l),d=t(3321),c=t(7294),p=t(1163),u=t(9920);function h(e){var o=e.href,t=(0,c.useState)(!1),i=t[0],n=t[1],r=(0,p.useRouter)(),l=(0,u.useSpring)({rotateZ:i?500:0,scale:i?5:1,opacity:i?0:1,config:u.config.default,onRest:function(){i&&r.push(o)}});return(0,a.jsx)(u.animated.div,{style:l,children:(0,a.jsx)(d.Z,{className:s().button,onClick:function(){return n(!0)},children:(0,a.jsx)("img",{className:s().image,alt:"next"})})})}var m=t(5861),b=function(){var e=(0,u.useSpring)({loop:!0,to:[{opacity:1,color:"#1D1D1B",scale:1},{opacity:0,color:"#FEF7B6",scale:.9}],from:{opacity:0,color:"#FEF7B6",scale:.9},reverse:!0,config:{duration:1e3},delay:1e3});return(0,a.jsxs)("div",{className:r().container,children:[(0,a.jsxs)(i.default,{children:[(0,a.jsx)("title",{children:"Tadano Rei Birthday Project"}),(0,a.jsx)("meta",{name:"description",content:"Happy birthday!"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("main",{className:r().main,children:[(0,a.jsx)(h,{href:"/happy-anniv"}),(0,a.jsx)(u.animated.div,{style:e,children:(0,a.jsx)(m.Z,{variant:"h5",className:r().text,children:"Let's open!"})})]})]})}},8083:function(e){e.exports={button:"GiftButton_button__3AWJ8",image:"GiftButton_image__3HJvu","zoom-in":"GiftButton_zoom-in__2JW57","zoom-out":"GiftButton_zoom-out__18LOu","filter-change":"GiftButton_filter-change__2yBzM"}},8174:function(e){e.exports={main:"Splash_main__1IzN5",text:"Splash_text__NIIx1"}}},function(e){e.O(0,[774,601,920,888,179],(function(){return o=5301,e(e.s=o);var o}));var o=e.O();_N_E=o}]);