---
sidebar_label: "SwiftUI 常用的 Modifier"
sidebar_position: 5
---

# SwiftUI 常用的 Modifier

---

## 1. onAppear

- 用法：

```
.onAppear {
    // 在這裡執行程式碼
}
```

- 功能：當視圖顯示在螢幕上時執行指定的程式碼，常用於載入資料或執行初始化邏輯
- 條件：一般用於需要在視圖顯示時立即更新 UI 或從網路獲取資料的情況

## 2. onDisappear

- 用法：

```
.onDisappear {
    // 在這裡執行清理程式碼
}
```

- 功能：當視圖從螢幕上消失時執行指定的程式碼，適合用於清理資源或保存狀態
- 條件：用於需要釋放記憶體、暫停計時器或保存用戶狀態的情況

## 3. padding

- 用法：

```
.padding() // 默認內邊距
.padding(EdgeInsets(top: 10, leading: 10, bottom: 10, trailing: 10)) // 自定義內邊距
```

- 功能：在視圖周圍添加內邊距，提升視覺效果和可用性
- 條件：通常在需要分隔視圖或提高可觸控區域的情況下使用

## 4. background

- 用法：

```
.background(Color.blue) // 添加背景顏色
.background(Image("backgroundImage")) // 添加背景圖像
```

- 功能：為視圖添加背景顏色或背景視圖，以提升視覺層次
- 條件：用於需要明確視覺區分的視圖，如卡片式設計

## 5. frame

- 用法：

```
.frame(width: 100, height: 50, alignment: .center)
```

- 功能：指定視圖的寬度、高度和對齊方式
- 條件：適合用於需要固定大小或調整佈局的視圖

## 6. cornerRadius

- 用法：

```
.cornerRadius(10) // 添加圓角
```

- 功能：為視圖添加圓角，使其外觀更柔和
- 條件：用於按鈕、卡片等視圖以提升視覺美感

## 7. opacity

- 用法：

```
.opacity(0.5) // 設置透明度
```

- 功能：設置視圖的透明度，範圍從 0（完全透明）到 1（完全不透明）
- 條件：常用於過渡效果或隱藏視圖的情況

## 8. animation

- 用法：

```
.animation(.easeInOut) // 添加動畫效果
```

- 功能：為視圖的變更添加動畫效果
- 條件：適用於希望視圖變更時具備平滑過渡的情況

## 9. gesture

- 用法：

```
.gesture(TapGesture().onEnded {
    // 點擊事件
})
```

- 功能：添加手勢識別器以識別用戶的互動，如點擊、拖動等
- 條件：用於需要用戶與視圖交互的情況

## 10. alert

- 用法：

```
.alert(isPresented: $showAlert) {
    Alert(title: Text("Title"), message: Text("Message"), dismissButton: .default(Text("OK")))
}
```

- 功能：顯示警告對話框，可以根據狀態控制顯示
- 條件：用於需要提示用戶的情況，如確認刪除或錯誤消息

## 11. sheet

- 用法：

```
.sheet(isPresented: $showSheet) {
    // 顯示的視圖
}
```

- 功能：顯示模態視圖，通常用於顯示額外內容或操作
- 條件：當需要暫時展示更多信息時使用

## 12. navigationTitle

- 用法：

```
.navigationTitle("Title") // 設置導航標題
```

- 功能：設置導航視圖的標題，便於用戶理解當前上下文
- 條件：在使用 NavigationView 時，必須使用

## 13. disabled

- 用法：

```
.disabled(true) // 禁用視圖
```

- 功能：禁用視圖，使其無法互動
- 條件：在需要禁止用戶操作的情況下使用，如加載中或錯誤狀態

## 14. foregroundStyle

- 用法：

```
.foregroundStyle(.black) // 設置文本顏色
```

- 功能：設置視圖內容的顏色，例如文本或圖標的顏色
- 條件：用於自定義視圖的外觀，以適應主題或樣式

## 15. frame(maxWidth: .infinity, maxHeight: .infinity)

- 用法：

```
.frame(maxWidth: .infinity, maxHeight: .infinity) // 擴展到可用空間
```

- 功能：使視圖擴展到可用的空間，通常用於填充容器
- 條件：在需要視圖自適應可用空間的情況下使用

## 16. .overlay

`.overlay` 是 SwiftUI 中常用的 modifier。它可以將一個視圖疊加在另一個視圖的上方，常用於為視圖添加額外的圖層效果，例如加上文字、圖片、水印或其他內容

以下是一些常見的使用場景：

1. 疊加文字 : 可以在圖片或其他視圖上疊加文字或標籤。

```
Image(systemName: "photo")
    .resizable()
    .frame(width: 100, height: 100)
    .overlay(Text("Overlay Text").foregroundColor(.white), alignment: .center)
```

2. 添加半透明遮罩 : 在背景上疊加一個半透明的圖層來突出顯示某些內容

```
RoundedRectangle(cornerRadius: 10)
    .fill(Color.blue)
    .frame(width: 200, height: 200)
    .overlay(
        Color.black.opacity(0.3)
    )
```

3. 自訂對齊方式 : 可以指定 overlay 的對齊方式，如右下角顯示浮動按鈕

```
RoundedRectangle(cornerRadius: 10)
    .fill(Color.blue)
    .frame(width: 200, height: 200)
    .overlay(
        Image(systemName: "plus.circle.fill")
            .foregroundColor(.white)
            .padding(),
        alignment: .bottomTrailing
    )
```

`.overlay` 是在 SwiftUI 佈局中靈活定制視圖的常用工具，幫助開發者更方便地疊加、排列元素