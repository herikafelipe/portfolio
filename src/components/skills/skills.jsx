import "./skills.css"
import Title from "../title/title"
import Skill from "./skill/skill"

function Skills() {
    return (
        <>
            <div className="myskills">
                <Title firstWord="My" secondWord="Skills"/>
                <div className="skills">
                    <Skill skilltitle="HTML" percentual="80%"/>
                    <Skill skilltitle="CSS" percentual="75%"/>
                    <Skill skilltitle="Bootstrap" percentual="60%"/>
                    <Skill skilltitle="JavaScript" percentual="50%"/>
                    <Skill skilltitle="Adobe Photopshop" percentual="75%"/>
                    <Skill skilltitle="Adobe Illustrator" percentual="60%"/>

                </div>
            </div>
        </>
    )
}

export default Skills