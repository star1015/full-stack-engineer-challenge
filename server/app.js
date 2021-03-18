
const express =require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

const db = require('./models');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const axios = require('axios');

app.get('/api/getAllCapsules', async (req, res) => {
    axios.get('https://api.spacexdata.com/v3/capsules')
        .then(result =>{
            res.send(result.data)
        })
        .catch(err=>{
            console.log(err);
        });
});

app.get('/api/getLandingPadByID/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await db.spaceData.findOne({ where: { id } })
        if (result != null) {
            res.send(result.spaceItem);
        }
        
        const serverData = await axios.get(`https://api.spacexdata.com/v3/landpads/${id}`);

        if (serverData) {
            var item = {
                id: serverData.data.id,
                full_name: serverData.data.full_name,
                status: serverData.data.status,
                location: serverData.data.location
            }
        }
        
        db.spaceData.create({id: id, spaceItem: item}).then(() => {
            res.send(item);
        });
    } catch (error) {
        res.status(406).send({message: error.message});
    }
        
});

app.listen('4000');
console.log(`Listening on port: 4000, wait for the development server to be up...`);