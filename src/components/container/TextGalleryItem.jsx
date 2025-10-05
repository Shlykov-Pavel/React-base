import { useContext } from "react";
import Button from "../button/Button";
import styles from "./TextGalleryItem.module.css";
import { PageSettings } from "../../../pageSettings";

export default function TextGalleryItem({ text, onDelete}) {
    const {hColor} = useContext(PageSettings)

    const handleClickText1 = () => {
        console.log('click1', text);
    }

    const handleClickText3 = (arg) => {
        console.log("click3", arg);
        
    }
    return (
        <>
        {/* <div onClick={handleClickText1}>{text}</div> */}
        <div className={styles.textItem} style={{color: hColor}}  onClick={() =>{handleClickText3(text)}}>{text}</div>
        <Button text="Удалить" onClickButton={onDelete} />
                {/* <div onClick={() =>{handleClickText3(text)}}>{text}</div> */}

        </>
    )
}