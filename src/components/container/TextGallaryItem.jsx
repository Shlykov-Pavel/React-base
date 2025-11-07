import Button from "../button/button";
import { useContext } from "react";
import { PageSettings } from "../../pageSettings";
import container from "./container.module.css"

export default function TextGallaryItem({ text, onDelete }) {
    const hColor = useContext(PageSettings);

    // обработчик начинается с handle, если он объявлен в компоненте
    const handleClickText1 = () => {
        console.log("click1", text);
    }

    const handleClickText3 = (arg) => {
        console.log("click3", arg);
    }

    return (
        <>
            <div className={container.textBlock} onClick={handleClickText1}>
                <span style={{ color: hColor }}>{text}</span>
                <Button text="Удалить" onClickButton={onDelete} />
            </div>
            {/* <div onClick={() => { console.log("click2", text) }}>{text}</div> */}
            {/* <div onClick={() => handleClickText3(text.toUpperCase())}>{text}</div> */}
        </>
    )
}