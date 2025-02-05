import "./about.css"
import { useTranslation } from "react-i18next";
import Title from "../title/title"
import PerfilImg from "./perfil-img/perfil-img"
import PerfilText from "./perfil-text/perfil-text"


function About() {
    const { t } = useTranslation();

    return (
        <>
            <div className="about" id="about">
                <Title firstWord={t("about.title")} secondWord={t("about.titleComp")} />
                <div className="aboutme">
                    <div className="perfil-img">
                        <PerfilImg />
                    </div>
                    <div className="perfil-txt">
                        <PerfilText />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About