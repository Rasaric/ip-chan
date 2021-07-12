/*******************************************************************************


Birthday checker


*******************************************************************************/

//Bday arrays
bdays = require("../../JSON/bdays.json");
bdaymsgs = require("../../JSON/bdaymsgs.json");
id = require('../../JSON/id.json');



function bDayChecker(x) {
  let ipServer = x.guilds.get(id.IpServerId);
  let guildNames = ipServer.members.map(u=> `<@!${u.id}>`);

  //get date, day, month--------------------------------------------------------
  var offset = -4;
  let today = new Date(new Date().getTime() + offset * 3600 * 1000);
  let dd = today.getDate();
  let mm = today.getMonth()+1;//jan

  /*Special dates**************************************************************/
  //snek bday
  if (dd == 26 && mm == 3) {
    x.channels.get(id.IpMainChannelId).send("Happy birthday daddy UwU");
  }
  //ipchan day
  if (dd == 11 && mm == 12) {
    x.channels.get(id.IpMainChannelId).send("https://www.youtube.com/watch?v=sKWT6CKSGb0");
  }

  //krimis----------------------------------------------------------------------
  if (dd == 25 && mm == 12) {
    x.channels.get(id.IpMainChannelId).send("https://www.youtube.com/watch?v=_Z-Nu351j58 "+ "@everyone");
  }
  //bush day--------------------------------------------------------------------
  if (dd == 11 && mm == 9) {
    x.channels.get(id.IpMainChannelId).send("@everyone"+" never forget");
  }

  for (let festivity in bdays) {
    for (let member in guildNames) {
      if (festivity == guildNames[member]) {
        if (bdays[festivity].day-1 == dd && bdays[festivity].mon == mm) {
          x.channels.get(id.IpMainChannelId).send(festivity + "'s birthday is tomorrow, are you ready?");
        }
        else if (bdays[festivity].day == dd && bdays[festivity].mon == mm) {
          //random birthday options
          const options = bdaymsgs.messages;
          //generate random number
          const randomNum = Math.floor(Math.random() * options.length);
          //pick a number and call a birthday greeting
          const option = options[randomNum];
          optionMod=option.replace('festivity', festivity)
          return x.channels.get(id.TestchannelID).send(optionMod);
        }
      }
    }
  }
}

module.exports = bDayChecker;
