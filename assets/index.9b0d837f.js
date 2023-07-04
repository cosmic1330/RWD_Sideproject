import{L as Ot,r as P,g as j,j as p,M as Rt,H as Le,N as jt}from"./index.ff0b3d4a.js";import{c as bt,i as xt,r as At,a as U,k as Ct}from"./jsx-runtime_commonjs-proxy.5167fc51.js";import{j as dt}from"./styled.866c6108.js";var st={exports:{}},z={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var at=Symbol.for("react.element"),ot=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),Me=Symbol.for("react.strict_mode"),Ne=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),Oe=Symbol.for("react.context"),$t=Symbol.for("react.server_context"),Re=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),Ye=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),Yt=Symbol.for("react.offscreen"),St;St=Symbol.for("react.module.reference");function q(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case at:switch(e=e.type,e){case Ie:case Ne:case Me:case je:case $e:return e;default:switch(e=e&&e.$$typeof,e){case $t:case Oe:case Re:case Te:case Ye:case Pe:return e;default:return t}}case ot:return t}}}z.ContextConsumer=Oe;z.ContextProvider=Pe;z.Element=at;z.ForwardRef=Re;z.Fragment=Ie;z.Lazy=Te;z.Memo=Ye;z.Portal=ot;z.Profiler=Ne;z.StrictMode=Me;z.Suspense=je;z.SuspenseList=$e;z.isAsyncMode=function(){return!1};z.isConcurrentMode=function(){return!1};z.isContextConsumer=function(e){return q(e)===Oe};z.isContextProvider=function(e){return q(e)===Pe};z.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===at};z.isForwardRef=function(e){return q(e)===Re};z.isFragment=function(e){return q(e)===Ie};z.isLazy=function(e){return q(e)===Te};z.isMemo=function(e){return q(e)===Ye};z.isPortal=function(e){return q(e)===ot};z.isProfiler=function(e){return q(e)===Ne};z.isStrictMode=function(e){return q(e)===Me};z.isSuspense=function(e){return q(e)===je};z.isSuspenseList=function(e){return q(e)===$e};z.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ie||e===Ne||e===Me||e===je||e===$e||e===Yt||typeof e=="object"&&e!==null&&(e.$$typeof===Te||e.$$typeof===Ye||e.$$typeof===Pe||e.$$typeof===Oe||e.$$typeof===Re||e.$$typeof===St||e.getModuleId!==void 0)};z.typeOf=q;st.exports=z;const Tt=()=>{const{search:e}=Ot();return P.exports.useMemo(()=>new URLSearchParams(e),[e])};var Wt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAMAAAA4a6b0AAABtlBMVEVHcEz////////+/v7////+/v7////////////////////////////+/v7+/v7+/v7////////////////////////////////+/v7////////+/v7////////////////////+/v7////////+/v7////+/v7////////////////////////////////////////////////////////////////////////////////////////////////+/v7////+/v7////////////////+/v7////+/v7////////+/v7////////////////////+/v7////+/v7+/v7////////////////////+/v7////////+/v7////+/v7////+/v7////////////////+/v7////////////+/v7////+/v7////+/v7////////+/v7////+/v7////////////+/v7+/v7+/v7////////////////+/v7////+/v7+/v7////+/v7+/v7////////////////+/v7////////////+/v7////////////+/v4WULEGAAAAkHRSTlMAA/z6+v77/gL9+QUB/fv8JY/CgIEkjEkCPK7q1SqqbMHO9qb5+PD34HoEhdwRe63ZDyBNmk7Mgwkutag0jQvbY/UxN/BYVKcLU8nChMsfUV98YPgDK1L1wN7vEn3lFRZ25iOHxnIpHoLadA7Wn+is4ciUzNC25hzfYxthsrcGr+G8xwXpELieF9oMu5ztCrm3ynxEAAABrUlEQVQoz11Rh1IVQRBsL+27u5cjOeecERQlSlLBnHMWEHPGHBGk/WNmD57Pcmprdmt6emanBwDCIaC8sqKs1Cwtq6gsB0JhBCbx4hKPefNKioOYdn5CAlEnYis74kTlnfA1FMKBJF1H2VRKH1s5LudnNFRURU8HbBVA2nms0uVaWWcZpLJcK6a9Y5lW3Z/DQNyjIl0VdHcK/4gjRUdlk+SDwQ/ZX/wy2NZ3/1bzecUUqkkDV8lHGO72N7vQ+Rrx29fIaoyRsSt3yYG934aQ+/l7OP7madIkz6BGOO1p8om/1dO/3vv1/RBalpqoGtEmyOW05nz8sfEd79Yyr5ZvmornMM1I/QW0Z1bx7HOKObx9gTvXL5G1mKVh9F3suHEv+/DxJz5vfbnS0ZxuIPuBOUb/TpGfx+VZ0WBC8YRpiQKuSOGabtQyG1lzCtiDKdIS1eyddLlj5Gmc1GL3TlIEttWu2lLyuBCgWT21OjtmBFsw6S3sABrC/pGuet2YEYcHx/OArEi24WcOHaEhsuzrRgsKFtJZi/TYMIoCY9d8HCM7jyIc/g+QzERT7h/CNoyDgO699AFmAAAAAElFTkSuQmCC",lt={},Ht=xt.exports;Object.defineProperty(lt,"__esModule",{value:!0});var ke=lt.default=void 0;Vt(P.exports);var Gt=Ht(bt),Xt=At;function Et(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,i=new WeakMap;return(Et=function(n){return n?i:t})(e)}function Vt(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var i=Et(t);if(i&&i.has(e))return i.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var o=s?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}return n.default=e,i&&i.set(e,n),n}var Ut=(0,Gt.default)((0,Xt.jsx)("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"}),"Apple");ke=lt.default=Ut;var ut={},Qt=xt.exports;Object.defineProperty(ut,"__esModule",{value:!0});var Fe=ut.default=void 0,Zt=Qt(bt),qt=At,Kt=(0,Zt.default)((0,qt.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");Fe=ut.default=Kt;function Jt(){const e=U`
    color: #fff;
    position: absolute;
    line-height: 1;
    transform: translateY(40px);
  `,t=U`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  `,i=U`
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
  `;return j("div",{className:e,children:[j("div",{className:t,children:[p("img",{src:Wt,alt:"icon"}),p("span",{children:"\u4E0B\u8F09"})]}),j("ul",{className:i,children:[j("li",{children:[p(ke,{}),p(Fe,{})]}),j("li",{children:[p(ke,{}),p(Fe,{})]}),j("li",{children:[p(ke,{}),p(Fe,{})]})]})]})}function ei({scroll:e}){const t=U`
    color: #fff;
    position: absolute;

    top: 40%;
    left: 30px;
    @media screen and (min-width: 1200px) {
      top: 32%;
      left: 10%;
    }
  `,i=U`
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
  `,n=U`
    font-size: 70px;
    text-shadow: 0px 0px 1px #999;
    @media screen and (min-width: 1200px) {
      font-size: 150px;
    }
  `,s=U`
    font-weight: 500;
    font-size: 40px;
    text-shadow: 0px 0px 1px #999;
    @media screen and (min-width: 1200px) {
      font-size: 42px;
    }
  `;return j("header",{className:e?i:t,children:[p("h2",{className:n,children:"Life on Line"}),!e&&p("h3",{className:s,children:"LINE\u59CB\u7D42\u966A\u4F34\u5728\u4F60\u8EAB\u65C1"}),e&&p("p",{children:"\u8D85\u8D8A\u901A\u8A0A\u8EDF\u9AD4\uFF0CLINE\u70BA\u7528\u6236\u5EFA\u69CB\u5168\u65B0\u7684\u6E9D\u901A\u578B\u614B\u8207\u8C50\u5BCC\u7684\u6578\u4F4D\u751F\u6D3B\uFF0C\u6210\u70BA\u7528\u6236\u751F\u6D3B\u4E2D\u4E0D\u53EF\u6216\u7F3A\u7684\u5E73\u53F0\u3002"}),!e&&p(Jt,{})]})}function ti(){const[e,t]=P.exports.useState(!1),[i]=P.exports.useState(10),[n]=P.exports.useState(10),[s,a]=P.exports.useState(0),[o,d]=P.exports.useState(1),y=P.exports.useCallback(()=>{t(window.scrollY>0)},[]);P.exports.useEffect(()=>{window.addEventListener("scroll",y);const C=setInterval(()=>{a(w=>w+1>n-1?0:w+1),d(w=>w+1>n-1?0:w+1)},i/2*1e3);return()=>{clearInterval(C),window.removeEventListener("scroll",y)}},[]);const g=C=>({backgroundImage:`url(https://picsum.photos/1000/500?random=${C})`,animationDuration:`${i}s`,AnimationDelay:o===C?`${i/2}s`:"0s"});return j("div",{children:[p("ul",{className:e?"scroll lists":"lists",children:Array.from(Array(n)).map((C,w)=>p("li",{style:g(w),className:s===w||o===w?"animate":""},w))}),p("div",{className:"noSrollArea",children:p(ei,{scroll:e})})]})}const ii=Ct`
  0% {
    top:0%;
    transform:translateY(-100%);
  }
  100% {
    top:100%;
    transform:translateY(100%);
  }
`,ni=Ct`
  0% {
    transform:translateY(0px);
  }
  50% {
    transform:translateY(5px);
  }
  100% {
    transform:translateY(0px);
  }
`,ri=U`
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
      animation: ${ni} 1s ease infinite;
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
        animation: ${ii} 1.5s ease infinite;
      }
    }
  }
`;function si(){const[e,t]=P.exports.useState(!1),i=P.exports.useCallback(()=>{t(window.scrollY>0)},[]);return P.exports.useEffect(()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}),[]),e?p(Rt,{}):j("div",{className:ri,children:[p("span",{children:"Scroll"}),p("div",{className:"line"})]})}function ai(){const e=U`
    position: relative;
    width: 100%;
    height: 100vh;
    @media screen and (min-width: 1200px) {
      margin-bottom: 200px;
    }
  `;return j("div",{className:e,children:[p(ti,{}),p(si,{})]})}var oi="/rwd_side_project/assets/mv03.91429cb1.png",li="/rwd_side_project/assets/mv04.c25204fb.png",ui="/rwd_side_project/assets/mv05.eaf21796.png";function ci(e){function t(h,u,c,m,r){for(var B=0,l=0,I=0,k=0,_,v,$=0,X=0,A,H=A=_=0,F=0,Y=0,we=0,T=0,Se=c.length,be=Se-1,ee,f="",N="",We="",He="",le;F<Se;){if(v=c.charCodeAt(F),F===be&&l+k+I+B!==0&&(l!==0&&(v=l===47?10:47),k=I=B=0,Se++,be++),l+k+I+B===0){if(F===be&&(0<Y&&(f=f.replace(O,"")),0<f.trim().length)){switch(v){case 32:case 9:case 59:case 13:case 10:break;default:f+=c.charAt(F)}v=59}switch(v){case 123:for(f=f.trim(),_=f.charCodeAt(0),A=1,T=++F;F<Se;){switch(v=c.charCodeAt(F)){case 123:A++;break;case 125:A--;break;case 47:switch(v=c.charCodeAt(F+1)){case 42:case 47:e:{for(H=F+1;H<be;++H)switch(c.charCodeAt(H)){case 47:if(v===42&&c.charCodeAt(H-1)===42&&F+2!==H){F=H+1;break e}break;case 10:if(v===47){F=H+1;break e}}F=H}}break;case 91:v++;case 40:v++;case 34:case 39:for(;F++<be&&c.charCodeAt(F)!==v;);}if(A===0)break;F++}switch(A=c.substring(T,F),_===0&&(_=(f=f.replace(w,"").trim()).charCodeAt(0)),_){case 64:switch(0<Y&&(f=f.replace(O,"")),v=f.charCodeAt(1),v){case 100:case 109:case 115:case 45:Y=u;break;default:Y=me}if(A=t(u,Y,A,v,r+1),T=A.length,0<Z&&(Y=i(me,f,we),le=d(3,A,Y,u,K,V,T,v,r,m),f=Y.join(""),le!==void 0&&(T=(A=le.trim()).length)===0&&(v=0,A="")),0<T)switch(v){case 115:f=f.replace(ae,o);case 100:case 109:case 45:A=f+"{"+A+"}";break;case 107:f=f.replace(x,"$1 $2"),A=f+"{"+A+"}",A=G===1||G===2&&a("@"+A,3)?"@-webkit-"+A+"@"+A:"@"+A;break;default:A=f+A,m===112&&(A=(N+=A,""))}else A="";break;default:A=t(u,i(u,f,we),A,m,r+1)}We+=A,A=we=Y=H=_=0,f="",v=c.charCodeAt(++F);break;case 125:case 59:if(f=(0<Y?f.replace(O,""):f).trim(),1<(T=f.length))switch(H===0&&(_=f.charCodeAt(0),_===45||96<_&&123>_)&&(T=(f=f.replace(" ",":")).length),0<Z&&(le=d(1,f,u,h,K,V,N.length,m,r,m))!==void 0&&(T=(f=le.trim()).length)===0&&(f="\0\0"),_=f.charCodeAt(0),v=f.charCodeAt(1),_){case 0:break;case 64:if(v===105||v===99){He+=f+c.charAt(F);break}default:f.charCodeAt(T-1)!==58&&(N+=s(f,_,v,f.charCodeAt(2)))}we=Y=H=_=0,f="",v=c.charCodeAt(++F)}}switch(v){case 13:case 10:l===47?l=0:1+_===0&&m!==107&&0<f.length&&(Y=1,f+="\0"),0<Z*de&&d(0,f,u,h,K,V,N.length,m,r,m),V=1,K++;break;case 59:case 125:if(l+k+I+B===0){V++;break}default:switch(V++,ee=c.charAt(F),v){case 9:case 32:if(k+B+l===0)switch($){case 44:case 58:case 9:case 32:ee="";break;default:v!==32&&(ee=" ")}break;case 0:ee="\\0";break;case 12:ee="\\f";break;case 11:ee="\\v";break;case 38:k+l+B===0&&(Y=we=1,ee="\f"+ee);break;case 108:if(k+l+B+ne===0&&0<H)switch(F-H){case 2:$===112&&c.charCodeAt(F-3)===58&&(ne=$);case 8:X===111&&(ne=X)}break;case 58:k+l+B===0&&(H=F);break;case 44:l+I+k+B===0&&(Y=1,ee+="\r");break;case 34:case 39:l===0&&(k=k===v?0:k===0?v:k);break;case 91:k+l+I===0&&B++;break;case 93:k+l+I===0&&B--;break;case 41:k+l+B===0&&I--;break;case 40:if(k+l+B===0){if(_===0)switch(2*$+3*X){case 533:break;default:_=1}I++}break;case 64:l+I+k+B+H+A===0&&(A=1);break;case 42:case 47:if(!(0<k+B+I))switch(l){case 0:switch(2*v+3*c.charCodeAt(F+1)){case 235:l=47;break;case 220:T=F,l=42}break;case 42:v===47&&$===42&&T+2!==F&&(c.charCodeAt(T+2)===33&&(N+=c.substring(T,F+1)),ee="",l=0)}}l===0&&(f+=ee)}X=$,$=v,F++}if(T=N.length,0<T){if(Y=u,0<Z&&(le=d(2,N,Y,h,K,V,T,m,r,m),le!==void 0&&(N=le).length===0))return He+N+We;if(N=Y.join(",")+"{"+N+"}",G*ne!==0){switch(G!==2||a(N,2)||(ne=0),ne){case 111:N=N.replace(L,":-moz-$1")+N;break;case 112:N=N.replace(R,"::-webkit-input-$1")+N.replace(R,"::-moz-$1")+N.replace(R,":-ms-input-$1")+N}ne=0}}return He+N+We}function i(h,u,c){var m=u.trim().split(b);u=m;var r=m.length,B=h.length;switch(B){case 0:case 1:var l=0;for(h=B===0?"":h[0]+" ";l<r;++l)u[l]=n(h,u[l],c).trim();break;default:var I=l=0;for(u=[];l<r;++l)for(var k=0;k<B;++k)u[I++]=n(h[k]+" ",m[l],c).trim()}return u}function n(h,u,c){var m=u.charCodeAt(0);switch(33>m&&(m=(u=u.trim()).charCodeAt(0)),m){case 38:return u.replace(D,"$1"+h.trim());case 58:return h.trim()+u.replace(D,"$1"+h.trim());default:if(0<1*c&&0<u.indexOf("\f"))return u.replace(D,(h.charCodeAt(0)===58?"":"$1")+h.trim())}return h+u}function s(h,u,c,m){var r=h+";",B=2*u+3*c+4*m;if(B===944){h=r.indexOf(":",9)+1;var l=r.substring(h,r.length-1).trim();return l=r.substring(0,h).trim()+l+";",G===1||G===2&&a(l,1)?"-webkit-"+l+l:l}if(G===0||G===2&&!a(r,1))return r;switch(B){case 1015:return r.charCodeAt(10)===97?"-webkit-"+r+r:r;case 951:return r.charCodeAt(3)===116?"-webkit-"+r+r:r;case 963:return r.charCodeAt(5)===110?"-webkit-"+r+r:r;case 1009:if(r.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+r+r;case 978:return"-webkit-"+r+"-moz-"+r+r;case 1019:case 983:return"-webkit-"+r+"-moz-"+r+"-ms-"+r+r;case 883:if(r.charCodeAt(8)===45)return"-webkit-"+r+r;if(0<r.indexOf("image-set(",11))return r.replace(he,"$1-webkit-$2")+r;break;case 932:if(r.charCodeAt(4)===45)switch(r.charCodeAt(5)){case 103:return"-webkit-box-"+r.replace("-grow","")+"-webkit-"+r+"-ms-"+r.replace("grow","positive")+r;case 115:return"-webkit-"+r+"-ms-"+r.replace("shrink","negative")+r;case 98:return"-webkit-"+r+"-ms-"+r.replace("basis","preferred-size")+r}return"-webkit-"+r+"-ms-"+r+r;case 964:return"-webkit-"+r+"-ms-flex-"+r+r;case 1023:if(r.charCodeAt(8)!==99)break;return l=r.substring(r.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+l+"-webkit-"+r+"-ms-flex-pack"+l+r;case 1005:return S.test(r)?r.replace(W,":-webkit-")+r.replace(W,":-moz-")+r:r;case 1e3:switch(l=r.substring(13).trim(),u=l.indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(u)){case 226:l=r.replace(M,"tb");break;case 232:l=r.replace(M,"tb-rl");break;case 220:l=r.replace(M,"lr");break;default:return r}return"-webkit-"+r+"-ms-"+l+r;case 1017:if(r.indexOf("sticky",9)===-1)break;case 975:switch(u=(r=h).length-10,l=(r.charCodeAt(u)===33?r.substring(0,u):r).substring(h.indexOf(":",7)+1).trim(),B=l.charCodeAt(0)+(l.charCodeAt(7)|0)){case 203:if(111>l.charCodeAt(8))break;case 115:r=r.replace(l,"-webkit-"+l)+";"+r;break;case 207:case 102:r=r.replace(l,"-webkit-"+(102<B?"inline-":"")+"box")+";"+r.replace(l,"-webkit-"+l)+";"+r.replace(l,"-ms-"+l+"box")+";"+r}return r+";";case 938:if(r.charCodeAt(5)===45)switch(r.charCodeAt(6)){case 105:return l=r.replace("-items",""),"-webkit-"+r+"-webkit-box-"+l+"-ms-flex-"+l+r;case 115:return"-webkit-"+r+"-ms-flex-item-"+r.replace(Q,"")+r;default:return"-webkit-"+r+"-ms-flex-line-pack"+r.replace("align-content","").replace(Q,"")+r}break;case 973:case 989:if(r.charCodeAt(3)!==45||r.charCodeAt(4)===122)break;case 931:case 953:if(oe.test(h)===!0)return(l=h.substring(h.indexOf(":")+1)).charCodeAt(0)===115?s(h.replace("stretch","fill-available"),u,c,m).replace(":fill-available",":stretch"):r.replace(l,"-webkit-"+l)+r.replace(l,"-moz-"+l.replace("fill-",""))+r;break;case 962:if(r="-webkit-"+r+(r.charCodeAt(5)===102?"-ms-"+r:"")+r,c+m===211&&r.charCodeAt(13)===105&&0<r.indexOf("transform",10))return r.substring(0,r.indexOf(";",27)+1).replace(E,"$1-webkit-$2")+r}return r}function a(h,u){var c=h.indexOf(u===1?":":"{"),m=h.substring(0,u!==3?c:10);return c=h.substring(c+1,h.length-1),ve(u!==2?m:m.replace(ie,"$1"),c,u)}function o(h,u){var c=s(u,u.charCodeAt(0),u.charCodeAt(1),u.charCodeAt(2));return c!==u+";"?c.replace(ce," or ($1)").substring(4):"("+u+")"}function d(h,u,c,m,r,B,l,I,k,_){for(var v=0,$=u,X;v<Z;++v)switch(X=J[v].call(C,h,$,c,m,r,B,l,I,k,_)){case void 0:case!1:case!0:case null:break;default:$=X}if($!==u)return $}function y(h){switch(h){case void 0:case null:Z=J.length=0;break;default:if(typeof h=="function")J[Z++]=h;else if(typeof h=="object")for(var u=0,c=h.length;u<c;++u)y(h[u]);else de=!!h|0}return y}function g(h){return h=h.prefix,h!==void 0&&(ve=null,h?typeof h!="function"?G=1:(G=2,ve=h):G=0),g}function C(h,u){var c=h;if(33>c.charCodeAt(0)&&(c=c.trim()),ye=c,c=[ye],0<Z){var m=d(-1,u,c,c,K,V,0,0,0,0);m!==void 0&&typeof m=="string"&&(u=m)}var r=t(me,c,u,0,0);return 0<Z&&(m=d(-2,r,c,c,K,V,r.length,0,0,0),m!==void 0&&(r=m)),ye="",ne=0,V=K=1,r}var w=/^\0+/g,O=/[\0\r\f]/g,W=/: */g,S=/zoo|gra/,E=/([,: ])(transform)/g,b=/,\r+?/g,D=/([\t\r\n ])*\f?&/g,x=/@(k\w+)\s*(\S*)\s*/,R=/::(place)/g,L=/:(read-only)/g,M=/[svh]\w+-[tblr]{2}/,ae=/\(\s*(.*)\s*\)/g,ce=/([\s\S]*?);/g,Q=/-self|flex-/g,ie=/[^]*?(:[rp][el]a[\w-]+)[^]*/,oe=/stretch|:\s*\w+\-(?:conte|avail)/,he=/([^-])(image-set\()/,V=1,K=1,ne=0,G=1,me=[],J=[],Z=0,ve=null,de=0,ye="";return C.use=y,C.set=g,e!==void 0&&g(e),C}var hi={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var pt=function(e,t){for(var i=[e[0]],n=0,s=t.length;n<s;n+=1)i.push(t[n],e[n+1]);return i},et=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!st.exports.typeOf(e)},ze=Object.freeze([]),ue=Object.freeze({});function Ae(e){return typeof e=="function"}function ft(e){return e.displayName||e.name||"Component"}function ct(e){return e&&typeof e.styledComponentId=="string"}var fe=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ht=typeof window!="undefined"&&"HTMLElement"in window,di=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1));function Ce(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(i.length>0?" Args: "+i.join(", "):""))}var pi=function(){function e(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}var t=e.prototype;return t.indexOfGroup=function(i){for(var n=0,s=0;s<i;s++)n+=this.groupSizes[s];return n},t.insertRules=function(i,n){if(i>=this.groupSizes.length){for(var s=this.groupSizes,a=s.length,o=a;i>=o;)(o<<=1)<0&&Ce(16,""+i);this.groupSizes=new Uint32Array(o),this.groupSizes.set(s),this.length=o;for(var d=a;d<o;d++)this.groupSizes[d]=0}for(var y=this.indexOfGroup(i+1),g=0,C=n.length;g<C;g++)this.tag.insertRule(y,n[g])&&(this.groupSizes[i]++,y++)},t.clearGroup=function(i){if(i<this.length){var n=this.groupSizes[i],s=this.indexOfGroup(i),a=s+n;this.groupSizes[i]=0;for(var o=s;o<a;o++)this.tag.deleteRule(s)}},t.getGroup=function(i){var n="";if(i>=this.length||this.groupSizes[i]===0)return n;for(var s=this.groupSizes[i],a=this.indexOfGroup(i),o=a+s,d=a;d<o;d++)n+=this.tag.getRule(d)+`/*!sc*/
`;return n},e}(),_e=new Map,De=new Map,xe=1,Ee=function(e){if(_e.has(e))return _e.get(e);for(;De.has(xe);)xe++;var t=xe++;return _e.set(e,t),De.set(t,e),t},fi=function(e){return De.get(e)},gi=function(e,t){t>=xe&&(xe=t+1),_e.set(e,t),De.set(t,e)},mi="style["+fe+'][data-styled-version="5.3.11"]',vi=new RegExp("^"+fe+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),yi=function(e,t,i){for(var n,s=i.split(","),a=0,o=s.length;a<o;a++)(n=s[a])&&e.registerName(t,n)},wi=function(e,t){for(var i=(t.textContent||"").split(`/*!sc*/
`),n=[],s=0,a=i.length;s<a;s++){var o=i[s].trim();if(o){var d=o.match(vi);if(d){var y=0|parseInt(d[1],10),g=d[2];y!==0&&(gi(g,y),yi(e,g,d[3]),e.getTag().insertRules(y,n)),n.length=0}else n.push(o)}}},bi=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null},Bt=function(e){var t=document.head,i=e||t,n=document.createElement("style"),s=function(d){for(var y=d.childNodes,g=y.length;g>=0;g--){var C=y[g];if(C&&C.nodeType===1&&C.hasAttribute(fe))return C}}(i),a=s!==void 0?s.nextSibling:null;n.setAttribute(fe,"active"),n.setAttribute("data-styled-version","5.3.11");var o=bi();return o&&n.setAttribute("nonce",o),i.insertBefore(n,a),n},xi=function(){function e(i){var n=this.element=Bt(i);n.appendChild(document.createTextNode("")),this.sheet=function(s){if(s.sheet)return s.sheet;for(var a=document.styleSheets,o=0,d=a.length;o<d;o++){var y=a[o];if(y.ownerNode===s)return y}Ce(17)}(n),this.length=0}var t=e.prototype;return t.insertRule=function(i,n){try{return this.sheet.insertRule(n,i),this.length++,!0}catch{return!1}},t.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},t.getRule=function(i){var n=this.sheet.cssRules[i];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),Ai=function(){function e(i){var n=this.element=Bt(i);this.nodes=n.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(i,n){if(i<=this.length&&i>=0){var s=document.createTextNode(n),a=this.nodes[i];return this.element.insertBefore(s,a||null),this.length++,!0}return!1},t.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},t.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},e}(),Ci=function(){function e(i){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(i,n){return i<=this.length&&(this.rules.splice(i,0,n),this.length++,!0)},t.deleteRule=function(i){this.rules.splice(i,1),this.length--},t.getRule=function(i){return i<this.length?this.rules[i]:""},e}(),gt=ht,Si={isServer:!ht,useCSSOMInjection:!di},kt=function(){function e(i,n,s){i===void 0&&(i=ue),n===void 0&&(n={}),this.options=se({},Si,{},i),this.gs=n,this.names=new Map(s),this.server=!!i.isServer,!this.server&&ht&&gt&&(gt=!1,function(a){for(var o=document.querySelectorAll(mi),d=0,y=o.length;d<y;d++){var g=o[d];g&&g.getAttribute(fe)!=="active"&&(wi(a,g),g.parentNode&&g.parentNode.removeChild(g))}}(this))}e.registerId=function(i){return Ee(i)};var t=e.prototype;return t.reconstructWithOptions=function(i,n){return n===void 0&&(n=!0),new e(se({},this.options,{},i),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},t.getTag=function(){return this.tag||(this.tag=(s=(n=this.options).isServer,a=n.useCSSOMInjection,o=n.target,i=s?new Ci(o):a?new xi(o):new Ai(o),new pi(i)));var i,n,s,a,o},t.hasNameForId=function(i,n){return this.names.has(i)&&this.names.get(i).has(n)},t.registerName=function(i,n){if(Ee(i),this.names.has(i))this.names.get(i).add(n);else{var s=new Set;s.add(n),this.names.set(i,s)}},t.insertRules=function(i,n,s){this.registerName(i,n),this.getTag().insertRules(Ee(i),s)},t.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},t.clearRules=function(i){this.getTag().clearGroup(Ee(i)),this.clearNames(i)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(i){for(var n=i.getTag(),s=n.length,a="",o=0;o<s;o++){var d=fi(o);if(d!==void 0){var y=i.names.get(d),g=n.getGroup(o);if(y&&g&&y.size){var C=fe+".g"+o+'[id="'+d+'"]',w="";y!==void 0&&y.forEach(function(O){O.length>0&&(w+=O+",")}),a+=""+g+C+'{content:"'+w+`"}/*!sc*/
`}}}return a}(this)},e}(),Ei=/(a)(d)/gi,mt=function(e){return String.fromCharCode(e+(e>25?39:97))};function tt(e){var t,i="";for(t=Math.abs(e);t>52;t=t/52|0)i=mt(t%52)+i;return(mt(t%52)+i).replace(Ei,"$1-$2")}var pe=function(e,t){for(var i=t.length;i;)e=33*e^t.charCodeAt(--i);return e},Ft=function(e){return pe(5381,e)};function Bi(e){for(var t=0;t<e.length;t+=1){var i=e[t];if(Ae(i)&&!ct(i))return!1}return!0}var ki=Ft("5.3.11"),Fi=function(){function e(t,i,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Bi(t),this.componentId=i,this.baseHash=pe(ki,i),this.baseStyle=n,kt.registerId(i)}return e.prototype.generateAndInjectStyles=function(t,i,n){var s=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,i,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&i.hasNameForId(s,this.staticRulesId))a.push(this.staticRulesId);else{var o=ge(this.rules,t,i,n).join(""),d=tt(pe(this.baseHash,o)>>>0);if(!i.hasNameForId(s,d)){var y=n(o,"."+d,void 0,s);i.insertRules(s,d,y)}a.push(d),this.staticRulesId=d}else{for(var g=this.rules.length,C=pe(this.baseHash,n.hash),w="",O=0;O<g;O++){var W=this.rules[O];if(typeof W=="string")w+=W;else if(W){var S=ge(W,t,i,n),E=Array.isArray(S)?S.join(""):S;C=pe(C,E+O),w+=E}}if(w){var b=tt(C>>>0);if(!i.hasNameForId(s,b)){var D=n(w,"."+b,void 0,s);i.insertRules(s,b,D)}a.push(b)}}return a.join(" ")},e}(),_i=/^\s*\/\/.*$/gm,zi=[":","[",".","#"];function Di(e){var t,i,n,s,a=e===void 0?ue:e,o=a.options,d=o===void 0?ue:o,y=a.plugins,g=y===void 0?ze:y,C=new ci(d),w=[],O=function(E){function b(D){if(D)try{E(D+"}")}catch{}}return function(D,x,R,L,M,ae,ce,Q,ie,oe){switch(D){case 1:if(ie===0&&x.charCodeAt(0)===64)return E(x+";"),"";break;case 2:if(Q===0)return x+"/*|*/";break;case 3:switch(Q){case 102:case 112:return E(R[0]+x),"";default:return x+(oe===0?"/*|*/":"")}case-2:x.split("/*|*/}").forEach(b)}}}(function(E){w.push(E)}),W=function(E,b,D){return b===0&&zi.indexOf(D[i.length])!==-1||D.match(s)?E:"."+t};function S(E,b,D,x){x===void 0&&(x="&");var R=E.replace(_i,""),L=b&&D?D+" "+b+" { "+R+" }":R;return t=x,i=b,n=new RegExp("\\"+i+"\\b","g"),s=new RegExp("(\\"+i+"\\b){2,}"),C(D||!b?"":b,L)}return C.use([].concat(g,[function(E,b,D){E===2&&D.length&&D[0].lastIndexOf(i)>0&&(D[0]=D[0].replace(n,W))},O,function(E){if(E===-2){var b=w;return w=[],b}}])),S.hash=g.length?g.reduce(function(E,b){return b.name||Ce(15),pe(E,b.name)},5381).toString():"",S}var _t=Le.createContext();_t.Consumer;var zt=Le.createContext(),Li=(zt.Consumer,new kt),it=Di();function Ii(){return P.exports.useContext(_t)||Li}function Mi(){return P.exports.useContext(zt)||it}var Dt=function(){function e(t,i){var n=this;this.inject=function(s,a){a===void 0&&(a=it);var o=n.name+a.hash;s.hasNameForId(n.id,o)||s.insertRules(n.id,o,a(n.rules,o,"@keyframes"))},this.toString=function(){return Ce(12,String(n.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=i}return e.prototype.getName=function(t){return t===void 0&&(t=it),this.name+t.hash},e}(),Ni=/([A-Z])/,Pi=/([A-Z])/g,Oi=/^ms-/,Ri=function(e){return"-"+e.toLowerCase()};function vt(e){return Ni.test(e)?e.replace(Pi,Ri).replace(Oi,"-ms-"):e}var yt=function(e){return e==null||e===!1||e===""};function ge(e,t,i,n){if(Array.isArray(e)){for(var s,a=[],o=0,d=e.length;o<d;o+=1)(s=ge(e[o],t,i,n))!==""&&(Array.isArray(s)?a.push.apply(a,s):a.push(s));return a}if(yt(e))return"";if(ct(e))return"."+e.styledComponentId;if(Ae(e)){if(typeof(g=e)!="function"||g.prototype&&g.prototype.isReactComponent||!t)return e;var y=e(t);return ge(y,t,i,n)}var g;return e instanceof Dt?i?(e.inject(i,n),e.getName(n)):e:et(e)?function C(w,O){var W,S,E=[];for(var b in w)w.hasOwnProperty(b)&&!yt(w[b])&&(Array.isArray(w[b])&&w[b].isCss||Ae(w[b])?E.push(vt(b)+":",w[b],";"):et(w[b])?E.push.apply(E,C(w[b],b)):E.push(vt(b)+": "+(W=b,(S=w[b])==null||typeof S=="boolean"||S===""?"":typeof S!="number"||S===0||W in hi||W.startsWith("--")?String(S).trim():S+"px")+";"));return O?[O+" {"].concat(E,["}"]):E}(e):e.toString()}var wt=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Lt(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return Ae(e)||et(e)?wt(ge(pt(ze,[e].concat(i)))):i.length===0&&e.length===1&&typeof e[0]=="string"?e:wt(ge(pt(e,i)))}var ji=function(e,t,i){return i===void 0&&(i=ue),e.theme!==i.theme&&e.theme||t||i.theme},$i=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yi=/(^-|-$)/g;function Ge(e){return e.replace($i,"-").replace(Yi,"")}var It=function(e){return tt(Ft(e)>>>0)};function Be(e){return typeof e=="string"&&!0}var nt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ti=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Wi(e,t,i){var n=e[i];nt(t)&&nt(n)?Mt(n,t):e[i]=t}function Mt(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];for(var s=0,a=i;s<a.length;s++){var o=a[s];if(nt(o))for(var d in o)Ti(d)&&Wi(e,o[d],d)}return e}var Nt=Le.createContext();Nt.Consumer;var Xe={};function Pt(e,t,i){var n=ct(e),s=!Be(e),a=t.attrs,o=a===void 0?ze:a,d=t.componentId,y=d===void 0?function(x,R){var L=typeof x!="string"?"sc":Ge(x);Xe[L]=(Xe[L]||0)+1;var M=L+"-"+It("5.3.11"+L+Xe[L]);return R?R+"-"+M:M}(t.displayName,t.parentComponentId):d,g=t.displayName,C=g===void 0?function(x){return Be(x)?"styled."+x:"Styled("+ft(x)+")"}(e):g,w=t.displayName&&t.componentId?Ge(t.displayName)+"-"+t.componentId:t.componentId||y,O=n&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,W=t.shouldForwardProp;n&&e.shouldForwardProp&&(W=t.shouldForwardProp?function(x,R,L){return e.shouldForwardProp(x,R,L)&&t.shouldForwardProp(x,R,L)}:e.shouldForwardProp);var S,E=new Fi(i,w,n?e.componentStyle:void 0),b=E.isStatic&&o.length===0,D=function(x,R){return function(L,M,ae,ce){var Q=L.attrs,ie=L.componentStyle,oe=L.defaultProps,he=L.foldedComponentIds,V=L.shouldForwardProp,K=L.styledComponentId,ne=L.target,G=function(m,r,B){m===void 0&&(m=ue);var l=se({},r,{theme:m}),I={};return B.forEach(function(k){var _,v,$,X=k;for(_ in Ae(X)&&(X=X(l)),X)l[_]=I[_]=_==="className"?(v=I[_],$=X[_],v&&$?v+" "+$:v||$):X[_]}),[l,I]}(ji(M,P.exports.useContext(Nt),oe)||ue,M,Q),me=G[0],J=G[1],Z=function(m,r,B,l){var I=Ii(),k=Mi(),_=r?m.generateAndInjectStyles(ue,I,k):m.generateAndInjectStyles(B,I,k);return _}(ie,ce,me),ve=ae,de=J.$as||M.$as||J.as||M.as||ne,ye=Be(de),h=J!==M?se({},M,{},J):M,u={};for(var c in h)c[0]!=="$"&&c!=="as"&&(c==="forwardedAs"?u.as=h[c]:(V?V(c,dt,de):!ye||dt(c))&&(u[c]=h[c]));return M.style&&J.style!==M.style&&(u.style=se({},M.style,{},J.style)),u.className=Array.prototype.concat(he,K,Z!==K?Z:null,M.className,J.className).filter(Boolean).join(" "),u.ref=ve,P.exports.createElement(de,u)}(S,x,R,b)};return D.displayName=C,(S=Le.forwardRef(D)).attrs=O,S.componentStyle=E,S.displayName=C,S.shouldForwardProp=W,S.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ze,S.styledComponentId=w,S.target=n?e.target:e,S.withComponent=function(x){var R=t.componentId,L=function(ae,ce){if(ae==null)return{};var Q,ie,oe={},he=Object.keys(ae);for(ie=0;ie<he.length;ie++)Q=he[ie],ce.indexOf(Q)>=0||(oe[Q]=ae[Q]);return oe}(t,["componentId"]),M=R&&R+"-"+(Be(x)?x:Ge(ft(x)));return Pt(x,se({},L,{attrs:O,componentId:M}),i)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=n?Mt({},e.defaultProps,x):x}}),Object.defineProperty(S,"toString",{value:function(){return"."+S.styledComponentId}}),s&&jt(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var rt=function(e){return function t(i,n,s){if(s===void 0&&(s=ue),!st.exports.isValidElementType(n))return Ce(1,String(n));var a=function(){return i(n,s,Lt.apply(void 0,arguments))};return a.withConfig=function(o){return t(i,n,se({},s,{},o))},a.attrs=function(o){return t(i,n,se({},s,{attrs:Array.prototype.concat(s.attrs,o).filter(Boolean)}))},a}(Pt,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){rt[e]=rt(e)});function Hi(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];var s=Lt.apply(void 0,[e].concat(i)).join(""),a=It(s);return new Dt(a,s)}var te=rt;const Ve=te.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
`,Ue=te.h4`
  font-size: 40px;
  margin-bottom: 20px;
    line-height: 1.2;
`,Qe=te.h5`
  color: #07b53b;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;

  line-height: 1.56;
`,Ze=te.p`margin-bottom: 60px;
font-size: 18px;`;const qe=U`
  display: flex;
  height: 100vh;
  padding: 50px 0;
  &:nth-of-type(1) img,
  &:nth-of-type(3) img{

    object-position: right;
  }
`,Ke=U`
  width: 50%;
  padding: 0 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`,Je=U`
  width: 50%;
`;function Gi(){return j("div",{id:"view2",children:[j("section",{className:qe,children:[j("div",{className:Ke,children:[p(Ue,{children:"LINE TODAY"}),p(Qe,{children:"\u96A8\u9EDE\u96A8\u770B \u751F\u6D3B\u5FEB\u5145"}),p(Ze,{children:"\u6700\u5373\u6642\u7684\u65B0\u805E\u3001\u5F71\u97F3\u3001\u904B\u52D5\u8CFD\u4E8B\u548C\u5A1B\u6A02\u5167\u5BB9\u76F4\u64AD\uFF0C\u8B93\u4F60\u8A71\u984C\u6C38\u4E0D\u65B7\u7DDA\uFF0CLINE TODAY\u966A\u4F34\u60A8\u7684\u6BCF\u4E00\u5929\uFF01"})]}),p("div",{className:Je,children:p(Ve,{src:oi})})]}),j("section",{className:qe,children:[p("div",{className:Je,children:p(Ve,{src:li})}),j("div",{className:Ke,children:[p(Ue,{children:"LINE VOOM"}),p(Qe,{children:"\u6A02\u8DA3\u8D85\u9023\u7D50"}),p(Ze,{children:"\u8FFD\u8E64\u6700\u611B\u5275\u4F5C\u5BA2\u3001\u7CBE\u5F69\u5F71\u97F3\u96A8\u6642\u770B \u5206\u4EAB\u751F\u6D3B\u5927\u5C0F\u4E8B\u3001\u71B1\u9580\u8A71\u984C\u4E0D\u932F\u904E\uFF01"})]})]}),j("section",{className:qe,children:[j("div",{className:Ke,children:[p(Ue,{children:"LINE Pay"}),p(Qe,{children:"\u4ED8\u6B3E\u3001\u8F49\u5E33\u3001\u751F\u6D3B\u7E73\u8CBB\uFF0C\u8F15\u9B06\u7C21\u55AE\u53C8\u4FBF\u5229\uFF01"}),p(Ze,{children:"\u4ED8\u6B3E\u7C21\u55AE\u53C8\u4FBF\u5229\uFF0C\u9084\u80FD\u8F15\u9B06\u8F49\u5E33\u7D66LINE\u597D\u53CB\uFF0C\u52D5\u52D5\u624B\u6307\u8F15\u9B06\u5B8C\u6210\u65E5\u5E38\u751F\u6D3B\u5404\u7A2E\u5E33\u55AE\u7E73\u8CBB\uFF0C \u514D\u51FA\u9580\u7701\u6642\u53C8\u7701\u529B\u3002"})]}),p("div",{className:Je,children:p(Ve,{src:ui})})]})]})}class re{constructor(t,i={}){if(!(t instanceof Node))throw"Can't initialize VanillaTilt because "+t+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=t,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.resetToStart=re.isSettingTrue(this.settings["reset-to-start"]),this.glare=re.isSettingTrue(this.settings.glare),this.glarePrerender=re.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=re.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=re.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.resetToStart===!1&&(this.settings.startX=0,this.settings.startY=0)}static isSettingTrue(t){return t===""||t===!0||t===1}getElementListener(){if(this.fullPageListening)return window.document;if(typeof this.settings["mouse-event-element"]=="string"){const t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(t){if(t.gamma===null||t.beta===null)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,this.gammazero===null?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const i=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,n=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,s=i/this.width,a=n/this.height,o=t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),d=t.beta-(this.settings.gyroscopeMinAngleY+this.betazero),y=o/s,g=d/a;this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event={clientX:y+this.left,clientY:g+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let t,i;this.fullPageListening?(t=this.event.clientX/this.clientWidth,i=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,i=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),i=Math.min(Math.max(i,0),1);let n=(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),s=(this.reverse*(i*this.settings.max*2-this.settings.max)).toFixed(2),a=Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI);return{tiltX:n,tiltY:s,percentageX:t*100,percentageY:i*100,angle:a}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+(this.settings.axis==="x"?0:t.tiltY)+"deg) rotateY("+(this.settings.axis==="y"?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${t.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const t=document.createElement("div");t.classList.add("js-tilt-glare");const i=document.createElement("div");i.classList.add("js-tilt-glare-inner"),t.appendChild(i),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),!this.glarePrerender&&(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none","border-radius":"inherit"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}updateGlareSize(){if(this.glare){const t=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:`${t}px`,height:`${t}px`})}}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let i={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,"reset-to-start":!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},n={};for(var s in i)if(s in t)n[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){let a=this.element.getAttribute("data-tilt-"+s);try{n[s]=JSON.parse(a)}catch{n[s]=a}}else n[s]=i[s];return n}static init(t,i){t instanceof Node&&(t=[t]),t instanceof NodeList&&(t=[].slice.call(t)),t instanceof Array&&t.forEach(n=>{"vanillaTilt"in n||(n.vanillaTilt=new re(n,i))})}}typeof document!="undefined"&&(window.VanillaTilt=re,re.init(document.querySelectorAll("[data-tilt]")));function Xi({options:e,children:t,...i}={options:{scale:1.2,speed:1e3,max:30}}){const n=P.exports.useRef(null);return P.exports.useEffect(()=>{n.current&&re.init(n.current,e)},[e]),p("div",{ref:n,...i,children:t})}const Vi=Hi`
  from{
    transform:rotateZ(0deg) translateX(-50%) translateY(-50%);
  }
  to {
    transform: rotateZ(360deg) translateX(-50%) translateY(-50%);
  }
`,Ui=te.h4`
  font-size: 60px;
  padding: 0 16px;
  line-height: 1.334;
  text-align: center;
  margin-bottom: 60px;
`,Qi=te.button`
  color: #fff;
  padding: 10px 20px;
  background-color: rgb(7, 181, 59);
  border: none;
  border-radius: 5px;
  :is(:hover, :focus) {
    outline: dashed rgb(7, 181, 59);
    outline-offset: 5px;
    cursor: pointer;
  }

  position: relative;
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 300%;
    top: -100%;
    left: -130%;
    background-color: #fff;
    opacity: 0.3;
    transform: rotate(-45deg);
    transition: left 0.2s ease-in;
  }

  :hover::after {
    left: 130%;
  }
`,Zi=te.div`
  display: grid;
  padding: 5%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
`,qi=te.div`
  background-color: #07182e;
  padding-bottom: 133%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  ::after {
    content: "";
    position: absolute;
    background-size: cover;
    background-image: url(${e=>e.url});
    inset: 5px;
    border-radius: 3px;
  }

  :hover {
    cursor: pointer;
    ::before {
      transform-origin: top;
      content: "";
      position: absolute;
      background-image: linear-gradient(
        180deg,
        rgb(0, 183, 255),
        rgb(255, 48, 255)
      );
      width: 30%;
      height: 150%;
      left: 50%;
      top: 50%;
      animation: ${Vi} 3s linear infinite;
      transition: all 0.2s linear;
    }
    ::after{
      filter: brightness(0.5) drop-shadow(3px 3px 10px #aaa) grayscale(0.5);
    }
  }
`,Ki=te.p`
  margin-bottom: 12px;
  font-size: 18px;
`,Ji=["https://upload.wikimedia.org/wikipedia/zh/thumb/b/b5/Wonder_Woman_2017_Poster.jpg/220px-Wonder_Woman_2017_Poster.jpg","https://pic.pimg.tw/dos19891120/1366810678-3504669638_wn.jpg","https://upload.wikimedia.org/wikipedia/zh/thumb/1/13/Batman_v_Superman_poster.jpeg/220px-Batman_v_Superman_poster.jpeg","https://file.xdf.cn/uploads/180906/230_1809061153207UjUyqouUC5ikVwe.png","https://upload.wikimedia.org/wikipedia/zh/thumb/2/27/The_SpongeBob_Movie_Sponge_on_the_Run_poster.jpg/220px-The_SpongeBob_Movie_Sponge_on_the_Run_poster.jpg"],en=U`
text-align: center;
 background-color: rgba(100,100,100,.1);
 min-height: 100vh;
 margin-top: 140px;
 padding-top: 180px;
`;function tn(){return j("div",{className:en,children:[p(Ui,{children:"\u901A\u8A0A\u8EDF\u9AD4"}),p(Ki,{children:"\u4E00\u6B3E\u5168\u65B0\u578B\u614B\u7684\u901A\u8A0A\u8EDF\u9AD4\uFF0C\u8B93\u60A8\u96A8\u6642\u96A8\u5730\u4EAB\u53D7\u514D\u8CBB\u50B3\u8A0A\u3001\u514D\u8CBB\u901A\u8A71\u7B49\u6E9D\u901A\u6A02\u8DA3\u3002"}),p(Qi,{children:"Download"}),p(Zi,{children:Ji.map((e,t)=>p(Xi,{children:p(qi,{url:e})},t))})]})}const nn=te.div`
  height: 100vh;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  background-size: cover;
  background-image: url(https://static.bg3.co/imgs/202107/68fcac002d9178d7678d64f3711cddf0.jpg);
  ::-webkit-scrollbar {
    display: none;
  }
`,rn=te.div`
  height: 100%;
  width: 100%;
  scroll-snap-align: start; /* 物件在捲動時，捲動停止的位置 */
  scroll-snap-stop: always;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  ::after{
    content:'The Avengers:${e=>e.index}';
    display: flex;
    width: 70%;
    height: 50%;
    background-size: cover;
    position: absolute;
    border: 20px solid #000;
    background-image: url(${e=>e.url});

    font-size: 60px; 
    color:#fefefe;  
    text-shadow:0px 1px 0px #c0c0c0,    
    0px 2px 0px #b0b0b0,    
    0px 3px 0px #a0a0a0,    
    0px 4px 0px #909090,    
    0px 5px 10px rgba(0, 0, 0, .9);
    align-items: center;
    justify-content: center;
    letter-spacing: 4px;
  }
`;function sn(){const e=P.exports.useRef(null);return p(nn,{ref:e,onWheel:n=>{if(e.current!==null){const s=e.current,a=s.scrollLeft,o=s.clientWidth,d=s.scrollWidth,y=a+o>=d;n.deltaY>0&&!y?e.current.scrollLeft+=window.innerWidth:n.deltaY<0&&a>0?e.current.scrollLeft-=window.innerWidth:n.deltaY<0&&a<=0&&(e.current.scrollLeft=0)}},children:["https://img.toy-people.com/member/161606930670.gif","https://media.giphy.com/media/UJ5I7921pAOEU/giphy.gif","https://img.soogif.com/I3ww3lMBHXCzMng0Ciw0Mih5HmmFHPXE.gif","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tumblr-p06q1lnunh1tctq75o4-540-1556367366.gif"].map((n,s)=>p(rn,{url:n,index:s+1,children:"Test"},s))})}function un(){const e=Tt();return P.exports.useEffect(()=>{console.log(e.get("search"))},[e]),j("div",{className:"Line",children:[p(ai,{}),p(Gi,{}),p(tn,{}),p(sn,{})]})}export{un as default};
