import "./contact.css";
import { useTranslation } from "react-i18next";
import Title from "../title/title";
import ContactItem from "./contact-item/contact-item";
import PhoneIcon from "../../assets/phone-alt.png";
import MailIcon from "../../assets/envelope.png";
import LocationIcon from "../../assets/location-arrow.png";
import "../round-button/round-button.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState("");
    const { t } = useTranslation();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_t353klv', 'template_0hiw3eq', form.current, 'C6n0SoqbzzT-2CdqL')
            .then(
                () => {
                    console.log("SUCCESS!");
                    setMessage(t("contact.successMessage"));
                },
                (error) => {
                    console.log("ERROR, TRY SENDING A WHATSAPP MESSAGE", error.text);
                    setMessage(t("contact.errorMessage"));
                }
            );
    };

    return (
        <div className="contact" id="contact">
            <Title firstWord={t("contact.title")} />
            <div className="contactcontent">
                <div className="contacts">
                    <ContactItem contacticon={PhoneIcon} contactalt="Phone Icon" contacttext="+55 85 98137-8804" />
                    <ContactItem contacticon={MailIcon} contactalt="Email Icon" contacttext="herika.s.felipe@gmail.com" />
                    <ContactItem contacticon={LocationIcon} contactalt="Location Icon" contacttext="Fortaleza, Ceará, Brazil" />
                </div>
                <div className="contactform">
                    <form ref={form} onSubmit={sendEmail} className="form-group">
                            <input type="text" className="form-control" placeholder={t("contact.form.name")} name="name" required />
                            <input type="email" className="form-control" placeholder={t("contact.form.email")} name="email" required />
                            <div className="form-group-small">
                                <input type="text" className="form-control form-control-small" placeholder={t("contact.form.phone")} name="phone" />
                                <input type="text" className="form-control form-control-small" placeholder={t("contact.form.subject")} name="subject" />
                            </div>
                            <textarea className="form-control form-control-text" rows="4" placeholder={t("contact.form.message")} name="message" required></textarea>
                        <div className="btn">
                            <button type="submit" className="roundbtn">{t("contact.form.send")}</button>
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
};

export default Contact;
