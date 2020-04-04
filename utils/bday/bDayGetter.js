/*******************************************************************************


Get Bday


*******************************************************************************/
const birthdays = require("../../JSON/bdays.json");

function bDayGetter(x) {
  editget = x.content.split(' ');
  let whom = editget[1]
  x.channel.send(whom + "'s bday is the " + birthdays[whom].day + "/" + birthdays[whom].mon)
}
module.exports = bDayGetter;
