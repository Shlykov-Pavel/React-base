import Gallary from "../components/container/Gallary";
import Title from "../components/text/Title";
import TextGallaryItem from "../components/container/TextGallaryItem";
import ImgGallaryItem from "../components/container/ImgGallaryItem";
import { useState } from "react";
import { useReducer } from "react";
import Button from "../components/button/button";
import { PageSettings } from "../pageSettings";
import { useContext } from "react";
import Todos from "../components/todo/Todos";
import { useLoaderData } from "react-router-dom";

function getTextData() {
    return [
        { id: 1, text: "Text #1" },
        { id: 2, text: "Text #2" },
        { id: 3, text: "Text #3" },
        { id: 4, text: "Text #4" }
    ];
}

function getImageData() {
    return [
        { id: 1, text: "Image #1", src: "https://mock" },
        { id: 2, text: "Image #2", src: "https://mock" },
        { id: 3, text: "Image #3", src: "https://mock" },
        { id: 4, text: "Image #4", src: "https://mock" }
    ];
}

let nextTextId = 4;
let nextImageId = 4;

function MainPage() {
    const defaultColor = useContext(PageSettings);
    const [hColor, setHColor] = useState(defaultColor);
    const { todos } = useLoaderData();

    function handleChangeHColor(color) {
        setHColor(color);
    }

    const [textData, textDispatch] = useReducer(changeTextData, null, getTextData);
    const [imageData, imageDispatch] = useReducer(changeImageData, null, getImageData);

    const textGallaryItems = textData.map(data => <TextGallaryItem key={data.id}
        onDelete={() => handleDeleteTextNote(data.id)} text={data.text} />);
    const imageGallaryItems = imageData.map(data => <ImgGallaryItem key={data.id}
        onDelete={() => handleDeleteImageNote(data.id)} caption={data.text} src={data.src} />);

    // изменение изображений
    function changeImageData(notes, action) {
        switch (action.type) {
            case "add":
                return [
                    ...notes,
                    action.note
                ]
            case "delete":
                return notes.filter(note => note.id !== action.noteId)
        }
    }

    // обработчик удаления изображений
    function handleDeleteImageNote(noteId) {
        imageDispatch({
            type: "delete",
            noteId: noteId
        });
    }

    // обработчик добавления изображений
    function handleAddImageNote() {
        imageDispatch({
            type: "add",
            note: {
                id: ++nextImageId,
                text: `Image #${nextImageId}`,
                src: "https://mock"
            }
        });
    }

    // изменение текстовых заметок
    function changeTextData(notes, action) {
        switch (action.type) {
            case "add":
                return [
                    ...notes,
                    action.note
                ]
            case "delete":
                return notes.filter(note => note.id !== action.noteId)
        }
    }

    // обработчик добавления текстовых заметок
    function handleAddTextNote() {
        textDispatch({
            type: "add",
            note: {
                id: ++nextTextId,
                text: `Text #${nextTextId}`
            }
        });
    }

    // обработчик удаления текстовых заметок
    function handleDeleteTextNote(noteId) {
        textDispatch({
            type: "delete",
            noteId: noteId
        });
    }

    return (
        <>
            <Todos todosData={todos} />
            <Gallary hColor={hColor}>
                <Title text="Текстовые заметки" level={2} color="#f08fd9" />
                <Button onClickButton={handleAddTextNote}
                    text="Добавить заметку" />
                {textGallaryItems}
            </Gallary >
            <Gallary hColor={hColor}>
                <Title text="Изображения" level={2} color="#b19cd9" />
                <Button onClickButton={handleAddImageNote}
                    text="Добавить заметку" />
                {imageGallaryItems}
            </Gallary>
            <section>
                <h3>Настройки галерей</h3>
                <div>
                    <button onClick={() => handleChangeHColor("#b19cd9")}>
                        Фиолетовый текст
                    </button>
                    <button onClick={() => handleChangeHColor("#f08fd9")}>
                        Розовый тект
                    </button>
                </div>
            </section>
        </>
    )
}

export default MainPage
