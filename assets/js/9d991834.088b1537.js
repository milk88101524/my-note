"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[7992],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=m(n),d=r,y=s["".concat(p,".").concat(d)]||s[d]||u[d]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7047:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(8168),r=(n(6540),n(5680));const a={sidebar_label:"\u72c0\u614b\u7ba1\u7406",sidebar_position:6},i="\u72c0\u614b\u7ba1\u7406",l={unversionedId:"Kotlin & Jetpack Compose/JetpackComposeNote5",id:"Kotlin & Jetpack Compose/JetpackComposeNote5",isDocsHomePage:!1,title:"\u72c0\u614b\u7ba1\u7406",description:"---",source:"@site/docs/Kotlin & Jetpack Compose/JetpackComposeNote5.md",sourceDirName:"Kotlin & Jetpack Compose",slug:"/Kotlin & Jetpack Compose/JetpackComposeNote5",permalink:"/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote5",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"\u72c0\u614b\u7ba1\u7406",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"() -> Unit \u8207 @Composable () -> Unit",permalink:"/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote4"},next:{title:"Navigation",permalink:"/my-note/docs/Kotlin & Jetpack Compose/JetpackComposeNote6"}},p=[{value:"remember",id:"remember",children:[]},{value:"mutableStateOf",id:"mutablestateof",children:[]},{value:"Java &amp; Kotlin \u7684\u8a08\u6578\u5668",id:"java--kotlin-\u7684\u8a08\u6578\u5668",children:[]},{value:"Flutter \u7684\u8a08\u6578\u5668",id:"flutter-\u7684\u8a08\u6578\u5668",children:[]},{value:"Jetpack Compose \u7684\u8a08\u6578\u5668",id:"jetpack-compose-\u7684\u8a08\u6578\u5668",children:[]}],m={toc:p},c="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,o.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u72c0\u614b\u7ba1\u7406"},"\u72c0\u614b\u7ba1\u7406"),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"remember"},"remember"),(0,r.yg)("p",null,"remember \u662f\u4e00\u500b Compose \u51fd\u5f0f\uff0c\u7528\u65bc\u4fdd\u7559 UI \u5143\u4ef6\u7684\u72c0\u614b\u3002\u7576\u4f60\u4f7f\u7528 remember \u4f86\u4fdd\u5b58\u72c0\u614b\u6642\uff0cComposable \u51fd\u5f0f\u5167\u7684\u72c0\u614b\u5c07\u5728\u5143\u4ef6\u91cd\u65b0\u69cb\u5efa\u6642\u4fdd\u6301\u4e0d\u8b8a\uff0c\u76f4\u5230 Composable \u51fd\u5f0f\u7684\u7d42\u6b62\u3002"),(0,r.yg)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u5728 Composable \u51fd\u5f0f\u4e2d\u4f7f\u7528 remember \u4f86\u4fdd\u5b58\u8a08\u6578\u5668\u7684\u503c\uff0c\u5247\u8a72\u503c\u5c07\u5728\u6bcf\u6b21\u91cd\u65b0\u69cb\u5efa\u6642\u4fdd\u6301\u4e0d\u8b8a\uff0c\u5f9e\u800c\u5141\u8a31\u4f60\u5728\u4e0d\u540c\u7684 Composable \u51fd\u5f0f\u4e4b\u9593\u5171\u4eab\u72c0\u614b\u3002"),(0,r.yg)("h2",{id:"mutablestateof"},"mutableStateOf"),(0,r.yg)("p",null,"mutableStateOf \u662f\u4e00\u500b Compose \u51fd\u5f0f\uff0c\u7528\u65bc\u5275\u5efa\u53ef\u8b8a\u7684\u72c0\u614b\u5bb9\u5668\u3002\u5b83\u8fd4\u56de\u4e00\u500b\u5305\u542b\u72c0\u614b\u503c\u7684 MutableState \u5c0d\u8c61\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u9019\u500b\u5c0d\u8c61\u4f86\u8a2d\u7f6e\u3001\u66f4\u6539\u548c\u6aa2\u7d22\u72c0\u614b\u7684\u503c\u3002"),(0,r.yg)("p",null,"\u7576\u4f60\u60f3\u8981\u5728 Composable \u51fd\u5f0f\u4e2d\u5275\u5efa\u4e00\u500b\u53ef\u8b8a\u7684\u72c0\u614b\u6642\uff0c\u901a\u5e38\u6703\u4f7f\u7528 mutableStateOf\u3002\u9019\u4f7f\u5f97\u4f60\u53ef\u4ee5\u5728 Composable \u51fd\u5f0f\u4e2d\u66f4\u6539\u72c0\u614b\u503c\uff0c\u4e26\u4e14\u9019\u4e9b\u66f4\u6539\u6703\u89f8\u767c\u5143\u4ef6\u7684\u91cd\u65b0\u69cb\u5efa\u3002"),(0,r.yg)("p",null,"\u5728\u4e00\u958b\u59cb\u7684\u751f\u547d\u9031\u671f\u90a3\u90e8\u5206\u6709\u63d0\u5230 State Management "),(0,r.yg)("p",null,"\u5728 Compose \u4e2d\u70ba\u4ec0\u9ebc\u5efa\u8b70\u4f7f\u7528 remember \u4f86\u4fdd\u5b58\u72c0\u614b\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u4f7f\u7528\u666e\u901a\u7684\u8b8a\u6578\u3002\u9019\u6d89\u53ca\u5230 Compose \u4e2d\u7684\u7279\u5b9a\u884c\u70ba\u548c\u6982\u5ff5\u3002"),(0,r.yg)("p",null,"\u5728 Compose \u4e2d\uff0cremember \u4e0d\u50c5\u50c5\u662f\u7528\u4f86\u4fdd\u5b58\u72c0\u614b\u7684\u8b8a\u6578\uff0c\u5b83\u9084\u5177\u6709\u4ee5\u4e0b\u7279\u9ede\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u751f\u547d\u9031\u671f\u7ba1\u7406\uff1a \u4f7f\u7528 remember \u5ba3\u544a\u7684\u8b8a\u6578\u6703\u81ea\u52d5\u53d7\u5230 Compose \u7684\u751f\u547d\u9031\u671f\u7ba1\u7406\uff0c\u9019\u610f\u5473\u8457\u5b83\u5011\u7684\u751f\u547d\u9031\u671f\u8207 UI \u7d44\u4ef6\u7684\u751f\u547d\u9031\u671f\u76f8\u95dc\u806f\u3002\u7576 UI \u91cd\u5efa\u6642\uff0cremember \u8b8a\u6578\u7684\u503c\u5c07\u88ab\u4fdd\u7559\uff0c\u800c\u666e\u901a\u7684\u8b8a\u6578\u5728 UI \u91cd\u5efa\u6642\u6703\u4e1f\u5931\u5176\u503c\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Compose \u6846\u67b6\u7684\u7279\u5b9a\u884c\u70ba\uff1a Compose \u6846\u67b6\u7684\u8a2d\u8a08\u65b9\u5f0f\u5c0e\u81f4\u4e86\u5b83\u5c0d UI \u7d44\u4ef6\u7684\u91cd\u65b0\u69cb\u5efa\u983b\u7387\u8f03\u9ad8\u3002\u9019\u610f\u5473\u8457\u5728 Compose \u4e2d\uff0c\u60a8\u7d93\u5e38\u6703\u9762\u5c0d UI \u7684\u91cd\u65b0\u69cb\u5efa\uff0c\u800c\u4f7f\u7528 remember \u53ef\u4ee5\u78ba\u4fdd\u60a8\u7684\u72c0\u614b\u5728\u9019\u4e9b\u91cd\u65b0\u69cb\u5efa\u4e2d\u5f97\u5230\u4fdd\u7559\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u72c0\u614b\u7ba1\u7406\u7684\u4e00\u81f4\u6027\uff1a \u5728 Compose \u4e2d\uff0c\u4f7f\u7528 remember \u4f86\u7ba1\u7406\u72c0\u614b\u662f\u4e00\u7a2e\u4e00\u81f4\u7684\u65b9\u5f0f\u3002\u9019\u6a23\u505a\u6709\u52a9\u65bc\u4ee3\u78bc\u7684\u53ef\u8b80\u6027\u548c\u4e00\u81f4\u6027\uff0c\u8b93\u5176\u4ed6\u958b\u767c\u4eba\u54e1\u66f4\u5bb9\u6613\u7406\u89e3\u548c\u7dad\u8b77\u4ee3\u78bc\u3002"))),(0,r.yg)("p",null,"\u5728\u50b3\u7d71\u7684 Android \u61c9\u7528\u7a0b\u5f0f\u958b\u767c\u4e2d\uff0c\u5982\u679c\u4f7f\u7528 Java \u6216 Kotlin \u4f86\u958b\u767c\uff0c\u78ba\u5be6\u53ef\u4ee5\u5728\u6309\u4e0b\u6309\u9215\u6642\u5373\u6642\u66f4\u65b0 UI\u3002\u9019\u662f\u56e0\u70ba\u5728\u9019\u4e9b\u6846\u67b6\u4e2d\uff0cUI \u72c0\u614b\u548c\u64cd\u4f5c\u662f\u76f4\u63a5\u8026\u5408\u5728\u4e00\u8d77\u7684\uff0c\u53ef\u4ee5\u5728\u4e8b\u4ef6\u8655\u7406\u7a0b\u5e8f\u4e2d\u7acb\u5373\u66f4\u65b0 UI \u5143\u7d20\uff0c\u4e26\u4e14\u9019\u4e9b\u66f4\u6539\u5c07\u7acb\u5373\u53cd\u6620\u5728\u7528\u6236\u754c\u9762\u4e0a\u3002"),(0,r.yg)("p",null,"\u800cCompose \u548c Flutter \u90fd\u662f\u5c07 UI \u548c\u72c0\u614b\u5206\u96e2\u7684\u6846\u67b6"),(0,r.yg)("p",null,"\u5728 Compose \u4e2d UI \u548c\u72c0\u614b\u662f\u5206\u96e2\u7684\uff0c\u9019\u662f\u4e00\u7a2e\u66f4\u52a0\u53cd\u61c9\u5f0f\u7684\u8a2d\u8a08\u65b9\u5f0f\u3002\u7576 UI \u7684\u72c0\u614b\u767c\u751f\u8b8a\u5316\u6642\uff0cCompose \u6703\u81ea\u52d5\u91cd\u69cb UI\uff0c\u800c\u4e0d\u9700\u8981\u624b\u52d5\u66f4\u65b0\u3002\u9019\u7a2e\u65b9\u5f0f\u4f7f\u5f97\u5728 UI \u767c\u751f\u8b8a\u5316\u6642\uff0cCompose \u53ef\u4ee5\u6839\u64da\u65b0\u7684\u72c0\u614b\u91cd\u65b0\u69cb\u5efa UI\uff0c\u4e26\u4e14\u80fd\u5920\u66f4\u597d\u5730\u8655\u7406\u8907\u96dc\u7684 UI \u66f4\u65b0\u908f\u8f2f"),(0,r.yg)("p",null,"\u9019\u7a2e\u5206\u96e2 UI \u548c\u72c0\u614b\u7684\u8a2d\u8a08\u65b9\u5f0f\u4f7f\u5f97 Compose \u5177\u6709\u66f4\u9ad8\u7684\u91cd\u69cb\u983b\u7387\uff0c\u56e0\u70ba\u7576 UI \u72c0\u614b\u767c\u751f\u8b8a\u5316\u6642\uff0cCompose \u53ef\u4ee5\u81ea\u52d5\u91cd\u69cb\u76f8\u95dc\u7684 UI \u7d44\u4ef6\uff0c\u800c\u4e0d\u9700\u8981\u60a8\u624b\u52d5\u4ecb\u5165\u3002\u9019\u4f7f\u5f97 Compose \u66f4\u52a0\u9748\u6d3b\u548c\u9ad8\u6548\uff0c\u4e26\u4e14\u66f4\u5bb9\u6613\u5be6\u73fe\u8907\u96dc\u7684 UI \u908f\u8f2f"),(0,r.yg)("p",null,"\u5728 Compose \u4e2d\uff0cUI \u662f\u7531\u4e0d\u540c\u7684 Composable \u51fd\u6578\u69cb\u5efa\u7684\uff0c\u9019\u4e9b\u51fd\u6578\u662f\u6839\u64da UI \u7684\u72c0\u614b\u800c\u4e0d\u662f\u76f4\u63a5\u66f4\u65b0\u7684\u3002\u53ef\u4ee5\u901a\u904e Compose \u4e2d\u63d0\u4f9b\u7684\u72c0\u614b\u7ba1\u7406\u6a5f\u5236\uff08\u5982 remember \u548c mutableStateOf\uff09\u4f86\u7ba1\u7406 UI \u7684\u72c0\u614b\uff0c\u9019\u4e9b\u6a5f\u5236\u6703\u81ea\u52d5\u89f8\u767c UI \u7684\u91cd\u69cb\u3002\u7576\u60a8\u4f7f\u7528\u9019\u4e9b\u6a5f\u5236\u4f86\u5b58\u5132\u6578\u64da\u6642\uff0cComposable \u51fd\u6578\u6703\u5728\u6578\u64da\u767c\u751f\u8b8a\u5316\u6642\u81ea\u52d5\u91cd\u69cb UI\uff0c\u800c\u7121\u9700\u624b\u52d5\u8abf\u7528\u4efb\u4f55\u66f4\u65b0\u65b9\u6cd5"),(0,r.yg)("p",null,"\u5728 Flutter \u4e2d\uff0cUI \u662f\u7531 Widget \u69cb\u5efa\u7684\uff0c\u800c\u72c0\u614b\u5247\u662f\u7531 StatefulWidget \u6216 Provider \u7b49\u72c0\u614b\u7ba1\u7406\u5eab\u4f86\u7ba1\u7406\u7684\u3002Flutter \u7684 Widget \u69cb\u5efa\u65b9\u5f0f\u548c Compose \u7684 Composable \u51fd\u6578\u985e\u4f3c\uff0c\u5b83\u5011\u90fd\u662f\u6839\u64da\u72c0\u614b\u7684\u8b8a\u5316\u4f86\u91cd\u69cb UI\u3002Flutter \u4e5f\u63d0\u4f9b\u4e86\u4e00\u500b\u5f37\u5927\u7684\u72c0\u614b\u7ba1\u7406\u6a5f\u5236\uff0c\u53ef\u4ee5\u5e6b\u52a9\u7ba1\u7406\u61c9\u7528\u7a0b\u5e8f\u7684\u72c0\u614b\u4e26\u6839\u64da\u9700\u8981\u66f4\u65b0 UI\uff0c\u800c\u5728 Flutter \u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u5ba3\u544a\u8b8a\u91cf\uff08\u4f8b\u5982 String \u6216 int\uff09\u4f86\u5b58\u5132\u6578\u64da\uff0c\u4f46\u7576\u6578\u64da\u767c\u751f\u8b8a\u5316\u6642\uff0c\u9700\u8981\u8abf\u7528 setState \u65b9\u6cd5\u4f86\u901a\u77e5 Flutter \u6846\u67b6\u9700\u8981\u91cd\u5efa UI\u3002\u9019\u610f\u5473\u8457\u9700\u8981\u624b\u52d5\u7ba1\u7406 UI \u7684\u66f4\u65b0\u3002"),(0,r.yg)("p",null,"\u96d6\u7136\u5728 Java \u6216 Kotlin \u4e2d\uff0c\u53ef\u4ee5\u5728\u6309\u4e0b\u6309\u9215\u6642\u5373\u6642\u66f4\u65b0 UI\uff0c\u4f46\u5728 Compose \u4e2d\uff0cUI \u7684\u66f4\u65b0\u66f4\u591a\u5730\u662f\u57fa\u65bc\u72c0\u614b\u7684\u8b8a\u5316\uff0c\u4e26\u4e14\u662f\u81ea\u52d5\u9032\u884c\u7684\uff0c\u9019\u4f7f\u5f97 UI \u548c\u72c0\u614b\u4e4b\u9593\u7684\u8026\u5408\u66f4\u4f4e\uff0c\u4e26\u4e14\u66f4\u5bb9\u6613\u8655\u7406\u8907\u96dc\u7684 UI \u908f\u8f2f"),(0,r.yg)("h2",{id:"java--kotlin-\u7684\u8a08\u6578\u5668"},"Java & Kotlin \u7684\u8a08\u6578\u5668"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"// JAVA\npublic class MainActivity extends AppCompatActivity {\n    private int count = 0;\n    private TextView textView;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n        \n        textView = findViewById(R.id.textView);\n        Button button = findViewById(R.id.button);\n        button.setOnClickListener(new View.OnClickListener() {\n            @Override\n            public void onClick(View v) {\n                count++;\n                textView.setText(String.valueOf(count)); // \u7531\u65bc UI \u8207\u72c0\u614b\u662f\u8026\u5408\u7684\uff0c\u6240\u4ee5\u80fd\u53ca\u6642\u66f4\u65b0UI\n            }\n        });\n    }\n}\n\n// KOTLIN\nclass MainActivity : AppCompatActivity() {\n    private var count = 0\n    private lateinit var textView: TextView\n    \n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContentView(R.layout.activity_main)\n        \n        textView = findViewById(R.id.textView)\n        val button = findViewById<Button>(R.id.button)\n        button.setOnClickListener {\n            count++\n            textView.text = count.toString() // \u7531\u65bc UI \u8207\u72c0\u614b\u662f\u8026\u5408\u7684\uff0c\u6240\u4ee5\u80fd\u53ca\u6642\u66f4\u65b0UI\n        }\n    }\n}\n\n")),(0,r.yg)("h2",{id:"flutter-\u7684\u8a08\u6578\u5668"},"Flutter \u7684\u8a08\u6578\u5668"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"class CounterApp extends StatefulWidget {\n  @override\n  _CounterAppState createState() => _CounterAppState();\n}\n\nclass _CounterAppState extends State<CounterApp> {\n  int count = 0; // \u96d6\u53ef\u4ee5\u8207 java / kotlin\u4f9d\u6a23\u4e0d\u7528\u5ba3\u544a\u6210 remember\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n        appBar: AppBar(\n          title: Text('Counter App'),\n        ),\n        body: Center(\n          child: Column(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: <Widget>[\n              Text(\n                'Count: $count',\n                style: TextStyle(fontSize: 24),\n              ),\n              SizedBox(height: 20),\n              ElevatedButton(\n                onPressed: () {\n                  setState(() {\n                    count++; // \u4f46 Flutter \u9700\u8981\u8abf\u7528 setState \u4f86\u66f4\u65b0 UI\n                  });\n                },\n                child: Text('Increment'),\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n")),(0,r.yg)("h2",{id:"jetpack-compose-\u7684\u8a08\u6578\u5668"},"Jetpack Compose \u7684\u8a08\u6578\u5668"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'Composable\nfun CounterApp() {\n    var count by remember { mutableStateOf(0) }\n    // \u9700\u5c07\u8b8a\u6578\u5ba3\u544a\u6210 remember\uff0c\u900f\u904e remember \u7b49\u72c0\u614b\u7ba1\u7406\u6a5f\u5236\u4f86\u7ba1\u7406\u6578\u64da\uff0c\u9019\u4e9b\u6a5f\u5236\u6703\u81ea\u52d5\u89f8\u767c UI \u7684\u91cd\u69cb\u3002\u7576\u4f7f\u7528\u9019\u4e9b\u6a5f\u5236\u4f86\u5b58\u5132\u6578\u64da\u6642\uff0cComposable \u51fd\u6578\u6703\u5728\u6578\u64da\u767c\u751f\u8b8a\u5316\u6642\u81ea\u52d5\u91cd\u69cb UI\n\n    Column(\n        horizontalAlignment = Alignment.CenterHorizontally,\n        verticalArrangement = Arrangement.Center,\n        modifier = Modifier.fillMaxSize()\n    ) {\n        Text(\n            text = "Count: $count",\n            fontSize = 24.sp,\n            modifier = Modifier.padding(bottom = 16.dp)\n        )\n        Button(\n            onClick = { count++ },\n            modifier = Modifier.padding(8.dp)\n        ) {\n            Text(text = "Increment")\n        }\n    }\n}\n\n')))}s.isMDXComponent=!0}}]);