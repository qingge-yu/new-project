import ToDoItem from '../ToDoItem/ToDoItem'

export default function ToDoList({ todos }) {
    return (
        <ul>
            {todos.map((todo, idx) => (
                <ToDoItem todo={todo} key={idx} />
            ))}
        </ul>
    )
}