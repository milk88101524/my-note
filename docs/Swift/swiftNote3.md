---
sidebar_label: "資料型態"
sidebar_position: 3
---

# 資料型態

---

在 Swift 中也是有像 String 、Int、Double 等基本的資料型態，那要使用他的話必須要頭字母大寫，例如宣告一個叫 test 的字串就要這樣打： `var test: String = ""`

| Java 基礎數據類型 | Kotlin 對象數據類型 |
|:---:|:---:|
| boolean |Bool |
| char | Character |
| byte | Byte |
| int | Int | 
| float | Float | 
| double | Double |

> 需注意一點，若變數沒宣告成 `Optional` 且沒給他預設值，在 Swift 中是會報錯的，若要解決這問題，在一開始宣告時就先給它預設值，例如：`var test: String = ""`，或是將變數宣告成 `Optional`，例如：`var test: String?`