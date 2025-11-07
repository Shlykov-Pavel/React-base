import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import ErrorPage from "../pages/error-page";
import TodoListPage from "../pages/todolist/todo-list-page";
import AddTodoPage from "../pages/todolist/add-todo-page";
import MainPage from "../pages/main-page";
import TodoPage from "../pages/todolist/todo-page";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true, // <Link to="/">TODOS</Link>
                element: <MainPage />,
            },
            {
                path: "/todos/filtered", // <Link to="/todos/filtered">FILTERED TODO</Link>
                element: <TodoListPage />,
            },
            {
                path: "/todo/new", // <Link to="/todos/new">CREATE TODO</Link>
                element: <AddTodoPage />,
            },
            {
                path: "todo/:id", // <Link to="/todos/1765">TODO TITLE</Link>
                element: <TodoPage />,
            },
        ]
    }
];

export const router = createBrowserRouter(routes);