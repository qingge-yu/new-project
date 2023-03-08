import { useState } from 'react'
import ToDoForm from '../../components/ToDoForm/ToDoForm'
import ToDoList from '../../components/ToDoList/ToDoList'

export default function ToDoPage() {

    const [todos, setTodos] = useState([])

    function addTodo(todo) {
        setTodos([...todos, todo])
    }

    return (
        <>
            <h1>ToDoPage</h1>
            <ToDoForm addTodo={addTodo} />
            <ToDoList todos={todos} />
        </>
    )
}