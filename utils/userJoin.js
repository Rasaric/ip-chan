/*******************************************************************************


User Join functions


*******************************************************************************/
//required``````````````````````````````````````````````````````````````````````
id = require('../JSON/id.json');

function userJoin(x, y) {

	if (y.guild.id == id.IpServerId){
		if(y.id == '164916181252308993'){
			x.channels.get(id.IpMainChannelId).send('the lost dog found his way back home, again. welcome back, dessert');

		} else if(y.id == '265625238300000258'){
			x.channels.get(id.IpMainChannelId).send('the gay never ends, the princess is back at it again');

		} else {
			x.channels.get(id.IpMainChannelId).send('**' + y.user.username + '** has joined the hellhole, poor soul', {
				files: ["./images/welcome.png"]
			});
		}
	}
}

module.exports = userJoin;
