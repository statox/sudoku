import{s as it,e as lt,i as J,G as nt,d as g,f as p,a as b,l as et,g as C,h as B,H as I,c as N,m as ot,j as P,J as st,I as r,y as R,C as It}from"../chunks/scheduler.a9a47073.js";import{S as xt,i as yt,t as rt,c as Ot,a as at,b as ht,d as pt,m as Ct,e as kt,g as Tt}from"../chunks/index.4654634b.js";import{m as Vt,g as $t,a as Dt,b as qt,c as Et,d as mt,S as Ut,u as Gt,s as bt}from"../chunks/Sudoku.10a920b3.js";const Rt=s=>{const t=JSON.parse(JSON.stringify(s));return wt(t),t},wt=s=>{for(let t=0;t<9;t++)for(let e=0;e<9;e++)if(s[t][e].value===void 0){for(let o=1;o<=9;o++)if(Vt(s,{row:t,col:e},o)){if(s[t][e].value=o,wt(s))return!0;s[t][e].value=void 0}return!1}return!0},dt=(s,t,e,o)=>{if(!o||s[t][e].value)return!1;const n=s[t][e].notes.indexOf(o);return n===-1?!1:(s[t][e].notes.splice(n,1),!0)},Bt=s=>{for(let t=0;t<9;t++)for(let e=0;e<9;e++)s[t][e].notes=[]},St=(s,t)=>{const{row:e,col:o}=t;if(s[e][o].value){s[e][o].notes=[];return}s[e][o].notes=[1,2,3,4,5,6,7,8,9];const n=Math.floor(o/3),l=Math.floor(e/3);for(let c=0;c<9;c++){const u=s[c][o].value;dt(s,e,o,u);const a=s[e][c].value;dt(s,e,o,a);const d=Math.floor(c/3),m=c%3,_=s[3*l+d][3*n+m].value;dt(s,e,o,_)}return s[e][o].notes},Ht=s=>{for(let t=0;t<9;t++)for(let e=0;e<9;e++)St(s,{row:t,col:e})},jt=s=>{const t=[];for(let e=0;e<9;e++){const o={},n={},l={},c=3*Math.floor(e/3),u=3*(e%3);for(let a=0;a<9;a++){if(s[e][a].value===void 0){const T=s[e][a].notes;for(const h of T)o[h]||(o[h]=[]),o[h].push({row:e,col:a})}if(s[a][e].value===void 0){const T=s[a][e].notes;for(const h of T)n[h]||(n[h]=[]),n[h].push({row:a,col:e})}const d=Math.floor(a/3),m=a%3,_=c+d,w=u+m;if(s[_][w].value===void 0){const T=s[_][w].notes;for(const h of T)l[h]||(l[h]=[]),l[h].push({row:_,col:w})}}for(const a of Object.keys(o)){const d=Number(a);if(o[d].length===1){const{row:m,col:_}=o[d][0];t.push({type:"hidden_single_row",cause:[{row:m,col:_,notes:[d]}]})}}for(const a of Object.keys(n)){const d=Number(a);if(n[d].length===1){const{row:m,col:_}=n[d][0];t.push({type:"hidden_single_col",cause:[{row:m,col:_,notes:[d]}]})}}for(const a of Object.keys(l)){const d=Number(a);if(l[d].length===1){const{row:m,col:_}=l[d][0];t.push({type:"hidden_single_square",cause:[{row:m,col:_,notes:[d]}]})}}}return t},Jt=s=>{const t=[];for(let e=0;e<9;e++)for(let o=0;o<9;o++)s[e][o].value===void 0&&s[e][o].notes.length===1&&t.push({type:"lone_single",cause:[{row:e,col:o,notes:[s[e][o].notes[0]]}]});return t};function Nt(s){let t,e,o="grid has errors",n,l,c="grid is filled",u,a,d="grid is valid",m,_,w="grid has solutions",T,h,D=s[1]?"Has errors":"No errors",M,H,x,A=s[2]?"Is filled":"Not filled",U,i,f,V=s[3]?"Is valid":"Not valid",F,y,S,L;return{c(){t=p("div"),e=p("div"),e.textContent=o,n=b(),l=p("div"),l.textContent=c,u=b(),a=p("div"),a.textContent=d,m=b(),_=p("div"),_.textContent=w,T=b(),h=p("div"),M=et(D),H=b(),x=p("div"),U=et(A),i=b(),f=p("div"),F=et(V),y=b(),S=p("div"),L=et(s[4]),this.h()},l(G){t=C(G,"DIV",{class:!0});var v=B(t);e=C(v,"DIV",{"data-svelte-h":!0}),I(e)!=="svelte-1hlqbal"&&(e.textContent=o),n=N(v),l=C(v,"DIV",{"data-svelte-h":!0}),I(l)!=="svelte-ekf37s"&&(l.textContent=c),u=N(v),a=C(v,"DIV",{"data-svelte-h":!0}),I(a)!=="svelte-16e0vl8"&&(a.textContent=d),m=N(v),_=C(v,"DIV",{"data-svelte-h":!0}),I(_)!=="svelte-1tjrozg"&&(_.textContent=w),T=N(v),h=C(v,"DIV",{class:!0});var W=B(h);M=ot(W,D),W.forEach(g),H=N(v),x=C(v,"DIV",{class:!0});var K=B(x);U=ot(K,A),K.forEach(g),i=N(v),f=C(v,"DIV",{class:!0});var q=B(f);F=ot(q,V),q.forEach(g),y=N(v),S=C(v,"DIV",{class:!0});var X=B(S);L=ot(X,s[4]),X.forEach(g),v.forEach(g),this.h()},h(){P(h,"class","status svelte-1csoeu4"),st(h,"red",s[1]),P(x,"class","status svelte-1csoeu4"),st(x,"red",!s[2]),P(f,"class","status svelte-1csoeu4"),st(f,"red",!s[3]),P(S,"class","status svelte-1csoeu4"),st(S,"red",s[4]!=="unique"),P(t,"class","grid-status svelte-1csoeu4")},m(G,v){J(G,t,v),r(t,e),r(t,n),r(t,l),r(t,u),r(t,a),r(t,m),r(t,_),r(t,T),r(t,h),r(h,M),r(t,H),r(t,x),r(x,U),r(t,i),r(t,f),r(f,F),r(t,y),r(t,S),r(S,L)},p:nt,d(G){G&&g(t)}}}function Mt(s){let t=s[0],e,o=Nt(s);return{c(){o.c(),e=lt()},l(n){o.l(n),e=lt()},m(n,l){o.m(n,l),J(n,e,l)},p(n,[l]){l&1&&it(t,t=n[0])?(o.d(1),o=Nt(n),o.c(),o.m(e.parentNode,e)):o.p(n,l)},i:nt,o:nt,d(n){n&&g(e),o.d(n)}}}function Ft(s,t,e){let{grid:o}=t,n=$t(o),l=Dt(o),c=qt(o),u=Et(o);return s.$$set=a=>{"grid"in a&&e(0,o=a.grid)},[o,n,l,c,u]}class zt extends xt{constructor(t){super(),yt(this,t,Ft,Mt,it,{grid:0})}}function gt(s){let t,e,o,n;return t=new Ut({props:{grid:s[0]}}),t.$on("cellUpdate",s[2]),t.$on("computeCellNotes",s[3]),o=new zt({props:{grid:s[0]}}),{c(){ht(t.$$.fragment),e=b(),ht(o.$$.fragment)},l(l){pt(t.$$.fragment,l),e=N(l),pt(o.$$.fragment,l)},m(l,c){Ct(t,l,c),J(l,e,c),Ct(o,l,c),n=!0},p(l,c){const u={};c&1&&(u.grid=l[0]),t.$set(u);const a={};c&1&&(a.grid=l[0]),o.$set(a)},i(l){n||(at(t.$$.fragment,l),at(o.$$.fragment,l),n=!0)},o(l){rt(t.$$.fragment,l),rt(o.$$.fragment,l),n=!1},d(l){l&&g(e),kt(t,l),kt(o,l)}}}function Pt(s){let t,e,o="Grid controls",n,l,c,u="Prev",a,d,m="New Grid",_,w,T="Solve grid",h,D,M="Reset grid",H,x,A="Remove fixed",U,i,f,V="Notes controls",F,y,S,L="Compute notes",G,v,W="Remove notes",K,q,X="Display hints",ct,z,ft="Hide hints",Y,vt=s[0],Q,Z,ut,_t,$=gt(s);return{c(){t=p("div"),e=p("h4"),e.textContent=o,n=b(),l=p("div"),c=p("button"),c.textContent=u,a=b(),d=p("button"),d.textContent=m,_=b(),w=p("button"),w.textContent=T,h=b(),D=p("button"),D.textContent=M,H=b(),x=p("button"),x.textContent=A,U=b(),i=p("div"),f=p("h4"),f.textContent=V,F=b(),y=p("div"),S=p("button"),S.textContent=L,G=b(),v=p("button"),v.textContent=W,K=b(),q=p("button"),q.textContent=X,ct=b(),z=p("button"),z.textContent=ft,Y=b(),$.c(),Q=lt(),this.h()},l(k){t=C(k,"DIV",{});var O=B(t);e=C(O,"H4",{"data-svelte-h":!0}),I(e)!=="svelte-1h8cvtc"&&(e.textContent=o),n=N(O),l=C(O,"DIV",{class:!0});var E=B(l);c=C(E,"BUTTON",{"data-svelte-h":!0}),I(c)!=="svelte-bivxk4"&&(c.textContent=u),a=N(E),d=C(E,"BUTTON",{"data-svelte-h":!0}),I(d)!=="svelte-1oh0e6u"&&(d.textContent=m),_=N(E),w=C(E,"BUTTON",{"data-svelte-h":!0}),I(w)!=="svelte-1wjgins"&&(w.textContent=T),h=N(E),D=C(E,"BUTTON",{"data-svelte-h":!0}),I(D)!=="svelte-69m1bk"&&(D.textContent=M),H=N(E),x=C(E,"BUTTON",{"data-svelte-h":!0}),I(x)!=="svelte-g7g4he"&&(x.textContent=A),E.forEach(g),O.forEach(g),U=N(k),i=C(k,"DIV",{});var tt=B(i);f=C(tt,"H4",{"data-svelte-h":!0}),I(f)!=="svelte-8gx0az"&&(f.textContent=V),F=N(tt),y=C(tt,"DIV",{class:!0});var j=B(y);S=C(j,"BUTTON",{"data-svelte-h":!0}),I(S)!=="svelte-12olw78"&&(S.textContent=L),G=N(j),v=C(j,"BUTTON",{"data-svelte-h":!0}),I(v)!=="svelte-16z5c15"&&(v.textContent=W),K=N(j),q=C(j,"BUTTON",{"data-svelte-h":!0}),I(q)!=="svelte-mp8c3v"&&(q.textContent=X),ct=N(j),z=C(j,"BUTTON",{"data-svelte-h":!0}),I(z)!=="svelte-eks63j"&&(z.textContent=ft),j.forEach(g),tt.forEach(g),Y=N(k),$.l(k),Q=lt(),this.h()},h(){P(l,"class","grid-controls svelte-17fx0fn"),P(y,"class","notes-controls svelte-17fx0fn")},m(k,O){J(k,t,O),r(t,e),r(t,n),r(t,l),r(l,c),r(l,a),r(l,d),r(l,_),r(l,w),r(l,h),r(l,D),r(l,H),r(l,x),J(k,U,O),J(k,i,O),r(i,f),r(i,F),r(i,y),r(y,S),r(y,G),r(y,v),r(y,K),r(y,q),r(y,ct),r(y,z),J(k,Y,O),$.m(k,O),J(k,Q,O),Z=!0,ut||(_t=[R(c,"click",s[9]),R(d,"click",s[10]),R(w,"click",s[11]),R(D,"click",s[12]),R(x,"click",s[13]),R(S,"click",s[14]),R(v,"click",s[15]),R(q,"click",s[16]),R(z,"click",s[17])],ut=!0)},p(k,[O]){O&1&&it(vt,vt=k[0])?(Tt(),rt($,1,1,nt),Ot(),$=gt(k),$.c(),at($,1),$.m(Q.parentNode,Q)):$.p(k,O)},i(k){Z||(at($),Z=!0)},o(k){rt($),Z=!1},d(k){k&&(g(t),g(U),g(i),g(Y),g(Q)),$.d(k),ut=!1,It(_t)}}}function At(s,t,e){let o=mt();const n=[JSON.parse(JSON.stringify(o))],l=i=>{Gt(i.detail.cell,i.detail.update),u()},c=i=>{St(o,i.detail.position),u()},u=i=>{e(0,o),!(i!=null&&i.noHistory)&&n.push(JSON.parse(JSON.stringify(o)))},a=i=>{for(let f=0;f<9;f++)for(let V=0;V<9;V++)i[f][V].fixed||(i[f][V].value=void 0,i[f][V].notes=[])},d=()=>{const i=Rt(o);e(0,o=i),u()},m=()=>{for(let i=0;i<9;i++)for(let f=0;f<9;f++)e(0,o[i][f].fixed=!1,o)},_=i=>{const f=Jt(i),V=jt(i);bt.set([...f,...V])};return[o,n,l,c,u,a,d,m,_,()=>{e(0,o=n.pop()),u({noHistory:!0})},()=>{e(0,o=mt()),u()},()=>{d(),u()},()=>{a(o),u()},()=>{m(),u()},()=>{Ht(o),u()},()=>{Bt(o),u()},()=>{_(o),u()},()=>{bt.set([]),u()}]}class Wt extends xt{constructor(t){super(),yt(this,t,At,Pt,it,{})}}export{Wt as component};
