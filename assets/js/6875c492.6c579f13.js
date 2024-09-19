"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[813],{19:(e,t,a)=>{a.d(t,{A:()=>E});var n=a(6540),r=a(53),l=a(467),s=a(4676);const o="sidebar_q+wC",c="sidebarItemTitle_9G5K",m="sidebarItemList_6T4b",i="sidebarItem_cjdF",d="sidebarItemLink_zyXk",u="sidebarItemLinkActive_wcJs";var g=a(4798);function h(e){let{sidebar:t}=e;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.A)(o,"thin-scrollbar"),"aria-label":(0,g.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.A)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:m},t.items.map((e=>n.createElement("li",{key:e.permalink,className:i},n.createElement(s.A,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))))))}var p=a(1461);const E=function(e){const{sidebar:t,toc:a,children:s,...o}=e,c=t&&t.items.length>0;return n.createElement(l.A,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},c&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,r.A)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},n.createElement(p.A,{toc:a})))))}},1715:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(6540),r=a(53),l=a(5680),s=a(4798),o=a(4676),c=a(6025),m=a(9777),i=a(5582),d=a(6458);const u="blogPostTitle_d4p0",g="blogPostData_-Im+",h="blogPostDetailsFull_xD8n";var p=a(2853);const E="image_9q7L";const f=function(e){let{author:t}=e;const{name:a,title:r,url:l,imageURL:s}=t;return n.createElement("div",{className:"avatar margin-bottom--sm"},s&&n.createElement(o.A,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:E,src:s,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.A,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},b="authorCol_8c0z";function v(e){let{authors:t,assets:a}=e;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>n.createElement("div",{className:(0,r.A)("col col--6",b),key:t},n.createElement(f,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const N=function(e){const t=function(){const{selectMessage:e}=(0,m.Ww)();return t=>{const a=Math.ceil(t);return e(a,(0,s.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,c.h)(),{children:E,frontMatter:f,assets:b,metadata:N,truncated:_,isBlogPostPage:A=!1}=e,{date:k,formattedDate:T,permalink:P,tags:w,readingTime:y,title:L,editUrl:C,authors:R}=N,x=b.image??f.image;return n.createElement("article",{className:A?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=A?"h1":"h2";return n.createElement("header",null,n.createElement(e,{className:u,itemProp:"headline"},A?L:n.createElement(o.A,{itemProp:"url",to:P},L)),n.createElement("div",{className:(0,r.A)(g,"margin-vert--md")},n.createElement("time",{dateTime:k,itemProp:"datePublished"},T),void 0!==y&&n.createElement(n.Fragment,null," \xb7 ",t(y))),n.createElement(v,{authors:R,assets:b}))})(),x&&n.createElement("meta",{itemProp:"image",content:a(x,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.xA,{components:i.A},E)),(w.length>0||_)&&n.createElement("footer",{className:(0,r.A)("row docusaurus-mt-lg",{[h]:A})},w.length>0&&n.createElement("div",{className:(0,r.A)("col",{"col--9":!A})},n.createElement(p.A,{tags:w})),A&&C&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.A,{editUrl:C})),!A&&_&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(o.A,{to:N.permalink,"aria-label":`Read more about ${L}`},n.createElement("b",null,n.createElement(s.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6033:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(6540),r=a(4676),l=a(19),s=a(1715),o=a(4798),c=a(9777);function m(e){const{metadata:t,items:a,sidebar:m}=e,{allTagsPath:i,name:d,count:u}=t,g=function(){const{selectMessage:e}=(0,c.Ww)();return t=>e(t,(0,o.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),h=(0,o.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:g(u),tagName:d});return n.createElement(l.A,{title:h,wrapperClassName:c.GN.wrapper.blogPages,pageClassName:c.GN.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:m},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,h),n.createElement(r.A,{href:i},n.createElement(o.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return n.createElement(s.A,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},n.createElement(t,null))})))}},6458:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(6540),r=a(4798),l=a(8168),s=a(53);const o="iconEdit_mS5F",c=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,l.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var m=a(9777);function i(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.GN.common.editThisPage},n.createElement(c,null),n.createElement(r.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1461:(e,t,a)=>{a.d(t,{m:()=>g,A:()=>h});var n=a(6540),r=a(53),l=a(9777);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function o(e){let{anchorTopOffset:t}=e;const a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=a.find((e=>s(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:a[a.indexOf(n)-1]??null}return a[a.length-1]}function c(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.pN)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const m=function(e){const t=(0,n.useRef)(void 0),a=c();(0,n.useEffect)((()=>{const{linkClassName:n,linkActiveClassName:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=o({anchorTopOffset:a.current}),s=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current?.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},i="tableOfContents_vrFS",d="table-of-contents__link",u={linkClassName:d,linkActiveClassName:"table-of-contents__link--active"};function g(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:d,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))))):null}const h=function(e){let{toc:t}=e;return m(u),n.createElement("div",{className:(0,r.A)(i,"thin-scrollbar")},n.createElement(g,{toc:t}))}},3373:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(6540),r=a(53),l=a(4676);const s="tag_WK-t",o="tagRegular_LXbV",c="tagWithCount_S5Zl";const m=function(e){const{permalink:t,name:a,count:m}=e;return n.createElement(l.A,{href:t,className:(0,r.A)(s,{[o]:!m,[c]:m})},a,m&&n.createElement("span",null,m))}},2853:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(6540),r=a(53),l=a(4798),s=a(3373);const o={tags:"tags_NBRY",tag:"tag_F03v"};function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.A)(o.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:o.tag},n.createElement(s.A,{name:t,permalink:a}))}))))}}}]);