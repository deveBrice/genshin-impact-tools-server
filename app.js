const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
/*const path = require('path');
const multer = require('multer');
const storage = require('./middleware/multer-config2');*/

require('dotenv').config({path: './.env'});

//const characterRoutes = require('./routes/characters.routes');
//const userRoutes = require('./routes/user.route');

mongoose.connect(
  process.env.MONGODB_URL, //Add your connection string from MongoDB
  { useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(() => console.log('Connection à MongoDB réussie'))
    .catch(() => console.log('Connection à MongoDB échouée'));

const app = express();    

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

//app.use('/assets/imgs/', express.static(path.join(__dirname, 'assets/imgs/')));


//const upload = multer({dest: 'assets/imgs'})
//app.use('/api', characterRoutes);
//app.use('/api/auth', userRoutes);

module.exports = app;