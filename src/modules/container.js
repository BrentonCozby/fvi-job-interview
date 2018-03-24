import React, { Component } from 'react'

import controller from './controller'
import TodoView from './view'

export default class TodoContainer extends Component {

    render() {
        const { todoList, doneList, addTodo, markDone, deleteForever } = controller

        return (
            <TodoView {...{todoList, doneList, addTodo, markDone, deleteForever}} />
        )
    }
}