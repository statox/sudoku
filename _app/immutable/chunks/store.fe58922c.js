import{t as q,a as z}from"./index.8ab45ecd.js";import{C as D,P as u}from"./scheduler.71239b2e.js";import{w as y}from"./index.7ccf2c6d.js";function K(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function N(e,t){q(e,1,1,()=>{t.delete(e.key)})}function O(e,t,n,f,w,k,d,L,S,P,M,j){let i=e.length,o=k.length,c=i;const b={};for(;c--;)b[e[c].key]=c;const g=[],x=new Map,B=new Map,_=[];for(c=o;c--;){const s=j(w,k,c),l=n(s);let a=d.get(l);a?f&&_.push(()=>a.p(s,t)):(a=P(l,s),a.c()),x.set(l,g[c]=a),l in b&&B.set(l,Math.abs(c-b[l]))}const v=new Set,A=new Set;function C(s){z(s,1),s.m(L,M),d.set(s.key,s),M=s.first,o--}for(;i&&o;){const s=g[o-1],l=e[i-1],a=s.key,m=l.key;s===l?(M=s.first,i--,o--):x.has(m)?!d.has(a)||v.has(a)?C(s):A.has(m)?i--:B.get(a)>B.get(m)?(A.add(a),C(s)):(v.add(m),i--):(S(l,d),i--)}for(;i--;){const s=e[i];x.has(s.key)||S(s,d)}for(;o;)C(g[o-1]);return D(_),g}const p=y(!1),r=y(null),h=y([]),E=y(null);function F(e=1){var f,w;const t=u(h).length,n=u(h)[t-1];return u(r)||(f=n==null?void 0:n.callbacks)!=null&&f.onBeforeClose&&((w=n==null?void 0:n.callbacks)==null?void 0:w.onBeforeClose())===!1?!1:(u(p)&&t>0&&r.set(!0),p.set(!1),E.set("pop"),G(e),!0)}function Q(){return F(1)}function R(e,t,n){u(r)||(E.set("push"),u(p)&&u(h).length&&r.set(!0),p.set(!1),n!=null&&n.replace?h.update(f=>[...f.slice(0,f.length-1),{component:e,props:t}]):h.update(f=>[...f,{component:e,props:t}]))}function G(e=1){h.update(t=>t.slice(0,Math.max(0,t.length-e)))}export{K as a,Q as b,F as c,R as d,p as e,h as m,N as o,r as t,O as u};