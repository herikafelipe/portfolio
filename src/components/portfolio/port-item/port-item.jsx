import PropTypes from "prop-types";
import "./port-item.css"

function PortItem({ link, portimg, portalt, title }) {
    return (
        <>
            <a className="portitem" href={link} target="_blank" rel="noopener noreferrer">
                <img src={portimg} alt={portalt} />
                <p>{title}</p>
            </a>
        </>
    )
}

PortItem.propTypes = {
    link: PropTypes.string.isRequired, 
    portimg: PropTypes.string.isRequired, 
    portalt: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
};

export default PortItem