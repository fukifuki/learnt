const express = require('express');
const router = new express.Router();
const Topic = require('../models/topic');

router.post('/topics', (req, res) => {
    const topic = new Topic(req);

    topic.save(topic).then(() => {
        res.status(201).send(topic);
    }).catch((e) => {
        res.errorCode(400).send(e);
    })
});

router.get('/topics', (req, res) => {
    const topics = mongoose
});
