import{s as it,f as m,a as g,l as j,e as $,g as d,h as q,H as B,c as h,d as f,m as J,j as tt,i as y,I as u,y as w,n as et,C as ut,G as pt}from"../chunks/scheduler.71239b2e.js";import{S as ft,i as ct,t as P,c as _t,a as F,b as st,d as lt,m as nt,e as ot,g as mt}from"../chunks/index.8ab45ecd.js";import{a as rt,S as dt,G as gt,u as ht,g as Ct}from"../chunks/GridStatus.180befb4.js";function at(a){let l,e,n,o;return l=new dt({props:{grid:a[0]}}),l.$on("cellUpdate",a[3]),n=new gt({props:{grid:a[0]}}),{c(){st(l.$$.fragment),e=g(),st(n.$$.fragment)},l(t){lt(l.$$.fragment,t),e=h(t),lt(n.$$.fragment,t)},m(t,c){nt(l,t,c),y(t,e,c),nt(n,t,c),o=!0},p(t,c){const C={};c&1&&(C.grid=t[0]),l.$set(C);const b={};c&1&&(b.grid=t[0]),n.$set(b)},i(t){o||(F(l.$$.fragment,t),F(n.$$.fragment,t),o=!0)},o(t){P(l.$$.fragment,t),P(n.$$.fragment,t),o=!1},d(t){t&&f(e),ot(l,t),ot(n,t)}}}function bt(a){let l,e,n="Reset grid",o,t,c="Fill grid",C,b,O,i,v,L="First step",N,k,K="Prev step",A,x,Q="Next step",D,T,X="Last step",R,H,z,V,S=Math.max(a[1].length-1,0)+"",E,I,Y=a[0],G,U,W,Z,p=at(a);return{c(){l=m("div"),e=m("button"),e.textContent=n,o=g(),t=m("button"),t.textContent=c,C=g(),b=m("br"),O=g(),i=m("div"),v=m("button"),v.textContent=L,N=g(),k=m("button"),k.textContent=K,A=g(),x=m("button"),x.textContent=Q,D=g(),T=m("button"),T.textContent=X,R=g(),H=m("span"),z=j(a[2]),V=j(" / "),E=j(S),I=g(),p.c(),G=$(),this.h()},l(s){l=d(s,"DIV",{class:!0});var r=q(l);e=d(r,"BUTTON",{"data-svelte-h":!0}),B(e)!=="svelte-hdh8ow"&&(e.textContent=n),o=h(r),t=d(r,"BUTTON",{"data-svelte-h":!0}),B(t)!=="svelte-1f9w2t4"&&(t.textContent=c),r.forEach(f),C=h(s),b=d(s,"BR",{}),O=h(s),i=d(s,"DIV",{class:!0});var _=q(i);v=d(_,"BUTTON",{"data-svelte-h":!0}),B(v)!=="svelte-1f64wvg"&&(v.textContent=L),N=h(_),k=d(_,"BUTTON",{"data-svelte-h":!0}),B(k)!=="svelte-gs2lf6"&&(k.textContent=K),A=h(_),x=d(_,"BUTTON",{"data-svelte-h":!0}),B(x)!=="svelte-67enom"&&(x.textContent=Q),D=h(_),T=d(_,"BUTTON",{"data-svelte-h":!0}),B(T)!=="svelte-ul0sbo"&&(T.textContent=X),R=h(_),H=d(_,"SPAN",{});var M=q(H);z=J(M,a[2]),V=J(M," / "),E=J(M,S),M.forEach(f),_.forEach(f),I=h(s),p.l(s),G=$(),this.h()},h(){tt(l,"class","grid-controls svelte-1vzpge2"),tt(i,"class","history-controls svelte-1vzpge2")},m(s,r){y(s,l,r),u(l,e),u(l,o),u(l,t),y(s,C,r),y(s,b,r),y(s,O,r),y(s,i,r),u(i,v),u(i,N),u(i,k),u(i,A),u(i,x),u(i,D),u(i,T),u(i,R),u(i,H),u(H,z),u(H,V),u(H,E),y(s,I,r),p.m(s,r),y(s,G,r),U=!0,W||(Z=[w(e,"click",a[4]),w(t,"click",a[5]),w(v,"click",a[6]),w(k,"click",a[9]),w(x,"click",a[8]),w(T,"click",a[7])],W=!0)},p(s,[r]){(!U||r&4)&&et(z,s[2]),(!U||r&2)&&S!==(S=Math.max(s[1].length-1,0)+"")&&et(E,S),r&1&&it(Y,Y=s[0])?(mt(),P(p,1,1,pt),_t(),p=at(s),p.c(),F(p,1),p.m(G.parentNode,G)):p.p(s,r)},i(s){U||(F(p),U=!0)},o(s){P(p),U=!1},d(s){s&&(f(l),f(C),f(b),f(O),f(i),f(I),f(G)),p.d(s),W=!1,ut(Z)}}}function vt(a,l,e){let n=rt(),o=[],t=0;return[n,o,t,N=>{ht(N.detail.cell,N.detail.update),e(0,n)},()=>{e(0,n=rt())},()=>{e(1,o=[]),e(2,t=0),Ct(n,o),e(2,t=o.length-1),e(0,n=o[t])},()=>{e(2,t=0),e(0,n=o[t])},()=>{e(2,t=o.length-1),e(0,n=o[t])},()=>{e(2,t=Math.min(t+1,o.length-1)),e(0,n=o[t])},()=>{e(2,t=Math.max(t-1,0)),e(0,n=o[t])}]}class Tt extends ft{constructor(l){super(),ct(this,l,vt,bt,it,{})}}export{Tt as component};