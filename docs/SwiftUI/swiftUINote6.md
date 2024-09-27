---
sidebar_label: "SwiftUI 切換頁面的方法"
sidebar_position: 6
---

# SwiftUI 切換頁面的方法

---

SwiftUI 提供了多種方法來進行頁面切換，主要包括 `NavigationStack`、`NavigationView` 和 `NavigationLink`

## 1. NavigationView

`NavigationView` 是 SwiftUI 中最早的導航容器，允許在 iOS、iPadOS、macOS 和 tvOS 應用中建立基於堆疊的導航結構。它管理一個主視圖，並允許將其他視圖「推入」堆疊中來實現導航

```
NavigationView {
    VStack {
        NavigationLink("Go to Detail View", destination: DetailView())
    }
}
```

特點：
- `NavigationView` 能夠顯示導航欄，並且可以包括返回按鈕、自定義的標題、工具欄按鈕等
- 主要用於構建層級導航結構
- 在 iOS 16 及更高版本中，`NavigationView` 逐漸被 `NavigationStack` 所取代

## 2. NavigationStack

`NavigationStack` 是 SwiftUI 中用來管理視圖導航的一個容器。它類似於 UIKit 中的 `UINavigationController`，負責管理一個視圖堆棧。每當在 `NavigationStack` 中進行導航時，它會將當前視圖推入堆棧中，並顯示新的目標視圖。當你返回上一頁時，它會從堆棧中彈出視圖，並回到之前的狀態，`NavigationStack` 是 SwiftUI 3（iOS 16 和 macOS 13 以上）中引入的，旨在取代 `NavigationView`。它在結構和功能上與 `NavigationView` 類似，但提供了更多的功能和改進的 API，特別是在導航狀態管理方面

```
NavigationStack {
    VStack {
        NavigationLink("Go to Detail View", destination: DetailView())
    }
}

```

特點：
- `NavigationStack` 支持在多個視圖之間導航，並且可以對導航狀態進行更細緻的控制
- 可以跟蹤導航堆疊的狀態，這對於需要支持深層導航或自定義導航行為的應用非常有用
- 與 `NavigationView` 不同，`NavigationStack` 是更現代化且功能更豐富的導航容器

## 3. NavigationLink

`NavigationLink` 是用來觸發頁面導航的按鈕或其他互動元素。當點擊 `NavigationLink` 時，它會將目標視圖推入 `NavigationStack`，並自動完成頁面的切換。這樣可以很方便地在視圖之間進行導航，`NavigationLink` 是用來在 `NavigationView` 或 `NavigationStack` 中觸發導航操作的組件。當點擊 `NavigationLink` 時，它會推送一個新視圖到導航堆疊中

```
NavigationLink(destination: HomePage()) {
    Text("Go to Home")
}
```

在這個例子中，當用戶點擊「Go to Home」這個文本時，應用會自動導航到 `HomePage`

特點：
- `NavigationLink` 可以與文字、圖片、按鈕等組合使用，以提供點擊事件來進行導航
- 它可以嵌套在列表、堆疊、或其他容器視圖中
- 可以用 `isActive` 或 `tag` 和 `selection` 綁定來控制導航行為，這在條件導航中非常有用

## 三者的關係

- `NavigationStack` 和 `NavigationView`：兩者都是導航容器，用於建立視圖之間的導航結構。`NavigationStack` 是 `NavigationView` 的進化版本，提供了更靈活的狀態管理功能
- `NavigationLink`：作為導航的觸發器，用來在 `NavigationStack` 或 `NavigationView` 中實現視圖之間的跳轉。它需要嵌套在這兩個導航容器中才能工作

總結來說，`NavigationView` 和 `NavigationStack` 是承載和管理導航結構的核心組件，而 `NavigationLink` 是觸發導航操作的具體實現。隨著 SwiftUI 的發展，`NavigationStack` 正逐漸取代 `NavigationView`，成為推薦使用的導航容器

## NavigationStack + NavigationLink 導向下一頁的方式

```
NavigationStack {
    NavigationLink(destination: HomePage()) {
        Text("Start")
            .font(.largeTitle)
            .padding()
            .background(Color.blue)
            .foregroundColor(.white)
            .cornerRadius(10)
    }
}
```

這段代碼會顯示一個帶有 "Start" 文本的按鈕，當點擊這個按鈕時，應用會導航到 `HomePage`。

所以，`NavigationLink` 確實可以當作按鈕使用，只是它主要的目的是用來處理頁面之間的導航。當你想要在按鈕點擊時導航到新視圖，可以考慮使用 `NavigationLink`

## NavigationView 和 NavigationLink

`NavigationView` 是一個容器視圖，用來包含支持導航的子視圖
`NavigationLink` 則是用來觸發頁面切換的鏈接

在 SwiftUI 中，要導向下一頁，可以使用 `NavigationLink`。這個 `NavigationLink` 可以直接作為一個按鈕或任何互動元素的一部分，當用戶點擊它時，自動完成頁面的導航

```
struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                NavigationLink(destination: DetailView()) {
                    Text("Go to Detail View")
                }
                .padding()
            }
            .navigationTitle("Home")
        }
    }
}

struct DetailView: View {
    var body: some View {
        Text("This is the detail view")
            .navigationTitle("Detail")
    }
}
```

在這個例子中，當用戶點擊 "Go to Detail View" 時，應用會導航到 `DetailView`