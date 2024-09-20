const multer = require('multer');
const path = require('path');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        switch (file.fieldname) {
            case 'characters':
                console.log(file.fieldname)
                callback(null, `./assets/imgs/${file.fieldname}`)
                break;
            case 'weapons':
                callback(null, `./assets/imgs/${file.fieldname}`)
                break;
            case 'elements':
                callback(null, `./assets/imgs/${file.fieldname}`)
                break;
            default:
                break;
        }
       
            //callback(null, `./assets/imgs/${req.body.destination}`)
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, path.parse(name).name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage }).any()