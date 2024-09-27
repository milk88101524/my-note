---
sidebar_label: "Struct"
sidebar_position: 11
---

# struct

---

struct 跟 class 的功能是相似的，但兩者還是有點差異的
* struct 無法繼承
* struct 可自動生成 memberwise initializer
* struct 是 value type，class 是 reference type

![image1](/img/swift_img/2024-08-06_2.49.01.png)

> 如果是打算單存的儲存資料，建議使用 struct 來定義型別
> 
> struct 的好處
> - 自動產生 memberwise initializer
> - 比較安全，跟 value type 有關