import{A as m,r as p,B as f,f as d,o as v,c as h,C as E,D as _,E as e}from"./entry.khJN_8EH.js";const I=["innerHTML"],g=m({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(u){let o,a;const i=u,r=p("");let c=!1;async function l(){try{const n=await Object.assign({"/assets/icons/java.svg":()=>e(()=>import("./java.Rz_kahTb.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/assets/icons/nuxt.svg":()=>e(()=>import("./nuxt.LafXW0LT.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/assets/icons/python.svg":()=>e(()=>import("./python.QhpQDF9-.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/assets/icons/tailwind.svg":()=>e(()=>import("./tailwind.Wke10TnL.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default)})[`/assets/icons/${i.name}.svg`]();n.includes("stroke")&&(c=!0),r.value=n}catch{console.error(`[nuxt-icons] Icon '${i.name}' doesn't exist in 'assets/icons'`)}}return[o,a]=f(()=>l()),await o,a(),d(l),(s,n)=>(v(),h("span",{class:E(["nuxt-icon",{"nuxt-icon--fill":!s.filled,"nuxt-icon--stroke":_(c)&&!s.filled}]),innerHTML:_(r)},null,10,I))}});export{g as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
