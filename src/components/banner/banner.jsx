import "./banner.css"
import BannerText from "./banner-text/banner-text"
import BannerImg from "./banner-img/banner-img"


function Banner() {
    return (
        <div className="banner" id="banner">
            <div className="banner-content">
                <div className="banner-txt">
                    <BannerText />
                </div>
                <div className="banner-img">
                    <BannerImg />
                </div>
            </div>
        </div>
    )
}

export default Banner 