const axios = require('axios');

const {KEY, URL} = process.env;

// const successH = (response,res) =>{
//     const {id, image, name, gender , species } = response.data;
//     res.writeHead (200, { 'Content-type': 'aplication/json'});
//     res.end(JSON.stringify({ id, image, name, gender, species}));
// };

// const errorH = (error,res)=>{
//     res.writeHead(500, { 'Content-type': 'text/plain'});
//     res.end(error.message)
// }



const getCharById = (req,res) =>{
    const { id } = req.params;
axios
.get(`${URL}/character/${id}?key = ${KEY}`)
.then((response) => { 
const { id,name, species, image, gender } = response.data;
res.status(200).json({ id, name, species, image, gender });
})
.catch((error) => {
    res.status(500).json({ error: error.message })
})
};



module.exports = getCharById;

