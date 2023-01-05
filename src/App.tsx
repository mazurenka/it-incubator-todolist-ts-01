import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    const todoListTitle = "What to learn"

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    }

    function changeTodoListFilter(value: FilterValuesType) {
        setFilter(value);
    }

    const changeTaskStatus = (id: string, isDone: boolean) => {
        /* const taskForUpdate = tasks.find(t => t.id === id)
         if(taskForUpdate){
             taskForUpdate.isDone = !taskForUpdate.isDone
             setTasks([...tasks])
         }*/
        setTasks(tasks.map(t => t.id === id ? {...t, isDone: isDone} : t))
    }

    return (
        <div className="App">
            <Todolist
                filter={filter}
                title={todoListTitle}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeTodoListFilter={changeTodoListFilter}
                addTask={addTask}
                changeTaskStatus={changeTaskStatus}/>
        </div>
    );
}

export default App;
