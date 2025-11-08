import { Form } from "react-router-dom";

export default function AddTodoPage() {

    return <Form method="POST">
        <div>
            <input type="text"
                name="text"
                placeholder="Введите текст задачи" />
        </div>
        <div>
            <input type="datetime-local"
                name="todoBefore"
                placeholder="Введите дату и время выполнения" />
        </div>
        <button type="submit">Создать</button>
    </Form>
}