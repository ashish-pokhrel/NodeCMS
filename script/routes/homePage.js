const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.render('homePage')
})

router.get('/css', (req, res) => {
    res.sendFile(__dirname + "/homePage.css");
})

module.exports = router;