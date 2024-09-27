---
sidebar_label: "If Else"
sidebar_position: 6
---

# if else

---

在 swift 中的 `if else` 可以不用加 `()`，如

```
var age = 50
if age < 30 {
	print("你是我的傳說")
} else if age < 50 {
	print("有點老")
} else {
	print("太老了")
}
```

可以不用 `()` 但一定要有 `{}`
跟其他程式語言一樣，`if` 後面需要接 `Bool` 布林型別的結果

| 符號 | 比較運算子 |
|:----:|:---:|
| < | 小於 |
| <= | 小於或等於 |
| > | 大於 |
| >= | 大於或等於 |
| == | 相等 |
| != | 不相等 |
| && | and (數位邏輯的 AND 閘) |
| \|\| | or (數位邏輯的 OR 閘) |

| 方法 | 比較運算子 |
|:---:|:---:|
| contains( condition ) | 包含 |
| localizedStandardContains( condition ) | 包含 不分大小寫 |
| hasPrefix( condition ) | 開頭 |
| hasSuffix( condition ) | 結尾 |

> 在 Swift 中除了有 `==` 還有 `===`
> 
> ### `==` & `!=`
> * 比較兩者是否一樣
> 
> ### `===` & `!==`
> * 比較是否是同一個東西,比方比較是否是同一個物件 (同一個記憶體位址)