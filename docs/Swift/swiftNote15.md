---
sidebar_label: "computed property"
sidebar_position: 15
---

# computed property

---

在定義一個 class 或 struct 時，我們都會去定義他的 property 

```
class Square {
	var width: Double = 0
	var area: Double = 0
}
```

例如 `Square` 中的 `width` 跟 `area` ，而這兩個是屬於 `stored property`，還有一個是 `computed property`

計算屬性（computed properties）是屬性的一種，它們不直接存儲值，而是通過計算來提供值。計算屬性可以定義在類、結構體和枚舉中，它們使用 getter 和可選的 setter 來檢索和設置其他屬性或變量的值

## 定義計算屬性

計算屬性使用 getter 來計算和返回值，並且可以選擇性地使用 setter 來設置新的值。

### 只讀計算屬性

只讀計算屬性只有 getter

```
struct Rectangle {
    var width: Double
    var height: Double
    
    var area: Double {
        return width * height
    }
}

let rect = Rectangle(width: 10, height: 5)
print("Area of rectangle: \(rect.area)")  // 打印 "Area of rectangle: 50.0"
```

在這個例子中，`area` 是一個只讀計算屬性，通過計算 `width` 和 `height` 的乘積來返回矩形的面積

### 讀寫計算屬性

讀寫計算屬性同時具有 getter 和 setter

```
struct Rectangle {
    var width: Double
    var height: Double
    
    var area: Double {
        get {
            return width * height
        }
        set {
            // 假設給定的 newValue 是新的面積
            // 我們可以使用比例來調整 width 和 height
            // 為了簡單起見，這裡假設調整 width，並且保持 height 不變
            width = newValue / height
        }
    }
}

var rect = Rectangle(width: 10, height: 5)
print("Area of rectangle: \(rect.area)")  // 打印 "Area of rectangle: 50.0"

rect.area = 100
print("New width of rectangle: \(rect.width)")  // 打印 "New width of rectangle: 20.0"
```

在這個例子中，`area` 是一個讀寫計算屬性，getter 返回矩形的面積，setter 接受一個新的面積值並調整 `width` 來滿足這個新面積

## 簡化的 getter

如果 getter 沒有參數，並且只有一個表達式，可以省略 `get` 關鍵字

```
struct Rectangle {
    var width: Double
    var height: Double
    
    var area: Double {
        return width * height
    }
}

let rect = Rectangle(width: 10, height: 5)
print("Area of rectangle: \(rect.area)")  // 打印 "Area of rectangle: 50.0"
```

## 使用計算屬性的場景

計算屬性在以下情況下特別有用：

1. 當屬性值依賴於其他屬性時，可以動態計算
2. 當需要提供一些邏輯來確保屬性值的有效性時
3. 當不需要存儲屬性值時，可以節省內存

## 總結

計算屬性是一種不直接存儲值，而是通過計算來提供值的屬性。它們可以有 getter 和可選的 setter，並且可以在類、結構體和枚舉中使用。計算屬性有助於提供動態計算值、確保屬性值的有效性以及節省內存。通過靈活使用計算屬性，可以使代碼更加簡潔和易於維護