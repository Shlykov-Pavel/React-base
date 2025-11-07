import Button from "../../components/button/button";
import { addTodo } from "../../todo-api/todoapi";
import { useState } from "react";

export default function AddTodoPage() {
    const [todo, setTodo] = useState({
        text: "",
        todoBefore: "",
    });

    function handleChangeInput(event) {
        const { name, value } = event.target;
        setTodo(todo => {
            return {
                ...todo,
                [name]: value
            }
        })
    }

    function handleAddTodo(event) {
        event.preventDefault();

        addTodo({
            id: Math.floor(Math.random() * 10000000),
            text: todo.text,
            todoBefore: todo.todoBefore,
            createdAt: new Date(),
            isDone: false,
            enable: true
        })

    }
    return <form onSubmit={handleAddTodo}>
        <div>
            <input type="text"
                name="text"
                onChange={handleChangeInput}
                placeholder="Введите текст задачи" />
        </div>
        <div>
            <input type="datetime-local"
                name="todoBefore"
                onChange={handleChangeInput}
                placeholder="Введите дату и время выполнения" />
        </div>
        <Button text="Создать" />
    </form>
}