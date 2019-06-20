class Player{
    constructor(char){
        this.nome         = char.nome
        this.cor          = char.cor
        this.life         = char.life
        this.mana         = char.mana
        this.level        = char.level
        this.align        = char.align
        this.last_fight   = char.last_fight
        this.victorys     = char.victorys
        this.loses        = char.loses
        this.score        = char.score

        this.auto_atack   = char.auto_atack

        this.first_skill  = char.first_skill
        this.second_skill = char.second_skill
        this.third_skill  = char.third_skill
        this.heroic_skill = char.heroic_skill

        this.position     = char.position
    }
}
module.exports = Player