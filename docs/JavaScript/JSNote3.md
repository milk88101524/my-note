---
sidebar_label: "變數 (Variables)"
sidebar_position: 3
---

# 變數 (Variables)

---

**變數** 是可以用來儲存數值的容器，需要使用 `let`、`var` 來宣告

`let / var variableName = value`

在 JavaScript 中，`let` 和 `var` 都用來宣告變數，但它們之間有幾個重要的區別，這些差異主要涉及 **作用域**、**重複宣告**、**提升 (hoisting)** 以及**變數綁定**的行為

## 1. 作用域 (Scope)

- `var`： 變數具有 **函數作用域** (Function Scope)，這意味著如果在函數內部宣告，它的作用域是整個函數。即使是在區塊內（例如 `if` 或 `for` 區塊中）使用 `var` 宣告的變數，該變數也能在整個函數中存取，這可能導致意想不到的行為

	```
	function testVar() {
	  if (true) {
	    var x = 10;
	  }
	  console.log(x); // 10 (x 在整個函數中有效)
	}
	testVar();
	```
    
- `let`： 變數具有**區塊作用域** (Block Scope)，即變數只在所定義的區塊內（例如 `{}` 內）有效。這使得 `let` 更加符合直覺，減少了變數污染全域作用域的風險   

	```
	function testLet() {
	  if (true) {
	    let y = 10;
	  }
	  console.log(y); // ReferenceError: y is not defined (y 只在 if 區塊內有效)
	}
	testLet();
	```

## 2. 重複宣告

- `var`： 允許在相同的作用域中多次宣告相同名稱的變數，不會報錯。這可能導致變數意外覆蓋，導致程式碼的可讀性和維護性降低

```
var a = 10;
var a = 20;
console.log(a); // 20 (第二次宣告覆蓋了第一次)
```

- `let`： 在同一作用域內，**不允許重複宣告** 相同名稱的變數。這樣可以防止意外重複宣告變數，增加程式碼的安全性

	```
	let b = 10;
	let b = 20; // SyntaxError: Identifier 'b' has already been declared
	```

## 3. 變數提升 (Hoisting)

- `var`： 雖然 `var` 變數會被提升到其作用域的頂端（變數提升），但值不會被提升，所以在變數初始化之前使用它，會得到 `undefined`

	```
	console.log(c); // undefined (c 被提升，但尚未賦值)
	var c = 10;
	```
    
- `let`： `let` 也會被提升，但會進入**暫時性死區** (Temporal Dead Zone, TDZ)，在變數宣告之前，無法存取它，否則會產生錯誤

	```
	console.log(d); // ReferenceError: Cannot access 'd' before initialization
	let d = 10;
	```

## 4. 全域物件的屬性

- `var`： 如果在全域作用域（例如 `window` 或 `globalThis`）中使用 `var` 宣告變數，該變數會成為全域物件的屬性
	    
	```
	var e = 10;
	console.log(window.e); // 10
	```
    
- `let`： 全域作用域中使用 `let` 宣告的變數**不會成為全域物件的屬性**

	```
	let f = 10;
	console.log(window.f); // undefined
	```

## 總結

- 作用域： `var` 是函數作用域，`let` 是區塊作用域
- 重複宣告： `var` 允許重複宣告，`let` 不允許
- 變數提升： `var` 被提升但初始化為 `undefined`，`let` 進入暫時性死區，使用前必須先宣告
- 全域物件的屬性： `var` 會將變數掛載到全域物件上，`let` 不會


**一般來說，現代 JavaScript 開發中會優先使用 `let` 或 `const`（不變值）來避免 `var` 帶來的意外行為和潛在錯誤**


> 這邊補充一下 JavaScript 跟 Swift 的 `let` 跟 `var` 的差異
> 
> ## JavaScript 的 `let` 和 `var` 與 Swift 的差異
> 
> ### Swift 中的 `let` 和 `var`
> 
>- `let`：用來宣告一個常數，一旦賦值後就不能再更改。這相當於 JavaScript 的 `const`，表示不可變的變數
> 
> - `var`：用來宣告一個變數，可以隨時改變其值，這與 JavaScript/TypeScript 中的 `let` 相似（不過在 Swift 中並沒有像 JS 的 `var` 那樣的作用域問題）
> 
> 
> ### 主要差異
> 
> - 作用域 (Scope)：在 Swift 中，`let` 和 `var` 都是**區塊作用域**，與 JavaScript 的 `let` 相同。但在 JavaScript 中，`var` 是函數作用域，這是它們之間的主要差異之一
> - 常數 (Constant)：Swift 中的 `let` 表示常數，無法修改。而在 JavaScript 中，`const` 才是不可變的常數，`let` 則允許重新賦值
> 
> ### 小結
> 
> - JavaScript 的 `let` 和 `var`：`let` 是區塊作用域，而 `var` 是函數作用域。`let` 在許多方面比 `var` 更安全，因為它避免了許多與作用域提升相關的問題
> - Swift 的 `let` 和 `var`：兩者都是區塊作用域，`let` 是不可變的常數，`var` 是可變變數