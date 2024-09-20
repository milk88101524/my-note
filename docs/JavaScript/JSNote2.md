---
sidebar_label: "TypeScript跟 JS 的差異"
sidebar_position: 2
---

# TypeScript 跟 JavaScript 的差異

---

## TypeScript 是 JavaScript 的超集

TypeScript 是 JavaScript 的超集，這表示所有合法的 JavaScript 程式碼都在 TypeScript 中有效。TypeScript 主要是為了提供靜態型別檢查以及一些編譯期錯誤檢測工具，讓開發過程更安全

## 主要差異

1. 靜態型別：
    - JavaScript：是一個動態型別語言，你不需要指定變數的類型，變數可以隨時變更類型
    
    - TypeScript：支援靜態型別，你可以在宣告變數時指定其類型，這樣在編譯時可以檢查型別錯誤
        
2. 編譯：
    - JavaScript：直接解釋執行，不需要編譯步驟
    - TypeScript：需要先編譯成 JavaScript，再在瀏覽器或 Node.js 中執行。編譯過程會檢查語法錯誤和型別錯誤
    
3. ES6+ 特性支持：
    - JavaScript：支援最新的 ECMAScript 語法，但需要透過 Babel 等工具來支持較舊的瀏覽器
    - TypeScript：內建支持所有最新的 ECMAScript 特性，並且能選擇目標編譯版本，將代碼轉換成支持較舊版本的 JavaScript

4. 強化的 IDE 支援：    
    - JavaScript：可以使用 IntelliSense，但因為沒有靜態型別，開發工具的提示能力有限
    - TypeScript：由於靜態型別，IDE 可以提供更強大的自動補全、型別提示、重構等工具支援，提升開發體驗

5. 介面 (Interfaces) 與型別 (Types)：
    - JavaScript：沒有內建的型別系統，你只能依賴 `typeof` 或 `instanceof` 來動態檢查變數型別
    - TypeScript：允許你定義介面和自訂型別，這可以強制規範物件的結構和行為


## 小結

- TypeScript 和 JavaScript 的差異：
	- TypeScript 提供靜態型別檢查、編譯時錯誤檢測、以及更強大的 IDE 支援。
	- TypeScript 增強了 JavaScript 的安全性和可維護性，特別適合大型專案