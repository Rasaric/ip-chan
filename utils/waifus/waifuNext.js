/*******************************************************************************


Waifu Next


*******************************************************************************/
function waifuNext(x,w) {
  var dump=[];
  for (waifu in w){
    if (w[waifu].hasActed == false && w[waifu].isAlive == true) {
      dump.push(`${w[waifu].name} has not acted yet!`);
    }
  }
  if(dump.length==0){
    for (waifu in w){
      w[waifu].hasActed = false;
      dump.push(`${w[waifu].name} is ready for next round`)
    }
  }
  x.channel.send(dump.join(', \n'), { split: true });
}

module.exports = waifuNext;
