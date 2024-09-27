---
sidebar_position: 2
---

# Kotlin 語法

---

## 1. 變數宣告

var: 該變數可改變
val: 如同JAVA 中的final 該變數不可改變

`var/val variableName: Type = value`
var 用於聲明一個可變的變數，而 val 用於聲明一個不可變的變數（相當於 Java 中的 final）
variableName 是變數的名稱
Type 是變數的數據類型，可以使用顯式類型聲明（如 String、Int、Double 等）或者省略，讓 Kotlin透過上下文自動推斷類型
value 是變數的初始值

因此，在 Kotlin 中，你是在變數後面使用 : 來指定類型，而不是在前面

> 關鍵字、自動推倒，要注意幾點：
> var 類型推導完成後，不可再賦予其他類型
> val 必須賦予值，並且不能再對其變量進行更改，否則編譯器會提是 Val cannot be reassigned 錯誤   
> 
> 自動推導並非每次都有用，若是我們對一個變量延遲賦值，Kotlin 就無法自動推倒其類型，這時可以使用 : 指定
> // lateinit 延遲初始化，就必須指定參數類型
> lateinit var name: String
> Kotlin 內所的事物皆為對象，也就是 沒有基礎數據類型 (其實也就是將 Java 每一個數據類型開頭改為大寫)

| Java 基礎數據類型 | Kotlin 對象數據類型 |
|:---:|:---:|
| boolean |Boolean |
| char | Char |
| byte | Byte |
| short	| Short |
| int | Int |
| long | Long |
| float | Float |
| double | Double |

## 2. if/else & when(jave的switch) 判斷

if 與 Java 不同的使用地方，其最大的不同在於 Kotlin 的 if 可以直接返回數值，並且不需要 return 關鍵字
	
### if/else 判斷

```
fun main() {
    var a : String = "Hello";
    val b : String = "World";
    println("Like Java: " + diffTextLikeJava(a, b));
    println("Kotlin: " + diffTextKotlin(a, b));
    
}

// Kotlin's if 可使用如同 Java's if
fun diffTextLikeJava(text1 : String, text2 : String) : String {
    if (text1 == text2) {
        return "true";
    } else {
        return "false";
    }
}

// Kotlin's if 可以有返回值!!
// 該返回值在代碼中的最後一行 (不須 return
fun diffTextKotlin (text1 : String, text2 : String) : String {
    return if(text1 == text2) {
        "true";
    } else {
        "false";
    }
}

fun useIfSimple(n1: Int, n2: Int) = if (n1 > n2) {
    "$n1 is Bigger"
} else {
    "$n2 is Bigger"  // return 不可以用在 = 符號
}
```

在 Kotlin 中，如果函式的主體只包含一個表達式，你可以使用單行表達式來定義函式，這種方式通常適用於簡單的函式。在你提供的程式碼中，
useIfSimple 函式就是一個單行表達式的例子。

這是如何工作的：

`fun useIfSimple(n1: Int, n2: Int)`
這是定義函式的開始，
宣告了函式名稱、參數和返回值類型（在這裡省略了返回值類型，Kotlin 可以根據表達式的結果自動推斷）。

=：這表示函式的主體將是一個表達式

`if (n1 > n2) { "$n1 is Bigger" } else { "$n2 is Bigger" }：`
這就是函式的主體。它是一個 if-else 表達式，根據條件的結果，返回不同的值。

因此，使用 = 後面接 if-else 表達式是 Kotlin 中定義單行表達式函式的一種方式，使得程式碼更簡潔易讀。


when 作為取代 switch 的關鍵字，並且 Kotlin 對其功能進行了拓展，

可以搭配 is 使用在類的判斷相當於 java instanceof(取代 case，並 省略了 break 關鍵字)，

並且最後使用 else (取代 default)，

when 語句如同 if 是可以有返回值
    
### when 代替 switch
```
fun useWhenSimple(id: Int) = when(id) {
    1 -> "A"
    2 -> {  // 超過一行時使用大括號
        "B"
    }
    3 -> "C"
    else -> "Non"   // like default
}

// when 可以配合 is 一起使用，相當於 Java 的 instanceof
fun useIs(id: Number) : Unit = when(id) {
    is Int -> println("Params is Int")
    is Double -> println("Params is Double")
    is Float -> println("Params is Float")
    else -> println("Cannot decide Type")
}

// 若要直接使用參數判斷，when 就不需要括弧，並且可以 對關鍵字進行操作
fun useWhenWithParams(id: Number) = when {
    id is Byte -> println("Params is Int")
    id == 11 -> println("Params is 11")
    id == 11.1 -> println("Params is 11.1")
    id.toFloat() == 1.0f -> {
        println("Params is 1.0f")
    }
    else -> println("Cannot decide Type")
}
```

 `==` 符號在 Java 中是用來判斷兩個內存地址是否相同，而Kotlin `==` 符號則是判斷對象、字串是否相同，相當於equals的方法

|功能| Java關鍵字 | Kotlin關鍵字 |
| :----------------------: |:----------:|:------------:|
| 對象是否相等(內容) | equals | == |
| 內存（記憶體）地址是否相等 | == | === |

> Kotlin 語法不支持 Java 中的三元運算符 `?:`，但可以使用 Kotlin 提供的 `if` 表達式來實現相同的效果。可以直接用 `if` 表達式來處理條件邏輯
> 
> 
> ```
> condition ? value_if_true : value_if_false;
> ```
> 這是 Java 中的三元運算符
> 在 Kotlin 實現三元運算符
> 
> 
> ```
> if (condition) {
> 	value_if_true
> } else {
> 	value_if_false
> }
> ```


## 3. 循環 & 區間 - 語法糖

### Array 陣列

陣列的宣告

- 一般宣告型態方式
	```
	var array: IntArray = intArrayOf(1, 2, 3)
	```
	
- 不需要宣告型態了, 因為後面都已經把型態標示出來, 就可以節省一些資訊
	```
	var array = intArrayOf(1,2,3)
	```
	
- 宣告各種型態的陣列
	```
	var iArray = intArrayOf(1, 2, 3)
	var fArray = floatArrayOf(1.0f, 2.0f, 3.0f)
	var bArray = booleanArrayOf(true, false, true)
	var cArray = charArrayOf('a', 'b', 'c')
	```

- 透過建構子傳入想要傳入的個數
	```
	var iArray = IntArray(3)
	iArray[0] = 4
	iArray[1] = 1
	iArray[2] = 7
	```

- 字串陣列，不是 stringArrayOf 宣告, 須透過 arrayOf 這個方法來進行宣告
	```
	var sArray = arrayOf("abc", "def", "ght")
	```

### for 迴圈

1. for 迴圈取得整個陣列全部值 `item > for(item in xxxArray)`
	```
	var iArray = intArrayOf(1, 2, 3)
	var sArray = arrayOf("abc", "def", "ght")
	
	for(item in iArray){
	    print("$item ")
	}
	
	結果：1 2 3
	
	for(item in sArray){
	    print("$item ")
	}
	
	結果：abc def ght
	```

2. for 迴圈取得索引值 `indices > for (i in xxxArray.indices)`
```
for (i in iArray.indices) {
    println("${iArray[i]}")
}
```

> array 的 indices 方法就是拿出索引值 透過存取 ${xxxArray[i]} 來存取到陣列內的值
> 
> 為什麼大括弧來包覆呢? 因為它必須透過 xxxArray 的 index 去存取值, 屬於運算的部分, 因此須透過大括弧包覆才能取到值, 否則只會取到 iArray[i] 所對應的位址而已

#### 語法糖

Kotlin 語言的特色之一，就是它有提供一系列優秀的「語法糖」，可以 有利於開發速度、可讀性！以下是 Kotlin 常用的 循環 & 區間 的關鍵字

在 Kotlin 中，帶有 ? 的參數表示它是可為 null 的（nullable）。這意味著你可以將這些參數設置為 null，並且函式的實現需要處理這些參數為 null 的情況。

|關鍵字(符號)|功能|
|:--:|:--|
|until|同樣是個區間，但是不包含最後一個元素 (左閉右開)|
|in|判斷是否符合在區間內，會配合著 .. 一起使用 (類似 Python)|
|..|區間，包含最後一個數字 (until 則不包含)|
|step|前進的數量|
|downTo|前面都是升序，downTo 則是降序讀取|

```
fun main() {
    println("3 in 0..10: ${3 in 0..10}")
    
    // 0..10 表示的是一個從 0 到 10（包含 0 和 10）的範圍，這個範圍包含了所有從 0 到 10 的整數
    println("3 in 0..10 step 2: ${3 in 0..10 step 2}")    // false
    
    // 0..10 step 2 表示的是以步長 2 遍歷的範圍，從 0 開始，每次增加 2，直到 10。換句話說，它會產生序列 0, 2, 4, 6, 8, 10
    println("3 in 0..10 step 3: ${3 in 0..10 step 3}")    // true
    
    // 10 downTo 0 step 3 表示的是以步長 3 遍歷的範圍，從 10 開始，每次減少 3，直到 0。換句話說，它會產生序列 10, 7, 4, 1。
    println("4 in 10 downTo 0 step 3: ${4 in 10 downTo 0 step 3}")    // true
}

// 若以java來表示為 : for (int i=0; i<=5; i++) {}
fun useForIn() {
    for (i in 0 .. 5) {
        println("$i")
    }
}

// 若以java來表示為 : for (int i=0; i<=5; i=i+2) {}
fun useForInStep() {
    for (i in 0 .. 5 step 2) {  // 一次前進 2
        println("Step: $i")
    }
}

// 達成左閉右開
// 若以java來表示為 : for (int i=0; i<5; i++) {}
fun useForInUntil() {
    for (i in 0 until 5) {  // 當然可以與 step 結合 (0 ~ 4)
        println("until: $i")
    }
}

// 區間 `..` & Until 都是 "升序"，downTo 則是降序
// 若以java來表示為 : for (int i=5; i >=0; i=+2) {}
fun useForInDownTo() {
    for (i in 5 downTo 0 step 2) {    // 區間 [10,0]，並配合 step 使用
        println("downTo: $i")
    }
}

// 指定次數的 For 迴圈會使用 in + until
fun forControl(times : Int = 10) {
    for (i in 0 until times) {
        // TODO:
    }
}

```

## 4. Companion object

在 Kotlin 中，`companion object` 是一種特殊的對象，它用來在類中實現類似靜態方法和靜態屬性的功能。以下是 `companion object` 的一些關鍵點：

### 什麼是 `companion object`？

1. 靜態方法和屬性：
    - 在 Java 中，靜態方法和屬性是直接與類相關聯的，並且可以通過類名直接訪問。Kotlin 沒有靜態方法和靜態屬性的概念，而是使用 `companion object` 來達到類似的效果
2. 定義方式：
    - `companion object` 是在類內部定義的一個單例對象。可以在 `companion object` 中定義屬性和方法，這些屬性和方法可以通過類名直接訪問
3. 唯一實例：
    - `companion object` 在類中只有一個實例。這個對象在第一次被引用時會被創建，並且在整個應用程序生命週期內保持唯一
4. 訪問方式：
    - 可以通過類名來訪問 `companion object` 的方法和屬性，而不需要創建類的實例

### 範例

```
class MyClass {
    // 定義 companion object
    companion object {
        // 靜態屬性
        val staticProperty: String = "Static Property"

        // 靜態方法
        fun staticMethod() {
            println("This is a static method")
        }
    }
}

fun main() {
    // 訪問 companion object 的靜態屬性和方法
    println(MyClass.staticProperty) // 輸出: Static Property
    MyClass.staticMethod() // 輸出: This is a static method
}
```

### 詳細解釋

1. 靜態屬性和方法： 在上述範例中，`staticProperty` 和 `staticMethod` 是 `companion object` 中定義的靜態屬性和方法。可以通過 `MyClass.staticProperty` 和 `MyClass.staticMethod()` 直接訪問它們，而不需要創建 `MyClass` 的實例
    
2. 用於工廠方法： `companion object` 常用於實現工廠方法模式。例如，可以使用 `companion object` 提供靜態的工廠方法來創建類的實例：

```
class User private constructor(val name: String) {
    companion object {
        fun create(name: String): User {
            return User(name)
        }
    }
}

fun main() {
    val user = User.create("John")
    println(user.name) // 輸出: John
}
```

3. 訪問伴生對象的名稱： 可以選擇為 `companion object` 指定名稱，但如果沒有指定名稱，它默認被稱為 `Companion`。例如：

```
class MyClass {
    companion object Factory {
        fun create(): MyClass {
            return MyClass()
        }
    }
}
```

這裡，`companion object` 被命名為 `Factory`，可以通過 `MyClass.Factory.create()` 訪問它的方法

### 小結

`companion object` 使得在 Kotlin 中可以實現靜態方法和屬性的功能，並且為類提供了一個可以訪問靜態成員的方式。它的唯一實例特性使得它非常適合用於那些只需要一個實例的情況，比如工廠方法和靜態常量

## 5. Function / Method

在 Kotlin 中，函數（Function）是非常核心的一部分，因為它們支持函數式編程風格，並且是 Kotlin 語言設計的基礎。以下是關於 Kotlin 中函數的一些詳細說明

### 基本函數

1. 函數的定義
    函數定義的基本語法如下：
	
	```
	fun functionName(parameter1: Type1, parameter2: Type2): ReturnType {
	    // 函數體
	    return value
	}
	```

	例如：
	
	```
	fun add(a: Int, b: Int): Int {
	    return a + b
	}
	```
	在這個例子中，`add` 函數接受兩個 `Int` 類型的參數，並返回它們的和

2. 單表達式函數
	如果函數體只有一行，Kotlin 允許你使用單表達式函數的簡化語法：
	
	```
	fun add(a: Int, b: Int): Int = a + b
	```
	使用 `=` 符號來表示函數的返回值，這樣可以讓函數更簡潔

3. 預設參數
	Kotlin 函數可以有預設值，這使得在呼叫函數時可以省略某些參數：
	
	```
	fun greet(name: String = "Guest") {
	    println("Hello, $name!")
	}
	
	greet()          // 輸出: Hello, Guest!
	greet("Alice")   // 輸出: Hello, Alice!
	```

4. 命名參數
	當函數有多個參數時，你可以使用命名參數來提高函數調用的可讀性：

	```
	fun createUser(name: String, age: Int) {
	    println("Name: $name, Age: $age")
	}
	
	createUser(age = 25, name = "Bob")
	```
	這樣可以讓你在調用函數時不必按照參數的順序傳遞值

5. 可變參數
	Kotlin 允許函數接受可變數量的參數（varargs）

	```
	fun printNumbers(vararg numbers: Int) {
	    for (number in numbers) {
	        println(number)
	    }
	}
	
	printNumbers(1, 2, 3, 4, 5)
	```
	`vararg` 使得 `numbers` 成為一個 `Int` 類型的數組，可以接受任意數量的參數

### 高階函數

1. 將函數作為參數
    Kotlin 支持高階函數，即函數可以接受其他函數作為參數：

	```
	fun performOperation(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
	    return operation(a, b)
	}
	
	val result = performOperation(5, 3, ::add)  // 使用函數引用
	println(result)  // 輸出: 8
	```
	在這個例子中，`performOperation` 函數接受一個 `operation` 函數，這個函數接受兩個 `Int` 類型的參數並返回一個 `Int` 類型的結果

2. 返回函數
	Kotlin 也支持函數返回其他函數：

	```
	fun multiplier(factor: Int): (Int) -> Int {
	    return { number -> number * factor }
	}
	
	val timesTwo = multiplier(2)
	println(timesTwo(5))  // 輸出: 10
	```
	`multiplier` 函數返回一個函數，這個返回的函數將其輸入乘以 `factor`

### 擴展函數

1. 擴展函數 
    Kotlin 允許為現有的類型添加新函數，而不需要修改它們的源代碼：
	
	```
	fun String.lastChar(): Char = this[this.length - 1]
	
	println("Kotlin".lastChar())  // 輸出: n
	```
	這裡 `lastChar` 函數被添加到了 `String` 類型上，但實際上不會修改 `String` 類的源代碼

### 匿名函數和 lambda 表達式

1. 匿名函數 
    Kotlin 支持匿名函數，即沒有名稱的函數：
	
	```
	val greet = fun(name: String) {
	    println("Hello, $name!")
	}
	
	greet("World")  // 輸出: Hello, World!
	```

2. lambda 表達式
	Lambda 表達式是 Kotlin 中的另一種匿名函數表達方式：
	
	```
	val add = { a: Int, b: Int -> a + b }
	println(add(5, 3))  // 輸出: 8
	```
	Lambda 表達式可以省略返回類型，並且語法更加簡潔

### ::

`::` 是 Kotlin 中的「函數引用」運算符，它用來取得某個函數或屬性的引用。在 Kotlin 中，函數可以作為一級對象處理，這意味著你可以將函數作為變數、參數或返回值。`::` 運算符可以讓你更方便地取得這些函數的引用

1. 取得函數引用 
    使用 `::` 可以取得某個函數的引用，這樣可以將函數當作變數或參數傳遞。這裡有個例子：
	
	```
	fun greet(name: String) {
	    println("Hello, $name!")
	}
	
	val greetFunction = ::greet
	greetFunction("World")  // 輸出: Hello, World!
	```
	在這個例子中，`::greet` 是 `greet` 函數的引用，`greetFunction` 變數可以用來調用 `greet` 函數

2. 函數作為參數
	函數引用可以作為其他函數的參數傳遞。這在需要高階函數的情況下特別有用：
	
	```
	fun executeFunction(action: (String) -> Unit, value: String) {
	    action(value)
	}
	
	executeFunction(::greet, "Kotlin")  // 輸出: Hello, Kotlin!
	```
	這裡，`::greet` 代表了 `greet` 函數，並被傳遞到 `executeFunction` 函數中

3. 取得屬性引用
	`::` 也可以用來取得屬性的引用。這樣你可以用來訪問或修改屬性：
	
	```
	class Person(val name: String)
	
	val nameProperty = Person::name
	val person = Person("Alice")
	println(nameProperty.get(person))  // 輸出: Alice
	```
	在這個例子中，`Person::name` 是 `name` 屬性的引用，並可以用 `get` 函數來讀取屬性的值

4. 擴展函數和伴生對象
	`::` 也可以用來引用擴展函數和伴生對象的函數：
	
	```
	fun String.printLength() {
	    println(this.length)
	}
	
	val printLengthFunction = String::printLength
	"Hello".printLengthFunction()  // 輸出: 5
	```
	這裡，`String::printLength` 是 `printLength` 擴展函數的引用，可以用來調用該函數
	
> - `::` 運算符用於取得函數或屬性的引用
> - 它能夠讓你更靈活地操作函數和屬性，並在高階函數和其他場景中使用
> - 使用函數引用可以使代碼更加簡潔，並提供了更多的靈活性

## Kotlin 中的 Model 類別

在 Kotlin 中，模型類別通常使用 `data class` 來簡化代碼。`data class` 是 Kotlin 特有的語法，用於自動生成很多樣板代碼，如 `equals()`, `hashCode()`, 和 `toString()` 方法。

1. 屬性（Properties）:
    - 可以使用 `var`（可變）或 `val`（不可變）來定義屬性
    - 屬性自動生成 getter 和 setter 方法（如果是 `var` 的話）
2. 主構造函數（Primary Constructor）:
    - 定義類別的屬性和初始化邏輯
    - 主構造函數可以直接在類別定義中聲明，並在 `data class` 中自動生成許多常見方法
3. 自動生成的方法:
    - `equals()`, `hashCode()`, 和 `toString()` 方法由 `data class` 自動生成

Kotlin 示例

```
data class User(
    val name: String,
    val age: Int
)
```

> Kotlin 是從 Java 優化來的，那來講講 Kotlin 跟 Java 在 Model 中的差異
> 
> 那先從講解 Java Model 開始
> 
> ### Java 中的模型類別
> 
> 在 Java 中，模型類別通常是用來表示應用中的數據結構。這些類別通常包含：
> 1. 私有屬性（Private Fields）:
>     - 用於存儲數據
>     - 通常會使用 `private` 修飾符來保護這些屬性
> 2. 公共 getter 和 setter 方法（Getters and Setters）: 
>     - 提供對私有屬性的訪問和修改方法
>     - 每個屬性通常都有對應的 `get` 和 `set` 方法
> 3. 構造函數（Constructors）: 
>     - 用於初始化對象
>     - 通常會提供至少一個構造函數
> 4. `equals()`, `hashCode()`, 和 `toString()` 方法: 
>     - 用於比較對象、生成哈希碼和生成對象的字符串表示
> 
> 而 Java 與 Kotlin 的 Model 有下列幾點差異
> 
> ### 1. 語法簡潔性
> - Java: 在 Java 中，通常需要寫大量的樣板代碼來創建一個模型類別，例如 getter 和 setter 方法、`equals()`, `hashCode()`, 和 `toString()` 方法等    
> - Kotlin: Kotlin 提供了更簡潔的語法來定義模型類別，特別是使用 `data class` 來自動生成很多樣板代碼
> 
> ### 2. 自動生成方法
> - Java: 在 Java 中，你需要手動編寫 `equals()`, `hashCode()`, 和 `toString()` 方法，這些方法是用來比較對象、生成哈希碼和打印對象的字符串表示形式
> - Kotlin: 使用 `data class` 可以自動生成 `equals()`, `hashCode()`, 和 `toString()` 方法，並且可以通過主構造函數中的屬性自動生成這些方法所需的內容
> 
> ### 3. 不可變性（Immutable）
> - Java: 默認情況下，Java 中的對象是可變的，雖然你可以通過只提供 getter 方法而不提供 setter 方法來實現不可變性，但這樣做需要手動編寫代碼 
> - Kotlin: 使用 `val` 定義的屬性是不可變的（即只讀），這意味著它們在初始化後不能被修改。這種語法使得不可變對象的創建變得更簡單
> 
> ### 4. 主構造函數和次構造函數
> - Java: 在 Java 中，類通常有一個或多個構造函數來初始化對象
> - Kotlin: Kotlin 提供了主構造函數，可以在 `data class` 中直接定義屬性，並且可以使用次構造函數進行擴展 
> 
> ### 5. 擴展函數
> - Kotlin: Kotlin 允許你為現有類添加新方法，而不需要修改類的源代碼。這稱為擴展函數（extension functions）
