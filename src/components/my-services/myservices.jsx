import Title from "../title/title"
import "./myservices.css"
import ServiceCard from "./services-card/services-card"
import Laptop from "../../assets/laptop-code.svg"

function MyServices () {
    return (
        <>
            <div className="myservices">
                <Title firstWord="My" secondWord="Services"/>
                <div className="cards">
                    <ServiceCard icon={Laptop}/>

                </div>
            </div>
        </>
    )
}

export default MyServices