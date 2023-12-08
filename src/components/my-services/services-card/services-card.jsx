import "./services-card.css"
import ServiceIcon from "./service-icon/service-icon"


function ServiceCard ({icon, alt, servicetitle, servicedescription}) {
    return (
        <>
            <div className="card">
                <ServiceIcon icon={icon} alt={alt}/>
                <h3 className="servicetitle">{servicetitle}</h3>
                <p className="servicedescription">{servicedescription}</p>
            </div>
        </>
    )
}

export default ServiceCard