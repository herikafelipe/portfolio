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
                <SocialIconBtn icon={LinkedIn} link="#"/>
                <SocialIconBtn icon={GitHub} link="#"/>
                <SocialIconBtn icon={Instagram} link="#"/>
                
            </div>
        </>
    )
}

export default SocialIcons