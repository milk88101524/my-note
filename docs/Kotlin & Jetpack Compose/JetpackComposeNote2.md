---
sidebar_label: "Jetpack Compose 工具介紹與UI ( Widget / Composable ) 設計"
sidebar_position: 3
---

# UI ( Widget / Composable ) 設計與程式撰寫

---

介紹 Widget 前先介紹一些工具

## 工具

* Preview
	寫 UI 最需要的就是 Preview 惹，沒有 Preview 很多東西都得通靈，不然一次寫完 build 出來噴了一大串錯誤，結果不知道錯誤在哪裡，這樣的感受實在不好，身為 Android 工程師最討厭 xml 了，但是因為如果純手工用 Java/Kotlin code 硬幹，沒有 Preview 每寫完就要 build 去看結果實在很難受，所以最後還是去用 xml 了。

那 Compose 是有 Preview 可以用的，利用 @preview 可以像用 Xml 一樣把畫面標記在右邊

![Alt text](/img/JC_preview.png)  

在這邊就可看到使用 Preview 後 Preview的畫面就出現在右邊的視窗中

* Color Picker
	另外常常會有需要調色的狀況，在北極狐 AS 上，用 Compose 的 Color 可以直接調色

* Image resource picker
	那當然地也可以直接換 Icon 用 code。

* Composable
	要建立一個 compose UI，必須先寫一個 composable function, 只要在 function 上面加一個 @Composable annotation 就可以了

## Widget ( Composable )

在講 Widget ( Jetpack Compose 是稱 Composable ) 前要先講一下要注意的點：

在Flutter 中是用 ( ) 來放屬性與 child 或 children ，例如：

```
Container(
  color: Colors.blue,
  child: Text('Hello'),
)
```

但在 Jetpack Compose 中是使用 ( ) 來放屬性，使用 { } 來放子 Widget

```
Column(
  modifier = Modifier.fillMaxSize(),
) {
  Text("Hello")
}
```

雖說這兩者都是由 Google 開發和維護，但這部分是必須要注意的