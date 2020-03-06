/*******************************************************************************


Porn function


*******************************************************************************/

//required----------------------------------------------------------------------
kinky = require("../JSON/kinkbase.json");

function pornPrompt(x){
  //select what is going to be sent---------------------------------------------
  let people = x.content.split(' ')
  person1=people[1];
  person2=people[2];

  //import actions and variables------------------------------------------------
  actions=kinky.actions;
  variables=kinky.variables;

  //select random action--------------------------------------------------------
  const randomAction = Math.floor(Math.random() * actions.length);
  const action = actions[randomAction];

  //select random variable--------------------------------------------------------
  const randomVariab = Math.floor(Math.random() * variables.length);
  const variable = variables[randomVariab];

  //if only 1 person selected
  if (person2 == undefined) {
    x.channel.send("it takes 2 to tango ( ͡° ͜ʖ ͡°)");
  } else {
    x.channel.send( person1 +" "+ action +" "+ person2 +" "+ variable );
  }
}

module.exports = pornPrompt;
