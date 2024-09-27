---
sidebar_label: "export"
sidebar_position: 10
---

# export

---

在 JavaScript 中，`export` 用來將變數、函數、類別等模組中的內容導出，讓其他檔案可以透過 `import` 引入並使用這些導出的內容。這是模組化開發的一部分，讓我們可以將程式碼拆分成更小、更易於管理的單元

JavaScript 支援兩種類型的 `export`：

## 1. Named Export (具名匯出)

具名匯出允許你從一個模組中匯出多個變數、函數或類別。當你使用具名匯出時，匯出的名稱必須與導入時一致

### 語法：

```
export { name1, name2, name3 };
```

或者你可以在定義時直接匯出：

```
export const myVariable = 'Hello';
export function myFunction() {
  console.log('This is a function');
}
```

### 引入時：

```
import { myVariable, myFunction } from './myModule';
```

### 特點：

- 你可以在一個模組中匯出多個具名內容
- 引入時，你必須使用正確的名稱
- 你可以將匯出的內容進行別名：

	```
	import { myFunction as renamedFunction } from './myModule';
	```

## 2. Default Export (預設匯出)

預設匯出允許匯出一個主要內容，通常是一個函數或類別。每個模組只能有**一個**預設匯出，並且引入時不需要使用大括號 `{}`，可以為引入的名稱自訂

### 語法：

```
export default function MyComponent() {
  console.log('This is the default export');
}
```

或者


```
function MyComponent() {
  console.log('This is the default export');
}
export default MyComponent;
```

### 引入時：

```
import MyComponent from './myModule';
```

### 特點：

- 每個模組只能有一個預設匯出
- 引入時可以為它取任何名字，無需與匯出名稱相同

## 具名匯出與預設匯出的區別

- 具名匯出：可以有多個匯出，匯出名稱必須與引入時的名稱一致
- 預設匯出：每個模組只能有一個，並且引入時可以任意命名

## 範例

### 具名匯出範例

```
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

```
// app.js
import { add, subtract } from './math';
console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
```

### 預設匯出範例

```
// logger.js
export default function logMessage(message) {
  console.log(message);
}
```

```
// app.js
import logMessage from './logger';
logMessage('Hello, world!'); // Hello, world!
```

### 混合匯出

一個模組可以同時有具名匯出和預設匯出：

```
// utility.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export default function multiply(a, b) {
  return a * b;
}
```

```
// app.js
import multiply, { add, subtract } from './utility';
console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(4, 5)); // 20
```

## 小結

- 具名匯出 (`export {}`)：可以匯出多個內容，導入時需使用大括號和相同名稱
- 預設匯出 (`export default`)：每個模組只能有一個，導入時不需大括號，可以任意命名