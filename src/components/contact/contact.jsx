import "./contact.css"
import Title from "../title/title"
import ContactItem from "./contact-item/contact-item"
import PhoneIcon from "../../assets/phone-alt.png"
import MailIcon from "../../assets/envelope.png"
import LocationIcon from "../../assets/location-arrow.png"

function Contact() {
    return (
        <>
            <div className="contact">
                <Title firstWord="Contact" />
                <div className="contactcontent">
                    <div className="contacts">
                        <ContactItem contacticon={PhoneIcon} contactalt="Phone Icon" contacttext="+8801863-931220 +8801567-953483 "/>
                        <ContactItem contacticon={MailIcon} contactalt="Email Icon" contacttext="herika.s.felipe@gmail.com "/>
                        <ContactItem contacticon={LocationIcon} contactalt="Location Icon" contacttext="Fortaleza, Ceará, Brazil "/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact