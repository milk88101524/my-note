---
sidebar_label: "Array"
sidebar_position: 4
---

# Array

---

在 JavaScript 中，`Array` 是一種用來存儲多個值的資料結構。它可以儲存任何類型的數據（例如數字、字串、物件、甚至是其他陣列），並以有序的方式組織數據。陣列的索引從 `0` 開始，因此第一個元素的索引是 `0`

## 宣告陣列

可以用兩種主要的方式來定義陣列：

1. 使用方括號 `[]`：

	```
	let fruits = ["apple", "banana", "orange"];
	```

2. 使用 `Array` 構造函數：

	```
	let fruits = new Array("apple", "banana", "orange");
	```

## 陣列的基本特性

- 索引 (Indexing)：每個元素都以一個整數索引進行存取。陣列索引從 `0` 開始。

	```
	let fruits = ["apple", "banana", "orange"];
	console.log(fruits[0]);  // "apple"
	console.log(fruits[2]);  // "orange"
	```

- 長度 (`length`)：可以通過 `.length` 屬性來獲取陣列中的元素個數

	```
	let fruits = ["apple", "banana", "orange"];
	console.log(fruits.length);  // 3
	```

- 動態擴展：JavaScript 中的陣列可以動態增長，你可以隨時添加新的元素

	```
	let fruits = ["apple", "banana"];
	fruits[2] = "orange";
	console.log(fruits);  // ["apple", "banana", "orange"]
	```

- 混合數據類型：陣列可以存儲不同類型的數據

	```
	let mixedArray = [42, "hello", true, { name: "Alice" }];
	```

## 常用的陣列操作方法

- `push()`：在陣列的末尾添加一個或多個元素，並返回新陣列的長度

	```
	let fruits = ["apple", "banana"];
	fruits.push("orange");
	console.log(fruits);  // ["apple", "banana", "orange"]
	```

- `pop()`：移除陣列的最後一個元素，並返回被移除的元素

	```
	let fruits = ["apple", "banana", "orange"];
	let lastFruit = fruits.pop();
	console.log(fruits);      // ["apple", "banana"]
	console.log(lastFruit);   // "orange"
	```

- `unshift()`：在陣列的開頭添加一個或多個元素，並返回新陣列的長度

	```
	let fruits = ["banana", "orange"];
	fruits.unshift("apple");
	console.log(fruits);  // ["apple", "banana", "orange"]
	```

- `shift()`：移除並返回陣列的第一個元素

	```
	let fruits = ["apple", "banana", "orange"];
	let firstFruit = fruits.shift();
	console.log(fruits);      // ["banana", "orange"]
	console.log(firstFruit);  // "apple"
	```

- `indexOf()`：返回指定元素在陣列中的第一個匹配索引，若找不到則返回 `-1`

	```
	let fruits = ["apple", "banana", "orange"];
	console.log(fruits.indexOf("banana"));  // 1
	console.log(fruits.indexOf("grape"));   // -1
	```

- `includes()`：判斷陣列是否包含指定元素，返回 `true` 或 `false`

	```
	let fruits = ["apple", "banana", "orange"];
	console.log(fruits.includes("banana"));  // true
	console.log(fruits.includes("grape"));   // false
	```

- `forEach()`：遍歷陣列中的每個元素並執行一個函數

	```
	let fruits = ["apple", "banana", "orange"];
	fruits.forEach((fruit) => {
	  console.log(fruit);
	});
	// 輸出：
	// "apple"
	// "banana"
	// "orange"
	```

- `slice()`：返回一個新陣列，包含從起始索引到結束索引（不包括結束索引）之間的元素。原陣列不變

	```
	let fruits = ["apple", "banana", "orange", "grape"];
	let slicedFruits = fruits.slice(1, 3);
	console.log(slicedFruits);  // ["banana", "orange"]
	```

- `splice()`：可以用來添加、刪除或替換陣列中的元素。它會修改原始陣列
    
    - 刪除元素：

		```
		let fruits = ["apple", "banana", "orange"];
		fruits.splice(1, 1);  // 從索引 1 開始刪除 1 個元素
		console.log(fruits);  // ["apple", "orange"]
		```

    - 添加元素：

		```
		let fruits = ["apple", "orange"];
		fruits.splice(1, 0, "banana");
		// 在索引 1 處插入 "banana"
		
		console.log(fruits);
		// ["apple", "banana", "orange"]
		```

- `concat()`：合併多個陣列，返回一個新陣列。原陣列不變

	```
	let fruits = ["apple", "banana"];
	let moreFruits = ["orange", "grape"];
	let combined = fruits.concat(moreFruits);
	console.log(combined);  // ["apple", "banana", "orange", "grape"]
	```

- `sort()`：對陣列進行排序。會直接修改原陣列。注意，`sort()` 會將元素轉換為字串後進行比較，這可能會導致數字排序不正確

	```
	let fruits = ["banana", "apple", "orange"];
	fruits.sort();
	console.log(fruits);  // ["apple", "banana", "orange"]
	```

    若要正確地對數字進行排序，需要傳入比較函數：

	```
	let numbers = [10, 5, 40, 25];
	numbers.sort((a, b) => a - b);
	console.log(numbers);  // [5, 10, 25, 40]
	```

- `reverse()`：反轉陣列中的元素順序

	```
	let fruits = ["apple", "banana", "orange"];
	fruits.reverse();
	console.log(fruits);  // ["orange", "banana", "apple"]
	```

- `map()`：對陣列中的每個元素應用一個函數，並返回一個新陣列。原陣列不變

	```
	let numbers = [1, 2, 3];
	let doubled = numbers.map((num) => num * 2);
	console.log(doubled);  // [2, 4, 6]
	```

- `filter()`：返回一個新陣列，包含所有通過測試函數的元素

	```
	let numbers = [1, 2, 3, 4, 5];
	let evens = numbers.filter((num) => num % 2 === 0);
	console.log(evens);  // [2, 4]
	```

- `reduce()`：將陣列中的元素匯總為單一值，從左到右執行。它接受一個累加器和當前值作為參數

	```
	let numbers = [1, 2, 3, 4];
	let sum = numbers.reduce((acc, num) => acc + num, 0);
	console.log(sum);  // 10
	```

## 多維陣列

陣列可以包含其他陣列，形成多維陣列。例如，以下是二維陣列：

```
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][2]);  // 6
```