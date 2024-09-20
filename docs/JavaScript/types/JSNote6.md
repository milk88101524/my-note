---
sidebar_label: "Number"
sidebar_position: 2
---

# Number

---

`number` 是一種用來表示數值的**原始資料型別** (primitive data type)。JavaScript 的 `number` 型別可以表示整數、浮點數 (小數)，以及一些特殊數值如 `Infinity`、`-Infinity` 和 `NaN`（Not-a-Number）

## 單一的數字型別

在 JavaScript 中，無論是整數還是小數，都屬於同一種型別 `number`。不像某些語言（如 Java 或 C++），有單獨的 `int`（整數）和 `float`（浮點數）型別
	
```
let integer = 10;       // 整數
let float = 10.5;       // 浮點數
```
	
## 浮點數精度

JavaScript 中的數字是基於 IEEE 754 標準的 64 位元浮點數表示法。這意味著它能表示非常大的數字以及帶小數的數字，但有時會因為精度問題導致不準確的計算結果

例如，計算時會出現微小誤差：
		
```
console.log(0.1 + 0.2);  // 0.30000000000000004
```
    
## 範圍

JavaScript 的 `number` 可以表示的範圍非常大，可以支持的最小和最大數值範圍如下：

- 最大值：`Number.MAX_VALUE` (~1.7976931348623157 × 10^308)
- 最小值：`Number.MIN_VALUE` (~5 × 10^-324)

	如果數值超出此範圍，會變成 `Infinity` 或 `-Infinity`

	```
	console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
	console.log(Number.MIN_VALUE); // 5e-324
	```
    
## 特殊數值

- `Infinity`：表示無限大，當數字超過最大範圍時會得到此值

	```
	console.log(1 / 0);  // Infinity
	```

- `NaN` (Not-a-Number)：表示一個無效的數值，當進行無效的數值運算時會得到此值
    
	```
	console.log("hello" * 2);  // NaN
	```

## 數值方法

- `Number.isNaN()`：檢查一個值是否是 `NaN`
- `Number.isFinite()`：檢查一個值是否是有限數值
- `toFixed()`：可以用來限制小數點後的位數
	
	```
	let num = 5.6789;
	console.log(num.toFixed(2));  // 5.68
	```

## 數值轉換

JavaScript 提供了一些方法將其他型別轉換為數值：
- `parseInt()`：將字串轉換為整數
- `parseFloat()`：將字串轉換為浮點數

	```
	let intFromString = parseInt("10");    // 10
	let floatFromString = parseFloat("10.5"); // 10.5
	```
	
JavaScript 中的 `number` 型別覆蓋了整數和浮點數，並且能處理極大和極小的數值，但由於使用浮點數表示法，會出現一些精度問題