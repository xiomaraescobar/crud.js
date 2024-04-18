const express = require('express');
// crea la ruta
const router = express.Router();

// ruta para '/hola'
router.get('/hola', (req, res) => {
    res.status(200).json({ 'data': 'hello world!' });
});

// ruta para '/condicional'
router.get('/condicional', (req, res) => {
    const a = 10;
    const b = 5;
    let sum = 0;
    let sum2 = 0;

    if (a <= b) {
        sum = a + b;
    } else {
        sum = a - b;
    }
    (a <= b) ? sum2 = a + b : sum2 = a - b;
    console.log(sum);
    res.status(200).json({ 'data': 'valor de la suma!' + sum, 'data2': 'valor de la suma2!' + sum2 });
});

// ruta para el '/for'
router.get('/for', (req, res) => {
    const id = req.query.id;

    const numeros = ['perro', 'gato', 'pepito', 'pez', 'vaca'];
    let seleccionado = '';

    let i = 0;
    for (i; i < numeros.length; i++) {
        if (i == id) {
            seleccionado = numeros[i];
        }
    }
    console.log(seleccionado);
    res.status(200).json({ 'data': 'El for seleccionado es: ' + seleccionado });
});

// ruta para '/while'
router.get('/while', (req, res) => {
    const num = parseInt(req.query.num);
    let seleccionado = '';
    const animales = ['perro', 'gato', 'pez', 'vaca'];

    let i = 0;
    while (i < animales.length) { // iterar cada elemento del array
        if (i == num) {
            seleccionado = animales[i];
        }
        i++; // incrementar el contador
    }

    res.status(200).json({ 'data': 'el while seleccionado es :' + seleccionado });
});

// ruta para '/map'
router.get('/map', (req, res) => {
    const anm = req.query.anm;
    let seleccionado = null;
    const animales = ['perro', 'gato', 'pez', 'vaca'];
    animales.map((response) => {
        if (response == anm) {
            seleccionado = response;
        }
        console.log(response);
    });

    res.status(200).json({ 'data': 'seleccionado es :' + seleccionado });
});

// ruta para '/infojson'
router.get('/infojson', (req, res) => {
    res.status(200).json([{
            nombre: "luis",
            edad: 35,
            email: 'luis@gmail.com'
        },{
            nombre: "fernando",
            edad: 20,
            email: 'fernando@gmail.com'
        }]);
});

module.exports = router;