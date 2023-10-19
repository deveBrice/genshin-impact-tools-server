const Character = require('../models/character.model');

exports.getAllSCharacters = (req, res, next) => {
    Character.find().then(
      (character) => {
        res.status(200).json(character);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };