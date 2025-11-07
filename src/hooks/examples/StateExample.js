import { useState } from "react"; // импорт хука

// Хук useState
// 1. хранит значения переменных компонента между рендерингами
// 2. изменения значений приводят к повторному рендерингу
// 3. изменяется только через сеттер
// 4. массивы и объекты, хранимые в state,
// при необходимости обновления, должны перезаписываться новыми копиями

export default function StateExample() {
    // использование
    const initialValue = 0;
    const [value, setValue] = useState(initialValue);
    // value - значение, хранимое в state
    // setValue - сеттер для изменения значения value
    // initialValue - первоначальное значение value. Используется только при первой отрисовке.
    // Если initialValue генерируется функцией, в useState лучше пердавать ссылку на функцию, а не её вызов.
    // Например,
    const initialValueGenerator = () => 0;
    const [value01, setValue01] = useState(initialValueGenerator); // правильный способ.
    // Функция будет вызвана один раз при первой отрисовке. Результат вызова - первоначальное значение value

    const [value02, setValue02] = useState(initialValueGenerator()); // рабочий вариант, но его лучше избегать.
    // Функция initialValueGenerator будет вызываться при каждом рендеринге. При первой отрисовке, результат её вызова -
    // первоначальное значение value, при последующих вызовах результат функции не используется (инструкции вызываются
    // зря и могут замедлить отрисовку)

    function handleUpdateValue() {
        // обновление значения value. Новое значения передается в сеттер
        setValue(value + 1);
        // обновление значения value с доступом к текущему состоянию
        // prevState - текущее состояние value
        // функция обновления возвращает новое значение состояния
        setValue(prevState => {
            if (prevState > 1000) return prevState + 1;
            return prevState + 2;
        });
        // если value - массив или объект, то в состояние должна записываться их измененная копия

        // при необходимости изменить состояние несколько раз врамках одного обработчика,
        // следует использовать функцию обновленя:
        // setValue(prevState => prevState + 1);
        // setValue(prevState => prevState + 1);
        // а не просто сеттер:
        // setValue(value + 1);
        // setValue(value + 1);
    }

    return (
        <section>
            <p onClick={handleUpdateValue}>
                useState {value} {/* чтение значения value */}
            </p>
        </section>);
}