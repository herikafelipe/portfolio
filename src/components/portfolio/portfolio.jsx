import Title from "../title/title"
import PortItem from "./port-item/port-item"
import "./portfolio.css"
import PortImage from "../../assets/port-img.jpg"

function Portfolio() {
    return (
        <>
            <div className="portfolio">
                <Title firstWord="Porfolio" />
                <div className="galeria">
                    <PortItem portimg={PortImage} link="#" portalt="Project" title="Project 1" />
                    <PortItem portimg={PortImage} link="#" portalt="Project" title="Project 2" />
                    <PortItem portimg={PortImage} link="#" portalt="Project" title="Project 3" />
                    <PortItem portimg={PortImage} link="#" portalt="Project" title="Project 4" />
                    <PortItem portimg={PortImage} link="#" portalt="Project" title="Project 5" />
                    <PortItem portimg={PortImage} link="#" portalt="Project" title="Project 6" />
                    <PortItem portimg={PortImage} link="#" portalt="Project" title="Project 7" />
                    <PortItem portimg={PortImage} link="#" portalt="Project" title="Project 8" />

                </div>
            </div>

        </>
    )
}

export default Portfolio