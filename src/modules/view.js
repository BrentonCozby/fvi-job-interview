import React from 'react'
import { observer } from 'mobx-react';

const TodoView = ({
    todoList = [],
    doneList = [],
    addTodo,
    markDone,
    deleteForever
}) => (
    <div className="lists-wrapper">
        <section className="TodoList">
            <h2>ToDo</h2>

            <div>
                <button onClick={addTodo}>New Todo</button>
            </div>
            
            <ul>
                {todoList.map((todo, index) => (
                    <li key={todo.id}>
                        {todo.text}
                        &nbsp;
                        <span class="inline-button" onClick={() => markDone(todo, index)}>✔</span>
                    </li>
                ))}
            </ul>
        </section>

        <section className="DoneList">
            <h2>Done</h2>

            <ul>
                {doneList.map((todo, index) => (
                    <li key={todo.id}>
                        {todo.text}
                        &nbsp;
                        <span class="inline-button" onClick={() => deleteForever(index)}>×</span>
                    </li>
                ))}
            </ul>
        </section>
    </div>
)

export default observer(TodoView)