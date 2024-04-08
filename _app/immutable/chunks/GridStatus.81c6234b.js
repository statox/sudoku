import{s as te,e as Y,i as K,y as W,G as ne,d as q,C as Te,D as Oe,o as He,f as A,l as x,a as T,g as G,h as L,m as ee,c as O,H as le,j,k as he,I as p,M as Fe,n as Re,K as me,L as X,N as Ce,p as we,O as pe,P as M}from"./scheduler.193db7c4.js";import{S as fe,i as ce,b as H,d as F,m as P,a as y,t as z,e as $}from"./index.9bea933b.js";import{a as oe,b as Be,d as Pe}from"./store.8b4149bb.js";import{p as ye}from"./stores.6e2e5794.js";import{w as ze}from"./index.33e6b952.js";const $e=(e,t)=>{if(e<0||e>8)throw new Error(`unexpected square position: ${e}`);const l=Math.floor(e/3),o=e%3,n=3*l,s=3*o;return[t[n][s],t[n][s+1],t[n][s+2],t[n+1][s],t[n+1][s+1],t[n+1][s+2],t[n+2][s],t[n+2][s+1],t[n+2][s+2]]};function Le(e){return e.notes!==void 0}function Xe(e){return e.clear===!0}const Ct=(e,t)=>{if(e.fixed)throw new Error("Tried to update fixed cell");if(Le(t)){e.value=void 0,e.notes=[...t.notes];return}if(Xe(t)){e.notes=[],e.value=void 0;return}e.notes=[],e.value=t.value},ae=e=>JSON.parse(JSON.stringify(e)),de=(e,t,l,o)=>{if(!o||e[t][l].value)return!1;const n=e[t][l].notes.indexOf(o);return n===-1?!1:(e[t][l].notes.splice(n,1),!0)},wt=e=>{for(let t=0;t<9;t++)for(let l=0;l<9;l++)e[t][l].notes=[]},Ke=(e,t)=>{const{row:l,col:o}=t;if(e[l][o].value){e[l][o].notes=[];return}e[l][o].notes=[1,2,3,4,5,6,7,8,9];const n=Math.floor(o/3),s=Math.floor(l/3);for(let i=0;i<9;i++){const a=e[i][o].value;de(e,l,o,a);const c=e[l][i].value;de(e,l,o,c);const g=Math.floor(i/3),v=i%3,I=e[3*s+g][3*n+v].value;de(e,l,o,I)}return e[l][o].notes},We=e=>{for(let t=0;t<9;t++)for(let l=0;l<9;l++)Ke(e,{row:t,col:l})},bt=e=>{for(let t=0;t<9;t++)for(let l=0;l<9;l++)e[t][l].fixed||(e[t][l].value=void 0,e[t][l].notes=[])},Je=(e,t,l)=>{const{col:o,row:n}=t;if(e[n][o].value!==void 0)return!1;const s=Math.floor(o/3),i=Math.floor(n/3);for(let a=0;a<9;a++){if(e[n][a].value===l||e[a][o].value===l)return!1;const c=Math.floor(a/3),g=a%3;if(e[3*i+c][3*s+g].value===l)return!1}return!0},Nt=e=>{const t=[],l=new Array(27).fill(0);for(let o=0;o<9;o++)for(let n=0;n<9;n++){if(e[o][n].value===void 0)continue;const s=e[o][n].value,i=1<<s-1,a=l[o],c=l[9+n],g=l[18+Math.floor(o/3)*3+Math.floor(n/3)];a&i&&t.push({type:"row",col:n,row:o,value:s}),c&i&&t.push({type:"column",col:n,row:o,value:s}),g&i&&t.push({type:"square",col:n,row:o,value:s}),l[o]^=i,l[9+n]^=i,l[18+Math.floor(o/3)*3+Math.floor(n/3)]^=i}return t},ue=e=>{const t=new Array(27).fill(0);for(let l=0;l<9;l++)for(let o=0;o<9;o++){if(e[l][o].value===void 0)continue;const s=1<<e[l][o].value-1,i=t[l],a=t[9+o],c=t[18+Math.floor(l/3)*3+Math.floor(o/3)];if(i&s||a&s||c&s)return!0;t[l]^=s,t[9+o]^=s,t[18+Math.floor(l/3)*3+Math.floor(o/3)]^=s}return!1},se=e=>{for(let t=0;t<9;t++)for(let l=0;l<9;l++)if(!e[t][l].value)return!1;return!0},ve=e=>se(e)&&!ue(e);let ge=0;const Ae=1e4,Ye=e=>{if(se(e))return ve(e)?"unique":"none";const t=ae(e);let l=0;for(let n=0;n<9;n++)for(let s=0;s<9;s++)e[n][s].value!==void 0&&l++;const o=[];return ge=0,Ge(t,o,l),ge>=Ae?"unreachable":o.length===0?"none":o.length===1?"unique":"notUnique"},Ge=(e,t,l)=>{if(!(ge++>=Ae)){for(let o=0;o<9;o++)for(let n=0;n<9;n++)if(e[o][n].value===void 0){for(let s=1;s<=9;s++)if(Je(e,{row:o,col:n},s)){if(e[o][n].value=s,Ge(e,t,l+1)&&(l===80&&t.push(ae(e)),t.length>=2))return!0;e[o][n].value=void 0}return!1}return!0}},Et=(e,t)=>{if(ue(e)||se(e))return e;const l=ae(e);We(l);const o=[l];for(;o.length;){const n=o.pop();if(t&&t.push(ae(n)),ue(n))continue;if(se(n)){if(ve(n))return n;continue}const s=xe(n);if(!s.length)continue;const i=Math.floor(Math.random()*s.length),a=s[i],c=ae(n);c[a.row][a.col].notes=c[a.row][a.col].notes.filter(g=>g!==a.value),o.push(c),Ze(n,a),je(n),o.push(n)}return l},_e=(e,t,l,o)=>{if(e[t][l].value)return!1;const n=e[t][l].notes.indexOf(o);return n===-1?!1:(e[t][l].notes.splice(n,1),e[t][l].notes.length===1?(e[t][l].value=e[t][l].notes.pop(),!0):!1)},je=e=>{if(se(e)||ue(e))return;let t=!1;for(let l=0;l<9;l++)for(let o=0;o<9;o++){const{value:n}=e[l][o];if(!n)continue;for(let a=0;a<9;a++)t=t||_e(e,a,o,n),t=t||_e(e,l,a,n);const s=Math.floor(o/3),i=Math.floor(l/3);for(let a=0;a<3;a++)for(let c=0;c<3;c++)t=t||_e(e,3*i+a,3*s+c,n)}t&&je(e)},Qe=(e,t)=>{const{row:l,col:o,value:n}=t;return!(e[l][o].value||!e[l][o].notes.includes(n))},Ze=(e,t)=>{if(!Qe(e,t))return;const{row:l,col:o,value:n}=t;e[l][o].value=n,e[l][o].notes=[]},xe=e=>{let t=[],l=9;for(let o=0;o<9;o++)for(let n=0;n<9;n++){if(e[o][n].value!==void 0)continue;const{notes:s}=e[o][n];if(s.length<l&&(l=s.length,t=[]),s.length===l)for(const i of e[o][n].notes)t.push({row:o,col:n,value:i})}return t},kt=()=>{const e=[];for(let t=0;t<9;t++){e.push([]);for(let l=0;l<9;l++){const o={value:void 0,fixed:!1,notes:[1,2,3,4,5,6,7,8,9]};e[e.length-1].push(o)}}return e};function be(e,t,l){const o=e.slice();return o[22]=t[l],o}function Ne(e,t,l){const o=e.slice();return o[22]=t[l],o}function Ee(e){let t=e[2],l,o=qe(e);return{c(){o.c(),l=Y()},l(n){o.l(n),l=Y()},m(n,s){o.m(n,s),K(n,l,s)},p(n,s){s&4&&te(t,t=n[2])?(o.d(1),o=qe(n),o.c(),o.m(l.parentNode,l)):o.p(n,s)},d(n){n&&q(l),o.d(n)}}}function ke(e){let t,l,o,n;function s(){return e[16](e[22])}return{c(){t=A("button"),l=x(e[22]),this.h()},l(i){t=G(i,"BUTTON",{class:!0});var a=L(t);l=ee(a,e[22]),a.forEach(q),this.h()},h(){j(t,"class","choice-btn svelte-oghbug"),X(t,"selected",e[5]===e[22])},m(i,a){K(i,t,a),p(t,l),o||(n=W(t,"click",s),o=!0)},p(i,a){e=i,a&32&&X(t,"selected",e[5]===e[22])},d(i){i&&q(t),o=!1,n()}}}function Ue(e){let t,l,o,n;function s(){return e[17](e[22])}return{c(){t=A("button"),l=x(e[22]),this.h()},l(i){t=G(i,"BUTTON",{class:!0});var a=L(t);l=ee(a,e[22]),a.forEach(q),this.h()},h(){j(t,"class","choice-btn svelte-oghbug"),X(t,"selected",e[4][e[22]-1])},m(i,a){K(i,t,a),p(t,l),o||(n=W(t,"click",s),o=!0)},p(i,a){e=i,a&16&&X(t,"selected",e[4][e[22]-1])},d(i){i&&q(t),o=!1,n()}}}function Me(e){let t=e[4],l,o=Ue(e);return{c(){o.c(),l=Y()},l(n){o.l(n),l=Y()},m(n,s){o.m(n,s),K(n,l,s)},p(n,s){s&16&&te(t,t=n[4])?(o.d(1),o=Ue(n),o.c(),o.m(l.parentNode,l)):o.p(n,s)},d(n){n&&q(l),o.d(n)}}}function qe(e){let t,l,o,n=e[6]?"Valeur":"Value",s,i,a,c="✖",g,v,I,C,D="Notes",w,S,U,R,b,d="Auto notes",r,u,B=oe([1,2,3,4,5,6,7,8,9]),V=[];for(let m=0;m<9;m+=1)V[m]=ke(Ne(e,B,m));let f=oe([1,2,3,4,5,6,7,8,9]),k=[];for(let m=0;m<9;m+=1)k[m]=Me(be(e,f,m));return{c(){t=A("div"),l=A("div"),o=A("h3"),s=x(n),i=T(),a=A("button"),a.textContent=c,g=T(),v=A("div");for(let m=0;m<9;m+=1)V[m].c();I=T(),C=A("h3"),C.textContent=D,w=T(),S=A("div");for(let m=0;m<9;m+=1)k[m].c();U=T(),R=A("div"),b=A("button"),b.textContent=d,this.h()},l(m){t=G(m,"DIV",{role:!0,class:!0,style:!0});var E=L(t);l=G(E,"DIV",{class:!0});var h=L(l);o=G(h,"H3",{class:!0});var N=L(o);s=ee(N,n),i=O(N),a=G(N,"BUTTON",{"data-svelte-h":!0}),le(a)!=="svelte-15i1wwz"&&(a.textContent=c),N.forEach(q),g=O(h),v=G(h,"DIV",{class:!0});var _=L(v);for(let J=0;J<9;J+=1)V[J].l(_);_.forEach(q),I=O(h),C=G(h,"H3",{"data-svelte-h":!0}),le(C)!=="svelte-2havtt"&&(C.textContent=D),w=O(h),S=G(h,"DIV",{class:!0});var re=L(S);for(let J=0;J<9;J+=1)k[J].l(re);re.forEach(q),U=O(h),R=G(h,"DIV",{});var ie=L(R);b=G(ie,"BUTTON",{"data-svelte-h":!0}),le(b)!=="svelte-1y6181p"&&(b.textContent=d),ie.forEach(q),h.forEach(q),E.forEach(q),this.h()},h(){j(o,"class","title-bar svelte-oghbug"),j(v,"class","grid svelte-oghbug"),j(S,"class","grid svelte-oghbug"),j(l,"class","contents svelte-oghbug"),j(t,"role","dialog"),j(t,"class","modal svelte-oghbug"),he(t,"top",e[2]+"px"),he(t,"left",e[3]+"px")},m(m,E){K(m,t,E),p(t,l),p(l,o),p(o,s),p(o,i),p(o,a),p(l,g),p(l,v);for(let h=0;h<9;h+=1)V[h]&&V[h].m(v,null);p(l,I),p(l,C),p(l,w),p(l,S);for(let h=0;h<9;h+=1)k[h]&&k[h].m(S,null);p(l,U),p(l,R),p(R,b),r||(u=[W(a,"click",Be),W(b,"click",function(){Fe(e[1])&&e[1].apply(this,arguments)}),W(t,"mousedown",e[10])],r=!0)},p(m,E){if(e=m,E&64&&n!==(n=e[6]?"Valeur":"Value")&&Re(s,n),E&160){B=oe([1,2,3,4,5,6,7,8,9]);let h;for(h=0;h<9;h+=1){const N=Ne(e,B,h);V[h]?V[h].p(N,E):(V[h]=ke(N),V[h].c(),V[h].m(v,null))}for(;h<9;h+=1)V[h].d(1)}if(E&144){f=oe([1,2,3,4,5,6,7,8,9]);let h;for(h=0;h<9;h+=1){const N=be(e,f,h);k[h]?k[h].p(N,E):(k[h]=Me(N),k[h].c(),k[h].m(S,null))}for(;h<9;h+=1)k[h].d(1)}E&4&&he(t,"top",e[2]+"px"),E&8&&he(t,"left",e[3]+"px")},d(m){m&&q(t),me(V,m),me(k,m),r=!1,Te(u)}}}function et(e){let t,l,o,n=e[0]&&Ee(e);return{c(){n&&n.c(),t=Y()},l(s){n&&n.l(s),t=Y()},m(s,i){n&&n.m(s,i),K(s,t,i),l||(o=[W(window,"keydown",e[8]),W(window,"keyup",e[9]),W(window,"mouseup",e[12]),W(window,"mousemove",e[11])],l=!0)},p(s,[i]){s[0]?n?n.p(s,i):(n=Ee(s),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:ne,o:ne,d(s){s&&q(t),n&&n.d(s),l=!1,Te(o)}}}function tt(e,t,l){let o;Oe(e,ye,f=>l(20,o=f));let{isOpen:n}=t,{onSelectionUpdated:s}=t,{onComputeCellNotes:i}=t,{initialState:a}=t,{cellBoundingRect:c}=t;const g=f=>{const k=document.body.getBoundingClientRect(),m=300,E=600;let h=f.top;h+E>k.height&&(h=k.height-E);let N=f.right;return N>k.width/2&&(N=f.left-m-f.width),{top:h,left:Math.max(0,N)}};let{top:v,left:I}=g(c);a.notes.length>0;let C=new Array(9).fill(!1).map((f,k)=>a.notes.includes(k+1)),D=a.value;const w=(f,k)=>{if(k==="notes"){l(4,C[f-1]=!C[f-1],C),l(4,C),l(5,D=void 0),s({notes:C.map((m,E)=>E+1).filter(m=>C[m-1])});return}if(D===f){s({clear:!0}),l(5,D=void 0),l(4,C=[]);return}l(5,D=f),l(4,C=[]),s({value:D}),Be()},S=f=>{const k="!@#$%^&*(",m=f.getModifierState("Shift");let E;if(E=f.key,E==="Backspace"){s({clear:!0}),l(4,C=new Array(9).fill(!1).map((h,N)=>!1)),l(5,D=void 0);return}k.includes(E)&&(E=k.indexOf(E)+1),!isNaN(Number(E))&&w(Number(E),m?"notes":"value")},U=f=>{};let R=!1;function b(){R=!0}function d(f){R&&(l(3,I+=f.movementX),l(2,v+=f.movementY))}function r(){R=!1}let u=!1;He(()=>{l(6,u=o.url.searchParams.has("fr"))});const B=f=>w(f,"value"),V=f=>w(f,"notes");return e.$$set=f=>{"isOpen"in f&&l(0,n=f.isOpen),"onSelectionUpdated"in f&&l(13,s=f.onSelectionUpdated),"onComputeCellNotes"in f&&l(1,i=f.onComputeCellNotes),"initialState"in f&&l(14,a=f.initialState),"cellBoundingRect"in f&&l(15,c=f.cellBoundingRect)},[n,i,v,I,C,D,u,w,S,U,b,d,r,s,a,c,B,V]}class lt extends fe{constructor(t){super(),ce(this,t,tt,et,te,{isOpen:0,onSelectionUpdated:13,onComputeCellNotes:1,initialState:14,cellBoundingRect:15})}}const nt=ze();function Se(e,t,l){const o=e.slice();return o[16]=t[l],o}function ot(e){let t,l,o,n,s=oe([1,2,3,4,5,6,7,8,9]),i=[];for(let a=0;a<9;a+=1)i[a]=Ie(Se(e,s,a));return{c(){t=A("button");for(let a=0;a<9;a+=1)i[a].c();this.h()},l(a){t=G(a,"BUTTON",{class:!0});var c=L(t);for(let g=0;g<9;g+=1)i[g].l(c);c.forEach(q),this.h()},h(){j(t,"class",l=pe("cell notes "+e[2]+" "+e[7])+" svelte-136izju")},m(a,c){K(a,t,c);for(let g=0;g<9;g+=1)i[g]&&i[g].m(t,null);e[12](t),o||(n=W(t,"click",e[4]),o=!0)},p(a,c){if(c&105){s=oe([1,2,3,4,5,6,7,8,9]);let g;for(g=0;g<9;g+=1){const v=Se(a,s,g);i[g]?i[g].p(v,c):(i[g]=Ie(v),i[g].c(),i[g].m(t,null))}for(;g<9;g+=1)i[g].d(1)}c&4&&l!==(l=pe("cell notes "+a[2]+" "+a[7])+" svelte-136izju")&&j(t,"class",l)},d(a){a&&q(t),me(i,a),e[12](null),o=!1,n()}}}function st(e){let t,l=e[0].value+"",o,n,s,i;return{c(){t=A("button"),o=x(l),this.h()},l(a){t=G(a,"BUTTON",{class:!0});var c=L(t);o=ee(c,l),c.forEach(q),this.h()},h(){j(t,"class",pe("cell value "+e[7])+" svelte-136izju"),t.disabled=n=e[0].fixed,X(t,"fixed",e[0].fixed),X(t,"highlight",e[3]!==void 0&&e[3]===e[0].value)},m(a,c){K(a,t,c),p(t,o),e[11](t),s||(i=W(t,"click",e[4]),s=!0)},p(a,c){c&1&&l!==(l=a[0].value+"")&&Re(o,l),c&1&&n!==(n=a[0].fixed)&&(t.disabled=n),c&1&&X(t,"fixed",a[0].fixed),c&9&&X(t,"highlight",a[3]!==void 0&&a[3]===a[0].value)},d(a){a&&q(t),e[11](null),s=!1,i()}}}function Ve(e){let t;return{c(){t=x(e[16])},l(l){t=ee(l,e[16])},m(l,o){K(l,t,o)},d(l){l&&q(t)}}}function Ie(e){let t,l=e[0].notes.includes(e[16]),o,n=l&&Ve(e);return{c(){t=A("div"),n&&n.c(),o=T(),this.h()},l(s){t=G(s,"DIV",{class:!0});var i=L(t);n&&n.l(i),o=O(i),i.forEach(q),this.h()},h(){j(t,"class","note svelte-136izju"),X(t,"hinted-note",e[5].includes(e[16])),X(t,"hinted-remove-note",e[6].includes(e[16])),X(t,"highlight",e[3]!==void 0&&e[3]===e[16])},m(s,i){K(s,t,i),n&&n.m(t,null),p(t,o)},p(s,i){i&1&&(l=s[0].notes.includes(s[16])),l?n||(n=Ve(s),n.c(),n.m(t,o)):n&&(n.d(1),n=null),i&8&&X(t,"highlight",s[3]!==void 0&&s[3]===s[16])},d(s){s&&q(t),n&&n.d()}}}function rt(e){let t;function l(s,i){return s[0].value?st:ot}let o=l(e),n=o(e);return{c(){n.c(),t=Y()},l(s){n.l(s),t=Y()},m(s,i){n.m(s,i),K(s,t,i)},p(s,[i]){o===(o=l(s))&&n?n.p(s,i):(n.d(1),n=o(s),n&&(n.c(),n.m(t.parentNode,t)))},i:ne,o:ne,d(s){s&&q(t),n.d(s)}}}function it(e,t,l){let o;Oe(e,nt,d=>l(3,o=d));let{cell:n}=t,{position:s}=t,{gridErrors:i}=t,{hints:a=[]}=t;const c=Ce(),g=Ce();let v;const I=()=>{Pe(lt,{initialState:n,onSelectionUpdated:u=>{c("cellUpdate",{cell:n,update:u})},onComputeCellNotes:()=>{g("computeCellNotes",{position:s})},cellBoundingRect:v.getBoundingClientRect()})};let C="";const D=[],w=[];for(const d of a){for(const r of d.cause)r.row===s.row&&r.col===s.col&&(d.type==="naked_pair"?C="naked-pair-hint":C="lone-hint",D.push(...r.notes));for(const r of d.effect)r.row===s.row&&r.col===s.col&&w.push(...r.notes)}const S=[];for(const d of i){const r=3*Math.floor(s.row/3)+Math.floor(s.col/3),u=3*Math.floor(d.row/3)+Math.floor(d.col/3);if(d.col===s.col&&d.row===s.row||d.type==="column"&&d.col===s.col&&d.value===n.value||d.type==="row"&&d.row===s.row&&d.value===n.value||d.type==="square"&&r===u&&d.value===n.value){S.push("is-error-cell");continue}d.type==="column"&&d.col===s.col&&S.push("is-error-col"),d.type==="row"&&d.row===s.row&&S.push("is-error-row"),d.type==="square"&&r===u&&S.push("is-error-square")}let U=S.join(" ");function R(d){we[d?"unshift":"push"](()=>{v=d,l(1,v)})}function b(d){we[d?"unshift":"push"](()=>{v=d,l(1,v)})}return e.$$set=d=>{"cell"in d&&l(0,n=d.cell),"position"in d&&l(8,s=d.position),"gridErrors"in d&&l(9,i=d.gridErrors),"hints"in d&&l(10,a=d.hints)},[n,v,C,o,I,D,w,U,s,i,a,R,b]}class Q extends fe{constructor(t){super(),ce(this,t,it,rt,te,{cell:0,position:8,gridErrors:9,hints:10})}}function at(e){let t,l,o,n,s,i,a,c,g,v,I,C,D,w,S,U,R,b,d;return l=new Q({props:{cell:e[6][0],hints:e[1],gridErrors:e[0],position:{row:e[4],col:e[5]}}}),l.$on("cellUpdate",e[9]),l.$on("computeCellNotes",e[10]),n=new Q({props:{cell:e[6][1],hints:e[1],gridErrors:e[0],position:{row:e[4],col:e[5]+1}}}),n.$on("cellUpdate",e[11]),n.$on("computeCellNotes",e[12]),i=new Q({props:{cell:e[6][2],hints:e[1],gridErrors:e[0],position:{row:e[4],col:e[5]+2}}}),i.$on("cellUpdate",e[13]),i.$on("computeCellNotes",e[14]),c=new Q({props:{cell:e[6][3],hints:e[1],gridErrors:e[0],position:{row:e[4]+1,col:e[5]}}}),c.$on("cellUpdate",e[15]),c.$on("computeCellNotes",e[16]),v=new Q({props:{cell:e[6][4],hints:e[1],gridErrors:e[0],position:{row:e[4]+1,col:e[5]+1}}}),v.$on("cellUpdate",e[17]),v.$on("computeCellNotes",e[18]),C=new Q({props:{cell:e[6][5],hints:e[1],gridErrors:e[0],position:{row:e[4]+1,col:e[5]+2}}}),C.$on("cellUpdate",e[19]),C.$on("computeCellNotes",e[20]),w=new Q({props:{cell:e[6][6],hints:e[1],gridErrors:e[0],position:{row:e[4]+2,col:e[5]}}}),w.$on("cellUpdate",e[21]),w.$on("computeCellNotes",e[22]),U=new Q({props:{cell:e[6][7],hints:e[1],gridErrors:e[0],position:{row:e[4]+2,col:e[5]+1}}}),U.$on("cellUpdate",e[23]),U.$on("computeCellNotes",e[24]),b=new Q({props:{cell:e[6][8],hints:e[1],gridErrors:e[0],position:{row:e[4]+2,col:e[5]+2}}}),b.$on("cellUpdate",e[25]),b.$on("computeCellNotes",e[26]),{c(){t=A("div"),H(l.$$.fragment),o=T(),H(n.$$.fragment),s=T(),H(i.$$.fragment),a=T(),H(c.$$.fragment),g=T(),H(v.$$.fragment),I=T(),H(C.$$.fragment),D=T(),H(w.$$.fragment),S=T(),H(U.$$.fragment),R=T(),H(b.$$.fragment),this.h()},l(r){t=G(r,"DIV",{class:!0});var u=L(t);F(l.$$.fragment,u),o=O(u),F(n.$$.fragment,u),s=O(u),F(i.$$.fragment,u),a=O(u),F(c.$$.fragment,u),g=O(u),F(v.$$.fragment,u),I=O(u),F(C.$$.fragment,u),D=O(u),F(w.$$.fragment,u),S=O(u),F(U.$$.fragment,u),R=O(u),F(b.$$.fragment,u),u.forEach(q),this.h()},h(){j(t,"class","cell-grid svelte-1nq1cl9"),X(t,"borderLeftRight",e[2]),X(t,"borderTopBottom",e[3])},m(r,u){K(r,t,u),P(l,t,null),p(t,o),P(n,t,null),p(t,s),P(i,t,null),p(t,a),P(c,t,null),p(t,g),P(v,t,null),p(t,I),P(C,t,null),p(t,D),P(w,t,null),p(t,S),P(U,t,null),p(t,R),P(b,t,null),d=!0},p(r,[u]){const B={};u&2&&(B.hints=r[1]),u&1&&(B.gridErrors=r[0]),l.$set(B);const V={};u&2&&(V.hints=r[1]),u&1&&(V.gridErrors=r[0]),n.$set(V);const f={};u&2&&(f.hints=r[1]),u&1&&(f.gridErrors=r[0]),i.$set(f);const k={};u&2&&(k.hints=r[1]),u&1&&(k.gridErrors=r[0]),c.$set(k);const m={};u&2&&(m.hints=r[1]),u&1&&(m.gridErrors=r[0]),v.$set(m);const E={};u&2&&(E.hints=r[1]),u&1&&(E.gridErrors=r[0]),C.$set(E);const h={};u&2&&(h.hints=r[1]),u&1&&(h.gridErrors=r[0]),w.$set(h);const N={};u&2&&(N.hints=r[1]),u&1&&(N.gridErrors=r[0]),U.$set(N);const _={};u&2&&(_.hints=r[1]),u&1&&(_.gridErrors=r[0]),b.$set(_)},i(r){d||(y(l.$$.fragment,r),y(n.$$.fragment,r),y(i.$$.fragment,r),y(c.$$.fragment,r),y(v.$$.fragment,r),y(C.$$.fragment,r),y(w.$$.fragment,r),y(U.$$.fragment,r),y(b.$$.fragment,r),d=!0)},o(r){z(l.$$.fragment,r),z(n.$$.fragment,r),z(i.$$.fragment,r),z(c.$$.fragment,r),z(v.$$.fragment,r),z(C.$$.fragment,r),z(w.$$.fragment,r),z(U.$$.fragment,r),z(b.$$.fragment,r),d=!1},d(r){r&&q(t),$(l),$(n),$(i),$(c),$(v),$(C),$(w),$(U),$(b)}}}function ut(e,t,l){let{position:o}=t,{grid:n}=t,{gridErrors:s}=t,{hints:i=[]}=t;const a=[1,4,7].includes(o),c=[3,4,5].includes(o),g=3*Math.floor(o/3),v=3*(o%3),I=$e(o,n);function C(_){M.call(this,e,_)}function D(_){M.call(this,e,_)}function w(_){M.call(this,e,_)}function S(_){M.call(this,e,_)}function U(_){M.call(this,e,_)}function R(_){M.call(this,e,_)}function b(_){M.call(this,e,_)}function d(_){M.call(this,e,_)}function r(_){M.call(this,e,_)}function u(_){M.call(this,e,_)}function B(_){M.call(this,e,_)}function V(_){M.call(this,e,_)}function f(_){M.call(this,e,_)}function k(_){M.call(this,e,_)}function m(_){M.call(this,e,_)}function E(_){M.call(this,e,_)}function h(_){M.call(this,e,_)}function N(_){M.call(this,e,_)}return e.$$set=_=>{"position"in _&&l(7,o=_.position),"grid"in _&&l(8,n=_.grid),"gridErrors"in _&&l(0,s=_.gridErrors),"hints"in _&&l(1,i=_.hints)},[s,i,a,c,g,v,I,o,n,C,D,w,S,U,R,b,d,r,u,B,V,f,k,m,E,h,N]}class Z extends fe{constructor(t){super(),ce(this,t,ut,at,te,{position:7,grid:8,gridErrors:0,hints:1})}}function ft(e){let t,l,o,n,s,i,a,c,g,v,I,C,D,w,S,U,R,b,d;return l=new Z({props:{position:0,hints:e[2],gridErrors:e[1],grid:e[0]}}),l.$on("cellUpdate",e[3]),l.$on("computeCellNotes",e[4]),n=new Z({props:{position:1,hints:e[2],gridErrors:e[1],grid:e[0]}}),n.$on("cellUpdate",e[5]),n.$on("computeCellNotes",e[6]),i=new Z({props:{position:2,hints:e[2],gridErrors:e[1],grid:e[0]}}),i.$on("cellUpdate",e[7]),i.$on("computeCellNotes",e[8]),c=new Z({props:{position:3,hints:e[2],gridErrors:e[1],grid:e[0]}}),c.$on("cellUpdate",e[9]),c.$on("computeCellNotes",e[10]),v=new Z({props:{position:4,hints:e[2],gridErrors:e[1],grid:e[0]}}),v.$on("cellUpdate",e[11]),v.$on("computeCellNotes",e[12]),C=new Z({props:{position:5,hints:e[2],gridErrors:e[1],grid:e[0]}}),C.$on("cellUpdate",e[13]),C.$on("computeCellNotes",e[14]),w=new Z({props:{position:6,hints:e[2],gridErrors:e[1],grid:e[0]}}),w.$on("cellUpdate",e[15]),w.$on("computeCellNotes",e[16]),U=new Z({props:{position:7,hints:e[2],gridErrors:e[1],grid:e[0]}}),U.$on("cellUpdate",e[17]),U.$on("computeCellNotes",e[18]),b=new Z({props:{position:8,hints:e[2],gridErrors:e[1],grid:e[0]}}),b.$on("cellUpdate",e[19]),b.$on("computeCellNotes",e[20]),{c(){t=A("div"),H(l.$$.fragment),o=T(),H(n.$$.fragment),s=T(),H(i.$$.fragment),a=T(),H(c.$$.fragment),g=T(),H(v.$$.fragment),I=T(),H(C.$$.fragment),D=T(),H(w.$$.fragment),S=T(),H(U.$$.fragment),R=T(),H(b.$$.fragment),this.h()},l(r){t=G(r,"DIV",{class:!0});var u=L(t);F(l.$$.fragment,u),o=O(u),F(n.$$.fragment,u),s=O(u),F(i.$$.fragment,u),a=O(u),F(c.$$.fragment,u),g=O(u),F(v.$$.fragment,u),I=O(u),F(C.$$.fragment,u),D=O(u),F(w.$$.fragment,u),S=O(u),F(U.$$.fragment,u),R=O(u),F(b.$$.fragment,u),u.forEach(q),this.h()},h(){j(t,"class","main-grid svelte-vli9ua")},m(r,u){K(r,t,u),P(l,t,null),p(t,o),P(n,t,null),p(t,s),P(i,t,null),p(t,a),P(c,t,null),p(t,g),P(v,t,null),p(t,I),P(C,t,null),p(t,D),P(w,t,null),p(t,S),P(U,t,null),p(t,R),P(b,t,null),d=!0},p(r,[u]){const B={};u&4&&(B.hints=r[2]),u&2&&(B.gridErrors=r[1]),u&1&&(B.grid=r[0]),l.$set(B);const V={};u&4&&(V.hints=r[2]),u&2&&(V.gridErrors=r[1]),u&1&&(V.grid=r[0]),n.$set(V);const f={};u&4&&(f.hints=r[2]),u&2&&(f.gridErrors=r[1]),u&1&&(f.grid=r[0]),i.$set(f);const k={};u&4&&(k.hints=r[2]),u&2&&(k.gridErrors=r[1]),u&1&&(k.grid=r[0]),c.$set(k);const m={};u&4&&(m.hints=r[2]),u&2&&(m.gridErrors=r[1]),u&1&&(m.grid=r[0]),v.$set(m);const E={};u&4&&(E.hints=r[2]),u&2&&(E.gridErrors=r[1]),u&1&&(E.grid=r[0]),C.$set(E);const h={};u&4&&(h.hints=r[2]),u&2&&(h.gridErrors=r[1]),u&1&&(h.grid=r[0]),w.$set(h);const N={};u&4&&(N.hints=r[2]),u&2&&(N.gridErrors=r[1]),u&1&&(N.grid=r[0]),U.$set(N);const _={};u&4&&(_.hints=r[2]),u&2&&(_.gridErrors=r[1]),u&1&&(_.grid=r[0]),b.$set(_)},i(r){d||(y(l.$$.fragment,r),y(n.$$.fragment,r),y(i.$$.fragment,r),y(c.$$.fragment,r),y(v.$$.fragment,r),y(C.$$.fragment,r),y(w.$$.fragment,r),y(U.$$.fragment,r),y(b.$$.fragment,r),d=!0)},o(r){z(l.$$.fragment,r),z(n.$$.fragment,r),z(i.$$.fragment,r),z(c.$$.fragment,r),z(v.$$.fragment,r),z(C.$$.fragment,r),z(w.$$.fragment,r),z(U.$$.fragment,r),z(b.$$.fragment,r),d=!1},d(r){r&&q(t),$(l),$(n),$(i),$(c),$(v),$(C),$(w),$(U),$(b)}}}function ct(e,t,l){let{grid:o}=t,{gridErrors:n}=t,{hints:s=[]}=t;function i(f){M.call(this,e,f)}function a(f){M.call(this,e,f)}function c(f){M.call(this,e,f)}function g(f){M.call(this,e,f)}function v(f){M.call(this,e,f)}function I(f){M.call(this,e,f)}function C(f){M.call(this,e,f)}function D(f){M.call(this,e,f)}function w(f){M.call(this,e,f)}function S(f){M.call(this,e,f)}function U(f){M.call(this,e,f)}function R(f){M.call(this,e,f)}function b(f){M.call(this,e,f)}function d(f){M.call(this,e,f)}function r(f){M.call(this,e,f)}function u(f){M.call(this,e,f)}function B(f){M.call(this,e,f)}function V(f){M.call(this,e,f)}return e.$$set=f=>{"grid"in f&&l(0,o=f.grid),"gridErrors"in f&&l(1,n=f.gridErrors),"hints"in f&&l(2,s=f.hints)},[o,n,s,i,a,c,g,v,I,C,D,w,S,U,R,b,d,r,u,B,V]}class Ut extends fe{constructor(t){super(),ce(this,t,ct,ft,te,{grid:0,gridErrors:1,hints:2})}}function De(e){let t,l,o="grid has errors",n,s,i="grid is filled",a,c,g="grid is valid",v,I,C="grid has solutions",D,w,S=e[1]?"Has errors":"No errors",U,R,b,d=e[2]?"Is filled":"Not filled",r,u,B,V=e[3]?"Is valid":"Not valid",f,k,m,E;return{c(){t=A("div"),l=A("div"),l.textContent=o,n=T(),s=A("div"),s.textContent=i,a=T(),c=A("div"),c.textContent=g,v=T(),I=A("div"),I.textContent=C,D=T(),w=A("div"),U=x(S),R=T(),b=A("div"),r=x(d),u=T(),B=A("div"),f=x(V),k=T(),m=A("div"),E=x(e[4]),this.h()},l(h){t=G(h,"DIV",{class:!0});var N=L(t);l=G(N,"DIV",{"data-svelte-h":!0}),le(l)!=="svelte-1hlqbal"&&(l.textContent=o),n=O(N),s=G(N,"DIV",{"data-svelte-h":!0}),le(s)!=="svelte-ekf37s"&&(s.textContent=i),a=O(N),c=G(N,"DIV",{"data-svelte-h":!0}),le(c)!=="svelte-16e0vl8"&&(c.textContent=g),v=O(N),I=G(N,"DIV",{"data-svelte-h":!0}),le(I)!=="svelte-1tjrozg"&&(I.textContent=C),D=O(N),w=G(N,"DIV",{class:!0});var _=L(w);U=ee(_,S),_.forEach(q),R=O(N),b=G(N,"DIV",{class:!0});var re=L(b);r=ee(re,d),re.forEach(q),u=O(N),B=G(N,"DIV",{class:!0});var ie=L(B);f=ee(ie,V),ie.forEach(q),k=O(N),m=G(N,"DIV",{class:!0});var J=L(m);E=ee(J,e[4]),J.forEach(q),N.forEach(q),this.h()},h(){j(w,"class","status svelte-1csoeu4"),X(w,"red",e[1]),j(b,"class","status svelte-1csoeu4"),X(b,"red",!e[2]),j(B,"class","status svelte-1csoeu4"),X(B,"red",!e[3]),j(m,"class","status svelte-1csoeu4"),X(m,"red",e[4]!=="unique"),j(t,"class","grid-status svelte-1csoeu4")},m(h,N){K(h,t,N),p(t,l),p(t,n),p(t,s),p(t,a),p(t,c),p(t,v),p(t,I),p(t,D),p(t,w),p(w,U),p(t,R),p(t,b),p(b,r),p(t,u),p(t,B),p(B,f),p(t,k),p(t,m),p(m,E)},p:ne,d(h){h&&q(t)}}}function ht(e){let t=e[0],l,o=De(e);return{c(){o.c(),l=Y()},l(n){o.l(n),l=Y()},m(n,s){o.m(n,s),K(n,l,s)},p(n,[s]){s&1&&te(t,t=n[0])?(o.d(1),o=De(n),o.c(),o.m(l.parentNode,l)):o.p(n,s)},i:ne,o:ne,d(n){n&&q(l),o.d(n)}}}function dt(e,t,l){let{grid:o}=t,n=ue(o),s=se(o),i=ve(o),a=Ye(o);return e.$$set=c=>{"grid"in c&&l(0,o=c.grid)},[o,n,s,i,a]}class Mt extends fe{constructor(t){super(),ce(this,t,dt,ht,te,{grid:0})}}export{Mt as G,Ut as S,bt as a,wt as b,We as c,ae as d,kt as e,Et as f,Nt as g,Ye as h,Je as m,Ke as r,nt as s,Ct as u};
