const mongoose = require("mongoose")
const Schema = mongoose.Schema

const enemy = new Schema({
    //char set
    nome: {type: String, require: true, default: "No one None"},
    cor: {type: String, require: true, default: "None"},
    life: {type: Number, require: true, default: 0},
    mana: {type: Number, require: true, default: 0},
    level: {type:Number , require: true, default: 0},
    align: {type: String, require: true, default: "None"},
    last_fight: {type: String, require: true, default: "NoneNone"},
    victorys: {type: Number, require: true, default: 0},
    loses: {type: Number, require: true, default: 0},
    score: {type: Number, require: true, default: 0},

    //skills
    auto_atack:     {power: {type: Number, require: true, default: 0}, speed: {type: Number, require: true, default: 0}, name: {type: String, require: true, default: "None"}, target: {type: String, require: true, default: "None"}, type: {type: String, require: true, default: "None"}},
    
    first_skill:    {power: {type: Number, require: true, default: 0}, mana: {type: Number, require: true, default: 0}, cd: {type: Number, require: true, default: 0}, name: {type: String, require: true, default: "None"}, target: {type: String, require: true, default: "None"}, type: {type: String, require: true, default: "None"}, casting: {type: Number, require: true, default: 0}},
    second_skill:   {power: {type: Number, require: true, default: 0}, mana: {type: Number, require: true, default: 0}, cd: {type: Number, require: true, default: 0}, name: {type: String, require: true, default: "None"}, target: {type: String, require: true, default: "None"}, type: {type: String, require: true, default: "None"}, casting: {type: Number, require: true, default: 0}},
    third_skill:    {power: {type: Number, require: true, default: 0}, mana: {type: Number, require: true, default: 0}, cd: {type: Number, require: true, default: 0}, name: {type: String, require: true, default: "None"}, target: {type: String, require: true, default: "None"}, type: {type: String, require: true, default: "None"}, casting: {type: Number, require: true, default: 0}},
    heroic_skill:   {power: {type: Number, require: true, default: 0}, mana: {type: Number, require: true, default: 0}, cd: {type: Number, require: true, default: 0}, name: {type: String, require: true, default: "None"}, target: {type: String, require: true, default: "None"}, type: {type: String, require: true, default: "None"}, casting: {type: Number, require: true, default: 0}},

    //map
    position: {x: {type: Number, require: true, default: 0}, y: {type: Number, require: true, default: 0}},
    nome: {type: String, require: true, default: "Nowherland"}

})

mongoose.model("enemy", enemy)