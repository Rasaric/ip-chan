/*******************************************************************************


waifu Constructor


*******************************************************************************/
//required----------------------------------------------------------------------
const Discord = require("discord.js");
const waifuGreets = require("../../JSON/waifuGreets.json");

//waifu builder-----------------------------------------------------------------
class Room {
  constructor(name, url, owner) {
    this.roomName= name;
    this.coordX = x;
    this.coordY = y;
    this.width = width;
    this.height = height;

    //population
    this.traps = traps;
    this.monsters = [];
    this.population = [];
    this.treasure = [];

  }

  /*Room Methods**************************************************************/
  //name waifu------------------------------------------------------------------



  //skip------------------------------------------------------------------------
  onDab(x){
    this.unHide()
    this.hasActed = true;
    x.channel.send(`**${this.name}** dabs!... and skips her turn`);
  }

  //give up---------------------------------------------------------------------
  onSurrender(x){
    this.isAlive = false;
    x.channel.send(`**${this.name}** has kermited sudoku to preserve master's honor`);
  }
  //Waifu Embed-----------------------------------------------------------------
  ShowWaifu() {
    let ranNum = Math.floor(Math.random() * waifuGreets.greet.length);
    let embed = new Discord.RichEmbed()
    .setDescription((this.isAlive==true) ? `${this.name} ${waifuGreets.greet[ranNum]}` : `${this.name} has died. press F to pay respects`)
    .addField('I belong to ' , this.owner)
    .addField('Combat' , this.combat, true)
    .addField('Dodge' , this.dodge, true)
    .addField('Lewd' , this.lewd, true)
    .addField('Pure' , this.pure, true)
    .addField('HP' , this.hp, true)
    .addField('Stealth' , this.stealth, true)
    .addField('Perception' , this.perception, true)
    .addField('Allies:', (this.allies.length!==0) ? `${this.allies.join(', ')}` : 'none', true)
    .addField('Equipment:',( this.equip1!=="") ? (this.equip2!=="") ? `${this.equip1}, ${this.equip2}` : `${this.equip1}` : 'none', true )
    .setImage(this.url)
    .setColor('#275BF0');
    return embed;
  }
}

module.exports = Room;
