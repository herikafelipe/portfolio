

function SocialIconBtn ({icon, link, altImg}) {
    return (
        <>
            <a className="SocialIconBtn" href={link} target="_blank" rel="noopener noreferrer"><img src={icon} alt={altImg}/></a>
        </>
    )
}

export default SocialIconBtn