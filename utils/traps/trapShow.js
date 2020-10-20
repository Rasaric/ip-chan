/*******************************************************************************


Item Generator


*******************************************************************************/
function trapShow(x, i) {
  let trapToShow = x.content.replace(':-trap show ', '');

  //look for trap in array-----------------------------------------------------
  var result = i.find(obj => {
    return obj.name == trapToShow
  });


  //send message----------------------------------------------------------------
  if (typeof result !== "undefined"){
    x.channel.send(result.showItem());

  } else {x.channel.send(trapToShow + ' was not found')};
}

module.exports = trapShow;
