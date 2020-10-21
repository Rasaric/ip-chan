/*******************************************************************************


Pats


*******************************************************************************/

//required----------------------------------------------------------------------
justice = require("../../JSON/justice.json");

function justiceFunction(x) {
  const patReact = justice.justice;

  //generate random number------------------------------------------------------
  const randomNum = Math.floor(Math.random() * patReact.length);

  //pick a number and pat-------------------------------------------------------
  const smite = patReact[randomNum];
  x.channel.send(smite);
}

module.exports = justiceFunction;
