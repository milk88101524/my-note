---
sidebar_label: "() -> Unit 與 @Composable () -> Unit"
sidebar_position: 5
---

# () -> Unit 與 @Composable () -> Unit

---

## `() -> Unit`

這是一種普通的 Kotlin 函數類型，它表示一個無參數且無返回值的函數。這種函數不能直接用於 Compose 的組件樹中

```
val simpleAction: () -> Unit = {
    println("Simple action executed")
}
```

## `@Composable () -> Unit`

這是一種 Compose 特定的函數類型，表示這個函數可以用來描述 UI 組件的組合。`@Composable` 註解告訴 Compose 框架這個函數會用來創建或更新組件樹，因此它可以在 `@Composable` 函數內部調用

```
@Composable
fun MyComposableFunction() {
    val action: @Composable () -> Unit = {
        // 這裡可以放置 Compose 的 UI 代碼
        Text("Hello, Compose!")
    }

    Button(onClick = action) {
        Text("Click me")
    }
}
```

## 主要區別

1. 用途：
    - `() -> Unit`：用於一般的 Kotlin 函數，適合處理非 Compose 的邏輯
    - `@Composable () -> Unit`：專門用於 Compose 的 UI 描述，能夠在 Compose 組件樹中使用，並能夠在組件樹的上下文中進行組合和重組
	
2. 上下文：
    - `() -> Unit`：這種函數不能直接用於 Compose 組件的內部，它只是執行一些普通的邏輯操作
    - `@Composable () -> Unit`：這種函數可以被 Compose 框架理解，並在 UI 更新時被調用
	
3. 調用方式：
    - `() -> Unit`：直接調用即可，沒有任何特殊要求
    - `@Composable () -> Unit`：需要在 Compose 的 `@Composable` 函數內部調用，並且要遵循 Compose 的組件樹規則

總結來說，`@Composable () -> Unit` 是為了 Compose 框架設計的，能夠在 UI 組件中使用，並且能夠根據狀態改變進行重組。而普通的 `() -> Unit` 則用於一般的函數邏輯，不涉及 Compose 的組件樹
