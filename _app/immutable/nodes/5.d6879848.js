import{s as Gt,f as d,a as C,l as tt,e as mt,g,h as et,H as B,c as v,d as _,m as st,j as _t,i as y,I as f,y as S,n as ht,K as Ut,C as xt,G as Bt}from"../chunks/scheduler.193db7c4.js";import{S as St,i as Et,t as E,c as dt,a as T,b as nt,d as ot,m as lt,e as rt,g as gt}from"../chunks/index.9bea933b.js";import{a as Ct}from"../chunks/store.8b4149bb.js";import{d as j,e as vt,f as F,S as Ht,g as R,G as Ot,u as It,a as At}from"../chunks/GridStatus.3ef50f87.js";import{g as bt}from"../chunks/game.92402405.js";const Nt=(l,n)=>{const e=j(l);vt(e);let t=F(e);for(const r of t)Mt(e,r,n),Vt(e,n)&&vt(e);return t=F(e),t.length?Nt(e,n):e},Mt=(l,n,e)=>{if(n.effect.length)for(const t of n.effect){const{row:r,col:s,notes:p}=t;for(const b of p)Pt(l,r,s,b);e.push(j(l))}},Pt=(l,n,e,t)=>{if(l[n][e].value)return!1;const r=l[n][e].notes.indexOf(t);return r===-1?!1:(l[n][e].notes.splice(r,1),!0)},Vt=(l,n)=>{let e=!1;for(let t=0;t<9;t++)for(let r=0;r<9;r++)l[t][r].value===void 0&&l[t][r].notes.length===1&&(l[t][r].value=l[t][r].notes.pop(),e=!0,n.push(j(l)));return e};function kt(l,n,e){const t=l.slice();return t[11]=n[e],t}function yt(l){let n,e,t,r;return n=new Ht({props:{gridErrors:R(l[0]),grid:l[0]}}),n.$on("cellUpdate",l[3]),t=new Ot({props:{grid:l[0]}}),{c(){nt(n.$$.fragment),e=C(),nt(t.$$.fragment)},l(s){ot(n.$$.fragment,s),e=v(s),ot(t.$$.fragment,s)},m(s,p){lt(n,s,p),y(s,e,p),lt(t,s,p),r=!0},p(s,p){const b={};p&1&&(b.gridErrors=R(s[0])),p&1&&(b.grid=s[0]),n.$set(b);const h={};p&1&&(h.grid=s[0]),t.$set(h)},i(s){r||(T(n.$$.fragment,s),T(t.$$.fragment,s),r=!0)},o(s){E(n.$$.fragment,s),E(t.$$.fragment,s),r=!1},d(s){s&&_(e),rt(n,s),rt(t,s)}}}function Tt(l){let n,e;return n=new Ht({props:{gridErrors:R(l[11]),hints:F(l[11]),grid:l[11]}}),{c(){nt(n.$$.fragment)},l(t){ot(n.$$.fragment,t)},m(t,r){lt(n,t,r),e=!0},p(t,r){const s={};r&2&&(s.gridErrors=R(t[11])),r&2&&(s.hints=F(t[11])),r&2&&(s.grid=t[11]),n.$set(s)},i(t){e||(T(n.$$.fragment,t),e=!0)},o(t){E(n.$$.fragment,t),e=!1},d(t){rt(n,t)}}}function Lt(l){let n,e,t="New grid",r,s,p="Reset grid",b,h,K="Solve grid",M,P,V,c,k,at="First step",J,G,it="Prev step",Q,H,ut="Next step",W,N,ft="Last step",X,w,q,Y,L=Math.max(l[1].length-1,0)+"",z,D,ct=l[0],O,I,A,Z,pt,m=yt(l),U=Ct(l[1]),u=[];for(let o=0;o<U.length;o+=1)u[o]=Tt(kt(l,U,o));const wt=o=>E(u[o],1,1,()=>{u[o]=null});return{c(){n=d("div"),e=d("button"),e.textContent=t,r=C(),s=d("button"),s.textContent=p,b=C(),h=d("button"),h.textContent=K,M=C(),P=d("br"),V=C(),c=d("div"),k=d("button"),k.textContent=at,J=C(),G=d("button"),G.textContent=it,Q=C(),H=d("button"),H.textContent=ut,W=C(),N=d("button"),N.textContent=ft,X=C(),w=d("span"),q=tt(l[2]),Y=tt(" / "),z=tt(L),D=C(),m.c(),O=C();for(let o=0;o<u.length;o+=1)u[o].c();I=mt(),this.h()},l(o){n=g(o,"DIV",{class:!0});var a=et(n);e=g(a,"BUTTON",{"data-svelte-h":!0}),B(e)!=="svelte-6qwice"&&(e.textContent=t),r=v(a),s=g(a,"BUTTON",{"data-svelte-h":!0}),B(s)!=="svelte-hdh8ow"&&(s.textContent=p),b=v(a),h=g(a,"BUTTON",{"data-svelte-h":!0}),B(h)!=="svelte-dp4mj8"&&(h.textContent=K),a.forEach(_),M=v(o),P=g(o,"BR",{}),V=v(o),c=g(o,"DIV",{class:!0});var i=et(c);k=g(i,"BUTTON",{"data-svelte-h":!0}),B(k)!=="svelte-1f64wvg"&&(k.textContent=at),J=v(i),G=g(i,"BUTTON",{"data-svelte-h":!0}),B(G)!=="svelte-gs2lf6"&&(G.textContent=it),Q=v(i),H=g(i,"BUTTON",{"data-svelte-h":!0}),B(H)!=="svelte-67enom"&&(H.textContent=ut),W=v(i),N=g(i,"BUTTON",{"data-svelte-h":!0}),B(N)!=="svelte-ul0sbo"&&(N.textContent=ft),X=v(i),w=g(i,"SPAN",{});var x=et(w);q=st(x,l[2]),Y=st(x," / "),z=st(x,L),x.forEach(_),i.forEach(_),D=v(o),m.l(o),O=v(o);for(let $=0;$<u.length;$+=1)u[$].l(o);I=mt(),this.h()},h(){_t(n,"class","grid-controls svelte-1uoh36i"),_t(c,"class","history-controls svelte-1uoh36i")},m(o,a){y(o,n,a),f(n,e),f(n,r),f(n,s),f(n,b),f(n,h),y(o,M,a),y(o,P,a),y(o,V,a),y(o,c,a),f(c,k),f(c,J),f(c,G),f(c,Q),f(c,H),f(c,W),f(c,N),f(c,X),f(c,w),f(w,q),f(w,Y),f(w,z),y(o,D,a),m.m(o,a),y(o,O,a);for(let i=0;i<u.length;i+=1)u[i]&&u[i].m(o,a);y(o,I,a),A=!0,Z||(pt=[S(e,"click",l[4]),S(s,"click",l[5]),S(h,"click",l[6]),S(k,"click",l[7]),S(G,"click",l[10]),S(H,"click",l[9]),S(N,"click",l[8])],Z=!0)},p(o,[a]){if((!A||a&4)&&ht(q,o[2]),(!A||a&2)&&L!==(L=Math.max(o[1].length-1,0)+"")&&ht(z,L),a&1&&Gt(ct,ct=o[0])?(gt(),E(m,1,1,Bt),dt(),m=yt(o),m.c(),T(m,1),m.m(O.parentNode,O)):m.p(o,a),a&2){U=Ct(o[1]);let i;for(i=0;i<U.length;i+=1){const x=kt(o,U,i);u[i]?(u[i].p(x,a),T(u[i],1)):(u[i]=Tt(x),u[i].c(),T(u[i],1),u[i].m(I.parentNode,I))}for(gt(),i=U.length;i<u.length;i+=1)wt(i);dt()}},i(o){if(!A){T(m);for(let a=0;a<U.length;a+=1)T(u[a]);A=!0}},o(o){E(m),u=u.filter(Boolean);for(let a=0;a<u.length;a+=1)E(u[a]);A=!1},d(o){o&&(_(n),_(M),_(P),_(V),_(c),_(D),_(O),_(I)),m.d(o),Ut(u,o),Z=!1,xt(pt)}}}function jt(l,n,e){let t=bt(),r=[],s=0;return[t,r,s,k=>{It(k.detail.cell,k.detail.update),e(0,t)},()=>{e(0,t=bt()),e(1,r=[j(t)]),e(2,s=0)},()=>{At(t),e(1,r=[j(t)]),e(2,s=0),e(0,t)},()=>{e(0,t=Nt(t,r)),e(1,r),e(2,s=r.length-1)},()=>{e(2,s=0),e(0,t=r[s])},()=>{e(2,s=r.length-1),e(0,t=r[s])},()=>{e(2,s=Math.min(s+1,r.length-1)),e(0,t=r[s])},()=>{e(2,s=Math.max(s-1,0)),e(0,t=r[s])}]}class Kt extends St{constructor(n){super(),Et(this,n,jt,Lt,Gt,{})}}export{Kt as component};
