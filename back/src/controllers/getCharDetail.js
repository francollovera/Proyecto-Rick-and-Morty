const axios = require('axios');
 
// const URL = 'https://be-a-rym.up.railway.app/api';
// const KEY = "1656cbb62021.21d9650ef218aa4f74f0"
const { KEY, URL} = process.env;


// const successH = (response,res) =>{
//     const {name, gender, status, origin , species, image } = response.data;
//     res.writeHead (200, { 'Content-type': 'aplication/json'});
//     res.end(JSON.stringify({ name, gender, status, origin , species, image}));
// };

// const errorH = (error,res)=>{
//     res.writeHead(500, { 'Content-type': 'text/plain'});
//     res.end(error.message)
// }

const getCharDetail = (req,res) =>{
    const { id } = req.params;

    axios
    .get(`${URL}/character/${id}?key =${KEY}`)
.then((response) => { 
const { id,name, species, image, gender } = response.data;
res.status(200).json({ id, name, species, image, gender });
})
.catch((error) => {
    res.status(500).json ({ error: error.message })
});
};
   


module.exports = getCharDetail;


