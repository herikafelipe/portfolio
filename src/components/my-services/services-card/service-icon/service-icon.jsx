import "./service-icon.css"


function ServiceIcon ({icon,alt}) {
    return (
        <>
            <img className="serviceicon" src={icon} alt={alt} />
        </>
    )
}

export default ServiceIcon

