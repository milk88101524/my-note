---
sidebar_label: "Navigation"
sidebar_position: 7
---

# Navigation

---

要使用 Navigation 必須要先 include `` implementation "androidx.navigation:navigation-compose:2.7.7" `` 
> 幹有夠白癡要先 implementation "androidx.navigation:navigation-compose:$nav_version" 才能改成 implementation libs.androidx.navigation.compose

Navigation 中我們通過 findNavController 擴展方法獲取 NavController，然後進行跳轉。
NavController 中管理 NavGraph 等配置信息，所以是 stateful 的，在 Compose 的函數中需要通過以下方式獲取一个有狀態的實例

NavHost 是 NavController 的持有者，NavHostFragment 是 Fragment 對於 NavHost 的實作。 Compose 基於 composable 函數渲染 UI，沒有 Fragment 這樣的具體實例做載體，所以 Compose 的 NavHost 更加抽象，你可以將其理解為一個容器，內部透過 NavController 在「頁面切換」時渲染當前 UI

```
val navController = rememberNavController()
NavHost(
        navController = navController,
        startDestination = "first_screen"
) {
    composable("first_screen") {
        // first screen
    }
    composable("second_screen") {
        // second screen
    }
}
```

NavHost 接受兩個參數，navController 和 startDestination，這是 Navigation 的標準用法，不再贅述。其 DSL 內部的 composable 用來聲明各個頁面，配置了三個頁面，初始頁面是 first_screen  composable() 的參數作為 Destination 的 id，用於後續跳轉

```
MainCard(
	title = "Cookbook",
	desc = "This is my cookbook",
	onClick = {
		showToast("Cookbook", context);
		navController.navigate("SecPage");
	}
)
// 若宣告好 Route 後即可使用 navController.navigate(route) 來導向該 Route 頁面
```

以前如果想要使用 Compose 實作多頁的 APP，只能在 Fragment 或 Activity 內部寫 Compose 程式碼。現在有了 Navigation，可以徹底擺脫 Fragment 或是 Activity 了，這要歸功於 Navigation 高度抽象的設計

