import { useTranslation } from "react-i18next";
import "./menu-row.css"
import MenuItem from "./menu-item"

const MenuHeader = () => {
    const { t } = useTranslation();
  
    return (
      <div className="menuHeader">
        <MenuItem label={t("menu.home")} link="banner" />
        <MenuItem label={t("menu.about")} link="about" />
        <MenuItem label={t("menu.skills")} link="skills" />
        <MenuItem label={t("menu.portfolio")} link="portfolio" />
        <MenuItem label={t("menu.contact")} link="contact" />
      </div>
    );
  };
  
  export default MenuHeader
