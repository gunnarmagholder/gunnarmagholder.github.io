import{a as H,r as w,R as et}from"./index.f6283c0d.js";import{w as Oe,b as Re,_ as $,m as K,s as i,g as D,h as j,j as B,v as tt,k as Ee,l as rt,r as ot,d as V,e as ne,n as nt,a as st,c as it}from"./createTheme.a5a3adff.js";function _e(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var at=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,lt=_e(function(e){return at.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),$e={exports:{}},f={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=typeof Symbol=="function"&&Symbol.for,le=g?Symbol.for("react.element"):60103,ce=g?Symbol.for("react.portal"):60106,U=g?Symbol.for("react.fragment"):60107,q=g?Symbol.for("react.strict_mode"):60108,X=g?Symbol.for("react.profiler"):60114,Y=g?Symbol.for("react.provider"):60109,Z=g?Symbol.for("react.context"):60110,ue=g?Symbol.for("react.async_mode"):60111,J=g?Symbol.for("react.concurrent_mode"):60111,Q=g?Symbol.for("react.forward_ref"):60112,ee=g?Symbol.for("react.suspense"):60113,ct=g?Symbol.for("react.suspense_list"):60120,te=g?Symbol.for("react.memo"):60115,re=g?Symbol.for("react.lazy"):60116,ut=g?Symbol.for("react.block"):60121,ft=g?Symbol.for("react.fundamental"):60117,pt=g?Symbol.for("react.responder"):60118,dt=g?Symbol.for("react.scope"):60119;function C(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case le:switch(e=e.type,e){case ue:case J:case U:case X:case q:case ee:return e;default:switch(e=e&&e.$$typeof,e){case Z:case Q:case re:case te:case Y:return e;default:return t}}case ce:return t}}}function Ae(e){return C(e)===J}f.AsyncMode=ue;f.ConcurrentMode=J;f.ContextConsumer=Z;f.ContextProvider=Y;f.Element=le;f.ForwardRef=Q;f.Fragment=U;f.Lazy=re;f.Memo=te;f.Portal=ce;f.Profiler=X;f.StrictMode=q;f.Suspense=ee;f.isAsyncMode=function(e){return Ae(e)||C(e)===ue};f.isConcurrentMode=Ae;f.isContextConsumer=function(e){return C(e)===Z};f.isContextProvider=function(e){return C(e)===Y};f.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===le};f.isForwardRef=function(e){return C(e)===Q};f.isFragment=function(e){return C(e)===U};f.isLazy=function(e){return C(e)===re};f.isMemo=function(e){return C(e)===te};f.isPortal=function(e){return C(e)===ce};f.isProfiler=function(e){return C(e)===X};f.isStrictMode=function(e){return C(e)===q};f.isSuspense=function(e){return C(e)===ee};f.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===U||e===J||e===X||e===q||e===ee||e===ct||typeof e=="object"&&e!==null&&(e.$$typeof===re||e.$$typeof===te||e.$$typeof===Y||e.$$typeof===Z||e.$$typeof===Q||e.$$typeof===ft||e.$$typeof===pt||e.$$typeof===dt||e.$$typeof===ut)};f.typeOf=C;$e.exports=f;var Fe=$e.exports,mt={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ht={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},je={};je[Fe.ForwardRef]=mt;je[Fe.Memo]=ht;var yt=!0;function gt(e,t,r){var o="";return r.split(" ").forEach(function(n){e[n]!==void 0?t.push(e[n]+";"):o+=n+" "}),o}var Me=function(t,r,o){var n=t.key+"-"+r.name;(o===!1||yt===!1)&&t.registered[n]===void 0&&(t.registered[n]=r.styles)},Ie=function(t,r,o){Me(t,r,o);var n=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var s=r;do t.insert(r===s?"."+n:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function bt(e){for(var t=0,r,o=0,n=e.length;n>=4;++o,n-=4)r=e.charCodeAt(o)&255|(e.charCodeAt(++o)&255)<<8|(e.charCodeAt(++o)&255)<<16|(e.charCodeAt(++o)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(n){case 3:t^=(e.charCodeAt(o+2)&255)<<16;case 2:t^=(e.charCodeAt(o+1)&255)<<8;case 1:t^=e.charCodeAt(o)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var vt={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xt=/[A-Z]|^ms/g,St=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ze=function(t){return t.charCodeAt(1)===45},ge=function(t){return t!=null&&typeof t!="boolean"},se=_e(function(e){return ze(e)?e:e.replace(xt,"-$&").toLowerCase()}),be=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(St,function(o,n,s){return T={name:n,styles:s,next:T},n})}return vt[t]!==1&&!ze(t)&&typeof r=="number"&&r!==0?r+"px":r};function L(e,t,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return T={name:r.name,styles:r.styles,next:T},r.name;if(r.styles!==void 0){var o=r.next;if(o!==void 0)for(;o!==void 0;)T={name:o.name,styles:o.styles,next:T},o=o.next;var n=r.styles+";";return n}return wt(e,t,r)}case"function":{if(e!==void 0){var s=T,a=r(e);return T=s,L(e,t,a)}break}}if(t==null)return r;var l=t[r];return l!==void 0?l:r}function wt(e,t,r){var o="";if(Array.isArray(r))for(var n=0;n<r.length;n++)o+=L(e,t,r[n])+";";else for(var s in r){var a=r[s];if(typeof a!="object")t!=null&&t[a]!==void 0?o+=s+"{"+t[a]+"}":ge(a)&&(o+=se(s)+":"+be(s,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)ge(a[l])&&(o+=se(s)+":"+be(s,a[l])+";");else{var c=L(e,t,a);switch(s){case"animation":case"animationName":{o+=se(s)+":"+c+";";break}default:o+=s+"{"+c+"}"}}}return o}var ve=/label:\s*([^\s;\n{]+)\s*(;|$)/g,T,fe=function(t,r,o){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var n=!0,s="";T=void 0;var a=t[0];a==null||a.raw===void 0?(n=!1,s+=L(o,r,a)):s+=a[0];for(var l=1;l<t.length;l++)s+=L(o,r,t[l]),n&&(s+=a[l]);ve.lastIndex=0;for(var c="",d;(d=ve.exec(s))!==null;)c+="-"+d[1];var b=bt(s)+c;return{name:b,styles:s,next:T}},xe=H["useInsertionEffect"]?H["useInsertionEffect"]:w.exports.useLayoutEffect,Co=Oe(function(e,t){var r=e.styles,o=fe([r],void 0,w.exports.useContext(Re)),n=w.exports.useRef();return xe(function(){var s=t.key+"-global",a=new t.sheet.constructor({key:s,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),l=!1,c=document.querySelector('style[data-emotion="'+s+" "+o.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),c!==null&&(l=!0,c.setAttribute("data-emotion",s),a.hydrate([c])),n.current=[a,l],function(){a.flush()}},[t]),xe(function(){var s=n.current,a=s[0],l=s[1];if(l){s[1]=!1;return}if(o.next!==void 0&&Ie(t,o.next,!0),a.tags.length){var c=a.tags[a.tags.length-1].nextElementSibling;a.before=c,a.flush()}t.insert("",o,a,!1)},[t,o.name]),null});function Ct(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return fe(t)}var Po=function(){var t=Ct.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Pt=lt,kt=function(t){return t!=="theme"},Se=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Pt:kt},we=function(t,r,o){var n;if(r){var s=r.shouldForwardProp;n=t.__emotion_forwardProp&&s?function(a){return t.__emotion_forwardProp(a)&&s(a)}:s}return typeof n!="function"&&o&&(n=t.__emotion_forwardProp),n},Tt=H["useInsertionEffect"]?H["useInsertionEffect"]:function(t){t()};function Ot(e){Tt(e)}var Rt=function(t){var r=t.cache,o=t.serialized,n=t.isStringTag;return Me(r,o,n),Ot(function(){return Ie(r,o,n)}),null},Et=function e(t,r){var o=t.__emotion_real===t,n=o&&t.__emotion_base||t,s,a;r!==void 0&&(s=r.label,a=r.target);var l=we(t,r,o),c=l||Se(n),d=!c("as");return function(){var b=arguments,h=o&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(s!==void 0&&h.push("label:"+s+";"),b[0]==null||b[0].raw===void 0)h.push.apply(h,b);else{h.push(b[0][0]);for(var P=b.length,x=1;x<P;x++)h.push(b[x],b[0][x])}var p=Oe(function(m,S,M){var A=d&&m.as||n,v="",F=[],k=m;if(m.theme==null){k={};for(var E in m)k[E]=m[E];k.theme=w.exports.useContext(Re)}typeof m.className=="string"?v=gt(S.registered,F,m.className):m.className!=null&&(v=m.className+" ");var I=fe(h.concat(F),S.registered,k);v+=S.key+"-"+I.name,a!==void 0&&(v+=" "+a);var ye=d&&l===void 0?Se(A):c,u={};for(var y in m)d&&y==="as"||ye(y)&&(u[y]=m[y]);return u.className=v,u.ref=M,w.exports.createElement(w.exports.Fragment,null,w.exports.createElement(Rt,{cache:S,serialized:I,isStringTag:typeof A=="string"}),w.exports.createElement(A,u))});return p.displayName=s!==void 0?s:"Styled("+(typeof n=="string"?n:n.displayName||n.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=n,p.__emotion_styles=h,p.__emotion_forwardProp=l,Object.defineProperty(p,"toString",{value:function(){return"."+a}}),p.withComponent=function(m,S){return e(m,$({},r,S,{shouldForwardProp:we(p,S,!0)})).apply(void 0,h)},p}},_t=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ie=Et.bind();_t.forEach(function(e){ie[e]=ie(e)});var $t=ie;/** @license MUI v5.8.7
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function At(e,t){return $t(e,t)}function Ce(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const Ft=typeof window!="undefined"?w.exports.useLayoutEffect:w.exports.useEffect;var jt=Ft;function ko(e){const t=w.exports.useRef(e);return jt(()=>{t.current=e}),w.exports.useCallback((...r)=>(0,t.current)(...r),[])}function To(e,t){return w.exports.useMemo(()=>e==null&&t==null?null:r=>{Ce(e,r),Ce(t,r)},[e,t])}function Mt(e,t){const r=$({},t);return Object.keys(e).forEach(o=>{r[o]===void 0&&(r[o]=e[o])}),r}function Oo(e,t,r){const o={};return Object.keys(e).forEach(n=>{o[n]=e[n].reduce((s,a)=>(a&&(s.push(t(a)),r&&r[a]&&s.push(r[a])),s),[]).join(" ")}),o}const Pe=e=>e,It=()=>{let e=Pe;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Pe}}},zt=It();var Gt=zt;const Lt={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function Wt(e,t,r="Mui"){const o=Lt[t];return o?`${r}-${o}`:`${Gt.generate(e)}-${t}`}function Ro(e,t,r="Mui"){const o={};return t.forEach(n=>{o[n]=Wt(e,n,r)}),o}function O(...e){const t=e.reduce((o,n)=>(n.filterProps.forEach(s=>{o[s]=n}),o),{}),r=o=>Object.keys(o).reduce((n,s)=>t[s]?K(n,t[s](o)):n,{});return r.propTypes={},r.filterProps=e.reduce((o,n)=>o.concat(n.filterProps),[]),r}function W(e){return typeof e!="number"?e:`${e}px solid`}const Nt=i({prop:"border",themeKey:"borders",transform:W}),Kt=i({prop:"borderTop",themeKey:"borders",transform:W}),Vt=i({prop:"borderRight",themeKey:"borders",transform:W}),Ht=i({prop:"borderBottom",themeKey:"borders",transform:W}),Dt=i({prop:"borderLeft",themeKey:"borders",transform:W}),Bt=i({prop:"borderColor",themeKey:"palette"}),Ut=i({prop:"borderTopColor",themeKey:"palette"}),qt=i({prop:"borderRightColor",themeKey:"palette"}),Xt=i({prop:"borderBottomColor",themeKey:"palette"}),Yt=i({prop:"borderLeftColor",themeKey:"palette"}),pe=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=D(e.theme,"shape.borderRadius",4),r=o=>({borderRadius:B(t,o)});return j(e,e.borderRadius,r)}return null};pe.propTypes={};pe.filterProps=["borderRadius"];const Zt=O(Nt,Kt,Vt,Ht,Dt,Bt,Ut,qt,Xt,Yt,pe);var Ge=Zt;const Jt=i({prop:"displayPrint",cssProperty:!1,transform:e=>({"@media print":{display:e}})}),Qt=i({prop:"display"}),er=i({prop:"overflow"}),tr=i({prop:"textOverflow"}),rr=i({prop:"visibility"}),or=i({prop:"whiteSpace"});var Le=O(Jt,Qt,er,tr,rr,or);const nr=i({prop:"flexBasis"}),sr=i({prop:"flexDirection"}),ir=i({prop:"flexWrap"}),ar=i({prop:"justifyContent"}),lr=i({prop:"alignItems"}),cr=i({prop:"alignContent"}),ur=i({prop:"order"}),fr=i({prop:"flex"}),pr=i({prop:"flexGrow"}),dr=i({prop:"flexShrink"}),mr=i({prop:"alignSelf"}),hr=i({prop:"justifyItems"}),yr=i({prop:"justifySelf"}),gr=O(nr,sr,ir,ar,lr,cr,ur,fr,pr,dr,mr,hr,yr);var We=gr;const de=e=>{if(e.gap!==void 0&&e.gap!==null){const t=D(e.theme,"spacing",8),r=o=>({gap:B(t,o)});return j(e,e.gap,r)}return null};de.propTypes={};de.filterProps=["gap"];const me=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=D(e.theme,"spacing",8),r=o=>({columnGap:B(t,o)});return j(e,e.columnGap,r)}return null};me.propTypes={};me.filterProps=["columnGap"];const he=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=D(e.theme,"spacing",8),r=o=>({rowGap:B(t,o)});return j(e,e.rowGap,r)}return null};he.propTypes={};he.filterProps=["rowGap"];const br=i({prop:"gridColumn"}),vr=i({prop:"gridRow"}),xr=i({prop:"gridAutoFlow"}),Sr=i({prop:"gridAutoColumns"}),wr=i({prop:"gridAutoRows"}),Cr=i({prop:"gridTemplateColumns"}),Pr=i({prop:"gridTemplateRows"}),kr=i({prop:"gridTemplateAreas"}),Tr=i({prop:"gridArea"}),Or=O(de,me,he,br,vr,xr,Sr,wr,Cr,Pr,kr,Tr);var Ne=Or;const Rr=i({prop:"color",themeKey:"palette"}),Er=i({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}),_r=i({prop:"backgroundColor",themeKey:"palette"}),$r=O(Rr,Er,_r);var Ke=$r;const Ar=i({prop:"position"}),Fr=i({prop:"zIndex",themeKey:"zIndex"}),jr=i({prop:"top"}),Mr=i({prop:"right"}),Ir=i({prop:"bottom"}),zr=i({prop:"left"});var Ve=O(Ar,Fr,jr,Mr,Ir,zr);const Gr=i({prop:"boxShadow",themeKey:"shadows"});var He=Gr;function R(e){return e<=1&&e!==0?`${e*100}%`:e}const Lr=i({prop:"width",transform:R}),De=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=r=>{var o,n,s;return{maxWidth:((o=e.theme)==null||(n=o.breakpoints)==null||(s=n.values)==null?void 0:s[r])||tt[r]||R(r)}};return j(e,e.maxWidth,t)}return null};De.filterProps=["maxWidth"];const Wr=i({prop:"minWidth",transform:R}),Nr=i({prop:"height",transform:R}),Kr=i({prop:"maxHeight",transform:R}),Vr=i({prop:"minHeight",transform:R});i({prop:"size",cssProperty:"width",transform:R});i({prop:"size",cssProperty:"height",transform:R});const Hr=i({prop:"boxSizing"}),Dr=O(Lr,De,Wr,Nr,Kr,Vr,Hr);var Be=Dr;const Br=i({prop:"fontFamily",themeKey:"typography"}),Ur=i({prop:"fontSize",themeKey:"typography"}),qr=i({prop:"fontStyle",themeKey:"typography"}),Xr=i({prop:"fontWeight",themeKey:"typography"}),Yr=i({prop:"letterSpacing"}),Zr=i({prop:"textTransform"}),Jr=i({prop:"lineHeight"}),Qr=i({prop:"textAlign"}),eo=i({prop:"typography",cssProperty:!1,themeKey:"typography"}),to=O(eo,Br,Ur,qr,Xr,Yr,Jr,Qr,Zr);var Ue=to;const ke={borders:Ge.filterProps,display:Le.filterProps,flexbox:We.filterProps,grid:Ne.filterProps,positions:Ve.filterProps,palette:Ke.filterProps,shadows:He.filterProps,sizing:Be.filterProps,spacing:Ee.filterProps,typography:Ue.filterProps},qe={borders:Ge,display:Le,flexbox:We,grid:Ne,positions:Ve,palette:Ke,shadows:He,sizing:Be,spacing:Ee,typography:Ue},Eo=Object.keys(ke).reduce((e,t)=>(ke[t].forEach(r=>{e[r]=qe[t]}),e),{});function ro(...e){const t=e.reduce((o,n)=>o.concat(Object.keys(n)),[]),r=new Set(t);return e.every(o=>r.size===Object.keys(o).length)}function oo(e,t){return typeof e=="function"?e(t):e}function no(e=qe){const t=Object.keys(e).reduce((n,s)=>(e[s].filterProps.forEach(a=>{n[a]=e[s]}),n),{});function r(n,s,a){const l={[n]:s,theme:a},c=t[n];return c?c(l):{[n]:s}}function o(n){const{sx:s,theme:a={}}=n||{};if(!s)return null;function l(c){let d=c;if(typeof c=="function")d=c(a);else if(typeof c!="object")return c;if(!d)return null;const b=rt(a.breakpoints),h=Object.keys(b);let P=b;return Object.keys(d).forEach(x=>{const p=oo(d[x],a);if(p!=null)if(typeof p=="object")if(t[x])P=K(P,r(x,p,a));else{const m=j({theme:a},p,S=>({[x]:S}));ro(m,p)?P[x]=o({sx:p,theme:a}):P=K(P,m)}else P=K(P,r(x,p,a))}),ot(h,P)}return Array.isArray(s)?s.map(l):l(s)}return o}const Xe=no();Xe.filterProps=["sx"];var so=Xe;function Ye(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Ye(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function _o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=Ye(e))&&(o&&(o+=" "),o+=t);return o}const io=["variant"];function Te(e){return e.length===0}function Ze(e){const{variant:t}=e,r=V(e,io);let o=t||"";return Object.keys(r).sort().forEach(n=>{n==="color"?o+=Te(o)?e[n]:ne(e[n]):o+=`${Te(o)?n:ne(n)}${ne(e[n].toString())}`}),o}const ao=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],lo=["theme"],co=["theme"];function z(e){return Object.keys(e).length===0}const uo=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,fo=(e,t)=>{let r=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(r=t.components[e].variants);const o={};return r.forEach(n=>{const s=Ze(n.props);o[s]=n.style}),o},po=(e,t,r,o)=>{var n,s;const{ownerState:a={}}=e,l=[],c=r==null||(n=r.components)==null||(s=n[o])==null?void 0:s.variants;return c&&c.forEach(d=>{let b=!0;Object.keys(d.props).forEach(h=>{a[h]!==d.props[h]&&e[h]!==d.props[h]&&(b=!1)}),b&&l.push(t[Ze(d.props)])}),l};function G(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const mo=nt();function ho(e={}){const{defaultTheme:t=mo,rootShouldForwardProp:r=G,slotShouldForwardProp:o=G,styleFunctionSx:n=so}=e;return(s,a={})=>{const{name:l,slot:c,skipVariantsResolver:d,skipSx:b,overridesResolver:h}=a,P=V(a,ao),x=d!==void 0?d:c&&c!=="Root"||!1,p=b||!1;let m,S=G;c==="Root"?S=r:c&&(S=o);const M=At(s,$({shouldForwardProp:S,label:m},P)),A=(v,...F)=>{const k=F?F.map(u=>typeof u=="function"&&u.__emotion_real!==u?y=>{let{theme:_}=y,N=V(y,lo);return u($({theme:z(_)?t:_},N))}:u):[];let E=v;l&&h&&k.push(u=>{const y=z(u.theme)?t:u.theme,_=uo(l,y);if(_){const N={};return Object.entries(_).forEach(([Qe,oe])=>{N[Qe]=typeof oe=="function"?oe($({},u,{theme:y})):oe}),h(u,N)}return null}),l&&!x&&k.push(u=>{const y=z(u.theme)?t:u.theme;return po(u,fo(l,y),y,l)}),p||k.push(u=>{const y=z(u.theme)?t:u.theme;return n($({},u,{theme:y}))});const I=k.length-F.length;if(Array.isArray(v)&&I>0){const u=new Array(I).fill("");E=[...v,...u],E.raw=[...v.raw,...u]}else typeof v=="function"&&v.__emotion_real!==v&&(E=u=>{let{theme:y}=u,_=V(u,co);return v($({theme:z(y)?t:y},_))});return M(E,...k)};return M.withConfig&&(A.withConfig=M.withConfig),A}}function yo(e){const{theme:t,name:r,props:o}=e;return!t||!t.components||!t.components[r]||!t.components[r].defaultProps?o:Mt(t.components[r].defaultProps,o)}function go({props:e,name:t,defaultTheme:r}){const o=st(r);return yo({theme:o,name:t,props:e})}const bo=it();var Je=bo;function $o({props:e,name:t}){return go({props:e,name:t,defaultTheme:Je})}const vo=e=>G(e)&&e!=="classes",Ao=G,xo=ho({defaultTheme:Je,rootShouldForwardProp:vo});var Fo=xo;function ae(e,t){return ae=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,n){return o.__proto__=n,o},ae(e,t)}function jo(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ae(e,t)}var Mo=et.createContext(null);export{Gt as C,Co as G,Mo as T,jo as _,Wt as a,Oo as b,_o as c,To as d,jt as e,Ce as f,Ro as g,ko as h,Je as i,Ao as j,Po as k,At as l,so as m,Mt as n,Eo as p,vo as r,Fo as s,$o as u};
//# sourceMappingURL=TransitionGroupContext.b1d3016a.js.map
