

function SocialIconBtn ({icon, link, altImg}) {
    return (
        <>
            <a className="SocialIconBtn" href={link}><img src={icon} alt={altImg}/></a>
        </>
    )
}

export default SocialIconBtn