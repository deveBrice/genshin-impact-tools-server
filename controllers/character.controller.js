const Character = require('../models/character.model');
const { createCharacter, createDetails, createCustomer, createIdentifier } = require('./one-to-one.controller')
const Customer = require("../models/customer.model");
const Identifier = require("../models/identifier.model");
const path = require('path');

  exports.createCharacter = (req, res, next) => {
    const characterObject = JSON.parse(req.body.character);
     const pictureList = {}
     req.files.filter(res => {
        switch (res.fieldname) {
          case 'characters':
            const characterPicture = {
              url: `${req.protocol}://${req.get('host')}/assets/imgs/characters/${res.filename}`,
              alt: characterObject.characterPicture.alt
            }
            pictureList['characterPicture'] = characterPicture;
            break;
            case 'weapons':
            const weaponPicture = {
                url: `${req.protocol}://${req.get('host')}/assets/imgs/weapons/${res.filename}`,
                alt: characterObject.weaponPicture.alt
            }
            pictureList['weaponPicture'] = weaponPicture;
            case 'elements':
            const elementPicture = {
                url: `${req.protocol}://${req.get('host')}/assets/imgs/elements/${res.filename}`,
                alt: characterObject.elementPicture.alt
              }
              pictureList['elementPicture'] = elementPicture;
          default:
            break;
        }
     })

     createCharacter(characterObject, pictureList)
     .then(character => {
      console.log("> Created new Customer\n", character);
      
      const characterId = character._id.toString();
      return createDetails(characterId.substring(0, 10).toUpperCase(), characterId);
    })
    .then(details => {
      console.log("> Created new Identifier\n", details);
    })
    .catch(err => console.log(err)); 
  } 

 /*const unitList = {
    "num": 19,
    "name":"Eula",
    "element":"cryo",
    "characterPicture":{"url":"http://localhost:3000/assets/imgs/characters/eula.png",
    "alt":"Image Eula"},
    "weapon":"Arme à deux mains",
    "rarety":"★★★★★",
    "location":"Mondstadt",
    "color":"#8BD3CF",
    "weaponPicture":{"url":"http://localhost:3000/assets/imgs/weapons/claymore-logo.png",
    "alt":"Logo arme à deux mains"},
    "elementPicture":{"url":"http://localhost:3000/assets/imgs/elements/cryo-logo.png",
    "alt":"Logo élément cryo"}}

    const pictureList = {
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
     }

    createCustomer(unitList, pictureList)
    .then(customer => {
     console.log("> Created new Customer\n", customer);
     
     const customerId = customer._id.toString();
     return createIdentifier(customerId.substring(0, 10).toUpperCase(), customerId);
   })
   .then(identifier => {
     console.log("> Created new Identifier\n", identifier);
   })
   .catch(err => console.log(err)); */





 

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

  exports.getOneCharacter = (req, res, next) => {
    Character.findOne({
      _id: req.params.id
    }).then(
      (character) => {
        res.status(200).json(character);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };
  
  exports.updateCharacter = (req, res, next) => {
    const characterObject = JSON.parse(req.body.character);

    const character = new Character({
      _id: req.params.id,
      ...characterObject,
    });
    Character.updateOne({ _id: req.params.id }, character).then(
      () => {
        res.status(201).json({
          message: 'Character updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.deleteCharacter = (req, res, next) => {
    Character.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: "Character deleted successfully!"
        })
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        })
      }
    )
  }