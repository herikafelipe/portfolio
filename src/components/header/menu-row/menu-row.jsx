import "./menu-row.css"
import MenuItem from "./menu-item"

const MenuHeader = () => {
    return (
        <>
            <div className="menuHeader">
             <MenuItem label="Home" link="#"/>
             <MenuItem label="About Me" link="#"/>
             <MenuItem label="Services" link="#"/>
             <MenuItem label="Skills" link="#"/>
             <MenuItem label="Portfolio" link="#"/>
             <MenuItem label="Contact" link="#"/>
            </div>
        </>
    )
}

export default MenuHeader