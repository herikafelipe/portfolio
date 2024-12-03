import "./menu-row.css"
import MenuItem from "./menu-item"

const MenuHeader = () => {
    return (
        <>
            <div className="menuHeader">
             <MenuItem label="Home" link="#"/>
             <MenuItem label="About Me" link="#about"/>
             <MenuItem label="Skills" link="#skills"/>
             <MenuItem label="Portfolio" link="#portfolio"/>
             <MenuItem label="Contact" link="#contact"/>
            </div>
        </>
    )
}

export default MenuHeader