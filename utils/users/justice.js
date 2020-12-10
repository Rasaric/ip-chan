/*******************************************************************************


Pats


*******************************************************************************/

//required----------------------------------------------------------------------
justice = require("../../JSON/justice.json");

function justiceFunction(x) {
  const crimeReact = justice.justice;

  //generate random number------------------------------------------------------
  const randomNum = Math.floor(Math.random() * crimeReact.length);

  //pick a number and pat-------------------------------------------------------
  const smite = crimeReact[randomNum];
  x.channel.send(smite);
}

module.exports = justiceFunction;
