import{s as Me,f as y,a as T,l as Z,e as Te,g as N,h as B,H as I,c as G,d as C,m as ee,j as ie,i as O,I as f,y as $,n as Ge,J as Fe,C as We,D as Je,G as Ve,K as Re,E as Ke}from"../chunks/scheduler.71239b2e.js";import{S as Le,i as Qe,t as ue,c as Xe,a as fe,b as je,d as qe,m as He,e as Oe,g as Ye}from"../chunks/index.8ab45ecd.js";import{a as Se}from"../chunks/store.fe58922c.js";import{d as Ce,m as Ze,g as et,a as tt,c as ot,S as st,b as De,G as lt,u as nt,r as ct,s as Ue,e as rt,f as at,h as Be,i as it}from"../chunks/GridStatus.4437f5ff.js";const ut=t=>{const o=Ce(t);return Ae(o),o},Ae=t=>{for(let o=0;o<9;o++)for(let e=0;e<9;e++)if(t[o][e].value===void 0){for(let s=1;s<=9;s++)if(Ze(t,{row:o,col:e},s)){if(t[o][e].value=s,Ae(t))return!0;t[o][e].value=void 0}return!1}return!0},Ie=()=>{const t=et(tt()),o=[];for(let e=0;e<9;e++)for(let s=0;s<9;s++)o.push({row:e,col:s});for(;o.length;){const e=Math.floor(Math.random()*o.length),{row:s,col:n}=o[e];o.splice(e,1);const l=t[s][n].value;t[s][n].value=void 0,t[s][n].notes=[],t[s][n].fixed=!1,ot(t)!=="unique"&&(t[s][n].value=l)}for(let e=0;e<9;e++)for(let s=0;s<9;s++)t[e][s].value&&(t[e][s].fixed=!0);return t},ft=t=>{const o=[];for(let e=0;e<9;e++){const s={},n={},l={},a=3*Math.floor(e/3),p=3*(e%3);for(let c=0;c<9;c++){if(t[e][c].value===void 0){const i=t[e][c].notes;for(const w of i)s[w]||(s[w]=[]),s[w].push({row:e,col:c})}if(t[c][e].value===void 0){const i=t[c][e].notes;for(const w of i)n[w]||(n[w]=[]),n[w].push({row:c,col:e})}const _=Math.floor(c/3),h=c%3,d=a+_,m=p+h;if(t[d][m].value===void 0){const i=t[d][m].notes;for(const w of i)l[w]||(l[w]=[]),l[w].push({row:d,col:m})}}for(const c of Object.keys(s)){const _=Number(c);if(s[_].length===1){const{row:h,col:d}=s[_][0];o.push({type:"hidden_single_row",cause:[{row:h,col:d,notes:[_]}]})}}for(const c of Object.keys(n)){const _=Number(c);if(n[_].length===1){const{row:h,col:d}=n[_][0];o.push({type:"hidden_single_col",cause:[{row:h,col:d,notes:[_]}]})}}for(const c of Object.keys(l)){const _=Number(c);if(l[_].length===1){const{row:h,col:d}=l[_][0];o.push({type:"hidden_single_square",cause:[{row:h,col:d,notes:[_]}]})}}}return o},_t=t=>{const o=[];for(let e=0;e<9;e++)for(let s=0;s<9;s++)t[e][s].value===void 0&&t[e][s].notes.length===1&&o.push({type:"lone_single",cause:[{row:e,col:s,notes:[t[e][s].notes[0]]}]});return o},ht=t=>{const o=[];for(let e=0;e<9;e++){const s={},n={},l={},a=3*Math.floor(e/3),p=3*(e%3);for(let c=0;c<9;c++){if(t[e][c].value===void 0&&t[e][c].notes.length===2){const i=t[e][c].notes.join(",");if(!s[i])s[i]={row:e,col:c};else{const w={row:e,col:c,notes:[...t[e][c].notes]},E={row:s[i].row,col:s[i].col,notes:[...t[e][c].notes]},j=[];for(let b=0;b<9;b++)t[e][b].value!==void 0||t[e][b].notes.join(",")===i||j.push({row:e,col:b,notes:[...t[e][c].notes]});o.push({type:"naked_pair",cause:[w,E],effect:j})}}if(t[c][e].value===void 0&&t[c][e].notes.length===2){const i=t[c][e].notes.join(",");if(!n[i])n[i]={row:c,col:e};else{const w={row:c,col:e,notes:[...t[c][e].notes]},E={row:n[i].row,col:n[i].col,notes:[...t[c][e].notes]},j=[];for(let b=0;b<9;b++)t[b][e].value!==void 0||t[b][e].notes.join(",")===i||j.push({row:b,col:e,notes:[...t[c][e].notes]});o.push({type:"naked_pair",cause:[w,E],effect:j})}}const _=Math.floor(c/3),h=c%3,d=a+_,m=p+h;if(t[d][m].value===void 0&&t[d][m].notes.length===2){const i=t[d][m].notes.join(",");if(!l[i])l[i]={row:d,col:m};else{const w={row:d,col:m,notes:[...t[d][m].notes]},E={row:l[i].row,col:l[i].col,notes:[...t[d][m].notes]},j=[];for(let b=0;b<9;b++){const D=Math.floor(b/3),Q=b%3,U=a+D,R=p+Q;t[U][R].value!==void 0||t[U][R].notes.join(",")===i||j.push({row:U,col:R,notes:[...t[d][m].notes]})}o.push({type:"naked_pair",cause:[w,E],effect:j})}}}}return o};function $e(t,o,e){const s=t.slice();return s[20]=o[e],s}function xe(t){let o,e="Remove notes",s,n;return{c(){o=y("button"),o.textContent=e},l(l){o=N(l,"BUTTON",{"data-svelte-h":!0}),I(o)!=="svelte-16z5c15"&&(o.textContent=e)},m(l,a){O(l,o,a),s||(n=$(o,"click",t[16]),s=!0)},p:Ve,d(l){l&&C(o),s=!1,n()}}}function ze(t){let o,e,s,n;function l(){return t[18](t[20])}return{c(){o=y("button"),e=Z(t[20]),this.h()},l(a){o=N(a,"BUTTON",{class:!0});var p=B(o);e=ee(p,t[20]),p.forEach(C),this.h()},h(){ie(o,"class","svelte-zwzkqm"),Re(o,"selected",t[3]===t[20])},m(a,p){O(a,o,p),f(o,e),s||(n=$(o,"click",l),s=!0)},p(a,p){t=a,p&8&&Re(o,"selected",t[3]===t[20])},d(a){a&&C(o),s=!1,n()}}}function Pe(t){let o,e,s,n;return o=new st({props:{gridErrors:De(t[0]),grid:t[0]}}),o.$on("cellUpdate",t[5]),o.$on("computeCellNotes",t[6]),s=new lt({props:{grid:t[0]}}),{c(){je(o.$$.fragment),e=T(),je(s.$$.fragment)},l(l){qe(o.$$.fragment,l),e=G(l),qe(s.$$.fragment,l)},m(l,a){He(o,l,a),O(l,e,a),He(s,l,a),n=!0},p(l,a){const p={};a&1&&(p.gridErrors=De(l[0])),a&1&&(p.grid=l[0]),o.$set(p);const c={};a&1&&(c.grid=l[0]),s.$set(c)},i(l){n||(fe(o.$$.fragment,l),fe(s.$$.fragment,l),n=!0)},o(l){ue(o.$$.fragment,l),ue(s.$$.fragment,l),n=!1},d(l){l&&C(e),Oe(o,l),Oe(s,l)}}}function dt(t){let o,e,s="Grid controls",n,l,a,p="Prev",c,_,h="New Grid",d,m,i="Solve grid",w,E,j="Reset grid",b,D,Q="Remove fixed",U,R,z,v="Notes controls",P,S,M,X=t[1]?"Disable":"Enable",te,_e,he,oe,V,Y=t[2]?"Hide":"Display",se,de,le,x,W,ye="Highlights controls",ve,A,ne,ce,re,Ne=t[0],J,K,pe,ge,g=!t[1]&&xe(t),me=Se([1,2,3,4,5,6,7,8,9]),q=[];for(let r=0;r<9;r+=1)q[r]=ze($e(t,me,r));let H=Pe(t);return{c(){o=y("div"),e=y("h4"),e.textContent=s,n=T(),l=y("div"),a=y("button"),a.textContent=p,c=T(),_=y("button"),_.textContent=h,d=T(),m=y("button"),m.textContent=i,w=T(),E=y("button"),E.textContent=j,b=T(),D=y("button"),D.textContent=Q,U=T(),R=y("div"),z=y("h4"),z.textContent=v,P=T(),S=y("div"),M=y("button"),te=Z(X),_e=Z(" notes auto-refresh"),he=T(),g&&g.c(),oe=T(),V=y("button"),se=Z(Y),de=Z(" hints"),le=T(),x=y("div"),W=y("h4"),W.textContent=ye,ve=T(),A=y("div");for(let r=0;r<9;r+=1)q[r].c();ne=T(),ce=y("br"),re=T(),H.c(),J=Te(),this.h()},l(r){o=N(r,"DIV",{});var k=B(o);e=N(k,"H4",{"data-svelte-h":!0}),I(e)!=="svelte-1h8cvtc"&&(e.textContent=s),n=G(k),l=N(k,"DIV",{class:!0});var u=B(l);a=N(u,"BUTTON",{"data-svelte-h":!0}),I(a)!=="svelte-bivxk4"&&(a.textContent=p),c=G(u),_=N(u,"BUTTON",{"data-svelte-h":!0}),I(_)!=="svelte-1oh0e6u"&&(_.textContent=h),d=G(u),m=N(u,"BUTTON",{"data-svelte-h":!0}),I(m)!=="svelte-1wjgins"&&(m.textContent=i),w=G(u),E=N(u,"BUTTON",{"data-svelte-h":!0}),I(E)!=="svelte-hocye6"&&(E.textContent=j),b=G(u),D=N(u,"BUTTON",{"data-svelte-h":!0}),I(D)!=="svelte-g7g4he"&&(D.textContent=Q),u.forEach(C),k.forEach(C),U=G(r),R=N(r,"DIV",{});var F=B(R);z=N(F,"H4",{"data-svelte-h":!0}),I(z)!=="svelte-8gx0az"&&(z.textContent=v),P=G(F),S=N(F,"DIV",{class:!0});var L=B(S);M=N(L,"BUTTON",{});var ke=B(M);te=ee(ke,X),_e=ee(ke," notes auto-refresh"),ke.forEach(C),he=G(L),g&&g.l(L),oe=G(L),V=N(L,"BUTTON",{});var we=B(V);se=ee(we,Y),de=ee(we," hints"),we.forEach(C),L.forEach(C),F.forEach(C),le=G(r),x=N(r,"DIV",{});var ae=B(x);W=N(ae,"H4",{"data-svelte-h":!0}),I(W)!=="svelte-hclwgd"&&(W.textContent=ye),ve=G(ae),A=N(ae,"DIV",{class:!0});var Ee=B(A);for(let be=0;be<9;be+=1)q[be].l(Ee);Ee.forEach(C),ae.forEach(C),ne=G(r),ce=N(r,"BR",{}),re=G(r),H.l(r),J=Te(),this.h()},h(){ie(l,"class","grid-controls svelte-zwzkqm"),ie(S,"class","notes-controls svelte-zwzkqm"),ie(A,"class","highlights-controls")},m(r,k){O(r,o,k),f(o,e),f(o,n),f(o,l),f(l,a),f(l,c),f(l,_),f(l,d),f(l,m),f(l,w),f(l,E),f(l,b),f(l,D),O(r,U,k),O(r,R,k),f(R,z),f(R,P),f(R,S),f(S,M),f(M,te),f(M,_e),f(S,he),g&&g.m(S,null),f(S,oe),f(S,V),f(V,se),f(V,de),O(r,le,k),O(r,x,k),f(x,W),f(x,ve),f(x,A);for(let u=0;u<9;u+=1)q[u]&&q[u].m(A,null);O(r,ne,k),O(r,ce,k),O(r,re,k),H.m(r,k),O(r,J,k),K=!0,pe||(ge=[$(a,"click",t[10]),$(_,"click",t[11]),$(m,"click",t[12]),$(E,"click",t[13]),$(D,"click",t[14]),$(M,"click",t[15]),$(V,"click",t[17])],pe=!0)},p(r,[k]){if((!K||k&2)&&X!==(X=r[1]?"Disable":"Enable")&&Ge(te,X),r[1]?g&&(g.d(1),g=null):g?g.p(r,k):(g=xe(r),g.c(),g.m(S,oe)),(!K||k&4)&&Y!==(Y=r[2]?"Hide":"Display")&&Ge(se,Y),k&8){me=Se([1,2,3,4,5,6,7,8,9]);let u;for(u=0;u<9;u+=1){const F=$e(r,me,u);q[u]?q[u].p(F,k):(q[u]=ze(F),q[u].c(),q[u].m(A,null))}for(;u<9;u+=1)q[u].d(1)}k&1&&Me(Ne,Ne=r[0])?(Ye(),ue(H,1,1,Ve),Xe(),H=Pe(r),H.c(),fe(H,1),H.m(J.parentNode,J)):H.p(r,k)},i(r){K||(fe(H),K=!0)},o(r){ue(H),K=!1},d(r){r&&(C(o),C(U),C(R),C(le),C(x),C(ne),C(ce),C(re),C(J)),g&&g.d(),Fe(q,r),H.d(r),pe=!1,We(ge)}}}function vt(t,o,e){let s;Je(t,Be,v=>e(3,s=v));let n=Ie();const l=[Ce(n)];let a=!1,p=!1;const c=v=>{nt(v.detail.cell,v.detail.update),h()},_=v=>{ct(n,v.detail.position),h()},h=v=>{a&&it(n),p?i(n):Ue.set([]),e(0,n),!(v!=null&&v.noHistory)&&l.push(Ce(n))},d=()=>{e(0,n=ut(n)),h()},m=()=>{for(let v=0;v<9;v++)for(let P=0;P<9;P++)e(0,n[v][P].fixed=!1,n)},i=v=>{Ue.set([..._t(v),...ft(v),...ht(v)])};return[n,a,p,s,l,c,_,h,d,m,()=>{e(0,n=l.pop()),h({noHistory:!0})},()=>{e(0,n=Ie()),h()},()=>{d(),h()},()=>{rt(n),h()},()=>{m(),h()},()=>{e(1,a=!a),h()},()=>{at(n),h()},()=>{e(2,p=!p),h()},v=>{Ke(Be,s=s===v?void 0:v,s)}]}class bt extends Le{constructor(o){super(),Qe(this,o,vt,dt,Me,{})}}export{bt as component};