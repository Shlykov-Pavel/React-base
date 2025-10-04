function addSymbols(text){
    return "***" + text + "***"
}

export function Footer() {

    const title = "todolist";
    const footerData = {
        since: "01.01.2025",
        lastTodo: "25.12.2025"
    }

    return(
        <footer>
            <h2>{title.toUpperCase()}</h2>
            <p> Первая ToDo: {footerData.since}</p>
            <p> Последняя ToDo: {addSymbols(footerData.lastTodo)}</p>
            Подвал
        </footer>
    )
}