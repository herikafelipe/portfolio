import "./title.css"

function Title ({firstWord,secondWord}) {
    return (
        <>
            <div className="title">
             <p>{firstWord} <span className="title-span"> {secondWord}</span></p>
             <div className="line"></div>
            </div>
        </>
    )
}

export default Title