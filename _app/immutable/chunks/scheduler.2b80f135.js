var q=Object.defineProperty;var B=(t,n,e)=>n in t?q(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>(B(t,typeof n!="symbol"?n+"":n,e),e);function O(){}function G(t,n){for(const e in n)t[e]=n[e];return t}function it(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function R(t){return t()}function ct(){return Object.create(null)}function z(t){t.forEach(R)}function st(t){return typeof t=="function"}function rt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let p;function lt(t,n){return t===n?!0:(p||(p=document.createElement("a")),p.href=n,t===p.href)}function ot(t){return Object.keys(t).length===0}function L(t,...n){if(t==null){for(const i of n)i(void 0);return O}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ut(t){let n;return L(t,e=>n=e)(),n}function at(t,n,e){t.$$.on_destroy.push(L(n,e))}function ft(t,n,e,i){if(t){const c=M(t,n,e,i);return t[0](c)}}function M(t,n,e,i){return t[1]&&i?G(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],s=Math.max(n.dirty.length,c.length);for(let o=0;o<s;o+=1)l[o]=n.dirty[o]|c[o];return l}return n.dirty|c}return n.dirty}function ht(t,n,e,i,c,l){if(c){const s=M(n,e,i,l);t.p(s,c)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function pt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function yt(t,n,e){return t.set(e),n}let b=!1;function bt(){b=!0}function gt(){b=!1}function F(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function I(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:F(1,c,P=>n[e[P]].claim_order,u))-1;i[r]=e[a]+1;const v=a+1;e[v]=r,c=Math.max(v,c)}const l=[],s=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);o>=r;o--)s.push(n[o]);o--}for(;o>=0;o--)s.push(n[o]);l.reverse(),s.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<s.length;r++){for(;u<l.length&&s[r].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(s[r],a)}}function U(t,n){if(b){for(I(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function W(t,n,e){t.insertBefore(n,e||null)}function J(t,n,e){b&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function S(t){return document.createElement(t)}function K(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function Et(){return N(" ")}function Tt(){return N("")}function Nt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function vt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function wt(t){return t.dataset.svelteH}function At(t){return Array.from(t.childNodes)}function j(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,n,e,i,c=!1){j(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(n(o)){const r=e(o);return r===void 0?t.splice(s,1):t[s]=r,c||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(n(o)){const r=e(o);return r===void 0?t.splice(s,1):t[s]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Q(t,n,e,i){return C(t,c=>c.nodeName===n,c=>{const l=[];for(let s=0;s<c.attributes.length;s++){const o=c.attributes[s];e[o.name]||l.push(o.name)}l.forEach(s=>c.removeAttribute(s))},()=>i(n))}function kt(t,n,e){return Q(t,n,e,S)}function V(t,n){return C(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function Ht(t){return V(t," ")}function w(t,n,e){for(let i=e;i<t.length;i+=1){const c=t[i];if(c.nodeType===8&&c.textContent.trim()===n)return i}return-1}function Lt(t,n){const e=w(t,"HTML_TAG_START",0),i=w(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new A(n);j(t);const c=t.splice(e,i-e+1);E(c[0]),E(c[c.length-1]);const l=c.slice(1,c.length-1);for(const s of l)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new A(n,l)}function Mt(t,n){n=""+n,t.data!==n&&(t.data=n)}function St(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function jt(t,n,e){t.classList.toggle(n,!!e)}function X(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function Ct(t,n){const e=[];let i=0;for(const c of n.childNodes)if(c.nodeType===8){const l=c.textContent.trim();l===`HEAD_${t}_END`?(i-=1,e.push(c)):l===`HEAD_${t}_START`&&(i+=1,e.push(c))}else i>0&&e.push(c);return e}class Y{constructor(n=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=K(e.nodeName):this.e=S(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)W(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(E)}}class A extends Y{constructor(e=!1,i){super(e);f(this,"l");this.e=this.n=null,this.l=i}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let i=0;i<this.n.length;i+=1)J(this.t,this.n[i],e)}}function Dt(t,n){return new t(n)}let y;function g(t){y=t}function d(){if(!y)throw new Error("Function called outside component initialization");return y}function Pt(t){d().$$.on_mount.push(t)}function qt(t){d().$$.after_update.push(t)}function Bt(t){d().$$.on_destroy.push(t)}function Ot(){const t=d();return(n,e,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[n];if(c){const l=X(n,e,{cancelable:i});return c.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function Gt(t,n){return d().$$.context.set(t,n),n}function Rt(t){return d().$$.context.get(t)}function zt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const m=[],k=[];let h=[];const H=[],D=Promise.resolve();let T=!1;function Z(){T||(T=!0,D.then(tt))}function Ft(){return Z(),D}function $(t){h.push(t)}const x=new Set;let _=0;function tt(){if(_!==0)return;const t=y;do{try{for(;_<m.length;){const n=m[_];_++,g(n),nt(n.$$)}}catch(n){throw m.length=0,_=0,n}for(g(null),m.length=0,_=0;k.length;)k.pop()();for(let n=0;n<h.length;n+=1){const e=h[n];x.has(e)||(x.add(e),e())}h.length=0}while(m.length);for(;H.length;)H.pop()();T=!1,x.clear(),g(t)}function nt(t){if(t.fragment!==null){t.update(),z(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach($)}}function It(t){const n=[],e=[];h.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),h=n}export{It as $,dt as A,_t as B,z as C,at as D,yt as E,G as F,O as G,wt as H,U as I,Gt as J,Bt as K,jt as L,Rt as M,xt as N,Ot as O,zt as P,pt as Q,mt as R,lt as S,A as T,Lt as U,Ct as V,ut as W,ct as X,st as Y,ot as Z,$ as _,Et as a,y as a0,R as a1,m as a2,Z as a3,bt as a4,gt as a5,qt as b,Ht as c,E as d,Tt as e,S as f,kt as g,At as h,J as i,vt as j,St as k,N as l,V as m,Mt as n,Pt as o,k as p,Dt as q,it as r,rt as s,Ft as t,d as u,g as v,tt as w,ft as x,Nt as y,ht as z};
