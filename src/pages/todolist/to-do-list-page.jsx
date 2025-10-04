import { useEffect, useState } from "react";
import Title from "../../components/text/Title";
import ToDos from "../../components/todo/ToDos";
import { useGetTodoList } from "../../hooks/hooks";
import Button from "../../components/button/Button";

function getFilters() {
    return [
        {id: 1, text: "Выполненные"},
        {id: 2, text: "Завершенные"},
        {id: 3, text: "Просроченные"},
        {id: 4, text: "Все задачи"},
    ]
}

export default function TodoListPage(){

    const todoList = useGetTodoList()

    const [pageTitle, setPageTitle] = useState("Все задачи")
    const [todos, setTodos] = useState(todoList.todos ? todoList.todos : [])

    const handleFilterButtonClick = (text) => {
        if (text === pageTitle) return;
        setPageTitle(text)

        switch (text){
            case "Выполненные":
                setTodos(todoList.todos.filter(todo => !todo.isDone))
                break;
            case "Завершенные":
                setTodos(todoList.todos.filter(todo => todo.isDone))
                break;
            case "Просроченные":
                setTodos(todoList.todos.filter(todo => !todo.isDone && new Date(todo.todoBefore) < new Date()))
                break;
            default:
                setTodos(todoList.todos)
        }
    }

    const filters = getFilters()
        .map(filter => <Button
        key={filter.id} 
        text={filter.text}
        onClickButton = {() => handleFilterButtonClick(filter.text)}/>);
        
       return <section>
        <Title level={2} text={pageTitle} />
        <div>
            {filters}
        </div>
        <ToDos todosData={todos}/>
       </section>
}