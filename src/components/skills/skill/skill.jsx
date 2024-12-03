import PropTypes from 'prop-types';
import "./skill.css"

function Skill({ skilltitle, percentual }) {
    return (
        <>
            <div className="skill">
                <p className="skilltitle">{skilltitle}</p>
                <div className="skillpipe">
                <div className="skillline" style={{width: percentual}}></div>
                </div>
                <p>{percentual}</p>
            </div>

        </>
    )
}

Skill.propTypes = {
    skilltitle: PropTypes.string.isRequired, 
    percentual: PropTypes.string.isRequired,
};


export default Skill