/*******************************************************************************


Hector function


*******************************************************************************/

//required
hector = require("../JSON/hector.json");

function hectorFunc(x, y){
  //keywords--------------------------------------------------------------------
  if(x.content.includes('teeth')) {
    x.channel.send("", {
      files: ["./images/egg.png"]
    });

    //most used keyword---------------------------------------------------------
  } else if (x.content.includes('sister')) {
    if(y < 4500){
      x.channel.send("",{
        files: ["./images/headpats.jpg"]
      });
    }
  } else if(y < 69){

    //select random message-----------------------------------------------------
    const hectorOptions = hector.options;
    const randomNum = Math.floor(Math.random() * hectorOptions.length);

    //pick a number and embarass hector-----------------------------------------
    const oniiChan = hectorOptions[randomNum];
    x.channel.send(oniiChan);

  }
}

module.exports = hectorFunc;
