const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.middleware');
const characterCtrl = require('../controllers/character.controller');

router.get('/character/read', auth, characterCtrl.getAllSCharacters);

module.exports = router;