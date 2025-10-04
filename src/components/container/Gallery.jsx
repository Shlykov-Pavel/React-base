import { useSlot } from "../../hooks/hooks";
import Title from "../text/Title";
import ImgGalleryItem from "./ImgGalleryItem";
import TextGalleryItem from "./TextGalleryItem";
import container from "./container.module.css"


export default function Gallery ({children, view = 'horizontal'}) {

    const title=useSlot(children,[Title]);
    const galleryItem = useSlot(children, [ImgGalleryItem, TextGalleryItem]);
    

    return <section>
        <div className={container.galleryContainer}>
         <div className={container.galleryHeader}>
                        {title}
                    </div>
        <div className={container[view]}>
            {galleryItem}

        </div>
        </div>
    </section>
}