---
sidebar_label: "Object"
sidebar_position: 5
---

# Object

---

在 JavaScript 中，`Object` 是一個用來儲存鍵值對的資料結構。物件是 JavaScript 中非常重要的資料類型，幾乎所有東西都可以視為物件，像函數、陣列也都是物件的一種形式

## 物件的宣告

可以用兩種主要方式來宣告物件：

1. 物件字面量：

	```
	let person = {
	  name: "John",
	  age: 30,
	  isEmployed: true
	};
	```

2. 使用 `new Object()`：

	```
	let person = new Object();
	person.name = "John";
	person.age = 30;
	person.isEmployed = true;
	```

## 物件的基本特性

- 屬性 (Properties)：物件是一組鍵值對，每個鍵稱為「屬性名」，每個值稱為「屬性值」。屬性名可以是字串或符號，屬性值可以是任意類型的數據（數字、字串、函數等）

	```
	let person = {
	  name: "John",
	  age: 30
	};
	console.log(person.name);  // "John"
	console.log(person["age"]);  // 30
	```

- 動態添加屬性：你可以隨時給物件添加新的屬性

	```
	person.isEmployed = true;
	console.log(person);  // {name: "John", age: 30, isEmployed: true}
	```

- 刪除屬性：可以使用 `delete` 關鍵字來移除物件的屬性

	```
	delete person.age;
	console.log(person);  // {name: "John", isEmployed: true}
	```

## 訪問屬性

有兩種方式來訪問物件的屬性：

1. 點標記法 (Dot Notation)：

	```
	console.log(person.name);  // "John"
	```

2. 方括號表示法 (Bracket Notation)：方括號內需要用引號表示屬性名

	```
	console.log(person["age"]);  // 30
	```

    使用方括號的好處是，屬性名可以是變數或包含特殊字符：

	```
	let key = "name";
	console.log(person[key]);  // "John"
	```

## 常用物件操作方法

- `for...in` 迴圈：用來遍歷物件的所有可枚舉屬性

	```
	let person = { 
		name: "John", 
		age: 30, 
		isEmployed: true 
	};
	
	for (let key in person) {
	  console.log(key + ": " + person[key]);
	}
	// 輸出：
	// name: John
	// age: 30
	// isEmployed: true
	```

- `Object.keys()`：返回一個包含物件所有屬性名的陣列

	```
	let person = { name: "John", age: 30 };
	let keys = Object.keys(person);
	console.log(keys);  // ["name", "age"]
	```

- `Object.values()`：返回一個包含物件所有屬性值的陣列

	```
	let person = { name: "John", age: 30 };
	let values = Object.values(person);
	console.log(values);  // ["John", 30]
	```

- `Object.entries()`：返回一個包含物件所有鍵值對的陣列，陣列的每個元素都是一個二元陣列（屬性名和屬性值）

	```
	let person = { name: "John", age: 30 };
	let entries = Object.entries(person);
	console.log(entries);  
	// [["name", "John"], ["age", 30]]
	```

- `Object.assign()`：可以將一個或多個物件的屬性複製到一個目標物件

	```
	let target = {};
	let source = { name: "John", age: 30 };
	Object.assign(target, source);
	console.log(target);  // { name: "John", age: 30 }
	```

- 擴展運算符 (`...`)：也可以用來快速複製物件的屬性

	```
	let person = { name: "John", age: 30 };
	let copy = { ...person };
	console.log(copy);  // { name: "John", age: 30 }
	```

物件中的屬性值可以是函數，這些屬性稱為方法

```
let person = {
  name: "John",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet();  // "Hello, my name is John"
```

`this` 關鍵字用來指代當前的物件。在這個例子中，`this.name` 代表 `person.name`

- `Object.assign()`：將兩個或更多物件合併到一個目標物件中

	```
	let person = { name: "John" };
	let details = { age: 30, isEmployed: true };
	let merged = Object.assign({}, person, details);
	console.log(merged);  // { name: "John", age: 30, isEmployed: true }
	```

- 擴展運算符 (`...`)：可以用來合併物件

	```
	let person = { name: "John" };
	let details = { age: 30, isEmployed: true };
	let merged = { ...person, ...details };
	console.log(merged);  // { name: "John", age: 30, isEmployed: true }
	```

可以用解構賦值的方式將物件的屬性賦值給變數

```
let person = { name: "John", age: 30 };
let { name, age } = person;
console.log(name);  // "John"
console.log(age);   // 30
```

如果物件中有其他物件或陣列，進行複製時需要考慮深拷貝問題。簡單的 `Object.assign()` 或擴展運算符只會做淺拷貝。如果需要深拷貝，可以使用 `JSON` 的方法或專用的深拷貝工具庫

```
let person = { name: "John", details: { age: 30 } };
let deepCopy = JSON.parse(JSON.stringify(person));
```