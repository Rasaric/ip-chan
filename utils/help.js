/*******************************************************************************


Help function


*******************************************************************************/

//required----------------------------------------------------------------------
const Discord = require("discord.js");

function helpFunc(x, y){

  //set variables---------------------------------------------------------------
  let botIcon = y.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()

  //set fields------------------------------------------------------------------
  .setDescription("IP-Chan's commands")
  .setColor('#e7dcbf')
  .setThumbnail(botIcon)
  .addField('Add Birthday: ' , ':-bday day month @name')
  .addField('Get individual Birthday: ', ' :-bget @name' )
  .addField('Get all the birthdays: ' , ':-ball')
  .addField('Dude, Spoilers!:' , ':-spoilers-start')
  .addField('Ok its safe now, spoilers are over:', ':-spoilers-over')
  .addField('HELP PEOPLE ARE BEING GAY:' , 'i dunno, call mike?')
  .addField('HELP PEOPLE ARE BEING REALLY FUCKING GAY: ' , ':-reset counter')
  .addField('I WANNA PUNCH THE GOBLIN:' , ':-roll 1d20+2')
  .addField('someone looked at me funny' , ':-kill that mofo')
  .addField('we have too many emotes' , 'how about some more with :-emote help')
  .addField('Excecute order 66:' , 'its a secret to everyone')
  .addField("i want to write a fanfic but i need ideas", ':-porn <person> <person>')
  .addField('i want to show you my love and appreciation', 'tell me im a good bot (˃̵ᴗ˂̵)')
  .addField("*i do a lot of other stuff, you'll just have to figure it out*", ':P')

  return x.channel.send(botembed);
}

module.exports = helpFunc;
