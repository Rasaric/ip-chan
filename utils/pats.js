/*******************************************************************************


Pats


*******************************************************************************/

//required----------------------------------------------------------------------
pats = require("../JSON/pats.json");

function patsFunction(x) {
  const patReact = pats.pats;

  //generate random number------------------------------------------------------
  const randomNum = Math.floor(Math.random() * patReact.length);

  //pick a number and pat-------------------------------------------------------
  const homete = patReact[randomNum];
  x.channel.send(homete);
}

module.exports = patsFunction;
