import { action, observable } from  'mobx'
import uuid from 'uuid/v4'

class TodoController {
    @observable todoList = [
        {id: uuid(), text: 'first todo'},
        {id: uuid(), text: 'second todo'},
        {id: uuid(), text: 'fourth todo'},
    ]

    @observable doneList = [
        {id: uuid(), text: 'third todo'},
    ]

    @action.bound
    addTodo() {
        this.todoList.push({
            id: uuid(),
            text: window.prompt("New todo:")
        })
    }

    @action.bound
    markDone(todo, index) {
        const removed = this.todoList.splice(index, 1)[0]

        this.doneList.push(removed)
    }

    @action.bound
    deleteForever(index) {
        this.doneList.splice(index, 1)
    }
}

export default new TodoController()