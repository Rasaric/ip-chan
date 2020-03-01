//const botconfig = require ("./botconfig.json"); deprecated and unsafe
const Discord = require("discord.js");
const fs = require("fs");
//const prefix = botconfig.prefix;//honestly i don't use this
const bot = new Discord.Client();

bot.bdays = require("./bdays.json");
bot.kinky = require("./kinkbase.json");
bot.bdaymsgs = require("./bdaymsgs.json");
bot.pats = require("./pats.json");
bot.kill = require("./kills.json");
bot.hector = require("./hector.json");
//all the required shit

//Ids for channel and server
const IpServerId = '274718680603033601';
const TestchannelID = '652639923530104852';
const IpMainChannelId = '666860578928721930';
const IpFaggotLandId = '660324785078796308'

bot.on("ready", async () =>{
	console.log(`${bot.user.username} is online!`);
	//game
	bot.user.setActivity("with your balls");
	//bootup message
	//bot.channels.get(IpMainChannelId).send("i'm back bitch");

	function bdaychecker(){
		//get date, day, month
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth()+1;//jan
		if (dd == 26 && mm == 3) {
			bot.channels.get(IpMainChannelId).send("Happy birthday daddy UwU");
		}
		//krimis
		if (dd == 25 && mm == 12) {
			bot.channels.get(IpMainChannelId).send("https://www.youtube.com/watch?v=_Z-Nu351j58 "+ "@everyone");
		}
		//bush day
		if (dd == 11 && mm == 9) {
			bot.channels.get(IpMainChannelId).send("@everyone"+" never forget");
		}
		for (let festivity in bot.bdays) {
			//random birthday options
			const options = bot.bdaymsgs.messages;

			if (bot.bdays[festivity].day-1 == dd && bot.bdays[festivity].mon == mm) {
				bot.channels.get(IpMainChannelId).send(festivity + "'s birthday is tomorrow, are you ready?");
			}
			else if (bot.bdays[festivity].day == dd && bot.bdays[festivity].mon == mm) {
				//generate random number
				const randomNum = Math.floor(Math.random() * options.length);
				//pick a number and call a birthday greeting
				const option = options[randomNum];
				optionMod=option.replace('festivity', festivity)

				bot.channels.get(IpMainChannelId).send(option);
			}
		}

	}
	bdaychecker();
	setInterval(bdaychecker ,21550000);//thrice a day
});

//message functions------------------------------------------------------------
bot.on("message", async message => {
	//message to lowercase
	msg = message.content.toLowerCase();
	//if autor is a bot, ignore
	if(message.author.bot) return;
	//if message is DM, ignore
	if(message.channel.type === "dm") return;

	//emoji lets for ease of use
	let gunleft = bot.emojis.get("371039866810531861");
	let dai = bot.emojis.get("314877079386718218");
	let gunright = bot.emojis.get("371039882916790272");
	let angery = bot.emojis.get("578768207528329217");

	//random chance generator for most stuffs-------------------------------------
	const numsixnine = Math.floor(Math.random() * 6969);



	//responses and messages -----------------------------------------------------
	if (msg==('duro')) {
		message.channel.send('como mi pito');
	}
	if (msg.includes('astolfo')) {
		message.react('😠');
	}
	if (msg.includes('69')) {
		if(numsixnine < 1800){
			message.channel.send('( ͡° ͜ʖ ͡°)');
		}
	}
	if (msg.includes('comunismo')) {
		message.channel.send('(☭ ͜ʖ ☭)');
	}
	if (msg.includes('good bot')) {
		const patReact = bot.pats.pats;
		//generate random number
		const randomNum = Math.floor(Math.random() * patReact.length);
		//pick a number and pat
		const homete = patReact[randomNum];
		message.channel.send(homete);
	}
	if (msg.includes(':-reset counter')) {
		message.channel.send("it's been 0 days since this server talked about gay shit");
	}
	if (msg.includes('somebody')) {
		message.channel.send('ONCE TOLD ME THE WORLD IS GONNA ROLL ME');
	}
	if (msg.includes('square up')) {
		message.channel.send("(ง'̀-'́)ง");
	}
	if (msg.includes('@everyone')) {
		message.channel.send('REEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
	}
	if (msg.includes('gunright')) {
		message.channel.send(gunleft + " " + dai + " "+ gunright);
	}
	else if (msg.includes('gunleft')) {
		message.channel.send(gunleft + " " + dai + " "+ gunright);
	}
	if (msg==('owo')) {
		message.channel.send('*notices bulge*');
	}
	if (msg.includes('nice')) {
		message.channel.send('nice');
	}
	if (msg.includes('play despacito')) {
		message.channel.send('https://www.youtube.com/watch?v=qcUk0x7NsJI');
	}
	if (msg==('standing')) {
		message.channel.send('ON THE EDGE');
	}
	if (msg==('f')) {
		message.channel.send('F');
	}
	if (msg.includes('big guy')) {
		message.channel.send('for you');
	}
	if (msg==('no u')) {
		message.channel.send('no, w');
	}
	if (msg.includes('mamalo')) {
		message.channel.send('eso es lo que tu quisieras, no?');
	}
	if (msg.includes('justice')) {
		message.channel.send('Behold! <@!274718150153732096> will end your faggotry!');
	}
	if (msg.includes('trece')) {
		message.channel.send('mientras mas me lo maman mas me crece');
	}
	if (msg.includes('cinco')) {
		message.channel.send('por el culo te lo inco');
	}
	if (msg.includes('marico')){
		message.channel.send('marico tu');
	}
	if (msg==('our')){
		//generate random number and multiply by 69
		if(numsixnine < 400){
			message.channel.send('https://www.youtube.com/watch?v=U06jlgpMtQs');
		}
	}
	if (msg.includes('waifu')){
		if(numsixnine < 2400){
			message.channel.send('tu waifu es basura');
		} else if (numsixnine > 6000) {
			message.channel.send('das some good waifu right there ( ͡° ͜ʖ ͡°)');
		}
	}
	if (msg==('morning')) {
		message.channel.send('hola pendejos');
	}
	if (msg.includes('retarded')) {
		if(numsixnine < 1800) {
			message.channel.send('i try my best (´•̥̥̥  ‸ •̥̥̥`)');
		} else if(numsixnine > 6000) {
			message.channel.send("you laugh, but i'm the one with a college degree");
		}
	}
	if (msg.includes('ayy')) {
		message.channel.send('lmao');
	}
	if (msg.includes('180063200459358208')) {
		message.channel.send('https://cdn.discordapp.com/attachments/529529045516550145/578239302127976460/D3-75jZU8AA3zV0.png');
	}
	if (msg.includes('sociedad'||'society')) {
		message.channel.send("Bottom text", {
			files: ["./images/society.jpg"]
		});
	}
	if (msg.includes('307639300332322827')) {
		message.channel.send("WII WOO WII WOO", {
			files: ["./images/police.png"]
		});
	}
	if (msg==('\>')) {
		message.channel.send("", {
			files: ["./images/39c.jpg"]
		});
	}
	if (msg.startsWith(':-spoilers-start')) {
		message.channel.send("", {
			files: ["./images/ini.png"]
		});
	}
	if (msg.startsWith(':-spoilers-over')) {
		message.channel.send("", {
			files: ["./images/endi.png"]
		});
	}

	if (msg.includes('Kimetsu no Yaiba')) {
		message.channel.send('shut up you goddamn incel');
	}


	//Emotes ----------------------------------------------------------------------
	let vault = '579043380332331030'
	if (msg.endsWith(':')) {
		toSend = msg.replace(/:/g, '');
		let sendEmote = bot.emojis.find(emoji => emoji.name === toSend);
		if (sendEmote !== "") {
			message.channel.send(sendEmote.toString());
		}
	}

	if (message.content === "listemojis") {
		const emojiList = vault.emojis.map((e, x) => (x + ' = ' + e) + ' | ' +e.name).join('\n');
		message.channel.send(emojiList);
	}

	//pron prompt-----------------------------------------------------------------
	if (msg.includes(':-porn')) {
		//select what is going to be sent
		let people = message.content.split(' ')

		person1=people[1];
		person2=people[2];
		actions=bot.kinky.actions;
		variables=bot.kinky.variables;

		const randomAction = Math.floor(Math.random() * actions.length);
		//pick a number and call a kink
		const action = actions[randomAction];

		const randomVariab = Math.floor(Math.random() * variables.length);
		//pick a number and call a kink
		const variable = variables[randomVariab];

		if (person2 == undefined) {
			message.channel.send( person1 + " stayed home and masturbated all day");
		} else {
			message.channel.send( person1 +" "+ action +" "+ person2 +" "+ variable );
		}

	}

	//kill prompt--------------------------------------
	funtion killPrompt(){
		//select what is going to be sent
		let victim = msg.replace(':-kill ','');
		if (victim == '<@!274720140988252160>'){
			message.channel.send('https://www.youtube.com/watch?v=ARJ8cAGm6JE');
		}else {
			const killChoices = bot.kill.options;
			//generate random number
			const randomNum = Math.floor(Math.random() * killChoices.length);
			//pick a number and KILL
			const fatality = killChoices[randomNum];
			fatalityMod = fatality.replace('message.author.id', message.author.id)
			message.channel.send(victim + fatalityMod);
		}
	}
	if (msg.includes(':-kill')) {killPrompt(msg)}

	if (msg==(':-help')) {
		let botIcon = bot.user.displayAvatarURL;
		let botembed = new Discord.RichEmbed()
		.setDescription("IP-Chan's commands")
		.setColor('#e7dcbf')
		.setThumbnail(botIcon)
		.addField('Add Birthday: ' , ':-bday day month @name')
		.addField('Get individual Birthday: ', ' :-bget @name' )
		.addField('Get all the birthdays: ' , ':-ball')
		.addField('Dude, Spoilers!:' , ':-spoilers-start')
		.addField('Ok its safe now, spoilers are over:', ':-spoilers-over')
		.addField('HELP PEOPLE ARE BEING GAY:' , 'i dunno, call mike?')
		.addField('HELP PEOPLE ARE BEING REALLY FUCKING GAY: ' , ':-reset counter')
		.addField('I WANNA PUNCH THE GOBLIN:' , ':-roll 1d20+2')
		.addField('someone looked at me funny' , ':-kill that mofo')
		.addField('we have too many emotes' , 'how about some more with :-emote help')
		.addField('Excecute order 66:' , 'its a secret to everyone')
		.addField("*i do a lot of other stuff, you'll just have to figure it out*", ':P')
		.addField("*i want to write a fanfic but i need ideas*", ':-porn <person> <person>')
		return message.channel.send(botembed);
	}


	if (message.author.id === '137631119536291841') {//if joe posts a message
		if(numsixnine < 69){
			message.channel.send('<a:m200dab:652640091411578890>');
		}
	}

	if (message.author.id === '274719053808009216') {//if hector posts a message
		if(msg.includes('teeth')) {
			message.channel.send("", {
				files: ["egg.png"]
			});
		} else if (msg.includes('sister')) {
			if(numsixnine < 4500){
				message.channel.send("",{
					files: ["headpats.jpg"]
				});
			}
		} else if(numsixnine < 69){
			const hectorOptions = hector.options;
			//generate random number
			const randomNum = Math.floor(Math.random() * hectorOptions.length);
			//pick a number and embarass hector
			const oniiChan = hectorOptions[randomNum];
			message.channel.send(oniiChan);

		}
	}

	if (msg.startsWith(':-roll')) {
		//pass in :-roll 1d20+3
		//split message and get roll
		let dice = message.content.split(' ');//remove command
		let newDice = dice[1]
		let diceValues= newDice.split('d');//split 1 d 20+3
		let diceAmount = diceValues[0] ? diceValues[0] : 1//store amount of dice to roll
		let diceTypenMod = diceValues[1]//stores 20+3

		var diceType = 0;
		var diceMod = 0;

		function diceTypeSetter() {
			if (diceTypenMod.includes('+')){
				newDiceTypenMod = diceTypenMod.split('+');//split 20 + 3
				diceType = newDiceTypenMod[0]//stores 20
				diceMod = newDiceTypenMod[1]//stores 3

			} else {
				diceType = diceTypenMod;//if no mod is passed

			}
		}
		diceTypeSetter();

		//generate random number and multiply by diceType
		var diceRoll = 0;
		function diceRoller() {
			for (var i = 0;  i < diceAmount; i++) {//roll new numbers for amount passed in
				diceRoll = diceRoll + 1 + Math.floor(Math.random() * diceType);
			}
		}
		diceRoller();
		let diceResult = Number(diceRoll) + Number(diceMod)//add modifier after rolling, might actually get 0

		//send results
		if (diceResult == 1){
			message.channel.send('you rolled a nat **' + diceResult + '**, hope the DM takes pity on you.');
		} else if (diceResult == 20) {
			message.channel.send('you rolled a nat **' + diceResult + '**, Critical Hit!');
		} else {
			message.channel.send('you rolled **' +  newDice + '** and got **' + diceResult + '**');
		}
	}


	/*if (msg.includes('serverid')) {
	message.channel.send(message.guild.id);
}*/
//resend message to main channel
if (msg.startsWith(':-send')){
	//select what is going to be sent
	editMsg = message.content.split('%%');
	let msgToSend = editMsg[1];
	let channelToSend = editMsg[2];
	if (channelToSend == 'fgt') {
		//send to faggotland
		bot.channels.get(IpFaggotLandId).send(msgToSend);
	} else {
		//send to main channel
		bot.channels.get(IpMainChannelId).send(msgToSend);
	}

	//check how to send to other channels
}

//record bday
if (msg.startsWith(':-bday')){
	bday = message.content.split(' ');
	let day = bday[1];
	let mon = bday[2];
	let peep = bday[3];

	bot.bdays [peep] = {
		day: [day],
		mon: [mon]
	}
	//add to JSON
	fs.writeFile("./bdays.json", JSON.stringify(bot.bdays, null, 4), err => {
		if (err) throw err;
		message.channel.send ("I will remember this day," + day + "/" + mon + ", as your birthday, faggot");
	});
}

//get bday of tagged person
if (msg.startsWith(':-bget')){
	editget = message.content.split(' ');
	let whom = editget[1]
	message.channel.send (whom + "'s bday is the " + bot.bdays[whom].day + "/" + bot.bdays[whom].mon)
}

//dump all bdays
if (msg.startsWith(':-ball')){
	for (var prop in bot.bdays) {
		var dump = dump + prop + "'s bday is the " + bot.bdays[prop].day + "/" + bot.bdays[prop].mon + ", ";
	}
	message.channel.send(dump);
}

//order 66

if (msg.includes(':-ip-chan execute order 66')) {
	if (message.author.id === '274720140988252160') {
		let guildNames = bot.users.map(u=> `${u.username}`)
			if (member.guild.id == IpServerId){
				guildNames.join(" was executed \n");
			}
		message.channel.send(guildNames);
	}
	else {
		message.channel.send("not yet, senator");
	}
}
});

//user functions

//on adding a member
bot.on('guildMemberAdd', member  => {
	if (member.guild.id == IpServerId){
		if(member.id == '164916181252308993'){
			bot.channels.get(IpMainChannelId).send('the lost dog found his way back home, again. welcome back, dessert');
		} else if(member.id == '265625238300000258'){
			bot.channels.get(IpMainChannelId).send('the gay never ends, the princess is back at it again');
		} else {
			bot.channels.get(IpMainChannelId).send('**' + member.user.username + '** has joined the hellhole, poor soul', {
				files: ["./images/welcome.png"]
			});
		}
	}
});

//on kick
bot.on('guildMemberRemove', member => {
	if (member.guild.id == IpServerId){
		if(member.id == '265625238300000258'){
			bot.channels.get(IpMainChannelId).send('pengu left, again. not big surprise');
		} if(member.id == '164916181252308993'){
			bot.channels.get(IpMainChannelId).send('Dessert ventured into a new world... outside. wonder how long that will last.');
		} else {
			bot.channels.get(IpMainChannelId).send('**' + member.user.username + "** has died... jk, he just left");
		}
	}
});


bot.login(process.env.BOT_TOKEN);
