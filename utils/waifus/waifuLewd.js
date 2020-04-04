/*******************************************************************************


Waifu Lewd


*******************************************************************************/
function waifuLewd(x,w) {
  trueMsg = x.content.replace(':-waifu seduce ','');
  combatants = trueMsg.split(' vs ');
  let attacker = w.find(obj => obj.name == combatants[0]);
  let defender = w.find(obj => obj.name == combatants[1]);

  //check if action is possible-------------------------------------------------
  attacker.behaviour="lewd";

  if (typeof attacker=="undefined" || typeof defender=="undefined"){
    x.channel.send("invalid command, try again");
  }else if (attacker.owner !== `<@${x.author.id}>`) {
      x.channel.send(`**${attacker.name}** will not do such things with another, unless master says so`);
  } else if (attacker.allies.includes(defender.name)||defender.allies.includes(attacker.name)){
    x.channel.send(`**${attacker.name}** and **${defender.name}** are already "Friends:)"`);
  } else if (attacker.hasActed==true) {
    x.channel.send(`**${attacker.name}** has already acted this round`);
  } else if (attacker.isAlly==true) {
    x.channel.send(`**${attacker.name}** can only think about ${attacker.allies[0]}`);
  } else if (attacker.isAlive==false){
    x.channel.send(`**${attacker.name}** doesn't look good, being dead and all`);
  } else if (defender.isAlive==false){
    x.channel.send(`you might be a degenerate, but **${attacker.name}** in not into doing dead people`);
  } else {
    attacker.onLewd(x, defender);
  }
}

module.exports = waifuLewd;
