---
sidebar_label: "Compose 實現 MVP 與 MVVM 架構"
sidebar_position: 9
---

# Compose 實現 MVP 與 MVVM 架構

---

Compose 和 Flutter 都是現代的 UI 框架，它們都強調 UI 和狀態的分離。兩者都能用來實現不同的架構模式，例如 MVP 或 MVVM

## Compose 中實現 MVP 架構

MVP (Model-View-Presenter) 的關鍵在於 View 和 Presenter 的分離，讓 Presenter 負責處理業務邏輯，而 View 僅負責顯示 UI。Compose 本身是聲明式的 UI 框架，因此它的 View 部分通常是 Composable 函數。在這種架構中：

- View (Composable Functions)：負責顯示 UI 並接受用戶輸入。通常由 Activity 或 Fragment 作為入口，然後調用各種 Composable 函數來構建 UI
- Presenter：負責業務邏輯和與 Model 的交互。它從 View 接收事件，然後更新 Model，並最終將更新結果傳回 View
- Model：代表應用的數據層，可能包含遠端數據源、數據庫或其他數據來源

```
class MyPresenter(val view: MyView) {
    fun onButtonClicked() {
        val result = someBusinessLogic()
        view.showResult(result)
    }
}

interface MyView {
    fun showResult(result: String)
}

@Composable
fun MyScreen(presenter: MyPresenter) {
    Button(onClick = { presenter.onButtonClicked() }) {
        Text("Click me")
    }
}

class MyActivity : AppCompatActivity(), MyView {
    private lateinit var presenter: MyPresenter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        presenter = MyPresenter(this)
        setContent {
            MyScreen(presenter)
        }
    }

    override fun showResult(result: String) {
        // Update UI with result
    }
}
```

這種方式雖然能實現 MVP，但由於 Compose 的設計更適合聲明式 UI，這樣的實現可能會讓代碼顯得不太自然

## Compose 中實現 MVVM 架構

Compose 更自然地支持 MVVM (Model-View-ViewModel) 架構，這也是 Compose 中推薦的架構。MVVM 通過 ViewModel 來管理 UI 狀態，並且 ViewModel 直接與 Model 層交互

- View (Composable Functions)：只負責顯示 UI，並觀察來自 ViewModel 的狀態變化
- ViewModel：負責持有 UI 狀態和業務邏輯。它從 Model 層獲取數據，並將這些數據以狀態的形式提供給 View
- Model：和 MVP 中類似，負責應用的數據層

```
class MyViewModel : ViewModel() {
    private val _uiState = MutableStateFlow("")
    val uiState: StateFlow<String> = _uiState

    fun onButtonClicked() {
        _uiState.value = someBusinessLogic()
    }
}

@Composable
fun MyScreen(viewModel: MyViewModel) {
    val uiState by viewModel.uiState.collectAsState()

    Button(onClick = { viewModel.onButtonClicked() }) {
        Text("Click me")
    }

    Text(text = uiState)
}

class MyActivity : AppCompatActivity() {
    private val viewModel: MyViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyScreen(viewModel)
        }
    }
}
```

在這種方式中，ViewModel 通過 `StateFlow` 或 `LiveData` 向 Composable 函數提供狀態更新。這種方式在 Compose 中使用更為自然和直觀

## 總結

- Compose 實現 MVP：可以實現，但由於 Compose 的聲明式特性，這樣的架構會顯得不太自然，且過於複雜
- Compose 實現 MVVM：Compose 與 MVVM 天然契合，因為它更容易管理 UI 狀態，並且讓狀態驅動 UI 的更新。這也是推薦的架構模式