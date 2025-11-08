import { useParams } from "react-router-dom";
import { getTodosById } from "../../todo-api/todoapi";
import { useEffect, useState } from "react";
import Todo from "../../components/todo/Todo";
import { useLoaderData } from "react-router-dom";

export default function TodoPage() {
    const { todo } = useLoaderData();

    return <Todo todoData={todo} />
}