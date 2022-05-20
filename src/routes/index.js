const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    res.render('pages/index') //o caminho de views, setei default no app, entao o express sabe. E apartir daqui ele vai saber que esta dentro de pages/ndex
});

module.exports = router;
