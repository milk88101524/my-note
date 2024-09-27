"use strict";(self.webpackChunkmy_note=self.webpackChunkmy_note||[]).push([[1979],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),y=p(a),g=n,m=y["".concat(c,".").concat(g)]||y[g]||u[g]||o;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[y]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2970:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(8168),n=(a(6540),a(5680));const o={sidebar_label:"Core Data",sidebar_position:9},i="Core Data",l={unversionedId:"SwiftUI/swiftUINote9",id:"SwiftUI/swiftUINote9",isDocsHomePage:!1,title:"Core Data",description:"---",source:"@site/docs/SwiftUI/swiftUINote9.md",sourceDirName:"SwiftUI",slug:"/SwiftUI/swiftUINote9",permalink:"/my-note/docs/SwiftUI/swiftUINote9",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"Core Data",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"UserDefaults",permalink:"/my-note/docs/SwiftUI/swiftUINote8"},next:{title:"JavaScript Intro",permalink:"/my-note/docs/JavaScript/JSNote1"}},c=[{value:"Core Data \u7684\u4e3b\u8981\u529f\u80fd\u548c\u7279\u9ede",id:"core-data-\u7684\u4e3b\u8981\u529f\u80fd\u548c\u7279\u9ede",children:[{value:"1. \u8cc7\u6599\u6301\u4e45\u5316",id:"1-\u8cc7\u6599\u6301\u4e45\u5316",children:[]},{value:"2. \u7ba1\u7406\u5c0d\u8c61\u7684\u751f\u547d\u9031\u671f",id:"2-\u7ba1\u7406\u5c0d\u8c61\u7684\u751f\u547d\u9031\u671f",children:[]},{value:"3. \u67e5\u8a62\u8cc7\u6599",id:"3-\u67e5\u8a62\u8cc7\u6599",children:[]},{value:"4. \u8cc7\u6599\u95dc\u806f\u8207\u591a\u5c0d\u591a\u95dc\u4fc2",id:"4-\u8cc7\u6599\u95dc\u806f\u8207\u591a\u5c0d\u591a\u95dc\u4fc2",children:[]},{value:"5. \u8cc7\u6599\u8b8a\u66f4\u901a\u77e5",id:"5-\u8cc7\u6599\u8b8a\u66f4\u901a\u77e5",children:[]}]},{value:"Core Data \u7684\u67b6\u69cb",id:"core-data-\u7684\u67b6\u69cb",children:[]},{value:"\u4f7f\u7528 Core Data \u7684\u57fa\u672c\u6b65\u9a5f",id:"\u4f7f\u7528-core-data-\u7684\u57fa\u672c\u6b65\u9a5f",children:[]},{value:"\u793a\u4f8b\uff1a\u4f7f\u7528 Core Data \u4fdd\u5b58\u548c\u8b80\u53d6\u8cc7\u6599",id:"\u793a\u4f8b\u4f7f\u7528-core-data-\u4fdd\u5b58\u548c\u8b80\u53d6\u8cc7\u6599",children:[]},{value:"Core Data \u512a\u9ede",id:"core-data-\u512a\u9ede",children:[]},{value:"Core Data \u7f3a\u9ede",id:"core-data-\u7f3a\u9ede",children:[]}],p={toc:c},d="wrapper";function y(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"core-data"},"Core Data"),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Core Data \u662f\u860b\u679c\u5728 iOS \u548c macOS \u5e73\u53f0\u4e0a\u63d0\u4f9b\u7684\u4e00\u500b\u5f37\u5927\u6846\u67b6\uff0c\u4e3b\u8981\u7528\u4f86\u7ba1\u7406\u61c9\u7528\u4e2d\u7684\u8cc7\u6599\u6a21\u578b\u548c\u6301\u4e45\u5316\u8cc7\u6599\u3002\u5b83\u6bd4 ",(0,n.yg)("inlineCode",{parentName:"p"},"UserDefaults")," \u66f4\u9069\u5408\u7528\u4f86\u8655\u7406\u5927\u91cf\u7d50\u69cb\u5316\u8cc7\u6599\uff0c\u4f8b\u5982\u9700\u8981\u9032\u884c\u95dc\u806f\u64cd\u4f5c\u7684\u8907\u96dc\u8cc7\u6599\u6a21\u578b\uff0c\u751a\u81f3\u5305\u542b\u96e2\u7dda\u6578\u64da\u7684\u61c9\u7528\u3002Core Data \u63d0\u4f9b\u4e86\u6bd4 ",(0,n.yg)("inlineCode",{parentName:"p"},"UserDefaults")," \u66f4\u8c50\u5bcc\u7684\u6578\u64da\u64cd\u4f5c\u529f\u80fd\uff0c\u5982\u589e\u3001\u522a\u3001\u6539\u3001\u67e5\u3001\u6392\u5e8f\u3001\u7be9\u9078\u7b49"),(0,n.yg)("h2",{id:"core-data-\u7684\u4e3b\u8981\u529f\u80fd\u548c\u7279\u9ede"},"Core Data \u7684\u4e3b\u8981\u529f\u80fd\u548c\u7279\u9ede"),(0,n.yg)("h3",{id:"1-\u8cc7\u6599\u6301\u4e45\u5316"},"1. \u8cc7\u6599\u6301\u4e45\u5316"),(0,n.yg)("p",null,"Core Data \u7684\u4e00\u500b\u4e3b\u8981\u529f\u80fd\u662f\u5c07\u61c9\u7528\u7a0b\u5f0f\u8cc7\u6599\u6301\u4e45\u5316\u5230\u78c1\u789f\uff0c\u9019\u6a23\u7576\u61c9\u7528\u91cd\u65b0\u555f\u52d5\u6642\uff0c\u8cc7\u6599\u4f9d\u7136\u4fdd\u7559\u3002\u96d6\u7136\u5b83\u53ef\u4ee5\u5132\u5b58\u8cc7\u6599\u5230\u78c1\u789f\u4e2d\uff0c\u4f46\u5b83\u4e0d\u662f\u50b3\u7d71\u7684\u8cc7\u6599\u5eab\u3002Core Data \u662f\u4e00\u500b\u7269\u4ef6\u95dc\u806f\u6620\u5c04 (ORM) \u5de5\u5177\uff0c\u5b83\u6703\u5c07\u8cc7\u6599\u5b58\u5132\u70ba\u5c0d\u8c61\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u5b58\u5165\u8cc7\u6599\u8868"),(0,n.yg)("h3",{id:"2-\u7ba1\u7406\u5c0d\u8c61\u7684\u751f\u547d\u9031\u671f"},"2. \u7ba1\u7406\u5c0d\u8c61\u7684\u751f\u547d\u9031\u671f"),(0,n.yg)("p",null,"Core Data \u53ef\u4ee5\u8ddf\u8e64\u61c9\u7528\u4e2d\u7684\u8cc7\u6599\u5c0d\u8c61\uff0c\u4e26\u8ca0\u8cac\u7ba1\u7406\u5176\u751f\u547d\u9031\u671f\u3002\u9019\u610f\u5473\u8457\u5b83\u80fd\u5920\u81ea\u52d5\u8f09\u5165\u3001\u66ab\u5b58\u548c\u6e05\u7406\u5c0d\u8c61\uff0c\u907f\u514d\u5167\u5b58\u6ea2\u51fa\u6216\u4e0d\u5fc5\u8981\u7684\u5167\u5b58\u4f54\u7528"),(0,n.yg)("h3",{id:"3-\u67e5\u8a62\u8cc7\u6599"},"3. \u67e5\u8a62\u8cc7\u6599"),(0,n.yg)("p",null,"Core Data \u652f\u63f4\u8907\u96dc\u7684\u8cc7\u6599\u67e5\u8a62\uff0c\u985e\u4f3c\u65bc\u8cc7\u6599\u5eab\u4e2d\u7684 SQL \u67e5\u8a62\u8a9e\u6cd5\u3002\u53ef\u4ee5\u901a\u904e ",(0,n.yg)("inlineCode",{parentName:"p"},"NSPredicate")," \u4f86\u9032\u884c\u7be9\u9078\uff0c\u4e26\u4e14\u53ef\u4ee5\u6392\u5e8f\u3001\u5206\u9801\u3001\u5206\u7d44\u7b49\u64cd\u4f5c"),(0,n.yg)("h3",{id:"4-\u8cc7\u6599\u95dc\u806f\u8207\u591a\u5c0d\u591a\u95dc\u4fc2"},"4. \u8cc7\u6599\u95dc\u806f\u8207\u591a\u5c0d\u591a\u95dc\u4fc2"),(0,n.yg)("p",null,"Core Data \u652f\u63f4\u4e0d\u540c\u8cc7\u6599\u6a21\u578b\u4e4b\u9593\u7684\u95dc\u806f\uff0c\u9019\u53ef\u4ee5\u8f15\u9b06\u5b9a\u7fa9\u4e00\u5c0d\u4e00\u3001\u4e00\u5c0d\u591a\u6216\u591a\u5c0d\u591a\u7684\u8cc7\u6599\u6a21\u578b\u95dc\u4fc2\u3002\u4f8b\u5982\uff0c\u4e00\u500b\u7b46\u8a18\u61c9\u7528\u4e2d\uff0c\u53ef\u4ee5\u5c07\u591a\u500b\u6a19\u7c64\u95dc\u806f\u5230\u4e00\u500b\u7b46\u8a18\u4e0a\uff0c\u9019\u5728\u8cc7\u6599\u5eab\u4e2d\u662f\u591a\u5c0d\u591a\u7684\u95dc\u4fc2"),(0,n.yg)("h3",{id:"5-\u8cc7\u6599\u8b8a\u66f4\u901a\u77e5"},"5. \u8cc7\u6599\u8b8a\u66f4\u901a\u77e5"),(0,n.yg)("p",null,"\u7576 Core Data \u4e2d\u7684\u8cc7\u6599\u88ab\u4fee\u6539\u6642\uff0c\u5176\u4ed6\u76f8\u95dc\u90e8\u5206\u53ef\u4ee5\u5373\u6642\u6536\u5230\u901a\u77e5\uff0c\u9019\u8b93 UI \u53ef\u4ee5\u53ca\u6642\u66f4\u65b0"),(0,n.yg)("h2",{id:"core-data-\u7684\u67b6\u69cb"},"Core Data \u7684\u67b6\u69cb"),(0,n.yg)("p",null,"Core Data \u7684\u6838\u5fc3\u90e8\u5206\u6709\u5e7e\u500b\u91cd\u8981\u7684\u7d44\u4ef6\uff1a"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Managed Object Model (",(0,n.yg)("inlineCode",{parentName:"p"},"NSManagedObjectModel"),")\uff1a"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"\u9019\u500b\u985e\u662f\u8cc7\u6599\u6a21\u578b\uff08\u6578\u64da\u7d50\u69cb\uff09\u7684\u5b9a\u7fa9\u3002\u5b83\u5b9a\u7fa9\u4e86\u61c9\u7528\u7a0b\u5f0f\u4e2d\u6240\u8981\u8655\u7406\u7684\u8cc7\u6599\u7d50\u69cb\u548c\u5f7c\u6b64\u4e4b\u9593\u7684\u95dc\u4fc2\uff0c\u985e\u4f3c\u65bc\u95dc\u806f\u5f0f\u8cc7\u6599\u5eab\u4e2d\u7684\u8868\u7d50\u69cb"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Managed Object Context (",(0,n.yg)("inlineCode",{parentName:"p"},"NSManagedObjectContext"),")\uff1a"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"\u9019\u662f\u8cc7\u6599\u7684\u5de5\u4f5c\u5340\uff0c\u5728\u5176\u4e2d\u57f7\u884c\u8cc7\u6599\u7684\u589e\u522a\u6539\u67e5\u64cd\u4f5c\u3002\u5b83\u985e\u4f3c\u65bc\u4e00\u500b\u81e8\u6642\u7684\u8cc7\u6599\u5b58\u5132\u7a7a\u9593\uff0c\u6240\u6709\u7684\u8b8a\u66f4\u6703\u5728\u9019\u88e1\u9032\u884c\uff0c\u76f4\u5230\u5c07\u5b83\u5011\u300c\u4fdd\u5b58\u300d\uff08\u5373\u5b58\u5165\u8cc7\u6599\u5eab\uff09"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Persistent Store Coordinator (",(0,n.yg)("inlineCode",{parentName:"p"},"NSPersistentStoreCoordinator"),")\uff1a"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"\u5b83\u8ca0\u8cac\u5c07\u8cc7\u6599\u5be6\u969b\u5132\u5b58\u5230\u78c1\u789f\u6216\u5176\u4ed6\u8cc7\u6599\u5b58\u5132\u5340\u57df\u3002\u901a\u5e38\u5b83\u6703\u628a\u8cc7\u6599\u4fdd\u5b58\u6210 SQLite \u6587\u4ef6\uff0c\u4f46 Core Data \u4e5f\u652f\u6301\u5176\u4ed6\u683c\u5f0f\u5982 XML \u6216 Binary"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Managed Objects (",(0,n.yg)("inlineCode",{parentName:"p"},"NSManagedObject"),")\uff1a"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"\u9019\u4e9b\u662f\u8cc7\u6599\u6a21\u578b\u5be6\u4f8b\uff0c\u5b83\u5011\u88ab Core Data \u7ba1\u7406\u3002\u5728\u61c9\u7528\u4e2d\uff0c\u9019\u4e9b\u7269\u4ef6\u53ef\u4ee5\u88ab\u4fee\u6539\u3001\u67e5\u8a62\u3001\u522a\u9664\uff0c\u4e26\u8207\u5176\u4ed6\u7269\u4ef6\u5efa\u7acb\u95dc\u806f")))),(0,n.yg)("h2",{id:"\u4f7f\u7528-core-data-\u7684\u57fa\u672c\u6b65\u9a5f"},"\u4f7f\u7528 Core Data \u7684\u57fa\u672c\u6b65\u9a5f"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u6a21\u578b\u8a2d\u8a08\uff1a \u4f7f\u7528 Xcode \u7684 Core Data \u6a21\u578b\u7de8\u8f2f\u5668\u4f86\u8a2d\u8a08\u8cc7\u6599\u6a21\u578b\u3002\u53ef\u4ee5\u5728\u9019\u88e1\u5b9a\u7fa9\u6bcf\u500b\u5be6\u9ad4\uff08\u985e\u4f3c\u65bc\u8cc7\u6599\u8868\uff09\u3001\u5be6\u9ad4\u7684\u5c6c\u6027\uff08\u985e\u4f3c\u65bc\u8868\u7684\u6b04\u4f4d\uff09\uff0c\u4ee5\u53ca\u5be6\u9ad4\u4e4b\u9593\u7684\u95dc\u806f"),(0,n.yg)("li",{parentName:"ol"},"\u5efa\u7acb NSManagedObject \u5b50\u985e\uff1a \u7576\u6709\u4e86\u8cc7\u6599\u6a21\u578b\u5f8c\uff0c\u53ef\u4ee5\u8b93 Xcode \u70ba\u6bcf\u500b\u5be6\u9ad4\u751f\u6210\u76f8\u5c0d\u61c9\u7684 ",(0,n.yg)("inlineCode",{parentName:"li"},"NSManagedObject")," \u5b50\u985e\uff0c\u9019\u4e9b\u5b50\u985e\u5c0d\u61c9\u8457\u8cc7\u6599\u5eab\u4e2d\u7684\u6bcf\u500b\u8868"),(0,n.yg)("li",{parentName:"ol"},"\u64cd\u4f5c\u8cc7\u6599\uff1a \u5728\u7a0b\u5f0f\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,n.yg)("inlineCode",{parentName:"li"},"NSManagedObjectContext")," \u4f86\u589e\u522a\u67e5\u6539\u8cc7\u6599\u3002\u4f8b\u5982\uff0c\u5275\u5efa\u65b0\u7684 ",(0,n.yg)("inlineCode",{parentName:"li"},"NSManagedObject")," \u5be6\u4f8b\u4f86\u65b0\u589e\u8cc7\u6599\uff0c\u6216\u901a\u904e ",(0,n.yg)("inlineCode",{parentName:"li"},"NSFetchRequest")," \u4f86\u67e5\u8a62\u8cc7\u6599")),(0,n.yg)("h2",{id:"\u793a\u4f8b\u4f7f\u7528-core-data-\u4fdd\u5b58\u548c\u8b80\u53d6\u8cc7\u6599"},"\u793a\u4f8b\uff1a\u4f7f\u7528 Core Data \u4fdd\u5b58\u548c\u8b80\u53d6\u8cc7\u6599"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"\u65b0\u589e\u8cc7\u6599\uff1a")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'let newNote = Note(context: managedObjectContext)\nnewNote.title = "My First Note"\nnewNote.id = UUID().uuidString\n\ndo {\n    try managedObjectContext.save()\n} catch {\n    print("Failed to save note: \\(error)")\n}\n')),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"\u67e5\u8a62\u8cc7\u6599\uff1a")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'let fetchRequest: NSFetchRequest<Note> = Note.fetchRequest()\nfetchRequest.predicate = NSPredicate(format: "title == %@", "My First Note")\n\ndo {\n    let notes = try managedObjectContext.fetch(fetchRequest)\n    for note in notes {\n        print("Note title: \\(note.title)")\n    }\n} catch {\n    print("Failed to fetch notes: \\(error)")\n}\n')),(0,n.yg)("h2",{id:"core-data-\u512a\u9ede"},"Core Data \u512a\u9ede"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u81ea\u52d5\u7ba1\u7406\u8cc7\u6599\uff1aCore Data \u80fd\u5920\u81ea\u52d5\u7ba1\u7406\u8cc7\u6599\u7684\u8f09\u5165\u548c\u5132\u5b58\uff0c\u4e26\u4e14\u652f\u63f4\u8cc7\u6599\u7684\u96e2\u7dda\u5132\u5b58\u8207\u540c\u6b65"),(0,n.yg)("li",{parentName:"ul"},"\u95dc\u806f\u8cc7\u6599\u8655\u7406\uff1a\u5b83\u5c0d\u65bc\u8655\u7406\u6709\u8907\u96dc\u95dc\u806f\u95dc\u4fc2\u7684\u8cc7\u6599\u6a21\u578b\u5f88\u65b9\u4fbf\uff0c\u652f\u63f4\u4e00\u5c0d\u591a\u3001\u591a\u5c0d\u591a\u7684\u95dc\u4fc2"),(0,n.yg)("li",{parentName:"ul"},"\u67e5\u8a62\u548c\u7be9\u9078\u5f37\u5927\uff1a\u652f\u63f4\u4f7f\u7528 NSPredicate \u9032\u884c\u8907\u96dc\u7684\u67e5\u8a62\u548c\u7be9\u9078"),(0,n.yg)("li",{parentName:"ul"},"\u8207 Swift \u6574\u5408\u7dca\u5bc6\uff1a\u5728 SwiftUI \u4e2d\u4f7f\u7528 Core Data \u975e\u5e38\u65b9\u4fbf\uff0c\u652f\u63f4 UI \u7684\u5373\u6642\u66f4\u65b0")),(0,n.yg)("h2",{id:"core-data-\u7f3a\u9ede"},"Core Data \u7f3a\u9ede"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5b78\u7fd2\u66f2\u7dda\uff1a\u5c0d\u65bc\u521d\u5b78\u8005\u4f86\u8aaa\uff0cCore Data \u7684\u67b6\u69cb\u76f8\u5c0d\u8907\u96dc\uff0c\u5c24\u5176\u662f\u5982\u679c\u53ea\u9700\u8981\u505a\u4e00\u4e9b\u7c21\u55ae\u7684\u8cc7\u6599\u5132\u5b58\u64cd\u4f5c\u7684\u8a71\uff0c\u53ef\u80fd\u6709\u4e9b\u904e\u5ea6\u8a2d\u8a08"),(0,n.yg)("li",{parentName:"ul"},"\u6027\u80fd\u554f\u984c\uff1a\u5c0d\u65bc\u975e\u5e38\u5927\u91cf\u7684\u8cc7\u6599\u64cd\u4f5c\uff0c\u7279\u5225\u662f\u983b\u7e41\u7684\u589e\u522a\u6539\u67e5\u64cd\u4f5c\uff0cCore Data \u7684\u6027\u80fd\u53ef\u80fd\u4e0d\u5982\u7d14 SQL \u8cc7\u6599\u5eab\u9ad8\u6548"),(0,n.yg)("li",{parentName:"ul"},"\u591a\u7dda\u7a0b\uff1aCore Data \u5728\u591a\u7dda\u7a0b\u64cd\u4f5c\u4e0b\u9700\u8981\u5c0f\u5fc3\u8655\u7406\uff0c\u5982\u679c\u4e0d\u9075\u5faa\u7dda\u7a0b\u898f\u5247\uff0c\u53ef\u80fd\u6703\u5c0e\u81f4\u8cc7\u6599\u4e0d\u4e00\u81f4")))}y.isMDXComponent=!0}}]);