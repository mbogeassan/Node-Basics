const express = require('express');
const app = express();
const db = require('./db');
const port = 3000;
const baseURL = '/api/v1';
const router = express.Router();

app.use(express.static('public'));
app.use(express.json());
app.use(baseURL, router); // Get all pois



router.get('/pois', (request, response) => {
    const pois = db.getPoi();
    response.send(pois);
});

router.get('/pois/:id', (request, response) => {
    const id = request.params.id;
    const poi = db.getPoi(id);
    if(poi) {
      response.send(poi);
    } else {
    response.status(404).send();
    }
});


router.post('/pois', (request, response) => {
     let poi = request.body;
     if(poi.name && poi.description && poi.city && poi.coordinates && poi.coordinates.lat && poi.coordinates.lng) {
      poi = db.createPoi(poi);
        response.status(201).send(poi);
     } else {
        response.status(400).send();
     }
});//lisää


router.put('/pois/:id', (request, response) => {
    let poi = request.body
})//päivitä


router.delete('pois/:id', (request, response) => {
    const id = request.params.id;
    if(id && db.getPoi(id)) {
        db.deletePoi(id);
        response.status(204).send();
    } else {
        response.status(404).send();
    }
});//delete

app.listen(port, () => {
    console.log(`server listening on ${port}`);
});
