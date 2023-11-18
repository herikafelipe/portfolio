import "./header.css"
import Logo from "./logo/logo";
import MenuHeader from "./menu-row/menu-row";

function Header () {
    return(
        <header className="header">
            <Logo/>
            <MenuHeader/>
        </header>
    )
}

export default Header