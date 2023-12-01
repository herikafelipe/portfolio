import DownloadBtn from "../download-btn/download-btn"
import SocialIcons from "../social-icons/social-icons"
import "./banner-text.css"

function BannerText () {
    return (
        <>
        <div className="texts">
            <p className="bannertext1">Hi, it's me</p>
            <p className="bannertext2">Hérika Felipe</p>
            <p className="bannertext3">And I'm a <span className="banner-span">Frontend Developer</span></p>
            <p className="bannertext"><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eos dolorum ullam molestias autem deleniti iure earum!</p>
            <SocialIcons/>
            <DownloadBtn/>
        </div>
        </>
    )
}

export default BannerText