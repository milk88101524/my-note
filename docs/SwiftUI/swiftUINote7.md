---
sidebar_label: "本地儲存"
sidebar_position: 7
---

# 本地儲存

---

在 iOS 中有多種方式可以儲存資料在本地端，具體選擇取決於應用的需求和複雜度。以下是常見的本地儲存方式：

1. UserDefaults
    - 適用場景：儲存簡單的鍵值對數據，適合用來儲存用戶偏好設置、應用狀態等
    - 特點：輕量且簡單，適合少量資料
    - 對應的技術：與 Android 的 `SharedPreferences` 相似
    - 缺點：不適合儲存大型或結構化的資料

2. Keychain
    - 適用場景：儲存敏感資訊，例如用戶的密碼、憑證、API 金鑰等
    - 特點：安全性高，Apple 提供的加密存儲
    - 缺點：用來儲存小型的敏感數據

3. Core Data
    - 適用場景：大型應用的數據儲存，包含複雜資料模型和關聯的資料
    - 特點：iOS 原生提供的 ORM（Object-Relational Mapping），可以用來儲存結構化數據，並提供查詢、關聯、異步操作等功能
    - 對應的技術：可以類比於 Android 的 `Room`，或者是 Flutter 的 `Hive` 和 `SQLite`
    - 缺點：學習曲線較陡，適合需要複雜資料管理的應用

4. SQLite    
    - 適用場景：需要輕量級資料庫管理，但不需要像 Core Data 那麼複雜的 ORM 功能
    - 特點：iOS 支持 `SQLite`，可以用來管理結構化資料（SQL 查詢）
    - 對應的技術：與 Android 的 `SQLite` 相似
    - 缺點：需要手動管理資料庫模式、查詢等，開發時比 Core Data 更加自由但也更繁瑣

5. File System（檔案系統）
    - 適用場景：儲存大型文件（如圖片、視頻、PDF）或自定義格式的數據
    - 特點：可以使用 iOS 提供的 `FileManager` 來管理本地檔案（文件）
    - 對應的技術：與 Android 的文件系統管理類似
    - 缺點：不適合處理結構化資料

6. 第三方庫（如 Realm）
    - 適用場景：需要一個介於 SQLite 和 Core Data 之間的選擇。`Realm` 是一個輕量且高效的本地資料庫，適合儲存複雜但不需要像 Core Data 那麼複雜的應用
    - 特點：簡單易用，比 Core Data 更輕量，查詢快
    - 缺點：需要引入第三方依賴

<!-- 
# iOS App interface

---

在 Xcode 中建立專案時會有兩種 interface 供開發者使用，分別是 SwiftUI 與 Storyboard 

## SwiftUI

SwiftUI 是一種聲明式框架。聲明式編程風格的核心思想是描述界面的最終狀態，然後讓框架負責在狀態發生變化時自動更新 UI。

### 特點

1. 聲明式語法：
    - 開發者定義 UI 的最終狀態，而不是描述如何一步步構建 UI
    - UI 元素和其狀態緊密結合，當狀態改變時，UI 自動更新
2. 數據驅動：
    - 使用狀態管理（如 `@State`、`@Binding`、`@ObservedObject` 等）來自動刷新 UI
3. 可組合性：
    - UI 元素是可以組合的，構建複雜界面時可以將小的 UI 組件組合成大的 UI 組件

```
import SwiftUI

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

@main
struct CounterApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

// 在這個範例中，`@State` 屬性用於管理狀態，當 `counter` 變化時，UI 自動更新
```

> 此為使用 SwiftUI 實作的計數器 demo app

## Storyboard

Storyboard 是命令式編程風格的代表，使用視覺化的工具來設計和構建 UI。開發者需要明確地描述如何一步步構建和更新界面

### 特點

1. 命令式語法：
    - 需要手動設置界面元素的屬性和佈局。
    - 必須顯式地定義界面更新的每一步。
2. 視覺化編輯：
    - 使用 Interface Builder 提供的視覺化工具來拖放界面元素，設置佈局約束。
3. 代碼與界面分離：
    - UI 設計主要在 Storyboard 文件中進行，邏輯處理在 ViewController 中進行。
4. 繁瑣的狀態管理：
    - 狀態改變時，需要手動更新 UI，較為繁瑣

```
import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var counterLabel: UILabel!
    private var counter = 0

    override func viewDidLoad() {
        super.viewDidLoad()
        updateCounterLabel()
    }

    @IBAction func incrementCounter(_ sender: UIButton) {
        counter += 1
        updateCounterLabel()
    }

    private func updateCounterLabel() {
        counterLabel.text = "Counter: \(counter)"
    }
}

// 在這個範例中，使用 Interface Builder 設計 UI，然後在 ViewController 中處理邏輯。當按鈕被點擊時，手動更新標籤的文字
```

> 此為使用 Storyboard 實作的計數器 demo app

## SwiftUI 與 Storyboard 的差異

### 定義和概念

SwiftUI：

* 聲明式 UI 框架：SwiftUI 使用聲明式語法，開發者描述應用應該顯示的狀態，框架負責根據狀態自動更新 UI
* 代碼驅動：UI 是通過 Swift 代碼構建的，這使得開發者能夠在同一文件中編寫和查看 UI 和邏輯
* 即時預覽：Xcode 提供了即時預覽功能，開發者可以立即看到代碼變更對 UI 的影響，而不需要重新運行應用

Storyboard：

* 視覺化設計工具：Storyboard 提供了一個可視化編輯器，開發者可以通過拖放操作來設計應用界面，設置視圖和控制器之間的關係
* 界面生成文件：每個 Storyboard 生成一個 XML 文件，描述應用的 UI 結構
* 分離視圖和代碼：UI 通常在 Storyboard 中設計，而邏輯代碼在 ViewController 文件中編寫，這樣在視圖和控制器之間需要通過代碼來連接和交互

### 開發體驗

SwiftUI：

* 統一編碼：所有的 UI 和邏輯都通過 Swift 代碼編寫，這樣可以更容易地保持代碼的連貫性和可讀性
* 熱重載：SwiftUI 支持熱重載，開發者可以立即看到代碼變更的效果，大大加快了開發速度
* 聲明式語法：開發者描述應用的最終狀態，而不需要管理 UI 狀態的變更過程

Storyboard：

* 視覺化設計：開發者可以通過視覺化工具設計界面，這對於 UI 複雜的應用可能更直觀
* 手動同步：需要手動將 Storyboard 中的視圖和 ViewController 中的代碼進行同步，這在大型項目中可能會增加維護成本
* 即時反饋：雖然有即時預覽功能，但不像 SwiftUI 那樣直觀和即時

### 功能和靈活性

SwiftUI：

* 跨平台支持：SwiftUI 支持 iOS、macOS、watchOS 和 tvOS，允許開發者使用相同的框架構建不同平台的應用
* 現代功能：SwiftUI 支持許多現代功能，如綁定、動畫和手勢，這些功能可以更簡單地實現複雜的交互和動態效果
* 適應性設計：SwiftUI 的組件可以自適應不同屏幕和設備，提供一致的用戶體驗

Storyboard：

* 經驗和工具：Storyboard 已經存在很長時間，許多開發者對其非常熟悉，並且有大量的工具和資源支持
* 適合複雜的界面：對於非常複雜的界面設計，特別是需要大量視覺化布局和過渡的應用，Storyboard 可能更直觀和高效
* 手動控制：Storyboard 需要更多的手動配置和管理，這在一些情況下可以提供更高的靈活性，但也增加了開發的複雜性

### 總結

SwiftUI 更適合現代應用的開發，特別是需要快速迭代和跨平台支持的項目。其聲明式語法和即時預覽功能能夠大大提高開發效率和代碼的可讀性
Storyboard 是一種更傳統的方式，適合那些更依賴於視覺化設計工具的開發者，特別是那些需要處理複雜 UI 和過渡效果的應用

> 若在建立 Swift 專案時 `interface` 選擇 `Storyboard` 的話，他設計 UI 的方式就很像在 Android studio 中的 Design 模式 ，若是選擇 `SwiftUI` 的話，他設計 UI 的方式則會像在 Jetpack Compose 與 Flutter 設計 UI 的方式 -->