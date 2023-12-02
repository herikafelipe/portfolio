import "./service-card.css"
import ServiceIcon from "./service-icon/service-icon"

function ServiceCard ({icon}) {
    return (
        <>
            <div className="card">
                <ServiceIcon icon={icon}/>
            </div>
        </>
    )
}

export default ServiceCard