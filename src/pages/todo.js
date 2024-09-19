import React, { useState } from 'react'; // 從 React 引入 useState，用來管理組件的狀態

// 定義一個名為 TodoApp 的函數型組件
function TodoApp() {
    // 宣告兩個狀態變數：
    // todos 用來儲存所有的待辦事項，預設為空陣列
    // input 用來儲存當前的輸入內容，預設為空字串
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    // 定義一個函數 addTodo，當按下 "Add" 按鈕時觸發
    const addTodo = () => {
        // 將當前的 input 值新增到 todos 陣列中
        // 使用展開運算符 ... 來保留現有的 todos 項目
        setTodos([...todos, input]);
        // 清空輸入框
        setInput('');
    };

    // JSX 是組件的 UI 表現部分
    return (
        <div>
            <h1>Todo List</h1>
            {/* 輸入框，使用 input state 來顯示目前的輸入值 */}
            {/* onChange 事件在每次輸入內容改變時更新 input state */}
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)} // 透過事件更新 input 狀態
                placeholder="Add a task" // 輸入框中的佔位文字
            />
            {/* "Add" 按鈕，點擊時呼叫 addTodo 函數 */}
            <button onClick={addTodo}>Add</button>
            {/* 列表顯示所有的待辦事項 */}
            {/* 使用 map 方法來將每個待辦事項渲染成 <li> 元素 */}
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li> // 使用 index 作為每個列表項的 key
                ))}
            </ul>
        </div>
    );
}

export default TodoApp; // 匯出這個組件，方便其他檔案引用