var C=Object.defineProperty;var E=(t,e,n)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>(E(t,typeof e!="symbol"?e+"":e,n),n);import{C as $,G as c,W as p,h as b,d as I,w as M,M as v,X as O,S as x,Y as j,Z as B,v as w,_ as G,$ as L,a0 as N,a1 as P,a2 as R}from"./scheduler.1dd25009.js";const u=new Set;let d;function A(){d={r:0,c:[],p:d}}function D(){d.r||$(d.c),d=d.p}function U(t,e){t&&t.i&&(u.delete(t),t.i(e))}function F(t,e,n,a){if(t&&t.o){if(u.has(t))return;u.add(t),d.c.push(()=>{u.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function H(t){t&&t.c()}function J(t,e){t&&t.l(e)}function V(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),x(()=>{const f=t.$$.on_mount.map(G).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(x)}function W(t,e){const n=t.$$;n.fragment!==null&&(j(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){t.$$.dirty[0]===-1&&(L.push(t),N(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,n,a,i,f,l=null,S=[-1]){const o=B;w(t);const s=t.$$={fragment:null,ctx:[],props:f,update:c,not_equal:i,bound:p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:p(),dirty:S,skip_bound:!1,root:e.target||o.$$.root};l&&l(s.root);let h=!1;if(s.ctx=n?n(t,e.props||{},(r,g,...m)=>{const y=m.length?m[0]:g;return s.ctx&&i(s.ctx[r],s.ctx[r]=y)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](y),h&&X(t,r)),g}):[],s.update(),h=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){P();const r=b(e.target);s.fragment&&s.fragment.l(r),r.forEach(I)}else s.fragment&&s.fragment.c();e.intro&&U(t.$$.fragment),V(t,e.target,e.anchor),R(),M()}w(o)}class Q{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){W(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!O(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{Q as S,U as a,H as b,D as c,J as d,W as e,A as g,K as i,V as m,F as t};
