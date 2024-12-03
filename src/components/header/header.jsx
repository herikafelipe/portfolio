import RoundBtn from "../round-button/round-button";
import "./header.css"
import MenuHeader from "./menu-row/menu-row";

function Header () {
    return(
        <header className="header">
            <div className="content">
            <MenuHeader/>
            <RoundBtn content="Hire Me" link="#contact"/>
            </div>
        </header>
    )
}

export default Header