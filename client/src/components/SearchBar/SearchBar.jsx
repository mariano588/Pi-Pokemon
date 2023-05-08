import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";
import Style from "./SearchBar.module.css"

const SearchBar = () =>{
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    
    const handleChange = (e) =>{
        setName(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!name) return;
        dispatch(searchByName(name))
        setName("")
    }
    return(
        <div className={Style.container}>
            <input type="text" onChange={(e) => handleChange(e)} value={name} placeholder="Buscar pokemon..." />
            <button className={Style.btn} type="submit" onClick={(e)=> handleSubmit(e)} >Buscar</button>
        </div>
    )
}


export default SearchBar;