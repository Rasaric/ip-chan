/*******************************************************************************


Waifu Generator


*******************************************************************************/
function waifuShow(x,w) {
  let waifuToShow = x.content.replace(':-waifu show ', '');

  //look for waifu in array-----------------------------------------------------
  var result =w.find(obj => {
    return obj.name === waifuToShow;
  });

  //send message----------------------------------------------------------------
  if (typeof result !== "undefined"){
    x.channel.send(result.ShowWaifu());
  } else {x.channel.send(waifuToShow + ' is unclaimed')};
}

module.exports = waifuShow;
