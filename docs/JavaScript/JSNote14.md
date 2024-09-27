---
sidebar_label: "Try Catch"
sidebar_position: 8
---

# Try Catch

---

`try...catch` 是用來捕捉和處理程式中的錯誤的同步結構

## 基本的 `try...catch` 用法（同步代碼）

當有一段可能會拋出錯誤的同步代碼時，可以使用 `try...catch` 來捕捉這些錯誤，避免程式崩潰：

```
try {
  // 可能會產生錯誤的代碼
  const result = 1 + undefined; 
  console.log(result);
} catch (error) {
  // 當有錯誤發生時執行這裡
  console.error('發生錯誤:', error.message);
}
```

當有錯誤發生時，程式不會中斷，`catch` 區塊會捕捉並處理該錯誤