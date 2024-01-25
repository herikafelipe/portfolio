import "./contact.css"
import Title from "../title/title"
import ContactItem from "./contact-item/contact-item"
import PhoneIcon from "../../assets/phone-alt.png"
import MailIcon from "../../assets/envelope.png"
import LocationIcon from "../../assets/location-arrow.png"
import "../round-button/round-button.css"

function Contact() {
    return (
        <>
            <div className="contact">
                <Title firstWord="Contact" />
                <div className="contactcontent">
                    <div className="contacts">
                        <ContactItem contacticon={PhoneIcon} contactalt="Phone Icon" contacttext="+8801863-931220 +8801567-953483 " />
                        <ContactItem contacticon={MailIcon} contactalt="Email Icon" contacttext="herika.s.felipe@gmail.com " />
                        <ContactItem contacticon={LocationIcon} contactalt="Location Icon" contacttext="Fortaleza, Ceará, Brazil " />
                    </div>
                    <div className="contactform">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Full Name"/>
                                <input type="email" className="form-control" placeholder="Email Address"/>
                                <input type="text" className="form-control form-control-small" placeholder="Phone Number"/>
                                <input type="text" className="form-control form-control-small" placeholder="Subject"/>
                                <textarea className="form-control form-control-text" id="" rows="4" placeholder="Your Message"></textarea>
                                <button type="submit" class="roundbtn">Send</button>
                               
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact