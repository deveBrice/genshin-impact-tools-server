const Character = require('../models/character.model');
const CharactersDetails = require('../models/character-details.model')
const Customer = require('../models/customer.model');
const Identifier = require('../models/identifier.model')

exports.createCharacter = function(characterList, picture) {
    const characters = new Character({
        ...characterList,
        ...picture
    })
    return characters.save();
}

exports.createDetails = function(cardCode, characterId) {
    const charactersDetails = new CharactersDetails({
        cardCode,
        characterId
    })
    return charactersDetails.save();
}

/*exports.createCustomer = function(characterList, picture) {
    const customer = new Customer({
        ...characterList,
        ...picture
    });
  
    return customer.save();
  };

exports.createIdentifier = function(cardCode, characterId) {
    const identifier = new Identifier({
      cardCode,
      characterId
    });
  
    return identifier.save();
  };*/