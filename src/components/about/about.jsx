import "./about.css"
import Title from "../title/title"
import PerfilImg from "./perfil-img/perfil-img"
import PerfilText from "./perfil-text/perfil-text"
import RoundBtn from "../round-button/round-button"


function About() {
    return (
        <>
            <div className="about">
                <Title firstWord="About" secondWord="Me" />
                <div className="aboutme">
                    <div>
                        <PerfilImg />
                    </div>
                    <div>
                        <PerfilText />
                        <RoundBtn content="Read more..." link="#" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About