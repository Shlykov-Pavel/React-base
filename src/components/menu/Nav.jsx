import nav from "./nav.module.css"
import { Link } from "react-router-dom";

const linkStyle = {
    padding: "20px",
    color: "black",
    textDecoration: "none"
};

function getLinkList() {
    return [
        { id: 1, uri: "/", text: "CURRENT TODO" },
        { id: 2, uri: "/todos/filtered", text: "FILTERED TODO" },
        { id: 3, uri: "/todo/new", text: "CREATE TODO" }
    ];
}

// передача данных в компонет: все атрибуты передаются в составе объекта props, 
// благодаря синтаксису {} разбиваются на отдельные переменные

export default function Nav() {
    // отрисовка списоков (для динамических список обязательно использовать атрибут key с уникальным значением элемента)
    // на основе полученного массива метод map сформирует список элементов Link 
    const links = getLinkList()
        .map(link => <Link key={link.id} to={link.uri}>
            {link.text}
        </Link>);

    return (
        <nav className={nav.container}>
            {links}
        </nav>
    )
}