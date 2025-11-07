import container from "./container.module.css"
import { useSlot } from "../../hooks/hooks"
import Title from "../text/Title"
import ImgGallaryItem from "./ImgGallaryItem";
import TextGallaryItem from "./TextGallaryItem";
import { PageSettings } from "../../pageSettings";
import Button from "../button/button";

export default function Gallary({ children, view = 'horizontal', hColor }) {

    // children - несколько дочерних элементов, которые необходимо разместить в соответствующие участки разметки
    // получение нужных элементов по типу
    const title = useSlot(children, [Title]);
    const addButton = useSlot(children, [Button]);
    const galaryItem = useSlot(children, [ImgGallaryItem, TextGallaryItem]);

    // использование элементов - слотов в разметке
    return <section className={container.gallery}>
        <div className={container.header}>
            {title}
            {addButton}
        </div>
        <div className={container[view]}>
            {/* Provider контекста обеспечивает передачу данных в дочерние элементы.
            Без Provider контекст не будет доступен в дочерних элементах */}
            <PageSettings.Provider value={hColor}>
                {galaryItem}
            </PageSettings.Provider>
        </div>
    </section>
}