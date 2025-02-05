import "./skills.css"
import { useTranslation } from "react-i18next";
import Title from "../title/title"
import Skill from "./skill/skill"

function Skills() {
    const { t } = useTranslation();
    
    return (
        <>
            <div className="myskills" id="skills">
                <Title firstWord={t("skills.title")} secondWord={t("skills.titleComp")}/>
                <div className="skills">
                    <Skill skilltitle="HTML" percentual="75%"/>
                    <Skill skilltitle="CSS/SASS" percentual="75%"/>
                    <Skill skilltitle="Bootstrap" percentual="70%"/>
                    <Skill skilltitle="JavaScript" percentual="40%"/>
                    <Skill skilltitle="Vue JS" percentual="70%"/>
                    <Skill skilltitle="React JS" percentual="60%"/>
                    <Skill skilltitle="GitLab/GitHub" percentual="75%"/>
                    <Skill skilltitle="Figma" percentual="40%"/>
                </div>
            </div>
        </>
    )
}

export default Skills