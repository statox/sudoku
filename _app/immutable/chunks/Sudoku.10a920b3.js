import{s as z,e as F,i as H,y as j,G as Q,d as U,C as be,f as J,l as Z,a as S,g as G,h as K,m as x,c as y,H as ae,j as P,k as te,I as k,n as Ne,K as Ce,L as Se,J as A,D as ye,M as fe,N as b}from"./scheduler.a9a47073.js";import{S as le,i as oe,b as M,d as O,m as T,a as I,t as B,e as D}from"./index.4654634b.js";import{a as ne,b as Ve,d as Ee}from"./store.fad7cc46.js";import{w as Me}from"./index.79c041c4.js";const Oe=(e,t)=>{if(e<0||e>8)throw new Error(`unexpected square position: ${e}`);const l=Math.floor(e/3),o=e%3,n=3*l,s=3*o;return[t[n][s],t[n][s+1],t[n][s+2],t[n+1][s],t[n+1][s+1],t[n+1][s+2],t[n+2][s],t[n+2][s+1],t[n+2][s+2]]};function Te(e){return e.notes!==void 0}function Ie(e){return e.clear===!0}const st=(e,t)=>{if(e.fixed)throw new Error("Tried to update fixed cell");if(Te(t)){e.value=void 0,e.notes=[...t.notes];return}if(Ie(t)){e.notes=[],e.value=void 0;return}e.notes=[],e.value=t.value},Be=()=>{const e=[];for(let t=0;t<9;t++){e.push([]);for(let l=0;l<9;l++){const o={value:void 0,fixed:!1,notes:[1,2,3,4,5,6,7,8,9]};e[e.length-1].push(o)}}return e},se=e=>{for(let d=0;d<9;d++){const h=new Set,p=new Set;for(let C=0;C<9;C++){const v=e[d][C].value;if(v){if(h.has(v))return!0;h.add(v)}const q=e[C][d].value;if(q){if(p.has(q))return!0;p.add(q)}}}const t=new Set,l=new Set,o=new Set,n=new Set,s=new Set,r=new Set,f=new Set,i=new Set,m=new Set;for(let d=0;d<3;d++)for(let h=0;h<3;h++){const p=e[d][h].value,C=e[d][3+h].value,v=e[d][6+h].value,q=e[3+d][h].value,w=e[3+d][3+h].value,V=e[3+d][6+h].value,N=e[6+d][h].value,$=e[6+d][3+h].value,a=e[6+d][6+h].value;if(p){if(t.has(p))return!0;t.add(p)}if(C){if(l.has(C))return!0;l.add(C)}if(v){if(o.has(v))return!0;o.add(v)}if(q){if(n.has(q))return!0;n.add(q)}if(w){if(s.has(w))return!0;s.add(w)}if(V){if(r.has(V))return!0;r.add(V)}if(N){if(f.has(N))return!0;f.add(N)}if($){if(i.has($))return!0;i.add($)}if(a){if(m.has(a))return!0;m.add(a)}}return!1},ee=e=>{for(let t=0;t<9;t++)for(let l=0;l<9;l++)if(!e[t][l].value)return!1;return!0},$e=e=>ee(e)&&!se(e),De=(e,t,l)=>{const{col:o,row:n}=t;if(e[n][o].value!==void 0)return!1;const s=Math.floor(o/3),r=Math.floor(n/3);for(let f=0;f<9;f++){if(e[n][f].value===l||e[f][o].value===l)return!1;const i=Math.floor(f/3),m=f%3;if(e[3*r+i][3*s+m].value===l)return!1}return!0},Re=e=>{if(ee(e))return $e(e)?"unique":"none";const t=JSON.parse(JSON.stringify(e));let l=0;for(let n=0;n<9;n++)for(let s=0;s<9;s++)e[n][s].value!==void 0&&l++;const o=[];return ke(t,o,l),o.length===0?"none":o.length===1?"unique":"notUnique"},ke=(e,t,l)=>{for(let o=0;o<9;o++)for(let n=0;n<9;n++)if(e[o][n].value===void 0){for(let s=1;s<=9;s++)if(De(e,{row:o,col:n},s)){if(e[o][n].value=s,ke(e,t,l+1)&&(l===80&&t.push(JSON.parse(JSON.stringify(e))),t.length>=2))return!0;e[o][n].value=void 0}return!1}return!0},rt=()=>{const e=Ue(),t=[];for(let l=0;l<9;l++)for(let o=0;o<9;o++)t.push({row:l,col:o});for(;t.length;){const l=Math.floor(Math.random()*t.length),{row:o,col:n}=t[l];t.splice(l,1);const s=e[o][n].value;e[o][n].value=void 0,e[o][n].notes=[],e[o][n].fixed=!1,Re(e)!=="unique"&&(e[o][n].value=s)}for(let l=0;l<9;l++)for(let o=0;o<9;o++)e[l][o].value&&(e[l][o].fixed=!0);return e},Ue=()=>{const e=Be();let t=0;for(;!ee(e)&&t<81;)t++,Je(e);return $e(e)?e:Ue()},re=(e,t,l,o)=>{if(e[t][l].value)return!1;const n=e[t][l].notes.indexOf(o);return n===-1?!1:(e[t][l].notes.splice(n,1),e[t][l].notes.length===1?(e[t][l].value=e[t][l].notes.pop(),!0):!1)},Je=e=>{const t=JSON.stringify(e);try{if(He(e),qe(e),se(e))throw new Error("Step created error")}catch{const o=JSON.parse(t);for(let n=0;n<9;n++)for(let s=0;s<9;s++)e[n][s]={...o[n][s]}}},qe=e=>{if(ee(e))return;if(se(e))throw new Error("Cant collapse a grid with errors");let t=!1;for(let l=0;l<9;l++)for(let o=0;o<9;o++){const{value:n}=e[l][o];if(!n)continue;for(let f=0;f<9;f++)t=t||re(e,f,o,n),t=t||re(e,l,f,n);const s=Math.floor(o/3),r=Math.floor(l/3);for(let f=0;f<3;f++)for(let i=0;i<3;i++)t=t||re(e,3*r+f,3*s+i,n)}t&&qe(e)},Ge=(e,t)=>{const{row:l,col:o,value:n}=t;if(e[l][o].value)throw new Error(`cant apply choice ${t} to cell ${l},${o}. Value already set`);if(!e[l][o].notes.includes(n))throw new Error(`cant apply choice ${t} to cell ${l},${o}. New value not in notes`);e[l][o].value=n,e[l][o].notes=[]},He=e=>{if(ee(e))return;if(se(e))throw new Error("Cant pick position in a grid with errors");let t=[],l=9;for(let i=0;i<9;i++)for(let m=0;m<9;m++){const{value:d}=e[i][m];if(!d){const h=e[i][m].notes.length;h<l&&(l=h),t.push({row:i,col:m,nbNotes:h})}}if(!t.length)throw new Error("No open position that should not happen");t=t.filter(i=>i.nbNotes===l);const o=Math.floor(Math.random()*t.length),{row:n,col:s}=t[o],r=Math.floor(Math.random()*e[n][s].notes.length),f=e[n][s].notes[r];Ge(e,{row:n,col:s,value:f})};function ce(e,t,l){const o=e.slice();return o[19]=t[l],o}function de(e){let t=e[5],l,o=me(e);return{c(){o.c(),l=F()},l(n){o.l(n),l=F()},m(n,s){o.m(n,s),H(n,l,s)},p(n,s){s&32&&z(t,t=n[5])?(o.d(1),o=me(n),o.c(),o.m(l.parentNode,l)):o.p(n,s)},d(n){n&&U(l),o.d(n)}}}function Ke(e){let t,l,o,n;function s(){return e[17](e[19])}return{c(){t=J("button"),l=Z(e[19]),this.h()},l(r){t=G(r,"BUTTON",{class:!0});var f=K(t);l=x(f,e[19]),f.forEach(U),this.h()},h(){P(t,"class","choice-btn svelte-1odnub3"),A(t,"selected",e[4]===e[19])},m(r,f){H(r,t,f),k(t,l),o||(n=j(t,"click",s),o=!0)},p(r,f){e=r,f&16&&A(t,"selected",e[4]===e[19])},d(r){r&&U(t),o=!1,n()}}}function Pe(e){let t=e[3],l,o=pe(e);return{c(){o.c(),l=F()},l(n){o.l(n),l=F()},m(n,s){o.m(n,s),H(n,l,s)},p(n,s){s&8&&z(t,t=n[3])?(o.d(1),o=pe(n),o.c(),o.m(l.parentNode,l)):o.p(n,s)},d(n){n&&U(l),o.d(n)}}}function pe(e){let t,l,o,n;function s(){return e[16](e[19])}return{c(){t=J("button"),l=Z(e[19]),this.h()},l(r){t=G(r,"BUTTON",{class:!0});var f=K(t);l=x(f,e[19]),f.forEach(U),this.h()},h(){P(t,"class","choice-btn svelte-1odnub3"),A(t,"selected",e[3][e[19]-1])},m(r,f){H(r,t,f),k(t,l),o||(n=j(t,"click",s),o=!0)},p(r,f){e=r,f&8&&A(t,"selected",e[3][e[19]-1])},d(r){r&&U(t),o=!1,n()}}}function he(e){let t;function l(s,r){return s[2]?Pe:Ke}let o=l(e),n=o(e);return{c(){n.c(),t=F()},l(s){n.l(s),t=F()},m(s,r){n.m(s,r),H(s,t,r)},p(s,r){o===(o=l(s))&&n?n.p(s,r):(n.d(1),n=o(s),n&&(n.c(),n.m(t.parentNode,t)))},d(s){s&&U(t),n.d(s)}}}function _e(e){let t,l="Auto notes",o,n;return{c(){t=J("button"),t.textContent=l},l(s){t=G(s,"BUTTON",{"data-svelte-h":!0}),ae(t)!=="svelte-1y6181p"&&(t.textContent=l)},m(s,r){H(s,t,r),o||(n=j(t,"click",function(){Se(e[1])&&e[1].apply(this,arguments)}),o=!0)},p(s,r){e=s},d(s){s&&U(t),o=!1,n()}}}function me(e){let t,l,o,n=e[2]?"Notes":"Value",s,r,f,i="✖",m,d,h,p,C,v="Change mode",q,w,V,N=ne([1,2,3,4,5,6,7,8,9]),$=[];for(let c=0;c<9;c+=1)$[c]=he(ce(e,N,c));let a=e[2]&&_e(e);return{c(){t=J("div"),l=J("div"),o=J("h3"),s=Z(n),r=S(),f=J("button"),f.textContent=i,m=S(),d=J("div");for(let c=0;c<9;c+=1)$[c].c();h=S(),p=J("div"),C=J("button"),C.textContent=v,q=S(),a&&a.c(),this.h()},l(c){t=G(c,"DIV",{role:!0,class:!0,style:!0});var u=K(t);l=G(u,"DIV",{class:!0});var g=K(l);o=G(g,"H3",{class:!0});var R=K(o);s=x(R,n),r=y(R),f=G(R,"BUTTON",{"data-svelte-h":!0}),ae(f)!=="svelte-15i1wwz"&&(f.textContent=i),R.forEach(U),m=y(g),d=G(g,"DIV",{class:!0});var E=K(d);for(let Y=0;Y<9;Y+=1)$[Y].l(E);E.forEach(U),h=y(g),p=G(g,"DIV",{});var L=K(p);C=G(L,"BUTTON",{"data-svelte-h":!0}),ae(C)!=="svelte-1y20icv"&&(C.textContent=v),q=y(L),a&&a.l(L),L.forEach(U),g.forEach(U),u.forEach(U),this.h()},h(){P(o,"class","title-bar svelte-1odnub3"),P(d,"class","grid svelte-1odnub3"),P(l,"class","contents svelte-1odnub3"),P(t,"role","dialog"),P(t,"class","modal svelte-1odnub3"),te(t,"top",e[5]+"px"),te(t,"left",e[6]+"px")},m(c,u){H(c,t,u),k(t,l),k(l,o),k(o,s),k(o,r),k(o,f),k(l,m),k(l,d);for(let g=0;g<9;g+=1)$[g]&&$[g].m(d,null);k(l,h),k(l,p),k(p,C),k(p,q),a&&a.m(p,null),w||(V=[j(f,"click",Ve),j(C,"click",e[8]),j(t,"mousedown",e[11])],w=!0)},p(c,u){if(u&4&&n!==(n=c[2]?"Notes":"Value")&&Ne(s,n),u&156){N=ne([1,2,3,4,5,6,7,8,9]);let g;for(g=0;g<9;g+=1){const R=ce(c,N,g);$[g]?$[g].p(R,u):($[g]=he(R),$[g].c(),$[g].m(d,null))}for(;g<9;g+=1)$[g].d(1)}c[2]?a?a.p(c,u):(a=_e(c),a.c(),a.m(p,null)):a&&(a.d(1),a=null),u&32&&te(t,"top",c[5]+"px"),u&64&&te(t,"left",c[6]+"px")},d(c){c&&U(t),Ce($,c),a&&a.d(),w=!1,be(V)}}}function je(e){let t,l,o,n=e[0]&&de(e);return{c(){n&&n.c(),t=F()},l(s){n&&n.l(s),t=F()},m(s,r){n&&n.m(s,r),H(s,t,r),l||(o=[j(window,"keydown",e[9]),j(window,"keyup",e[10]),j(window,"mouseup",e[13]),j(window,"mousemove",e[12])],l=!0)},p(s,[r]){s[0]?n?n.p(s,r):(n=de(s),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:Q,o:Q,d(s){s&&U(t),n&&n.d(s),l=!1,be(o)}}}function Ae(e,t,l){let{isOpen:o}=t,{onSelectionUpdated:n}=t,{onComputeCellNotes:s}=t,{initialState:r}=t,f=r.notes.length>0,i=new Array(9).fill(!1).map((u,g)=>r.notes.includes(g+1)),m=r.value;const d=(u,g)=>{if(g==="notes"){l(3,i[u-1]=!i[u-1],i),l(3,i),l(4,m=void 0),n({notes:i.map((R,E)=>E+1).filter(R=>i[R-1])});return}if(m===u){n({clear:!0}),l(4,m=void 0),l(3,i=[]);return}l(4,m=u),l(3,i=[]),n({value:m})},h=()=>{l(2,f=!f)},p=u=>{const g="!@#$%^&*(",R=u.getModifierState("Shift");let E;if(E=u.key,E==="Backspace"){n({clear:!0});return}E==="Shift"&&l(2,f=!0),g.includes(E)&&(E=g.indexOf(E)+1),!isNaN(Number(E))&&d(Number(E),R?"notes":"value")},C=u=>{const{key:g}=u;g==="Shift"&&l(2,f=!1)};let v=0,q=0,w=!1;function V(){w=!0}function N(u){w&&(l(6,q+=u.movementX),l(5,v+=u.movementY))}function $(){w=!1}const a=u=>d(u,"notes"),c=u=>d(u,"value");return e.$$set=u=>{"isOpen"in u&&l(0,o=u.isOpen),"onSelectionUpdated"in u&&l(14,n=u.onSelectionUpdated),"onComputeCellNotes"in u&&l(1,s=u.onComputeCellNotes),"initialState"in u&&l(15,r=u.initialState)},[o,s,f,i,m,v,q,d,h,p,C,V,N,$,n,r,a,c]}class Fe extends le{constructor(t){super(),oe(this,t,Ae,je,z,{isOpen:0,onSelectionUpdated:14,onComputeCellNotes:1,initialState:15})}}const Le=Me([]);function ve(e,t,l){const o=e.slice();return o[8]=t[l],o}function We(e){let t,l,o,n=ne([1,2,3,4,5,6,7,8,9]),s=[];for(let r=0;r<9;r+=1)s[r]=we(ve(e,n,r));return{c(){t=J("button");for(let r=0;r<9;r+=1)s[r].c();this.h()},l(r){t=G(r,"BUTTON",{class:!0});var f=K(t);for(let i=0;i<9;i+=1)s[i].l(f);f.forEach(U),this.h()},h(){P(t,"class","cell notes svelte-1d6f0el"),A(t,"hint",e[1])},m(r,f){H(r,t,f);for(let i=0;i<9;i+=1)s[i]&&s[i].m(t,null);l||(o=j(t,"click",e[2]),l=!0)},p(r,f){if(f&9){n=ne([1,2,3,4,5,6,7,8,9]);let i;for(i=0;i<9;i+=1){const m=ve(r,n,i);s[i]?s[i].p(m,f):(s[i]=we(m),s[i].c(),s[i].m(t,null))}for(;i<9;i+=1)s[i].d(1)}f&2&&A(t,"hint",r[1])},d(r){r&&U(t),Ce(s,r),l=!1,o()}}}function Xe(e){let t,l=e[0].value+"",o,n,s,r;return{c(){t=J("button"),o=Z(l),this.h()},l(f){t=G(f,"BUTTON",{class:!0});var i=K(t);o=x(i,l),i.forEach(U),this.h()},h(){P(t,"class","cell value svelte-1d6f0el"),t.disabled=n=e[0].fixed,A(t,"fixed",e[0].fixed)},m(f,i){H(f,t,i),k(t,o),s||(r=j(t,"click",e[2]),s=!0)},p(f,i){i&1&&l!==(l=f[0].value+"")&&Ne(o,l),i&1&&n!==(n=f[0].fixed)&&(t.disabled=n),i&1&&A(t,"fixed",f[0].fixed)},d(f){f&&U(t),s=!1,r()}}}function ge(e){let t;return{c(){t=Z(e[8])},l(l){t=x(l,e[8])},m(l,o){H(l,t,o)},d(l){l&&U(t)}}}function we(e){let t,l=e[0].notes.includes(e[8]),o,n=l&&ge(e);return{c(){t=J("div"),n&&n.c(),o=S(),this.h()},l(s){t=G(s,"DIV",{class:!0});var r=K(t);n&&n.l(r),o=y(r),r.forEach(U),this.h()},h(){P(t,"class","note svelte-1d6f0el"),A(t,"hinted-note",e[3].includes(e[8]))},m(s,r){H(s,t,r),n&&n.m(t,null),k(t,o)},p(s,r){r&1&&(l=s[0].notes.includes(s[8])),l?n||(n=ge(s),n.c(),n.m(t,o)):n&&(n.d(1),n=null)},d(s){s&&U(t),n&&n.d()}}}function Ye(e){let t;function l(s,r){return s[0].value?Xe:We}let o=l(e),n=o(e);return{c(){n.c(),t=F()},l(s){n.l(s),t=F()},m(s,r){n.m(s,r),H(s,t,r)},p(s,[r]){o===(o=l(s))&&n?n.p(s,r):(n.d(1),n=o(s),n&&(n.c(),n.m(t.parentNode,t)))},i:Q,o:Q,d(s){s&&U(t),n.d(s)}}}function ze(e,t,l){let o;ye(e,Le,h=>l(5,o=h));let{cell:n}=t,{position:s}=t;const r=fe(),f=fe(),i=()=>{Ee(Fe,{initialState:n,onSelectionUpdated:C=>{r("cellUpdate",{cell:n,update:C})},onComputeCellNotes:()=>{f("computeCellNotes",{position:s})}})};let m=!1;const d=[];for(const h of o)for(const p of h.cause)p.row===s.row&&p.col===s.col&&(m=!0,d.push(...p.notes));return e.$$set=h=>{"cell"in h&&l(0,n=h.cell),"position"in h&&l(4,s=h.position)},[n,m,i,d,s]}class W extends le{constructor(t){super(),oe(this,t,ze,Ye,z,{cell:0,position:4})}}function Qe(e){let t,l,o,n,s,r,f,i,m,d,h,p,C,v,q,w,V,N,$;return l=new W({props:{position:{row:e[2],col:e[3]},cell:e[4][0]}}),l.$on("cellUpdate",e[7]),l.$on("computeCellNotes",e[8]),n=new W({props:{position:{row:e[2],col:e[3]+1},cell:e[4][1]}}),n.$on("cellUpdate",e[9]),n.$on("computeCellNotes",e[10]),r=new W({props:{position:{row:e[2],col:e[3]+2},cell:e[4][2]}}),r.$on("cellUpdate",e[11]),r.$on("computeCellNotes",e[12]),i=new W({props:{position:{row:e[2]+1,col:e[3]},cell:e[4][3]}}),i.$on("cellUpdate",e[13]),i.$on("computeCellNotes",e[14]),d=new W({props:{position:{row:e[2]+1,col:e[3]+1},cell:e[4][4]}}),d.$on("cellUpdate",e[15]),d.$on("computeCellNotes",e[16]),p=new W({props:{position:{row:e[2]+1,col:e[3]+2},cell:e[4][5]}}),p.$on("cellUpdate",e[17]),p.$on("computeCellNotes",e[18]),v=new W({props:{position:{row:e[2]+2,col:e[3]},cell:e[4][6]}}),v.$on("cellUpdate",e[19]),v.$on("computeCellNotes",e[20]),w=new W({props:{position:{row:e[2]+2,col:e[3]+1},cell:e[4][7]}}),w.$on("cellUpdate",e[21]),w.$on("computeCellNotes",e[22]),N=new W({props:{position:{row:e[2]+2,col:e[3]+2},cell:e[4][8]}}),N.$on("cellUpdate",e[23]),N.$on("computeCellNotes",e[24]),{c(){t=J("div"),M(l.$$.fragment),o=S(),M(n.$$.fragment),s=S(),M(r.$$.fragment),f=S(),M(i.$$.fragment),m=S(),M(d.$$.fragment),h=S(),M(p.$$.fragment),C=S(),M(v.$$.fragment),q=S(),M(w.$$.fragment),V=S(),M(N.$$.fragment),this.h()},l(a){t=G(a,"DIV",{class:!0});var c=K(t);O(l.$$.fragment,c),o=y(c),O(n.$$.fragment,c),s=y(c),O(r.$$.fragment,c),f=y(c),O(i.$$.fragment,c),m=y(c),O(d.$$.fragment,c),h=y(c),O(p.$$.fragment,c),C=y(c),O(v.$$.fragment,c),q=y(c),O(w.$$.fragment,c),V=y(c),O(N.$$.fragment,c),c.forEach(U),this.h()},h(){P(t,"class","cell-grid svelte-161j3o3"),A(t,"borderLeftRight",e[0]),A(t,"borderTopBottom",e[1])},m(a,c){H(a,t,c),T(l,t,null),k(t,o),T(n,t,null),k(t,s),T(r,t,null),k(t,f),T(i,t,null),k(t,m),T(d,t,null),k(t,h),T(p,t,null),k(t,C),T(v,t,null),k(t,q),T(w,t,null),k(t,V),T(N,t,null),$=!0},p:Q,i(a){$||(I(l.$$.fragment,a),I(n.$$.fragment,a),I(r.$$.fragment,a),I(i.$$.fragment,a),I(d.$$.fragment,a),I(p.$$.fragment,a),I(v.$$.fragment,a),I(w.$$.fragment,a),I(N.$$.fragment,a),$=!0)},o(a){B(l.$$.fragment,a),B(n.$$.fragment,a),B(r.$$.fragment,a),B(i.$$.fragment,a),B(d.$$.fragment,a),B(p.$$.fragment,a),B(v.$$.fragment,a),B(w.$$.fragment,a),B(N.$$.fragment,a),$=!1},d(a){a&&U(t),D(l),D(n),D(r),D(i),D(d),D(p),D(v),D(w),D(N)}}}function Ze(e,t,l){let{position:o}=t,{grid:n}=t;const s=[1,4,7].includes(o),r=[3,4,5].includes(o),f=3*Math.floor(o/3),i=3*(o%3),m=Oe(o,n);function d(_){b.call(this,e,_)}function h(_){b.call(this,e,_)}function p(_){b.call(this,e,_)}function C(_){b.call(this,e,_)}function v(_){b.call(this,e,_)}function q(_){b.call(this,e,_)}function w(_){b.call(this,e,_)}function V(_){b.call(this,e,_)}function N(_){b.call(this,e,_)}function $(_){b.call(this,e,_)}function a(_){b.call(this,e,_)}function c(_){b.call(this,e,_)}function u(_){b.call(this,e,_)}function g(_){b.call(this,e,_)}function R(_){b.call(this,e,_)}function E(_){b.call(this,e,_)}function L(_){b.call(this,e,_)}function Y(_){b.call(this,e,_)}return e.$$set=_=>{"position"in _&&l(5,o=_.position),"grid"in _&&l(6,n=_.grid)},[s,r,f,i,m,o,n,d,h,p,C,v,q,w,V,N,$,a,c,u,g,R,E,L,Y]}class X extends le{constructor(t){super(),oe(this,t,Ze,Qe,z,{position:5,grid:6})}}function xe(e){let t,l,o,n,s,r,f,i,m,d,h,p,C,v,q,w,V,N,$;return l=new X({props:{position:0,grid:e[0]}}),l.$on("cellUpdate",e[1]),l.$on("computeCellNotes",e[2]),n=new X({props:{position:1,grid:e[0]}}),n.$on("cellUpdate",e[3]),n.$on("computeCellNotes",e[4]),r=new X({props:{position:2,grid:e[0]}}),r.$on("cellUpdate",e[5]),r.$on("computeCellNotes",e[6]),i=new X({props:{position:3,grid:e[0]}}),i.$on("cellUpdate",e[7]),i.$on("computeCellNotes",e[8]),d=new X({props:{position:4,grid:e[0]}}),d.$on("cellUpdate",e[9]),d.$on("computeCellNotes",e[10]),p=new X({props:{position:5,grid:e[0]}}),p.$on("cellUpdate",e[11]),p.$on("computeCellNotes",e[12]),v=new X({props:{position:6,grid:e[0]}}),v.$on("cellUpdate",e[13]),v.$on("computeCellNotes",e[14]),w=new X({props:{position:7,grid:e[0]}}),w.$on("cellUpdate",e[15]),w.$on("computeCellNotes",e[16]),N=new X({props:{position:8,grid:e[0]}}),N.$on("cellUpdate",e[17]),N.$on("computeCellNotes",e[18]),{c(){t=J("div"),M(l.$$.fragment),o=S(),M(n.$$.fragment),s=S(),M(r.$$.fragment),f=S(),M(i.$$.fragment),m=S(),M(d.$$.fragment),h=S(),M(p.$$.fragment),C=S(),M(v.$$.fragment),q=S(),M(w.$$.fragment),V=S(),M(N.$$.fragment),this.h()},l(a){t=G(a,"DIV",{class:!0});var c=K(t);O(l.$$.fragment,c),o=y(c),O(n.$$.fragment,c),s=y(c),O(r.$$.fragment,c),f=y(c),O(i.$$.fragment,c),m=y(c),O(d.$$.fragment,c),h=y(c),O(p.$$.fragment,c),C=y(c),O(v.$$.fragment,c),q=y(c),O(w.$$.fragment,c),V=y(c),O(N.$$.fragment,c),c.forEach(U),this.h()},h(){P(t,"class","main-grid svelte-9ob9cf")},m(a,c){H(a,t,c),T(l,t,null),k(t,o),T(n,t,null),k(t,s),T(r,t,null),k(t,f),T(i,t,null),k(t,m),T(d,t,null),k(t,h),T(p,t,null),k(t,C),T(v,t,null),k(t,q),T(w,t,null),k(t,V),T(N,t,null),$=!0},p(a,[c]){const u={};c&1&&(u.grid=a[0]),l.$set(u);const g={};c&1&&(g.grid=a[0]),n.$set(g);const R={};c&1&&(R.grid=a[0]),r.$set(R);const E={};c&1&&(E.grid=a[0]),i.$set(E);const L={};c&1&&(L.grid=a[0]),d.$set(L);const Y={};c&1&&(Y.grid=a[0]),p.$set(Y);const _={};c&1&&(_.grid=a[0]),v.$set(_);const ie={};c&1&&(ie.grid=a[0]),w.$set(ie);const ue={};c&1&&(ue.grid=a[0]),N.$set(ue)},i(a){$||(I(l.$$.fragment,a),I(n.$$.fragment,a),I(r.$$.fragment,a),I(i.$$.fragment,a),I(d.$$.fragment,a),I(p.$$.fragment,a),I(v.$$.fragment,a),I(w.$$.fragment,a),I(N.$$.fragment,a),$=!0)},o(a){B(l.$$.fragment,a),B(n.$$.fragment,a),B(r.$$.fragment,a),B(i.$$.fragment,a),B(d.$$.fragment,a),B(p.$$.fragment,a),B(v.$$.fragment,a),B(w.$$.fragment,a),B(N.$$.fragment,a),$=!1},d(a){a&&U(t),D(l),D(n),D(r),D(i),D(d),D(p),D(v),D(w),D(N)}}}function et(e,t,l){let{grid:o}=t;function n(u){b.call(this,e,u)}function s(u){b.call(this,e,u)}function r(u){b.call(this,e,u)}function f(u){b.call(this,e,u)}function i(u){b.call(this,e,u)}function m(u){b.call(this,e,u)}function d(u){b.call(this,e,u)}function h(u){b.call(this,e,u)}function p(u){b.call(this,e,u)}function C(u){b.call(this,e,u)}function v(u){b.call(this,e,u)}function q(u){b.call(this,e,u)}function w(u){b.call(this,e,u)}function V(u){b.call(this,e,u)}function N(u){b.call(this,e,u)}function $(u){b.call(this,e,u)}function a(u){b.call(this,e,u)}function c(u){b.call(this,e,u)}return e.$$set=u=>{"grid"in u&&l(0,o=u.grid)},[o,n,s,r,f,i,m,d,h,p,C,v,q,w,V,N,$,a,c]}class at extends le{constructor(t){super(),oe(this,t,et,xe,z,{grid:0})}}export{at as S,ee as a,$e as b,Re as c,rt as d,Be as e,Ue as f,se as g,De as m,Le as s,st as u,Je as w};
