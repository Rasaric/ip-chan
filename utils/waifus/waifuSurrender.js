/*******************************************************************************


Waifu Fight


*******************************************************************************/
function waifuSurrender(x,w) {
  trueMsg = x.content.replace(':-waifu surrender ','');
  let french = w.find(obj => obj.name == trueMsg);

  //check if action is possible-------------------------------------------------
  if (typeof french=="undefined"){
    x.channel.send("invalid command, try again");
  } else if (french.owner !== `<@${x.author.id}>`) {
    x.channel.send(`**${french.name}** would only do that for master, you dick`);
  } else if (french.hasActed==true) {
    x.channel.send(`**${french.name}** has already acted this round`);
  } else if (french.isAlive==false){
    x.channel.send(`**${french.name}** cannot die again, as much as she wants to`);
  } else {
    french.onSurrender(x);
  }
}

module.exports = waifuSurrender;
