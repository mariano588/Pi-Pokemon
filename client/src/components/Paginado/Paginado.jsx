import Style from "./Paginado.module.css"
const Paginado = ({totalPages, paginado, currentPage}) =>{
    const numeros = [];
    for(let i = 1; i<= totalPages; i++){
    numeros.push(i)
    }

    return(
        <nav>
            <ul className={Style.lista}>
                {numeros&&numeros.map(number => {
                    return <li className={Style.numeros}>
                        <button key={number} className={currentPage=== number? Style.actual : Style.btn} onClick={() => paginado(number)}>{number}</button>
                    </li>
                })}
            </ul>
        </nav>
    )
}
export default Paginado;