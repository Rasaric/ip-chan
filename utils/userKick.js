/*******************************************************************************


User Kick functions


*******************************************************************************/
//required----------------------------------------------------------------------
id = require('../JSON/id.json');

function userLeave(x, y) {

  if (y.guild.id == id.IpServerId){
    if(y.id == '265625238300000258'){
      x.channels.get(id.IpMainChannelId).send('pengu left, again. not big surprise');

    } if(y.id == '164916181252308993'){
      x.channels.get(id.IpMainChannelId).send('Dessert ventured into a new world... outside. wonder how long that will last.');

    } else {
      x.channels.get(id.IpMainChannelId).send('**' + y.user.username + "** has died... jk, he just left");
    }
  }
}

module.exports = userLeave;
