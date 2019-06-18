var date = new Date()
//GOOD GUYS
module.exports.retro_robot = {

    hour: date.getHours(),
    minute: date.getMinutes(),
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),

    avatar: '../img/retrorobot.jpg',
    nome: 'Retro Robot',
    cor: 'Red',
    life: 10,
    mana: 100,
    level: 0,
    align: 'caotic-good',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 1, speed: 1, name: 'tap', target: 'enemy', type: 'single-damage'},
    
    first_skill:    {power: 10, mana: 2, cd: 1, name: 'Strike Punch', target: 'enemy', type: 'single-damage', casting: 0},
    second_skill:   {power: 5, mana: 3, cd: 5, name: 'Steel Shell', target: 'self', type: 'shield', casting: 0},
    third_skill:    {power: 2, mana: 3, cd: 4, name: 'Hook Punch', target: 'enemy', type: 'stun', casting: 0},
    heroic_skill:   {power: 250, mana: 2, cd: 1, name: 'Circuit', target: 'enemy', type: 'area-damage', casting: 0},

    position: {x: 0, y: 0}
}
module.exports.palamouse = {

    hour: date.getHours(),
    minute: date.getMinutes(),
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    
    avatar: '../img/palamouse.png',
    nome: 'Palamouse',
    cor: 'Blue',
    life: 50,
    mana: 500,
    level: 0,
    align: 'lawful-good',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 5, speed: 0.5, name: 'hammered', target: 'enemy', type: 'single-damage'},

    first_skill:    {power: 5, mana: 50, cd: 1, name: 'Hand of Light', target: 'self', type: 'single-heal', casting: '1'},
    second_skill:   {power: 25, mana: 100, cd: 8, name: 'Purify', target: 'self', type: 'single-sup', casting: '2'},
    third_skill:    {power: 2.5, mana: 150, cd: 5, name: 'Divine Strenght', target: 'self', type: 'buff', casting: '1'},
    heroic_skill:   {power: 1000, mana: 200, cd: 8, name: 'Iluminate', target: 'enemy', type: 'area-stun', casting: '0'},
    
    position: {x: 0, y: 0}
}
//BAD GUYS
module.exports.potato_bag = {
    nome: 'Potato Bag',
    cor: 'Brown',
    life: 100,
    mana: 0,
    level: 0,
    align: 'Neutral',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 0, speed: 0, name: 'none', target: 'none', type: 'none'},

    first_skill:    {power: 0, mana: 0, cd: 0, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 0, mana: 0, cd: 0, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 0, mana: 0, cd: 0, name: 'none', target: 'none', type: 'none', casting: 'none'},
    heroic_skill:   {power: 0, mana: 0, cd: 0, name: 'none', target: 'none', type: 'none', casting: 'none'},
    
    position: {x: 2, y: 1}
}
module.exports.just_a_bug = {
    nome: 'Just a little bug',
    cor: 'Green, red and black',
    life: 1,
    mana: 1,
    level: 1,
    align: 'Chaotic',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 1, speed: 1, name: 'in bloom', target: 'self', type: 'ressurect'},

    first_skill:    {power: 0, mana: 0, cd: 0, name: 'zzzZZz', target: 'self', type: 'single-stun', casting: '0'},
    second_skill:   {power: 0, mana: 0, cd: 0, name: 'Looping', target: 'self', type: 'single-stun', casting: '0'},
    third_skill:    {power: 0, mana: 0, cd: 0, name: 'Lightfly', target: 'self', type: 'single-stun', casting: '0'},
    heroic_skill:   {power: 1, mana: 1, cd: -10, name: 'Floped', target: 'self', type: 'single-damage', casting: '0'},
    
    position: {x: 4, y: 2}
}
module.exports.old_girl = {
    nome: 'Old-girl',
    cor: 'Purple',
    life: 10,
    mana: 10,
    level: 2,
    align: 'lawful-evil',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 0.1, speed: 5, name: 'Flip-flop', target: 'enemy', type: 'single-damage'},

    first_skill:    {power: 100, mana: 1, cd: 1, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 500, mana: 2, cd: 1, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 0, mana: 2, cd: 5, name: 'none', target: '', type: '', casting: ''},
    heroic_skill:   {power: 10, mana: 5, cd: 2, name: 'none', target: 'none', type: 'none', casting: 'none'},
   
    position: {x: 6, y: 3}
}
module.exports.the_preacher = {
    nome: 'The Preacher',
    cor: 'Black and White',
    life: 10,
    mana: 10,
    level: 2,
    align: 'lawful-evil',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 0.1, speed: 5, name: 'Flip-flop', target: 'enemy', type: 'single-damage'},

    first_skill:    {power: 100, mana: 1, cd: 1, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 500, mana: 2, cd: 1, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 0, mana: 2, cd: 5, name: 'none', target: '', type: '', casting: ''},
    heroic_skill:   {power: 10, mana: 5, cd: 2, name: 'none', target: 'none', type: 'none', casting: 'none'},
   
    position: {x: 6, y: 3}
}
module.exports.graduate_engineer = {
    nome: 'Graduate Engineer',
    cor: 'Orange',
    life: 10,
    mana: 10,
    level: 2,
    align: 'lawful-evil',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 0.1, speed: 5, name: 'Flip-flop', target: 'enemy', type: 'single-damage'},

    first_skill:    {power: 100, mana: 1, cd: 1, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 500, mana: 2, cd: 1, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 0, mana: 2, cd: 5, name: 'none', target: '', type: '', casting: ''},
    heroic_skill:   {power: 10, mana: 5, cd: 2, name: 'none', target: 'none', type: 'none', casting: 'none'},
   
    position: {x: 6, y: 3}
}
module.exports.comunist_teacher = {
    nome: 'Comunist Teacher',
    cor: 'Red and Yellow',
    life: 10,
    mana: 10,
    level: 2,
    align: 'lawful-evil',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 0.1, speed: 5, name: 'Flip-flop', target: 'enemy', type: 'single-damage'},

    first_skill:    {power: 100, mana: 1, cd: 1, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 500, mana: 2, cd: 1, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 0, mana: 2, cd: 5, name: 'none', target: '', type: '', casting: ''},
    heroic_skill:   {power: 10, mana: 5, cd: 2, name: 'none', target: 'none', type: 'none', casting: 'none'},
   
    position: {x: 6, y: 3}
}
module.exports.presidente_latino = {
    nome: 'Presidente Latino',
    cor: 'Blue, red and green',
    life: 10,
    mana: 10,
    level: 2,
    align: 'lawful-evil',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 0.1, speed: 5, name: 'Flip-flop', target: 'enemy', type: 'single-damage'},

    first_skill:    {power: 100, mana: 1, cd: 1, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 500, mana: 2, cd: 1, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 0, mana: 2, cd: 5, name: 'none', target: '', type: '', casting: ''},
    heroic_skill:   {power: 10, mana: 5, cd: 2, name: 'none', target: 'none', type: 'none', casting: 'none'},
   
    position: {x: 6, y: 3}
}
module.exports.astrophilosopher = {
    nome: 'Astrophilosopher',
    cor: 'Gray',
    life: 10,
    mana: 10,
    level: 2,
    align: 'lawful-evil',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 0.1, speed: 5, name: 'Flip-flop', target: 'enemy', type: 'single-damage'},

    first_skill:    {power: 100, mana: 1, cd: 1, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 500, mana: 2, cd: 1, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 0, mana: 2, cd: 5, name: 'none', target: '', type: '', casting: ''},
    heroic_skill:   {power: 10, mana: 5, cd: 2, name: 'none', target: 'none', type: 'none', casting: 'none'},
   
    position: {x: 6, y: 3}
}
module.exports.taxi_driver = {
    nome: 'Taxi Driver',
    cor: 'Gray',
    life: 10,
    mana: 10,
    level: 2,
    align: 'lawful-evil',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 0.1, speed: 5, name: 'Flip-flop', target: 'enemy', type: 'single-damage'},

    first_skill:    {power: 100, mana: 1, cd: 1, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 500, mana: 2, cd: 1, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 0, mana: 2, cd: 5, name: 'none', target: '', type: '', casting: ''},
    heroic_skill:   {power: 10, mana: 5, cd: 2, name: 'none', target: 'none', type: 'none', casting: 'none'},
   
    position: {x: 6, y: 3}
}
module.exports.canibal_ninjabot = {
    nome: 'Canibal Ninjabot',
    cor: 'Dark Still',
    life: 250,
    mana: 50,
    level: 3,
    align: 'Chaotic Neutral',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 1, speed: 1, name: 'Swording', target: 'enemy', type: 'single-damage'},

    first_skill:    {power: 50, mana: 20, cd: 3, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 100, mana: 40, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 1, mana: 10, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    heroic_skill:   {power: 1000, mana: 200, cd: 8, name: 'none', target: 'none', type: 'none', casting: 'none'},
    
    position: {x: 8, y: 4}
}
module.exports.popular_judge = {
    nome: 'Popular Judge',
    cor: 'Black',
    life: 250,
    mana: 50,
    level: 3,
    align: 'Chaotic Neutral',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 1, speed: 1, name: 'Swording', target: 'enemy', type: 'single-damage'},

    first_skill:    {power: 50, mana: 20, cd: 3, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 100, mana: 40, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 1, mana: 10, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    heroic_skill:   {power: 1000, mana: 200, cd: 8, name: 'none', target: 'none', type: 'none', casting: 'none'},
    
    position: {x: 8, y: 4}
}
module.exports.true_jornalist = {
    nome: 'True Jornalist',
    cor: 'Black',
    life: 250,
    mana: 50,
    level: 3,
    align: 'Chaotic Neutral',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 1, speed: 1, name: 'Swording', target: 'enemy', type: 'single-damage'},

    first_skill:    {power: 50, mana: 20, cd: 3, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 100, mana: 40, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 1, mana: 10, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    heroic_skill:   {power: 1000, mana: 200, cd: 8, name: 'none', target: 'none', type: 'none', casting: 'none'},
    
    position: {x: 8, y: 4}
}
module.exports.buss_driver = {
    nome: 'Buss Driver',
    cor: 'Black',
    life: 250,
    mana: 50,
    level: 3,
    align: 'Chaotic Neutral',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 1, speed: 1, name: 'Swording', target: 'enemy', type: 'single-damage'},

    first_skill:    {power: 50, mana: 20, cd: 3, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 100, mana: 40, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 1, mana: 10, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    heroic_skill:   {power: 1000, mana: 200, cd: 8, name: 'none', target: 'none', type: 'none', casting: 'none'},
    
    position: {x: 8, y: 4}
}
module.exports.madbot = {
    nome: 'Madbot',
    cor: 'Copper',
    life: 15000,
    mana: 10000,
    level: 4,
    align: 'Chaotic Evil',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 1, speed: 1, name: 'Bomb', target: 'random', type: 'area-damage'},

    first_skill:    {power: 50, mana: 20, cd: 3, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 100, mana: 40, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 1, mana: 10, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    heroic_skill:   {power: 1000, mana: 200, cd: 8, name: 'none', target: 'none', type: 'none', casting: 'none'},
    
    position: {x: 12, y: 6}
}
module.exports.two_guys_on_a_moto = {
    nome: 'Two Guys on a Moto',
    cor: 'Copper',
    life: 15000,
    mana: 10000,
    level: 4,
    align: 'Chaotic Evil',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 1, speed: 1, name: 'Bomb', target: 'random', type: 'area-damage'},

    first_skill:    {power: 50, mana: 20, cd: 3, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 100, mana: 40, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 1, mana: 10, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    heroic_skill:   {power: 1000, mana: 200, cd: 8, name: 'none', target: 'none', type: 'none', casting: 'none'},
    
    position: {x: 12, y: 6}
}
module.exports.middle_class_lady = {
    nome: 'Middle Class Lady',
    cor: 'Gold and perola',
    life: 15000,
    mana: 10000,
    level: 4,
    align: 'Chaotic Evil',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 1, speed: 1, name: 'Bomb', target: 'random', type: 'area-damage'},

    first_skill:    {power: 50, mana: 20, cd: 3, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 100, mana: 40, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 1, mana: 10, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    heroic_skill:   {power: 1000, mana: 200, cd: 8, name: 'none', target: 'none', type: 'none', casting: 'none'},
    
    position: {x: 12, y: 6}
}
module.exports.chikabot = {
    nome: 'Chikabot',
    cor: 'White and Red',
    life: 50,
    mana: 50,
    level: 5,
    align: 'True Neutral',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 1, speed: 1, name: 'bite', target: 'enemy', type: 'single-damage'},

    first_skill:    {power: 50, mana: 20, cd: 3, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 100, mana: 40, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 1, mana: 10, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    heroic_skill:   {power: 1000, mana: 200, cd: 8, name: 'none', target: 'none', type: 'none', casting: 'none'},
    
    position: {x: 10, y: 5}
}
module.exports.worker = {
    nome: 'Worker',
    cor: 'White and Red',
    life: 50,
    mana: 50,
    level: 5,
    align: 'True Neutral',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 1, speed: 1, name: 'bite', target: 'enemy', type: 'single-damage'},

    first_skill:    {power: 50, mana: 20, cd: 3, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 100, mana: 40, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 1, mana: 10, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    heroic_skill:   {power: 1000, mana: 200, cd: 8, name: 'none', target: 'none', type: 'none', casting: 'none'},
    
    position: {x: 10, y: 5}
}
module.exports.santa_cheng_seven = {
    nome: 'Santa Cheng and the Seven-one',
    cor: 'Red and white',
    life: 250,
    mana: 10000,
    level: 6,
    align: 'none',
    last_fight: 'none',
    victorys: 0,
    loses: 0,
    score: 0,

    auto_atack:     {power: 0.5, speed: 1, name: 'Gift', target: 'random', type: 'random'},

    first_skill:    {power: 50, mana: 20, cd: 3, name: 'none', target: 'none', type: 'none', casting: 'none'},
    second_skill:   {power: 100, mana: 40, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    third_skill:    {power: 1, mana: 10, cd: 5, name: 'none', target: 'none', type: 'none', casting: 'none'},
    heroic_skill:   {power: 1000, mana: 200, cd: 8, name: 'none', target: 'none', type: 'none', casting: 'none'},
    
    position: {x: 14, y: 7}
}