---
sidebar_label: "SwiftUI"
sidebar_position: 2
---

# SwiftUI

---

在 SwiftUI 中，子視圖放在 `{}` 中，而屬性則通過 `.property` 修飾符來設定。這使得 SwiftUI 語法簡潔且易於理解。

## SwiftUI 的子視圖和屬性設置

1. 子視圖：
    子視圖放在 `VStack`、`HStack`、`ZStack` 等容器的 `{}` 中。例如：
	
	```
	VStack {
	    Text("Hello, World!")
	    Button(action: {
	        // Button action
	    }) {
	        Text("Click Me")
	    }
	}
	```

2. 屬性設置：
	使用 `.property` 語法來設定視圖的屬性。例如：

	```
	Text("Hello, World!")
	    .padding()
	    .background(Color.blue)
	    .foregroundColor(.white)
	    .font(.title)
	```

## SwiftUI 刷新畫面的機制與狀態管理

SwiftUI 的畫面刷新機制和 Flutter 有些相似，但也有其獨特之處。SwiftUI 是一個宣告式框架，利用數據驅動的設計來自動管理和更新 UI。以下是 SwiftUI 刷新頁面的機制詳細說明：

### 1. `@State`

- `@State` 是 SwiftUI 中最基本的狀態管理屬性包裝器。當 `@State` 標記的值發生變化時，SwiftUI 會自動重新計算依賴這個狀態的視圖，並刷新它們
- 例如：

```
struct ContentView: View {
    @State private var counter = 0
    
    var body: some View {
        VStack {
            Text("Counter: \(counter)")
            Button(action: {
                counter += 1
            }) {
                Text("Increment")
            }
        }
    }
}
```

當按下按鈕時，`counter` 值變化，SwiftUI 會自動重新計算並刷新顯示 `counter` 的 `Text` 視圖

### 2. `@Binding`

- `@Binding` 用於父視圖和子視圖之間的數據共享。當 `@Binding` 的數據變化時，相關視圖也會自動更新
- 例如：

```
struct ParentView: View {
    @State private var isOn = false
    
    var body: some View {
        ToggleView(isOn: $isOn)
    }
}

struct ToggleView: View {
    @Binding var isOn: Bool
    
    var body: some View {
        Toggle("Switch", isOn: $isOn)
    }
}
```

當 `Toggle` 改變狀態時，`ParentView` 中的 `isOn` 也會隨之改變，並且 `ParentView` 和 `ToggleView` 都會刷新

### 3. `@ObservedObject` 和 `@Published`

- `@ObservedObject` 和 `@Published` 用於更複雜的數據模型。當 `@Published` 標記的屬性發生變化時，觀察該屬性的 `@ObservedObject` 會通知相關視圖進行刷新
- 例如：

```
class ViewModel: ObservableObject {
    @Published var name = "World"
}

struct ContentView: View {
    @ObservedObject var viewModel = ViewModel()
    
    var body: some View {
        VStack {
            Text("Hello, \(viewModel.name)!")
            Button(action: {
                viewModel.name = "SwiftUI"
            }) {
                Text("Change Name")
            }
        }
    }
}
```

當 `viewModel.name` 改變時，`Text` 視圖會自動刷新顯示新的名稱

### 4. `@EnvironmentObject`

- `@EnvironmentObject` 是用來在應用的不同部分之間共享數據。當 `@EnvironmentObject` 的數據發生變化時，所有依賴它的視圖都會自動刷新。
- 例如：

```
class Settings: ObservableObject {
    @Published var isDarkMode = false
}

struct ParentView: View {
    @StateObject private var settings = Settings()
    
    var body: some View {
        ChildView()
            .environmentObject(settings)
    }
}

struct ChildView: View {
    @EnvironmentObject var settings: Settings
    
    var body: some View {
        Toggle("Dark Mode", isOn: $settings.isDarkMode)
    }
}
```

當 `Toggle` 改變狀態時，`settings.isDarkMode` 變化，所有使用這個 `EnvironmentObject` 的視圖都會刷新

## 總結

SwiftUI 的畫面刷新機制主要依賴於數據驅動的設計和狀態管理屬性包裝器，如 `@State`、`@Binding`、`@ObservedObject` 和 `@EnvironmentObject`。這些工具讓開發者能夠簡單地管理狀態並自動更新 UI，而不需要手動處理刷新邏輯。這與 Flutter 的 `setState` 機制有些相似，但 SwiftUI 更加自動化和宣告式