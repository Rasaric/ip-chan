/*******************************************************************************


waifu Constructor


*******************************************************************************/
//required----------------------------------------------------------------------
const Discord = require("discord.js");
const waifuGreets = require("../../JSON/waifuGreets.json");

//waifu builder-----------------------------------------------------------------
class Waifu {
  constructor(name, url, owner) {
    this.name= name;
    this.url = url;
    this.owner = owner;
    //stats
    this.combat = 1;
    this.dodge = 1;
    this.hp = 5;
    this.lewd = 1;
    this.pure = 1;
    this.stealth = 0;
    this.perception = 1;
    //status
    this.behaviour = 'default';
    this.isAlly = false;
    this.hasActed = false;
    this.hasMoved = false;
    this.isAlive = true;
    this.equip1 = "";
    this.equip2 = "";
    this.allies =[];
    this.room = "";
    this.hidden = false;
    this.betrayal = 0;
  }

  /*Waifu Methods**************************************************************/
  //name waifu------------------------------------------------------------------
  fullName(){
    return `${this.name} belongs to ${this.owner}`
  }

  //unhide----------------------------------------------------------------------
  unHide(){
    if(this.hidden==true){
      this.hidden=false;
      this.stealth= this.stealth-5;
    }
  }

  //Combat----------------------------------------------------------------------
  onFight(x, target){
    this.unHide()
    let atkRoll = Math.floor(Math.random()*10)+this.combat;
    let defRoll = Math.floor(Math.random()*10)+target.dodge;

    let spotRoll = Math.floor(Math.random()*10)+this.perception;
    let hideRoll= Math.floor(Math.random()*10)+target.stealth;

    console.log(`attack ${atkRoll} de,fense ${defRoll}`)

    if (target.hidden==true&&spotRoll<hideRoll) {
      x.channel.send(`**${this.name}** is having a hard time finding **${target.name}'s** hiding spot`);

    } else if (atkRoll>defRoll) {
      target.hp = target.hp-this.combat;
      let weapon="bare hands"
      if (this.equip2!==""&&atkRoll>5){weapon=this.equip2}else if(this.equip1!==""){weapon=this.equip1}
      if(target.hp<=0){
        x.channel.send(`**${this.name}** killed **${target.name}** with her **${weapon}**!`);
        target.isAlive=false;

      } else {
        x.channel.send(`**${this.name}** attacked **${target.name}** for **${this.combat}** damage with her **${weapon}**, **${target.name}** has **${target.hp}hp** left`);
      }
    } else {
      x.channel.send(`**${target.name}** dodged **${this.name}**'s attack`);
    }
    this.hasActed = true;
  }

  //seduce----------------------------------------------------------------------
  onLewd(x, target){
    this.unHide()
    let lewdRoll = Math.floor(Math.random()*10)+this.lewd;
    let pureRoll = Math.floor(Math.random()*10)+target.pure;

    let spotRoll = Math.floor(Math.random()*10)+this.perception;
    let hideRoll= Math.floor(Math.random()*10)+target.stealth;

    console.log(`attack ${lewdRoll} defense ${pureRoll}`)

    if (target.hidden==true&&spotRoll<hideRoll) {
      x.channel.send(`**${this.name}** is being incredibly lewd, but  **${target.name}** is too hidden`);

    } else if(lewdRoll>pureRoll){
      x.channel.send(`**${this.name}** seduced **${target.name}**!`);
      target.isAlly = true;
      this.allies.push(target.name);
      target.allies.push(this.name);

    } else {
      x.channel.send(`**${target.name}** is to pure to lewd!`);
    }
    this.hasActed = true;
  }
  //hide------------------------------------------------------------------------
  onHide(x) {
    this.stealth = this.stealth + 5;
    this.hidden = true;
    x.channel.send(`**${this.name}** is attempting to hide`);
  }

  //escape----------------------------------------------------------------------
  onMove(x,room) {
    this.unHide()
    this.room = room.name;
    x.channel.send(`**${this.name}** moved to ${this.room}`);
  }

  //item equip------------------------------------------------------------------
  onEquip(x, item){
    item.equiped = true;
    let stats =[];
    for (var prop in item) {
      if (item[prop]!==0&&typeof item[prop]=="number"){stats.push(`**${prop}**: ${item[prop]}`)}
    }
    x.channel.send(`**${this.name}** found **${item.name}**! ${stats.join(', ')}`);
    this.combat = this.combat+item.combat;
    this.dodge = this.dodge+item.dodge;
    this.hp = this.hp+item.hp;
    this.lewd = this.lewd+item.lewd;
    this.pure = this.pure+item.pure;
    if(this.equip1 == ""){
      this.equip1 = item.name
    } else {this.equip2 = item.name}

    this.hasActed = true;
  }

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

module.exports = Waifu;
