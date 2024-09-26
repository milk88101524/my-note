---
sidebar_label: "Optional"
sidebar_position: 5
---

# Optional

---

`Optional` 是一種用來表示變量可能有值，也可能沒有值的類型。它為解決變量是否有值的問題提供了一個優雅的解決方案，並且有助於避免空值引用（null pointer reference）錯誤

## 基本概念

當定義一個變量為 `Optional` 類型時，它可以有兩種狀態：

1. 有值（並且值是某個具體的類型）
2. 沒有值（值為 `nil`）

## 定義和初始化 Optional

可以使用問號（`?`）來定義一個 `Optional` 類型，在定義 `Optional` 類別的初始值時可以在定義時初始化 `Optional` 變量，也可以將其初始化為 `nil`

```
var optionalString: String? = "Hello, Swift"
var optionalNumber: Int? = 42
var optionalArray: [Int]? = [1, 2, 3]

var name: String? = "John"
var age: Int? = nil
```

## 使用 Optional

### 1. 強制拆包（Force Unwrapping）

可以使用驚嘆號（`!`）來強制拆包 `Optional`，這意味著相信這個變量在這個時候一定不是 `nil`：

```
if optionalString != nil {
    print(optionalString!)  // 強制拆包
}
```

> 但是，如果變量是 `nil`，強制拆包會導致運行時錯誤

### 2. 可選綁定（Optional Binding）

可選綁定是一種安全拆包 `Optional` 的方式，使用 `if let` 或 `guard let`

```
// if let
if let unwrappedString = optionalString {
    print(unwrappedString)
} else {
    print("optionalString 是 nil")
}

// guard let
func printOptionalString() {
    guard let unwrappedString = optionalString else {
        print("optionalString 是 nil")
        return
    }
    print(unwrappedString)
}
```

### 3. Nil 合併運算符（Nil-Coalescing Operator）

你可以使用雙問號（`??`）來提供一個默認值，如果 `Optional` 為 `nil` 的話

```
let defaultString = optionalString ?? "Default Value"
print(defaultString)
```

### 4. 可選鏈接（Optional Chaining）

可選鏈接允許你對可能是 `nil` 的可選值進行方法調用或屬性訪問，如果可選值為 `nil`，整個表達式會返回 `nil`

```
let uppercaseString = optionalString?.uppercased()
print(uppercaseString)  // 如果 optionalString 是 nil，這裡會打印 nil
```

## Optional 的例子

```
func printName(_ name: String?) {
    if let unwrappedName = name {
        print("Name is \(unwrappedName)")
    } else {
        print("Name is nil")
    }
}

printName("Alice")  // 打印: Name is Alice
printName(nil)      // 打印: Name is nil
```

`Optional` 是 Swift 中處理變量是否有值的一種強大工具。通過使用 `Optional`，可以更安全地處理可能為 `nil` 的情況，避免運行時錯誤。使用可選綁定、nil 合併運算符和可選鏈接等技術，可以更方便地操作 `Optional` 值