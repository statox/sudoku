const r="sudoku-game-grid-v1",e=t=>{localStorage.setItem(r,JSON.stringify(t))},o=()=>{try{const t=localStorage.getItem(r);return t?JSON.parse(t):void 0}catch{return}};export{o as g,e as s};
