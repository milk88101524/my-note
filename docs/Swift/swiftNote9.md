---
sidebar_label: "Function / Method"
sidebar_position: 9
---

# Function / Method

---

在 Swift 中，函式是用 `func` 來做宣告

`func + 函式名字 + (可在這邊傳入參數) -> 回傳資料的型態 {} `

若箭頭後面沒有加上回傳的資料型態，他其實是有回傳的，他回傳的是 `Void`

![image1](/img/swift_img/Pasted_image_20240806100322.png)

若在 `func` 的參數上加上數值時代表在使用這個 `func` 時可以不用輸入這個參數的數值，若在呼叫這個 `func` 時沒有輸入設有預設值的參數時，在執行的時候就會使用該參數的預設值

```
eat(name: "beef")
func eat(name: String, price: Int = 100) {
	print("(name)\n(price)")
}
```

![image2](/img/swift_img/2024-08-06_10.10.22.png)

> Swift 的 Function 參數有外部名與內部名
> 
> ```
> func move(from start: String, to end: String) {
> 	print("move from " + start + " to " + end)
> }
> move(from: "地球", to: “火星")
>```
> 在 Function `move` 中，`from` 和 `to` 是外部名，是在外面呼叫 `move` 時 `move`顯示的參數名會顯示外部名，而在 `move` 中的 `start` 與 `end` 是內部名，是在 `move` 內做使用的。寫其他語言習慣後，目前內部名與外部名這功能對我來說不是很好用，說是更好讀但我覺得這樣反而更不好讀