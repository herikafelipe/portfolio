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
                {/* <SocialIconBtn icon={Facebook} link="#"/> */}
                <a className="SocialIconBtn" href=""><img src={Facebook} alt=""/></a>
                <a className="SocialIconBtn" href=""><img src={LinkedIn} alt=""/></a>
                <a className="SocialIconBtn" href=""><img src={GitHub} alt=""/></a>
                <a className="SocialIconBtn" href=""><img src={Instagram} alt=""/></a>
                
            </div>
        </>
    )
}

export default SocialIcons