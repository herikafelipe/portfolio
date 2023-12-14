import "./port-item.css"

function PortItem({ link, portimg, portalt, title }) {
    return (
        <>
            <a className="portitem" href={link}>
                <img src={portimg} alt={portalt} />
                <p>{title}</p>
            </a>
        </>
    )
}

export default PortItem