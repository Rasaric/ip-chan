/*******************************************************************************


Waifu Dab


*******************************************************************************/
function waifuDab(x, w) {
  trueMsg = x.content.replace(':-waifu dab ','');
  let looter = w.find(obj => obj.name == trueMsg);

  //check if action is possible-------------------------------------------------
  if (typeof looter == "undefined"){
    x.channel.send("invalid command, try again");
  } else if (looter.owner !== `<@${x.author.id}>`) {
    x.channel.send(`**${french.name}** will not humiliate herself for you`);
  } else if (looter.hasActed==true) {
    x.channel.send(`**${looter.name}** has already acted this round`);
  } else if (looter.isAlive==false){
    x.channel.send("Death is the one solution to dabing");
  } else {
    looter.onDab(x);
  }
}

module.exports = waifuDab;
