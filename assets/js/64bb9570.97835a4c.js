"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[582],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>C});var o=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),m=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=m(e.components);return o.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},y=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(t),y=r,C=s["".concat(p,".").concat(y)]||s[y]||u[y]||i;return t?o.createElement(C,a(a({ref:n},c),{},{components:t})):o.createElement(C,a({ref:n},c))}));function C(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:r,a[1]=l;for(var m=2;m<i;m++)a[m]=t[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6240:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(8168),r=(t(6540),t(5680));const i={sidebar_label:"() -> Unit \u8207 @Composable () -> Unit",sidebar_position:5},a="() -> Unit \u8207 @Composable () -> Unit",l={unversionedId:"Kotlin & Jetpack Compose/JetpackComposeNote4",id:"Kotlin & Jetpack Compose/JetpackComposeNote4",isDocsHomePage:!1,title:"() -> Unit \u8207 @Composable () -> Unit",description:"---",source:"@site/docs/Kotlin & Jetpack Compose/JetpackComposeNote4.md",sourceDirName:"Kotlin & Jetpack Compose",slug:"/Kotlin & Jetpack Compose/JetpackComposeNote4",permalink:"/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote4",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"() -> Unit \u8207 @Composable () -> Unit",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Composable",permalink:"/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote3"},next:{title:"\u72c0\u614b\u7ba1\u7406",permalink:"/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote5"}},p=[{value:"<code>() -&gt; Unit</code>",id:"---unit",children:[]},{value:"<code>@Composable () -&gt; Unit</code>",id:"composable----unit",children:[]},{value:"\u4e3b\u8981\u5340\u5225",id:"\u4e3b\u8981\u5340\u5225",children:[]}],m={toc:p},c="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,o.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"---unit-\u8207-composable----unit"},"() -> Unit \u8207 @Composable () -> Unit"),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"---unit"},(0,r.yg)("inlineCode",{parentName:"h2"},"() -> Unit")),(0,r.yg)("p",null,"\u9019\u662f\u4e00\u7a2e\u666e\u901a\u7684 Kotlin \u51fd\u6578\u985e\u578b\uff0c\u5b83\u8868\u793a\u4e00\u500b\u7121\u53c3\u6578\u4e14\u7121\u8fd4\u56de\u503c\u7684\u51fd\u6578\u3002\u9019\u7a2e\u51fd\u6578\u4e0d\u80fd\u76f4\u63a5\u7528\u65bc Compose \u7684\u7d44\u4ef6\u6a39\u4e2d"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'val simpleAction: () -> Unit = {\n    println("Simple action executed")\n}\n')),(0,r.yg)("h2",{id:"composable----unit"},(0,r.yg)("inlineCode",{parentName:"h2"},"@Composable () -> Unit")),(0,r.yg)("p",null,"\u9019\u662f\u4e00\u7a2e Compose \u7279\u5b9a\u7684\u51fd\u6578\u985e\u578b\uff0c\u8868\u793a\u9019\u500b\u51fd\u6578\u53ef\u4ee5\u7528\u4f86\u63cf\u8ff0 UI \u7d44\u4ef6\u7684\u7d44\u5408\u3002",(0,r.yg)("inlineCode",{parentName:"p"},"@Composable")," \u8a3b\u89e3\u544a\u8a34 Compose \u6846\u67b6\u9019\u500b\u51fd\u6578\u6703\u7528\u4f86\u5275\u5efa\u6216\u66f4\u65b0\u7d44\u4ef6\u6a39\uff0c\u56e0\u6b64\u5b83\u53ef\u4ee5\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"@Composable")," \u51fd\u6578\u5167\u90e8\u8abf\u7528"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'@Composable\nfun MyComposableFunction() {\n    val action: @Composable () -> Unit = {\n        // \u9019\u88e1\u53ef\u4ee5\u653e\u7f6e Compose \u7684 UI \u4ee3\u78bc\n        Text("Hello, Compose!")\n    }\n\n    Button(onClick = action) {\n        Text("Click me")\n    }\n}\n')),(0,r.yg)("h2",{id:"\u4e3b\u8981\u5340\u5225"},"\u4e3b\u8981\u5340\u5225"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u7528\u9014\uff1a",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"() -> Unit"),"\uff1a\u7528\u65bc\u4e00\u822c\u7684 Kotlin \u51fd\u6578\uff0c\u9069\u5408\u8655\u7406\u975e Compose \u7684\u908f\u8f2f"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@Composable () -> Unit"),"\uff1a\u5c08\u9580\u7528\u65bc Compose \u7684 UI \u63cf\u8ff0\uff0c\u80fd\u5920\u5728 Compose \u7d44\u4ef6\u6a39\u4e2d\u4f7f\u7528\uff0c\u4e26\u80fd\u5920\u5728\u7d44\u4ef6\u6a39\u7684\u4e0a\u4e0b\u6587\u4e2d\u9032\u884c\u7d44\u5408\u548c\u91cd\u7d44"))),(0,r.yg)("li",{parentName:"ol"},"\u4e0a\u4e0b\u6587\uff1a",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"() -> Unit"),"\uff1a\u9019\u7a2e\u51fd\u6578\u4e0d\u80fd\u76f4\u63a5\u7528\u65bc Compose \u7d44\u4ef6\u7684\u5167\u90e8\uff0c\u5b83\u53ea\u662f\u57f7\u884c\u4e00\u4e9b\u666e\u901a\u7684\u908f\u8f2f\u64cd\u4f5c"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@Composable () -> Unit"),"\uff1a\u9019\u7a2e\u51fd\u6578\u53ef\u4ee5\u88ab Compose \u6846\u67b6\u7406\u89e3\uff0c\u4e26\u5728 UI \u66f4\u65b0\u6642\u88ab\u8abf\u7528"))),(0,r.yg)("li",{parentName:"ol"},"\u8abf\u7528\u65b9\u5f0f\uff1a",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"() -> Unit"),"\uff1a\u76f4\u63a5\u8abf\u7528\u5373\u53ef\uff0c\u6c92\u6709\u4efb\u4f55\u7279\u6b8a\u8981\u6c42"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"@Composable () -> Unit"),"\uff1a\u9700\u8981\u5728 Compose \u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"@Composable")," \u51fd\u6578\u5167\u90e8\u8abf\u7528\uff0c\u4e26\u4e14\u8981\u9075\u5faa Compose \u7684\u7d44\u4ef6\u6a39\u898f\u5247")))),(0,r.yg)("p",null,"\u7e3d\u7d50\u4f86\u8aaa\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"@Composable () -> Unit")," \u662f\u70ba\u4e86 Compose \u6846\u67b6\u8a2d\u8a08\u7684\uff0c\u80fd\u5920\u5728 UI \u7d44\u4ef6\u4e2d\u4f7f\u7528\uff0c\u4e26\u4e14\u80fd\u5920\u6839\u64da\u72c0\u614b\u6539\u8b8a\u9032\u884c\u91cd\u7d44\u3002\u800c\u666e\u901a\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"() -> Unit")," \u5247\u7528\u65bc\u4e00\u822c\u7684\u51fd\u6578\u908f\u8f2f\uff0c\u4e0d\u6d89\u53ca Compose \u7684\u7d44\u4ef6\u6a39"))}s.isMDXComponent=!0}}]);