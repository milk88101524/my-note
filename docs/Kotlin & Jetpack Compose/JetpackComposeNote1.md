---
sidebar_label: "啥是 Jetpack Compose"
sidebar_position: 2
---

# 啥是 Jetpack Compose

---

Jetpack Compose 跟他的兄弟 Flutter 的設計方式都是Declarative UI ，中文就是宣告式 UI

那指令式程設 ( Imperative UI ) 和宣告式程設 ( Declarative UI ) 有啥差別呢？恩，指令式程設比較像是告訴程式要怎麼跑，宣告式程設比較偏向告訴什麼要跑

指令式程設就好比你請你朋友來維護、修車，你告訴他要從引擎開始修、換上什麼輪胎要用、甚麼機具、用幾號螺絲、在甚麼時候去把它拆卸下來、怎麼染色、怎麼換機油等等

宣告式程設則是你請你朋友來修車，你只告訴他你要甚麼顏色，要用甚麼機油，但具體他要怎麼修、怎麼保養你並不在乎。

Jetpack Compose 和 Flutter 都是使用基於 Widget 概念的UI框架。

在 Jetpack Compose 中，所有的 UI 元素（如文字、按鈕、列、行等）都是使用 Composable 函式來創建的，這些 Composable 函式接受輸入參數並返回一個 UI 元素（也可以是一個容器或布局），因此可以將其視為 Widget 的概念。

而在 Flutter 中，Widget 是構建 UI 的基本單元。Flutter 提供了一個豐富的 Widget 库，開發者可以使用這些 Widget 來構建不同的 UI 元素，並且可以通過組合和嵌套這些 Widget 來構建複雜的 UI 佈局。

因此，無論是在 Jetpack Compose 還是 Flutter 中，所有的 UI 元素都可以被視為 Widget，並且都是通過組合不同的 Widget 來構建應用程式的 UI。

自己的理解為每個 Widget 一層套一層，且不需要去定義他的 ID 去 findViewById 
(e04這個是真的很煩，沒定義好就去設定點擊事件就會出錯有夠煩...) 因為不用 findViewById 所以也不需要額外再寫他的event，直接寫在裡面就好

舉個粒子：

在android studio 用java + xml (指令式程設 Imperative UI) 的 Button 中需要先在 xml 中設定 Button 的屬性

```
<Button
	android:id="@+id/btn_door"
	android:layout_width="wrap_content"
	android:layout_height="wrap_content"
	android:padding="20dp"
	android:textColor="@color/white"
	android:text="Door"
	android:layout_margin="10dp"
	app:layout_constraintTop_toBottomOf="@id/card_search_bar"
	app:layout_constraintEnd_toEndOf="parent"
	android:background="@drawable/button_style"/>
```

(若外層套的是 ConstraintLayout 就得宣告上下左右跟誰連結，雖說習慣了但寫久還是覺得好麻煩...)

然後在到 java 中宣告 findViewById

```
btnDoor = view.findViewById(R.id.btn_door);
```

再宣告他的點擊事件

```
btnDoor.setOnClickListener(v -> {
	currentAdapter = deviceAdapter;
	list.setAdapter(currentAdapter);
});
```

寫久了雖順手但難免覺得麻煩

而用Flutter (宣告式程設 Declarative UI) 中的 Button 可直接將 Design、onClick 事件全寫在一起不需一下在xml設定屬性一下回java去設定點擊事件
( 剛接觸Jetpack Compose還沒試過他的 Button 寫法，所以用同門師兄弟的 Flutter 作範例 )

```
ButtonItem(
	title: "Add image",
	onTap: () {},
	buttonColor: Colors.black,
),
```

再來關於 Jetpack Compose 的生命週期，Jetpack Compose 的生命週期不像 Android 中的 View 那樣具有明確的生命週期方法（如 onCreate、onPause、onDestroy）。相反，Compose 的生命週期是基於函數調用和組件組合的概念。

在 Compose 中，UI 組件（如 Composable 函數）的生命週期可以理解為以下幾個階段：
1. Composition：這是 Composable 函數的首次調用階段。當 Compose 需要更新 UI 時，它會重新調用 Composable 函數來重新構建 UI。

2. Recomposition：當 UI 需要更新時，Compose 將重新調用相關的 Composable 函數進行重新構建。這可能是由於數據更改、屏幕方向變化、設備配置更改等原因引起的。

3. Disposed：當 Composable 函數不再需要顯示時（例如它的父組件被從 UI 中移除），Compose 將處理相應的資源釋放和銷毀工作。這可以幫助優化內存使用和性能。

4. State Management：Compose 通過管理狀態來處理 UI 組件的生命週期。狀態可以通過 remember 等關鍵字來聲明，並且它們將在 Composable 函數的生命週期中得以保留和更新。

總的來說，Compose 的生命週期是一個動態的過程，基於 Composable 函數的調用和組件的組合。Compose 通過這種方式來管理 UI 的構建和更新，使得開發者可以更加自由地構建靈活和高效的 UI

> ![Gradle image](/img/2024-04-03210159.png)
> 
> 注意：在建立專案時若是習慣 Java 的 Gradle 格式的人，在 Build configuration language 這邊要選 Groovy，不然建立完的專案是無法 implementation library