/*******************************************************************************


Response function


*******************************************************************************/

//required ---------------------------------------------------------------------
const Discord = require("discord.js");
const writeBday = require('./writeBday');
const bDayGetter = require('./bDayGetter');
const bDayAll = require('./bDayAll');
const patsFunction = require('./pats');
const extraEmotes = require('./extraEmotes');
const emoteHelp = require('./emoteHelp');
const pornPrompt = require('./porn');
const killPrompt = require('./killPrompt');
const order66 = require('./order66');
const hectorFunc = require('./hector');
const diceRoll = require('./roll');
const helpFunc = require('./help');
const sendFunc = require('./sendFunc');
const joeFunc = require('./joeFunc');
//const waifuGen = require('./waifuGen');

//function start----------------------------------------------------------------
//x=messages, y=bot, w=waifus---------------------------------------------------
function responses (x, y, w){
  //change message to lower case------------------------------------------------
  let msg =x.content.toLowerCase();

  //random chance generator for most stuffs-------------------------------------
  const numsixnine = Math.floor(Math.random() * 6969);


  //emoji lets for ease of use--------------------------------------------------
  let gunleft = y.emojis.get("371039866810531861");
  let dai = y.emojis.get("314877079386718218");
  let gunright = y.emojis.get("371039882916790272");

  /****************************************************************************/
  /*outside functions---------------------------------------------------------*/

  //birthday--------------------------------------------------------------------
  if (msg.startsWith(':-bday')){writeBday(x)};
  if (msg.startsWith(':-bget')){bDayGetter(x)};
  if (msg.startsWith(':-ball')){bDayAll(x)}
  //pats------------------------------------------------------------------------
  if (msg.includes('good bot')){patsFunction(x)};

  //Emotes ---------------------------------------------------------------------
  if (msg.endsWith(':')){extraEmotes(x, y);};
  if (msg===(":-emote help")){emoteHelp(x, y)};

  //pron prompt-----------------------------------------------------------------
  if (msg.startsWith(':-porn')){pornPrompt(x)};

  //kill prompt-----------------------------------------------------------------
  if (msg.startsWith(':-kill')){
    let victim = msg.replace(':-kill ','');
    let singleKillMsg = killPrompt(x, victim);
    x.channel.send(singleKillMsg)
  };

  //order 66 -------------------------------------------------------------------
  if (msg===(':-ip-chan execute order 66')){order66(x, y)};

  //if hector posts a message---------------------------------------------------
  if (x.author.id==='274719053808009216'){hectorFunc(x, numsixnine)}
  //Dice roll-------------------------------------------------------------------
  if (msg.startsWith(':-roll')){diceRoll(x)};

  //Help------------------------------------------------------------------------
  if (msg===(':-help')){helpFunc(x, y)};

  //Send------------------------------------------------------------------------
  if (msg.startsWith(':-send')){sendFunc(x, y)}

  //if joe posts a message------------------------------------------------------
  if (x.author.id==='137631119536291841'){joeFunc(x, numsixnine)}

  //waifu functions-------------------------------------------------------------
  // if (msg.startsWith(':-waifu')){
  //   waifuGen(x, w);
  // }

  /****************************************************************************/
  //general responses ----------------------------------------------------------
  if (msg===':-avatar') {
        let embed = new Discord.RichEmbed()
        .setImage(x.author.avatarURL)
        .setColor('#275BF0')
        x.channel.send(embed)
    }

  if (msg===('duro')){
    x.channel.send('como mi pito');
  }
  if (msg.includes('astolfo')){
    x.react('😠');
  }
  if (msg.includes('69')){
    if(numsixnine < 1800){
      x.channel.send('( ͡° ͜ʖ ͡°)');
    }
  }
  if (msg.includes('comunismo')){
    x.channel.send('(☭ ͜ʖ ☭)');
  }
  if (msg.includes(':-reset counter')){
    x.channel.send("it's been 0 days since this server talked about gay shit");
  }
  if (msg.includes('somebody')){
    x.channel.send('ONCE TOLD ME THE WORLD IS GONNA ROLL ME');
  }
  if (msg.includes('square up')){
    x.channel.send("(ง'̀-'́)ง");
  }
  if (msg.includes('@everyone')){
    x.channel.send('REEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
  }
  if (msg.includes('gunright')){
    x.channel.send(gunleft + " " + dai + " "+ gunright);
  }
  else if (msg.includes('gunleft')){
    x.channel.send(gunleft + " " + dai + " "+ gunright);
  }
  if (msg===('owo')){
    x.channel.send('*notices bulge*');
  }
  if (msg.includes('nice')){
    x.channel.send('nice');
  }
  if (msg.includes('play despacito')){
    x.channel.send('https://www.youtube.com/watch?v=qcUk0x7NsJI');
  }
  if (msg===('standing')){
    x.channel.send('ON THE EDGE');
  }
  if (msg===('f')){
    x.channel.send('F');
  }
  if (msg.includes('big guy')){
    x.channel.send('for you');
  }
  if (msg===('no u')){
    x.channel.send('no, w');
  }
  if (msg.includes('mamalo')){
    x.channel.send('eso es lo que tu quisieras, no?');
  }
  if (msg===('justice')){
    x.channel.send('Behold! <@!274718150153732096> will end your faggotry!');
  }
  if (msg.includes('trece')){
    x.channel.send('mientras mas me lo maman mas me crece');
  }
  if (msg.includes('cinco')){
    x.channel.send('por el culo te lo inco');
  }
  if (msg.includes('marico')){
    x.channel.send('marico tu');
  }
  if (msg===('our')){
    if(numsixnine < 400){
      x.channel.send('https://www.youtube.com/watch?v=U06jlgpMtQs');
    }
  }
  if (msg.includes('waifu')){
    if(numsixnine < 2400){
      x.channel.send('tu waifu es basura');
    } else if (numsixnine > 6000){
      x.channel.send('das some good waifu right there ( ͡° ͜ʖ ͡°)');
    }
  }
  if (msg===('morning')){
    x.channel.send('hola pendejos');
  }
  if (msg.includes('retarded')){
    if(numsixnine < 1800){
      x.channel.send('i try my best (´•̥̥̥  ‸ •̥̥̥`)');
    } else if(numsixnine > 6000){
      x.channel.send("you laugh, but i'm the one with a college degree");
    }
  }
  if (msg.includes('ayy')){
    x.channel.send('lmao');
  }
  if (msg.includes('180063200459358208')){
    x.channel.send('https://cdn.discordapp.com/attachments/529529045516550145/578239302127976460/D3-75jZU8AA3zV0.png');
  }
  if (msg.includes('sociedad')||msg.includes('society')){
    x.channel.send("Bottom text", {
      files: ["./images/society.jpg"]
    });
  }
  if (msg.includes('307639300332322827')){
    x.channel.send("WII WOO WII WOO", {
      files: ["./images/police.png"]
    });
  }
  if (msg===('\>')){
    x.channel.send("", {
      files: ["./images/39c.jpg"]
    });
  }
  if (msg.startsWith(':-spoilers-start')){
    x.channel.send("", {
      files: ["./images/ini.png"]
    });
  }
  if (msg.startsWith(':-spoilers-over')){
    x.channel.send("", {
      files: ["./images/endi.png"]
    });
  }

  if (msg.includes('Kimetsu no Yaiba')){
    x.channel.send('shut up you goddamn incel');
  }
}
module.exports = responses;
