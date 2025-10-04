
import nav from '/nav.module.css'

const  linkStyle = {
    padding: '28px',
    backgroundColor: "#464046",
    color: '#A2A1A9',
    textDecoration: "none"
}

function Link(){
    return(
        <a style={linkStyle} href="#mockref">Текст ссылки</a>
    )
}

export default function Nav(){
    return(
        <nav className={nav.container}>
        <Link />
        <Link />
        <Link />
        <Link />
        <Link />
        </nav>
    )
}