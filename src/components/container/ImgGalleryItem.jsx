import { useState } from "react";
import styles from "./ImgGalleryItem.module.css";

export default function ImgGalleryItem({ caption, src }) {
    
  const [clickCount, setClickCount] = useState(0);

    const handleClickCount = () => {
        setClickCount((current) => current+1)
    }
    return (
        <figure onClick={handleClickCount} className={styles.figure}>
            <figcaption className={styles.figcaption}>{caption}:{clickCount}</figcaption>
            <img className={styles.image} src={src} alt={caption} />
        </figure>
    )
}