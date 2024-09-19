---
sidebar_label: "狀態管理"
sidebar_position: 6
---

# 狀態管理

---

## remember

remember 是一個 Compose 函式，用於保留 UI 元件的狀態。當你使用 remember 來保存狀態時，Composable 函式內的狀態將在元件重新構建時保持不變，直到 Composable 函式的終止。

例如，如果你在 Composable 函式中使用 remember 來保存計數器的值，則該值將在每次重新構建時保持不變，從而允許你在不同的 Composable 函式之間共享狀態。

## mutableStateOf

mutableStateOf 是一個 Compose 函式，用於創建可變的狀態容器。它返回一個包含狀態值的 MutableState 對象，你可以使用這個對象來設置、更改和檢索狀態的值。

當你想要在 Composable 函式中創建一個可變的狀態時，通常會使用 mutableStateOf。這使得你可以在 Composable 函式中更改狀態值，並且這些更改會觸發元件的重新構建。

在一開始的生命週期那部分有提到 State Management 

在 Compose 中為什麼建議使用 remember 來保存狀態，而不是直接使用普通的變數。這涉及到 Compose 中的特定行為和概念。

在 Compose 中，remember 不僅僅是用來保存狀態的變數，它還具有以下特點：
1. 生命週期管理： 使用 remember 宣告的變數會自動受到 Compose 的生命週期管理，這意味著它們的生命週期與 UI 組件的生命週期相關聯。當 UI 重建時，remember 變數的值將被保留，而普通的變數在 UI 重建時會丟失其值。

2. Compose 框架的特定行為： Compose 框架的設計方式導致了它對 UI 組件的重新構建頻率較高。這意味著在 Compose 中，您經常會面對 UI 的重新構建，而使用 remember 可以確保您的狀態在這些重新構建中得到保留。

3. 狀態管理的一致性： 在 Compose 中，使用 remember 來管理狀態是一種一致的方式。這樣做有助於代碼的可讀性和一致性，讓其他開發人員更容易理解和維護代碼。

在傳統的 Android 應用程式開發中，如果使用 Java 或 Kotlin 來開發，確實可以在按下按鈕時即時更新 UI。這是因為在這些框架中，UI 狀態和操作是直接耦合在一起的，可以在事件處理程序中立即更新 UI 元素，並且這些更改將立即反映在用戶界面上。

而Compose 和 Flutter 都是將 UI 和狀態分離的框架

在 Compose 中 UI 和狀態是分離的，這是一種更加反應式的設計方式。當 UI 的狀態發生變化時，Compose 會自動重構 UI，而不需要手動更新。這種方式使得在 UI 發生變化時，Compose 可以根據新的狀態重新構建 UI，並且能夠更好地處理複雜的 UI 更新邏輯

這種分離 UI 和狀態的設計方式使得 Compose 具有更高的重構頻率，因為當 UI 狀態發生變化時，Compose 可以自動重構相關的 UI 組件，而不需要您手動介入。這使得 Compose 更加靈活和高效，並且更容易實現複雜的 UI 邏輯

在 Compose 中，UI 是由不同的 Composable 函數構建的，這些函數是根據 UI 的狀態而不是直接更新的。可以通過 Compose 中提供的狀態管理機制（如 remember 和 mutableStateOf）來管理 UI 的狀態，這些機制會自動觸發 UI 的重構。當您使用這些機制來存儲數據時，Composable 函數會在數據發生變化時自動重構 UI，而無需手動調用任何更新方法

在 Flutter 中，UI 是由 Widget 構建的，而狀態則是由 StatefulWidget 或 Provider 等狀態管理庫來管理的。Flutter 的 Widget 構建方式和 Compose 的 Composable 函數類似，它們都是根據狀態的變化來重構 UI。Flutter 也提供了一個強大的狀態管理機制，可以幫助管理應用程序的狀態並根據需要更新 UI，而在 Flutter 中，可以直接宣告變量（例如 String 或 int）來存儲數據，但當數據發生變化時，需要調用 setState 方法來通知 Flutter 框架需要重建 UI。這意味著需要手動管理 UI 的更新。

雖然在 Java 或 Kotlin 中，可以在按下按鈕時即時更新 UI，但在 Compose 中，UI 的更新更多地是基於狀態的變化，並且是自動進行的，這使得 UI 和狀態之間的耦合更低，並且更容易處理複雜的 UI 邏輯


## Java & Kotlin 的計數器

```
// JAVA
public class MainActivity extends AppCompatActivity {
    private int count = 0;
    private TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        textView = findViewById(R.id.textView);
        Button button = findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                count++;
                textView.setText(String.valueOf(count)); // 由於 UI 與狀態是耦合的，所以能及時更新UI
            }
        });
    }
}

// KOTLIN
class MainActivity : AppCompatActivity() {
    private var count = 0
    private lateinit var textView: TextView
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        textView = findViewById(R.id.textView)
        val button = findViewById<Button>(R.id.button)
        button.setOnClickListener {
            count++
            textView.text = count.toString() // 由於 UI 與狀態是耦合的，所以能及時更新UI
        }
    }
}

```

## Flutter 的計數器

```
class CounterApp extends StatefulWidget {
  @override
  _CounterAppState createState() => _CounterAppState();
}

class _CounterAppState extends State<CounterApp> {
  int count = 0; // 雖可以與 java / kotlin依樣不用宣告成 remember

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Counter App'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'Count: $count',
                style: TextStyle(fontSize: 24),
              ),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  setState(() {
                    count++; // 但 Flutter 需要調用 setState 來更新 UI
                  });
                },
                child: Text('Increment'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

## Jetpack Compose 的計數器

```
Composable
fun CounterApp() {
    var count by remember { mutableStateOf(0) }
    // 需將變數宣告成 remember，透過 remember 等狀態管理機制來管理數據，這些機制會自動觸發 UI 的重構。當使用這些機制來存儲數據時，Composable 函數會在數據發生變化時自動重構 UI

    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
        modifier = Modifier.fillMaxSize()
    ) {
        Text(
            text = "Count: $count",
            fontSize = 24.sp,
            modifier = Modifier.padding(bottom = 16.dp)
        )
        Button(
            onClick = { count++ },
            modifier = Modifier.padding(8.dp)
        ) {
            Text(text = "Increment")
        }
    }
}

```
