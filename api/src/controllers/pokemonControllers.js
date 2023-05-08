const axios = require('axios')
const {Pokemon, Type} = require('../db')


const getAllPokemons = async () => {
    const dbPokemons = await Pokemon.findAll({
        include:{
            model: Type,
            through: {
                attributes: []
            },
            attributes: ['name'],
        }
    });
    const apiPokemons = await getPokemonsApi()
    return [...dbPokemons, ...apiPokemons]
}

const getPokemonsApi = async () => {
    const apiResponse = await (axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'));
    const response = Promise.all(apiResponse.data.results.map((poke) => {
        return  (axios.get(poke.url)).then((res) => {
            return {
                id: res.data.id,
            name: res.data.name,
            image: res.data.sprites.other.dream_world.front_default,
            hp: res.data.stats[0].base_stat,
            attack: res.data.stats[1].base_stat,
            defense: res.data.stats[2].base_stat,
            speed: res.data.stats[5].base_stat,
            height: res.data.height,
            weight: res.data.weight,
            created: false,
            Types: res.data.types.map((t) => {
                return{name: t.type.name};
            }),
            }
        })
    }))
    return response
}
const getByName = async (name) => {
    const pokeApi = await getPokemonsApi()
    const dbPoke = await Pokemon.findAll({where: {
        name: name.toLowerCase()
    }, include:{
        model: Type,
        through: {
            attributes: []
        },
        attributes: ['name'],
    }});
    const filtrado = pokeApi.filter(e => e.name === name.toLowerCase())
    return [...dbPoke, ...filtrado]
}
const getPokeById = async (id, source) => {
    const apipoke = await getPokemonsApi()
    const pokemon = source === "bdd" ? await Pokemon.findAll({
        where:{
            id: id,
        },
        include: {
            model: Type,
            through: {
                attributes: []
            },
            attributes: ['name'],
        }
    }) : apipoke.filter(e => e.id === Number(id))
    return pokemon
}
const createpokemon = async (type1, type2, name, image, hp, attack, defense, speed, height, weight) => {
    let newPokemon = await Pokemon.create({name, image, hp, attack, defense, speed, height, weight})
    await newPokemon.addType(type1, {
        through: "type_pokemon",
      });
    await newPokemon.addType(type2, {
        through: "type_pokemon",
      });
    return "Pokemon creado correctamente"
}

module.exports = {getAllPokemons, getByName, getPokeById, createpokemon}