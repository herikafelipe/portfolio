import "./perfil-text.css"
import { useTranslation } from "react-i18next";


function PerfilText() {
    const { t } = useTranslation();

    return (
        <>
            <p className="perfiltext">{t("about.text1")}</p>
            <p className="perfiltext">{t("about.text2")}</p>
            <p className="perfiltext">{t("about.text3")}</p>
            <p className="perfiltext">{t("about.text4")}</p>

        </>
    )
}

export default PerfilText