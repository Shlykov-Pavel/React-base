import styles from "./ToDo.module.css";

export default function ToDo ({todoData}) {
    if (!todoData) return null;
    return(
        // <div className={styles.todoItem}>
        //     <p>{todoData.text}</p>
        //     <p>Добавлена: {todoData.createdAt}</p>
        //     <p>Выполнить до: {todoData.todoBefore}</p>
        //     {todoData.isDone ? "✅ Выполнена" : "⏳ Ожидает выполнения"}
        // </div>
                <li className={styles.todoItem}>
            <p className={styles.todoText}>{todoData.text}</p>
            <p className={styles.todoMeta}>Добавлена: {todoData.createdAt}</p>
            <p className={styles.todoMeta}>Выполнить до: {todoData.todoBefore}</p>
            <span className={`${styles.todoStatus} ${todoData.isDone ? styles.done : styles.pending}`}>
                {todoData.isDone ? "✅ Выполнена" : "⏳ Ожидает выполнения"}
            </span>
        </li>
    )
}