import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as o,b as s,F as u,n as h,q as r,t as n,p as f,m}from"./app-3b64d3fc.js";const v={props:{total:{type:Number,default:9},current:{type:Number,default:-1}},data(){return{before:this.total===this.current?-1:this.total,isPlay:!1}},watch:{current(t,i){this.before=i,this.isPlay||(this.isPlay=!0)}}},d=t=>(f("data-v-3b629d0d"),t=t(),m(),t),b={class:"flip"},y={class:"up"},I=d(()=>s("div",{class:"shadow"},null,-1)),w={class:"inn"},F={class:"down"},x=d(()=>s("div",{class:"shadow"},null,-1)),P={class:"inn"};function S(t,i,c,g,l,B){return a(),o("div",{class:r({play:l.isPlay})},[s("ul",b,[(a(!0),o(u,null,h(c.total+1,(_,e)=>(a(),o("li",{class:r(["item",{active:c.current===e,before:e===l.before}]),key:_},[s("div",y,[I,s("div",w,n(e),1)]),s("div",F,[x,s("div",P,n(e),1)])],2))),128))])],2)}const z=p(v,[["render",S],["__scopeId","data-v-3b629d0d"],["__file","FlipItem.vue"]]);export{z as default};