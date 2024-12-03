import "./social-icons.css"
import SocialIconBtn from "./social-icon-btn"
import Facebook from "../../../assets/facebook.png"
import LinkedIn from "../../../assets/linkedin.png"
import GitHub from "../../../assets/github.png"
import Instagram from "../../../assets/instagram.png"


function SocialIcons () {
    return (
        <>
            <div className="SocialIcons">
                <SocialIconBtn icon={Facebook} link="#"/>
                <SocialIconBtn icon={LinkedIn} link="https://www.linkedin.com/in/herikafelipe/"/>
                <SocialIconBtn icon={GitHub} link="https://github.com/herikafelipe"/>
                <SocialIconBtn icon={Instagram} link="https://www.instagram.com/herika_felipe/"/>
                
            </div>
        </>
    )
}

export default SocialIcons