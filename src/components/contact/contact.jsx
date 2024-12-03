import "./contact.css";
import Title from "../title/title";
import ContactItem from "./contact-item/contact-item";
import PhoneIcon from "../../assets/phone-alt.png";
import MailIcon from "../../assets/envelope.png";
import LocationIcon from "../../assets/location-arrow.png";
import "../round-button/round-button.css";
import { useRef, useState } from 'react';
import emailjs from "emailjs-com";

export const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_t353klv', 'template_0hiw3eq', form.current, 'C6n0SoqbzzT-2CdqL')
            .then(
                () => {
                    console.log('SUCCESS!');
                    setMessage("Email enviado com sucesso!");
                },
                (error) => {
                    console.log('ERROR, TRY SENDING A WHATSAPP MESSAGE', error.text);
                    setMessage("Erro ao enviar o email. Tente mensagem por Whatsapp");
                },
            );
    };

    return (
        <div className="contact" id="contact">
            <Title firstWord="Contact" />
            <div className="contactcontent">
                <div className="contacts">
                    <ContactItem contacticon={PhoneIcon} contactalt="Phone Icon" contacttext="+55 85 98137-8804" />
                    <ContactItem contacticon={MailIcon} contactalt="Email Icon" contacttext="herika.s.felipe@gmail.com" />
                    <ContactItem contacticon={LocationIcon} contactalt="Location Icon" contacttext="Fortaleza, Ceará, Brazil" />
                </div>
                <div className="contactform">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" name="name" required />
                            <input type="email" className="form-control" placeholder="Email Address" name="email" required />
                            <input type="text" className="form-control form-control-small" placeholder="Phone Number" name="phone" />
                            <input type="text" className="form-control form-control-small" placeholder="Subject" name="subject" />
                            <textarea className="form-control form-control-text" id="" rows="4" placeholder="Your Message" name="message" required></textarea>
                            <button type="submit" value="Send" className="roundbtn">Send</button>
                        </div>
                    </form>

                    {message && (
                        <div className="message">
                            <p>{message}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;
