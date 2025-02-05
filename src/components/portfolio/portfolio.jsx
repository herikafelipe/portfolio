import Title from "../title/title"
import PortItem from "./port-item/port-item"
import "./portfolio.css"
import ProductsList from "../../assets/portfolio/lista-de-produtos.png"
import IPHEduca from "../../assets/portfolio/iph-educa.png"
import CoursesStore from "../../assets/portfolio/courses-store.png"
import IPHweb from "../../assets/portfolio/iph-webpage.png"
import IPHHistory from "../../assets/portfolio/iph-history.png"
import ActionsPage from "../../assets/portfolio/actions-page.png"
import ClinicPage from "../../assets/portfolio/clinic-page.png"
import ContactPage from "../../assets/portfolio/contact-page.png"
import { useTranslation } from "react-i18next";

function Portfolio() {
    const { t } = useTranslation();

    const portfolioItems = [
        { 
            portimg: ProductsList, 
            link: "https://herikafelipe.github.io/product-list/", 
            portalt: "Products List Project", 
            title: t("portfolio.projects.products_list") 
        },
        { 
            portimg: IPHEduca, 
            link: "https://prohemo.org.br/educa/loja/#/", 
            portalt: "Educational Page", 
            title: t("portfolio.projects.educational_page") 
        },
        { 
            portimg: CoursesStore, 
            link: "https://prohemo.org.br/educa/loja/#/courses", 
            portalt: "Courses Store Page", 
            title: t("portfolio.projects.courses_store_page") 
        },
        { 
            portimg: IPHweb, 
            link: "https://prohemo.org.br/development/novo-site/#/home", 
            portalt: "IPH WebPage", 
            title: t("portfolio.projects.iph_webpage") 
        },
        {
            portimg: IPHHistory,
            link: "https://prohemo.org.br/development/novo-site/#/history",
            portalt: "IPH History Page",
            title: t("portfolio.projects.iph_history")
        },
        { 
            portimg: ActionsPage, 
            link: "https://prohemo.org.br/development/novo-site/#/actions", 
            portalt: "IPH Actions Page", 
            title: t("portfolio.projects.actions_page") 
        },
        { portimg: ClinicPage, 
            link: "https://prohemo.org.br/development/novo-site/#/about-clinic", 
            portalt: "IPH Clinic Page", 
            title: t("portfolio.projects.clinic_page") 
        },
        { portimg: ContactPage, 
            link: "https://prohemo.org.br/development/novo-site/#/contact", 
            portalt: "Contact Page", 
            title: t("portfolio.projects.contact_page") 
        },
    ];

    return (
        <>
            <div className="portfolio" id="portfolio">
                <Title firstWord={t("portfolio.title")} />
                <div className="galeria">
                    {portfolioItems.map(item => (
                        <PortItem
                            key={item.id}
                            portimg={item.portimg}
                            link={item.link}
                            portalt={item.portalt}
                            title={item.title}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Portfolio