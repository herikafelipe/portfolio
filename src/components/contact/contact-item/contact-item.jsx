import "./contact-item.css"

function ContactItem ({contacticon, contactalt, contacttext}) {
    return (
        <>
        <div className="contact-item">
            <img src={contacticon} alt={contactalt} className="contact-icon" />
            <p className="contact-text">{contacttext}</p>
        </div>
        </>
    )
}

export default ContactItem