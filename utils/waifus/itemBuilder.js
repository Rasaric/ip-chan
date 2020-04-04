/*******************************************************************************


Item Constructor


*******************************************************************************/
//required----------------------------------------------------------------------
const Discord = require("discord.js");

//waifu builder-----------------------------------------------------------------
class Item {
  constructor(name, url, combat, dodge, hp, lewd, pure, flavor) {
    this.name= name;
    this.url = url;
    this.flavor = flavor;
    //stats
    this.combat = combat;
    this.dodge = dodge;
    this.hp = hp;
    this.lewd = lewd;
    this.pure = pure;
    this.equiped = false;
  }

  /*Item Methods**************************************************************/
  //Item Embed-----------------------------------------------------------------
  showItem() {
    let embed = new Discord.RichEmbed()
    .setDescription(this.name)
    .addField('Flavor text', this.flavor)
    .addField('Combat' , this.combat, true)
    .addField('Dodge' , this.dodge, true)
    .addField('Lewd' , this.lewd, true)
    .addField('Pure' , this.pure, true)
    .addField('HP' , this.hp, true)
    .setImage(this.url)
    .setColor('#275BF0');

    return embed;
  }
}
module.exports = Item;
