"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[711],{631:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var r=a(6540),l=a(467),n=a(4676),c=a(4798);function m(e){let{year:t,posts:a}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,t),r.createElement("ul",null,a.map((e=>r.createElement("li",{key:e.metadata.date},r.createElement(n.A,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))))))}function i(e){let{years:t}=e;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t.map(((e,t)=>r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(m,e)))))))}function s(e){let{archive:t}=e;const a=(0,c.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),n=(0,c.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),m=function(e){const t=e.reduceRight(((e,t)=>{const a=t.metadata.date.split("-")[0],r=e.get(a)||[];return e.set(a,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return r.createElement(l.A,{title:a,description:n},r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},a),r.createElement("p",{className:"hero__subtitle"},n))),r.createElement("main",null,m.length>0&&r.createElement(i,{years:m})))}}}]);