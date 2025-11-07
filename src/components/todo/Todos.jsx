import Todo from "./Todo";
import todoStyle from "./todo.module.css"

export default function Todos({ todosData }) {
    const todos = todosData
        .filter(todo => todo.enable)
        .map(todo => <Todo key={todo.id} todoData={todo} />)

    return (
        <div className={todoStyle.todolist}>
            {todos}
        </div>
    )
}