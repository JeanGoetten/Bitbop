const chars  = require('./chars')
const Fight = require('./fight')

function get_data(input_id){
    let data = document.getElementById(input_id).id
    
    let hero = ''
    if(data === 'palamouse'){
        hero  = new Player(chars.palamouse)
        alert("ok")
    }
    else{
        hero  = new Player(chars.retro_robot)
        alert("ok")
    }
}

var enemy = new Player(chars.madbot)

var new_fight = new Fight(hero, enemy)