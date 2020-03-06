/*******************************************************************************


Kill Prompt


*******************************************************************************/

//required----------------------------------------------------------------------
kill = require("../JSON/kills.json");

function killPrompt(x, y){


  //if victim is snek-----------------------------------------------------------
  if (y == '<@!274720140988252160>'){
    message.channel.send('https://www.youtube.com/watch?v=ARJ8cAGm6JE');

  }else {
    //import kill options-------------------------------------------------------
    const killChoices = kill.options;

    //select random kill option-------------------------------------------------
    const randomNum = Math.floor(Math.random() * killChoices.length);
    const fatality = killChoices[randomNum];
    fatalityMod = fatality.replace('message.author.id', x.author.id)

    //assemble message----------------------------------------------------------
    var killMsg = y + fatalityMod;
    return killMsg;
  }
}

module.exports = killPrompt;
