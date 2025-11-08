import { useState, useEffect } from "react";
import Button from "../../components/button/button";
import Title from "../../components/text/Title";
import Todos from "../../components/todo/Todos";
import { useLoaderData } from "react-router-dom";

function getFilters() {
    return [
        { id: 1, text: "Открытые" },
        { id: 2, text: "Завершенные" },
        { id: 3, text: "Просроченные" },
        { id: 4, text: "Все задачи" }
    ]
}


export default function TodoListPage() {

    const [pageTitle, setPageTitle] = useState("Все задачи");
    const [todosState, setTodos] = useState([]);
    const { todos } = useLoaderData();

    useEffect(() => {
        setTodos(todos);
    }, [])

    const handleFilterButtonClick = (text) => {
        if (text === pageTitle) return;
        setPageTitle(text);

        switch (text) {
            case "Открытые":
                setTodos(todosState.map(todo => {
                    return {
                        ...todo,
                        enable: !todo.isDone
                    }
                }));
                break;
            case "Завершенные":
                setTodos(todosState.map(todo => {
                    return {
                        ...todo,
                        enable: todo.isDone
                    }
                }));
                break;
            case "Просроченные":
                setTodos(todosState.map(todo => {
                    return {
                        ...todo,
                        enable: !todo.isDone && new Date(todo.todoBefore) < new Date()
                    }
                }));
                break;
            default:
                setTodos(todosState.map(todo => {
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
        {!todosState || todosState.length === 0 ?
            <p>Задачи отсутствуют</p> :
            <Todos todosData={todosState} filter={pageTitle} />}
    </section>
}