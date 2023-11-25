import "./header.css"
import HireMeBtn from "./hire-me-btn/hire-me-btn";
import Logo from "./logo/logo";
import MenuHeader from "./menu-row/menu-row";

function Header () {
    return(
        <header className="header">
            <Logo/>
            <MenuHeader/>
            <HireMeBtn/>
        </header>
    )
}

export default Header