import { Link } from "react-router-dom"
import Style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar.jsx"
import { useDispatch } from "react-redux"
import { recargarPokes } from "../../redux/actions"


const NavBar = () =>{
    const dispatch = useDispatch()
    const recargar = (e) =>{
        e.preventDefault()
        dispatch(recargarPokes())
    }
    return(
        <div className={Style.container}>
            <div className={Style.div}>
                <h1>Recargar: </h1>
                <Link to="/" onClick={(e) => recargar(e)}><img src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif" height="80px" width="80px" alt="pokemon logo" /></Link>
            </div>
            <SearchBar key={1} />
            <Link to="/create" className={Style.texto}><h1 >Crea tu pokemon</h1></Link>
        </div>
    )
}
export default NavBar