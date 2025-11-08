function addTodo(todoFormData) {
    const todo = {
        text: todoFormData.get("text"),
        todoBefore: todoFormData.get("todoBefore"),
        id: Math.floor(Math.random() * 10000000),
        createdAt: new Date(),
        isDone: false,
        enable: true
    };
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos = todos ? todos : [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(todo), 1000);
    });
}

function getTodos() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(todos ? todos : []), 1000);
    });
}

function getTodosCount() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos = todos ? todos : [];
    return todos.length;
}

function getTodosById(id) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    return new Promise(function (resolve, reject) {
        if (todos.length > 0) {
            setTimeout(() => resolve(todos.filter(todo => todo.id == id)[0]), 1000);
        } else {
            setTimeout(() => reject(null), 1000);
        }
    });
}

export { addTodo, getTodos, getTodosCount, getTodosById };