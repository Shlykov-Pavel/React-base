import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import ErrorPage from "../pages/error-page";
import TodoListPage from "../pages/todolist/todo-list-page";
import AddTodoPage from "../pages/todolist/add-todo-page";
import MainPage from "../pages/main-page";
import TodoPage from "../pages/todolist/todo-page";
import { loadTodoById, loadTodos } from "../todo-api/loaders";
import { createTodoAction } from "../todo-api/actions";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, // <Link to="/">TODOS</Link>
                element: <MainPage />,
                loader: loadTodos
            },
            {
                path: "/todos/filtered", // <Link to="/todos/filtered">FILTERED TODO</Link>
                element: <TodoListPage />,
                loader: loadTodos
            },
            {
                path: "/todo/new", // <Link to="/todos/new">CREATE TODO</Link>
                element: <AddTodoPage />,
                action: createTodoAction
            },
            {
                path: "todo/:id", // <Link to="/todos/1765">TODO TITLE</Link>
                element: <TodoPage />,
                loader: loadTodoById
            },
        ]
    }
];

export const router = createBrowserRouter(routes);