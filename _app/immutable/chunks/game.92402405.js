import{i as r,h as i,j as a}from"./GridStatus.3ef50f87.js";const f=()=>{const t=r(i()),l=[];for(let e=0;e<9;e++)for(let o=0;o<9;o++)l.push({row:e,col:o});for(;l.length;){const e=Math.floor(Math.random()*l.length),{row:o,col:s}=l[e];l.splice(e,1);const n=t[o][s].value;t[o][s].value=void 0,t[o][s].notes=[],t[o][s].fixed=!1,a(t)!=="unique"&&(t[o][s].value=n)}for(let e=0;e<9;e++)for(let o=0;o<9;o++)t[e][o].value&&(t[e][o].fixed=!0);return t};export{f as g};
