class Fight{
    constructor(hero, enemy){
        this.hero  = hero
        this.enemy = enemy
    }
    presentation(){
        
        let presentation = this.hero.nome + " VERSUS " + this.enemy.nome
        
        return presentation
    }
}
module.exports = Fight