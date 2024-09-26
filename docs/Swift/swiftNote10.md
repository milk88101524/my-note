---
sidebar_label: "class"
sidebar_position: 10
---

# class

---

## class 使用指南

class 可以建立新的型別

```
class Baby {
	var age: Int = 1
	var name: String = "小彼得"
	var star: String = "水瓶座"
}

var cuteBaby = Baby()
```

在這段 code 中，`cuteBaby` 會產生一個 `age = 1`，`name = "小彼得"`,  `star = "水瓶座"` 的物件

![image1](/img/swift_img/2024-08-06_10.43.04.png)

在 class 中可以在裡面寫 method / function

```
class Baby {
	var age: Int = 1
	var name: String = "peter"

	func sleep(hour: Int, min: Int) {
		print("睡了\(hour)小時\(min)分鐘")
	}
}

var cuteBaby = Baby()
cuteBaby.sleep(hour: 10, min: 10)
```

![image2](/img/swift_img/2024-08-06_10.46.30.png)

## 繼承 inheritance

```
subClass : parentClass {
	property
	method
}
```

可讓子類別 ( subClass ) 繼承父類別 ( parentClass ) 的屬性與方法

![image3](/img/swift_img/2024-08-06_11.07.31.png)

為甚麼要繼承? 因為使用繼承後，子類別就能使用父類別的屬性與方法，例如剛剛的`Baby` 與 `SuperBaby`，`SuperBaby` 繼承了 `Baby`，所以她有擁有了 `Baby` 的屬性與方法 ( property `age` 與 method `sleep()` )，這樣就不用再寫一次

> 繼承只能繼承一個
> 
> ![image4](/img/swift_img/2024-08-06_11.10.41.png)
> 

## 型別方法和屬性 type method & property

什麼時候要使用 `static`
* 唯一的,屬於型別的東西,不會因每個生成的資料而不同,例如剛剛 `Baby` 的 `maxAge,Int` 的 `max` 
* 更方便地建立常用的資料
* 更方便地存取常用的資料
* 任何地方, 任何檔案都可存取, 不像變數有範圍限制
 
```
class Baby {
	var name = ""
	var star = ""
	
	static var maxAge = 100
	static func createWhiteAquariusBaby() -> Baby {
		let cuteBaby = Baby()
		cuteBaby.name = "peter"
		cuteBaby.star = "水瓶"
		return cuteBaby
	}
}

let maxAge = Baby.maxAge
let cuteBaby = Baby.createWhiteAquariusBaby()
```

![image5](/img/swift_img/2024-08-06_10.57.37.png)

## initializer

假設有一個 `CustomClass` = `Baby`

```
class Baby {
	var age: Int = 0
	var name: String = ""
}
```

在將一個變數宣告成自訂的資料型態時會使用 `var cuteBaby = Baby()` ，代表有一個變數 `cuteBaby` 被宣告成 `Baby` 型態，而 `Baby` 後面的 `()` 指的是初始化資料，此時 `cuteBaby` 就有了 `Baby.age` 跟 `Baby.name` 的屬性。當屬性在宣告時都有給內容或設為 Optional，Swift 將自動產生 `init()`，`Baby()` 會呼叫無參數的 `init()`

但如果想要當宣告成 `Baby` 型態時就要有初始值的話，可以在 `Baby` 使用 `init` 來設定屬性的內容

```
class Baby {
	var age: Int = 0
	var name: String = ""

	init() {
		age = 1
		name "Han"
	}
}

var cuteBaby = Baby()
```

設定完 `init()` 後，這樣在 `cuteBaby` 宣告成 `Baby` 型態後，`cuteBaby` 的型態就會變成 `Baby` 且 `cuteBaby.age = 1` 、`cuteBaby.name = "Han"`，因為在設定成 `Baby` 後他會去呼叫 `init()` 

![image6](/img/swift_img/2024-08-06_1.14.49.png)

之前在 ==Function / Method篇== 中有提到過說參數是可以設定數值的，在 `init()` 這邊也可以設定數值，只需要在設定 `init()` 時 ，若在 `init()` 的參數上加上數值時代表在宣告`init()` 時可以不用輸入這個參數的數值，若在執行時 `init()` 沒有輸入設有預設值的參數時，在執行的時候就會使用該參數的預設值

![image7](/img/swift_img/2024-08-06_1.54.38.png)

![image8](/img/swift_img/2024-08-06_1.55.33.png)

> ![image9](/img/swift_img/2024-08-06_1.13.50.png)
> 在 `Baby()`前面出現的 `I` 指的就是 `init()`
> 
> 如果在建立 `class` 時屬性沒給預設值或沒設為 Optional 或是沒有 `init()` 的話是會報錯的
> 
> ![image10](/img/swift_img/2024-08-06_1.28.01.png)
> 
> 可以看到 `class` 裡面的 `name` 沒給預設值也沒設定成 Optional 也沒有 `init()`，他就出現錯誤了
> 
> 解決方法是可以給他預設值，或是設置 `init()`
> 
> 再補充一下
> 在定義 `class` 的 `init()` 時，會看到
> 
> ![image11](/img/swift_img/2024-08-06_1.40.57.png)
> 
> 這邊的 `self.age = age` 與 `self.name = name` 就等於 Java 的 `this.age = age` 、`this.name = name`，需要注意的是，當這樣宣告完後，以後要把變數宣告成 `Baby` 型態都必須把 `age` 與 `name` 給打出來
> 
> ![image12](/img/swift_img/2024-08-06_1.44.25.png)
> 
> ![image13](/img/swift_img/2024-08-06_1.44.35.png)

變數可以設定成 Optional ，`init()` 也可以設定成 Optional ，但要注意，當把 `init()` 設定成 Optional，這個資料型態也會變成 Optional ，所以取出裡面的值就要用在 ==Optional篇== 中提到的方式來取值，這邊就不多贅述了

上面有提到 class 是可以繼承一個 class 的，那當要初始化父類別的 property 的話該怎麼辦呢？必須先初始化自己的 property 再呼叫 `super.init`

![image14](/img/swift_img/2024-08-06_2.22.27.png)

> 若有繼承父類別的話，需先初始化自己的 porperty 再呼叫 `super.init`，不然會報錯
> ![image15](/img/swift_img/2024-08-06_2.25.15.png)