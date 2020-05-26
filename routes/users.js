const express = require('express');
const router = express.Router();
const User = require('./../models/User');
const userControllers = require('../controllers/userControllers');

router.get('/list.html', userControllers.getUsers);

router.get('/add.html', (req, res) => {
    res.render('renderingPages/add');
});

router.post('/add.html', userControllers.addUser);



module.exports = router;