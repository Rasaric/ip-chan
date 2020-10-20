//all the required shit---------------------------------------------------------
const Discord = require("discord.js");
const bot = new Discord.Client();
var waifus = [];

//birthday functions------------------------------------------------------------
const bDayChecker = require('./utils/bday/bDayChecker');

//responses --------------------------------------------------------------------
const responses = require('./utils/responses');

// user functions---------------------------------------------------------------
const userJoin = require('./utils/users/userJoin');
const userLeave = require('./utils/users/userKick');

//waifuLoader-------------------------------------------------------------------
const waifuLoad = require('./utils/waifus/waifuLoad');

// When the bot boots up -------------------------------------------------------
bot.on("ready", async () =>{
	console.log(`${bot.user.username} is online!`);

	//set game -------------------------------------------------------------------
	bot.user.setActivity("with your balls");

	//bootup message--------------------------------------------------------------
	//bot.channels.get(IpMainChannelId).send("i'm back bitch");

	bDayChecker(bot);
	setInterval(bDayChecker ,21550000);//thrice a day

	//load waifu------------------------------------------------------------------
	//waifuLoad(waifus);
});

//on user add/remove------------------------------------------------------------
bot.on('guildMemberAdd', member  => {
	userJoin(bot, member);
});
bot.on('guildMemberRemove', member => {
	userLeave(bot, member);
});

//message functions-------------------------------------------------------------
bot.on("message", async message => {
	//if autor is a bot, ignore
	if(message.author.bot) return;
	//if message is DM, ignore
	if(message.channel.type === "dm") return;

/******************************************************************************/
	//for testing only------------------------------------------------------------
	//if(message.guild.id == '274718680603033601') return;
/******************************************************************************/

//responses and messages -------------------------------------------------------
		responses(message, bot, waifus);
});
bot.login(process.env.BOT_TOKEN);
