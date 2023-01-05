import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    filter: FilterValuesType
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeTodoListFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")

    const addTask = () => {
        props.addTask(title);
        setTitle("");
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeTodoListFilter("all");
    const onActiveClickHandler = () => props.changeTodoListFilter("active");
    const onCompletedClickHandler = () => props.changeTodoListFilter("completed");

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                    const onChangeSetTaskStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.currentTarget.checked)
                    const isDoneClasses = t.isDone ? 'isDone' : 'notIsDone'
                    return <li key={t.id}>
                        <input
                            type="checkbox"
                            checked={t.isDone}
                            onChange={onChangeSetTaskStatus}
                        />
                        <span className={isDoneClasses}>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? 'activeFilter' : ''}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? 'activeFilter' : ''}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? 'activeFilter' : ''}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}






