---
sidebar_label: "Loop"
sidebar_position: 13
---

# Loop

---

在 Swift 中也有幾種迴圈的方式：`for in` 與 `while`

## `for in`

`for in` 跟一般程式語言的 `for` 迴圈的使用方法類似，但不同的地方是比如 Java 的迴圈是這樣的 `for int i = 0; i < 10; i++ {}`，但在 Swift 的 `for` 迴圈是 `for i in 0..<10`

在 `in` 後面的 `0..<10` 指的是 `i` 從 0 開始加直到加到 9

`..<` 是小於
`...` 是等於

若迴圈長這樣 `for i in 0...10` `i` 從 0 開始加直到加到 10

若迴圈內不會用到迴圈變數 ( `i` ) 的話，用 `_` 也可以

`for i in 0..<10` 跟 `for _ in 0..<10` 是一樣的，只是 `for i in 0..<10` 是可以在 `{}` 內查看 `i` 的數值，`for _ in 0..<10` 不行

`where`  可以加上條件，例如 

```
for i in 0..<10 where i % 2 == 0 {
	sum += i
}
```

這段就代表從 1 到10，只加偶數

## `while`

```
var number = 10
while number > 0 {
	number -= 1
}

number = 10
repeat {
	number -= 1
} while number > 0
```

`while` 是 conditional loop，適合事先不知道次數的 loop，跟 if 很像，但是會重覆。`while` 比較的變數要事先宣告，`for in` 則不用，`repeat while` 至少跑一次

> 這邊補充一下 `break` 與 `continue`
> 
> `break` 是會直接離開，若在 loop 裡面會直接離開 loop ，若在 if else 中會直接離開 if else
> 
> `continue` 會跳過這一次去執行下一個
> 
> ![image15](/img/swift_img/2024-08-06_3.31.58.png)
> 
> 圖片中有設了一個 `continue` 跟 `break` 
> 當 `i==5` 時 `continue` 而 `i==7` 則 `break`
> 可以看到當 `i` = 5 時就直接跳過 5 ，沒有把 5 加到 `sum` ，而到 `i` = 7 時就跳出迴圈