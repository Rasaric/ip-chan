/*******************************************************************************


Waifu Hide


*******************************************************************************/
function waifuHide(x,w) {
  let waifu  = x.content.replace(':-waifu hide ','');

  //check if action is possible-------------------------------------------------
  waifu.behaviour=hide";
  if (typeof waifu=="undefined"){
    x.channel.send("invalid command, try again");
  } else if (waifu.hasActed==true) {
    x.channel.send(`**${waifu.name}** you already changed this waifu's behaviour this round`);
  } else if (waifu.isAlive==false){
    x.channel.send(`**${waifu.name}** is already dead, hiding won't save her`);
  } else {
    waifu.onHide();
  }
}

module.exports = waifuHide;
