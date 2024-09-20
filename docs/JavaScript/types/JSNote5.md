---
sidebar_label: "String"
sidebar_position: 1
---

# String

---

在 JavaScript 中，`String` 是一個用來表示文字的**原始資料型別** (primitive data type)。字串是一連串的字符，用單引號 (`'`) 或雙引號 (`"`) 或反引號 (`` ` ``) 包圍表示。字串是不可變的，這意味著一旦創建後，它們不能被直接修改，但可以創建新的字串

## 宣告字串

可以用三種方式來定義字串：

- 單引號 (`'`):

	```
	let singleQuoteString = 'Hello, world!';
	```

- 雙引號 (`"`):

	```
	let doubleQuoteString = "Hello, world!";
	```

- 反引號 (Template literals 或 Template strings):

	```
	let backtickString = `Hello, world!`;
	```

## 字串的特性

1. 不可變 (Immutable)：
	- JavaScript 中的字串是不可變的。當操作一個字串時，其實是創建了一個新的字串，原來的字串不會被更改
    - 例如，當嘗試修改字串中的某個字元時，這樣是無效的：

		```
		let str = "Hello";
		str[0] = "h";  // 這樣不會改變字串，str 還是 "Hello"
		```
        
2. 字串長度：
    - 使用 `.length` 屬性來取得字串的長度

		```
		let str = "Hello";
		console.log(str.length);  // 5
		```

3. 字串中的字元：
    - 可以透過索引來存取字串中的每個字元，索引從 `0` 開始

		```
		let str = "Hello";
		console.log(str[0]);  // H
		console.log(str[4]);  // o
		```

## 字串的操作

1. 串接 (Concatenation)：
    - 可以使用 `+` 運算符來串接字串

		```
		let greeting = "Hello, " + "world!";
		console.log(greeting);  // "Hello, world!"
		```

2. 模板字串 (Template Literals)：
    - 使用反引號 (`` ` ``) 和 `${}` 插值變數或表達式到字串中，這使得拼接字串更為方便

		```
		let name = "Alice";
		let greeting = `Hello, ${name}!`;
		console.log(greeting);  // "Hello, Alice!"
		```

3. 字串方法 (String Methods)：
    - `toUpperCase()`：將字串轉換為大寫

		```
		let str = "hello";
		console.log(str.toUpperCase());  // "HELLO"
		```

    - `toLowerCase()`：將字串轉換為小寫

		```
		let str = "HELLO";
		console.log(str.toLowerCase());  // "hello"
		```

    - `trim()`：移除字串前後的空白字符

		```
		let str = "   Hello   ";
		console.log(str.trim());  // "Hello"
		```

    - `indexOf()`：找到子字串在字串中的索引，找不到時返回 `-1`

		```
		let str = "Hello, world!";
		console.log(str.indexOf("world"));  // 7
		```

    - `slice()`：提取字串的一部分，返回一個新的字串。它接受兩個參數：開始位置和結束位置（不包括結束位置）

		```
		let str = "Hello, world!";
		console.log(str.slice(0, 5));  // "Hello"
		```

    - `substring()` 和 `substr()`：類似於 `slice()`，但 `substring()` 不接受負數參數，`substr()` 允許指定長度而不是結束位置

		```
		let str = "Hello, world!";
		console.log(str.substring(0, 5));  // "Hello"
		console.log(str.substr(7, 5));     // "world"
		```

    - `replace()`：將匹配到的子字串替換為另一個字串。僅替換第一個匹配項

		```
		let str = "Hello, world!";
		let newStr = str.replace("world", "JavaScript");
		console.log(newStr);  // "Hello, JavaScript!"
		```

    - `split()`：將字串拆分為陣列，根據給定的分隔符

		```
		let str = "apple, banana, orange";
		let fruits = str.split(", ");
		console.log(fruits);  // ["apple", "banana", "orange"]
		```

4. 檢查字串包含的內容：
    
    - `includes()`：檢查字串中是否包含某個子字串，返回 `true` 或 `false`

		```
		let str = "Hello, world!";
		console.log(str.includes("world"));  // true
		```

    - `startsWith()` 和 `endsWith()`：檢查字串是否以某個子字串開頭或結尾

		```
		let str = "Hello, world!";
		console.log(str.startsWith("Hello"));  // true
		console.log(str.endsWith("world!"));   // true
		```


## 字串的轉換

- `parseInt()` 和 `parseFloat()`：可以將字串轉換為數字類型。如果字串中有數字，`parseInt()` 可以提取整數，`parseFloat()` 可以提取浮點數

	```
	let str = "123";
	let num = parseInt(str);  // 123
	let floatNum = parseFloat("123.45");  // 123.45
	```

- `toString()`：將其他類型的數據轉換為字串

	```
	let num = 123;
	let str = num.toString();  // "123"
	```

## 字串中的特殊字符

JavaScript 支援一些特殊字符，可以通過反斜槓 (`\`) 進行轉義

- `\n`：換行符
- `\t`：水平製表符
- `\'`：單引號
- `\"`：雙引號
- `\\`：反斜槓

```
let str = "Hello\nworld!";
console.log(str);  // 輸出會換行，變為
// Hello
// world!
```

## 總結

- 字串是不可變的：不能直接更改一個字串中的某個字符
- 字串方法：JavaScript 提供了多種處理字串的方法，如 `slice()`, `replace()`, `toUpperCase()` 等
- 模板字串 (Template Literals)：使用反引號（`` ` ``）可以進行字串插值和多行字串，這是 ES6 的新功能，使得字串操作更加方便