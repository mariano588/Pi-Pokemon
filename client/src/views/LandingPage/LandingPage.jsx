import { Link } from "react-router-dom";
import Style from "./LandingPage.module.css"

const LandingPage = ()=>{
    return(
        <div className={Style.container}>
            <h1 className={Style.h1}>Bienvenido al mundo de Pokemons</h1>
            <h3 className={Style.h3}> Ingresa para descubrirlos</h3>
            <Link to="/home">
                <button className={Style.btn}>Ingresar</button>
            </Link>
        </div>
    )
}
export default LandingPage;