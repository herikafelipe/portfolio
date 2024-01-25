import "./banner.css"
import BannerText from "./banner-text/banner-text"
import BannerImg from "./banner-img/banner-img"


function Banner() {
    return (
        <div className="banner">
            <div className="banner-content">
                <BannerText />
                <BannerImg />
            </div>
        </div>
    )
}

export default Banner 