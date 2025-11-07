import { useReducer, useState } from "react"; // импорт хука

// Хук useReducer
// Используется: если состояние меняется в зависимоти
// от различных действий пользователя.
// Предоставляет единый интерфейс управления состоянием
// 1. хранит значения переменных компонента между рендерингами
// 2. изменения значений приводят к повторному рендерингу
// 3. изменяется только через update функцию
// 4. массивы и объекты, хранимые в state,
// при необходимости обновления, должны перезаписываться новыми копиями

export default function ReducerExample() {
    // использование
    const initialValue = { color: "red", count: 0, needToUpdate: true };
    const [value, dispatch] = useReducer(reducer, initialValue);
    // value - значение, хранимое в state
    // dispatch - dispatch функция инициирует обновление состояния.
    // Принимает объект, описывающий изменения (action) и ничего не возвращает
    // reducer - единый интерфейс управления состоянием. Вызовы dispatch приводят к вызову reducer.
    // Принимает на вход состояние и объект, описывающий изменения (action) из dispatch.
    // Значение, возвращаемое reducer - новое состояние.
    // initialValue - первоначальное значение value. Используется только при первой отрисовке.

    // Если initialValue генерируется функцией, то в useReducer необходимо передать третий аргумент,
    // тогда:
    const initialArgs = "red";
    const initialFn = arg => {
        return { color: arg, count: 0, needToUpdate: true };
    };
    // const [value, dispatch] = useReducer(reducer, initialArgs, initialFn);
    // initialFn - возвращает первоначальное значение value
    // initialArgs - аргументы, которые будут переданы в initialFn при вызове


    // dispatch и reducer функции
    function reducer(previousState, action) {
        switch (action.type) {
            case "CHANGE_COLOR":
                return {
                    ...previousState,
                    color: previousState.color !== action.color ? action.color : "orange"
                }
            case "INCREMENT_COUNT":
                return {
                    ...previousState,
                    count: previousState.count + 1
                }
        }
    }

    const handleNewColor = (color) => {
        dispatch({
            type: "CHANGE_COLOR",
            color
        })
    };

    const incrementCount = () => {
        dispatch({
            type: "INCREMENT_COUNT"
        })
    };


    return (
        <section>
            <button onClick={() => handleNewColor("blue")}>Новый цвет</button>
            <button onClick={incrementCount}>Увеличить количество</button>
        </section>
    );
}