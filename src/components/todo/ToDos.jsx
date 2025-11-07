import styles from "./ToDo.module.css"
import ToDo from "./ToDo"

export default function ToDos({todosData, filter}) {

    const todos = todosData
        .filter(todo => todo.enable === true)
        .map(todo => <ToDo key={todo.id} todoData={todo} filter={filter} />)
    
    return (
        <div className={styles.todoContainer}>
            <ul className={styles.todoList}>
                {todos}
            </ul>
        </div>
    )
}