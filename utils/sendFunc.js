/*******************************************************************************


Send function


*******************************************************************************/
//required
id = require('../JSON/id.json');

//resend message to main channel
function sendFunc(x, y) {

	//select what is going to be sent---------------------------------------------
	editMsg =x.content.split('%%');
	let msgToSend = editMsg[1];
	let channelToSend = editMsg[2];

	//expected input: :-send%%message%%channel------------------------------------
	if (channelToSend == 'fgt') {

		//send to faggotland--------------------------------------------------------
		y.channels.get(id.IpFaggotLandId).send(msgToSend);
	} else {

		//send to main channel------------------------------------------------------
		y.channels.get(id.IpMainChannelId).send(msgToSend);
	}
	//check how to send to other channels
}

module.exports = sendFunc;
