import "./round-button.css"

function RoundBtn({ link, content }) {
    return (
        <>
            <a href={link}>
                <button className="roundbtn">{content}</button>
            </a>
        </>
    )
}

export default RoundBtn