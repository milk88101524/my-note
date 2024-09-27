---
sidebar_label: "UI Design"
sidebar_position: 4
---

# UI Design

---

## Text

`Text`（相當於 UILabel）

`Text` 是用來顯示靜態文字的視圖。它具有多種修飾器，可以用來自定義外觀和行為

```
Text("Hello, World!")
    .font(.title) // 設定字體大小
    .foregroundColor(.blue) // 設定文字顏色
    .padding() // 設定內邊距
    .background(Color.yellow) // 設定背景顏色
```

常用修飾器：
- `font(_:)`：設定字體大小和風格
- `foregroundColor(_:)`：設定文字顏色
- `padding(_:)`：設定內邊距
- `background(_:)`：設定背景顏色
- `bold()`：加粗文字
- `italic()`：文字斜體
- `lineLimit(_:)`：設定行數限制
- `multilineTextAlignment(_:)`：設定多行文字對齊方式

## TextField

`TextField`（相當於 UITextField）

`TextField` 是用來接受用戶輸入的視圖。它需要一個綁定的變數來存儲用戶輸入的值

```
@State private var text: String = ""

TextField("Placeholder", text: $text)
    .padding() // 設定內邊距
    .border(Color.gray, width: 1) // 設定邊框顏色和寬度
    .textFieldStyle(RoundedBorderTextFieldStyle()) // 使用圓角邊框樣式
```

常用修飾器
- `padding(_:)`：設定內邊距
- `border(_:width:)`：設定邊框顏色和寬度
- `textFieldStyle(_:)`：設定文字框樣式（例如 `RoundedBorderTextFieldStyle`）
- `onEditingChanged(_:)`：監聽編輯狀態變化
- `onCommit(_:)`： 當用戶完成輸入並按下回車鍵時觸發的回調
- `text`: 綁定的文本值
- `keyboardType`：設置鍵盤類型
- `foregroundColor`：設置文本顏色
- `font`：設置文本的字體和大小
- `multilineTextAlignment`：設置多行文本的對齊方式
- `lineLimit`：設置行數限制
- `disableAutocorrection`：是否禁用自動更正
- `textContentType`：設置文本內容類型（例如，電子郵件地址、密碼）
- `secureField`：用於輸入密碼的安全文本字段

## Button

`Button`（相當於 UIButton）

`Button` 是用來觸發操作的視圖。它具有一個標籤視圖和一個動作閉包

```
Button(action: {
    print("Button tapped")
}) {
    Text("Tap Me")
        .padding() // 設定內邊距
        .background(Color.blue) // 設定背景顏色
        .foregroundColor(.white) // 設定文字顏色
        .cornerRadius(8) // 設定圓角
}
```

常用修飾器
- `padding(_:)`：設定內邊距
- `background(_:)`：設定背景顏色
- `foregroundColor(_:)`：設定文字顏色
- `cornerRadius(_:)`：設定圓角
- `shadow(color:radius:x:y:)`：設定陰影

> `cornerRadius(_:)` 已棄用，建議使用 `.clipShape(RoundedRectangle(cornerRadius: CGFloat))`

## TabView

`TabView`（相當於 UITabBar）

`TabView` 是用來實現底部導航欄的視圖。它允許你在不同的視圖之間切換

```
struct ContentView: View {
    var body: some View {
        TabView {
            Text("Home")
                .tabItem {
                    Image(systemName: "house")
                    Text("Home")
                }
            
            Text("Settings")
                .tabItem {
                    Image(systemName: "gear")
                    Text("Settings")
                }
        }
    }
}
```

常用修飾器
- `tabItem(_:)`：設定每個頁面的標籤和圖標
- `tag(_:)`：用於標記當前選中的標籤
- `background(_:)`：設定背景顏色

## VStack

`VStack`（相當於 Flutter 的 `Column`）

`VStack` 用於垂直排列子視圖

```
VStack(alignment: .center, spacing: 10) {
    Text("First")
    Text("Second")
    Text("Third")
}
```

常用參數
- `alignment`：子視圖的水平對齊方式。可選值有 `.leading`、`.center`、`.trailing` 等。
- `spacing`：子視圖之間的垂直間距

## HStack

`HStack`（相當於 Flutter 的 `Row`）

`HStack` 用於水平排列子視圖

```
HStack(alignment: .center, spacing: 10) {
    Text("First")
    Text("Second")
    Text("Third")
}
```

常用參數
- `alignment`：子視圖的垂直對齊方式。可選值有 `.top`、`.center`、`.bottom` 等。
- `spacing`：子視圖之間的水平間距

## ZStack

`ZStack` 用於將子視圖堆疊在一起，從後到前顯示

```
ZStack(alignment: .center) {
    Color.red
    Text("Hello")
}
```

常用參數
- `alignment`：子視圖的對齊方式。可選值有 `.top`、`.bottom`、`.center`、`.leading`、`.trailing` 等

## GeometryReader

`GeometryReader` 用於獲取父視圖的幾何信息，允許動態調整子視圖的大小和位置

```
GeometryReader { geometry in
    VStack {
        Text("Width: \(geometry.size.width)")
        Text("Height: \(geometry.size.height)")
    }
}
```

## Spacer

`Spacer` 用於在容器內創建可變空間，通常用於推動其他視圖

```
HStack {
    Text("Left")
    Spacer()
    Text("Right")
}
```

> SwiftUI 的 UI 編排方式是用堆疊的方式，以 `VStack` 為例，`VStack` 用來垂直堆疊視圖的，並且它的 `alignment` 參數主要控制的是水平對齊方式。換句話說，`VStack` 會將子視圖從上到下進行堆疊，並且 `alignment` 參數決定了每個子視圖在水平軸上的對齊方式。
> 
> 而在 Flutter 中，`Column` 的 `crossAxisAlignment` 屬性則控制了子視圖在交叉軸（垂直方向上的對齊方式）上的對齊。這意味著可以控制子視圖是對齊到上邊、中心還是下邊。
> 
> 如果想要在 `VStack` 中控制子視圖的對齊方式，並且希望有更細緻的控制，可以考慮使用其他容器視圖，如 `HStack` 或 `GeometryReader`，這樣可以更靈活地進行布局和對齊。如果想要將視圖推到上面或下面，可以使用 `Spacer`。在 SwiftUI 中，對於需要更複雜的對齊和布局，可以使用 `Spacer` 和其他容器視圖來達到需求

## Divider

`Divider` 用於在視圖之間創建分隔線

```
VStack {
    Text("Above Divider")
    Divider()
    Text("Below Divider")
}
```

## LazyVStack 和 LazyHStack

`LazyVStack` 和 `LazyHStack` 用於大數據量的垂直和水平列表，只有在需要時才會生成視圖，從而提高性能

```
LazyVStack {
    ForEach(0..<1000) { index in
        Text("Item \(index)")
    }
}
```

## list

`List` 是 SwiftUI 中專門用來顯示列表數據的組件。它具有自動處理行重用和滾動的功能，類似於 UITableView

```
struct ContentView: View {
    var body: some View {
        List(0..<20) { index in
            Text("Item \(index)")
        }
    }
}
```

常用參數
- `selection`：用於多選和單選的綁定。
- `content`：視圖生成器，根據數據源生成每個行

> ## `List`、 `LazyVStack` 和 `LazyHStack`  的關係
> `List` 用於顯示垂直滾動的列表，類似於 Flutter 的 `ListView.builder`。而 `LazyVStack` 和 `LazyHStack` 更接近於 Flutter 的 `ListView` 和 `Row` 的懶加載版本，用於在需要時生成子視圖以提高性能，這兩個組件主要用於在需要時生成子視圖，以便處理大數據量時提高性能。它們不像 `List` 那樣自動處理滾動和行重用
> ### 比較
> 
> - `List`：適用於需要顯示大量垂直數據並自動處理滾動和行重用的場景。它更像是 Flutter 的 `ListView.builder`
> - `LazyVStack` 和 `LazyHStack`：適用於需要在垂直或水平方向上懶加載子視圖的場景，但不自動處理滾動。需要與 `ScrollView` 結合使用
> ### 總結
> 
> - `List` 是 SwiftUI 的專用列表組件，適合用於需要滾動和行重用的垂直列表，類似於 Flutter 的 `ListView.builder`。
> - `LazyVStack` 和 `LazyHStack` 則用於懶加載子視圖，適合於需要動態生成大量視圖的場景，但需要手動處理滾動

## AlertDialog

### 用 Swift 撰寫 AlertDialog

在 Swift 原生 AlertDialog 的程式撰寫跟 Java 原生 AlertDialog 的程式撰寫很像

用 Swift 撰寫 AlertDialog
```
let controller = UIAlertController(
	title: "這是標題", // 設定 alertDialog 的標題
	message: "文字在此", // 設定 alertDialog 的內容
	preferredStyle: .alert 
	// 設定 alertDialog 的樣式
	// 可以是 .alert（提示對話框）或 .actionSheet （動作表單）
)  
let okAction = UIAlertAction( 
// 對話框中的按鈕
// 每個按鈕都可以有自己的標題和樣式，並附帶一個回調函數來處理按鈕點擊事件
	title: "OK", // 設置按鈕的標題
	style: .default ) { 
	// 按鈕的樣式
	// 可以是 .default（默認樣式）、.cancel（取消樣式）或 .destructive （破壞性樣式，通常用紅色表示）
		action in 
		// 按鈕點擊事件處理
		print("OK button tapped")
	}
controller.addAction(okAction) 
// 讓 UIAlertController 綁定 UIAlertAction
present ( // 使用當前 View Controller 的 present 方法來顯示對話框
	alertController, 
	animated: true, // 是否以動畫方式顯示對話框
	completion: nil // 對話框顯示完成後要執行的回調函數。可以為 nil
)
```

> 註：也可以在 UIAlertController 中新增多個 UIAlertAction

```
let cancelAction = UIAlertAction(
    title: "Cancel",
    style: .cancel
) { action in
    print("Cancel button tapped")
}
alertController.addAction(cancelAction) 

let deleteAction = UIAlertAction(
    title: "Delete",
    style: .destructive
) { action in
    print("Delete button tapped")
}
alertController.addAction(deleteAction)
```

用 Java 撰寫 AlertDialog 
```
AlertDialog.Builder alertDialog = new AlertDialog.Builder(MainActivity.this);
alertDialog.setTitle("這是標題");
alertDialog.setMessage("文字在此");
alertDialog.setPositiveButton("確定", new DialogInterface.OnClickListener() {
	@Override
    public void onClick(DialogInterface dialog, int which) {
		Toast.makeText(getBaseContext(),"確定",Toast.LENGTH_SHORT).show();
	}
});
alertDialog.setNegativeButton("中立",(dialog, which) -> {
	setToast("中立");
});
alertDialog.setNeutralButton("取消",(dialog, which) -> {
	setToast("取消");
});
alertDialog.setCancelable(false);
alertDialog.show();
```

在 Java 中的 AlertDialog 先宣告一個 `alertDialog` 為 `AlertDialog.Builder` 的實例，`setTitle` 與 `setMessage` 是在設置 `alertDialog` 所要顯示的標題與內容，`setPositiveButton`、`setNegativeButton`、`setNeutralButton` 則是在設置 `alertDialog` 的按鈕事件，`alertDialog.setCancelable(false)`設置這個是為了不讓使用者點選返回鍵後把 `alertDialog` 給取消，最後再使用 `alertDialog.show();` 來顯示 alertDialog

在 Swift 中的 alertDialog 先宣告一個 `UIAlertController` 並給予 `UIAlertController` 的三個參數 `title`( 可為 nil ) 、`message` ( 可為 nil ) 、`preferredStyle` ( `.alert` /  `.actionSheet` ) 後，使用 `UIAlertAction` 並給予 `UIAlertAction` 的參數 `title`、`style`、`handler`，用 `UIAlertController.addAction()` 將 `UIAlertAction` 綁定給 `UIAlertController` ，最後再使用 `present` 來顯示 `UIAlertController`

### 用 SwiftUI 撰寫 AlertDialog

在 SwiftUI 中的 AlertDialog 或 Sheet 得先宣告 @State，透過這個 @State 來管理 Sheet 跟 AlertDialog

1. 使用 AlertDialog 顯示消息
	1. 使用 `Alert`

	```
	@State var showAlert = false

	Widget.alert(isPresented: $showAlert) {
		Alert(
			title: Text("Test")
			message: Text("Test")
			dismissButton: .default(Text("OK"))
		)
	}
	```

	2. 使用 `.alert(_ titleKey, isPresented: Binding<Bool>, action: () -> View)`

	```
	@State var showAlert = false

	.alert("About", isPresented: $showAlert, actions: {
        Button(action: {}, label: {
            Text("OK")}
        )
    })
	```

	3. 使用 `.alert(titleKey: LocalizedStringKey, isPresented: Binding<Bool>, actions: () -> View, message: () -> View)`
	
	```
	@State var showAlert = false

	.alert("About", isPresented: $showAlert, actions: {
        Button(action: {}, label: {
            Text("OK")}
        )
    }, message: {
        Text("HourTracking v1.0.1")
    })
	```

> 在第一種方法使用到 `Alert` ，但 SwiftUI 的 `Alert` 目前不支持在 `message` 中嵌入複雜的視圖（例如 `TextField`）
> 
> ```
> Alert(title: Text>, message: Text?>, primaryButton: Alert.Button>, secondaryButton: Alert.Button>)
> ```
> 可以看到在這個 `Alert` 中 `message` 只能放 `Text` 而不能放其他 Widget
> 像把 `TextField` 放在 `message` 的地方，他直接報錯了
> 
> ![image1](/img/swift_img/2024-08-08_2.52.00.png)
> 
> 而第二種是直接使用 `.alert` 的參數來產生 AlertDialog
> 但第二種沒辦法顯示 `message` 
> 
> 最後是第三種
> 雖然 `message` 看起來是可以放其他種 Widgets ，但就跟剛剛說的一樣，裡面即使放了其他種的 Widgets 他實際上是不會顯示的
> 
> 若需要顯示其他類的 Widgets 的話建議是用 `Sheet`

2. 使用 Sheet 顯示消息

```
@State var showSheet = false

.sheet(isPresented: $showSheet) {
	Text("Test")
}
```

在 `{}` 裡面可以放 Widgets 或是 View，自由度比 `Alert` 更高

接著講講 `Sheet` 幾個參數

`.presentationDetents` ：用於控制 `Sheet` 被拖拽時的停靠位置
- `.fraction(0.0)`：禁止停靠,可全範圍拖拽
- `.fraction(0.5)`：中間停靠點
- `.fraction(1.0)`：最大停靠點
- `.medium`：預設中等停靠點
- `.large`：預設大停靠點
- `.height(高度)` ：彈出頁面的高度為指定高度，單位為：PX
- `.fraction(比例)`：彈出頁面占整個頁面的比例，範圍為：0～1

`.presentationDragIndicator(.visible / .hidden)`：可以隱藏或顯示頂部的小黑杠

`.interactiveDismissDisabled()`：使用此参數，彈出的 `Sheet` 頁面將無法收回

> `presentationDetents` 可以設置多個值，實現不同位置的懸停效果
> 
> `.presentationDetents([.fraction(0.3), .large, .medium, .height(130)])`
> 
> 這樣就可以實現不同位置的懸停效果