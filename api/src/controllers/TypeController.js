const axios = require('axios')
const {Type} = require('../db')


const getTypeController = async () =>{
    let dbTypes = await Type.findAll()
    if(dbTypes.length) return dbTypes;
    else{
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        const data = Promise.all(response.data.results.map(async (t, index) => 
        {let types = await Type.create({
            id: ++index,
            name: t.name,
        });
        return types;
      })
    );
    return data;
    }
}


module.exports = {getTypeController}