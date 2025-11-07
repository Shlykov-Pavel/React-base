function addTodo(todo) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos = todos ? todos : [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    return todos ? todos : [];
}

function getTodosCount() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos = todos ? todos : [];
    return todos.length;
}

function getTodosById(id) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos.length > 0) return todos.filter(todo => todo.id == id)[0];
    return null;
}

export { addTodo, getTodos, getTodosCount, getTodosById };