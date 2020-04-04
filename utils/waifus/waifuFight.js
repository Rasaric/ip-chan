/*******************************************************************************


Waifu Fight


*******************************************************************************/
function waifuFight(x,w) {
  trueMsg = x.content.replace(':-waifu fight ','');
  combatants = trueMsg.split(' vs ');
  let attacker = w.find(obj => obj.name == combatants[0]);
  let defender = w.find(obj => obj.name == combatants[1]);

  //check if action is possible-------------------------------------------------
  attacker.behaviour="fight";

  if (typeof attacker=="undefined" || typeof defender=="undefined"){
    x.channel.send("invalid command, try again");
  } else if (attacker.owner !== `<@${x.author.id}>`) {
    x.channel.send(`you cannot command **${attacker.name}**, you don't have enough badges`);
  } else if (attacker.allies.includes(defender.name)||defender.allies.includes(attacker.name)){
    x.channel.send(`**${attacker.name}** and **${defender.name}** are lovers, and won't fight outside the bedroom`);
  } else if (attacker.hasActed==true) {
    x.channel.send(`**${attacker.name}** you already changed this waifu's behaviour this round`);
  } else if (attacker.isAlive==false){
    x.channel.send(`**${attacker.name}** is not a zombie, she can't fight`);
  } else if (defender.isAlive==false){
    x.channel.send(`STOP, STOP, **${defender.name}** IS ALREADY DEAD`);
  } else {
    attacker.onFight(x, defender);
  }
}

module.exports = waifuFight;
