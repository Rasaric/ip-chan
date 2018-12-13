const botconfig = require ("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const prefix = botconfig.prefix;
const bot = new Discord.Client({disableEveryone: true});

bot.bdays = require("./bdays.json");
//all the required shit

bot.on("ready", async () =>{
	console.log(`${bot.user.username} is online!`);
    //game
	bot.user.setActivity("with my balls");
    //bootup message
    bot.channels.get('465770747223343115').send("i'm back bitch");

    function bdaychecker(){
        //get date, day, month
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;//jan 
        for (var festivity in bot.bdays) {
            if (bot.bdays[festivity].day-1 == dd && bot.bdays[festivity].mon == mm) {
                bot.channels.get('465770747223343115').send(festivity + "'s birthday is tomorrow, are you ready?");
            }
            if (dd == 26 && mm == 3) {
                bot.channels.get('465770747223343115').send(festivity + " happy birthday daddy UwU");
            }
            else if (bot.bdays[festivity].day == dd && bot.bdays[festivity].mon == mm) {
                bot.channels.get('465770747223343115').send("IT'S " + festivity + "'S BIRTHDAY MOTHERFUCKERS");
            }
            //krimis
            if (dd == 25 && mm == 12) {
                bot.channels.get('465770747223343115').send("merry chrystler @everyone");
            }
            //bush day
            if (dd == 11 && mm == 9) {
                bot.channels.get('465770747223343115').send("@everyone never forget");
            }
        }
        
    }
    bdaychecker();
    setInterval(bdaychecker ,21550000);//thrice a day
});

bot.on("message", async message => {
    //if autor is a bot, ignore
	if(message.author.bot) return;
    //if message is DM, ignore
	if(message.channel.type === "dm") return;
    //get date, day, month
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;// i cant figure how to make em global because fucker keeps getting undefined or wont update
    //only for gib date so prolly not important but whatever

    //debug birthdays
    /*if (message.content.includes('whosit')) {
        for (var festivity in bot.bdays) {
            if (bot.bdays[festivity].day-1 == dd && bot.bdays[festivity].mon == mm) {
                message.channel.send (prop + "'s birthday is tomorrow, are you ready?");
            }
            else if (bot.bdays[festivity].day == dd && bot.bdays[festivity].mon == mm) {
                message.channel.send ("IT'S " + prop + "'S BIRTHDAY MOTHERFUCKERS");
            }
            else {
                message.channel.send('nobody, you twat');
            }
        }
    }*/

    //responses and messages
	if (message.content.includes('duro')) {
        return message.channel.send('como mi pito');
    }
    if (message.content.includes('69')) {
        return message.channel.send('( ͡° ͜ʖ ͡°)');
    }
    if (message.content.includes('comunismo')) {
        return message.channel.send('(☭ ͜ʖ ☭)');
    }
    if (message.content.includes('everyone')) {
        return message.channel.send(':triggered:');
    }
    if (message.content.includes('owo')) {
        return message.channel.send('*notices bulge*');
    }
    if (message.content.includes('nice')) {
        return message.channel.send('nice');
    }
    if (message.content.includes('play despacito')) {
        return message.channel.send('https://www.youtube.com/watch?v=qcUk0x7NsJI');
    }
    if (message.content.includes('standing')) {
        return message.channel.send('ON THE EDGE');
    }
    if (message.content.includes('big guy')) {
        return message.channel.send('for you');
    }
    if (message.content.includes('no u')) {
        return message.channel.send('no, w');
    }
    if (message.content.includes('mamalo')) {
        return message.channel.send('eso es lo que tu quisieras, no?');
    }
    if (message.content.includes('justice')) {
        return message.channel.send('<@!274718150153732096> i summon thee');
    }
    if (message.content.includes('trece')) {
        return message.channel.send('mientras mas me lo maman mas me crece');
    }
    if (message.content.includes('cinco')) {
        return message.channel.send('por el culo te lo inco');    
    }
    if (message.content.includes('marico')){
        return message.channel.send('marico tu');
    }
    if (message.content.includes(' our')){
        return message.channel.send('https://www.youtube.com/watch?v=U06jlgpMtQs');
    }
    if (message.content.includes('waifu')){
        return message.channel.send('tu waifu es basura');
    }
    if (message.content.includes('morning')) {
        return message.channel.send('hola pendejos');    
    }
    if (message.content.includes('ayy')) {
        return message.channel.send('lmao');    
    }
    if (message.content.includes('gib date')) {
        return message.channel.send('today is ' + dd + ' of the ' + mm);    
    }

    //record bday
    if (message.content.startsWith(':-bday')){
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
    if (message.content.startsWith(':-bget')){
        editget = message.content.split(' ');
        let whom = editget[1]
        message.channel.send (whom + "'s bday is the " + bot.bdays[whom].day + "/" + bot.bdays[whom].mon)
    }
    
    //dump all bdays
    if (message.content.startsWith(':-ball')){
        for (var prop in bot.bdays) {
            var dump = dump + prop + "'s bday is the " + bot.bdays[prop].day + "/" + bot.bdays[prop].mon + ", ";
        }
         message.channel.send(dump);
    }

    //order 66
    if (message.content.includes(':-IP-Chan Excecute Order 66')) {
        for (var victim in bot.bdays) {
            if (vicitm == "<@!274720140988252160>") return;
            else {
                message.channel.send("*IP-Chan kills " + victim + " so violently it happens off-screen*");
                //only prints first victim? try forEach?
            }
        }
    }
});
    

bot.login(botconfig.token);