---
sidebar_label: "UserDefaults"
sidebar_position: 8
---

# UserDefaults

---

`UserDefaults` 是一個非常方便的工具，它可以在 iOS、macOS、watchOS 和 tvOS 上，儲存小型的應用程序設置、配置和用戶資料。它是一個鍵值對儲存系統，用來持久化一些簡單的資料，例如布林值、整數、字串、陣列、字典等等。

## UserDefaults 的用途

- 儲存用戶設置：例如應用的主題、語言、是否開啟通知等
- 儲存簡單資料：可以儲存像是登入狀態、偏好設定等
- 輕量的數據儲存：適合用來保存輕量且小型的資料，但不適合用來存大量或頻繁變動的資料

## 儲存的資料類型

`UserDefaults` 支援以下常見的資料類型：

- `Bool` (布林值)
- `Int` (整數)
- `Float`
- `Double`
- `String`
- `URL`
- `Array` (陣列)
- `Dictionary` (字典)
- `Data` (二進位資料)

## 常見的使用情境

### 1. 儲存資料

將資料以鍵值對的方式儲存到 `UserDefaults`：

```
let userDefaults = UserDefaults.standard
userDefaults.set(true, forKey: "isLoggedIn")  // 儲存布林值
userDefaults.set("John", forKey: "username")  // 儲存字串
userDefaults.set(25, forKey: "age")           // 儲存整數
```

### 2. 讀取資料

從 `UserDefaults` 中讀取已儲存的資料：

```
let isLoggedIn = userDefaults.bool(forKey: "isLoggedIn")  // 讀取布林值
let username = userDefaults.string(forKey: "username")    // 讀取字串
let age = userDefaults.integer(forKey: "age")             // 讀取整數
```

### 3. 刪除資料

也可以移除特定的鍵值對：

```
userDefaults.removeObject(forKey: "username")  // 刪除指定的 key
```

## 使用 Codable 儲存自訂物件

如果想儲存複雜一點的資料類型，例如自訂的物件結構，就可以使用 `Codable` 來將資料編碼為 `Data` 再存進 `UserDefaults`

### 範例

以下是一個將自訂結構儲存到 `UserDefaults` 的範例：

```
struct Todo: Codable {
    var id: String
    var title: String
    var isFinish: Bool
}

let todo = Todo(id: "1", title: "Buy Milk", isFinish: false)
let userDefaults = UserDefaults.standard

// 將 Todo 編碼成 Data 儲存進 UserDefaults
if let encodedTodo = try? JSONEncoder().encode(todo) {
    userDefaults.set(encodedTodo, forKey: "todo")
}

// 從 UserDefaults 中讀取資料
if let savedTodoData = userDefaults.data(forKey: "todo"),
   let decodedTodo = try? JSONDecoder().decode(Todo.self, from: savedTodoData) {
    print(decodedTodo.title)  // 輸出：Buy Milk
}
```

## UserDefaults 的限制

- 資料量的限制：`UserDefaults` 不適合存放大資料或複雜數據，應該只用來儲存小型的、輕量的設定或狀態。
- 不適合頻繁變動的數據：如果資料會經常變動或需要頻繁寫入，使用資料庫（如 Core Data 或 SQLite）會更適合

## iOS 的 UserDefaults 和 Android 的 SharedPreferences

`UserDefaults` 在 iOS 系統中與 Android 的 `SharedPreferences` 非常類似。它們的功能都相同，都是用來儲存應用中的輕量級資料，以鍵值對（key-value）的方式進行存取

### iOS 的 UserDefaults 與 Android 的 SharedPreferences 的相似點

1. 資料型態：
    - 兩者都支援常見的基本資料型態，如 `String`、`Int`、`Bool`、`Float` 等等

2. 儲存輕量資料：
    - 都適合用來儲存小型的應用設定和狀態，例如用戶的偏好設置、登入狀態、主題選擇等等，不適合儲存大量或複雜的數據

3. 鍵值對存取：
    - 資料都以鍵值對的方式進行存取。儲存的資料都會與應用關聯，並且持久化，當應用重新啟動後依然可以取回之前儲存的值

4. 自訂資料儲存：
    - 雖然兩者主要儲存基本資料型態，但如果需要儲存複雜資料結構，都可以透過序列化（如 JSON）將自訂物件轉換成 `String` 或 `Data` 來進行儲存

### iOS UserDefaults 與 Android SharedPreferences 的使用對比

#### 儲存與讀取資料

iOS `UserDefaults`：

```
let userDefaults = UserDefaults.standard
userDefaults.set("John", forKey: "username")  // 儲存
let username = userDefaults.string(forKey: "username")  // 讀取
```

Android `SharedPreferences`：

```
val sharedPreferences = getSharedPreferences("MyPrefs", MODE_PRIVATE)
val editor = sharedPreferences.edit()
editor.putString("username", "John")  // 儲存
editor.apply()

val username = sharedPreferences.getString("username", "")  // 讀取
```

#### 儲存自訂物件

iOS `UserDefaults`： 需要將物件編碼為 `Data`（使用 `Codable`），再存入 `UserDefaults`

```
struct User: Codable {
    let name: String
    let age: Int
}

let user = User(name: "John", age: 30)
if let encoded = try? JSONEncoder().encode(user) {
    userDefaults.set(encoded, forKey: "user")
}

if let savedUser = userDefaults.data(forKey: "user"),
   let decodedUser = try? JSONDecoder().decode(User.self, from: savedUser) {
    print(decodedUser.name)
}
```

Android `SharedPreferences`： 可以將物件序列化為 JSON 字串，然後儲存

```
val user = User("John", 30)
val gson = Gson()
val json = gson.toJson(user)
editor.putString("user", json)
editor.apply()

val jsonString = sharedPreferences.getString("user", "")
val savedUser = gson.fromJson(jsonString, User::class.java)
println(savedUser.name)
```

### 主要差異點

1. 存取方式：
    - `UserDefaults` 不需要特別指定檔案名稱，所有資料都存儲在相同的預設資料夾中，而 `SharedPreferences` 則可以指定不同的檔案名稱（透過 `getSharedPreferences("MyPrefs", MODE_PRIVATE)`），每個應用可以有多個偏好檔案

2. 寫入資料的方式：
    - 在 Android 中，`SharedPreferences` 需要使用 `editor.apply()` 或 `editor.commit()` 來儲存資料。而在 iOS 的 `UserDefaults` 中，`set` 方法立即生效，不需要額外的操作

3. 加密：
    - iOS 的 `UserDefaults` 本身不支援加密，若需要加密，必須使用額外的方式來處理。而 Android 的 `SharedPreferences` 有 `EncryptedSharedPreferences` 可以用來儲存加密資料