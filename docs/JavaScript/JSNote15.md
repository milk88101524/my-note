---
sidebar_label: "非同步"
sidebar_position: 9
---

# 非同步

---

## 非同步操作與 `try...catch`

JavaScript 透過 `Promise`、`async/await` 來進行非同步操作。當處理非同步代碼時，錯誤不會像同步代碼一樣自動被 `try...catch` 捕捉，所以需要特別處理

### 使用 `Promise` 來處理非同步操作

```
const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = true;  // 模擬成功或失敗情況
    if (success) {
      resolve('數據獲取成功');
    } else {
      reject('數據獲取失敗');
    }
  });
};

// 處理非同步操作
fetchData()
  .then(result => console.log(result))   // 當 Promise 成功時
  .catch(error => console.error(error)); // 當 Promise 拋出錯誤時
```