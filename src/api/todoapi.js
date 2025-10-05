function addTodo(todo){
    let todos = JSON.parse(localStorage.getItem("todos"))
    todos = todos ? todos : [];
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function getTodos() {
    const todos = JSON.parse(localStorage.getItem("todos"))
    return todos ? todos : []
}

export {addTodo, getTodos}