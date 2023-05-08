import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { getAllPokemons, getTypes } from '../../redux/actions.js';

import CardContainer from "../../components/CardContainer/CardContainer";
import NavBar from '../../components/NavBar/NavBar.jsx';
import FilterBar from '../../components/FilterBar/FilterBar.jsx';
const Home = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllPokemons());
        dispatch(getTypes())
    },[dispatch])
    return(
        <>
        <div>
            <NavBar />
            <FilterBar />
            <CardContainer />
        </div>
        </>
    )
}
export default Home;