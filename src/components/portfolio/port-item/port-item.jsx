import "./port-item.css"

function PortItem ({link, portimg, portalt }) {
    return(
        <>
        <a className="portitem" href={link}>
            <img src={portimg} alt={portalt} />
        </a>
        </>
    )
}

export default PortItem