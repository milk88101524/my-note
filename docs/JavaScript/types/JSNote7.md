---
sidebar_label: "Boolean"
sidebar_position: 3
---

# Boolean 

---

JavaScript 的 `boolean` 值只有兩個：
- `true`：表示「真」
- `false`：表示「假」

可以直接賦值為 `true` 或 `false`：

```
let isJavaScriptFun = true;
let isRaining = false;
```

JavaScript 中，許多值可以自動轉換為布林值。任何值都可以被強制轉換為布林值，通常使用 `Boolean()` 函數或在條件表達式中自動進行轉換

在 JavaScript 中，以下值會被視為「假」 (`false`，或 falsy values):

- `false`
- `0`（數字零）
- `""`（空字串）
- `null`
- `undefined`
- `NaN`（Not-a-Number）

其他所有值都會被視為「真」 (`true`，或 **truthy values**)，包括空陣列 (`[]`)、空物件 (`{}`)、非零數字、非空字串等

可以透過邏輯運算符來判斷 true 或 false

- `&&`：只有當兩個操作數都為 `true` 時，結果才為 `true`。否則結果為 `false`

- `||`：只要有一個操作數為 `true`，結果就為 `true`。只有兩個操作數都為 `false` 時，結果才為 `false`

- `!` (邏輯非)：取反操作。將 `true` 轉為 `false`，將 `false` 轉為 `true`