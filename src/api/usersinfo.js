const express = require('express');
const fs = require('fs');
// crea la ruta
let router = express.Router();
let users = [];


function readData() {
    const jsonData = fs.readFileSync('./src/data.json', 'utf-8');
    users = JSON.parse(jsonData);
}

readData();


//muestra todos los usuarios
router.get('/users', (req, res) => {
    res.status(200).json(users);
});  
//muestra usuario por id
router.get('/users/:id',(req, res) =>  {
    //los parametros de la url son por id
    const id = parseInt(req.params.id);
    const user = users.find((item) => item.id === id);
    //validar el usuario 
    if (user === undefined) {
        res.status(404).json({ 'error': 'no se encontro el usuario' });
    }
    res.status(200).json({user});
});
//agregar por medio de body un dato tipo json
router.post('/users', (req, res) => {
    //se van tomar los datos por el body a traves de un json
    const userInfo = req.body;
    users.push(userInfo);
    console.log(users);
    res.status(200).json(users);
});
//actualiza por id
router.put('/users/:id', (req, res) => {
    //los parametros de la url son por id
    const id = parseInt(req.params.id);
    //validacion del id
    const user = users.find((item) => item.id === id);
    //el dato se recibe por el body
    const userInfo = req.body;
    //verificacion de la existencia del usuario
    if (!user) {
        return res.status(404).json({ 'error': 'no se encontro el usuario en la lista'});
    }
    //toma el objeto completo y le asigna el elemento con base al elemento en el body
    Object.assign(user, userInfo);
    res.status(202).json(user);
});
//eliminar usuario por id
router.delete('/users/:id', (req, res) => {
    //los parametros de la url son por id
    const id = parseInt(req.params.id);
    const index = users.findIndex((item) => item.id === id);
    //valida el id a eliminar
    if (index === -1){
        return res.status(404).json({ 'error':'no se encontro el usuario'});
    }
    users.splice(index, 1);
    //muestra el mensaje de eliminado y lista los que quedan
    res.status(201).json({ "mensaje": "objeto eliminado", "data": users})
});


module.exports = router;