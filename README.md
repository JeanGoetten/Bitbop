<h4 align="center">THE</h4><h3 align="center">GREAT</h3><h1 align="center">BITBOP ADVENTURE</h1><h4 align="center">RPG</h4>
<hr>
<p align="center"> 
 <img src="https://img.shields.io/badge/-Node-green.svg" alt="NodeJS">
 <img src="https://img.shields.io/badge/-JavaScript-yellow.svg" alt="JavaScript">
 <img src="https://img.shields.io/badge/-HTML-ORANGE.svg" alt="HTML">
 <img src="https://img.shields.io/badge/-CSS-BLUE.svg" alt="CSS">
 <img src="https://img.shields.io/badge/-Mongoose-brown.svg" alt="NodeJS">
 <img src="https://img.shields.io/badge/-MongoDB-darkgreen.svg" alt="NodeJS">
 <img src="https://img.shields.io/badge/-Express-blue.svg" alt="NodeJS">
 <img src="https://img.shields.io/badge/-BodyParser-red.svg" alt="NodeJS">
 <img src="https://img.shields.io/badge/-Handlebars-pink.svg" alt="NodeJS">
 <img src="https://img.shields.io/badge/Game-darkblue.svg" alt="Game"> 
 <img src="https://img.shields.io/badge/RPG-darkred.svg" alt="Game"> 
 <img src="https://img.shields.io/badge/Adventure-darkGREEN.svg" alt="Game"> 
 <img src="https://img.shields.io/badge/License-MIT-darkgrey.svg" alt="License">
</p>
<hr>
<h2 align="center">CHARACTERS</h2>

<table>
    <tr><td>Retro Robot</td>         <td><img src="https://img.shields.io/badge/Lawful Good-gold.svg?style=for-the-badge"></td><td>Palamouse</td>         <td><img src="https://img.shields.io/badge/Lawful Good-gold.svg?style=for-the-badge"></td></tr>
    <tr><td>Potato Bag</td>         <td><img src="https://img.shields.io/badge/Neutral-black.svg?style=for-the-badge"></td><td>Just a bug</td>         <td><img src="https://img.shields.io/badge/Chaotic-silver.svg?style=for-the-badge"></td></tr>
    <tr><td>Old Girl</td>           <td><img src="https://img.shields.io/badge/Lawful%20Evil-gray.svg?style=for-the-badge"></td><td>The Preacher</td>       <td><img src="https://img.shields.io/badge/Lawful%20Evil-gray.svg?style=for-the-badge"></td></tr>
    <tr><td>Graduate Enginner</td>  <td><img src="https://img.shields.io/badge/Lawful%20Evil-gray.svg?style=for-the-badge"></td><td>Comunist Teacher</td>   <td><img src="https://img.shields.io/badge/Lawful%20Evil-gray.svg?style=for-the-badge"></td></tr>
    <tr><td>Presidente Latino</td>  <td><img src="https://img.shields.io/badge/Lawful%20Evil-gray.svg?style=for-the-badge"></td><td>Astrophilosopher</td>   <td><img src="https://img.shields.io/badge/Lawful%20Evil-gray.svg?style=for-the-badge"></td></tr>
    <tr><td>Taxi Driver</td>        <td><img src="https://img.shields.io/badge/Lawful%20Evil-gray.svg?style=for-the-badge"></td><td>Canibal-ninjabot</td>   <td><img src="https://img.shields.io/badge/Chaotic%20Neutral-yellow.svg?style=for-the-badge"></td></tr>
    <tr><td>Popular Judge</td>      <td><img src="https://img.shields.io/badge/Chaotic%20Neutral-yellow.svg?style=for-the-badge"></td><td>True Jornalist</td>     <td><img src="https://img.shields.io/badge/Chaotic%20Neutral-yellow.svg?style=for-the-badge"></td></tr>
    <tr><td>Buss Driver</td>        <td><img src="https://img.shields.io/badge/Chaotic%20Neutral-yellow.svg?style=for-the-badge"></td><td>Mad Robot</td>          <td><img src="https://img.shields.io/badge/Chaotic%20Evil-orange.svg?style=for-the-badge"></td></tr>
    <tr><td>Two Guys on a Moto</td> <td><img src="https://img.shields.io/badge/Chaotic%20Evil-orange.svg?style=for-the-badge"></td><td>Middle Class Lady</td>  <td><img src="https://img.shields.io/badge/Chaotic%20Evil-orange.svg?style=for-the-badge"></td></tr>
    <tr><td>Chikbot</td>            <td><img src="https://img.shields.io/badge/True%20neutral-lightgreen.svg?style=for-the-badge"></td><td>Worker</td>             <td><img src="https://img.shields.io/badge/True%20neutral-lightgreen.svg?style=for-the-badge"></td></tr>
    <tr><td>Santa Cheng and the Seven-one <td><img src="https://img.shields.io/badge/True%20evil-red.svg?style=for-the-badge"></td></tr>
</table>

<hr>
<h2 align="center">GAMEPLAY</h2>

<h3>Skills</h3>

    first_skill:    habilidade típica da classe      (dano, cura) 
    second_skill:   habilidade de suporte            (cura, escudo, suporte) 
    third_skill:    habilidade de utilidade          (stun, silence, buff) 
    heroic_skill:   habilidade heroica do personagem (super dano, super cura...) 

<p style='font-weight: bold'>    Estrutura do objeto skill: </p>

    _skill:    (qtd poder, qtd mana, cd, nome, alvo, tipo, casting)

    qtd poder: nível do efeito da habilidade
    qtd mana:  mana gasta ao utilizar a habilidade
    cd:        cooldown (em turnos)
    nome:      nome fantasia da habilidade
    alvo:      self; enemy; random
    tipo:      single-damage; area-damage; single-stun; area-stun; shield; single-healing; area-healing; ressurect; single-sup; area-sup; single-buff; area-buff; random
    casting:   cast time da habilidade (em turnos)

<hr>
<h2 align="center">LORE</h2>

<p style="text-align: justify">
A sociedade se tornou instável desde o anúncio das <i>chuvas de peano</i>. No começo era engraçado,  mas logo se tornou trágico. Diferente do cataclisma que vitimou os dinossauros, as chuvas de peano nunca foram o suficiente para estinguir o ser <i>humano</i> ou mesmo impactar o ambiente de forma a torná-lo inabitável, ainda que tenha abalado fortemente a estrutura civilizatória e, consequente, a própria essência da <i>humanidade</i>. <br>
Talvez viver na iminência da tragédia, talvez a palpabilidade do absurdo - ou a impotência diante transformações inesperadas, o que consta é que desde a segunda semana do início das <i>chuvas de peano</i>, a ordem social foi abalada de maneira irreversível. <br> 
Ainda que a intensidade das chuvas tenha diminuído com o passar dos anos, a desconexão com a vida cotidiana progridiu a passos largos. A <i>chuva de peano</i> matou, mas seu legado foi ter desconfigurado a face da <i>humanidade</i>, ao ponto de evoluir do status de tragédia, para o de oportunidade. <br>

No começo, era possível notar os traços comuns da <red>anarquia</red>, que se instala em qualquer contexto de calamidade: saques, violência, estupros, conflito estendido entre grupos rivais e até mesmo tentativas de restabelecer a ordem. As épocas alternavam entre esperança e o gozo pleno numa liberdade suja. Logo o pecado se tornou imperdoável e gerações cresceram sob sua sombra: a ressaca era intermitente. Com o tempo, os grupos predominantes nos pleitos pelo poder deixaram - definitivamente - de apresentar propostas éticas e passaram a oferecer retribuições mais fidedignas aos interesses de cada indivíduo, até que, finalmente, mesmo os grupos com objetivos mais niilistas, deixaram de ser suficientemente adesivos. A esperança finalmente fora sepultada. Desde então, ser <i>humano</i> significa representar de maneira desdenhosa os cacos de um passado vergonhoso cujo o significado se esvaiu. Nessa história não há herói, nem sucesso. Nem sequer há fracasso. Os personagens não se equilibram numa dança pretensiosa, mas claudicam de maneira assíncrona. Talvez a única constância seja a incompatibilidade das facetas e a irrelevância das desavenças. Na derrocada... havia sentido, no chão... nada. 

<h3><b>Elementos de roteiro:</b></h3>
 
 "Nobody/Ninguém": saudação típica no universo
