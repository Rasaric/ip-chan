/*******************************************************************************


Help function


*******************************************************************************/

//required----------------------------------------------------------------------
const Discord = require("discord.js");

function waifuHelp(x, y){

  //set variables---------------------------------------------------------------
  let botembed = new Discord.RichEmbed()

  //set fields------------------------------------------------------------------
  .setDescription("a waifu can")
  .setColor('#e7dcbf')
  .addField(':-waifu fight [waifu1] vs [waifu2]' , 'you whack one waifu, not big surprise')
  .addField(':-waifu lewd [waifu1] vs [waifu2]' , 'ally a waifu so they dont whack, might not last forever')
  .addField(':-waifu loot [waifu]' , 'get shit, be stronk, can only hold so much')
  .addField(':-waifu hide [waifu]' , 'perform the stealth croutch and become invisible to the enemy... unless they see you')
  .addField(':-waifu dab [waifu]' , 'do nothing, be a shit')
  .addField(':-waifu surrender [waifu]' , 'do nothing with style, and blood')
  .addField(':-waifu show [waifu]' , 'just... show yourself')
  .addField(':-item show [item]' , 'what do you have there?');

  return x.channel.send(botembed);
}

module.exports = waifuHelp;
