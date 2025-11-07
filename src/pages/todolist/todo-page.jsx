import { useParams } from "react-router-dom";
import { getTodosById } from "../../todo-api/todoapi";
import { useEffect, useState } from "react";
import Todo from "../../components/todo/Todo";

export default function TodoPage() {
    const { id } = useParams();

    const [todo, setTodo] = useState({});

    useEffect(() => {
        setTodo(getTodosById(id));
    }, []);

    return <Todo todoData={todo} />
}