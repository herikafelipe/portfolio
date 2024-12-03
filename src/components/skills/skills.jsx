import "./skills.css"
import Title from "../title/title"
import Skill from "./skill/skill"

function Skills() {
    return (
        <>
            <div className="myskills" id="skills">
                <Title firstWord="My" secondWord="Skills"/>
                <div className="skills">
                    <Skill skilltitle="HTML" percentual="80%"/>
                    <Skill skilltitle="CSS/SASS" percentual="80%"/>
                    <Skill skilltitle="Bootstrap" percentual="70%"/>
                    <Skill skilltitle="JavaScript" percentual="50%"/>
                    <Skill skilltitle="Vue JS" percentual="75%"/>
                    <Skill skilltitle="React JS" percentual="60%"/>
                    <Skill skilltitle="GitLab/GitHub" percentual="70%"/>

                </div>
            </div>
        </>
    )
}

export default Skills