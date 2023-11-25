import DownloadBtn from "../download-btn/download-btn"
import SocialIcons from "../social-icons/social-icons"
import "./banner-text.css"

function BannerText () {
    return (
        <>
        <div className="texts">
            <p className="text1">Hi, it's me</p>
            <p className="text2">Hérika Felipe</p>
            <p className="text3">And I'm a <span>Frontend Developer</span></p>
            <p className="text"><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eos dolorum ullam molestias autem deleniti iure earum!</p>
            <SocialIcons/>
            <DownloadBtn/>
        </div>
        </>
    )
}

export default BannerText