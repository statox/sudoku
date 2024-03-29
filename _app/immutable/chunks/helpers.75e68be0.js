import{f as N,e as m,h as b}from"./GridStatus.3292aedf.js";const x=()=>{const e=N(m()),l=[];for(let o=0;o<9;o++)for(let s=0;s<9;s++)l.push({row:o,col:s});for(;l.length;){const o=Math.floor(Math.random()*l.length),{row:s,col:a}=l[o];l.splice(o,1);const h=e[s][a].value;e[s][a].value=void 0,e[s][a].notes=[],e[s][a].fixed=!1,b(e)!=="unique"&&(e[s][a].value=h)}for(let o=0;o<9;o++)for(let s=0;s<9;s++)e[o][s].value&&(e[o][s].fixed=!0);return e},M=e=>{const l=[];for(let o=0;o<9;o++){const s={},a={},h={},v=3*Math.floor(o/3),y=3*(o%3);for(let t=0;t<9;t++){if(e[o][t].value===void 0){const c=e[o][t].notes;for(const r of c)s[r]||(s[r]=[]),s[r].push({row:o,col:t})}if(e[t][o].value===void 0){const c=e[t][o].notes;for(const r of c)a[r]||(a[r]=[]),a[r].push({row:t,col:o})}const f=Math.floor(t/3),w=t%3,n=v+f,u=y+w;if(e[n][u].value===void 0){const c=e[n][u].notes;for(const r of c)h[r]||(h[r]=[]),h[r].push({row:n,col:u})}}for(const t of Object.keys(s)){const f=Number(t);if(s[f].length===1){const{row:w,col:n}=s[f][0];l.push({type:"hidden_single_row",cause:[{row:w,col:n,notes:[f]}],effect:[{row:w,col:n,notes:e[w][n].notes.filter(u=>u!==f)}]})}}for(const t of Object.keys(a)){const f=Number(t);if(a[f].length===1){const{row:w,col:n}=a[f][0];l.push({type:"hidden_single_col",cause:[{row:w,col:n,notes:[f]}],effect:[{row:w,col:n,notes:e[w][n].notes.filter(u=>u!==f)}]})}}for(const t of Object.keys(h)){const f=Number(t);if(h[f].length===1){const{row:w,col:n}=h[f][0];l.push({type:"hidden_single_square",cause:[{row:w,col:n,notes:[f]}],effect:[{row:w,col:n,notes:e[w][n].notes.filter(u=>u!==f)}]})}}}return l},R=e=>{const l=[];for(let o=0;o<9;o++)for(let s=0;s<9;s++)e[o][s].value===void 0&&e[o][s].notes.length===1&&l.push({type:"lone_single",cause:[{row:o,col:s,notes:[e[o][s].notes[0]]}],effect:[]});return l},E=e=>{const l=[];for(let o=0;o<9;o++){const s={},a={},h={},v=3*Math.floor(o/3),y=3*(o%3);for(let t=0;t<9;t++){if(e[o][t].value===void 0&&e[o][t].notes.length===2){const c=e[o][t].notes.join(",");if(!s[c])s[c]={row:o,col:t};else{const r={row:o,col:t,notes:[...e[o][t].notes]},_={row:s[c].row,col:s[c].col,notes:[...e[o][t].notes]},p=[];for(let i=0;i<9;i++)e[o][i].value!==void 0||e[o][i].notes.join(",")===c||p.push({row:o,col:i,notes:[...e[o][t].notes]});l.push({type:"naked_pair",cause:[r,_],effect:p})}}if(e[t][o].value===void 0&&e[t][o].notes.length===2){const c=e[t][o].notes.join(",");if(!a[c])a[c]={row:t,col:o};else{const r={row:t,col:o,notes:[...e[t][o].notes]},_={row:a[c].row,col:a[c].col,notes:[...e[t][o].notes]},p=[];for(let i=0;i<9;i++)e[i][o].value!==void 0||e[i][o].notes.join(",")===c||p.push({row:i,col:o,notes:[...e[t][o].notes]});l.push({type:"naked_pair",cause:[r,_],effect:p})}}const f=Math.floor(t/3),w=t%3,n=v+f,u=y+w;if(e[n][u].value===void 0&&e[n][u].notes.length===2){const c=e[n][u].notes.join(",");if(!h[c])h[c]={row:n,col:u};else{const r={row:n,col:u,notes:[...e[n][u].notes]},_={row:h[c].row,col:h[c].col,notes:[...e[n][u].notes]},p=[];for(let i=0;i<9;i++){const C=Math.floor(i/3),q=i%3,k=v+C,j=y+q;e[k][j].value!==void 0||e[k][j].notes.join(",")===c||p.push({row:k,col:j,notes:[...e[n][u].notes]})}l.push({type:"naked_pair",cause:[r,_],effect:p})}}}}return l},d=e=>[...R(e),...M(e),...E(e)];export{d as a,x as g};
