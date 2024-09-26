"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[3600],{5680:(e,n,i)=>{i.d(n,{xA:()=>m,yg:()=>u});var t=i(6540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function p(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=t.createContext({}),y=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},m=function(e){var n=y(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=y(i),g=r,u=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return i?t.createElement(u,a(a({ref:n},m),{},{components:i})):t.createElement(u,a({ref:n},m))}));function u(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:r,a[1]=p;for(var y=2;y<o;y++)a[y]=i[y];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}g.displayName="MDXCreateElement"},3197:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var t=i(8168),r=(i(6540),i(5680));const o={sidebar_label:"Loop",sidebar_position:13},a="Loop",p={unversionedId:"Swift/swiftNote13",id:"Swift/swiftNote13",isDocsHomePage:!1,title:"Loop",description:"---",source:"@site/docs/Swift/swiftNote13.md",sourceDirName:"Swift",slug:"/Swift/swiftNote13",permalink:"/my-note/docs/Swift/swiftNote13",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_label:"Loop",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"shuffle & shuffled",permalink:"/my-note/docs/Swift/swiftNote12"},next:{title:"enum",permalink:"/my-note/docs/Swift/swiftNote14"}},l=[{value:"<code>for in</code>",id:"for-in",children:[]},{value:"<code>while</code>",id:"while",children:[]}],y={toc:l},m="wrapper";function c(e){let{components:n,...o}=e;return(0,r.yg)(m,(0,t.A)({},y,o,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"loop"},"Loop"),(0,r.yg)("hr",null),(0,r.yg)("p",null,"\u5728 Swift \u4e2d\u4e5f\u6709\u5e7e\u7a2e\u8ff4\u5708\u7684\u65b9\u5f0f\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"for in")," \u8207 ",(0,r.yg)("inlineCode",{parentName:"p"},"while")),(0,r.yg)("h2",{id:"for-in"},(0,r.yg)("inlineCode",{parentName:"h2"},"for in")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"for in")," \u8ddf\u4e00\u822c\u7a0b\u5f0f\u8a9e\u8a00\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"for")," \u8ff4\u5708\u7684\u4f7f\u7528\u65b9\u6cd5\u985e\u4f3c\uff0c\u4f46\u4e0d\u540c\u7684\u5730\u65b9\u662f\u6bd4\u5982 Java \u7684\u8ff4\u5708\u662f\u9019\u6a23\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"for int i = 0; i < 10; i++ {}"),"\uff0c\u4f46\u5728 Swift \u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"for")," \u8ff4\u5708\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"for i in 0..<10")),(0,r.yg)("p",null,"\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"in")," \u5f8c\u9762\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"0..<10")," \u6307\u7684\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"i")," \u5f9e 0 \u958b\u59cb\u52a0\u76f4\u5230\u52a0\u5230 9"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"..<")," \u662f\u5c0f\u65bc\n",(0,r.yg)("inlineCode",{parentName:"p"},"...")," \u662f\u7b49\u65bc"),(0,r.yg)("p",null,"\u82e5\u8ff4\u5708\u9577\u9019\u6a23 ",(0,r.yg)("inlineCode",{parentName:"p"},"for i in 0...10")," ",(0,r.yg)("inlineCode",{parentName:"p"},"i")," \u5f9e 0 \u958b\u59cb\u52a0\u76f4\u5230\u52a0\u5230 10"),(0,r.yg)("p",null,"\u82e5\u8ff4\u5708\u5167\u4e0d\u6703\u7528\u5230\u8ff4\u5708\u8b8a\u6578 ( ",(0,r.yg)("inlineCode",{parentName:"p"},"i")," ) \u7684\u8a71\uff0c\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"_")," \u4e5f\u53ef\u4ee5"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"for i in 0..<10")," \u8ddf ",(0,r.yg)("inlineCode",{parentName:"p"},"for _ in 0..<10")," \u662f\u4e00\u6a23\u7684\uff0c\u53ea\u662f ",(0,r.yg)("inlineCode",{parentName:"p"},"for i in 0..<10")," \u662f\u53ef\u4ee5\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"{}")," \u5167\u67e5\u770b ",(0,r.yg)("inlineCode",{parentName:"p"},"i")," \u7684\u6578\u503c\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"for _ in 0..<10")," \u4e0d\u884c"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"where"),"  \u53ef\u4ee5\u52a0\u4e0a\u689d\u4ef6\uff0c\u4f8b\u5982 "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"for i in 0..<10 where i % 2 == 0 {\n    sum += i\n}\n")),(0,r.yg)("p",null,"\u9019\u6bb5\u5c31\u4ee3\u8868\u5f9e 1 \u523010\uff0c\u53ea\u52a0\u5076\u6578"),(0,r.yg)("h2",{id:"while"},(0,r.yg)("inlineCode",{parentName:"h2"},"while")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"var number = 10\nwhile number > 0 {\n    number -= 1\n}\n\nnumber = 10\nrepeat {\n    number -= 1\n} while number > 0\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"while")," \u662f conditional loop\uff0c\u9069\u5408\u4e8b\u5148\u4e0d\u77e5\u9053\u6b21\u6578\u7684 loop\uff0c\u8ddf if \u5f88\u50cf\uff0c\u4f46\u662f\u6703\u91cd\u8986\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"while")," \u6bd4\u8f03\u7684\u8b8a\u6578\u8981\u4e8b\u5148\u5ba3\u544a\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"for in")," \u5247\u4e0d\u7528\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"repeat while")," \u81f3\u5c11\u8dd1\u4e00\u6b21"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u9019\u908a\u88dc\u5145\u4e00\u4e0b ",(0,r.yg)("inlineCode",{parentName:"p"},"break")," \u8207 ",(0,r.yg)("inlineCode",{parentName:"p"},"continue")),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"break")," \u662f\u6703\u76f4\u63a5\u96e2\u958b\uff0c\u82e5\u5728 loop \u88e1\u9762\u6703\u76f4\u63a5\u96e2\u958b loop \uff0c\u82e5\u5728 if else \u4e2d\u6703\u76f4\u63a5\u96e2\u958b if else"),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"continue")," \u6703\u8df3\u904e\u9019\u4e00\u6b21\u53bb\u57f7\u884c\u4e0b\u4e00\u500b"),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("img",{alt:"image15",src:i(9903).A})),(0,r.yg)("p",{parentName:"blockquote"},"\u5716\u7247\u4e2d\u6709\u8a2d\u4e86\u4e00\u500b ",(0,r.yg)("inlineCode",{parentName:"p"},"continue")," \u8ddf ",(0,r.yg)("inlineCode",{parentName:"p"},"break"),"\n\u7576 ",(0,r.yg)("inlineCode",{parentName:"p"},"i==5")," \u6642 ",(0,r.yg)("inlineCode",{parentName:"p"},"continue")," \u800c ",(0,r.yg)("inlineCode",{parentName:"p"},"i==7")," \u5247 ",(0,r.yg)("inlineCode",{parentName:"p"},"break"),"\n\u53ef\u4ee5\u770b\u5230\u7576 ",(0,r.yg)("inlineCode",{parentName:"p"},"i")," = 5 \u6642\u5c31\u76f4\u63a5\u8df3\u904e 5 \uff0c\u6c92\u6709\u628a 5 \u52a0\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"sum")," \uff0c\u800c\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"i")," = 7 \u6642\u5c31\u8df3\u51fa\u8ff4\u5708")))}c.isMDXComponent=!0},9903:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2024-08-06_3.31.58-b4661277cecae95239015fcd76e4a010.png"}}]);