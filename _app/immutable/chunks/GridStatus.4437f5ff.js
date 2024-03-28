import{s as ee,e as W,i as L,y as K,G as le,d as N,C as Ve,f as T,l as Z,a as y,g as D,h as P,m as x,c as $,H as te,j as F,k as ae,I as v,n as Ie,J as Te,L as Ae,K as z,D as ve,M as Ce,p as we,N as de,O as k}from"./scheduler.71239b2e.js";import{S as re,i as ie,b as R,d as B,m as G,a as A,t as j,e as H}from"./index.8ab45ecd.js";import{a as ue,b as De,d as je}from"./store.fe58922c.js";import{w as Oe}from"./index.7ccf2c6d.js";const He=(e,t)=>{if(e<0||e>8)throw new Error(`unexpected square position: ${e}`);const o=Math.floor(e/3),n=e%3,l=3*o,s=3*n;return[t[l][s],t[l][s+1],t[l][s+2],t[l+1][s],t[l+1][s+1],t[l+1][s+2],t[l+2][s],t[l+2][s+1],t[l+2][s+2]]};function Fe(e){return e.notes!==void 0}function ze(e){return e.clear===!0}const Ct=(e,t)=>{if(e.fixed)throw new Error("Tried to update fixed cell");if(Fe(t)){e.value=void 0,e.notes=[...t.notes];return}if(ze(t)){e.notes=[],e.value=void 0;return}e.notes=[],e.value=t.value},ne=e=>JSON.parse(JSON.stringify(e)),fe=(e,t,o,n)=>{if(!n||e[t][o].value)return!1;const l=e[t][o].notes.indexOf(n);return l===-1?!1:(e[t][o].notes.splice(l,1),!0)},wt=e=>{for(let t=0;t<9;t++)for(let o=0;o<9;o++)e[t][o].notes=[]},Pe=(e,t)=>{const{row:o,col:n}=t;if(e[o][n].value){e[o][n].notes=[];return}e[o][n].notes=[1,2,3,4,5,6,7,8,9];const l=Math.floor(n/3),s=Math.floor(o/3);for(let r=0;r<9;r++){const a=e[r][n].value;fe(e,o,n,a);const c=e[o][r].value;fe(e,o,n,c);const p=Math.floor(r/3),m=r%3,U=e[3*s+p][3*l+m].value;fe(e,o,n,U)}return e[o][n].notes},Le=e=>{for(let t=0;t<9;t++)for(let o=0;o<9;o++)Pe(e,{row:t,col:o})},bt=e=>{for(let t=0;t<9;t++)for(let o=0;o<9;o++)e[t][o].fixed||(e[t][o].value=void 0,e[t][o].notes=[])},Xe=(e,t,o)=>{const{col:n,row:l}=t;if(e[l][n].value!==void 0)return!1;const s=Math.floor(n/3),r=Math.floor(l/3);for(let a=0;a<9;a++){if(e[l][a].value===o||e[a][n].value===o)return!1;const c=Math.floor(a/3),p=a%3;if(e[3*r+c][3*s+p].value===o)return!1}return!0},kt=e=>{const t=[],o=new Array(27).fill(0);for(let n=0;n<9;n++)for(let l=0;l<9;l++){if(e[n][l].value===void 0)continue;const s=e[n][l].value,r=1<<s-1,a=o[n],c=o[9+l],p=o[18+Math.floor(n/3)*3+Math.floor(l/3)];a&r&&t.push({type:"row",col:l,row:n,value:s}),c&r&&t.push({type:"column",col:l,row:n,value:s}),p&r&&t.push({type:"square",col:l,row:n,value:s}),o[n]^=r,o[9+l]^=r,o[18+Math.floor(n/3)*3+Math.floor(l/3)]^=r}return t},se=e=>{const t=new Array(27).fill(0);for(let o=0;o<9;o++)for(let n=0;n<9;n++){if(e[o][n].value===void 0)continue;const s=1<<e[o][n].value-1,r=t[o],a=t[9+n],c=t[18+Math.floor(o/3)*3+Math.floor(n/3)];if(r&s||a&s||c&s)return!0;t[o]^=s,t[9+n]^=s,t[18+Math.floor(o/3)*3+Math.floor(n/3)]^=s}return!1},oe=e=>{for(let t=0;t<9;t++)for(let o=0;o<9;o++)if(!e[t][o].value)return!1;return!0},_e=e=>oe(e)&&!se(e);let he=0;const Re=1e4,Ke=e=>{if(oe(e))return _e(e)?"unique":"none";const t=ne(e);let o=0;for(let l=0;l<9;l++)for(let s=0;s<9;s++)e[l][s].value!==void 0&&o++;const n=[];return he=0,Be(t,n,o),he>=Re?"unreachable":n.length===0?"none":n.length===1?"unique":"notUnique"},Be=(e,t,o)=>{if(!(he++>=Re)){for(let n=0;n<9;n++)for(let l=0;l<9;l++)if(e[n][l].value===void 0){for(let s=1;s<=9;s++)if(Xe(e,{row:n,col:l},s)){if(e[n][l].value=s,Be(e,t,o+1)&&(o===80&&t.push(ne(e)),t.length>=2))return!0;e[n][l].value=void 0}return!1}return!0}},Nt=(e,t)=>{if(se(e)||oe(e))return e;const o=ne(e);Le(o);const n=[o];for(;n.length;){const l=n.pop();if(t&&t.push(ne(l)),se(l))continue;if(oe(l)){if(_e(l))return l;continue}const s=Ye(l);if(!s.length)continue;const r=Math.floor(Math.random()*s.length),a=s[r],c=ne(l);c[a.row][a.col].notes=c[a.row][a.col].notes.filter(p=>p!==a.value),n.push(c),Je(l,a),Ge(l),n.push(l)}return o},ce=(e,t,o,n)=>{if(e[t][o].value)return!1;const l=e[t][o].notes.indexOf(n);return l===-1?!1:(e[t][o].notes.splice(l,1),e[t][o].notes.length===1?(e[t][o].value=e[t][o].notes.pop(),!0):!1)},Ge=e=>{if(oe(e)||se(e))return;let t=!1;for(let o=0;o<9;o++)for(let n=0;n<9;n++){const{value:l}=e[o][n];if(!l)continue;for(let a=0;a<9;a++)t=t||ce(e,a,n,l),t=t||ce(e,o,a,l);const s=Math.floor(n/3),r=Math.floor(o/3);for(let a=0;a<3;a++)for(let c=0;c<3;c++)t=t||ce(e,3*r+a,3*s+c,l)}t&&Ge(e)},We=(e,t)=>{const{row:o,col:n,value:l}=t;return!(e[o][n].value||!e[o][n].notes.includes(l))},Je=(e,t)=>{if(!We(e,t))return;const{row:o,col:n,value:l}=t;e[o][n].value=l,e[o][n].notes=[]},Ye=e=>{let t=[],o=9;for(let n=0;n<9;n++)for(let l=0;l<9;l++){if(e[n][l].value!==void 0)continue;const{notes:s}=e[n][l];if(s.length<o&&(o=s.length,t=[]),s.length===o)for(const r of e[n][l].notes)t.push({row:n,col:l,value:r})}return t},Et=()=>{const e=[];for(let t=0;t<9;t++){e.push([]);for(let o=0;o<9;o++){const n={value:void 0,fixed:!1,notes:[1,2,3,4,5,6,7,8,9]};e[e.length-1].push(n)}}return e};function be(e,t,o){const n=e.slice();return n[21]=t[o],n}function ke(e){let t=e[2],o,n=Me(e);return{c(){n.c(),o=W()},l(l){n.l(l),o=W()},m(l,s){n.m(l,s),L(l,o,s)},p(l,s){s&4&&ee(t,t=l[2])?(n.d(1),n=Me(l),n.c(),n.m(o.parentNode,o)):n.p(l,s)},d(l){l&&N(o),n.d(l)}}}function Qe(e){let t,o,n,l;function s(){return e[18](e[21])}return{c(){t=T("button"),o=Z(e[21]),this.h()},l(r){t=D(r,"BUTTON",{class:!0});var a=P(t);o=x(a,e[21]),a.forEach(N),this.h()},h(){F(t,"class","choice-btn svelte-1wa913h"),z(t,"selected",e[6]===e[21])},m(r,a){L(r,t,a),v(t,o),n||(l=K(t,"click",s),n=!0)},p(r,a){e=r,a&64&&z(t,"selected",e[6]===e[21])},d(r){r&&N(t),n=!1,l()}}}function Ze(e){let t=e[5],o,n=Ne(e);return{c(){n.c(),o=W()},l(l){n.l(l),o=W()},m(l,s){n.m(l,s),L(l,o,s)},p(l,s){s&32&&ee(t,t=l[5])?(n.d(1),n=Ne(l),n.c(),n.m(o.parentNode,o)):n.p(l,s)},d(l){l&&N(o),n.d(l)}}}function Ne(e){let t,o,n,l;function s(){return e[17](e[21])}return{c(){t=T("button"),o=Z(e[21]),this.h()},l(r){t=D(r,"BUTTON",{class:!0});var a=P(t);o=x(a,e[21]),a.forEach(N),this.h()},h(){F(t,"class","choice-btn svelte-1wa913h"),z(t,"selected",e[5][e[21]-1])},m(r,a){L(r,t,a),v(t,o),n||(l=K(t,"click",s),n=!0)},p(r,a){e=r,a&32&&z(t,"selected",e[5][e[21]-1])},d(r){r&&N(t),n=!1,l()}}}function Ee(e){let t;function o(s,r){return s[4]?Ze:Qe}let n=o(e),l=n(e);return{c(){l.c(),t=W()},l(s){l.l(s),t=W()},m(s,r){l.m(s,r),L(s,t,r)},p(s,r){n===(n=o(s))&&l?l.p(s,r):(l.d(1),l=n(s),l&&(l.c(),l.m(t.parentNode,t)))},d(s){s&&N(t),l.d(s)}}}function Ue(e){let t,o="Auto notes",n,l;return{c(){t=T("button"),t.textContent=o},l(s){t=D(s,"BUTTON",{"data-svelte-h":!0}),te(t)!=="svelte-1y6181p"&&(t.textContent=o)},m(s,r){L(s,t,r),n||(l=K(t,"click",function(){Ae(e[1])&&e[1].apply(this,arguments)}),n=!0)},p(s,r){e=s},d(s){s&&N(t),n=!1,l()}}}function Me(e){let t,o,n,l=e[4]?"Notes":"Value",s,r,a,c="✖",p,m,U,g,E,C="Change mode",V,b,O,w=ue([1,2,3,4,5,6,7,8,9]),d=[];for(let u=0;u<9;u+=1)d[u]=Ee(be(e,w,u));let i=e[4]&&Ue(e);return{c(){t=T("div"),o=T("div"),n=T("h3"),s=Z(l),r=y(),a=T("button"),a.textContent=c,p=y(),m=T("div");for(let u=0;u<9;u+=1)d[u].c();U=y(),g=T("div"),E=T("button"),E.textContent=C,V=y(),i&&i.c(),this.h()},l(u){t=D(u,"DIV",{role:!0,class:!0,style:!0});var M=P(t);o=D(M,"DIV",{class:!0});var f=P(o);n=D(f,"H3",{class:!0});var _=P(n);s=x(_,l),r=$(_),a=D(_,"BUTTON",{"data-svelte-h":!0}),te(a)!=="svelte-15i1wwz"&&(a.textContent=c),_.forEach(N),p=$(f),m=D(f,"DIV",{class:!0});var I=P(m);for(let q=0;q<9;q+=1)d[q].l(I);I.forEach(N),U=$(f),g=D(f,"DIV",{});var S=P(g);E=D(S,"BUTTON",{"data-svelte-h":!0}),te(E)!=="svelte-1y20icv"&&(E.textContent=C),V=$(S),i&&i.l(S),S.forEach(N),f.forEach(N),M.forEach(N),this.h()},h(){F(n,"class","title-bar svelte-1wa913h"),F(m,"class","grid svelte-1wa913h"),F(o,"class","contents svelte-1wa913h"),F(t,"role","dialog"),F(t,"class","modal svelte-1wa913h"),ae(t,"top",e[2]+"px"),ae(t,"left",e[3]+"px")},m(u,M){L(u,t,M),v(t,o),v(o,n),v(n,s),v(n,r),v(n,a),v(o,p),v(o,m);for(let f=0;f<9;f+=1)d[f]&&d[f].m(m,null);v(o,U),v(o,g),v(g,E),v(g,V),i&&i.m(g,null),b||(O=[K(a,"click",De),K(E,"click",e[8]),K(t,"mousedown",e[11])],b=!0)},p(u,M){if(M&16&&l!==(l=u[4]?"Notes":"Value")&&Ie(s,l),M&240){w=ue([1,2,3,4,5,6,7,8,9]);let f;for(f=0;f<9;f+=1){const _=be(u,w,f);d[f]?d[f].p(_,M):(d[f]=Ee(_),d[f].c(),d[f].m(m,null))}for(;f<9;f+=1)d[f].d(1)}u[4]?i?i.p(u,M):(i=Ue(u),i.c(),i.m(g,null)):i&&(i.d(1),i=null),M&4&&ae(t,"top",u[2]+"px"),M&8&&ae(t,"left",u[3]+"px")},d(u){u&&N(t),Te(d,u),i&&i.d(),b=!1,Ve(O)}}}function xe(e){let t,o,n,l=e[0]&&ke(e);return{c(){l&&l.c(),t=W()},l(s){l&&l.l(s),t=W()},m(s,r){l&&l.m(s,r),L(s,t,r),o||(n=[K(window,"keydown",e[9]),K(window,"keyup",e[10]),K(window,"mouseup",e[13]),K(window,"mousemove",e[12])],o=!0)},p(s,[r]){s[0]?l?l.p(s,r):(l=ke(s),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},i:le,o:le,d(s){s&&N(t),l&&l.d(s),o=!1,Ve(n)}}}function et(e,t,o){let{isOpen:n}=t,{onSelectionUpdated:l}=t,{onComputeCellNotes:s}=t,{initialState:r}=t,{parentBoundingRect:a}=t;const c=_=>{const I=document.body.getBoundingClientRect(),S=300,q=300;let X=_.top-q/2,h=_.right;return h>I.width/2&&(h=_.left-S-_.width),{top:X,left:Math.max(0,h)}};let{top:p,left:m}=c(a),U=r.notes.length>0,g=new Array(9).fill(!1).map((_,I)=>r.notes.includes(I+1)),E=r.value;const C=(_,I)=>{if(I==="notes"){o(5,g[_-1]=!g[_-1],g),o(5,g),o(6,E=void 0),l({notes:g.map((S,q)=>q+1).filter(S=>g[S-1])});return}if(E===_){l({clear:!0}),o(6,E=void 0),o(5,g=[]);return}o(6,E=_),o(5,g=[]),l({value:E}),De()},V=()=>{o(4,U=!U)},b=_=>{const I="!@#$%^&*(",S=_.getModifierState("Shift");let q;if(q=_.key,q==="Backspace"){l({clear:!0});return}q==="Shift"&&o(4,U=!0),I.includes(q)&&(q=I.indexOf(q)+1),!isNaN(Number(q))&&C(Number(q),S?"notes":"value")},O=_=>{const{key:I}=_;I==="Shift"&&o(4,U=!1)};let w=!1;function d(){w=!0}function i(_){w&&(o(3,m+=_.movementX),o(2,p+=_.movementY))}function u(){w=!1}const M=_=>C(_,"notes"),f=_=>C(_,"value");return e.$$set=_=>{"isOpen"in _&&o(0,n=_.isOpen),"onSelectionUpdated"in _&&o(14,l=_.onSelectionUpdated),"onComputeCellNotes"in _&&o(1,s=_.onComputeCellNotes),"initialState"in _&&o(15,r=_.initialState),"parentBoundingRect"in _&&o(16,a=_.parentBoundingRect)},[n,s,p,m,U,g,E,C,V,b,O,d,i,u,l,r,a,M,f]}class tt extends re{constructor(t){super(),ie(this,t,et,xe,ee,{isOpen:0,onSelectionUpdated:14,onComputeCellNotes:1,initialState:15,parentBoundingRect:16})}}const lt=Oe([]),ot=e=>e.effect!==void 0,nt=Oe();function qe(e,t,o){const n=e.slice();return n[16]=t[o],n}function st(e){let t,o,n,l,s=ue([1,2,3,4,5,6,7,8,9]),r=[];for(let a=0;a<9;a+=1)r[a]=ye(qe(e,s,a));return{c(){t=T("button");for(let a=0;a<9;a+=1)r[a].c();this.h()},l(a){t=D(a,"BUTTON",{class:!0});var c=P(t);for(let p=0;p<9;p+=1)r[p].l(c);c.forEach(N),this.h()},h(){F(t,"class",o=de("cell notes "+e[2]+" "+e[7])+" svelte-136izju")},m(a,c){L(a,t,c);for(let p=0;p<9;p+=1)r[p]&&r[p].m(t,null);e[11](t),n||(l=K(t,"click",e[4]),n=!0)},p(a,c){if(c&105){s=ue([1,2,3,4,5,6,7,8,9]);let p;for(p=0;p<9;p+=1){const m=qe(a,s,p);r[p]?r[p].p(m,c):(r[p]=ye(m),r[p].c(),r[p].m(t,null))}for(;p<9;p+=1)r[p].d(1)}c&4&&o!==(o=de("cell notes "+a[2]+" "+a[7])+" svelte-136izju")&&F(t,"class",o)},d(a){a&&N(t),Te(r,a),e[11](null),n=!1,l()}}}function rt(e){let t,o=e[0].value+"",n,l,s,r;return{c(){t=T("button"),n=Z(o),this.h()},l(a){t=D(a,"BUTTON",{class:!0});var c=P(t);n=x(c,o),c.forEach(N),this.h()},h(){F(t,"class",de("cell value "+e[7])+" svelte-136izju"),t.disabled=l=e[0].fixed,z(t,"fixed",e[0].fixed),z(t,"highlight",e[3]!==void 0&&e[3]===e[0].value)},m(a,c){L(a,t,c),v(t,n),e[10](t),s||(r=K(t,"click",e[4]),s=!0)},p(a,c){c&1&&o!==(o=a[0].value+"")&&Ie(n,o),c&1&&l!==(l=a[0].fixed)&&(t.disabled=l),c&1&&z(t,"fixed",a[0].fixed),c&9&&z(t,"highlight",a[3]!==void 0&&a[3]===a[0].value)},d(a){a&&N(t),e[10](null),s=!1,r()}}}function Se(e){let t;return{c(){t=Z(e[16])},l(o){t=x(o,e[16])},m(o,n){L(o,t,n)},d(o){o&&N(t)}}}function ye(e){let t,o=e[0].notes.includes(e[16]),n,l=o&&Se(e);return{c(){t=T("div"),l&&l.c(),n=y(),this.h()},l(s){t=D(s,"DIV",{class:!0});var r=P(t);l&&l.l(r),n=$(r),r.forEach(N),this.h()},h(){F(t,"class","note svelte-136izju"),z(t,"hinted-note",e[5].includes(e[16])),z(t,"hinted-remove-note",e[6].includes(e[16])),z(t,"highlight",e[3]!==void 0&&e[3]===e[16])},m(s,r){L(s,t,r),l&&l.m(t,null),v(t,n)},p(s,r){r&1&&(o=s[0].notes.includes(s[16])),o?l||(l=Se(s),l.c(),l.m(t,n)):l&&(l.d(1),l=null),r&8&&z(t,"highlight",s[3]!==void 0&&s[3]===s[16])},d(s){s&&N(t),l&&l.d()}}}function it(e){let t;function o(s,r){return s[0].value?rt:st}let n=o(e),l=n(e);return{c(){l.c(),t=W()},l(s){l.l(s),t=W()},m(s,r){l.m(s,r),L(s,t,r)},p(s,[r]){n===(n=o(s))&&l?l.p(s,r):(l.d(1),l=n(s),l&&(l.c(),l.m(t.parentNode,t)))},i:le,o:le,d(s){s&&N(t),l.d(s)}}}function at(e,t,o){let n,l;ve(e,lt,d=>o(12,n=d)),ve(e,nt,d=>o(3,l=d));let{cell:s}=t,{position:r}=t,{gridErrors:a}=t;const c=Ce(),p=Ce();let m;const U=()=>{je(tt,{initialState:s,onSelectionUpdated:u=>{c("cellUpdate",{cell:s,update:u})},onComputeCellNotes:()=>{p("computeCellNotes",{position:r})},parentBoundingRect:m.getBoundingClientRect()})};let g="";const E=[],C=[];for(const d of n){for(const i of d.cause)i.row===r.row&&i.col===r.col&&(d.type==="naked_pair"?g="naked-pair-hint":g="lone-hint",E.push(...i.notes));if(ot(d))for(const i of d.effect)i.row===r.row&&i.col===r.col&&C.push(...i.notes)}const V=[];for(const d of a){const i=3*Math.floor(r.row/3)+Math.floor(r.col/3),u=3*Math.floor(d.row/3)+Math.floor(d.col/3);if(d.col===r.col&&d.row===r.row||d.type==="column"&&d.col===r.col&&d.value===s.value||d.type==="row"&&d.row===r.row&&d.value===s.value||d.type==="square"&&i===u&&d.value===s.value){V.push("is-error-cell");continue}d.type==="column"&&d.col===r.col&&V.push("is-error-col"),d.type==="row"&&d.row===r.row&&V.push("is-error-row"),d.type==="square"&&i===u&&V.push("is-error-square")}let b=V.join(" ");function O(d){we[d?"unshift":"push"](()=>{m=d,o(1,m)})}function w(d){we[d?"unshift":"push"](()=>{m=d,o(1,m)})}return e.$$set=d=>{"cell"in d&&o(0,s=d.cell),"position"in d&&o(8,r=d.position),"gridErrors"in d&&o(9,a=d.gridErrors)},[s,m,g,l,U,E,C,b,r,a,O,w]}class Y extends re{constructor(t){super(),ie(this,t,at,it,ee,{cell:0,position:8,gridErrors:9})}}function ut(e){let t,o,n,l,s,r,a,c,p,m,U,g,E,C,V,b,O,w,d;return o=new Y({props:{cell:e[5][0],gridErrors:e[0],position:{row:e[3],col:e[4]}}}),o.$on("cellUpdate",e[8]),o.$on("computeCellNotes",e[9]),l=new Y({props:{cell:e[5][1],gridErrors:e[0],position:{row:e[3],col:e[4]+1}}}),l.$on("cellUpdate",e[10]),l.$on("computeCellNotes",e[11]),r=new Y({props:{cell:e[5][2],gridErrors:e[0],position:{row:e[3],col:e[4]+2}}}),r.$on("cellUpdate",e[12]),r.$on("computeCellNotes",e[13]),c=new Y({props:{cell:e[5][3],gridErrors:e[0],position:{row:e[3]+1,col:e[4]}}}),c.$on("cellUpdate",e[14]),c.$on("computeCellNotes",e[15]),m=new Y({props:{cell:e[5][4],gridErrors:e[0],position:{row:e[3]+1,col:e[4]+1}}}),m.$on("cellUpdate",e[16]),m.$on("computeCellNotes",e[17]),g=new Y({props:{cell:e[5][5],gridErrors:e[0],position:{row:e[3]+1,col:e[4]+2}}}),g.$on("cellUpdate",e[18]),g.$on("computeCellNotes",e[19]),C=new Y({props:{cell:e[5][6],gridErrors:e[0],position:{row:e[3]+2,col:e[4]}}}),C.$on("cellUpdate",e[20]),C.$on("computeCellNotes",e[21]),b=new Y({props:{cell:e[5][7],gridErrors:e[0],position:{row:e[3]+2,col:e[4]+1}}}),b.$on("cellUpdate",e[22]),b.$on("computeCellNotes",e[23]),w=new Y({props:{cell:e[5][8],gridErrors:e[0],position:{row:e[3]+2,col:e[4]+2}}}),w.$on("cellUpdate",e[24]),w.$on("computeCellNotes",e[25]),{c(){t=T("div"),R(o.$$.fragment),n=y(),R(l.$$.fragment),s=y(),R(r.$$.fragment),a=y(),R(c.$$.fragment),p=y(),R(m.$$.fragment),U=y(),R(g.$$.fragment),E=y(),R(C.$$.fragment),V=y(),R(b.$$.fragment),O=y(),R(w.$$.fragment),this.h()},l(i){t=D(i,"DIV",{class:!0});var u=P(t);B(o.$$.fragment,u),n=$(u),B(l.$$.fragment,u),s=$(u),B(r.$$.fragment,u),a=$(u),B(c.$$.fragment,u),p=$(u),B(m.$$.fragment,u),U=$(u),B(g.$$.fragment,u),E=$(u),B(C.$$.fragment,u),V=$(u),B(b.$$.fragment,u),O=$(u),B(w.$$.fragment,u),u.forEach(N),this.h()},h(){F(t,"class","cell-grid svelte-1nq1cl9"),z(t,"borderLeftRight",e[1]),z(t,"borderTopBottom",e[2])},m(i,u){L(i,t,u),G(o,t,null),v(t,n),G(l,t,null),v(t,s),G(r,t,null),v(t,a),G(c,t,null),v(t,p),G(m,t,null),v(t,U),G(g,t,null),v(t,E),G(C,t,null),v(t,V),G(b,t,null),v(t,O),G(w,t,null),d=!0},p(i,[u]){const M={};u&1&&(M.gridErrors=i[0]),o.$set(M);const f={};u&1&&(f.gridErrors=i[0]),l.$set(f);const _={};u&1&&(_.gridErrors=i[0]),r.$set(_);const I={};u&1&&(I.gridErrors=i[0]),c.$set(I);const S={};u&1&&(S.gridErrors=i[0]),m.$set(S);const q={};u&1&&(q.gridErrors=i[0]),g.$set(q);const X={};u&1&&(X.gridErrors=i[0]),C.$set(X);const h={};u&1&&(h.gridErrors=i[0]),b.$set(h);const J={};u&1&&(J.gridErrors=i[0]),w.$set(J)},i(i){d||(A(o.$$.fragment,i),A(l.$$.fragment,i),A(r.$$.fragment,i),A(c.$$.fragment,i),A(m.$$.fragment,i),A(g.$$.fragment,i),A(C.$$.fragment,i),A(b.$$.fragment,i),A(w.$$.fragment,i),d=!0)},o(i){j(o.$$.fragment,i),j(l.$$.fragment,i),j(r.$$.fragment,i),j(c.$$.fragment,i),j(m.$$.fragment,i),j(g.$$.fragment,i),j(C.$$.fragment,i),j(b.$$.fragment,i),j(w.$$.fragment,i),d=!1},d(i){i&&N(t),H(o),H(l),H(r),H(c),H(m),H(g),H(C),H(b),H(w)}}}function ft(e,t,o){let{position:n}=t,{grid:l}=t,{gridErrors:s}=t;const r=[1,4,7].includes(n),a=[3,4,5].includes(n),c=3*Math.floor(n/3),p=3*(n%3),m=He(n,l);function U(h){k.call(this,e,h)}function g(h){k.call(this,e,h)}function E(h){k.call(this,e,h)}function C(h){k.call(this,e,h)}function V(h){k.call(this,e,h)}function b(h){k.call(this,e,h)}function O(h){k.call(this,e,h)}function w(h){k.call(this,e,h)}function d(h){k.call(this,e,h)}function i(h){k.call(this,e,h)}function u(h){k.call(this,e,h)}function M(h){k.call(this,e,h)}function f(h){k.call(this,e,h)}function _(h){k.call(this,e,h)}function I(h){k.call(this,e,h)}function S(h){k.call(this,e,h)}function q(h){k.call(this,e,h)}function X(h){k.call(this,e,h)}return e.$$set=h=>{"position"in h&&o(6,n=h.position),"grid"in h&&o(7,l=h.grid),"gridErrors"in h&&o(0,s=h.gridErrors)},[s,r,a,c,p,m,n,l,U,g,E,C,V,b,O,w,d,i,u,M,f,_,I,S,q,X]}class Q extends re{constructor(t){super(),ie(this,t,ft,ut,ee,{position:6,grid:7,gridErrors:0})}}function ct(e){let t,o,n,l,s,r,a,c,p,m,U,g,E,C,V,b,O,w,d;return o=new Q({props:{position:0,gridErrors:e[1],grid:e[0]}}),o.$on("cellUpdate",e[2]),o.$on("computeCellNotes",e[3]),l=new Q({props:{position:1,gridErrors:e[1],grid:e[0]}}),l.$on("cellUpdate",e[4]),l.$on("computeCellNotes",e[5]),r=new Q({props:{position:2,gridErrors:e[1],grid:e[0]}}),r.$on("cellUpdate",e[6]),r.$on("computeCellNotes",e[7]),c=new Q({props:{position:3,gridErrors:e[1],grid:e[0]}}),c.$on("cellUpdate",e[8]),c.$on("computeCellNotes",e[9]),m=new Q({props:{position:4,gridErrors:e[1],grid:e[0]}}),m.$on("cellUpdate",e[10]),m.$on("computeCellNotes",e[11]),g=new Q({props:{position:5,gridErrors:e[1],grid:e[0]}}),g.$on("cellUpdate",e[12]),g.$on("computeCellNotes",e[13]),C=new Q({props:{position:6,gridErrors:e[1],grid:e[0]}}),C.$on("cellUpdate",e[14]),C.$on("computeCellNotes",e[15]),b=new Q({props:{position:7,gridErrors:e[1],grid:e[0]}}),b.$on("cellUpdate",e[16]),b.$on("computeCellNotes",e[17]),w=new Q({props:{position:8,gridErrors:e[1],grid:e[0]}}),w.$on("cellUpdate",e[18]),w.$on("computeCellNotes",e[19]),{c(){t=T("div"),R(o.$$.fragment),n=y(),R(l.$$.fragment),s=y(),R(r.$$.fragment),a=y(),R(c.$$.fragment),p=y(),R(m.$$.fragment),U=y(),R(g.$$.fragment),E=y(),R(C.$$.fragment),V=y(),R(b.$$.fragment),O=y(),R(w.$$.fragment),this.h()},l(i){t=D(i,"DIV",{class:!0});var u=P(t);B(o.$$.fragment,u),n=$(u),B(l.$$.fragment,u),s=$(u),B(r.$$.fragment,u),a=$(u),B(c.$$.fragment,u),p=$(u),B(m.$$.fragment,u),U=$(u),B(g.$$.fragment,u),E=$(u),B(C.$$.fragment,u),V=$(u),B(b.$$.fragment,u),O=$(u),B(w.$$.fragment,u),u.forEach(N),this.h()},h(){F(t,"class","main-grid svelte-vli9ua")},m(i,u){L(i,t,u),G(o,t,null),v(t,n),G(l,t,null),v(t,s),G(r,t,null),v(t,a),G(c,t,null),v(t,p),G(m,t,null),v(t,U),G(g,t,null),v(t,E),G(C,t,null),v(t,V),G(b,t,null),v(t,O),G(w,t,null),d=!0},p(i,[u]){const M={};u&2&&(M.gridErrors=i[1]),u&1&&(M.grid=i[0]),o.$set(M);const f={};u&2&&(f.gridErrors=i[1]),u&1&&(f.grid=i[0]),l.$set(f);const _={};u&2&&(_.gridErrors=i[1]),u&1&&(_.grid=i[0]),r.$set(_);const I={};u&2&&(I.gridErrors=i[1]),u&1&&(I.grid=i[0]),c.$set(I);const S={};u&2&&(S.gridErrors=i[1]),u&1&&(S.grid=i[0]),m.$set(S);const q={};u&2&&(q.gridErrors=i[1]),u&1&&(q.grid=i[0]),g.$set(q);const X={};u&2&&(X.gridErrors=i[1]),u&1&&(X.grid=i[0]),C.$set(X);const h={};u&2&&(h.gridErrors=i[1]),u&1&&(h.grid=i[0]),b.$set(h);const J={};u&2&&(J.gridErrors=i[1]),u&1&&(J.grid=i[0]),w.$set(J)},i(i){d||(A(o.$$.fragment,i),A(l.$$.fragment,i),A(r.$$.fragment,i),A(c.$$.fragment,i),A(m.$$.fragment,i),A(g.$$.fragment,i),A(C.$$.fragment,i),A(b.$$.fragment,i),A(w.$$.fragment,i),d=!0)},o(i){j(o.$$.fragment,i),j(l.$$.fragment,i),j(r.$$.fragment,i),j(c.$$.fragment,i),j(m.$$.fragment,i),j(g.$$.fragment,i),j(C.$$.fragment,i),j(b.$$.fragment,i),j(w.$$.fragment,i),d=!1},d(i){i&&N(t),H(o),H(l),H(r),H(c),H(m),H(g),H(C),H(b),H(w)}}}function dt(e,t,o){let{grid:n}=t,{gridErrors:l}=t;function s(f){k.call(this,e,f)}function r(f){k.call(this,e,f)}function a(f){k.call(this,e,f)}function c(f){k.call(this,e,f)}function p(f){k.call(this,e,f)}function m(f){k.call(this,e,f)}function U(f){k.call(this,e,f)}function g(f){k.call(this,e,f)}function E(f){k.call(this,e,f)}function C(f){k.call(this,e,f)}function V(f){k.call(this,e,f)}function b(f){k.call(this,e,f)}function O(f){k.call(this,e,f)}function w(f){k.call(this,e,f)}function d(f){k.call(this,e,f)}function i(f){k.call(this,e,f)}function u(f){k.call(this,e,f)}function M(f){k.call(this,e,f)}return e.$$set=f=>{"grid"in f&&o(0,n=f.grid),"gridErrors"in f&&o(1,l=f.gridErrors)},[n,l,s,r,a,c,p,m,U,g,E,C,V,b,O,w,d,i,u,M]}class Ut extends re{constructor(t){super(),ie(this,t,dt,ct,ee,{grid:0,gridErrors:1})}}function $e(e){let t,o,n="grid has errors",l,s,r="grid is filled",a,c,p="grid is valid",m,U,g="grid has solutions",E,C,V=e[1]?"Has errors":"No errors",b,O,w,d=e[2]?"Is filled":"Not filled",i,u,M,f=e[3]?"Is valid":"Not valid",_,I,S,q;return{c(){t=T("div"),o=T("div"),o.textContent=n,l=y(),s=T("div"),s.textContent=r,a=y(),c=T("div"),c.textContent=p,m=y(),U=T("div"),U.textContent=g,E=y(),C=T("div"),b=Z(V),O=y(),w=T("div"),i=Z(d),u=y(),M=T("div"),_=Z(f),I=y(),S=T("div"),q=Z(e[4]),this.h()},l(X){t=D(X,"DIV",{class:!0});var h=P(t);o=D(h,"DIV",{"data-svelte-h":!0}),te(o)!=="svelte-1hlqbal"&&(o.textContent=n),l=$(h),s=D(h,"DIV",{"data-svelte-h":!0}),te(s)!=="svelte-ekf37s"&&(s.textContent=r),a=$(h),c=D(h,"DIV",{"data-svelte-h":!0}),te(c)!=="svelte-16e0vl8"&&(c.textContent=p),m=$(h),U=D(h,"DIV",{"data-svelte-h":!0}),te(U)!=="svelte-1tjrozg"&&(U.textContent=g),E=$(h),C=D(h,"DIV",{class:!0});var J=P(C);b=x(J,V),J.forEach(N),O=$(h),w=D(h,"DIV",{class:!0});var pe=P(w);i=x(pe,d),pe.forEach(N),u=$(h),M=D(h,"DIV",{class:!0});var me=P(M);_=x(me,f),me.forEach(N),I=$(h),S=D(h,"DIV",{class:!0});var ge=P(S);q=x(ge,e[4]),ge.forEach(N),h.forEach(N),this.h()},h(){F(C,"class","status svelte-1csoeu4"),z(C,"red",e[1]),F(w,"class","status svelte-1csoeu4"),z(w,"red",!e[2]),F(M,"class","status svelte-1csoeu4"),z(M,"red",!e[3]),F(S,"class","status svelte-1csoeu4"),z(S,"red",e[4]!=="unique"),F(t,"class","grid-status svelte-1csoeu4")},m(X,h){L(X,t,h),v(t,o),v(t,l),v(t,s),v(t,a),v(t,c),v(t,m),v(t,U),v(t,E),v(t,C),v(C,b),v(t,O),v(t,w),v(w,i),v(t,u),v(t,M),v(M,_),v(t,I),v(t,S),v(S,q)},p:le,d(X){X&&N(t)}}}function ht(e){let t=e[0],o,n=$e(e);return{c(){n.c(),o=W()},l(l){n.l(l),o=W()},m(l,s){n.m(l,s),L(l,o,s)},p(l,[s]){s&1&&ee(t,t=l[0])?(n.d(1),n=$e(l),n.c(),n.m(o.parentNode,o)):n.p(l,s)},i:le,o:le,d(l){l&&N(o),n.d(l)}}}function _t(e,t,o){let{grid:n}=t,l=se(n),s=oe(n),r=_e(n),a=Ke(n);return e.$$set=c=>{"grid"in c&&o(0,n=c.grid)},[n,l,s,r,a]}class Mt extends re{constructor(t){super(),ie(this,t,_t,ht,ee,{grid:0})}}export{Mt as G,Ut as S,Et as a,kt as b,Ke as c,ne as d,bt as e,wt as f,Nt as g,nt as h,Le as i,Xe as m,Pe as r,lt as s,Ct as u};