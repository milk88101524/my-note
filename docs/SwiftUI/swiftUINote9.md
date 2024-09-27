---
sidebar_label: "Core Data"
sidebar_position: 9
---

# Core Data

---

Core Data 是蘋果在 iOS 和 macOS 平台上提供的一個強大框架，主要用來管理應用中的資料模型和持久化資料。它比 `UserDefaults` 更適合用來處理大量結構化資料，例如需要進行關聯操作的複雜資料模型，甚至包含離線數據的應用。Core Data 提供了比 `UserDefaults` 更豐富的數據操作功能，如增、刪、改、查、排序、篩選等

## Core Data 的主要功能和特點

### 1. 資料持久化

Core Data 的一個主要功能是將應用程式資料持久化到磁碟，這樣當應用重新啟動時，資料依然保留。雖然它可以儲存資料到磁碟中，但它不是傳統的資料庫。Core Data 是一個物件關聯映射 (ORM) 工具，它會將資料存儲為對象，而不是直接存入資料表

### 2. 管理對象的生命週期

Core Data 可以跟蹤應用中的資料對象，並負責管理其生命週期。這意味著它能夠自動載入、暫存和清理對象，避免內存溢出或不必要的內存佔用

### 3. 查詢資料

Core Data 支援複雜的資料查詢，類似於資料庫中的 SQL 查詢語法。可以通過 `NSPredicate` 來進行篩選，並且可以排序、分頁、分組等操作

### 4. 資料關聯與多對多關係

Core Data 支援不同資料模型之間的關聯，這可以輕鬆定義一對一、一對多或多對多的資料模型關係。例如，一個筆記應用中，可以將多個標籤關聯到一個筆記上，這在資料庫中是多對多的關係

### 5. 資料變更通知

當 Core Data 中的資料被修改時，其他相關部分可以即時收到通知，這讓 UI 可以及時更新

## Core Data 的架構

Core Data 的核心部分有幾個重要的組件：

1. Managed Object Model (`NSManagedObjectModel`)：
    - 這個類是資料模型（數據結構）的定義。它定義了應用程式中所要處理的資料結構和彼此之間的關係，類似於關聯式資料庫中的表結構

2. Managed Object Context (`NSManagedObjectContext`)：
    - 這是資料的工作區，在其中執行資料的增刪改查操作。它類似於一個臨時的資料存儲空間，所有的變更會在這裡進行，直到將它們「保存」（即存入資料庫）

3. Persistent Store Coordinator (`NSPersistentStoreCoordinator`)：
    - 它負責將資料實際儲存到磁碟或其他資料存儲區域。通常它會把資料保存成 SQLite 文件，但 Core Data 也支持其他格式如 XML 或 Binary

4. Managed Objects (`NSManagedObject`)：
    - 這些是資料模型實例，它們被 Core Data 管理。在應用中，這些物件可以被修改、查詢、刪除，並與其他物件建立關聯

## 使用 Core Data 的基本步驟

1. 模型設計： 使用 Xcode 的 Core Data 模型編輯器來設計資料模型。可以在這裡定義每個實體（類似於資料表）、實體的屬性（類似於表的欄位），以及實體之間的關聯
    
2. 建立 NSManagedObject 子類： 當有了資料模型後，可以讓 Xcode 為每個實體生成相對應的 `NSManagedObject` 子類，這些子類對應著資料庫中的每個表
    
3. 操作資料： 在程式中，可以使用 `NSManagedObjectContext` 來增刪查改資料。例如，創建新的 `NSManagedObject` 實例來新增資料，或通過 `NSFetchRequest` 來查詢資料
    

## 示例：使用 Core Data 保存和讀取資料

1. 新增資料：

```
let newNote = Note(context: managedObjectContext)
newNote.title = "My First Note"
newNote.id = UUID().uuidString

do {
    try managedObjectContext.save()
} catch {
    print("Failed to save note: \(error)")
}
```

2. 查詢資料：

```
let fetchRequest: NSFetchRequest<Note> = Note.fetchRequest()
fetchRequest.predicate = NSPredicate(format: "title == %@", "My First Note")

do {
    let notes = try managedObjectContext.fetch(fetchRequest)
    for note in notes {
        print("Note title: \(note.title)")
    }
} catch {
    print("Failed to fetch notes: \(error)")
}
```

## Core Data 優點

- 自動管理資料：Core Data 能夠自動管理資料的載入和儲存，並且支援資料的離線儲存與同步
- 關聯資料處理：它對於處理有複雜關聯關係的資料模型很方便，支援一對多、多對多的關係
- 查詢和篩選強大：支援使用 NSPredicate 進行複雜的查詢和篩選
- 與 Swift 整合緊密：在 SwiftUI 中使用 Core Data 非常方便，支援 UI 的即時更新

## Core Data 缺點

- 學習曲線：對於初學者來說，Core Data 的架構相對複雜，尤其是如果只需要做一些簡單的資料儲存操作的話，可能有些過度設計
- 性能問題：對於非常大量的資料操作，特別是頻繁的增刪改查操作，Core Data 的性能可能不如純 SQL 資料庫高效
- 多線程：Core Data 在多線程操作下需要小心處理，如果不遵循線程規則，可能會導致資料不一致