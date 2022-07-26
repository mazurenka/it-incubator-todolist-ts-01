import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

function App() {

    const tasks: Array<TaskType> = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS', isDone: false}
    ]

    return (
        <div className="App">
            <TodoList
                tasks={tasks}
                title={'What To Learn'}/>
        </div>
    );
}

export default App;
