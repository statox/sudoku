import{s as Z,f as k,a as V,e as K,g as b,H as G,c as w,i as N,y as F,d as _,C as ee,l as O,h as q,m as j,j as x,J as T,I as c,n as P,G as te}from"../chunks/scheduler.f51c602a.js";import{S as se,i as le,t as R,c as ae,a as W,b as re,d as ne,m as ie,e as oe,g as de}from"../chunks/index.aa7fb691.js";import{g as L,a as M,b as Q,c as X,S as ue,u as ce,w as _e,d as fe}from"../chunks/Sudoku.7eb6ff7f.js";function Y(d){let a,u,e,n,D="grid has errors",v,i,p="grid is filled",I,g,h="grid is valid",m,f,E=d[1]?"Has errors":"No errors",o,t,r,S=d[2]?"Is filled":"Not filled",H,B,y,U=d[3]?"Is valid":"Not valid",$,C;return a=new ue({props:{grid:d[0]}}),a.$on("cellUpdate",d[4]),{c(){re(a.$$.fragment),u=V(),e=k("div"),n=k("div"),n.textContent=D,v=V(),i=k("div"),i.textContent=p,I=V(),g=k("div"),g.textContent=h,m=V(),f=k("div"),o=O(E),t=V(),r=k("div"),H=O(S),B=V(),y=k("div"),$=O(U),this.h()},l(l){ne(a.$$.fragment,l),u=w(l),e=b(l,"DIV",{class:!0});var s=q(e);n=b(s,"DIV",{"data-svelte-h":!0}),G(n)!=="svelte-1hlqbal"&&(n.textContent=D),v=w(s),i=b(s,"DIV",{"data-svelte-h":!0}),G(i)!=="svelte-ekf37s"&&(i.textContent=p),I=w(s),g=b(s,"DIV",{"data-svelte-h":!0}),G(g)!=="svelte-16e0vl8"&&(g.textContent=h),m=w(s),f=b(s,"DIV",{class:!0});var z=q(f);o=j(z,E),z.forEach(_),t=w(s),r=b(s,"DIV",{class:!0});var A=q(r);H=j(A,S),A.forEach(_),B=w(s),y=b(s,"DIV",{class:!0});var J=q(y);$=j(J,U),J.forEach(_),s.forEach(_),this.h()},h(){x(f,"class","status svelte-reswgz"),T(f,"red",d[1]),x(r,"class","status svelte-reswgz"),T(r,"red",!d[2]),x(y,"class","status svelte-reswgz"),T(y,"red",!d[3]),x(e,"class","grid-status svelte-reswgz")},m(l,s){ie(a,l,s),N(l,u,s),N(l,e,s),c(e,n),c(e,v),c(e,i),c(e,I),c(e,g),c(e,m),c(e,f),c(f,o),c(e,t),c(e,r),c(r,H),c(e,B),c(e,y),c(y,$),C=!0},p(l,s){const z={};s&1&&(z.grid=l[0]),a.$set(z),(!C||s&2)&&E!==(E=l[1]?"Has errors":"No errors")&&P(o,E),(!C||s&2)&&T(f,"red",l[1]),(!C||s&4)&&S!==(S=l[2]?"Is filled":"Not filled")&&P(H,S),(!C||s&4)&&T(r,"red",!l[2]),(!C||s&8)&&U!==(U=l[3]?"Is valid":"Not valid")&&P($,U),(!C||s&8)&&T(y,"red",!l[3])},i(l){C||(W(a.$$.fragment,l),C=!0)},o(l){R(a.$$.fragment,l),C=!1},d(l){l&&(_(u),_(e)),oe(a,l)}}}function ve(d){let a,u="Reset grid",e,n,D="Run one step",v,i,p="Generate complete grid",I,g=d[0],h,m,f,E,o=Y(d);return{c(){a=k("button"),a.textContent=u,e=V(),n=k("button"),n.textContent=D,v=V(),i=k("button"),i.textContent=p,I=V(),o.c(),h=K()},l(t){a=b(t,"BUTTON",{"data-svelte-h":!0}),G(a)!=="svelte-cddr2q"&&(a.textContent=u),e=w(t),n=b(t,"BUTTON",{"data-svelte-h":!0}),G(n)!=="svelte-fjkgb7"&&(n.textContent=D),v=w(t),i=b(t,"BUTTON",{"data-svelte-h":!0}),G(i)!=="svelte-i6tsy6"&&(i.textContent=p),I=w(t),o.l(t),h=K()},m(t,r){N(t,a,r),N(t,e,r),N(t,n,r),N(t,v,r),N(t,i,r),N(t,I,r),o.m(t,r),N(t,h,r),m=!0,f||(E=[F(a,"click",d[6]),F(n,"click",d[7]),F(i,"click",d[8])],f=!0)},p(t,[r]){r&1&&Z(g,g=t[0])?(de(),R(o,1,1,te),ae(),o=Y(t),o.c(),W(o,1),o.m(h.parentNode,h)):o.p(t,r)},i(t){m||(W(o),m=!0)},o(t){R(o),m=!1},d(t){t&&(_(a),_(e),_(n),_(v),_(i),_(I),_(h)),o.d(t),f=!1,ee(E)}}}function pe(d,a,u){let e=L(),n=M(e),D=Q(e),v=X(e);const i=m=>{ce(m.detail.cell,m.detail.selection),p()},p=()=>{u(1,n=M(e)),u(2,D=Q(e)),u(3,v=X(e)),u(0,e)};return[e,n,D,v,i,p,()=>{u(0,e=L()),p()},()=>{_e(e),p()},()=>{u(0,e=fe()),p()}]}class Ce extends se{constructor(a){super(),le(this,a,pe,ve,Z,{})}}export{Ce as component};
