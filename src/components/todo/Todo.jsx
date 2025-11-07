import { Link } from "react-router-dom";
import Button from "../button/button";
import Title from "../text/Title";
import todoStyle from "./todo.module.css"


function formatDate(date) {

    let dateOut = new Date(date);

    let dd = dateOut.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = dateOut.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = dateOut.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}


export default function Todo({ todoData }) {
    return (
        <div className={todoStyle.todo}>
            <Title level={2} text={todoData.text} />
            <p>Добавлена: {formatDate(todoData.createdAt)}</p>
            <p>Выполнить до: {formatDate(todoData.todoBefore)}</p>
            <p className={todoStyle.status} style={{
                backgroundColor: todoData.isDone ? "lightgreen" : "coral"
            }}>
                {todoData.isDone ? "Выполнена" : "Ожидает выполнения"}
            </p>
            <Button text="Завершить" />
            <Link to={`/todo/${todoData.id}`}>Перейти</Link>
        </div>
    )
}