import{b as i,m as p,d as u,j as m,e as M}from"./GridStatus.ba6e1e04.js";const d=(e,t)=>{if(i(e)||p(e))return e;const n=u(e);m(n);const s=[n];for(;s.length;){const o=s.pop();if(t&&t.push(u(o)),i(o))continue;if(p(o)){if(M(o))return o;continue}const r=N(o);if(!r.length)continue;const a=Math.floor(Math.random()*r.length),l=r[a],f=u(o);f[l.row][l.col].notes=f[l.row][l.col].notes.filter(v=>v!==l.value),s.push(f),C(o,l),h(o),s.push(o)}return n},c=(e,t,n,s)=>{if(e[t][n].value)return!1;const o=e[t][n].notes.indexOf(s);return o===-1?!1:(e[t][n].notes.splice(o,1),e[t][n].notes.length===1?(e[t][n].value=e[t][n].notes.pop(),!0):!1)},h=e=>{if(p(e)||i(e))return;let t=!1;for(let n=0;n<9;n++)for(let s=0;s<9;s++){const{value:o}=e[n][s];if(!o)continue;for(let l=0;l<9;l++)t=t||c(e,l,s,o),t=t||c(e,n,l,o);const r=Math.floor(s/3),a=Math.floor(n/3);for(let l=0;l<3;l++)for(let f=0;f<3;f++)t=t||c(e,3*a+l,3*r+f,o)}t&&h(e)},w=(e,t)=>{const{row:n,col:s,value:o}=t;return!(e[n][s].value||!e[n][s].notes.includes(o))},C=(e,t)=>{if(!w(e,t))return;const{row:n,col:s,value:o}=t;e[n][s].value=o,e[n][s].notes=[]},N=e=>{let t=[],n=9;for(let s=0;s<9;s++)for(let o=0;o<9;o++){if(e[s][o].value!==void 0)continue;const{notes:r}=e[s][o];if(r.length<n&&(n=r.length,t=[]),r.length===n)for(const a of e[s][o].notes)t.push({row:s,col:o,value:a})}return t};export{d as g};