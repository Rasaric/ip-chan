/*******************************************************************************


order 66


*******************************************************************************/

//required----------------------------------------------------------------------
const killPrompt = require('./killPrompt');
id = require('../JSON/id.json');

function order66(x, y){

//if snek sends the message-----------------------------------------------------
	if (x.author.id === '274720140988252160') {

//define variables--------------------------------------------------------------
		let order = [];
		let ipServer = y.guilds.get(id.IpServerId);
		let guildNames = ipServer.members.map(u=> `<@!${u.id}>`);

//for each member execute kill--------------------------------------------------
		guildNames.forEach(function(member){

			//make snek the senate----------------------------------------------------
			if (member.includes('274720140988252160')) {
				order.unshift('**' + member + ' is now the Senate** \n');
			} else {
				let victim = member
				order.push(killPrompt(x, victim) + "\n");
			}
		});

		//concat all members as a single message------------------------------------
		x.channel.send(order.join(), { split: true });
	}
	else {
		x.channel.send("not yet, senator");
	}
}

module.exports = order66;
