---
sidebar_label: "SwiftUI 與 Jetpack Compose 的差別"
sidebar_position: 3
---


# SwiftUI 與 Jetpack Compose 的差別

---

SwiftUI 和 Jetpack Compose 在語法上有一些不同，但概念上有相似之處。SwiftUI 使用 `{}` 來包含子視圖，而屬性則通過 `.property` 來設定。以下是兩者的比較

Jetpack Compose：
在 Jetpack Compose 中，組件屬性放在 `()` 中，子組件放在 `{}` 中。例如：

```
Column(
    modifier = Modifier.padding(16.dp)
) {
    Text("Hello, World!")
    Button(onClick = { /* Do something */ }) {
        Text("Click Me")
    }
}
```

SwiftUI：
在 SwiftUI 中，子視圖也放在 `{}` 中，屬性則使用修飾符（Modifiers）來設定。例如：

```
VStack {
    Text("Hello, World!")
        .padding(16)
    Button(action: {
        // Do something
    }) {
        Text("Click Me")
    }
}
```

> 會拿 Jetpack Compose 來跟 SwiftUI 來做對比是因為兩者都是聲明式的 UI 架構，且兩個都是原生的，後面也會拿 Flutter 來做三者的比較