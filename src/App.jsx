import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Todos from "./components/todo/ToDos";
import Title from "./components/text/Title";
import ImgGalleryItem from "./components/container/ImgGalleryItem";
import TextGalleryItem from "./components/container/TextGalleryItem";
import Gallery from "./components/container/Gallery";
import TodoListPage from "./pages/todolist/to-do-list-page";
import Button from "./components/button/Button";
import { useReducer, useState, useSyncExternalStore } from "react";
import { useImmer } from "use-immer";
import AddTodoPage from "./pages/todolist/add-to-do-page";

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

let nextTextId = 4
let nextImageId = 4

function App() {

  // const [textData, setTextData] = useState(getTextData);
  const [textData, dispatch] = useReducer(changeTextData, null, getTextData)
  const [imageData, setImageData] = useImmer(getImageData)

  const textGalleryItems = textData.map(data => <TextGalleryItem key={data.id} text={data.text} onDelete={() => handleDeleteTextNote(data.id)} />);
  const imageGalleryItems = imageData.map(data => <ImgGalleryItem key={data.id} caption={data.text} src={data.src} />);

  function changeTextData (notes, action){
    switch(action.type){
        case "add":
          return [
            ...notes,
            action.note
          ]
          case "delete":
            return notes.filter(note => note.id !== action.noteId)
        }
  }

  function handleAddTextNote () {
    dispatch ({
      type: "add",
      note: {
        id:++nextTextId,
        text: `Text #${nextTextId}`
      }
    })
  //  setTextData([
  //   ...textData,
  //   {
  //     id: ++nextTextId,
  //     text: `Text #${nextTextId}`
  //   }
  //   ]
  //  )
  }

  function handleDeleteTextNote(noteId) {
    dispatch ({
      type: "delete",
      noteId: noteId
    })
  }

  function handleAddImageNote() {
    setImageData(imageData => {
      imageData.push({
        id: ++nextImageId,
        text: `Image #${nextImageId}`,
        src: "https://mock"
      })
    }

    );
  }

  return (
    <>
      <Header />
      <TodoListPage />
      <AddTodoPage />
      <Gallery>
        <Title text="Текстовые заметки" level={2} color="green" />
        {textGalleryItems}
      </Gallery >
      <Gallery>
        <Title text="Картинки" level={2} color="orange" />
        {imageGalleryItems}
      </Gallery>
      <Button onClickButton={handleAddTextNote}
      text="Добавить текст в галерею" />
           <Button onClickButton={handleAddImageNote}
      text="Добавить изображение в галерею" />
      <Footer />
    </>
  )
}

export default App