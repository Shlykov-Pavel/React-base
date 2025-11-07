import { useContext } from "react"
import { PageSettings } from "../../pageSettings";
import buttonStyle from "./button.module.css"

export default function Button({ text, onClickButton }) {
    const hColor = useContext(PageSettings);

    return <button className={buttonStyle.button} style={{ color: hColor }} onClick={onClickButton} >
        {text}
    </button >
}