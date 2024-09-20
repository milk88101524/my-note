---
sidebar_label: "typeof"
sidebar_position: 6
---

# typeof

---

在 JavaScript 中，`typeof` 是一個運算子，用來判斷一個變數或表達式的類型。它會返回一個表示數據類型的字串，例如 `"string"`、`"number"`、`"object"` 等

## 基本用法

`typeof` 用來檢查變數的類型，語法如下：

```
typeof expression // 表達;
```

它返回的結果是一個字串，表示變數或表達式的類型。例如：

```
console.log(typeof 42);          // "number"
console.log(typeof 'Hello');     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof { name: 'John' });  // "object"
console.log(typeof [1, 2, 3]);   
// "object" (因為陣列是物件的一種)

console.log(typeof null);
// "object" (這是歷史遺留的設計錯誤)
```

## 返回值

`typeof` 可以返回以下幾種值：

- `undefined`：當一個變數沒有賦值時，它的類型是 `undefined`

	```
	let x;
	console.log(typeof x);  // "undefined"
	```

- `boolean`：布林值的類型

	```
	let isTrue = true;
	console.log(typeof isTrue);  // "boolean"
	```

- `number`：數值的類型，包括整數和浮點數。JavaScript 中沒有區分整數和浮點數

	```
	console.log(typeof 42);     // "number"
	console.log(typeof 3.14);   // "number"
	```

- `string`：字串的類型

	```
	let name = "John";
	console.log(typeof name);  // "string"
	```

- `object`：物件類型，包含物件、陣列、`null` 等。需要注意，`null` 也是 `object` 類型，這是一個歷史上的錯誤，但已無法修正

	```
	console.log(typeof {name: 'John'});  // "object"
	console.log(typeof [1, 2, 3]);       // "object"
	console.log(typeof null);            // "object"
	```

- `function`：函數是一種特殊的物件，`typeof` 會返回 `"function"`

	```
	function greet() { return "Hello"; }
	console.log(typeof greet);  // "function"
	```

- `symbol`：ES6 引入的 `Symbol`，是一種新的原始資料類型，用於創建唯一的值

	```
	let sym = Symbol();
	console.log(typeof sym);  // "symbol"
	```

- `bigint`：ES2020 引入的 `BigInt`，用於表示超大數字
	
	```
	let bigNumber = BigInt(12345678901234567890);
	console.log(typeof bigNumber);  // "bigint"
	```

## 特殊情況

- `null`：雖然 `null` 表示「空」或「無值」，但 `typeof null` 會返回 `"object"`。這是 JavaScript 語言初期的一個設計錯誤，不過這個行為已經被保留下來

	```
	console.log(typeof null);  // "object"
	```

- 陣列：在 JavaScript 中，陣列也是物件的一種，所以 `typeof` 陣列會返回 `"object"`

	```
	console.log(typeof [1, 2, 3]);  // "object"
	```

    如果要檢查一個變數是否為陣列，應該使用 `Array.isArray()`

	```
	console.log(Array.isArray([1, 2, 3]));  // true
	```

## 應用場景

- 檢查未定義的變數：可以用來檢查變數是否已被定義，因為對於未定義的變數，`typeof` 也不會拋出錯誤

	```
	console.log(typeof someVariable);  // "undefined"
	```

- 動態類型檢測：在 JavaScript 中變數是動態類型的，`typeof` 可以幫助檢查變數的當前類型
    
- 檢查傳入的參數類型：在函數中，可以使用 `typeof` 來檢查傳入參數的類型

	```
	function checkType(value) {
	  if (typeof value === 'string') {
	    console.log("It's a string");
	  } else if (typeof value === 'number') {
	    console.log("It's a number");
	  } else {
	    console.log("Unknown type");
	  }
	}
	
	checkType(123);     // It's a number
	checkType("Hello"); // It's a string
	```

## `typeof` 與其他類型檢查

`typeof` 是用來檢查原始數據類型的簡單工具，但是對於一些更複雜的情況，可能需要搭配其他方法來檢查類型

- `instanceof`：用來檢查物件的原型鏈上是否有特定的建構函數

	```
	let date = new Date();
	console.log(date instanceof Date);  // true
	```

- `Array.isArray()`：用來檢查一個變數是否為陣列

	```
	let arr = [1, 2, 3];
	console.log(Array.isArray(arr));  // true
	```