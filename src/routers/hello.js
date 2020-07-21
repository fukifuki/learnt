const express = require('express');
const router = new express.Router();
const Greeting = require('../models/greeting')

router.get('/hello', (req, res) => {
    const greeting = new Greeting({
        name: 'Iskra'
    });

    console.log('greeting model: ', greeting);
    res.status(201).send(`Hello ${greeting.name}`);
});

module.exports = router;