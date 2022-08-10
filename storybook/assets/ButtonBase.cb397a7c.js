import{_ as A,d as oe}from"./createTheme.a5a3adff.js";import{r as a,R as W}from"./index.f6283c0d.js";import{_ as je,T as fe,c as E,g as Re,k as ie,s as se,u as ye,a as Ae,d as ee,h as H,b as Xe}from"./TransitionGroupContext.b1d3016a.js";import{j as U,a as Ye}from"./jsx-runtime.f3747052.js";let G=!0,ne=!1,he;const We={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function He(e){const{type:t,tagName:o}=e;return!!(o==="INPUT"&&We[t]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Ge(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function te(){G=!1}function qe(){this.visibilityState==="hidden"&&ne&&(G=!0)}function Je(e){e.addEventListener("keydown",Ge,!0),e.addEventListener("mousedown",te,!0),e.addEventListener("pointerdown",te,!0),e.addEventListener("touchstart",te,!0),e.addEventListener("visibilitychange",qe,!0)}function Qe(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||He(t)}function Ze(){const e=a.exports.useCallback(n=>{n!=null&&Je(n.ownerDocument)},[]),t=a.exports.useRef(!1);function o(){return t.current?(ne=!0,window.clearTimeout(he),he=window.setTimeout(()=>{ne=!1},100),t.current=!1,!0):!1}function l(n){return Qe(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:l,onBlur:o,ref:e}}function et(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e,t){var o=function(r){return t&&a.exports.isValidElement(r)?t(r):r},l=Object.create(null);return e&&a.exports.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=o(n)}),l}function tt(e,t){e=e||{},t=t||{};function o(f){return f in t?t[f]:e[f]}var l=Object.create(null),n=[];for(var r in e)r in t?n.length&&(l[r]=n,n=[]):n.push(r);var i,c={};for(var u in t){if(l[u])for(i=0;i<l[u].length;i++){var p=l[u][i];c[l[u][i]]=o(p)}c[u]=o(u)}for(i=0;i<n.length;i++)c[n[i]]=o(n[i]);return c}function S(e,t,o){return o[t]!=null?o[t]:e.props[t]}function nt(e,t){return ae(e.children,function(o){return a.exports.cloneElement(o,{onExited:t.bind(null,o),in:!0,appear:S(o,"appear",e),enter:S(o,"enter",e),exit:S(o,"exit",e)})})}function rt(e,t,o){var l=ae(e.children),n=tt(t,l);return Object.keys(n).forEach(function(r){var i=n[r];if(!!a.exports.isValidElement(i)){var c=r in t,u=r in l,p=t[r],f=a.exports.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[r]=a.exports.cloneElement(i,{onExited:o.bind(null,i),in:!0,exit:S(i,"exit",e),enter:S(i,"enter",e)}):!u&&c&&!f?n[r]=a.exports.cloneElement(i,{in:!1}):u&&c&&a.exports.isValidElement(p)&&(n[r]=a.exports.cloneElement(i,{onExited:o.bind(null,i),in:p.props.in,exit:S(i,"exit",e),enter:S(i,"enter",e)}))}}),n}var ot=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},it={component:"div",childFactory:function(t){return t}},le=function(e){je(t,e);function t(l,n){var r;r=e.call(this,l,n)||this;var i=r.handleExited.bind(et(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,r){var i=r.children,c=r.handleExited,u=r.firstRender;return{children:u?nt(n,c):rt(n,i,c),firstRender:!1}},o.handleExited=function(n,r){var i=ae(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(r),this.mounted&&this.setState(function(c){var u=A({},c.children);return delete u[n.key],{children:u}}))},o.render=function(){var n=this.props,r=n.component,i=n.childFactory,c=oe(n,["component","childFactory"]),u=this.state.contextValue,p=ot(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,r===null?W.createElement(fe.Provider,{value:u},p):W.createElement(fe.Provider,{value:u},W.createElement(r,c,p))},t}(W.Component);le.propTypes={};le.defaultProps=it;var st=le;function at(e){const{className:t,classes:o,pulsate:l=!1,rippleX:n,rippleY:r,rippleSize:i,in:c,onExited:u,timeout:p}=e,[f,g]=a.exports.useState(!1),b=E(t,o.ripple,o.rippleVisible,l&&o.ripplePulsate),w={width:i,height:i,top:-(i/2)+r,left:-(i/2)+n},h=E(o.child,f&&o.childLeaving,l&&o.childPulsate);return!c&&!f&&g(!0),a.exports.useEffect(()=>{if(!c&&u!=null){const x=setTimeout(u,p);return()=>{clearTimeout(x)}}},[u,c,p]),U("span",{className:b,style:w,children:U("span",{className:h})})}const lt=Re("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);var m=lt;const ut=["center","classes","className"];let q=e=>e,me,be,ge,xe;const re=550,ct=80,pt=ie(me||(me=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),dt=ie(be||(be=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),ft=ie(ge||(ge=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ht=se("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),mt=se(at,{name:"MuiTouchRipple",slot:"Ripple"})(xe||(xe=q`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,pt,re,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,dt,re,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,ft,({theme:e})=>e.transitions.easing.easeInOut),bt=a.exports.forwardRef(function(t,o){const l=ye({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:r={},className:i}=l,c=oe(l,ut),[u,p]=a.exports.useState([]),f=a.exports.useRef(0),g=a.exports.useRef(null);a.exports.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.exports.useRef(!1),w=a.exports.useRef(null),h=a.exports.useRef(null),x=a.exports.useRef(null);a.exports.useEffect(()=>()=>{clearTimeout(w.current)},[]);const _=a.exports.useCallback(d=>{const{pulsate:R,rippleX:y,rippleY:D,rippleSize:I,cb:O}=d;p(T=>[...T,U(mt,{classes:{ripple:E(r.ripple,m.ripple),rippleVisible:E(r.rippleVisible,m.rippleVisible),ripplePulsate:E(r.ripplePulsate,m.ripplePulsate),child:E(r.child,m.child),childLeaving:E(r.childLeaving,m.childLeaving),childPulsate:E(r.childPulsate,m.childPulsate)},timeout:re,pulsate:R,rippleX:y,rippleY:D,rippleSize:I},f.current)]),f.current+=1,g.current=O},[r]),$=a.exports.useCallback((d={},R={},y)=>{const{pulsate:D=!1,center:I=n||R.pulsate,fakeElement:O=!1}=R;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const T=O?null:x.current,B=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let C,P,L;if(I||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)C=Math.round(B.width/2),P=Math.round(B.height/2);else{const{clientX:k,clientY:v}=d.touches&&d.touches.length>0?d.touches[0]:d;C=Math.round(k-B.left),P=Math.round(v-B.top)}if(I)L=Math.sqrt((2*B.width**2+B.height**2)/3),L%2===0&&(L+=1);else{const k=Math.max(Math.abs((T?T.clientWidth:0)-C),C)*2+2,v=Math.max(Math.abs((T?T.clientHeight:0)-P),P)*2+2;L=Math.sqrt(k**2+v**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{_({pulsate:D,rippleX:C,rippleY:P,rippleSize:L,cb:y})},w.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},ct)):_({pulsate:D,rippleX:C,rippleY:P,rippleSize:L,cb:y})},[n,_]),K=a.exports.useCallback(()=>{$({},{pulsate:!0})},[$]),N=a.exports.useCallback((d,R)=>{if(clearTimeout(w.current),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,w.current=setTimeout(()=>{N(d,R)});return}h.current=null,p(y=>y.length>0?y.slice(1):y),g.current=R},[]);return a.exports.useImperativeHandle(o,()=>({pulsate:K,start:$,stop:N}),[K,$,N]),U(ht,A({className:E(m.root,r.root,i),ref:x},c,{children:U(st,{component:null,exit:!0,children:u})}))});var gt=bt;function xt(e){return Ae("MuiButtonBase",e)}const Rt=Re("MuiButtonBase",["root","disabled","focusVisible"]);var yt=Rt;const Tt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Mt=e=>{const{disabled:t,focusVisible:o,focusVisibleClassName:l,classes:n}=e,i=Xe({root:["root",t&&"disabled",o&&"focusVisible"]},xt,n);return o&&l&&(i.root+=` ${l}`),i},Et=se("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${yt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ct=a.exports.forwardRef(function(t,o){const l=ye({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:r=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:w="a",onBlur:h,onClick:x,onContextMenu:_,onDragLeave:$,onFocus:K,onFocusVisible:N,onKeyDown:d,onKeyUp:R,onMouseDown:y,onMouseLeave:D,onMouseUp:I,onTouchEnd:O,onTouchMove:T,onTouchStart:B,tabIndex:C=0,TouchRippleProps:P,touchRippleRef:L,type:k}=l,v=oe(l,Tt),z=a.exports.useRef(null),M=a.exports.useRef(null),Te=ee(M,L),{isFocusVisibleRef:ue,onFocus:Me,onBlur:Ee,ref:Ce}=Ze(),[F,X]=a.exports.useState(!1);p&&F&&X(!1),a.exports.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),z.current.focus()}}),[]);const[J,ve]=a.exports.useState(!1);a.exports.useEffect(()=>{ve(!0)},[]);const Ve=J&&!f&&!p;a.exports.useEffect(()=>{F&&b&&!f&&J&&M.current.pulsate()},[f,b,F,J]);function V(s,pe,ze=g){return H(de=>(pe&&pe(de),!ze&&M.current&&M.current[s](de),!0))}const we=V("start",y),Be=V("stop",_),Pe=V("stop",$),Le=V("stop",I),De=V("stop",s=>{F&&s.preventDefault(),D&&D(s)}),ke=V("start",B),Fe=V("stop",O),Se=V("stop",T),$e=V("stop",s=>{Ee(s),ue.current===!1&&X(!1),h&&h(s)},!1),Ne=H(s=>{z.current||(z.current=s.currentTarget),Me(s),ue.current===!0&&(X(!0),N&&N(s)),K&&K(s)}),Q=()=>{const s=z.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Z=a.exports.useRef(!1),Ie=H(s=>{b&&!Z.current&&F&&M.current&&s.key===" "&&(Z.current=!0,M.current.stop(s,()=>{M.current.start(s)})),s.target===s.currentTarget&&Q()&&s.key===" "&&s.preventDefault(),d&&d(s),s.target===s.currentTarget&&Q()&&s.key==="Enter"&&!p&&(s.preventDefault(),x&&x(s))}),Ue=H(s=>{b&&s.key===" "&&M.current&&F&&!s.defaultPrevented&&(Z.current=!1,M.current.stop(s,()=>{M.current.pulsate(s)})),R&&R(s),x&&s.target===s.currentTarget&&Q()&&s.key===" "&&!s.defaultPrevented&&x(s)});let Y=u;Y==="button"&&(v.href||v.to)&&(Y=w);const j={};Y==="button"?(j.type=k===void 0?"button":k,j.disabled=p):(!v.href&&!v.to&&(j.role="button"),p&&(j["aria-disabled"]=p));const _e=ee(Ce,z),Ke=ee(o,_e),ce=A({},l,{centerRipple:r,component:u,disabled:p,disableRipple:f,disableTouchRipple:g,focusRipple:b,tabIndex:C,focusVisible:F}),Oe=Mt(ce);return Ye(Et,A({as:Y,className:E(Oe.root,c),ownerState:ce,onBlur:$e,onClick:x,onContextMenu:Be,onFocus:Ne,onKeyDown:Ie,onKeyUp:Ue,onMouseDown:we,onMouseLeave:De,onMouseUp:Le,onDragLeave:Pe,onTouchEnd:Fe,onTouchMove:Se,onTouchStart:ke,ref:Ke,tabIndex:p?-1:C,type:k},j,v,{children:[i,Ve?U(gt,A({ref:Te,center:r},P)):null]}))});var Lt=Ct;export{Lt as B,Ze as u};
//# sourceMappingURL=ButtonBase.cb397a7c.js.map
