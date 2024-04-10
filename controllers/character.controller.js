const Character = require('../models/character.model');

  exports.createCharacter = (req, res, next) => {
    const characterObject = JSON.parse(req.body.character);
  
    const character = new Character({
      ...characterObject,
      characterPicture: {
        url: `${req.protocol}://${req.get('host')}/assets/imgs/characters/${characterObject.characterPicture.url}`,
        alt: characterObject.characterPicture.alt
      },
      weaponPicture: {
        url: `${req.protocol}://${req.get('host')}/assets/imgs/weapons/${characterObject.weaponPicture.url}`,
        alt: characterObject.weaponPicture.alt
      },
      elementPicture: {
        url: `${req.protocol}://${req.get('host')}/assets/imgs/elements/${characterObject.elementPicture.url}`,
        alt: characterObject.elementPicture.alt
      }
    })
    
    character.save().then(
      () => {
        res.status(201).json({
          message: 'Character saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }

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