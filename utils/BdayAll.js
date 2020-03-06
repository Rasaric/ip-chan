/*******************************************************************************


dump all bdays


*******************************************************************************/
bdays = require("../JSON/bdays.json");

function bDayAll(x) {

  var dump = [];
  for (var prop in bdays) {
    dump.push(prop + "'s bday is the " + bdays[prop].day + "/" + bdays[prop].mon);
  }
  x.channel.send(dump.join(', \n'), { split: true });
}
module.exports = bDayAll;
