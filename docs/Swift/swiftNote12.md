---
sidebar_label: "Shuffle & Shuffled"
sidebar_position: 12
---

# shuffle & shuffled

---

`shuffle` & `shuffled` 都是打亂 array 的排列，只不過兩者所做的事不太一樣

- `shuffled` : 回傳重新排列的 array ，原本的 array 並沒有改變
```
func shuffled() -> [String]
```

- `shuffle` : 把原本的 array 重排
```
mutating func shuffle()
```