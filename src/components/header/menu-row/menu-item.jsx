import { Link } from "react-scroll";
import PropTypes from "prop-types";
import "./menu-item.css"

const MenuItem = ({ label, link }) => {
    return (
      <Link 
        to={link} 
        smooth={true} 
        duration={1400} 
        offset={-85} 
        className="MenuItem"
      >
        {label}
      </Link>
    );
};
  
MenuItem.propTypes = {
label: PropTypes.string.isRequired,
link: PropTypes.string.isRequired,
};
  
export default MenuItem