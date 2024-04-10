const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config');

const auth = require('../middlewares/auth.middleware');
const characterCtrl = require('../controllers/character.controller');
const uploadPictureCtrl = require('../controllers/upload-picture.controller');

router.get('/character/read', auth, characterCtrl.getAllSCharacters);
router.post('/character/create', auth, multer, characterCtrl.createCharacter);
router.post('/uploadPicture', auth, multer, uploadPictureCtrl.uploadPicture);

module.exports = router;