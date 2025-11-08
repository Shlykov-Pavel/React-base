import { addTodo } from "./todoapi";
import { redirect } from "react-router-dom";

export async function createTodoAction({ request }) {
    const data = await request.formData();
    const todo = await addTodo(data);
    return redirect(`/todo/${todo.id}`);
}