import { getTodosCount } from "../../todo-api/todoapi";
import Title from "../text/Title";

function addSymbols(text) {
    return "*** " + text + " ***"
}


export function Footer() {

    const title = "todo info";

    const footerData = {
        since: "12.11.2025",
        lastTodo: "12.11.2025"
    }

    const todoCount = getTodosCount();

    return (
        <footer>
            <Title text={`${title.toUpperCase()}: ${todoCount}`} level={2} />

            <p>Первая todo: {footerData.since}</p>

            <p>Последняя todo: {addSymbols(footerData.lastTodo)}</p>
        </footer >
    )
}