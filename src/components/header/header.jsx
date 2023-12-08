import RoundBtn from "../round-button/round-button";
import "./header.css"
import Logo from "./logo/logo";
import MenuHeader from "./menu-row/menu-row";

function Header () {
    return(
        <header className="header">
            <Logo/>
            <MenuHeader/>
            <RoundBtn content="Hire Me" link="#"/>
        </header>
    )
}

export default Header