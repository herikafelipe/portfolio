import DownloadBtn from "../download-btn/download-btn"
import SocialIcons from "../social-icons/social-icons"
import "./banner-text.css"
import { useTranslation } from "react-i18next";

function BannerText () {
    const { t } = useTranslation();

    return (
        <>
        <div className="texts">
            <p className="bannertext1">{t("banner.greeting")}</p>
            <p className="bannertext2">Hérika Felipe</p>
            <p className="bannertext3">{t("banner.greetingComp")}<span className="banner-span">Frontend Developer</span></p>
            <p className="bannertext"><br/>{t("banner.opening")}</p>
            <SocialIcons/>
            <DownloadBtn/>
        </div>
        </>
    )
}

export default BannerText