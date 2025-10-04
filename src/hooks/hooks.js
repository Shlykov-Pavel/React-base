// * хуки - переиспользуемые функции, которые содержат бизнес-логику
// * хуки не должны содержать jsx разметку
// * хуки не должны вызывать в циклах и ветвлениях

import React from "react";

// * в кастомных хуках можно вызывать хуки react
export function useTodoCount() {
    return 4;
}

// хук возвращает дочерний элемент нужного типа
export function useSlot(children, types) {
    return React.Children.toArray(children).filter(child => types.find(type => type === child.type));
}

export function useGetTodoList() {
    const todos = [
        { id: 1, text: "todo #1", createdAt: "12.02.2025", todoBefore: "15.02.2025", isDone: false },
        { id: 2, text: "todo #2", createdAt: "12.03.2025", todoBefore: "13.03.2025", isDone: false },
        { id: 3, text: "todo #3", createdAt: "12.04.2025", todoBefore: "17.06.2025", isDone: false },
        { id: 4, text: "todo #4", createdAt: "12.06.2025", todoBefore: "15.06.2025", isDone: true }
    ];
    // const filterText = "all";
    const filters = {
        current: "all",
        available: ["all"]
    }

    const error = null;

    return {
        error: error,
        filters: filters,
        todos: todos
    }
}
