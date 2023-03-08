import { useState } from 'react'
import * as todosAPI from '../../utilities/todos-api'

export default function ToDoForm({ addTodo }) {
    const [newTodo, setNewTodo] = useState('')

    function handleAddTodo(e) {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo('')
    }


    return (
        <>
            <form onSubmit={handleAddTodo}>
                <input
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="add new to-do"
                />
            </form>
            <button type="submit">Add</button>
        </>
    )
}