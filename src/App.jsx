import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import Gallary from "./components/container/Gallary";
import Title from "./components/text/Title";
import TextGallaryItem from "./components/container/TextGallaryItem";
import ImgGallaryItem from "./components/container/ImgGallaryItem";
import TodoListPage from "./pages/todolist/todo-list-page";
import { useState } from "react";
import { useReducer } from "react";
import { useImmer } from 'use-immer'
import Button from "./components/button/button";
import { PageSettings } from "./pageSettings";
import { useContext } from "react";
import AddTodoPage from "./pages/todolist/add-todo-page";
import { Outlet } from "react-router-dom";

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

function App() {
  const defaultColor = useContext(PageSettings);
  const [hColor, setHColor] = useState(defaultColor);

  function handleChangeHColor(color) {
    console.log(color)
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
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
