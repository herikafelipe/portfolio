import "./perfil-img.css"
import Perfil from "../../../assets/perfil.jpg"

function PerfilImg () {
    return (
        <>
            <img className="perfilimg" src={Perfil} alt="Perfil Image" />
        </>
    )
}

export default PerfilImg