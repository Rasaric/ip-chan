/*******************************************************************************


Record Bday


*******************************************************************************/
//required----------------------------------------------------------------------
birthdays = require("../JSON/bdays.json");
const fs = require("fs");

function writeBday(x) {

  //define variables------------------------------------------------------------
  bday = x.content.split(' ');
  let day = bday[1];
  let mon = bday[2];
  let peep = bday[3];

//define array------------------------------------------------------------------
  bdays [peep] = {
    day: [day],
    mon: [mon]
  }
  //add to JSON-----------------------------------------------------------------
  fs.writeFile("./JSON/bdays.json", JSON.stringify(bdays, null, 4), err => {
    if (err) throw err;
    x.channel.send("I will remember this day," + day + "/" + mon + ", as your birthday, faggot");
  });
}
module.exports = writeBday;
