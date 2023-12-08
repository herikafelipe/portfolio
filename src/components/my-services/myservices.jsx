import Title from "../title/title"
import "./myservices.css"
import ServiceCard from "./services-card/services-card"
import Laptop from "../../assets/codigo.png"
import Mobilealt from "../../assets/mobile-alt.png"
import Chartbar from "../../assets/chart-bar.png"



function MyServices() {
    return (
        <>
            <div className="myservices">
                <Title firstWord="My" secondWord="Services" />
                <div className="cards">
                    <ServiceCard icon={Laptop} alt="Laptop" servicetitle="Web Development"
                        servicedescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
                    />
                    <ServiceCard icon={Mobilealt} alt="Laptop" servicetitle="Apps Development"
                        servicedescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
                    />
                    <ServiceCard icon={Chartbar} alt="Laptop" servicetitle="Digital Marketing"
                        servicedescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
                    />
                </div>
            </div>
        </>
    )
}

export default MyServices