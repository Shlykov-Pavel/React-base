import Nav from "../menu/Nav";
import logo from "./logo.png"
import headerStyle from "./header.module.css"

export default function Header() {

    return (
        <header className={headerStyle.header}>
            <img src={logo} alt="logo" />
            <Nav />
        </header>
    );
}