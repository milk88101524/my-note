---
sidebar_label: "Switch"
sidebar_position: 8
---

# Switch

---

在 Swift 的 `switch` 跟其他程式語言的 `switch` 功能一樣

1. 一般的用法

```
switch (expression // 表達) {
	case value:
		do something
		break 
		// case 下不做任何事時,可加上 break,表示會離開 swtich 的 { }
	default:
		break
}
```

2. 一個 case 比對多個條件

![image1](/img/swift_img/2024-08-06_12.28.09.png)

3. 繼續執行下個 case 的 `fallthrough`

![image2](/img/swift_img/2024-08-06_12.30.29.png)

0分時會 print `天才與白痴之間只有一線之隔`