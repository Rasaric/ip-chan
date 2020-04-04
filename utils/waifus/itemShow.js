/*******************************************************************************


Item Generator


*******************************************************************************/
function itemShow(x, i) {
  let itemToShow = x.content.replace(':-item show ', '');

  //look for item in array-----------------------------------------------------
  var result = i.find(obj => {
    return obj.name == itemToShow
  });


  //send message----------------------------------------------------------------
  if (typeof result !== "undefined"){
    x.channel.send(result.showItem());

  } else {x.channel.send(itemToShow + ' was not found')};
}

module.exports = itemShow;
