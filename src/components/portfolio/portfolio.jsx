import Title from "../title/title"
import PortItem from "./port-item/port-item"
import "./portfolio.css"
import PortImage from "../../assets/port-img.jpg"

function Portfolio () {
    return (
        <>
                    <div className="portfolio">
                <Title firstWord="Porfolio"/>
                <div className="galeria">
                    <PortItem portimg={PortImage} link="#" portalt="Project" />
                    <PortItem portimg={PortImage} link="#" portalt="Project" />
                    <PortItem portimg={PortImage} link="#" portalt="Project" />
                    <PortItem portimg={PortImage} link="#" portalt="Project" />
                    <PortItem portimg={PortImage} link="#" portalt="Project" />
                    <PortItem portimg={PortImage} link="#" portalt="Project" />
                    <PortItem portimg={PortImage} link="#" portalt="Project" />
                    <PortItem portimg={PortImage} link="#" portalt="Project" />

                </div>
            </div>

        </>
    )
}

export default Portfolio