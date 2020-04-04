/*******************************************************************************


Waifu Equip


*******************************************************************************/
const lootList = require("../../JSON/lootList.json");

function waifuEquip(x,w) {
  let itemToEquip = "";
  let trueMsg = x.content.replace(':-waifu loot ','');
  let looter = w.find(obj => obj.name == trueMsg);

  //check if action is possible-------------------------------------------------
  if (typeof looter == "undefined"){
    x.channel.send("invalid command, try again");
  } else if (looter.owner !== `<@${x.author.id}>`) {
    x.channel.send(`**${french.name}** will not take gifts from anyone but master`);
  } else if (looter.hasActed==true) {
    x.channel.send(`**${looter.name}** has already acted this round`);
  } else if (looter.isAlive==false){
    x.channel.send("The dead can't steal your shit, unlike the N-");
  } else if (looter.equip1!==""&&looter.equip2!=="") {
    x.channel.send(`**${looter.name}** already has too much stuff!`);
  } else {
    do {
      const ranNum = Math.floor(Math.random()*lootList.loot.length);
      console.log(ranNum)
      itemToEquip = lootList.loot[ranNum];
    }
    while (itemToEquip.equiped===true);

    looter.onEquip(x, itemToEquip);
  }
}

module.exports = waifuEquip;
