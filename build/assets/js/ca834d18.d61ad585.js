"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[4299],{5680:(e,i,n)=>{n.d(i,{xA:()=>y,yg:()=>v});var a=n(6540);function t(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){t(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function l(e,i){if(null==e)return{};var n,a,t=function(e,i){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var g=a.createContext({}),p=function(e){var i=a.useContext(g),n=i;return e&&(n="function"==typeof e?e(i):r(r({},i),e)),n},y=function(e){var i=p(e.components);return a.createElement(g.Provider,{value:i},e.children)},N="mdxType",d={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},c=a.forwardRef((function(e,i){var n=e.components,t=e.mdxType,o=e.originalType,g=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),N=p(n),c=t,v=N["".concat(g,".").concat(c)]||N[c]||d[c]||o;return n?a.createElement(v,r(r({ref:i},y),{},{components:n})):a.createElement(v,r({ref:i},y))}));function v(e,i){var n=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var g in i)hasOwnProperty.call(i,g)&&(l[g]=i[g]);l.originalType=e,l[N]="string"==typeof e?e:t,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3727:(e,i,n)=>{n.r(i),n.d(i,{contentTitle:()=>r,default:()=>N,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var a=n(8168),t=(n(6540),n(5680));const o={sidebar_label:"SwiftUI \u5207\u63db\u9801\u9762\u7684\u65b9\u6cd5",sidebar_position:6},r="SwiftUI \u5207\u63db\u9801\u9762\u7684\u65b9\u6cd5",l={unversionedId:"SwiftUI/swiftUINote6",id:"SwiftUI/swiftUINote6",isDocsHomePage:!1,title:"SwiftUI \u5207\u63db\u9801\u9762\u7684\u65b9\u6cd5",description:"---",source:"@site/docs/SwiftUI/swiftUINote6.md",sourceDirName:"SwiftUI",slug:"/SwiftUI/swiftUINote6",permalink:"/my-note/docs/SwiftUI/swiftUINote6",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"SwiftUI \u5207\u63db\u9801\u9762\u7684\u65b9\u6cd5",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"SwiftUI \u5e38\u7528\u7684 Modifier",permalink:"/my-note/docs/SwiftUI/swiftUINote5"},next:{title:"\u672c\u5730\u5132\u5b58",permalink:"/my-note/docs/SwiftUI/swiftUINote7"}},g=[{value:"1. NavigationView",id:"1-navigationview",children:[]},{value:"2. NavigationStack",id:"2-navigationstack",children:[]},{value:"3. NavigationLink",id:"3-navigationlink",children:[]},{value:"\u4e09\u8005\u7684\u95dc\u4fc2",id:"\u4e09\u8005\u7684\u95dc\u4fc2",children:[]},{value:"NavigationStack + NavigationLink \u5c0e\u5411\u4e0b\u4e00\u9801\u7684\u65b9\u5f0f",id:"navigationstack--navigationlink-\u5c0e\u5411\u4e0b\u4e00\u9801\u7684\u65b9\u5f0f",children:[]},{value:"NavigationView \u548c NavigationLink",id:"navigationview-\u548c-navigationlink",children:[]}],p={toc:g},y="wrapper";function N(e){let{components:i,...n}=e;return(0,t.yg)(y,(0,a.A)({},p,n,{components:i,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"swiftui-\u5207\u63db\u9801\u9762\u7684\u65b9\u6cd5"},"SwiftUI \u5207\u63db\u9801\u9762\u7684\u65b9\u6cd5"),(0,t.yg)("hr",null),(0,t.yg)("p",null,"SwiftUI \u63d0\u4f9b\u4e86\u591a\u7a2e\u65b9\u6cd5\u4f86\u9032\u884c\u9801\u9762\u5207\u63db\uff0c\u4e3b\u8981\u5305\u62ec ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationStack"),"\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationView")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationLink")),(0,t.yg)("h2",{id:"1-navigationview"},"1. NavigationView"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"NavigationView")," \u662f SwiftUI \u4e2d\u6700\u65e9\u7684\u5c0e\u822a\u5bb9\u5668\uff0c\u5141\u8a31\u5728 iOS\u3001iPadOS\u3001macOS \u548c tvOS \u61c9\u7528\u4e2d\u5efa\u7acb\u57fa\u65bc\u5806\u758a\u7684\u5c0e\u822a\u7d50\u69cb\u3002\u5b83\u7ba1\u7406\u4e00\u500b\u4e3b\u8996\u5716\uff0c\u4e26\u5141\u8a31\u5c07\u5176\u4ed6\u8996\u5716\u300c\u63a8\u5165\u300d\u5806\u758a\u4e2d\u4f86\u5be6\u73fe\u5c0e\u822a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'NavigationView {\n    VStack {\n        NavigationLink("Go to Detail View", destination: DetailView())\n    }\n}\n')),(0,t.yg)("p",null,"\u7279\u9ede\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"NavigationView")," \u80fd\u5920\u986f\u793a\u5c0e\u822a\u6b04\uff0c\u4e26\u4e14\u53ef\u4ee5\u5305\u62ec\u8fd4\u56de\u6309\u9215\u3001\u81ea\u5b9a\u7fa9\u7684\u6a19\u984c\u3001\u5de5\u5177\u6b04\u6309\u9215\u7b49"),(0,t.yg)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u65bc\u69cb\u5efa\u5c64\u7d1a\u5c0e\u822a\u7d50\u69cb"),(0,t.yg)("li",{parentName:"ul"},"\u5728 iOS 16 \u53ca\u66f4\u9ad8\u7248\u672c\u4e2d\uff0c",(0,t.yg)("inlineCode",{parentName:"li"},"NavigationView")," \u9010\u6f38\u88ab ",(0,t.yg)("inlineCode",{parentName:"li"},"NavigationStack")," \u6240\u53d6\u4ee3")),(0,t.yg)("h2",{id:"2-navigationstack"},"2. NavigationStack"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"NavigationStack")," \u662f SwiftUI \u4e2d\u7528\u4f86\u7ba1\u7406\u8996\u5716\u5c0e\u822a\u7684\u4e00\u500b\u5bb9\u5668\u3002\u5b83\u985e\u4f3c\u65bc UIKit \u4e2d\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"UINavigationController"),"\uff0c\u8ca0\u8cac\u7ba1\u7406\u4e00\u500b\u8996\u5716\u5806\u68e7\u3002\u6bcf\u7576\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationStack")," \u4e2d\u9032\u884c\u5c0e\u822a\u6642\uff0c\u5b83\u6703\u5c07\u7576\u524d\u8996\u5716\u63a8\u5165\u5806\u68e7\u4e2d\uff0c\u4e26\u986f\u793a\u65b0\u7684\u76ee\u6a19\u8996\u5716\u3002\u7576\u4f60\u8fd4\u56de\u4e0a\u4e00\u9801\u6642\uff0c\u5b83\u6703\u5f9e\u5806\u68e7\u4e2d\u5f48\u51fa\u8996\u5716\uff0c\u4e26\u56de\u5230\u4e4b\u524d\u7684\u72c0\u614b\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationStack")," \u662f SwiftUI 3\uff08iOS 16 \u548c macOS 13 \u4ee5\u4e0a\uff09\u4e2d\u5f15\u5165\u7684\uff0c\u65e8\u5728\u53d6\u4ee3 ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationView"),"\u3002\u5b83\u5728\u7d50\u69cb\u548c\u529f\u80fd\u4e0a\u8207 ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationView")," \u985e\u4f3c\uff0c\u4f46\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u529f\u80fd\u548c\u6539\u9032\u7684 API\uff0c\u7279\u5225\u662f\u5728\u5c0e\u822a\u72c0\u614b\u7ba1\u7406\u65b9\u9762"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'NavigationStack {\n    VStack {\n        NavigationLink("Go to Detail View", destination: DetailView())\n    }\n}\n\n')),(0,t.yg)("p",null,"\u7279\u9ede\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"NavigationStack")," \u652f\u6301\u5728\u591a\u500b\u8996\u5716\u4e4b\u9593\u5c0e\u822a\uff0c\u4e26\u4e14\u53ef\u4ee5\u5c0d\u5c0e\u822a\u72c0\u614b\u9032\u884c\u66f4\u7d30\u7dfb\u7684\u63a7\u5236"),(0,t.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u8ddf\u8e64\u5c0e\u822a\u5806\u758a\u7684\u72c0\u614b\uff0c\u9019\u5c0d\u65bc\u9700\u8981\u652f\u6301\u6df1\u5c64\u5c0e\u822a\u6216\u81ea\u5b9a\u7fa9\u5c0e\u822a\u884c\u70ba\u7684\u61c9\u7528\u975e\u5e38\u6709\u7528"),(0,t.yg)("li",{parentName:"ul"},"\u8207 ",(0,t.yg)("inlineCode",{parentName:"li"},"NavigationView")," \u4e0d\u540c\uff0c",(0,t.yg)("inlineCode",{parentName:"li"},"NavigationStack")," \u662f\u66f4\u73fe\u4ee3\u5316\u4e14\u529f\u80fd\u66f4\u8c50\u5bcc\u7684\u5c0e\u822a\u5bb9\u5668")),(0,t.yg)("h2",{id:"3-navigationlink"},"3. NavigationLink"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"NavigationLink")," \u662f\u7528\u4f86\u89f8\u767c\u9801\u9762\u5c0e\u822a\u7684\u6309\u9215\u6216\u5176\u4ed6\u4e92\u52d5\u5143\u7d20\u3002\u7576\u9ede\u64ca ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationLink")," \u6642\uff0c\u5b83\u6703\u5c07\u76ee\u6a19\u8996\u5716\u63a8\u5165 ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationStack"),"\uff0c\u4e26\u81ea\u52d5\u5b8c\u6210\u9801\u9762\u7684\u5207\u63db\u3002\u9019\u6a23\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5728\u8996\u5716\u4e4b\u9593\u9032\u884c\u5c0e\u822a\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationLink")," \u662f\u7528\u4f86\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationView")," \u6216 ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationStack")," \u4e2d\u89f8\u767c\u5c0e\u822a\u64cd\u4f5c\u7684\u7d44\u4ef6\u3002\u7576\u9ede\u64ca ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationLink")," \u6642\uff0c\u5b83\u6703\u63a8\u9001\u4e00\u500b\u65b0\u8996\u5716\u5230\u5c0e\u822a\u5806\u758a\u4e2d"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'NavigationLink(destination: HomePage()) {\n    Text("Go to Home")\n}\n')),(0,t.yg)("p",null,"\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0c\u7576\u7528\u6236\u9ede\u64ca\u300cGo to Home\u300d\u9019\u500b\u6587\u672c\u6642\uff0c\u61c9\u7528\u6703\u81ea\u52d5\u5c0e\u822a\u5230 ",(0,t.yg)("inlineCode",{parentName:"p"},"HomePage")),(0,t.yg)("p",null,"\u7279\u9ede\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"NavigationLink")," \u53ef\u4ee5\u8207\u6587\u5b57\u3001\u5716\u7247\u3001\u6309\u9215\u7b49\u7d44\u5408\u4f7f\u7528\uff0c\u4ee5\u63d0\u4f9b\u9ede\u64ca\u4e8b\u4ef6\u4f86\u9032\u884c\u5c0e\u822a"),(0,t.yg)("li",{parentName:"ul"},"\u5b83\u53ef\u4ee5\u5d4c\u5957\u5728\u5217\u8868\u3001\u5806\u758a\u3001\u6216\u5176\u4ed6\u5bb9\u5668\u8996\u5716\u4e2d"),(0,t.yg)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528 ",(0,t.yg)("inlineCode",{parentName:"li"},"isActive")," \u6216 ",(0,t.yg)("inlineCode",{parentName:"li"},"tag")," \u548c ",(0,t.yg)("inlineCode",{parentName:"li"},"selection")," \u7d81\u5b9a\u4f86\u63a7\u5236\u5c0e\u822a\u884c\u70ba\uff0c\u9019\u5728\u689d\u4ef6\u5c0e\u822a\u4e2d\u975e\u5e38\u6709\u7528")),(0,t.yg)("h2",{id:"\u4e09\u8005\u7684\u95dc\u4fc2"},"\u4e09\u8005\u7684\u95dc\u4fc2"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"NavigationStack")," \u548c ",(0,t.yg)("inlineCode",{parentName:"li"},"NavigationView"),"\uff1a\u5169\u8005\u90fd\u662f\u5c0e\u822a\u5bb9\u5668\uff0c\u7528\u65bc\u5efa\u7acb\u8996\u5716\u4e4b\u9593\u7684\u5c0e\u822a\u7d50\u69cb\u3002",(0,t.yg)("inlineCode",{parentName:"li"},"NavigationStack")," \u662f ",(0,t.yg)("inlineCode",{parentName:"li"},"NavigationView")," \u7684\u9032\u5316\u7248\u672c\uff0c\u63d0\u4f9b\u4e86\u66f4\u9748\u6d3b\u7684\u72c0\u614b\u7ba1\u7406\u529f\u80fd"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"NavigationLink"),"\uff1a\u4f5c\u70ba\u5c0e\u822a\u7684\u89f8\u767c\u5668\uff0c\u7528\u4f86\u5728 ",(0,t.yg)("inlineCode",{parentName:"li"},"NavigationStack")," \u6216 ",(0,t.yg)("inlineCode",{parentName:"li"},"NavigationView")," \u4e2d\u5be6\u73fe\u8996\u5716\u4e4b\u9593\u7684\u8df3\u8f49\u3002\u5b83\u9700\u8981\u5d4c\u5957\u5728\u9019\u5169\u500b\u5c0e\u822a\u5bb9\u5668\u4e2d\u624d\u80fd\u5de5\u4f5c")),(0,t.yg)("p",null,"\u7e3d\u7d50\u4f86\u8aaa\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationView")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationStack")," \u662f\u627f\u8f09\u548c\u7ba1\u7406\u5c0e\u822a\u7d50\u69cb\u7684\u6838\u5fc3\u7d44\u4ef6\uff0c\u800c ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationLink")," \u662f\u89f8\u767c\u5c0e\u822a\u64cd\u4f5c\u7684\u5177\u9ad4\u5be6\u73fe\u3002\u96a8\u8457 SwiftUI \u7684\u767c\u5c55\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationStack")," \u6b63\u9010\u6f38\u53d6\u4ee3 ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationView"),"\uff0c\u6210\u70ba\u63a8\u85a6\u4f7f\u7528\u7684\u5c0e\u822a\u5bb9\u5668"),(0,t.yg)("h2",{id:"navigationstack--navigationlink-\u5c0e\u5411\u4e0b\u4e00\u9801\u7684\u65b9\u5f0f"},"NavigationStack + NavigationLink \u5c0e\u5411\u4e0b\u4e00\u9801\u7684\u65b9\u5f0f"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'NavigationStack {\n    NavigationLink(destination: HomePage()) {\n        Text("Start")\n            .font(.largeTitle)\n            .padding()\n            .background(Color.blue)\n            .foregroundColor(.white)\n            .cornerRadius(10)\n    }\n}\n')),(0,t.yg)("p",null,'\u9019\u6bb5\u4ee3\u78bc\u6703\u986f\u793a\u4e00\u500b\u5e36\u6709 "Start" \u6587\u672c\u7684\u6309\u9215\uff0c\u7576\u9ede\u64ca\u9019\u500b\u6309\u9215\u6642\uff0c\u61c9\u7528\u6703\u5c0e\u822a\u5230 ',(0,t.yg)("inlineCode",{parentName:"p"},"HomePage"),"\u3002"),(0,t.yg)("p",null,"\u6240\u4ee5\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationLink")," \u78ba\u5be6\u53ef\u4ee5\u7576\u4f5c\u6309\u9215\u4f7f\u7528\uff0c\u53ea\u662f\u5b83\u4e3b\u8981\u7684\u76ee\u7684\u662f\u7528\u4f86\u8655\u7406\u9801\u9762\u4e4b\u9593\u7684\u5c0e\u822a\u3002\u7576\u4f60\u60f3\u8981\u5728\u6309\u9215\u9ede\u64ca\u6642\u5c0e\u822a\u5230\u65b0\u8996\u5716\uff0c\u53ef\u4ee5\u8003\u616e\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationLink")),(0,t.yg)("h2",{id:"navigationview-\u548c-navigationlink"},"NavigationView \u548c NavigationLink"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"NavigationView")," \u662f\u4e00\u500b\u5bb9\u5668\u8996\u5716\uff0c\u7528\u4f86\u5305\u542b\u652f\u6301\u5c0e\u822a\u7684\u5b50\u8996\u5716\n",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationLink")," \u5247\u662f\u7528\u4f86\u89f8\u767c\u9801\u9762\u5207\u63db\u7684\u93c8\u63a5"),(0,t.yg)("p",null,"\u5728 SwiftUI \u4e2d\uff0c\u8981\u5c0e\u5411\u4e0b\u4e00\u9801\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationLink"),"\u3002\u9019\u500b ",(0,t.yg)("inlineCode",{parentName:"p"},"NavigationLink")," \u53ef\u4ee5\u76f4\u63a5\u4f5c\u70ba\u4e00\u500b\u6309\u9215\u6216\u4efb\u4f55\u4e92\u52d5\u5143\u7d20\u7684\u4e00\u90e8\u5206\uff0c\u7576\u7528\u6236\u9ede\u64ca\u5b83\u6642\uff0c\u81ea\u52d5\u5b8c\u6210\u9801\u9762\u7684\u5c0e\u822a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'struct ContentView: View {\n    var body: some View {\n        NavigationView {\n            VStack {\n                NavigationLink(destination: DetailView()) {\n                    Text("Go to Detail View")\n                }\n                .padding()\n            }\n            .navigationTitle("Home")\n        }\n    }\n}\n\nstruct DetailView: View {\n    var body: some View {\n        Text("This is the detail view")\n            .navigationTitle("Detail")\n    }\n}\n')),(0,t.yg)("p",null,'\u5728\u9019\u500b\u4f8b\u5b50\u4e2d\uff0c\u7576\u7528\u6236\u9ede\u64ca "Go to Detail View" \u6642\uff0c\u61c9\u7528\u6703\u5c0e\u822a\u5230 ',(0,t.yg)("inlineCode",{parentName:"p"},"DetailView")))}N.isMDXComponent=!0}}]);