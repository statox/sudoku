import{s as Tt,f as d,a as v,l as $,e as ht,g,h as tt,H as S,c as C,d as _,m as et,j as mt,i as k,I as f,y as x,n as dt,K as Et,C as Ut,G as Bt}from"../chunks/scheduler.193db7c4.js";import{S as St,i as xt,t as O,c as gt,a as y,b as st,d as ot,m as nt,e as lt,g as vt}from"../chunks/index.9bea933b.js";import{a as Ct}from"../chunks/store.8b4149bb.js";import{d as H,j as rt,b as Ot,e as It,k as at,S as Gt,a as F,G as At,u as Mt,r as Vt}from"../chunks/GridStatus.856a054a.js";import{g as bt}from"../chunks/game.d7b8a9e3.js";const jt=(o,l)=>{const e=H(o);if(rt(e),Ot(e))throw new Error("cant solve a grid with errors");let t=100;for(;!It(e)&&t--;){const s=at(e)[0];if(!s)throw new Error("no hint found and grid is not valid");qt(e,s,l)}return e},qt=(o,l,e)=>{if(l.type==="lone_single"){const t=l.cause.pop();o[t.row][t.col].value=t.notes[0],e.push(H(o)),kt(o,e),rt(o),e.push(H(o));return}if(["hidden_single_row","hidden_single_col","hidden_single_square"].includes(l.type)){const t=l.cause.pop();o[t.row][t.col].notes=t.notes,e.push(H(o)),kt(o,e),rt(o),e.push(H(o));return}},kt=(o,l)=>{let e=!1;for(let t=0;t<9;t++)for(let r=0;r<9;r++)o[t][r].value===void 0&&o[t][r].notes.length===1&&(o[t][r].value=o[t][r].notes.pop(),e=!0,l.push(H(o)));return e};function wt(o,l,e){const t=o.slice();return t[11]=l[e],t}function yt(o){let l,e,t,r;return l=new Gt({props:{gridErrors:F(o[0]),grid:o[0]}}),l.$on("cellUpdate",o[3]),t=new At({props:{grid:o[0]}}),{c(){st(l.$$.fragment),e=v(),st(t.$$.fragment)},l(s){ot(l.$$.fragment,s),e=C(s),ot(t.$$.fragment,s)},m(s,h){nt(l,s,h),k(s,e,h),nt(t,s,h),r=!0},p(s,h){const w={};h&1&&(w.gridErrors=F(s[0])),h&1&&(w.grid=s[0]),l.$set(w);const m={};h&1&&(m.grid=s[0]),t.$set(m)},i(s){r||(y(l.$$.fragment,s),y(t.$$.fragment,s),r=!0)},o(s){O(l.$$.fragment,s),O(t.$$.fragment,s),r=!1},d(s){s&&_(e),lt(l,s),lt(t,s)}}}function Ht(o){let l,e;return l=new Gt({props:{gridErrors:F(o[11]),hints:at(o[11]),grid:o[11]}}),{c(){st(l.$$.fragment)},l(t){ot(l.$$.fragment,t)},m(t,r){nt(l,t,r),e=!0},p(t,r){const s={};r&2&&(s.gridErrors=F(t[11])),r&2&&(s.hints=at(t[11])),r&2&&(s.grid=t[11]),l.$set(s)},i(t){e||(y(l.$$.fragment,t),e=!0)},o(t){O(l.$$.fragment,t),e=!1},d(t){lt(l,t)}}}function Lt(o){let l,e,t="New grid",r,s,h="Reset grid",w,m,R="Solve grid",V,j,q,c,b,it="First step",K,T,ut="Prev step",J,G,ft="Next step",Q,N,ct="Last step",W,E,P,X,L=Math.max(o[1].length-1,0)+"",z,D,pt=o[0],I,A,M,Y,_t,p=yt(o),U=Ct(o[1]),u=[];for(let n=0;n<U.length;n+=1)u[n]=Ht(wt(o,U,n));const Nt=n=>O(u[n],1,1,()=>{u[n]=null});return{c(){l=d("div"),e=d("button"),e.textContent=t,r=v(),s=d("button"),s.textContent=h,w=v(),m=d("button"),m.textContent=R,V=v(),j=d("br"),q=v(),c=d("div"),b=d("button"),b.textContent=it,K=v(),T=d("button"),T.textContent=ut,J=v(),G=d("button"),G.textContent=ft,Q=v(),N=d("button"),N.textContent=ct,W=v(),E=d("span"),P=$(o[2]),X=$(" / "),z=$(L),D=v(),p.c(),I=v();for(let n=0;n<u.length;n+=1)u[n].c();A=ht(),this.h()},l(n){l=g(n,"DIV",{class:!0});var a=tt(l);e=g(a,"BUTTON",{"data-svelte-h":!0}),S(e)!=="svelte-6qwice"&&(e.textContent=t),r=C(a),s=g(a,"BUTTON",{"data-svelte-h":!0}),S(s)!=="svelte-hdh8ow"&&(s.textContent=h),w=C(a),m=g(a,"BUTTON",{"data-svelte-h":!0}),S(m)!=="svelte-dp4mj8"&&(m.textContent=R),a.forEach(_),V=C(n),j=g(n,"BR",{}),q=C(n),c=g(n,"DIV",{class:!0});var i=tt(c);b=g(i,"BUTTON",{"data-svelte-h":!0}),S(b)!=="svelte-1f64wvg"&&(b.textContent=it),K=C(i),T=g(i,"BUTTON",{"data-svelte-h":!0}),S(T)!=="svelte-gs2lf6"&&(T.textContent=ut),J=C(i),G=g(i,"BUTTON",{"data-svelte-h":!0}),S(G)!=="svelte-67enom"&&(G.textContent=ft),Q=C(i),N=g(i,"BUTTON",{"data-svelte-h":!0}),S(N)!=="svelte-ul0sbo"&&(N.textContent=ct),W=C(i),E=g(i,"SPAN",{});var B=tt(E);P=et(B,o[2]),X=et(B," / "),z=et(B,L),B.forEach(_),i.forEach(_),D=C(n),p.l(n),I=C(n);for(let Z=0;Z<u.length;Z+=1)u[Z].l(n);A=ht(),this.h()},h(){mt(l,"class","grid-controls svelte-1uoh36i"),mt(c,"class","history-controls svelte-1uoh36i")},m(n,a){k(n,l,a),f(l,e),f(l,r),f(l,s),f(l,w),f(l,m),k(n,V,a),k(n,j,a),k(n,q,a),k(n,c,a),f(c,b),f(c,K),f(c,T),f(c,J),f(c,G),f(c,Q),f(c,N),f(c,W),f(c,E),f(E,P),f(E,X),f(E,z),k(n,D,a),p.m(n,a),k(n,I,a);for(let i=0;i<u.length;i+=1)u[i]&&u[i].m(n,a);k(n,A,a),M=!0,Y||(_t=[x(e,"click",o[4]),x(s,"click",o[5]),x(m,"click",o[6]),x(b,"click",o[7]),x(T,"click",o[10]),x(G,"click",o[9]),x(N,"click",o[8])],Y=!0)},p(n,[a]){if((!M||a&4)&&dt(P,n[2]),(!M||a&2)&&L!==(L=Math.max(n[1].length-1,0)+"")&&dt(z,L),a&1&&Tt(pt,pt=n[0])?(vt(),O(p,1,1,Bt),gt(),p=yt(n),p.c(),y(p,1),p.m(I.parentNode,I)):p.p(n,a),a&2){U=Ct(n[1]);let i;for(i=0;i<U.length;i+=1){const B=wt(n,U,i);u[i]?(u[i].p(B,a),y(u[i],1)):(u[i]=Ht(B),u[i].c(),y(u[i],1),u[i].m(A.parentNode,A))}for(vt(),i=U.length;i<u.length;i+=1)Nt(i);gt()}},i(n){if(!M){y(p);for(let a=0;a<U.length;a+=1)y(u[a]);M=!0}},o(n){O(p),u=u.filter(Boolean);for(let a=0;a<u.length;a+=1)O(u[a]);M=!1},d(n){n&&(_(l),_(V),_(j),_(q),_(c),_(D),_(I),_(A)),p.d(n),Et(u,n),Y=!1,Ut(_t)}}}function Pt(o,l,e){let t=bt(),r=[],s=0;return[t,r,s,b=>{Mt(b.detail.cell,b.detail.update),e(0,t)},()=>{e(0,t=bt()),e(1,r=[H(t)]),e(2,s=0)},()=>{Vt(t),e(1,r=[H(t)]),e(2,s=0),e(0,t)},()=>{e(0,t=jt(t,r)),e(1,r),e(2,s=r.length-1)},()=>{e(2,s=0),e(0,t=r[s])},()=>{e(2,s=r.length-1),e(0,t=r[s])},()=>{e(2,s=Math.min(s+1,r.length-1)),e(0,t=r[s])},()=>{e(2,s=Math.max(s-1,0)),e(0,t=r[s])}]}class Jt extends St{constructor(l){super(),xt(this,l,Pt,Lt,Tt,{})}}export{Jt as component};
