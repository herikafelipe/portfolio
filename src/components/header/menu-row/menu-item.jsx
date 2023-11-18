
import "./menu-item.css"

const MenuItem = ({label,link}) => {
    return (
        <>
            <a className="MenuItem" href={link}>{label}</a> 
        </>
    )
}

export default MenuItem