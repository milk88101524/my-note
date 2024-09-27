---
sidebar_label: "Property Observer"
sidebar_position: 16
---

# property observer

屬性觀察器（property observers）允許在屬性的值被設置之前和之後執行一些自定義的代碼。屬性觀察器可以添加到存儲屬性中，或在子類中重寫繼承的屬性。它們有助於監視和響應屬性值的變化

## 屬性觀察器的類型

Swift 提供了兩種類型的屬性觀察器：
	1. `willSet`: 在新的值被設置之前調用
	2. `didSet`: 在新的值被設置之後調用

## 使用屬性觀察器

下面是如何在一個存儲屬性中使用屬性觀察器的例子

```
class StepCounter {
    var totalSteps: Int = 0 {
        willSet(newTotalSteps) {
            print("即將設置 totalSteps 為 \(newTotalSteps)")
        }
        didSet {
            if totalSteps > oldValue {
                print("增加了 \(totalSteps - oldValue) 步")
            }
        }
    }
}

let stepCounter = StepCounter()
stepCounter.totalSteps = 200
// 打印: 即將設置 totalSteps 為 200
// 打印: 增加了 200 步

stepCounter.totalSteps = 360
// 打印: 即將設置 totalSteps 為 360
// 打印: 增加了 160 步

stepCounter.totalSteps = 896
// 打印: 即將設置 totalSteps 為 896
// 打印: 增加了 536 步
```

在這個例子中，`totalSteps` 屬性有兩個觀察器：`willSet` 和 `didSet`。當 `totalSteps` 被賦予新值時，`willSet` 會打印即將設置的新值，而 `didSet` 會檢查新值是否比舊值大，如果是，則打印增加的步數

## 屬性觀察器的用途

屬性觀察器可以用來執行多種任務，例如：
	1. 驗證數據：在值設置之前或之後驗證數據的有效性
	2. 調整 UI：根據屬性值的變化來更新用戶界面
	3. 觸發其他任務：在屬性值改變時觸發其他任務或計算
	4. 日誌記錄：記錄屬性值的變化，用於調試和分析

## 在繼承中使用屬性觀察器

當在子類中重寫繼承的屬性時，也可以添加屬性觀察器

```
class Person {
    var age: Int {
        willSet {
            print("Person will set age to \(newValue)")
        }
        didSet {
            print("Person did set age from \(oldValue) to \(age)")
        }
    }
    
    init(age: Int) {
        self.age = age
    }
}

class Employee: Person {
    override var age: Int {
        willSet {
            print("Employee will set age to \(newValue)")
        }
        didSet {
            print("Employee did set age from \(oldValue) to \(age)")
        }
    }
}

let employee = Employee(age: 25)
employee.age = 30
// 打印: Employee will set age to 30
// 打印: Person will set age to 30
// 打印: Person did set age from 25 to 30
// 打印: Employee did set age from 25 to 30
```

在這個例子中，`Employee` 類重寫了 `Person` 類的 `age` 屬性，並添加了自己的屬性觀察器。當 `age` 的值被設置時，會依次調用 `Employee` 和 `Person` 的 `willSet` 和 `didSet` 觀察器

## 總結

屬性觀察器是 Swift 中的一種強大功能，它們允許在屬性值改變時執行自定義的代碼。通過使用 `willSet` 和 `didSet` 觀察器，可以監視和響應屬性值的變化，這在驗證數據、更新 UI、觸發其他任務以及日誌記錄等方面非常有用。屬性觀察器還可以在繼承中重寫，以實現更多的自定義行為