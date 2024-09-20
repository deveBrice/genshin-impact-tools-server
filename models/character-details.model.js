const mongoose = require('mongoose');

const characterDetailsSchema = mongoose.Schema({

    cardCode: {type: String},
    characterId:{type: mongoose.Schema.Types.ObjectId, ref: 'Character'},
    biography: [
        {
            name: {type: String, require: true},
            rarety: {type: String, require: true},
            region: {type: String, require: true},
            weapon: {type: String, require: true},
            description: {type: String, require: true}
        }
    ],
    stats: {
        column: {type: Array, required: true},
        value: [
            {
                level: {type: Number, require: true},
                hp: {type: Number, require: true},
                atk: {type: Number, require: true},
                def: {type: Number, require: true},
                tc: {type: String, require: true},
                dgc: {type: String, require: true},
            }
        ]
    },
    skills: [
       {
        icon: {type: String, require: true},
        type: {type: String, require: true},
        name: {type: String, require: true},
        description: {type: String, require: true},
       }
    ],
    passifs: [
        {
            icon: {type: String, require: true},
            type: {type: String, require: true},
            name: {type: String, require: true},
            description: {type: String, require: true},
        }
    ],
    constellations: [
       {
        icon: {type: String, require: true},
        type: {type: String, require: true},
        name: {type: String, require: true},
        description: {type: String, require: true},
       }
    ],
    materials: [
        {
            level: {type: Number, require: true},
            picture: [
                {
                    path: {type: String, require: true},
                    alt: {type: String, require: true}
                }
            ]
        }
    ],
    weapons: [
        {
            icon: {type: String, require: true},
            name: {type: String, require: true},
            description: {type: String, require: true},
        }
    ],
    artefacts: [
        {
            icon: {type: String, require: true},
            name: {type: String, require: true},
            description: {type: String, require: true},
        }
    ],
    teams: [
        {
            name: {type: String, require: true},
            characters: [
                {
                    path: {type: String, require: true},
                    alt: {type: String, require: true}
                }
            ]
        }
    ]
})

module.exports = mongoose.model('CharactersDetails', characterDetailsSchema);