import { useTranslation } from "react-i18next";
import "./translate-btn.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "pt" ? "en" : "pt");
  };

  return (
    <button onClick={toggleLanguage} className="translate-btn">
      {i18n.language === "pt" ? "Switch to English" : "Mudar para Português"}
    </button>
  );
}