const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config');

const auth = require('../middlewares/auth.middleware');
const characterCtrl = require('../controllers/character.controller');
const uploadPictureCtrl = require('../controllers/upload-picture.controller');

router.get('/character/read', auth, characterCtrl.getAllSCharacters);
router.post('/character/create', auth, multer, characterCtrl.createCharacter);
router.post('/uploadPicture', auth, multer, uploadPictureCtrl.uploadPicture);
router.get('/character/readone/:id', auth, characterCtrl.getOneCharacter);
router.put('/character/update/:id', auth, multer, characterCtrl.updateCharacter);
router.delete('/character/delete/:id', auth, characterCtrl.deleteCharacter);
module.exports = router;