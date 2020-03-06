/*******************************************************************************


Record Bday


*******************************************************************************/
birthdays = require("../JSON/bdays.json");
const fs = require("fs");

function writeBday(x) {

  bday = x.content.split(' ');

  let day = bday[1];
  let mon = bday[2];
  let peep = bday[3];

  bdays [peep] = {
    day: [day],
    mon: [mon]
  }
  //add to JSON
  fs.writeFile("./JSON/bdays.json", JSON.stringify(birthdays, null, 4), err => {
    if (err) throw err;
    x.channel.send("I will remember this day," + day + "/" + mon + ", as your birthday, faggot");
  });
}
module.exports = writeBday;
