---
sidebar_label: "Protocol & Delegate"
sidebar_position: 17
---

# Protocol & Delegate

---

## 1. Protocol

`Protocol` 是一組方法和屬性定義，描述了一個類別或結構體必須實現的功能。它類似於其他語言中的接口（interface），用來規範行為。通過使用 `protocol`，可以定義一些共同的行為，並讓不同的類別或結構體實現這些行為，而不需要知道具體的類別或實現細節

例如有一個 `Drivable` 協定，用於描述所有可以駕駛的東西：

```
protocol Drivable {
    func startEngine()
    func drive()
}
```

任何類別或結構體都可以通過實現這個協定來表示它們是可駕駛的：

```
class Car: Drivable {
    func startEngine() {
        print("Engine started")
    }
    
    func drive() {
        print("Car is driving")
    }
}
```

## 2. Delegate

`Delegate` 是一種設計模式，利用 `protocol` 來實現物件間的通信。在 iOS 中，`delegate` 常被用來處理事件、傳遞數據或通知狀態改變。透過使用 `delegate`，可以將某些邏輯或行為委派給另一個物件來實現，從而減少耦合

一個典型的例子是 `UITableView` 的 `delegate`。當用戶與表格進行互動時，表格會通知其 `delegate`，例如選擇某一行或滾動等事件。這樣，`UITableView` 本身不需要知道或關心具體的行為邏輯，而是將這些行為委派給了 `delegate` 來處理

```
class MyViewController: UIViewController, UITableViewDelegate {
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        print("Selected row at \(indexPath)")
    }
}
```

## 3. Delegate 與 Protocol 的結合

`Delegate` 通常與 `protocol` 一起使用，這樣可以確保 `delegate` 物件能實現所需的方法。例如

```
protocol MyDelegate {
    func didReceiveData(data: String)
}

class DataSender {
    var delegate: MyDelegate?
    
    func sendData() {
        let data = "Hello, Delegate!"
        delegate?.didReceiveData(data: data)
    }
}

class DataReceiver: MyDelegate {
    func didReceiveData(data: String) {
        print("Received data: \(data)")
    }
}
```

在這個例子中，`DataReceiver` 實現了 `MyDelegate` 協定，並可以作為 `DataSender` 的 `delegate`，接收並處理從 `DataSender` 發送的數據

## 小結

- `Protocol` 定義了一組方法和屬性，規範了實現它的類別或結構體的行為
- `Delegate` 是一種設計模式，使用 `protocol` 來實現物件間的鬆耦合通信
- 結合使用 `protocol` 和 `delegate`，可以讓代碼更加靈活和模組化，減少類別間的耦合度