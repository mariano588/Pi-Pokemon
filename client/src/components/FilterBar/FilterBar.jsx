import { useDispatch, useSelector } from "react-redux";
import { alphaOrder, attackOrder, filterByType, filterCreated } from "../../redux/actions";
import Style from "./FilterBar.module.css"

const FilterBar = () => {
    const dispatch = useDispatch()
    const types = useSelector((state) => state.pokemonsType.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }))
    const onChangeOrder = (e) =>{
        dispatch(alphaOrder(e.target.value))
    }
    const onChangeAttack = (e) =>{
        dispatch(attackOrder(e.target.value))
    }
    const changeFilterCreated = (e) =>{
        dispatch(filterCreated(e.target.value))
    }
    const changeFilterType = (e) =>{
        dispatch(filterByType(e.target.value))
    }
    return(
        <div className={Style.container}>
            <div>
                <select className={Style.select} onChange={onChangeOrder}>
                    <option value="a-z" >A-Z</option>
                    <option value="ASCENDENTE">Ascendente</option>
                    <option value="DESCENDENTE">Descendente</option>
                </select>
            </div>
            <div>
                <select className={Style.select} onChange={onChangeAttack}>
                    <option value="attack">Attack</option>
                    <option value="MAYOR FUERZA">Mas fuerte</option>
                    <option value="MENOR FUERZA">Menos fuerte</option>
                </select>
            </div>
            <div>
                <label className={Style.label} >Origen: </label>
                <select className={Style.select} onChange={changeFilterCreated}>
                    <option value="todos">Todos</option>
                    <option value="creados">Creados</option>
                    <option value="api">Api</option>
                </select>
            </div>
            <div>
                <label className={Style.label} >Tipo: </label>
                <select className={Style.select} onChange={changeFilterType} >
                    <option value="todos">Todos</option>
                    {types && types.map((type) => {
                        return(
                            <option value={type.name}>{type.name}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default FilterBar;