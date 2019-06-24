const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const chars = require("../game/chars")
require('../game/aventura')
//require("../game/sketch")
const New_Adventure = mongoose.model("new_adventure")


router.get('/', (req, res)=>{
    res.render('main/index')
})
router.get('/create', (req, res)=>{
    New_Adventure.find().then((new_adventure) =>{
        res.render('main/create', {new_adventure: new_adventure})
    }).catch((err)=>{
        req.flash('error_msg', "Erro de conexão com o banco de dados. Tente novamente!")
        res.redirect('/create')
    })
})
router.get('/create/addchar', (req, res)=>{
    res.render('main/addchar')
})
router.post('/create/nova', (req, res)=>{
    var NewAdventure
    console.log(req.body.nome)
    if(req.body.nome == 'palamouse'){
        NewAdventure = chars.palamouse
    }else{
        NewAdventure = chars.retro_robot
    }
    new New_Adventure(NewAdventure).save().then(()=>{
        req.flash("success_msg", "Novo Personagem Criado!")
        res.redirect('/create')
    }).catch((err)=>{
        req.flash("erro_msg", "Erro ao criar personagem. Tente Novamente!")
        res.redirect('/create')
    })
})
router.post('/create/deletar', (req, res)=>{
    New_Adventure.deleteOne({_id: req.body.id}).then(()=>{
        req.flash('success_msg', "Aventura deletada com sucesso")
        res.redirect('/create')
    }).catch((err)=>{
        req.flash('error_msg', "Falha ao deletar aventura")
        res.redirect('/create')
    })
})

router.get('/game/new:id', (req, res)=>{
    New_Adventure.find({}, (err, new_adventure)=>{
        
        res.render('main/game', {new_adventure: new_adventure})

        //console.log(new_adventure)
    }).catch((err)=>{
        req.flash("error_msg", "Aventura não encontrada")
        res.redirect('/create')
    })
})

module.exports = router 