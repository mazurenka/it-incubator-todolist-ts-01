import React from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {
    return (
        <div className="App">
            <TodoList title={'What To Learn'}/>
            <TodoList title={'What To By'}/>
            <TodoList title={'What To See'}/>
        </div>
    );
}

export default App;
