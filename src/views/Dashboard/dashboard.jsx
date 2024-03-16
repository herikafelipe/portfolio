import { useEffect } from "react"
import "./dashboard.css"

function Dashboard() {

    useEffect(() => {
        console.log()
    })

    return (
        <>
        <div>
            <div>
                <div>
                    <form>
                        <div className="contactform">
                            <input className="form-control form-control-text" type="text" name="language" placeholder="Linguagem"/>
                        </div>
                        <div className="contactform">
                            <input className="form-control form-control-text" type="number" name="percentage" placeholder="Porcentagem"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard