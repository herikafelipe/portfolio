import RoundBtn from "../round-button/round-button";
import "./header.css"
import MenuHeader from "./menu-row/menu-row";
import LanguageSwitcher from "./translate-btn/translate-btn";
import { useTranslation } from "react-i18next";


function Header () {
    const { t } = useTranslation();

    return(
        <header className="header">
            <div className="content">
            <MenuHeader/>
            <div className="end">
                <LanguageSwitcher />
                <RoundBtn content={t("menu.hireMe")} link="#contact"/>
            </div>
            </div>
        </header>
    )
}

export default Header