import "./about.css"
import Title from "../title/title"
import PerfilImg from "./perfil-img/perfil-img"
import PerfilText from "./perfil-text/perfil-text"
import ReadMoreBtn from "./read-more-btn/read-more-btn"


function About() {
    return (
        <>
            <div className="about">
                <Title firstWord="About" secondWord="Me" />
                <div className="aboutme">
                    <div>
                        <PerfilImg/>
                    </div>
                    <div>
                        <PerfilText/>
                        <ReadMoreBtn/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About