import "./about.css"
import Title from "../title/title"
import PerfilImg from "./perfil-img/perfil-img"
import PerfilText from "./perfil-text/perfil-text"


function About() {
    return (
        <>
            <div className="about" id="about">
                <Title firstWord="About" secondWord="Me" />
                <div className="aboutme">
                    <div>
                        <PerfilImg />
                    </div>
                    <div>
                        <PerfilText />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About