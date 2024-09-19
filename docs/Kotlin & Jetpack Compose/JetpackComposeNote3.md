---
sidebar_label: "Widgets(Compose)"
sidebar_position: 4
---

# Widgets(Compose)

這邊介紹各個 Widget(Compose) 的參數代表什麼意思

---

## Scaffold 

`Scaffold` 是一個提供基本應用結構的組件，它通常用於設計應用程序的主要佈局。`Scaffold` 支持插槽，比如 `topBar`、`bottomBar`、`floatingActionButton`、`drawerContent` 等等，這些插槽有助於快速構建標準化的應用界面

例如，可以使用 `Scaffold` 來創建一個包含頂部應用欄、主內容和底部導航欄的應用界面

```
Scaffold(
    topBar = { TopAppBar(title = { Text("My App") }) },
    bottomBar = { BottomNavigation { /* Navigation Items */ } },
    floatingActionButton = { FloatingActionButton(onClick = { /* action */ }) { Text("+") } }
) {
    // 主內容區域
    Text("Hello, World!", modifier = Modifier.padding(it))
}
```

下面是 Scaffold 各參數的意思

```
Composable
fun Scaffold(
    modifier: Modifier = Modifier, // 用於指定修飾符，例如布局大小、填充等
    topBar: @Composable () -> Unit = {}, // 用於定義頂部欄的內容，預設為空
    bottomBar: @Composable () -> Unit = {}, // 用於定義底部欄的內容，預設為空
    snackbarHost: @Composable () -> Unit = {}, // 用於顯示 Snackbar 的內容，預設為空
    floatingActionButton: @Composable () -> Unit = {}, // 用於定義懸浮按鈕的內容，預設為空
    floatingActionButtonPosition: FabPosition = FabPosition.End,
    // 用於指定浮動操作按鈕的位置，可以是 FloatingActionButtonPosition.Center、FloatingActionButtonPosition.Start、FloatingActionButtonPosition.End 等，預設為在右下角
    
    containerColor: Color = MaterialTheme.colorScheme.background, // 用於指定 Scaffold 的背景色
    contentColor: Color = contentColorFor(containerColor), // 用於指定內容的顏色，例如文字顏色
    contentWindowInsets: WindowInsets = ScaffoldDefaults.contentWindowInsets,
    // 用於定義窗口內邊距，預設為 ScaffoldDefaults 中的內邊距
    
    content: @Composable (PaddingValues) -> Unit // 這是一個接受 PaddingValues 參數的 lambda 函數，用於定義 Scaffold 的主要內容
    
)   {
		// 這邊用來放置子 Widget
	}
```

## Surface

`Surface` 是一個基礎組件，用於提供背景色、形狀、陰影等基本視覺效果。它通常用來包裹其他組件，為它們提供統一的樣式和背景。`Surface` 的用途更為廣泛，可以應用於任何需要這些基本樣式的場景

例如，可以使用 `Surface` 來為一個卡片、按鈕或是頁面的某一部分設置背景色和圓角

```
Surface(
    color = MaterialTheme.colorScheme.background,
    shape = RoundedCornerShape(8.dp),
    modifier = Modifier.padding(16.dp)
) {
    Text("Hello, World!")
}
```

> ### 為什麼 `Surface` 不用 `@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")` 而 `Scaffold` 需要？
> - `Scaffold` 的主內容區域 (`content`) 會自動接收一個內部填充參數（padding parameter），這個參數是用來確保內容不會被 `topBar`、`bottomBar` 等覆蓋。因此，當你在 `Scaffold` 的 `content` 區域中直接使用 `Modifier.padding(it)` 時，如果你沒有使用這個 `padding` 參數，Lint 會給出警告，提醒你有一個未使用的參數  
>     為了解決這個問題，你可以選擇： 
> 
>     - 確保你在 `content` 中使用了這個 `padding` 參數
>     - 或者使用`@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")` 來忽略這個警告
>     
>     而 `Surface` 沒有這個問題，因為它不會自動傳遞任何內部填充參數給內容，所以不需要 `@SuppressLint`。 
> 
> 總結來說，`Surface` 是一個基本的樣式容器，而 `Scaffold` 則是用來構建應用程序的主結構。由於 `Scaffold` 有特定的填充參數用法，這可能導致未使用參數的警告，因此需要使用 `@SuppressLint` 來忽略該警告


## Top App Bar

```
ExperimentalMaterial3Api
Composable
fun MediumTopAppBar(
		title: @Composable () -> Unit,
		// 這是一個 Composable 函式，用於定義 Top App Bar 中心位置的標題。你可以在這個參數中傳遞一個 Composable 函式，用於呈現標題內容。等同於可放入 Widget。
		
		modifier: Modifier = Modifier,
		// 這是一個用於修改 Top App Bar 的 Modifier 物件。Modifier 用於指定布局和繪製屬性，例如大小、對齊方式等。默認情況下，這個參數是空的，表示 Top App Bar 沒有任何額外的修改。
		
		navigationIcon: @Composable () -> Unit = {},
		// 這是一個 Composable 函式，用於定義 Top App Bar 左側的導航圖示。你可以在這個參數中傳遞一個 Composable 函式，用於呈現導航圖示的內容。默認情況下，這個參數是一個空的 Composable 函式，表示沒有導航圖示。
		
		actions: @Composable RowScope.() -> Unit = {},
		// 這是一個 Composable 函式，用於定義 Top App Bar 右側的操作項目。你可以在這個參數中傳遞一個 Composable 函式，用於呈現操作項目的內容。默認情況下，這個參數是一個空的 Composable 函式，表示沒有任何操作項目。
		
		windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
		// 這是一個用於定義 Top App Bar 的 WindowInsets，用於管理系統視窗的邊界。默認情況下，使用 TopAppBarDefaults.windowInsets 獲取默認的 WindowInsets。
		
		colors: TopAppBarColors = TopAppBarDefaults.mediumTopAppBarColors(),
		// 這是一個用於定義 Top App Bar 的顏色配置。你可以在這個參數中設置 Top App Bar 的背景色、文字顏色等。默認情況下，使用 TopAppBarDefaults.mediumTopAppBarColors() 獲取默認的顏色配置。
		colors：有四種顏色參數分別為
		● containerColor：表變顏色
		● scrolledContainerColor：滑動後表面顏色
		● navigationIconContentColor：左側 Icon 填充顏色
		● titleContentColor：title 字體顏色
		● actionIconContentColor：右側 Icon 填充顏色

		scrollBehavior: TopAppBarScrollBehavior? = null
		// 這是一個可選的參數，用於定義 Top App Bar 的滾動行為。你可以在這個參數中指定 Top App Bar 在滾動時的行為，例如固定在屏幕頂部、隱藏等。默認情況下，這個參數是空的，表示不指定特定的滾動行為。
)
```

> 補充：在 Scaffold 中使用 Top App Bar 時需要在 Scaffold 的 子Widget Layout ( Column / Row ) 中設定 padding( it ) 
> 這個是能讓 Scaffold 去計算 Top App Bar 的大小讓 Scaffold 的子 Widget 能顯示在 Top App Bar 來避免 Scaffold 的子 Widget 被 Top App Bar 擋住，這裡的 it 指的是從 Scaffold 接收到的 PaddingValues 對象，其中包含了關於如何對 Scaffold 進行 padding 的資訊 

在 Flutter 中設置了 AppBar 後，Flutter 會自動調整其他部件的布局，以確保子部件不被 AppBar 蓋住。這是因為 Flutter 的布局系統已經預設了一些行為，包括將 AppBar 視為應用程式的頂部元素，並將其他部件從 AppBar 的下方開始排列

然而，在 Jetpack Compose 中，你需要手動處理這些布局。當你添加了 TopAppBar 或 ModalDrawer 之類的元素後，Scaffold 不會自動調整其餘部分的布局。這就需要你明確地告訴 Compose 如何排列這些部件

因此，當你使用 Jetpack Compose 時，你需要明確地為 Scaffold 的主要內容添加 padding，以避免被 TopAppBar 或 ModalDrawer 覆蓋。這種方式讓你更加靈活地控制布局，但也需要更多的手動處理

## ModalNavigationDrawer 

1. 函式簽名：
```
fun ModalNavigationDrawer(
    drawerContent: @Composable () -> Unit, // 用於描述抽屜的內容
    modifier: Modifier = Modifier, // 用於指定修改器，可以在調用時修改布局樣式
    drawerState: DrawerState = rememberDrawerState(DrawerValue.Closed),
    // 用於追蹤抽屜狀態的 DrawerState 物件。預設情況下，它會記住抽屜的關閉狀態
    
    gesturesEnabled: Boolean = true,
    // 用於指定是否啟用手勢來打開和關閉抽屜，預設為 true
    
    scrimColor: Color = DrawerDefaults.scrimColor,
    // 用於指定遮罩層的顏色，預設為抽屜的預設遮罩顏色
)
```
2. 變數宣告：
```
val scope = rememberCoroutineScope()
// 使用 rememberCoroutineScope() 創建的協程作用域，用於管理協程的生命週期
val navigationMenu = getString(Strings.NavigationMenu)
// 導航選單的字串資源
val minValue = -with(LocalDensity.current) { NavigationDrawerTokens.ContainerWidth.toPx() }
val maxValue = 0f
// 定義抽屜的最小和最大值
val anchors = mapOf(minValue to DrawerValue.Closed, maxValue to DrawerValue.Open)
// 定義抽屜的錨點，指定了抽屜打開和關閉時的位置
val isRtl = LocalLayoutDirection.current == LayoutDirection.Rtl
// 確定是否使用了從右到左的佈局方向
```
3. 佈局結構：

	* 使用 Box 組件作為根容器，用於放置主內容、遮罩層和抽屜內容。
	* 主內容位於 Box 中的第一個 Box 中。
	* 遮罩層使用 Scrim 組件，通過 drawerState.isOpen 控制遮罩層的打開和關閉狀態，同時在關閉遮罩層時關閉抽屜。
	* 抽屜內容位於第二個 Box 中，通過偏移量調整抽屜的位置，同時為抽屜添加語義信息，使其具有輔助功能。
4. 手勢和動畫：
	* 使用 swipeable 函數為抽屜啟用滑動手勢，通過 anchors 指定抽屜的打開和關閉位置。
	* 使用 Scrim 組件實現遮罩層，通過手勢控制遮罩層的顯示和隱藏，並附加動畫效果。

## ModelDrawerSheet

1. 函式簽名：
```
fun ModalDrawerSheet(
    modifier: Modifier = Modifier, // 用於指定修改器，可以在調用時修改布局樣式
    drawerShape: Shape = DrawerDefaults.shape,
    // 用於指定抽屜的形狀，預設為 DrawerDefaults.shape
    
    drawerContainerColor: Color = MaterialTheme.colorScheme.surface,
    // 用於指定抽屜容器的顏色，預設為 MaterialTheme.colorScheme.surface
    
    drawerContentColor: Color = contentColorFor(drawerContainerColor),
    // 用於指定抽屜內容的顏色，預設為 contentColorFor(drawerContainerColor)，根據容器顏色計算適合的內容顏色
    
    drawerTonalElevation: Dp = DrawerDefaults.ModalDrawerElevation,
    // 用於指定抽屜的色調高度，預設為 DrawerDefaults.ModalDrawerElevation
    
    windowInsets: WindowInsets = DrawerDefaults.windowInsets,
    // 用於指定窗口插入，預設為 DrawerDefaults.windowInsets，用於控制抽屜的邊界設置
    
) {
    DrawerSheet(
        windowInsets,
        modifier,
        drawerShape,
        drawerContainerColor,
        drawerContentColor,
        drawerTonalElevation,
        content
    )
}
```
2.  呼叫 DrawerSheet 函式：
```
DrawerSheet(
        windowInsets,
        modifier,
        drawerShape,
        drawerContainerColor,
        drawerContentColor,
        drawerTonalElevation,
        content
)
```
此函式呼叫了名為 DrawerSheet 的其他自訂 Composable 函式，並將所有參數傳遞給它
DrawerSheet 這邊可以調整 Drawer ，例如形狀、顏色等


ModelNavigationDrawer可搭配ModelDrawerSheet來做使用

```
ModalNavigationDrawer(
        drawerContent = {
            ModalDrawerSheet (
            ) {
                // 這邊用來放置 Drawer 的 items
            }
        },
 )   {
		// 這邊用來放置 View
	}
```

> 補充：在 Jetpack Compose 中使用 Drawer 不像 Flutter 一樣是放在 Scaffold 裡面的，而是宣告在 Scaffold 的外面，使用方式有點像 Java 的 DrawerLayout 使用方式

Jetpack Compose Drawer 的使用方式
```
ModalNavigationDrawer(
        drawerContent = {
            ModalDrawerSheet (
                drawerShape = RectangleShape,
                drawerTonalElevation = 280.dp,
            ) {
                Column (
                    modifier = Modifier
                        .padding(10.dp)
                ) {
                    NavigationDrawerItem(
                        label = {
                            Text(text = "test")
                        },
                        selected = false,
                        onClick = { /*TODO*/ })
                }
            }
        },
    ) {
        Scaffold(
            floatingActionButton = {
                FloatingActionButton(
                    modifier = Modifier.padding(10.dp),
                    onClick = { count++ }
                ) {
                    Icon(Icons.Filled.Add, contentDescription = null)
                }
            }
        ) {
            
        }
    }
```

Flutter Drawer 的使用方式
```
Scaffold(
      appBar: AppBar(
        title: const Text(
          "Product List",
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Colors.black,
        iconTheme: const IconThemeData(color: Colors.white),
      ),
      body: SafeArea(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(5.0),
            child: ListView.builder(
              itemBuilder: (context, int index) {
                return ProductItem(
                  productName: "$index",
                  productPrice: "$index",
                  productShow: "$index",
                  onEditTap: () =>
                      Navigator.pushNamed(context, '/product_edit'),
                  onDeleteTap: () {},
                );
              },
              itemCount: 4,
            ),
          ),
        ),
      ),
      drawer: const DrawerItem(),
      floatingActionButton: FloatingActionButton(
        onPressed: () => Navigator.pushNamed(context, '/product_add'),
        child: const Icon(Icons.add),
      ),
    );
```

Java DrawerLayout ( Drawer ) 的使用方式
```
	<androidx.drawerlayout.widget.DrawerLayout
	    android:id="@+id/drawerlayout"
	    xmlns:android="http://schemas.android.com/apk/res/android"
	    xmlns:app="http://schemas.android.com/apk/res-auto"
	    xmlns:tools="http://schemas.android.com/tools"
	    android:layout_width="match_parent"
	    android:layout_height="match_parent"
	    tools:context=".MainActivity">
	    <androidx.constraintlayout.widget.ConstraintLayout
	        android:layout_width="match_parent"
	        android:layout_height="match_parent">
	        <androidx.appcompat.widget.Toolbar
	            android:id="@+id/toolbar"
	            android:layout_width="match_parent"
	            android:layout_height="wrap_content"
	            app:title="123"
	            app:titleTextColor="@color/white"
	            android:background="@color/color_primary"
	            android:minHeight="?attr/actionBarSize"
	            app:layout_constraintTop_toTopOf="parent"
	            app:layout_constraintStart_toStartOf="parent"
	            app:layout_constraintEnd_toEndOf="parent"
	            android:theme="@style/ToolbarTheme"
	            app:titleTextAppearance="@style/TitleTextSize"
	            app:popupTheme="@color/white" />
	        <FrameLayout
	            android:id="@+id/fragment_container"
	            android:layout_width="0dp"
	            android:layout_height="0dp"
	            app:layout_constraintTop_toBottomOf="@id/toolbar"
	            app:layout_constraintStart_toStartOf="parent"
	            app:layout_constraintEnd_toEndOf="parent"
	            app:layout_constraintBottom_toBottomOf="parent"/>
	    </androidx.constraintlayout.widget.ConstraintLayout>
	    <com.google.android.material.navigation.NavigationView
	        android:id="@+id/navigationview"
	        android:layout_width="280dp"
	        android:layout_height="match_parent"
	        android:layout_gravity="start"
	        android:background="@color/white"
	        app:menu="@menu/drawer_menu" />
</androidx.drawerlayout.widget.DrawerLayout>
```
從上面的程式碼中可以看到 Java 的Drawer 跟 Jepack Compose 的 Drawer 是宣告在 View ( Fragment ) / Scaffold 的外面，而 Flutter 的 Drawer 是宣告在 Scaffold 裡面

若要在 Jetpack Compose 實現 Drawer 切換頁面且能固定 Drawer 使 Drawer 能供所有頁面使用的話需要將 Drawer 放置 MainActivity 中且需要 drawerState 來讓 Drawer 能夠切換狀態 ( 使 Drawer 能夠切換頁面後關閉 Drawer )

```
val drawerState = rememberDrawerState(initialValue = DrawerValue.Closed)
// 這行程式碼創建了一個記住狀態的抽屜狀態，初始狀態為關閉。這個狀態會被傳遞給 ModalNavigationDrawer，用於控制抽屜的開啟和關閉
val navController = rememberNavController()
// 這行程式碼創建了一個用於導航的 NavController，用於管理不同畫面之間的導航

ModalNavigationDrawer(
	drawerState = drawerState,
	drawerContent = {
		AppDrawer(navController = navController, drawerState = drawerState)
	}
) 
// 這是一個支持導航的自定義抽屜。它有兩個參數：
// drawerState：傳入之前創建的抽屜狀態，用於控制抽屜的開啟和關閉
// drawerContent：這是一個 @Composable 函數，用於定義抽屜的內容
// 在這裡，我們調用了自定義的 AppDrawer 組件，並傳入了 navController 和 drawerState
{
	NavHost(
		navController = navController,
		startDestination = Screen.MainPage.route
	)
	// 這是一個用於顯示不同畫面的容器，根據傳入的 navController 和定義的路由，顯示相應的畫面。它有兩個參數:
	// navController：傳入之前創建的導航控制器，用於管理畫面之間的導航
	// startDestination：指定導航開始時所顯示的畫面，這裡指定為 Screen.MainPage.route，即主頁
	{
		composable(Screen.MainPage.route) {
			MainPage(navController)
		}
		composable(Screen.CookbookPage.route) {
			CookbookPage(navController)
		}
		// 這是一個用於定義畫面內容的函數。在這裡，我們為兩個畫面分別定義了內容：
		// Screen.MainPage.route 對應的是 MainPage 組件。
		// Screen.CookbookPage.route 對應的是 CookbookPage 組件
	}
}

fun AppDrawer(navController: NavController, drawerState: DrawerState) {
// navController : 用於導航的 NavController 物件。它負責管理不同畫面之間的導航
// drawerState： 這是一個 DrawerState 物件，用於控制抽屜的狀態，包括打開和關閉

    val scope = rememberCoroutineScope() // 創建了一個協程作用域，用於在點擊抽屜項後執行異步操作

    ModalDrawerSheet (
        drawerShape = RectangleShape,
        drawerTonalElevation = 280.dp,
    ) {
        Column {
            DrawerItem (
                "Home",
                Icons.Filled.Home,
                onClick = {
                    navController.navigate(Screen.MainPage.route)
                    scope.launch {
                        drawerState.close()
                    }
                    // 表示使用協程在點擊後異步執行關閉抽屜的操作
                    // 這樣可以避免在 UI 线程上執行長時間運行的任務，保持界面的流暢性
                }
            )
            DrawerItem(
                "Cookbook",
                Icons.Filled.Create,
                onClick = {
                    scope.launch {
                        drawerState.close()
                    }
                    navController.navigate(Screen.CookbookPage.route)
                }
            )
        }
    }
}
```
> 在設定 Drawer 開啟或關閉時必須使用 drawer.close / drawer.open，不是用 drawer.isClose / drawer.isOpen

## BottomAppBar

```
fun BottomAppBar(
    modifier: Modifier = Modifier, // 用於指定 BottomAppBar 的修飾符，例如大小、位置等
    containerColor: Color = BottomAppBarDefaults.containerColor,
    // 用於設置底部應用程式欄的背景顏色
    
    contentColor: Color = contentColorFor(containerColor),
    //  用於設置底部應用程式欄內容的顏色，通常是文字的顏色
    
    tonalElevation: Dp = BottomAppBarDefaults.ContainerElevation,
    // 用於設置底部應用程式欄的海拔高度，用於產生陰影效果
    
    contentPadding: PaddingValues = BottomAppBarDefaults.ContentPadding,
    // 用於設置內容區域的填充，以確保內容不會靠得太近邊緣
    
    windowInsets: WindowInsets = BottomAppBarDefaults.windowInsets,
    // 用於處理窗口插入，通常用於在 Android 中處理狀態欄和導航欄的高度
) {
    Surface(
        color = containerColor,
        contentColor = contentColor,
        tonalElevation = tonalElevation,
        // TODO(b/209583788): Consider adding a shape parameter if updated design guidance allows
        shape = BottomAppBarTokens.ContainerShape.toShape(),
        modifier = modifier
    ) {
        Row(
            Modifier
                .fillMaxWidth()
                .windowInsetsPadding(windowInsets)
                .height(BottomAppBarTokens.ContainerHeight)
                .padding(contentPadding),
            horizontalArrangement = Arrangement.Start,
            verticalAlignment = Alignment.CenterVertically,
            content = content
        )
    }
}

// 在 Surface 中，我們設置了底部應用程式欄的顏色、內容顏色和形狀。在 Row 中，我們將內容放置在水平方向上，並使用提供的填充和對齊方式將內容放置在合適的位置
```

> 補充：在 Jetpack Compose 中的 BottomAppBar 可以在裡面放入 Widget 來自定義底部導航欄所要顯示的東西，例如 Card 、FloatActionButton 等等，比較自由但比較麻煩，並沒有像 Java 中的 Bottom 宣告完他的 ID 與綁定的 menu 就好了，或者像 Flutter 的 Bottom 有 BottomNavigationBarItem 可以用

Java 中使用 Bottom 的方式
```
<com.google.android.material.bottomnavigation.BottomNavigationView
        android:id="@+id/bottom"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        app:labelVisibilityMode="labeled"
        android:background="#c8c8c8"
        app:menu="@menu/bottom_menu"  // 若要新增 item 則要到這個 menu 中做新增
        app:itemIconTint="@color/bottom_color"
        app:itemTextColor="@color/bottom_color"
        app:layout_constraintBottom_toBottomOf="parent"/>
```

Flutter 中使用 Bottom 的方式
```
Scaffold(
      body: _pages[_currentIndex],
      bottomNavigationBar: ClipRRect(
        child: BottomNavigationBar(
          currentIndex: _currentIndex,
          onTap: (index) {
            setState(() {
              _currentIndex = index;
            });
          },
          items: const [
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: 'Home',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.settings),
              label: 'Settings',
            ),
          ],
        ),
      ),
    );
```
ClipRRect 是 Flutter 中的一個 Widget，用於裁剪其子 Widget 的圓角。它會將子 Widget 的邊緣裁剪成圓角，而不是保留直角。這通常用於創建圓角效果，使得元素外觀更加美觀

在這邊可以看到說宣告完 Bottom 可使用 BottomNavigationBarItem 來宣告 Bottom 的物件

Jetpack Compose 中使用 Bottom 的方式
```
BottomAppBar {
	Row (
	modifier = Modifier.fillMaxWidth(),
	verticalAlignment = Alignment.CenterVertically,
	horizontalArrangement = Arrangement.SpaceAround
	) {
		Text(text = "test")
		Text(text = "test")
		}
}
```
在 Jetpack Compose 中是可以把 Widget 放入 Bottom 中以實現自定義 Bottom 的效果

## FloatingActionButton

```
fun FloatingActionButton(  
    onClick: () -> Unit,
	// 這是 FAB 的點擊事件處理器，也就是當使用者點擊 FAB 時所觸發的操作。這個參數是必須提供的
	
    modifier: Modifier = Modifier,
	// `Modifier` 用來修飾這個 FAB 的佈局、外觀、行為等屬性。可以使用 `Modifier` 來設置尺寸、邊距、背景等
	
    shape: Shape = FloatingActionButtonDefaults.shape,
	// 控制 FAB 的形狀。默認情況下，FAB 是圓形的，但可以傳遞自定義的 `Shape` 來改變它的形狀
	
    containerColor: Color = FloatingActionButtonDefaults.containerColor,  
	設定 FAB 的背景顏色。默認顏色依據 Material Design 的色彩系統自動配置，但可以傳遞自定義顏色來改變 FAB 的背景
	
    contentColor: Color = contentColorFor(containerColor),
	// 設定 FAB 上內容的顏色，例如圖標或文字的顏色。這通常與 `containerColor` 對比來確保可讀性
	
    elevation: FloatingActionButtonElevation = FloatingActionButtonDefaults.elevation(),
	控制 FAB 的陰影高度，這影響了它在畫面上的層次感。可以透過這個參數來設置不同狀態下（例如正常狀態和按下狀態）的陰影高度
	
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
	用來追踪使用者的互動狀態，例如按下、拖動等。默認會建立一個新的 `MutableInteractionSource`，但可以傳遞自定義的來改變這個行為
	
    content: @Composable () -> Unit,
	// 這是 FAB 的內容部分，通常是顯示在 FAB 中間的圖標或文字。它是一個可組合的 lambda 函數，可以自定義 FAB 裡顯示的任何內容
)  {
		// 這邊用來放置子 Widget
	}
```

## Column : 垂直 Layout

```
Composable
inline fun Column(
    modifier: Modifier = Modifier,   // 用於設置 Column 的佈局屬性，例如大小、位置、填充等
    verticalArrangement: Arrangement.Vertical = Arrangement.Top,
    // 用於設置 Column 的垂直排列，預設是由上而下
	// 可以是 Arrangement.Top、Arrangement.Bottom、Arrangement.Center 等
	
    horizontalAlignment: Alignment.Horizontal = Alignment.Start,
    // 用於設置 Column 的水平排列，預設是由左而右
    // 可以是 Alignment.Start、Alignment.Center、Alignment.End 等
)   {
		// 這邊用來放置子 Widget
	}
```

## Raw : 水平 Layout

```
Composable
fun Row(
    modifier: Modifier = Modifier, // 用於設置 Row 的佈局屬性，例如大小、位置、填充等
    horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
    // 用於設置 Row 的水平排列，預設是由左而右
    // 可以是 Arrangement.Start、Arrangement.End、Arrangement.Center 等
    
    verticalAlignment: Alignment.Vertical = Alignment.Top,
    //用於設置 Row 的垂直排列，預設是由上而下
    // 可以是 Arrangement.Top、Arrangement.Bottom、Arrangement.Center 等
)   {
		// 這邊用來放置子 Widget
	}
```

## Modifier

可設置 Widget 的大小、外觀、位置、填充、邊距等
* Padding 填充：可以設置元素的內部填充，讓其內容與元素邊緣之間保持一定的距離
	```
	Box(
		modifier = Modifier.padding(16.dp)
	) {
		Text("Hello, Jetpack Compose!")
	  }
	```

* Size 大小：可以設置元素的寬度和高度
	```
	Box(
		modifier = Modifier.background(color = Color.Blue)
	) {
	    Text("Box with blue background")
	  }
	``` 
* Alignment 對齊：可以設置元素的對齊方式，例如左對齊、上對齊等
	```
	Box(
	    modifier = Modifier.align(Alignment.CenterHorizontally)
	) {
	    Text("Centered Text")
	  }
	```
* Background Color 背景色：可以設置元素的背景色
	```
	Box(
	    modifier = Modifier.background(color = Color.Blue)
	) {
	    Text("Box with blue background")
	  }
	```  
* Stacking 疊加：可以設置元素的位置偏移，用於將元素疊加在其他元素之上
	```
	Box(
	    modifier = Modifier.offset(y = 20.dp)
	) {
	    Text("Text with offset")
	  }
	```
> 需注意的點：
	參考：**https://juejin.cn/post/7053774854910115853**
要注意的是Modifier對順序是敏感的，不同的順序有不同的效果： 
1. 例如先呼叫padding、後background => margin效果；
	先呼叫background，後padding => padding效果
Compose本身不存在margin屬性調用，是透過padding+調用順序的不同就可以實現我們習慣的padding和margin效果 
2. cli​​ckable放的順序不同，效果也是不一樣的，例如放在padding函數的前面，其點擊生效的範圍會包含padding的區域
	通用的設定一般都放在Modifier, 專案的設定就放著控制函數裡。例如點擊事件clickable，但Button控制比較特殊 Button就是用來點擊的，所以為了方便，開發者直接給了一個onClick函數，就不需要透過Modifier來設定
	```
		Column(
		    Modifier.padding(8.dp).background(Color.Red)
		) {
	    Text(
	        text = "LinearLayout and Column",
	        // clickable放在前面和後面的效果也是不一樣的，放在前面會對後續的padding也生效
	        Modifier
	            .clickable {
	                Log.d(TAG, "onCreate: click text")
	            }
	            .background(Color.Yellow, RoundedCornerShape(3.dp))
	            .padding(10.dp)
	            , fontSize = 20.sp
	    )
	    Image(
	        painterResource(id = R.drawable.nb), "icon",
	        Modifier
	            .clip(CircleShape)
	            .size(250.dp)
	    )
	}
	```
	
## Text : 文字方塊

```
fun Text(
	text: String, // 用於設定 Text 的文字
	modifier: Modifier = Modifier, // 用於設置文字的佈局屬性，例如大小、位置、填充等
	color: Color = Color.Unspecified, // 用於設定字體顏色
	fontSize: TextUnit = TextUnit.Unspecified, // 用於設定字體大小
	fontStyle: FontStyle? = null,
	// 用於設定字體的風格，允許在調用函式時選擇不傳遞 fontStyle 參數，或者將其設置為 null
	
	fontWeight: FontWeight? = null,
	// 用於設定字體的粗細，允許在調用函式時選擇不傳遞 fontWeight參數，或者將其設置為 null
	
    fontFamily: FontFamily? = null,
    // 用於設定字體的字型系列，允許在調用函式時選擇不傳遞 fontWeight參數，或者將其設置為 null
       
    letterSpacing: TextUnit = TextUnit.Unspecified, // 用於設定文字間距
    textDecoration: TextDecoration? = null,
    // 用於設定字體的裝飾，例如下劃線、刪除線等，允許在調用函式時選擇不傳遞 textDecoration參數，或者將其設置為 null
    
	textAlign: TextAlign? = null, // 用於設定字體對齊方式
	lineHeight: TextUnit = TextUnit.Unspecified,  // 用於設定文字行高
	overflow: TextOverflow = TextOverflow.Clip, // 用於設定文字溢出時的處理方式，例如裁剪、省略號等。
	softWrap: Boolean = true, // 用於設定是否允許自動換行
	maxLines: Int = Int.MAX_VALUE,  // 用於設定文字最大行數
	minLines: Int = 1,  // 用於設定文字最小行數
	onTextLayout: ((TextLayoutResult) -> Unit)? = null,
	// 文字版面配置的回調函式，當文字版面發生變化時被調用
	
	style: TextStyle = LocalTextStyle.current
	// 用於指定額外的文字樣式，例如從 LocalTextStyle 獲取的全局樣式
)
```

## TextField / OutlinedTextField

```
fun TextField / OutlinedTextField (
    value: String, // 輸入框中顯示的文字值
    onValueChange: (String) -> Unit, // 當用戶改變輸入框中的文字時，將被調用，以便更新輸入框的值
    modifier: Modifier = Modifier, // 用於指定文字輸入框的外觀和行為，例如大小、填充、對齊等
    enabled: Boolean = true, // 指示文字輸入框是否處於啟用狀態。如果設置為 false，則文字輸入框可能會顯示為禁用狀態
    readOnly: Boolean = false, // 指示文字輸入框是否為只讀狀態。如果設置為 true，則用戶無法編輯文字
    textStyle: TextStyle = LocalTextStyle.current,
    // 用於指定文字的樣式，例如字體大小、顏色等。默認情況下，它使用了當前的本地文字樣式（LocalTextStyle.current）
    
    label: @Composable (() -> Unit)? = null, // 顯示在文字輸入框上方，用於指導用戶輸入的目的
    placeholder: @Composable (() -> Unit)? = null,
    // 這是一個可選的占位符，顯示在文字輸入框內，當輸入框為空時顯示
    
    leadingIcon: @Composable (() -> Unit)? = null,
    // 這是可選的圖標，位於文字輸入框的起始處
    
    trailingIcon: @Composable (() -> Unit)? = null,
    // 這是可選的圖標，位於文字輸入框的結束處

    supportingText: @Composable (() -> Unit)? = null,
    // 這是一個可選的支持文字，顯示在文字輸入框下方，用於提供額外的說明或提示
    
    isError: Boolean = false,
    // 指示是否在文字輸入框中顯示錯誤狀態。如果設置為 true，則可能會應用與錯誤相關的樣式
    
    singleLine: Boolean = false,
    maxLines: Int = if (singleLine) 1 else Int.MAX_VALUE, // 用於設定文字輸入框最大行數
    minLines: Int = 1,  // 用於設定文字輸入框最小行數
    shape: Shape = TextFieldDefaults.shape, // 用於指定文字輸入框的形狀
    colors: TextFieldColors = TextFieldDefaults.colors(), // 用於指定文字輸入框的顏色
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    // 用來追蹤使用者與 UI 元件進行的各種交互操作。這可以是點擊、長按、觸摸、滑動等等
    // 通過這個交互操作來源，可以查詢元件的交互狀態，例如檢查元件是否被點擊、是否處於觸摸狀態等等

)   {
		// 這邊用來設置子 TextField 的屬性
	}
```

## Button

```
fun Button(
    onClick: () -> Unit, // 用於定義當用戶點擊按鈕時應該執行的操作
    modifier: Modifier = Modifier, // 用於指定按鈕的外觀和行為，例如大小、填充、對齊等
    enabled: Boolean = true, // 指示按鈕是否處於啟用狀態。如果設置為 false，則按鈕可能會顯示為禁用狀態
    shape: Shape = ButtonDefaults.shape,
    // 用於指定按鈕的形狀（例如圓角），預設情況下使用了 ButtonDefaults.shape，這是一個提供了標準按鈕形狀的預設值
    
    colors: ButtonColors = ButtonDefaults.buttonColors(), // 用於指定按鈕的顏色
    elevation: ButtonElevation? = ButtonDefaults.buttonElevation(), // 用於指定按鈕的海拔高度（陰影效果）
    border: BorderStroke? = null, // 這是一個可選的參數，用於指定按鈕的邊框
    contentPadding: PaddingValues = ButtonDefaults.ContentPadding, // 用於指定按鈕內容的填充（padding）
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    // 用於定義按鈕的交互操作來源的對象，例如點擊、拖動等。默認情況下，它使用了一個新的 MutableInteractionSource 對象
)   {
		// 這邊用來放置子 Widget
	}
```

## Card

```
fun Card(
    onClick: () -> Unit, // 這是一個 lambda 函數，用於定義當用戶點擊卡片時應該執行的操作
    modifier: Modifier = Modifier,
    //這是一個修飾符（Modifier），用於指定卡片的外觀和行為，例如大小、填充、對齊等。預設情況下，它設置為空的 Modifier
    
    enabled: Boolean = true,
    // 這是一個布爾值，指示卡片是否處於啟用狀態。如果設置為 false，則卡片可能會顯示為禁用狀態
    
    shape: Shape = CardDefaults.shape,
    // 這是用於指定卡片的形狀（例如圓角），預設情況下使用了 CardDefaults.shape，這是一個提供了標準卡片形狀的預設值
    
    colors: CardColors = CardDefaults.cardColors(),
    // 這是用於指定卡片的顏色，預設情況下使用了 CardDefaults.cardColors()，這是一個提供了標準卡片顏色的預設值
    
    elevation: CardElevation = CardDefaults.cardElevation(),
    // 這是用於指定卡片的海拔高度（陰影效果），預設情況下使用了 CardDefaults.cardElevation()，這是一個提供了標準卡片海拔高度的預設值
    
    border: BorderStroke? = null, // 這是一個可選的參數，用於指定卡片的邊框
    interactionSource: MutableInteractionSource = remember { MutableInteractionSource() },
    // 這是用於定義卡片的交互操作來源的對象，例如點擊、拖動等。默認情況下，它使用了一個新的 MutableInteractionSource 對象
    
)   {
		// 這邊用來放置子 Widget
	}
```

## LazyColumn：垂直的 List ( 類似於 RecyclerView )

```
fun LazyColumn(
    modifier: Modifier = Modifier, // 用於指定 LazyColumn 的修飾符，例如大小、填充、對齊等
    state: LazyListState = rememberLazyListState(),
    // 用於指定 LazyColumn 的狀態，通常使用 rememberLazyListState() 來保存列表的滾動狀態
    
    contentPadding: PaddingValues = PaddingValues(0.dp),
    // 用於指定列表的內容填充，即列表的邊緣留白
    
    reverseLayout: Boolean = false, // 指定是否將列表反向排列
    verticalArrangement: Arrangement.Vertical = if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
    // 用於指定子元素在垂直方向上的排列方式，可以是 Arrangement.Top、Arrangement.Bottom、Arrangement.Center 等
    
    horizontalAlignment: Alignment.Horizontal = Alignment.Start,
    // 用於指定子元素在水平方向上的對齊方式，可以是 Alignment.Start、Alignment.Center、Alignment.End 等
    
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    // 用於指定滾動行為，例如阻尼效果等
    
    userScrollEnabled: Boolean = true, // 用於指定是否允許用戶進行手動滾動
)   {
		// 這邊用來放置子 Widget
	}
```

> 在使用 LazyColumn 時 { } 內需要先放 item { } 才可以再放 customItem 

## LazyRow：水平的 List ( 類似於 RecyclerView )

```
fun LazyRow(
    modifier: Modifier = Modifier, // 用於指定 LazyRow 的修飾符，例如大小、填充、對齊等
    state: LazyListState = rememberLazyListState(),
    // 用於指定 LazyRow的狀態，通常使用 rememberLazyListState() 來保存列表的滾動狀態
    
    contentPadding: PaddingValues = PaddingValues(0.dp),
    // 用於指定列表的內容填充，即列表的邊緣留白
    
    reverseLayout: Boolean = false, // 指定是否將列表反向排列
    horizontalArrangement: Arrangement.Horizontal = if (!reverseLayout) Arrangement.Start else Arrangement.End,
    // 用於指定水平方向上的排列方式，可以是 Arrangement.Start、Arrangement.Center、Arrangement.End 等
    
    verticalAlignment: Alignment.Vertical = Alignment.Top,
    // 用於指定子元素在垂直方向上的對齊方式，可以是 Alignment.Top、Alignment.Center、Alignment.Bottom 等
    
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    // 用於指定滾動行為，例如阻尼效果等
    
    userScrollEnabled: Boolean = true, // 用於指定是否允許用戶進行手動滾動
)   {
		// 這邊用來放置子 Widget
	}
```

> 在使用 LazyRow 時 { } 內需要先放 item { } 才可以再放 customItem 