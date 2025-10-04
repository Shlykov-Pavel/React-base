import styles from "./TextGalleryItem.module.css";

export default function TextGalleryItem({ text }) {

    const handleClickText1 = () => {
        console.log('click1', text);
    }

    const handleClickText3 = (arg) => {
        console.log("click3", arg);
        
    }
    return (
        <>
        {/* <div onClick={handleClickText1}>{text}</div> */}
        <div className={styles.textItem}  onClick={() =>{handleClickText3(text)}}>{text}</div>
                {/* <div onClick={() =>{handleClickText3(text)}}>{text}</div> */}

        </>
    )
}