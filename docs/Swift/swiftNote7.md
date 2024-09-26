---
sidebar_label: "三元運算符"
sidebar_position: 7
---

# 三元運算符

---

三元運算符（Ternary Operator）是一種簡潔的條件表達式，允許你在一行代碼中根據一個布林表達式的結果來選擇兩個值中的一個

```
condition ? value_if_true : value_if_false;
```

- `condition`：Boolean 表達式，如果為 `true`，則選擇 `value_if_true`，否則選擇 `value_if_false`
- `value_if_true`：如果條件為 `true`，返回此值
- `value_if_false`：如果條件為 `false`，返回此值

範例

```
int a = 10;
int b = 20;
int max = (a > b) ? a : b;  // max will be 20
```

在這個例子中，如果 `a` 大於 `b`，則 `max` 變量將被設置為 `a` 的值，否則將設置為 `b` 的值

## 與其他條件語句的比較

三元運算符的功能類似於 `if-else` 語句，但更加緊湊。舉個例子，如果用 `if-else` 語句來實現上述邏輯

```
int a = 10;
int b = 20;
int max;
if (a > b) {
    max = a;
} else {
    max = b;
}
```

## 其他類似功能的特性和工具

以下是一些具有類似功能或用於簡化條件邏輯的特性和工具

1. `Optional` 類（Java 8 引入）
	- `Optional` 是一個容器類，表示一個值存在或不存在。常用於避免空指針異常（NullPointerException）

	```
	Optional<String> optionalString = Optional.ofNullable(possibleNullString);
	String result = optionalString.orElse("defaultString");
	```

2. `switch` 語句
	- `switch` 語句根據一個表達式的值來選擇執行哪個分支。通常用於多分支的情況
	
	```
	int day = 3;
	String dayName;
	switch (day) {
	    case 1: dayName = "Sunday"; break;
	    case 2: dayName = "Monday"; break;
	    case 3: dayName = "Tuesday"; break;
	    // Other cases...
	    default: dayName = "Invalid day"; break;
	}
	```

3. `if-else` 語句
	- 經典的條件語句，適用於執行不同代碼塊的情況
	```
	int number = 5;
	if (number > 0) {
	    System.out.println("Positive number");
	} else if (number < 0) {
	    System.out.println("Negative number");
	} else {
	    System.out.println("Zero");
	}
	```

## 使用三元運算符的注意事項

1. 簡單情況使用：三元運算符適合簡單的條件判斷和賦值操作，過於複雜的情況下使用會降低代碼可讀性
2. 避免嵌套：嵌套使用三元運算符會使代碼變得難以理解，應該避免
3. 代碼可讀性：如果一行代碼過於複雜，應考慮使用 `if-else` 語句來提高可讀性

三元運算符是一個非常有用的工具，可以讓代碼更簡潔，但需要注意保持代碼的可讀性