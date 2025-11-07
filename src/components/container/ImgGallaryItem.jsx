import { useState } from "react";
import { useContext } from "react";
import { PageSettings } from "../../pageSettings";
import container from "./container.module.css"
import mockImg from "./mockImage.jpg"
import Button from "../button/button";


export default function ImgGallaryItem({ caption, src, onDelete }) {
    const hColor = useContext(PageSettings);

    // let clickCount = 0;
    const [clickCount, setClickCount] = useState(0);

    // обработчик начинается с handle, если он объявлен в компоненте
    const handleClickCount = () => {
        console.log("click", caption);
        // clickCount++;
        // setClickCount(100); без необходимости отталкиваться от текущего значения
        setClickCount((current) => current + 1); // при необходимости отталкиваться от текущего значения
    }

    // передать ссылку на функцию-обработчик события onClick
    return (
        <figure className={container.imageBlock} onClick={handleClickCount}>
            <figcaption style={{ color: hColor }}>{caption}: {clickCount}</figcaption>
            <img src={mockImg} alt={caption} />
            <Button text="Удалить" onClickButton={onDelete} />
        </figure>
    )
}