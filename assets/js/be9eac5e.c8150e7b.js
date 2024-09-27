"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[1932],{5680:(e,o,n)=>{n.d(o,{xA:()=>c,yg:()=>g});var t=n(6540);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function l(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var o=t.useContext(p),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},c=function(e){var o=s(e.components);return t.createElement(p.Provider,{value:o},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},v=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),v=r,g=m["".concat(p,".").concat(v)]||m[v]||u[v]||a;return n?t.createElement(g,i(i({ref:o},c),{},{components:n})):t.createElement(g,i({ref:o},c))}));function g(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=v;var l={};for(var p in o)hasOwnProperty.call(o,p)&&(l[p]=o[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}v.displayName="MDXCreateElement"},7006:(e,o,n)=>{n.r(o),n.d(o,{contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=n(8168),r=(n(6540),n(5680));const a={sidebar_label:"Navigation",sidebar_position:8},i="Navigation",l={unversionedId:"KotlinCompose/JetpackComposeNote6",id:"KotlinCompose/JetpackComposeNote6",isDocsHomePage:!1,title:"Navigation",description:"---",source:"@site/docs/KotlinCompose/JetpackComposeNote6.md",sourceDirName:"KotlinCompose",slug:"/KotlinCompose/JetpackComposeNote6",permalink:"/my-note/docs/KotlinCompose/JetpackComposeNote6",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"Navigation",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u72c0\u614b\u7ba1\u7406",permalink:"/my-note/docs/KotlinCompose/JetpackComposeNote5"},next:{title:"Compose \u5be6\u73fe MVP \u8207 MVVM \u67b6\u69cb",permalink:"/my-note/docs/KotlinCompose/JetpackComposeNote7"}},p=[],s={toc:p},c="wrapper";function m(e){let{components:o,...n}=e;return(0,r.yg)(c,(0,t.A)({},s,n,{components:o,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"navigation"},"Navigation"),(0,r.yg)("hr",null),(0,r.yg)("p",null,"\u8981\u4f7f\u7528 Navigation \u5fc5\u9808\u8981\u5148 include ",(0,r.yg)("inlineCode",{parentName:"p"},'implementation "androidx.navigation:navigation-compose:2.7.7"')," "),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},'\u5e79\u6709\u5920\u767d\u7661\u8981\u5148 implementation "androidx.navigation:navigation-compose:$nav_version" \u624d\u80fd\u6539\u6210 implementation libs.androidx.navigation.compose')),(0,r.yg)("p",null,"Navigation \u4e2d\u6211\u5011\u901a\u904e findNavController \u64f4\u5c55\u65b9\u6cd5\u7372\u53d6 NavController\uff0c\u7136\u5f8c\u9032\u884c\u8df3\u8f49\u3002\nNavController \u4e2d\u7ba1\u7406 NavGraph \u7b49\u914d\u7f6e\u4fe1\u606f\uff0c\u6240\u4ee5\u662f stateful \u7684\uff0c\u5728 Compose \u7684\u51fd\u6578\u4e2d\u9700\u8981\u901a\u904e\u4ee5\u4e0b\u65b9\u5f0f\u7372\u53d6\u4e00\u4e2a\u6709\u72c0\u614b\u7684\u5be6\u4f8b"),(0,r.yg)("p",null,"NavHost \u662f NavController \u7684\u6301\u6709\u8005\uff0cNavHostFragment \u662f Fragment \u5c0d\u65bc NavHost \u7684\u5be6\u4f5c\u3002 Compose \u57fa\u65bc composable \u51fd\u6578\u6e32\u67d3 UI\uff0c\u6c92\u6709 Fragment \u9019\u6a23\u7684\u5177\u9ad4\u5be6\u4f8b\u505a\u8f09\u9ad4\uff0c\u6240\u4ee5 Compose \u7684 NavHost \u66f4\u52a0\u62bd\u8c61\uff0c\u4f60\u53ef\u4ee5\u5c07\u5176\u7406\u89e3\u70ba\u4e00\u500b\u5bb9\u5668\uff0c\u5167\u90e8\u900f\u904e NavController \u5728\u300c\u9801\u9762\u5207\u63db\u300d\u6642\u6e32\u67d3\u7576\u524d UI"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'val navController = rememberNavController()\nNavHost(\n        navController = navController,\n        startDestination = "first_screen"\n) {\n    composable("first_screen") {\n        // first screen\n    }\n    composable("second_screen") {\n        // second screen\n    }\n}\n')),(0,r.yg)("p",null,"NavHost \u63a5\u53d7\u5169\u500b\u53c3\u6578\uff0cnavController \u548c startDestination\uff0c\u9019\u662f Navigation \u7684\u6a19\u6e96\u7528\u6cd5\uff0c\u4e0d\u518d\u8d05\u8ff0\u3002\u5176 DSL \u5167\u90e8\u7684 composable \u7528\u4f86\u8072\u660e\u5404\u500b\u9801\u9762\uff0c\u914d\u7f6e\u4e86\u4e09\u500b\u9801\u9762\uff0c\u521d\u59cb\u9801\u9762\u662f first_screen  composable() \u7684\u53c3\u6578\u4f5c\u70ba Destination \u7684 id\uff0c\u7528\u65bc\u5f8c\u7e8c\u8df3\u8f49"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'MainCard(\n    title = "Cookbook",\n    desc = "This is my cookbook",\n    onClick = {\n        showToast("Cookbook", context);\n        navController.navigate("SecPage");\n    }\n)\n// \u82e5\u5ba3\u544a\u597d Route \u5f8c\u5373\u53ef\u4f7f\u7528 navController.navigate(route) \u4f86\u5c0e\u5411\u8a72 Route \u9801\u9762\n')),(0,r.yg)("p",null,"\u4ee5\u524d\u5982\u679c\u60f3\u8981\u4f7f\u7528 Compose \u5be6\u4f5c\u591a\u9801\u7684 APP\uff0c\u53ea\u80fd\u5728 Fragment \u6216 Activity \u5167\u90e8\u5beb Compose \u7a0b\u5f0f\u78bc\u3002\u73fe\u5728\u6709\u4e86 Navigation\uff0c\u53ef\u4ee5\u5fb9\u5e95\u64fa\u812b Fragment \u6216\u662f Activity \u4e86\uff0c\u9019\u8981\u6b78\u529f\u65bc Navigation \u9ad8\u5ea6\u62bd\u8c61\u7684\u8a2d\u8a08"))}m.isMDXComponent=!0}}]);