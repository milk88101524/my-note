"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[665],{5680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>m});var t=r(6540);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),y=u(r),d=l,m=y["".concat(c,".").concat(d)]||y[d]||g[d]||o;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[y]="string"==typeof e?e:l,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},578:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=r(8168),l=(r(6540),r(5680));const o={sidebar_label:"function / method",sidebar_position:7},i="function / method",a={unversionedId:"JavaScript/JSNote12",id:"JavaScript/JSNote12",isDocsHomePage:!1,title:"function / method",description:"---",source:"@site/docs/JavaScript/JSNote12.md",sourceDirName:"JavaScript",slug:"/JavaScript/JSNote12",permalink:"/my-note/docs/JavaScript/JSNote12",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"function / method",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u689d\u4ef6",permalink:"/my-note/docs/JavaScript/JSNote11"},next:{title:"export",permalink:"/my-note/docs/JavaScript/JSNote13"}},c=[{value:"1. \u57fa\u672c\u51fd\u6578\u5b9a\u7fa9",id:"1-\u57fa\u672c\u51fd\u6578\u5b9a\u7fa9",children:[]},{value:"2. \u51fd\u6578\u7684\u8fd4\u56de\u503c",id:"2-\u51fd\u6578\u7684\u8fd4\u56de\u503c",children:[]},{value:"3. \u51fd\u6578\u53c3\u6578",id:"3-\u51fd\u6578\u53c3\u6578",children:[]},{value:"4. \u51fd\u6578\u8868\u9054\u5f0f",id:"4-\u51fd\u6578\u8868\u9054\u5f0f",children:[]},{value:"5. \u533f\u540d\u51fd\u6578",id:"5-\u533f\u540d\u51fd\u6578",children:[]},{value:"6. \u7bad\u982d\u51fd\u6578 (Arrow Function)",id:"6-\u7bad\u982d\u51fd\u6578-arrow-function",children:[]},{value:"7. \u51fd\u6578\u4f5c\u70ba\u503c",id:"7-\u51fd\u6578\u4f5c\u70ba\u503c",children:[]},{value:"8. \u9ad8\u968e\u51fd\u6578 (Higher-Order Function)",id:"8-\u9ad8\u968e\u51fd\u6578-higher-order-function",children:[]},{value:"9. IIFE (Immediately Invoked Function Expression)",id:"9-iife-immediately-invoked-function-expression",children:[]},{value:"10. \u51fd\u6578\u7684\u4f5c\u7528\u57df (Scope)",id:"10-\u51fd\u6578\u7684\u4f5c\u7528\u57df-scope",children:[]},{value:"11. \u9810\u8a2d\u53c3\u6578",id:"11-\u9810\u8a2d\u53c3\u6578",children:[]}],u={toc:c},p="wrapper";function y(e){let{components:n,...r}=e;return(0,l.yg)(p,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"function--method"},"function / method"),(0,l.yg)("hr",null),(0,l.yg)("p",null,"JavaScript \u4e2d\u7684 ",(0,l.yg)("inlineCode",{parentName:"p"},"function"),"\uff08\u51fd\u6578\uff09\u662f\u7a0b\u5f0f\u4e2d\u7684\u4e00\u7b49\u516c\u6c11\uff0c\u9019\u610f\u5473\u8457\u51fd\u6578\u53ef\u4ee5\u50cf\u8b8a\u6578\u4e00\u6a23\u88ab\u5b9a\u7fa9\u3001\u8ce6\u503c\u3001\u4f5c\u70ba\u53c3\u6578\u50b3\u905e\uff0c\u4ee5\u53ca\u4f5c\u70ba\u56de\u50b3\u503c\u3002\u51fd\u6578\u662f\u4e00\u6bb5\u53ef\u4ee5\u91cd\u8907\u4f7f\u7528\u7684\u4ee3\u78bc\u584a\uff0c\u901a\u5e38\u7528\u4f86\u57f7\u884c\u7279\u5b9a\u7684\u4efb\u52d9"),(0,l.yg)("h3",{id:"1-\u57fa\u672c\u51fd\u6578\u5b9a\u7fa9"},"1. \u57fa\u672c\u51fd\u6578\u5b9a\u7fa9"),(0,l.yg)("p",null,"\u6700\u5e38\u898b\u7684\u5b9a\u7fa9\u51fd\u6578\u65b9\u5f0f\u662f\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"function")," \u95dc\u9375\u5b57\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'function greet(name) {\n  console.log("Hello, " + name + "!");\n}\ngreet("Alice");  // \u8f38\u51fa: Hello, Alice!\n')),(0,l.yg)("p",null,"\u8aaa\u660e\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"function")," \u662f\u7528\u4f86\u5b9a\u7fa9\u51fd\u6578\u7684\u95dc\u9375\u5b57"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"greet")," \u662f\u51fd\u6578\u7684\u540d\u7a31"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"name")," \u662f\u53c3\u6578\uff0c\u9019\u662f\u51fd\u6578\u5728\u57f7\u884c\u6642\u50b3\u905e\u7684\u503c"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"console.log()")," \u662f\u51fd\u6578\u9ad4\u5167\u7684\u8a9e\u53e5\uff0c\u5b83\u6703\u5728\u51fd\u6578\u57f7\u884c\u6642\u904b\u884c")),(0,l.yg)("h3",{id:"2-\u51fd\u6578\u7684\u8fd4\u56de\u503c"},"2. \u51fd\u6578\u7684\u8fd4\u56de\u503c"),(0,l.yg)("p",null,"\u51fd\u6578\u53ef\u4ee5\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"return")," \u95dc\u9375\u5b57\u4f86\u8fd4\u56de\u4e00\u500b\u503c\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"function add(a, b) {\n  return a + b;\n}\nlet sum = add(3, 4);  // sum \u662f 7\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"return")," \u7528\u4f86\u6307\u5b9a\u51fd\u6578\u7684\u8fd4\u56de\u503c\uff0c\u7576\u51fd\u6578\u57f7\u884c\u5230 ",(0,l.yg)("inlineCode",{parentName:"li"},"return")," \u8a9e\u53e5\u6642\uff0c\u5b83\u6703\u7d50\u675f\u4e26\u5c07\u503c\u8fd4\u56de")),(0,l.yg)("h3",{id:"3-\u51fd\u6578\u53c3\u6578"},"3. \u51fd\u6578\u53c3\u6578"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"JavaScript \u7684\u51fd\u6578\u53ef\u4ee5\u63a5\u6536\u591a\u500b\u53c3\u6578\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u63a5\u6536\u53c3\u6578"),(0,l.yg)("li",{parentName:"ul"},"\u82e5\u50b3\u5165\u7684\u53c3\u6578\u6bd4\u51fd\u6578\u5b9a\u7fa9\u7684\u591a\uff0c\u5247\u591a\u51fa\u4f86\u7684\u53c3\u6578\u6703\u88ab\u5ffd\u7565\uff1b\u82e5\u50b3\u5165\u7684\u53c3\u6578\u4e0d\u8db3\uff0c\u672a\u6307\u5b9a\u7684\u53c3\u6578\u6703\u662f ",(0,l.yg)("inlineCode",{parentName:"li"},"undefined"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"function multiply(a, b) {\n  return a * b;\n}\nconsole.log(multiply(2, 3));  // 6\nconsole.log(multiply(2));     // NaN (\u56e0\u70ba b \u662f undefined)\n")),(0,l.yg)("h3",{id:"4-\u51fd\u6578\u8868\u9054\u5f0f"},"4. \u51fd\u6578\u8868\u9054\u5f0f"),(0,l.yg)("p",null,"\u9664\u4e86\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"function")," \u95dc\u9375\u5b57\u5b9a\u7fa9\u51fd\u6578\u5916\uff0c\u51fd\u6578\u4e5f\u53ef\u4ee5\u4f5c\u70ba\u8868\u9054\u5f0f\u8ce6\u503c\u7d66\u8b8a\u6578\uff0c\u9019\u7a31\u70ba\u51fd\u6578\u8868\u9054\u5f0f\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'const greet = function(name) {\n  console.log("Hello, " + name);\n};\ngreet("Bob");  // Hello, Bob\n')),(0,l.yg)("h3",{id:"5-\u533f\u540d\u51fd\u6578"},"5. \u533f\u540d\u51fd\u6578"),(0,l.yg)("p",null,"\u533f\u540d\u51fd\u6578\u662f\u6c92\u6709\u540d\u7a31\u7684\u51fd\u6578\uff0c\u53ef\u4ee5\u4f5c\u70ba\u8868\u9054\u5f0f\u8ce6\u503c\u6216\u76f4\u63a5\u4f7f\u7528\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'const sayHi = function() {\n  console.log("Hi");\n};\nsayHi();  // Hi\n')),(0,l.yg)("h3",{id:"6-\u7bad\u982d\u51fd\u6578-arrow-function"},"6. \u7bad\u982d\u51fd\u6578 (Arrow Function)"),(0,l.yg)("p",null,"\u7bad\u982d\u51fd\u6578\u662f ES6 \u5f15\u5165\u7684\u4e00\u7a2e\u66f4\u7c21\u6f54\u7684\u51fd\u6578\u5b9a\u7fa9\u8a9e\u6cd5\u3002\u8a9e\u6cd5\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'const greet = (name) => {\n  console.log("Hello, " + name);\n};\ngreet("Charlie");  // Hello, Charlie\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u7bad\u982d\u51fd\u6578\u53ea\u6709\u4e00\u500b\u53c3\u6578\uff0c\u62ec\u865f\u53ef\u4ee5\u7701\u7565\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},'const greet = name => console.log("Hello, " + name);\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u51fd\u6578\u9ad4\u53ea\u6709\u4e00\u884c\uff0c\u4e26\u4e14\u8fd4\u56de\u503c\uff0c\u53ef\u4ee5\u7701\u7565\u5927\u62ec\u865f\u548c ",(0,l.yg)("inlineCode",{parentName:"p"},"return"),"\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre"},"const add = (a, b) => a + b;\nconsole.log(add(2, 3));  // 5\n")))),(0,l.yg)("h3",{id:"7-\u51fd\u6578\u4f5c\u70ba\u503c"},"7. \u51fd\u6578\u4f5c\u70ba\u503c"),(0,l.yg)("p",null,"\u5728 JavaScript \u4e2d\uff0c\u51fd\u6578\u662f\u4e00\u7b49\u516c\u6c11\uff0c\u6240\u4ee5\u51fd\u6578\u53ef\u4ee5\u88ab\u8ce6\u503c\u7d66\u8b8a\u6578\u3001\u4f5c\u70ba\u5176\u4ed6\u51fd\u6578\u7684\u53c3\u6578\uff0c\u6216\u8005\u4f5c\u70ba\u8fd4\u56de\u503c"),(0,l.yg)("h4",{id:"71-\u51fd\u6578\u4f5c\u70ba\u53c3\u6578\u50b3\u905e"},"7.1 \u51fd\u6578\u4f5c\u70ba\u53c3\u6578\u50b3\u905e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'function executeCallback(callback) {\n  callback();\n}\n\nfunction sayHello() {\n  console.log("Hello!");\n}\n\nexecuteCallback(sayHello);  // Hello!\n')),(0,l.yg)("h4",{id:"72-\u51fd\u6578\u4f5c\u70ba\u8fd4\u56de\u503c"},"7.2 \u51fd\u6578\u4f5c\u70ba\u8fd4\u56de\u503c"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"function createMultiplier(factor) {\n  return function(number) {\n    return number * factor;\n  };\n}\n\nconst multiplyByTwo = createMultiplier(2); \n// \u9019\u88e1\u7684 multiplyByTwo \u662f\u4e00\u500b\u51fd\u6578\uff0c\u5b83\u8a18\u4f4f\u4e86 factor \u662f 2\n\nconsole.log(multiplyByTwo(5));\n// \u9019\u500b\u51fd\u6578\u6703\u5c07 number * 2\uff0c\u8f38\u51fa 10\n")),(0,l.yg)("h3",{id:"8-\u9ad8\u968e\u51fd\u6578-higher-order-function"},"8. \u9ad8\u968e\u51fd\u6578 (Higher-Order Function)"),(0,l.yg)("p",null,"\u9ad8\u968e\u51fd\u6578\u662f\u6307\u63a5\u53d7\u51fd\u6578\u4f5c\u70ba\u53c3\u6578\u6216\u8fd4\u56de\u51fd\u6578\u7684\u51fd\u6578\u3002\u9019\u5728 JavaScript \u4e2d\u975e\u5e38\u5e38\u898b\uff0c\u5c24\u5176\u662f\u5728\u9663\u5217\u64cd\u4f5c\u4e2d\uff0c\u5982 ",(0,l.yg)("inlineCode",{parentName:"p"},"map()"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"filter()"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"reduce()")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled);  // [2, 4, 6, 8, 10]\n")),(0,l.yg)("h3",{id:"9-iife-immediately-invoked-function-expression"},"9. IIFE (Immediately Invoked Function Expression)"),(0,l.yg)("p",null,"IIFE \u662f\u6307\u7acb\u5373\u57f7\u884c\u7684\u51fd\u6578\u8868\u9054\u5f0f\uff0c\u8a9e\u6cd5\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'(function() {\n  console.log("This function runs immediately!");\n})();\n')),(0,l.yg)("p",null,"\u9019\u7a2e\u51fd\u6578\u5728\u5b9a\u7fa9\u5f8c\u6703\u7acb\u5373\u88ab\u57f7\u884c\uff0c\u5e38\u7528\u65bc\u5efa\u7acb\u55ae\u7368\u7684\u4f5c\u7528\u57df\uff0c\u907f\u514d\u8b8a\u6578\u6c61\u67d3\u5168\u5c40\u7a7a\u9593"),(0,l.yg)("h3",{id:"10-\u51fd\u6578\u7684\u4f5c\u7528\u57df-scope"},"10. \u51fd\u6578\u7684\u4f5c\u7528\u57df (Scope)"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u5168\u5c40\u4f5c\u7528\u57df (Global Scope)\uff1a\u5728\u6240\u6709\u5730\u65b9\u90fd\u53ef\u4ee5\u5b58\u53d6\u7684\u8b8a\u6578"),(0,l.yg)("li",{parentName:"ul"},"\u5c40\u90e8\u4f5c\u7528\u57df (Local Scope)\uff1a\u51fd\u6578\u5167\u90e8\u7684\u8b8a\u6578\uff0c\u50c5\u5728\u51fd\u6578\u5167\u90e8\u53ef\u5b58\u53d6"),(0,l.yg)("li",{parentName:"ul"},"\u9589\u5305 (Closure)\uff1a\u7576\u5167\u90e8\u51fd\u6578\u300c\u8a18\u4f4f\u300d\u4e86\u5916\u90e8\u51fd\u6578\u7684\u8b8a\u6578\u6642\uff0c\u9589\u5305\u6703\u51fa\u73fe")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'function outer() {\n  let outerVar = "I\'m from outer";\n  return function inner() {\n    console.log(outerVar);\n  };\n}\nconst innerFunc = outer();\ninnerFunc();  // "I\'m from outer"\n')),(0,l.yg)("h3",{id:"11-\u9810\u8a2d\u53c3\u6578"},"11. \u9810\u8a2d\u53c3\u6578"),(0,l.yg)("p",null,"\u5728 ES6 \u4e2d\uff0c\u53ef\u4ee5\u70ba\u51fd\u6578\u7684\u53c3\u6578\u6307\u5b9a\u9810\u8a2d\u503c\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'function greet(name = "Guest") {\n  console.log("Hello, " + name);\n}\ngreet();       // Hello, Guest\ngreet("Alice");  // Hello, Alice\n')))}y.isMDXComponent=!0}}]);