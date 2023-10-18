const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.userId = (userId) => {
    
}

exports.getUserId = (userId) => {
    const userID = userId.toString();
    return userID;
}

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User ({
        email: req.body.email,
        pseudo: req.body.pseudo,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};