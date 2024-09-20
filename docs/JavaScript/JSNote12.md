---
sidebar_label: "function / method"
sidebar_position: 7
---

# function / method

---

JavaScript 中的 `function`（函數）是程式中的一等公民，這意味著函數可以像變數一樣被定義、賦值、作為參數傳遞，以及作為回傳值。函數是一段可以重複使用的代碼塊，通常用來執行特定的任務

### 1. 基本函數定義

最常見的定義函數方式是使用 `function` 關鍵字：

```
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice");  // 輸出: Hello, Alice!
```

說明：

- `function` 是用來定義函數的關鍵字
- `greet` 是函數的名稱
- `name` 是參數，這是函數在執行時傳遞的值
- `console.log()` 是函數體內的語句，它會在函數執行時運行

### 2. 函數的返回值

函數可以使用 `return` 關鍵字來返回一個值：

```
function add(a, b) {
  return a + b;
}
let sum = add(3, 4);  // sum 是 7
```

- `return` 用來指定函數的返回值，當函數執行到 `return` 語句時，它會結束並將值返回

### 3. 函數參數

- JavaScript 的函數可以接收多個參數，也可以不接收參數
- 若傳入的參數比函數定義的多，則多出來的參數會被忽略；若傳入的參數不足，未指定的參數會是 `undefined`

```
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3));  // 6
console.log(multiply(2));     // NaN (因為 b 是 undefined)
```

### 4. 函數表達式

除了使用 `function` 關鍵字定義函數外，函數也可以作為表達式賦值給變數，這稱為函數表達式：

```
const greet = function(name) {
  console.log("Hello, " + name);
};
greet("Bob");  // Hello, Bob
```

### 5. 匿名函數

匿名函數是沒有名稱的函數，可以作為表達式賦值或直接使用：

```
const sayHi = function() {
  console.log("Hi");
};
sayHi();  // Hi
```

### 6. 箭頭函數 (Arrow Function)

箭頭函數是 ES6 引入的一種更簡潔的函數定義語法。語法如下：

```
const greet = (name) => {
  console.log("Hello, " + name);
};
greet("Charlie");  // Hello, Charlie
```

- 如果箭頭函數只有一個參數，括號可以省略：

	```
	const greet = name => console.log("Hello, " + name);
	```

- 如果函數體只有一行，並且返回值，可以省略大括號和 `return`：

	```
	const add = (a, b) => a + b;
	console.log(add(2, 3));  // 5
	```

### 7. 函數作為值

在 JavaScript 中，函數是一等公民，所以函數可以被賦值給變數、作為其他函數的參數，或者作為返回值

#### 7.1 函數作為參數傳遞

```
function executeCallback(callback) {
  callback();
}

function sayHello() {
  console.log("Hello!");
}

executeCallback(sayHello);  // Hello!
```

#### 7.2 函數作為返回值

```
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const multiplyByTwo = createMultiplier(2); 
// 這裡的 multiplyByTwo 是一個函數，它記住了 factor 是 2

console.log(multiplyByTwo(5));
// 這個函數會將 number * 2，輸出 10
```

### 8. 高階函數 (Higher-Order Function)

高階函數是指接受函數作為參數或返回函數的函數。這在 JavaScript 中非常常見，尤其是在陣列操作中，如 `map()`、`filter()`、`reduce()`

```
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]
```

### 9. IIFE (Immediately Invoked Function Expression)

IIFE 是指立即執行的函數表達式，語法如下：

```
(function() {
  console.log("This function runs immediately!");
})();
```

這種函數在定義後會立即被執行，常用於建立單獨的作用域，避免變數污染全局空間

### 10. 函數的作用域 (Scope)

- 全局作用域 (Global Scope)：在所有地方都可以存取的變數
- 局部作用域 (Local Scope)：函數內部的變數，僅在函數內部可存取
- 閉包 (Closure)：當內部函數「記住」了外部函數的變數時，閉包會出現

```
function outer() {
  let outerVar = "I'm from outer";
  return function inner() {
    console.log(outerVar);
  };
}
const innerFunc = outer();
innerFunc();  // "I'm from outer"
```

### 11. 預設參數

在 ES6 中，可以為函數的參數指定預設值：

```
function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet();       // Hello, Guest
greet("Alice");  // Hello, Alice
```