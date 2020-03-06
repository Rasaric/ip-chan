/*******************************************************************************


Birthday checker


*******************************************************************************/

//Bday arrays
bdays = require("../JSON/bdays.json");
bdaymsgs = require("../JSON/bdaymsgs.json");
id = require('../JSON/id.json');

function bDayChecker(x) {
  //get date, day, month
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1;//jan
  if (dd == 26 && mm == 3) {
    x.channels.get(id.IpMainChannelId).send("Happy birthday daddy UwU");
  }
  //krimis
  if (dd == 25 && mm == 12) {
    x.channels.get(id.IpMainChannelId).send("https://www.youtube.com/watch?v=_Z-Nu351j58 "+ "@everyone");
  }
  //bush day
  if (dd == 11 && mm == 9) {
    x.channels.get(id.IpMainChannelId).send("@everyone"+" never forget");
  }
  for (let festivity in bdays) {
    //random birthday options
    const options = bdaymsgs.messages;

    if (bdays[festivity].day-1 == dd && bdays[festivity].mon == mm) {
      x.channels.get(id.IpMainChannelId).send(festivity + "'s birthday is tomorrow, are you ready?");
    }
    else if (bdays[festivity].day == dd && bdays[festivity].mon == mm) {
      //generate random number
      const randomNum = Math.floor(Math.random() * options.length);
      //pick a number and call a birthday greeting
      const option = options[randomNum];
      optionMod=option.replace('festivity', festivity)
      return x.channels.get(id.IpMainChannelId).send(optionMod);
    }
  }
}

module.exports = bDayChecker;
