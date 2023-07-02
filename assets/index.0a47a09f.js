import{L as Ot,r as T,g as j,j as v,M as Rt,H as De,N as Pt}from"./index.67c12982.js";import{c as At,i as wt,r as bt,a as Q,k as xt}from"./jsx-runtime_commonjs-proxy.02f5d844.js";import{j as ft}from"./styled.d0cf5fc3.js";var at={exports:{}},D={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var it=Symbol.for("react.element"),st=Symbol.for("react.portal"),Ne=Symbol.for("react.fragment"),_e=Symbol.for("react.strict_mode"),Oe=Symbol.for("react.profiler"),Re=Symbol.for("react.provider"),Pe=Symbol.for("react.context"),$t=Symbol.for("react.server_context"),$e=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),Le=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),zt=Symbol.for("react.offscreen"),Ct;Ct=Symbol.for("react.module.reference");function X(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case it:switch(e=e.type,e){case Ne:case Oe:case _e:case ze:case je:return e;default:switch(e=e&&e.$$typeof,e){case $t:case Pe:case $e:case Me:case Le:case Re:return e;default:return n}}case st:return n}}}D.ContextConsumer=Pe;D.ContextProvider=Re;D.Element=it;D.ForwardRef=$e;D.Fragment=Ne;D.Lazy=Me;D.Memo=Le;D.Portal=st;D.Profiler=Oe;D.StrictMode=_e;D.Suspense=ze;D.SuspenseList=je;D.isAsyncMode=function(){return!1};D.isConcurrentMode=function(){return!1};D.isContextConsumer=function(e){return X(e)===Pe};D.isContextProvider=function(e){return X(e)===Re};D.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===it};D.isForwardRef=function(e){return X(e)===$e};D.isFragment=function(e){return X(e)===Ne};D.isLazy=function(e){return X(e)===Me};D.isMemo=function(e){return X(e)===Le};D.isPortal=function(e){return X(e)===st};D.isProfiler=function(e){return X(e)===Oe};D.isStrictMode=function(e){return X(e)===_e};D.isSuspense=function(e){return X(e)===ze};D.isSuspenseList=function(e){return X(e)===je};D.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ne||e===Oe||e===_e||e===ze||e===je||e===zt||typeof e=="object"&&e!==null&&(e.$$typeof===Me||e.$$typeof===Le||e.$$typeof===Re||e.$$typeof===Pe||e.$$typeof===$e||e.$$typeof===Ct||e.getModuleId!==void 0)};D.typeOf=X;at.exports=D;const jt=()=>{const{search:e}=Ot();return T.exports.useMemo(()=>new URLSearchParams(e),[e])};var Lt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAMAAAA4a6b0AAABtlBMVEVHcEz////////+/v7////+/v7////////////////////////////+/v7+/v7+/v7////////////////////////////////+/v7////////+/v7////////////////////+/v7////////+/v7////+/v7////////////////////////////////////////////////////////////////////////////////////////////////+/v7////+/v7////////////////+/v7////+/v7////////+/v7////////////////////+/v7////+/v7+/v7////////////////////+/v7////////+/v7////+/v7////+/v7////////////////+/v7////////////+/v7////+/v7////+/v7////////+/v7////+/v7////////////+/v7+/v7+/v7////////////////+/v7////+/v7+/v7////+/v7+/v7////////////////+/v7////////////+/v7////////////+/v4WULEGAAAAkHRSTlMAA/z6+v77/gL9+QUB/fv8JY/CgIEkjEkCPK7q1SqqbMHO9qb5+PD34HoEhdwRe63ZDyBNmk7Mgwkutag0jQvbY/UxN/BYVKcLU8nChMsfUV98YPgDK1L1wN7vEn3lFRZ25iOHxnIpHoLadA7Wn+is4ciUzNC25hzfYxthsrcGr+G8xwXpELieF9oMu5ztCrm3ynxEAAABrUlEQVQoz11Rh1IVQRBsL+27u5cjOeecERQlSlLBnHMWEHPGHBGk/WNmD57Pcmprdmt6emanBwDCIaC8sqKs1Cwtq6gsB0JhBCbx4hKPefNKioOYdn5CAlEnYis74kTlnfA1FMKBJF1H2VRKH1s5LudnNFRURU8HbBVA2nms0uVaWWcZpLJcK6a9Y5lW3Z/DQNyjIl0VdHcK/4gjRUdlk+SDwQ/ZX/wy2NZ3/1bzecUUqkkDV8lHGO72N7vQ+Rrx29fIaoyRsSt3yYG934aQ+/l7OP7madIkz6BGOO1p8om/1dO/3vv1/RBalpqoGtEmyOW05nz8sfEd79Yyr5ZvmornMM1I/QW0Z1bx7HOKObx9gTvXL5G1mKVh9F3suHEv+/DxJz5vfbnS0ZxuIPuBOUb/TpGfx+VZ0WBC8YRpiQKuSOGabtQyG1lzCtiDKdIS1eyddLlj5Gmc1GL3TlIEttWu2lLyuBCgWT21OjtmBFsw6S3sABrC/pGuet2YEYcHx/OArEi24WcOHaEhsuzrRgsKFtJZi/TYMIoCY9d8HCM7jyIc/g+QzERT7h/CNoyDgO699AFmAAAAAElFTkSuQmCC",ot={},Mt=wt.exports;Object.defineProperty(ot,"__esModule",{value:!0});var Ee=ot.default=void 0;Gt(T.exports);var Yt=Mt(At),Tt=bt;function St(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(St=function(r){return r?t:n})(e)}function Gt(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=St(n);if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(u!=="default"&&Object.prototype.hasOwnProperty.call(e,u)){var o=i?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}var Ht=(0,Yt.default)((0,Tt.jsx)("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"}),"Apple");Ee=ot.default=Ht;var ut={},Vt=wt.exports;Object.defineProperty(ut,"__esModule",{value:!0});var ke=ut.default=void 0,Wt=Vt(At),Ut=bt,Qt=(0,Wt.default)((0,Ut.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");ke=ut.default=Qt;function Kt(){const e=Q`
    color: #fff;
    position: absolute;
    line-height: 1;
    transform: translateY(40px);
  `,n=Q`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  `,t=Q`
    list-style: none;
    display: flex;
    gap: 5px;
    li {
      width: 60px;
      height: 60px;
      border-radius: 3px;
      border: 1.5px solid rgba(255, 255, 255, 0.7);
      background-image: linear-gradient();
      display: flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      cursor: pointer;
      svg:nth-child(2) {
        display: none;
      }
      &:hover {
        background: #0e8f36;
        svg:nth-child(1) {
          display: none;
        }
        svg:nth-child(2) {
          display: inherit;
        }
      }
    }
  `;return j("div",{className:e,children:[j("div",{className:n,children:[v("img",{src:Lt,alt:"icon"}),v("span",{children:"\u4E0B\u8F09"})]}),j("ul",{className:t,children:[j("li",{children:[v(Ee,{}),v(ke,{})]}),j("li",{children:[v(Ee,{}),v(ke,{})]}),j("li",{children:[v(Ee,{}),v(ke,{})]})]})]})}function Zt({scroll:e}){const n=Q`
    color: #fff;
    position: absolute;

    top: 40%;
    left: 30px;
    @media screen and (min-width: 1200px) {
      top: 32%;
      left: 10%;
    }
  `,t=Q`
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(50%);
    color: #fff;
    h2 {
      font-size: 50px;
      white-space: nowrap;
    }
    p {
      display: none;
    }
    @media screen and (min-width: 1200px) {
      color: #333;
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) translateY(50%);
      line-height: 2;
      h2 {
        text-align: center;
        font-size: 72px;
        font-weight: 900;
        white-space: nowrap;
      }
      p {
        display: block;
        font-size: 20px;
        text-align: center;
        font-weight: 700;
        white-space: nowrap;
      }
    }
  `,r=Q`
    font-size: 70px;
    text-shadow: 0px 0px 1px #999;
    @media screen and (min-width: 1200px) {
      font-size: 150px;
    }
  `,i=Q`
    font-weight: 500;
    font-size: 40px;
    text-shadow: 0px 0px 1px #999;
    @media screen and (min-width: 1200px) {
      font-size: 42px;
    }
  `;return j("header",{className:e?t:n,children:[v("h2",{className:r,children:"Life on Line"}),!e&&v("h3",{className:i,children:"LINE\u59CB\u7D42\u966A\u4F34\u5728\u4F60\u8EAB\u65C1"}),e&&v("p",{children:"\u8D85\u8D8A\u901A\u8A0A\u8EDF\u9AD4\uFF0CLINE\u70BA\u7528\u6236\u5EFA\u69CB\u5168\u65B0\u7684\u6E9D\u901A\u578B\u614B\u8207\u8C50\u5BCC\u7684\u6578\u4F4D\u751F\u6D3B\uFF0C\u6210\u70BA\u7528\u6236\u751F\u6D3B\u4E2D\u4E0D\u53EF\u6216\u7F3A\u7684\u5E73\u53F0\u3002"}),!e&&v(Kt,{})]})}function Xt(){const[e,n]=T.exports.useState(!1),[t]=T.exports.useState(10),[r]=T.exports.useState(10),[i,u]=T.exports.useState(0),[o,d]=T.exports.useState(1),w=T.exports.useCallback(()=>{n(window.scrollY>0)},[]);T.exports.useEffect(()=>{window.addEventListener("scroll",w);const C=setInterval(()=>{u(A=>A+1>r-1?0:A+1),d(A=>A+1>r-1?0:A+1)},t/2*1e3);return()=>{clearInterval(C),window.removeEventListener("scroll",w)}},[]);const g=C=>({backgroundImage:`url(https://picsum.photos/1000/500?random=${C})`,animationDuration:`${t}s`,AnimationDelay:o===C?`${t/2}s`:"0s"});return j("div",{children:[v("ul",{className:e?"scroll lists":"lists",children:Array.from(Array(r)).map((C,A)=>v("li",{style:g(A),className:i===A||o===A?"animate":""}))}),v("div",{className:"noSrollArea",children:v(Zt,{scroll:e})})]})}const qt=xt`
  0% {
    top:0%;
    transform:translateY(-100%);
  }
  100% {
    top:100%;
    transform:translateY(100%);
  }
`,Jt=xt`
  0% {
    transform:translateY(0px);
  }
  50% {
    transform:translateY(5px);
  }
  100% {
    transform:translateY(0px);
  }
`,er=Q`
  visibility: hidden;
  @media screen and (min-width: 1200px) {
    visibility: initial;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    span {
      display: inline-block;
      font-size: 12px;
      animation: ${Jt} 1s ease infinite;
      text-shadow: 0 0 1px #999;
    }
    .line {
      margin-top: 10px;
      height: 100px;
      overflow: hidden;
      position: relative;
      text-align: center;
      &::after {
        content: "";
        display: inline-block;
        width: 1px;
        height: 80px;
        position: absolute;
        background-color: #fff;
        box-shadow: 0 0 1px #999;
        animation: ${qt} 1.5s ease infinite;
      }
    }
  }
`;function tr(){const[e,n]=T.exports.useState(!1),t=T.exports.useCallback(()=>{n(window.scrollY>0)},[]);return T.exports.useEffect(()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}),[]),e?v(Rt,{}):j("div",{className:er,children:[v("span",{children:"Scroll"}),v("div",{className:"line"})]})}function rr(){const e=Q`
    position: relative;
    width: 100%;
    height: 100vh;
    @media screen and (min-width: 1200px) {
      margin-bottom: 200px;
    }
  `;return j("div",{className:e,children:[v(Xt,{}),v(tr,{})]})}var nr="/rwd_side_project/assets/mv03.91429cb1.png",ar="/rwd_side_project/assets/mv04.c25204fb.png",ir="/rwd_side_project/assets/mv05.eaf21796.png";function sr(e){function n(f,c,l,p,a){for(var k=0,s=0,O=0,F=0,I,m,L=0,W=0,x,H=x=I=0,B=0,M=0,ge=0,Y=0,xe=l.length,ye=xe-1,ee,h="",P="",Te="",Ge="",se;B<xe;){if(m=l.charCodeAt(B),B===ye&&s+F+O+k!==0&&(s!==0&&(m=s===47?10:47),F=O=k=0,xe++,ye++),s+F+O+k===0){if(B===ye&&(0<M&&(h=h.replace($,"")),0<h.trim().length)){switch(m){case 32:case 9:case 59:case 13:case 10:break;default:h+=l.charAt(B)}m=59}switch(m){case 123:for(h=h.trim(),I=h.charCodeAt(0),x=1,Y=++B;B<xe;){switch(m=l.charCodeAt(B)){case 123:x++;break;case 125:x--;break;case 47:switch(m=l.charCodeAt(B+1)){case 42:case 47:e:{for(H=B+1;H<ye;++H)switch(l.charCodeAt(H)){case 47:if(m===42&&l.charCodeAt(H-1)===42&&B+2!==H){B=H+1;break e}break;case 10:if(m===47){B=H+1;break e}}B=H}}break;case 91:m++;case 40:m++;case 34:case 39:for(;B++<ye&&l.charCodeAt(B)!==m;);}if(x===0)break;B++}switch(x=l.substring(Y,B),I===0&&(I=(h=h.replace(A,"").trim()).charCodeAt(0)),I){case 64:switch(0<M&&(h=h.replace($,"")),m=h.charCodeAt(1),m){case 100:case 109:case 115:case 45:M=c;break;default:M=pe}if(x=n(c,M,x,m,a+1),Y=x.length,0<Z&&(M=t(pe,h,ge),se=d(3,x,M,c,q,U,Y,m,a,p),h=M.join(""),se!==void 0&&(Y=(x=se.trim()).length)===0&&(m=0,x="")),0<Y)switch(m){case 115:h=h.replace(ae,o);case 100:case 109:case 45:x=h+"{"+x+"}";break;case 107:h=h.replace(b,"$1 $2"),x=h+"{"+x+"}",x=V===1||V===2&&u("@"+x,3)?"@-webkit-"+x+"@"+x:"@"+x;break;default:x=h+x,p===112&&(x=(P+=x,""))}else x="";break;default:x=n(c,t(c,h,ge),x,p,a+1)}Te+=x,x=ge=M=H=I=0,h="",m=l.charCodeAt(++B);break;case 125:case 59:if(h=(0<M?h.replace($,""):h).trim(),1<(Y=h.length))switch(H===0&&(I=h.charCodeAt(0),I===45||96<I&&123>I)&&(Y=(h=h.replace(" ",":")).length),0<Z&&(se=d(1,h,c,f,q,U,P.length,p,a,p))!==void 0&&(Y=(h=se.trim()).length)===0&&(h="\0\0"),I=h.charCodeAt(0),m=h.charCodeAt(1),I){case 0:break;case 64:if(m===105||m===99){Ge+=h+l.charAt(B);break}default:h.charCodeAt(Y-1)!==58&&(P+=i(h,I,m,h.charCodeAt(2)))}ge=M=H=I=0,h="",m=l.charCodeAt(++B)}}switch(m){case 13:case 10:s===47?s=0:1+I===0&&p!==107&&0<h.length&&(M=1,h+="\0"),0<Z*le&&d(0,h,c,f,q,U,P.length,p,a,p),U=1,q++;break;case 59:case 125:if(s+F+O+k===0){U++;break}default:switch(U++,ee=l.charAt(B),m){case 9:case 32:if(F+k+s===0)switch(L){case 44:case 58:case 9:case 32:ee="";break;default:m!==32&&(ee=" ")}break;case 0:ee="\\0";break;case 12:ee="\\f";break;case 11:ee="\\v";break;case 38:F+s+k===0&&(M=ge=1,ee="\f"+ee);break;case 108:if(F+s+k+re===0&&0<H)switch(B-H){case 2:L===112&&l.charCodeAt(B-3)===58&&(re=L);case 8:W===111&&(re=W)}break;case 58:F+s+k===0&&(H=B);break;case 44:s+O+F+k===0&&(M=1,ee+="\r");break;case 34:case 39:s===0&&(F=F===m?0:F===0?m:F);break;case 91:F+s+O===0&&k++;break;case 93:F+s+O===0&&k--;break;case 41:F+s+k===0&&O--;break;case 40:if(F+s+k===0){if(I===0)switch(2*L+3*W){case 533:break;default:I=1}O++}break;case 64:s+O+F+k+H+x===0&&(x=1);break;case 42:case 47:if(!(0<F+k+O))switch(s){case 0:switch(2*m+3*l.charCodeAt(B+1)){case 235:s=47;break;case 220:Y=B,s=42}break;case 42:m===47&&L===42&&Y+2!==B&&(l.charCodeAt(Y+2)===33&&(P+=l.substring(Y,B+1)),ee="",s=0)}}s===0&&(h+=ee)}W=L,L=m,B++}if(Y=P.length,0<Y){if(M=c,0<Z&&(se=d(2,P,M,f,q,U,Y,p,a,p),se!==void 0&&(P=se).length===0))return Ge+P+Te;if(P=M.join(",")+"{"+P+"}",V*re!==0){switch(V!==2||u(P,2)||(re=0),re){case 111:P=P.replace(_,":-moz-$1")+P;break;case 112:P=P.replace(z,"::-webkit-input-$1")+P.replace(z,"::-moz-$1")+P.replace(z,":-ms-input-$1")+P}re=0}}return Ge+P+Te}function t(f,c,l){var p=c.trim().split(y);c=p;var a=p.length,k=f.length;switch(k){case 0:case 1:var s=0;for(f=k===0?"":f[0]+" ";s<a;++s)c[s]=r(f,c[s],l).trim();break;default:var O=s=0;for(c=[];s<a;++s)for(var F=0;F<k;++F)c[O++]=r(f[F]+" ",p[s],l).trim()}return c}function r(f,c,l){var p=c.charCodeAt(0);switch(33>p&&(p=(c=c.trim()).charCodeAt(0)),p){case 38:return c.replace(N,"$1"+f.trim());case 58:return f.trim()+c.replace(N,"$1"+f.trim());default:if(0<1*l&&0<c.indexOf("\f"))return c.replace(N,(f.charCodeAt(0)===58?"":"$1")+f.trim())}return f+c}function i(f,c,l,p){var a=f+";",k=2*c+3*l+4*p;if(k===944){f=a.indexOf(":",9)+1;var s=a.substring(f,a.length-1).trim();return s=a.substring(0,f).trim()+s+";",V===1||V===2&&u(s,1)?"-webkit-"+s+s:s}if(V===0||V===2&&!u(a,1))return a;switch(k){case 1015:return a.charCodeAt(10)===97?"-webkit-"+a+a:a;case 951:return a.charCodeAt(3)===116?"-webkit-"+a+a:a;case 963:return a.charCodeAt(5)===110?"-webkit-"+a+a:a;case 1009:if(a.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+a+a;case 978:return"-webkit-"+a+"-moz-"+a+a;case 1019:case 983:return"-webkit-"+a+"-moz-"+a+"-ms-"+a+a;case 883:if(a.charCodeAt(8)===45)return"-webkit-"+a+a;if(0<a.indexOf("image-set(",11))return a.replace(ce,"$1-webkit-$2")+a;break;case 932:if(a.charCodeAt(4)===45)switch(a.charCodeAt(5)){case 103:return"-webkit-box-"+a.replace("-grow","")+"-webkit-"+a+"-ms-"+a.replace("grow","positive")+a;case 115:return"-webkit-"+a+"-ms-"+a.replace("shrink","negative")+a;case 98:return"-webkit-"+a+"-ms-"+a.replace("basis","preferred-size")+a}return"-webkit-"+a+"-ms-"+a+a;case 964:return"-webkit-"+a+"-ms-flex-"+a+a;case 1023:if(a.charCodeAt(8)!==99)break;return s=a.substring(a.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+s+"-webkit-"+a+"-ms-flex-pack"+s+a;case 1005:return S.test(a)?a.replace(G,":-webkit-")+a.replace(G,":-moz-")+a:a;case 1e3:switch(s=a.substring(13).trim(),c=s.indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(c)){case 226:s=a.replace(R,"tb");break;case 232:s=a.replace(R,"tb-rl");break;case 220:s=a.replace(R,"lr");break;default:return a}return"-webkit-"+a+"-ms-"+s+a;case 1017:if(a.indexOf("sticky",9)===-1)break;case 975:switch(c=(a=f).length-10,s=(a.charCodeAt(c)===33?a.substring(0,c):a).substring(f.indexOf(":",7)+1).trim(),k=s.charCodeAt(0)+(s.charCodeAt(7)|0)){case 203:if(111>s.charCodeAt(8))break;case 115:a=a.replace(s,"-webkit-"+s)+";"+a;break;case 207:case 102:a=a.replace(s,"-webkit-"+(102<k?"inline-":"")+"box")+";"+a.replace(s,"-webkit-"+s)+";"+a.replace(s,"-ms-"+s+"box")+";"+a}return a+";";case 938:if(a.charCodeAt(5)===45)switch(a.charCodeAt(6)){case 105:return s=a.replace("-items",""),"-webkit-"+a+"-webkit-box-"+s+"-ms-flex-"+s+a;case 115:return"-webkit-"+a+"-ms-flex-item-"+a.replace(K,"")+a;default:return"-webkit-"+a+"-ms-flex-line-pack"+a.replace("align-content","").replace(K,"")+a}break;case 973:case 989:if(a.charCodeAt(3)!==45||a.charCodeAt(4)===122)break;case 931:case 953:if(ie.test(f)===!0)return(s=f.substring(f.indexOf(":")+1)).charCodeAt(0)===115?i(f.replace("stretch","fill-available"),c,l,p).replace(":fill-available",":stretch"):a.replace(s,"-webkit-"+s)+a.replace(s,"-moz-"+s.replace("fill-",""))+a;break;case 962:if(a="-webkit-"+a+(a.charCodeAt(5)===102?"-ms-"+a:"")+a,l+p===211&&a.charCodeAt(13)===105&&0<a.indexOf("transform",10))return a.substring(0,a.indexOf(";",27)+1).replace(E,"$1-webkit-$2")+a}return a}function u(f,c){var l=f.indexOf(c===1?":":"{"),p=f.substring(0,c!==3?l:10);return l=f.substring(l+1,f.length-1),me(c!==2?p:p.replace(te,"$1"),l,c)}function o(f,c){var l=i(c,c.charCodeAt(0),c.charCodeAt(1),c.charCodeAt(2));return l!==c+";"?l.replace(ue," or ($1)").substring(4):"("+c+")"}function d(f,c,l,p,a,k,s,O,F,I){for(var m=0,L=c,W;m<Z;++m)switch(W=J[m].call(C,f,L,l,p,a,k,s,O,F,I)){case void 0:case!1:case!0:case null:break;default:L=W}if(L!==c)return L}function w(f){switch(f){case void 0:case null:Z=J.length=0;break;default:if(typeof f=="function")J[Z++]=f;else if(typeof f=="object")for(var c=0,l=f.length;c<l;++c)w(f[c]);else le=!!f|0}return w}function g(f){return f=f.prefix,f!==void 0&&(me=null,f?typeof f!="function"?V=1:(V=2,me=f):V=0),g}function C(f,c){var l=f;if(33>l.charCodeAt(0)&&(l=l.trim()),ve=l,l=[ve],0<Z){var p=d(-1,c,l,l,q,U,0,0,0,0);p!==void 0&&typeof p=="string"&&(c=p)}var a=n(pe,l,c,0,0);return 0<Z&&(p=d(-2,a,l,l,q,U,a.length,0,0,0),p!==void 0&&(a=p)),ve="",re=0,U=q=1,a}var A=/^\0+/g,$=/[\0\r\f]/g,G=/: */g,S=/zoo|gra/,E=/([,: ])(transform)/g,y=/,\r+?/g,N=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,z=/::(place)/g,_=/:(read-only)/g,R=/[svh]\w+-[tblr]{2}/,ae=/\(\s*(.*)\s*\)/g,ue=/([\s\S]*?);/g,K=/-self|flex-/g,te=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ie=/stretch|:\s*\w+\-(?:conte|avail)/,ce=/([^-])(image-set\()/,U=1,q=1,re=0,V=1,pe=[],J=[],Z=0,me=null,le=0,ve="";return C.use=w,C.set=g,e!==void 0&&g(e),C}var or={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ne(){return(ne=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var dt=function(e,n){for(var t=[e[0]],r=0,i=n.length;r<i;r+=1)t.push(n[r],e[r+1]);return t},Je=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!at.exports.typeOf(e)},Be=Object.freeze([]),oe=Object.freeze({});function we(e){return typeof e=="function"}function ht(e){return e.displayName||e.name||"Component"}function ct(e){return e&&typeof e.styledComponentId=="string"}var de=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",lt=typeof window!="undefined"&&"HTMLElement"in window,ur=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1));function be(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(t.length>0?" Args: "+t.join(", "):""))}var cr=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var n=e.prototype;return n.indexOfGroup=function(t){for(var r=0,i=0;i<t;i++)r+=this.groupSizes[i];return r},n.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var i=this.groupSizes,u=i.length,o=u;t>=o;)(o<<=1)<0&&be(16,""+t);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var d=u;d<o;d++)this.groupSizes[d]=0}for(var w=this.indexOfGroup(t+1),g=0,C=r.length;g<C;g++)this.tag.insertRule(w,r[g])&&(this.groupSizes[t]++,w++)},n.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],i=this.indexOfGroup(t),u=i+r;this.groupSizes[t]=0;for(var o=i;o<u;o++)this.tag.deleteRule(i)}},n.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var i=this.groupSizes[t],u=this.indexOfGroup(t),o=u+i,d=u;d<o;d++)r+=this.tag.getRule(d)+`/*!sc*/
`;return r},e}(),Fe=new Map,Ie=new Map,Ae=1,Ce=function(e){if(Fe.has(e))return Fe.get(e);for(;Ie.has(Ae);)Ae++;var n=Ae++;return Fe.set(e,n),Ie.set(n,e),n},lr=function(e){return Ie.get(e)},fr=function(e,n){n>=Ae&&(Ae=n+1),Fe.set(e,n),Ie.set(n,e)},dr="style["+de+'][data-styled-version="5.3.11"]',hr=new RegExp("^"+de+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),pr=function(e,n,t){for(var r,i=t.split(","),u=0,o=i.length;u<o;u++)(r=i[u])&&e.registerName(n,r)},mr=function(e,n){for(var t=(n.textContent||"").split(`/*!sc*/
`),r=[],i=0,u=t.length;i<u;i++){var o=t[i].trim();if(o){var d=o.match(hr);if(d){var w=0|parseInt(d[1],10),g=d[2];w!==0&&(fr(g,w),pr(e,g,d[3]),e.getTag().insertRules(w,r)),r.length=0}else r.push(o)}}},vr=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},Et=function(e){var n=document.head,t=e||n,r=document.createElement("style"),i=function(d){for(var w=d.childNodes,g=w.length;g>=0;g--){var C=w[g];if(C&&C.nodeType===1&&C.hasAttribute(de))return C}}(t),u=i!==void 0?i.nextSibling:null;r.setAttribute(de,"active"),r.setAttribute("data-styled-version","5.3.11");var o=vr();return o&&r.setAttribute("nonce",o),t.insertBefore(r,u),r},gr=function(){function e(t){var r=this.element=Et(t);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var u=document.styleSheets,o=0,d=u.length;o<d;o++){var w=u[o];if(w.ownerNode===i)return w}be(17)}(r),this.length=0}var n=e.prototype;return n.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.getRule=function(t){var r=this.sheet.cssRules[t];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),yr=function(){function e(t){var r=this.element=Et(t);this.nodes=r.childNodes,this.length=0}var n=e.prototype;return n.insertRule=function(t,r){if(t<=this.length&&t>=0){var i=document.createTextNode(r),u=this.nodes[t];return this.element.insertBefore(i,u||null),this.length++,!0}return!1},n.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ar=function(){function e(t){this.rules=[],this.length=0}var n=e.prototype;return n.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),pt=lt,wr={isServer:!lt,useCSSOMInjection:!ur},kt=function(){function e(t,r,i){t===void 0&&(t=oe),r===void 0&&(r={}),this.options=ne({},wr,{},t),this.gs=r,this.names=new Map(i),this.server=!!t.isServer,!this.server&&lt&&pt&&(pt=!1,function(u){for(var o=document.querySelectorAll(dr),d=0,w=o.length;d<w;d++){var g=o[d];g&&g.getAttribute(de)!=="active"&&(mr(u,g),g.parentNode&&g.parentNode.removeChild(g))}}(this))}e.registerId=function(t){return Ce(t)};var n=e.prototype;return n.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(ne({},this.options,{},t),this.gs,r&&this.names||void 0)},n.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,u=r.useCSSOMInjection,o=r.target,t=i?new Ar(o):u?new gr(o):new yr(o),new cr(t)));var t,r,i,u,o},n.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.registerName=function(t,r){if(Ce(t),this.names.has(t))this.names.get(t).add(r);else{var i=new Set;i.add(r),this.names.set(t,i)}},n.insertRules=function(t,r,i){this.registerName(t,r),this.getTag().insertRules(Ce(t),i)},n.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.clearRules=function(t){this.getTag().clearGroup(Ce(t)),this.clearNames(t)},n.clearTag=function(){this.tag=void 0},n.toString=function(){return function(t){for(var r=t.getTag(),i=r.length,u="",o=0;o<i;o++){var d=lr(o);if(d!==void 0){var w=t.names.get(d),g=r.getGroup(o);if(w&&g&&w.size){var C=de+".g"+o+'[id="'+d+'"]',A="";w!==void 0&&w.forEach(function($){$.length>0&&(A+=$+",")}),u+=""+g+C+'{content:"'+A+`"}/*!sc*/
`}}}return u}(this)},e}(),br=/(a)(d)/gi,mt=function(e){return String.fromCharCode(e+(e>25?39:97))};function et(e){var n,t="";for(n=Math.abs(e);n>52;n=n/52|0)t=mt(n%52)+t;return(mt(n%52)+t).replace(br,"$1-$2")}var fe=function(e,n){for(var t=n.length;t;)e=33*e^n.charCodeAt(--t);return e},Ft=function(e){return fe(5381,e)};function xr(e){for(var n=0;n<e.length;n+=1){var t=e[n];if(we(t)&&!ct(t))return!1}return!0}var Cr=Ft("5.3.11"),Sr=function(){function e(n,t,r){this.rules=n,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xr(n),this.componentId=t,this.baseHash=fe(Cr,t),this.baseStyle=r,kt.registerId(t)}return e.prototype.generateAndInjectStyles=function(n,t,r){var i=this.componentId,u=[];if(this.baseStyle&&u.push(this.baseStyle.generateAndInjectStyles(n,t,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(i,this.staticRulesId))u.push(this.staticRulesId);else{var o=he(this.rules,n,t,r).join(""),d=et(fe(this.baseHash,o)>>>0);if(!t.hasNameForId(i,d)){var w=r(o,"."+d,void 0,i);t.insertRules(i,d,w)}u.push(d),this.staticRulesId=d}else{for(var g=this.rules.length,C=fe(this.baseHash,r.hash),A="",$=0;$<g;$++){var G=this.rules[$];if(typeof G=="string")A+=G;else if(G){var S=he(G,n,t,r),E=Array.isArray(S)?S.join(""):S;C=fe(C,E+$),A+=E}}if(A){var y=et(C>>>0);if(!t.hasNameForId(i,y)){var N=r(A,"."+y,void 0,i);t.insertRules(i,y,N)}u.push(y)}}return u.join(" ")},e}(),Er=/^\s*\/\/.*$/gm,kr=[":","[",".","#"];function Fr(e){var n,t,r,i,u=e===void 0?oe:e,o=u.options,d=o===void 0?oe:o,w=u.plugins,g=w===void 0?Be:w,C=new sr(d),A=[],$=function(E){function y(N){if(N)try{E(N+"}")}catch{}}return function(N,b,z,_,R,ae,ue,K,te,ie){switch(N){case 1:if(te===0&&b.charCodeAt(0)===64)return E(b+";"),"";break;case 2:if(K===0)return b+"/*|*/";break;case 3:switch(K){case 102:case 112:return E(z[0]+b),"";default:return b+(ie===0?"/*|*/":"")}case-2:b.split("/*|*/}").forEach(y)}}}(function(E){A.push(E)}),G=function(E,y,N){return y===0&&kr.indexOf(N[t.length])!==-1||N.match(i)?E:"."+n};function S(E,y,N,b){b===void 0&&(b="&");var z=E.replace(Er,""),_=y&&N?N+" "+y+" { "+z+" }":z;return n=b,t=y,r=new RegExp("\\"+t+"\\b","g"),i=new RegExp("(\\"+t+"\\b){2,}"),C(N||!y?"":y,_)}return C.use([].concat(g,[function(E,y,N){E===2&&N.length&&N[0].lastIndexOf(t)>0&&(N[0]=N[0].replace(r,G))},$,function(E){if(E===-2){var y=A;return A=[],y}}])),S.hash=g.length?g.reduce(function(E,y){return y.name||be(15),fe(E,y.name)},5381).toString():"",S}var Bt=De.createContext();Bt.Consumer;var It=De.createContext(),Br=(It.Consumer,new kt),tt=Fr();function Ir(){return T.exports.useContext(Bt)||Br}function Dr(){return T.exports.useContext(It)||tt}var Nr=function(){function e(n,t){var r=this;this.inject=function(i,u){u===void 0&&(u=tt);var o=r.name+u.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,u(r.rules,o,"@keyframes"))},this.toString=function(){return be(12,String(r.name))},this.name=n,this.id="sc-keyframes-"+n,this.rules=t}return e.prototype.getName=function(n){return n===void 0&&(n=tt),this.name+n.hash},e}(),_r=/([A-Z])/,Or=/([A-Z])/g,Rr=/^ms-/,Pr=function(e){return"-"+e.toLowerCase()};function vt(e){return _r.test(e)?e.replace(Or,Pr).replace(Rr,"-ms-"):e}var gt=function(e){return e==null||e===!1||e===""};function he(e,n,t,r){if(Array.isArray(e)){for(var i,u=[],o=0,d=e.length;o<d;o+=1)(i=he(e[o],n,t,r))!==""&&(Array.isArray(i)?u.push.apply(u,i):u.push(i));return u}if(gt(e))return"";if(ct(e))return"."+e.styledComponentId;if(we(e)){if(typeof(g=e)!="function"||g.prototype&&g.prototype.isReactComponent||!n)return e;var w=e(n);return he(w,n,t,r)}var g;return e instanceof Nr?t?(e.inject(t,r),e.getName(r)):e:Je(e)?function C(A,$){var G,S,E=[];for(var y in A)A.hasOwnProperty(y)&&!gt(A[y])&&(Array.isArray(A[y])&&A[y].isCss||we(A[y])?E.push(vt(y)+":",A[y],";"):Je(A[y])?E.push.apply(E,C(A[y],y)):E.push(vt(y)+": "+(G=y,(S=A[y])==null||typeof S=="boolean"||S===""?"":typeof S!="number"||S===0||G in or||G.startsWith("--")?String(S).trim():S+"px")+";"));return $?[$+" {"].concat(E,["}"]):E}(e):e.toString()}var yt=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function $r(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return we(e)||Je(e)?yt(he(dt(Be,[e].concat(t)))):t.length===0&&e.length===1&&typeof e[0]=="string"?e:yt(he(dt(e,t)))}var zr=function(e,n,t){return t===void 0&&(t=oe),e.theme!==t.theme&&e.theme||n||t.theme},jr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lr=/(^-|-$)/g;function He(e){return e.replace(jr,"-").replace(Lr,"")}var Mr=function(e){return et(Ft(e)>>>0)};function Se(e){return typeof e=="string"&&!0}var rt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Yr=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Tr(e,n,t){var r=e[t];rt(n)&&rt(r)?Dt(r,n):e[t]=n}function Dt(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];for(var i=0,u=t;i<u.length;i++){var o=u[i];if(rt(o))for(var d in o)Yr(d)&&Tr(e,o[d],d)}return e}var Nt=De.createContext();Nt.Consumer;var Ve={};function _t(e,n,t){var r=ct(e),i=!Se(e),u=n.attrs,o=u===void 0?Be:u,d=n.componentId,w=d===void 0?function(b,z){var _=typeof b!="string"?"sc":He(b);Ve[_]=(Ve[_]||0)+1;var R=_+"-"+Mr("5.3.11"+_+Ve[_]);return z?z+"-"+R:R}(n.displayName,n.parentComponentId):d,g=n.displayName,C=g===void 0?function(b){return Se(b)?"styled."+b:"Styled("+ht(b)+")"}(e):g,A=n.displayName&&n.componentId?He(n.displayName)+"-"+n.componentId:n.componentId||w,$=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,G=n.shouldForwardProp;r&&e.shouldForwardProp&&(G=n.shouldForwardProp?function(b,z,_){return e.shouldForwardProp(b,z,_)&&n.shouldForwardProp(b,z,_)}:e.shouldForwardProp);var S,E=new Sr(t,A,r?e.componentStyle:void 0),y=E.isStatic&&o.length===0,N=function(b,z){return function(_,R,ae,ue){var K=_.attrs,te=_.componentStyle,ie=_.defaultProps,ce=_.foldedComponentIds,U=_.shouldForwardProp,q=_.styledComponentId,re=_.target,V=function(p,a,k){p===void 0&&(p=oe);var s=ne({},a,{theme:p}),O={};return k.forEach(function(F){var I,m,L,W=F;for(I in we(W)&&(W=W(s)),W)s[I]=O[I]=I==="className"?(m=O[I],L=W[I],m&&L?m+" "+L:m||L):W[I]}),[s,O]}(zr(R,T.exports.useContext(Nt),ie)||oe,R,K),pe=V[0],J=V[1],Z=function(p,a,k,s){var O=Ir(),F=Dr(),I=a?p.generateAndInjectStyles(oe,O,F):p.generateAndInjectStyles(k,O,F);return I}(te,ue,pe),me=ae,le=J.$as||R.$as||J.as||R.as||re,ve=Se(le),f=J!==R?ne({},R,{},J):R,c={};for(var l in f)l[0]!=="$"&&l!=="as"&&(l==="forwardedAs"?c.as=f[l]:(U?U(l,ft,le):!ve||ft(l))&&(c[l]=f[l]));return R.style&&J.style!==R.style&&(c.style=ne({},R.style,{},J.style)),c.className=Array.prototype.concat(ce,q,Z!==q?Z:null,R.className,J.className).filter(Boolean).join(" "),c.ref=me,T.exports.createElement(le,c)}(S,b,z,y)};return N.displayName=C,(S=De.forwardRef(N)).attrs=$,S.componentStyle=E,S.displayName=C,S.shouldForwardProp=G,S.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Be,S.styledComponentId=A,S.target=r?e.target:e,S.withComponent=function(b){var z=n.componentId,_=function(ae,ue){if(ae==null)return{};var K,te,ie={},ce=Object.keys(ae);for(te=0;te<ce.length;te++)K=ce[te],ue.indexOf(K)>=0||(ie[K]=ae[K]);return ie}(n,["componentId"]),R=z&&z+"-"+(Se(b)?b:He(ht(b)));return _t(b,ne({},_,{attrs:$,componentId:R}),t)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?Dt({},e.defaultProps,b):b}}),Object.defineProperty(S,"toString",{value:function(){return"."+S.styledComponentId}}),i&&Pt(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var nt=function(e){return function n(t,r,i){if(i===void 0&&(i=oe),!at.exports.isValidElementType(r))return be(1,String(r));var u=function(){return t(r,i,$r.apply(void 0,arguments))};return u.withConfig=function(o){return n(t,r,ne({},i,{},o))},u.attrs=function(o){return n(t,r,ne({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},u}(_t,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){nt[e]=nt(e)});var Ye=nt;const We=Ye.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
`,Ue=Ye.h4`
  font-size: 40px;
  margin-bottom: 20px;
    line-height: 1.2;
`,Qe=Ye.h5`
  color: #07b53b;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;

  line-height: 1.56;
`,Ke=Ye.p`margin-bottom: 60px;
font-size: 18px;`;const Ze=Q`
  display: flex;
  height: 100vh;
  padding: 50px 0;
  &:nth-of-type(1) img,
  &:nth-of-type(3) img{

    object-position: right;
  }
`,Xe=Q`
  width: 50%;
  padding: 0 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`,qe=Q`
  width: 50%;
`;function Gr(){return j("div",{id:"view2",children:[j("section",{className:Ze,children:[j("div",{className:Xe,children:[v(Ue,{children:"LINE TODAY"}),v(Qe,{children:"\u96A8\u9EDE\u96A8\u770B \u751F\u6D3B\u5FEB\u5145"}),v(Ke,{children:"\u6700\u5373\u6642\u7684\u65B0\u805E\u3001\u5F71\u97F3\u3001\u904B\u52D5\u8CFD\u4E8B\u548C\u5A1B\u6A02\u5167\u5BB9\u76F4\u64AD\uFF0C\u8B93\u4F60\u8A71\u984C\u6C38\u4E0D\u65B7\u7DDA\uFF0CLINE TODAY\u966A\u4F34\u60A8\u7684\u6BCF\u4E00\u5929\uFF01"})]}),v("div",{className:qe,children:v(We,{src:nr})})]}),j("section",{className:Ze,children:[v("div",{className:qe,children:v(We,{src:ar})}),j("div",{className:Xe,children:[v(Ue,{children:"LINE VOOM"}),v(Qe,{children:"\u6A02\u8DA3\u8D85\u9023\u7D50"}),v(Ke,{children:"\u8FFD\u8E64\u6700\u611B\u5275\u4F5C\u5BA2\u3001\u7CBE\u5F69\u5F71\u97F3\u96A8\u6642\u770B \u5206\u4EAB\u751F\u6D3B\u5927\u5C0F\u4E8B\u3001\u71B1\u9580\u8A71\u984C\u4E0D\u932F\u904E\uFF01"})]})]}),j("section",{className:Ze,children:[j("div",{className:Xe,children:[v(Ue,{children:"LINE Pay"}),v(Qe,{children:"\u4ED8\u6B3E\u3001\u8F49\u5E33\u3001\u751F\u6D3B\u7E73\u8CBB\uFF0C\u8F15\u9B06\u7C21\u55AE\u53C8\u4FBF\u5229\uFF01"}),v(Ke,{children:"\u4ED8\u6B3E\u7C21\u55AE\u53C8\u4FBF\u5229\uFF0C\u9084\u80FD\u8F15\u9B06\u8F49\u5E33\u7D66LINE\u597D\u53CB\uFF0C\u52D5\u52D5\u624B\u6307\u8F15\u9B06\u5B8C\u6210\u65E5\u5E38\u751F\u6D3B\u5404\u7A2E\u5E33\u55AE\u7E73\u8CBB\uFF0C \u514D\u51FA\u9580\u7701\u6642\u53C8\u7701\u529B\u3002"})]}),v("div",{className:qe,children:v(We,{src:ir})})]})]})}const Hr=Q`
 background-color: rgba(100,100,100,.1);
 min-height: 100vh;
 margin-top: 140px;
`;function Vr(){return v("div",{className:Hr})}function Kr(){const e=jt();return T.exports.useEffect(()=>{console.log(e.get("search"))},[e]),j("div",{className:"Line",children:[v(rr,{}),v(Gr,{}),v(Vr,{})]})}export{Kr as default};
