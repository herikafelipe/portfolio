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

export default Skill