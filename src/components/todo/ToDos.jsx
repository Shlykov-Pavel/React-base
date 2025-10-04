import styles from "./ToDo.module.css"
import ToDo from "./ToDo"

export default function ToDos({todosData}) {

    const todos=todosData
    .map(todo => <ToDo key={todo.id} todoData={todo} />)
    return (
        <div className={styles.todoContainer}>
            <ul className={styles.todoList}>
            {todos}
            </ul>
        </div>
    )
}