import{s as de,f as p,J as qe,g as v,d as u,j as C,I as c,G as ne,a as G,l as R,e as re,c as H,h as T,m as F,i as D,y as K,n as q,K as Ke,C as Fe,D as Ce,o as Le,H as Me,L as Ge,E as Qe}from"../chunks/scheduler.193db7c4.js";import{S as Pe,i as Ve,b as _e,d as me,m as he,t as W,c as Je,a as L,e as pe,g as ze}from"../chunks/index.9bea933b.js";import{a as He}from"../chunks/store.8b4149bb.js";import{p as We}from"../chunks/stores.8b0aef30.js";import{d as fe,m as Xe,S as Ye,g as De,u as Ze,r as xe,a as et,b as tt,s as ye,G as lt,c as ot}from"../chunks/GridStatus.bea7fd09.js";import{g as Ie,a as st}from"../chunks/helpers.e66b69c2.js";const nt=l=>{const e=fe(l);return $e(e),e},$e=l=>{for(let e=0;e<9;e++)for(let o=0;o<9;o++)if(l[e][o].value===void 0){for(let s=1;s<=9;s++)if(Xe(l,{row:e,col:o},s)){if(l[e][o].value=s,$e(l))return!0;l[e][o].value=void 0}return!1}return!0};function rt(l){let e,o,s,a,t;return document.title=e=l[0],{c(){o=p("meta"),s=p("meta"),a=p("meta"),t=p("meta"),this.h()},l(n){const i=qe("svelte-16l5a2r",document.head);o=v(i,"META",{name:!0,content:!0}),s=v(i,"META",{name:!0,content:!0}),a=v(i,"META",{name:!0,content:!0}),t=v(i,"META",{name:!0,content:!0}),i.forEach(u),this.h()},h(){C(o,"name","description"),C(o,"content",l[1]),C(s,"name","apple-mobile-web-app-title"),C(s,"content",l[0]),C(a,"name","apple-mobile-web-app-capable"),C(a,"content","yes"),C(t,"name","apple-mobile-web-app-status-bar-style"),C(t,"content","black")},m(n,i){c(document.head,o),c(document.head,s),c(document.head,a),c(document.head,t)},p(n,[i]){i&1&&e!==(e=n[0])&&(document.title=e),i&2&&C(o,"content",n[1]),i&1&&C(s,"content",n[0])},i:ne,o:ne,d(n){u(o),u(s),u(a),u(t)}}}function it(l,e,o){let{title:s}=e,{description:a}=e;return l.$$set=t=>{"title"in t&&o(0,s=t.title),"description"in t&&o(1,a=t.description)},[s,a]}class at extends Pe{constructor(e){super(),Ve(this,e,it,rt,de,{title:0,description:1})}}const je="sudoku-game-grid-v1",ct=l=>{localStorage.setItem(je,JSON.stringify(l))},ut=()=>{try{const l=localStorage.getItem(je);return l?JSON.parse(l):void 0}catch{return}};function we(l,e,o){const s=l.slice();return s[21]=e[o],s}function Ae(l){let e,o,s="Notes controls",a,t,n,i=l[2]?"Disable":"Enable",d,E,w,U,y,m=l[3]?"Hide":"Display",I,M,$,P,h=!l[2]&&Oe(l);return{c(){e=p("div"),o=p("h4"),o.textContent=s,a=G(),t=p("div"),n=p("button"),d=R(i),E=R(" notes auto-refresh"),w=G(),h&&h.c(),U=G(),y=p("button"),I=R(m),M=R(" hints"),this.h()},l(g){e=v(g,"DIV",{});var N=T(e);o=v(N,"H4",{"data-svelte-h":!0}),Me(o)!=="svelte-8gx0az"&&(o.textContent=s),a=H(N),t=v(N,"DIV",{class:!0});var S=T(t);n=v(S,"BUTTON",{});var V=T(n);d=F(V,i),E=F(V," notes auto-refresh"),V.forEach(u),w=H(S),h&&h.l(S),U=H(S),y=v(S,"BUTTON",{});var z=T(y);I=F(z,m),M=F(z," hints"),z.forEach(u),S.forEach(u),N.forEach(u),this.h()},h(){C(t,"class","notes-controls svelte-npryvf")},m(g,N){D(g,e,N),c(e,o),c(e,a),c(e,t),c(t,n),c(n,d),c(n,E),c(t,w),h&&h.m(t,null),c(t,U),c(t,y),c(y,I),c(y,M),$||(P=[K(n,"click",l[15]),K(y,"click",l[17])],$=!0)},p(g,N){N&4&&i!==(i=g[2]?"Disable":"Enable")&&q(d,i),g[2]?h&&(h.d(1),h=null):h?h.p(g,N):(h=Oe(g),h.c(),h.m(t,U)),N&8&&m!==(m=g[3]?"Hide":"Display")&&q(I,m)},d(g){g&&u(e),h&&h.d(),$=!1,Fe(P)}}}function Oe(l){let e,o="Remove notes",s,a;return{c(){e=p("button"),e.textContent=o},l(t){e=v(t,"BUTTON",{"data-svelte-h":!0}),Me(e)!=="svelte-16z5c15"&&(e.textContent=o)},m(t,n){D(t,e,n),s||(a=K(e,"click",l[16]),s=!0)},p:ne,d(t){t&&u(e),s=!1,a()}}}function Ue(l){let e,o,s,a;function t(){return l[18](l[21])}return{c(){e=p("button"),o=R(l[21]),this.h()},l(n){e=v(n,"BUTTON",{class:!0});var i=T(e);o=F(i,l[21]),i.forEach(u),this.h()},h(){C(e,"class","svelte-npryvf"),Ge(e,"selected",l[5]===l[21])},m(n,i){D(n,e,i),c(e,o),s||(a=K(e,"click",t),s=!0)},p(n,i){l=n,i&32&&Ge(e,"selected",l[5]===l[21])},d(n){n&&u(e),s=!1,a()}}}function Be(l){let e,o;return e=new lt({props:{grid:l[0]}}),{c(){_e(e.$$.fragment)},l(s){me(e.$$.fragment,s)},m(s,a){he(e,s,a),o=!0},p(s,a){const t={};a&1&&(t.grid=s[0]),e.$set(t)},i(s){o||(L(e.$$.fragment,s),o=!0)},o(s){W(e.$$.fragment,s),o=!1},d(s){pe(e,s)}}}function Re(l){let e,o,s,a;e=new Ye({props:{gridErrors:De(l[0]),hints:l[1],grid:l[0]}}),e.$on("cellUpdate",l[7]),e.$on("computeCellNotes",l[8]);let t=!l[4]&&Be(l);return{c(){_e(e.$$.fragment),o=G(),t&&t.c(),s=re()},l(n){me(e.$$.fragment,n),o=H(n),t&&t.l(n),s=re()},m(n,i){he(e,n,i),D(n,o,i),t&&t.m(n,i),D(n,s,i),a=!0},p(n,i){const d={};i&1&&(d.gridErrors=De(n[0])),i&2&&(d.hints=n[1]),i&1&&(d.grid=n[0]),e.$set(d),n[4]?t&&(ze(),W(t,1,1,()=>{t=null}),Je()):t?(t.p(n,i),i&16&&L(t,1)):(t=Be(n),t.c(),L(t,1),t.m(s.parentNode,s))},i(n){a||(L(e.$$.fragment,n),L(t),a=!0)},o(n){W(e.$$.fragment,n),W(t),a=!1},d(n){n&&(u(o),u(s)),pe(e,n),t&&t.d(n)}}}function ft(l){let e,o,s,a,t=l[4]?"Contrôles de la grille":"Grid controls",n,i,d,E,w=l[4]?"Annuler":"Prev",U,y,m,I=l[4]?"Nouvelle grille":"New Grid",M,$,P,h=l[4]?"Résoudre":"Solve grid",g,N,S,V=l[4]?"Recommencer":"Reset grid",z,_,X,j,Z,x=l[4]?"Surligner":"Highlight controls",ee,ie,Q,te,le,oe,ve=l[0],Y,J,ae,be;e=new at({props:{title:"Sudoku",description:"Play Sudoku"}});let k=!l[4]&&Ae(l),ce=He([1,2,3,4,5,6,7,8,9]),A=[];for(let r=0;r<9;r+=1)A[r]=Ue(we(l,ce,r));let O=Re(l);return{c(){_e(e.$$.fragment),o=G(),s=p("div"),a=p("h4"),n=R(t),i=G(),d=p("div"),E=p("button"),U=R(w),y=G(),m=p("button"),M=R(I),$=G(),P=p("button"),g=R(h),N=G(),S=p("button"),z=R(V),_=G(),k&&k.c(),X=G(),j=p("div"),Z=p("h4"),ee=R(x),ie=G(),Q=p("div");for(let r=0;r<9;r+=1)A[r].c();te=G(),le=p("br"),oe=G(),O.c(),Y=re(),this.h()},l(r){me(e.$$.fragment,r),o=H(r),s=v(r,"DIV",{});var f=T(s);a=v(f,"H4",{});var b=T(a);n=F(b,t),b.forEach(u),i=H(f),d=v(f,"DIV",{class:!0});var B=T(d);E=v(B,"BUTTON",{});var ge=T(E);U=F(ge,w),ge.forEach(u),y=H(B),m=v(B,"BUTTON",{});var ke=T(m);M=F(ke,I),ke.forEach(u),$=H(B),P=v(B,"BUTTON",{});var Ee=T(P);g=F(Ee,h),Ee.forEach(u),N=H(B),S=v(B,"BUTTON",{});var Ne=T(S);z=F(Ne,V),Ne.forEach(u),B.forEach(u),f.forEach(u),_=H(r),k&&k.l(r),X=H(r),j=v(r,"DIV",{});var se=T(j);Z=v(se,"H4",{});var Te=T(Z);ee=F(Te,x),Te.forEach(u),ie=H(se),Q=v(se,"DIV",{class:!0});var Se=T(Q);for(let ue=0;ue<9;ue+=1)A[ue].l(Se);Se.forEach(u),se.forEach(u),te=H(r),le=v(r,"BR",{}),oe=H(r),O.l(r),Y=re(),this.h()},h(){C(d,"class","grid-controls svelte-npryvf"),C(Q,"class","highlights-controls svelte-npryvf")},m(r,f){he(e,r,f),D(r,o,f),D(r,s,f),c(s,a),c(a,n),c(s,i),c(s,d),c(d,E),c(E,U),c(d,y),c(d,m),c(m,M),c(d,$),c(d,P),c(P,g),c(d,N),c(d,S),c(S,z),D(r,_,f),k&&k.m(r,f),D(r,X,f),D(r,j,f),c(j,Z),c(Z,ee),c(j,ie),c(j,Q);for(let b=0;b<9;b+=1)A[b]&&A[b].m(Q,null);D(r,te,f),D(r,le,f),D(r,oe,f),O.m(r,f),D(r,Y,f),J=!0,ae||(be=[K(E,"click",l[11]),K(m,"click",l[12]),K(P,"click",l[13]),K(S,"click",l[14])],ae=!0)},p(r,[f]){if((!J||f&16)&&t!==(t=r[4]?"Contrôles de la grille":"Grid controls")&&q(n,t),(!J||f&16)&&w!==(w=r[4]?"Annuler":"Prev")&&q(U,w),(!J||f&16)&&I!==(I=r[4]?"Nouvelle grille":"New Grid")&&q(M,I),(!J||f&16)&&h!==(h=r[4]?"Résoudre":"Solve grid")&&q(g,h),(!J||f&16)&&V!==(V=r[4]?"Recommencer":"Reset grid")&&q(z,V),r[4]?k&&(k.d(1),k=null):k?k.p(r,f):(k=Ae(r),k.c(),k.m(X.parentNode,X)),(!J||f&16)&&x!==(x=r[4]?"Surligner":"Highlight controls")&&q(ee,x),f&32){ce=He([1,2,3,4,5,6,7,8,9]);let b;for(b=0;b<9;b+=1){const B=we(r,ce,b);A[b]?A[b].p(B,f):(A[b]=Ue(B),A[b].c(),A[b].m(Q,null))}for(;b<9;b+=1)A[b].d(1)}f&1&&de(ve,ve=r[0])?(ze(),W(O,1,1,ne),Je(),O=Re(r),O.c(),L(O,1),O.m(Y.parentNode,Y)):O.p(r,f)},i(r){J||(L(e.$$.fragment,r),L(O),J=!0)},o(r){W(e.$$.fragment,r),W(O),J=!1},d(r){r&&(u(o),u(s),u(_),u(X),u(j),u(te),u(le),u(oe),u(Y)),pe(e,r),k&&k.d(r),Ke(A,r),O.d(r),ae=!1,Fe(be)}}}function dt(l,e,o){let s,a;Ce(l,We,_=>o(19,s=_)),Ce(l,ye,_=>o(5,a=_));let t=Ie(),n=[];const i=[fe(t)];let d=!1,E=!1,w=!1;const U=_=>{Ze(_.detail.cell,_.detail.update),m()},y=_=>{xe(t,_.detail.position),m()},m=_=>{d&&ot(t),E?M(t):o(1,n=[]),ct(t),o(0,t),!(_!=null&&_.noHistory)&&i.push(fe(t))},I=()=>{o(0,t=nt(t)),m()},M=_=>{o(1,n=st(_))};return Le(()=>{const _=ut();_&&o(0,t={..._}),o(4,w=s.url.searchParams.has("fr"))}),[t,n,d,E,w,a,i,U,y,m,I,()=>{o(0,t=i.pop()),m({noHistory:!0})},()=>{o(0,t=Ie()),m()},()=>{I(),m()},()=>{et(t),m()},()=>{o(2,d=!d),m()},()=>{tt(t),m()},()=>{o(3,E=!E),m()},_=>{Qe(ye,a=a===_?void 0:_,a)}]}class gt extends Pe{constructor(e){super(),Ve(this,e,dt,ft,de,{})}}export{gt as component};
