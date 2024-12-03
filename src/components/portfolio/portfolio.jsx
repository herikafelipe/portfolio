import Title from "../title/title"
import PortItem from "./port-item/port-item"
import "./portfolio.css"
import PortImage from "../../assets/port-img.jpg"
import ProductsList from "../../assets/portfolio/lista-de-produtos.png"
import IPHEduca from "../../assets/portfolio/iph-educa.png"
import IPHweb from "../../assets/portfolio/iph-webpage.png"
import ClinicPage from "../../assets/portfolio/clinic-page.png"
import InnovationPage from "../../assets/portfolio/innovation-page.png"
import ContactPage from "../../assets/portfolio/contact-page.png"

function Portfolio() {
    const portfolioItems = [
        { id: 1, portimg: ProductsList, 
            link: "https://herikafelipe.github.io/product-list/", 
            portalt: "Products List Project", title: "Products List" },
        { id: 2, portimg: IPHEduca, link: "https://prohemo.org.br/lps/pos-graduacao/", 
            portalt: "Educational Page project", title: "Educational Page" },
        { id: 3, portimg: IPHEduca, link: "https://prohemo.org.br/lps/pos-graduacao/", 
            portalt: "Educational Page project 2", title: "Educational Page 2" },
        { id: 4, portimg: IPHweb, link: "https://prohemo.org.br/development/novo-site/#/home", 
            portalt: "IPH WebPage Project", title: "IPH WebPage" },
        { id: 5, portimg: ClinicPage, link: "https://prohemo.org.br/?page=clinica", 
            portalt: "Clinic Page Project", title: "Clinic Page" },
        { id: 6, portimg: InnovationPage, link: "https://prohemo.org.br/?page=inovacao", 
            portalt: "Innovation Page Project", title: "Innovation Page" },
        { id: 7, portimg: ContactPage, link: "https://prohemo.org.br/development/novo-site/#/contact", 
            portalt: "Contact Page Project", title: "Contact Page" },
        { id: 8, portimg: PortImage, link: "#", portalt: "Project", title: "Project 8" },
    ];

    return (
        <>
            <div className="portfolio" id="portfolio">
                <Title firstWord="Portfolio" />
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