function C(){}function P(t,n){for(const e in n)t[e]=n[e];return t}function J(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function B(t){return t()}function K(){return Object.create(null)}function L(t){t.forEach(B)}function Q(t){return typeof t=="function"}function R(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function V(t){return Object.keys(t).length===0}function w(t,...n){if(t==null){for(const i of n)i(void 0);return C}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function X(t){let n;return w(t,e=>n=e)(),n}function Y(t,n,e){t.$$.on_destroy.push(w(n,e))}function Z(t,n,e,i){if(t){const c=N(t,n,e,i);return t[0](c)}}function N(t,n,e,i){return t[1]&&i?P(e.ctx.slice(),t[1](i(n))):e.ctx}function $(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const o=[],l=Math.max(n.dirty.length,c.length);for(let s=0;s<l;s+=1)o[s]=n.dirty[s]|c[s];return o}return n.dirty|c}return n.dirty}function tt(t,n,e,i,c,o){if(c){const l=N(n,e,i,o);t.p(l,c)}}function nt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function et(t){return t??""}function it(t,n,e){return t.set(e),n}let m=!1;function ct(){m=!0}function lt(){m=!1}function M(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function O(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:M(1,c,S=>n[e[S]].claim_order,u))-1;i[r]=e[a]+1;const v=a+1;e[v]=r,c=Math.max(v,c)}const o=[],l=[];let s=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(o.push(n[r-1]);s>=r;s--)l.push(n[s]);s--}for(;s>=0;s--)l.push(n[s]);o.reverse(),l.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<l.length;r++){for(;u<o.length&&l[r].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(l[r],a)}}function T(t,n){if(m){for(O(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function rt(t,n,e){m&&!e?T(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function st(t){t.parentNode&&t.parentNode.removeChild(t)}function ot(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function q(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function ut(){return g(" ")}function at(){return g("")}function ft(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function _t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function dt(t){return t.dataset.svelteH}function ht(t){return Array.from(t.childNodes)}function D(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,n,e,i,c=!1){D(t);const o=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(n(s)){const r=e(s);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(n(s)){const r=e(s);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function H(t,n,e,i){return j(t,c=>c.nodeName===n,c=>{const o=[];for(let l=0;l<c.attributes.length;l++){const s=c.attributes[l];e[s.name]||o.push(s.name)}o.forEach(l=>c.removeAttribute(l))},()=>i(n))}function mt(t,n,e){return H(t,n,e,q)}function I(t,n){return j(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>g(n),!0)}function pt(t){return I(t," ")}function bt(t,n){n=""+n,t.data!==n&&(t.data=n)}function yt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function gt(t,n,e){t.classList.toggle(n,!!e)}function z(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function xt(t,n){return new t(n)}let h;function p(t){h=t}function x(){if(!h)throw new Error("Function called outside component initialization");return h}function vt(t){x().$$.on_mount.push(t)}function kt(t){x().$$.after_update.push(t)}function Et(){const t=x();return(n,e,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[n];if(c){const o=z(n,e,{cancelable:i});return c.slice().forEach(l=>{l.call(t,o)}),!o.defaultPrevented}return!0}}function wt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],k=[];let _=[];const E=[],A=Promise.resolve();let y=!1;function F(){y||(y=!0,A.then(W))}function Nt(){return F(),A}function U(t){_.push(t)}const b=new Set;let f=0;function W(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const n=d[f];f++,p(n),G(n.$$)}}catch(n){throw d.length=0,f=0,n}for(p(null),d.length=0,f=0;k.length;)k.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(d.length);for(;E.length;)E.pop()();y=!1,b.clear(),p(t)}function G(t){if(t.fragment!==null){t.update(),L(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(U)}}function jt(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{nt as A,$ as B,L as C,Y as D,it as E,P as F,C as G,dt as H,T as I,gt as J,ot as K,Q as L,Et as M,et as N,wt as O,X as P,K as Q,V as R,U as S,jt as T,h as U,B as V,d as W,F as X,ct as Y,lt as Z,ut as a,kt as b,pt as c,st as d,at as e,q as f,mt as g,ht as h,rt as i,_t as j,yt as k,g as l,I as m,bt as n,vt as o,k as p,xt as q,J as r,R as s,Nt as t,x as u,p as v,W as w,Z as x,ft as y,tt as z};
