import { useState, useEffect } from "react";
import Button from "../../components/button/button";
import Title from "../../components/text/Title";
import Todos from "../../components/todo/Todos";
import { getTodos } from "../../todo-api/todoapi";

function getFilters() {
    return [
        { id: 1, text: "Открытые" },
        { id: 2, text: "Завершенные" },
        { id: 3, text: "Просроченные" },
        { id: 4, text: "Все задачи" }
    ]
}

// Хук useEffect
// Используется, если нужно описать побочные эффекты,
// которые не происходят в зависимости от событий:
// извлечение данных из localstorage, запросы на сервер,
// подписка на события без участия react (обратчик события на window),
// изменения заголовка вкладки

export default function TodoListPage() {

    const [pageTitle, setPageTitle] = useState("Все задачи");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // здесь могут быть запросы на сервер
        // извлечение данных из локального хранилища
        // подписка на события без участия react и т.д.

        setTodos(getTodos());

        // если мы укажем зависимость от данной переменной,
        // то перерисовки будут зациклены:
        // вызов сеттера -> новый рендеринг -> useEffect -> вызов сеттера
    }, []); // зависимости не меняются, поэтому useEffect отработает один раз

    const handleFilterButtonClick = (text) => {
        if (text === pageTitle) return;
        setPageTitle(text);

        switch (text) {
            case "Открытые":
                setTodos(todos.map(todo => {
                    return {
                        ...todo,
                        enable: !todo.isDone
                    }
                }));
                break;
            case "Завершенные":
                setTodos(todos.map(todo => {
                    return {
                        ...todo,
                        enable: todo.isDone
                    }
                }));
                break;
            case "Просроченные":
                setTodos(todos.map(todo => {
                    return {
                        ...todo,
                        enable: !todo.isDone && new Date(todo.todoBefore) < new Date()
                    }
                }));
                break;
            default:
                setTodos(todos.map(todo => {
                    return {
                        ...todo,
                        enable: true
                    }
                }));
        }
    };


    const filters = getFilters()
        .map(filter => <Button key={filter.id}
            text={filter.text}
            onClickButton={() => handleFilterButtonClick(filter.text)} />);

    return <section>
        <Title text={pageTitle} />
        <div>
            {filters}
        </div>
        {!todos || todos.length === 0 ?
            <p>Задачи отсутствуют</p> :
            <Todos todosData={todos} filter={pageTitle} />}
    </section>
}