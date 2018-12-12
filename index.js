const botconfig = require ("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const prefix = botconfig.prefix;
const bot = new Discord.Client({disableEveryone: true});

bot.bdays = require("./bdays.json");
bot.on("ready", async () =>{
	console.log(`${bot.user.username} is online!`);
	bot.user.setActivity("with my balls");

    

    function bdaychecker(){

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;//jan 
        for (var festivity in bot.bdays) {
            if (bot.bdays[festivity].day-1 == dd && bot.bdays[festivity].mon == mm) {
                bot.channels.get('465770747223343115').send(festivity + "'s birthday is tomorrow, are you ready?");
            }
            else if (bot.bdays[festivity].day == 26 && bot.bdays[festivity].mon == 3) {
                bot.channels.get('465770747223343115').send(festivity + " happy birthday daddy UwU");
            }
            else if (bot.bdays[festivity].day == 25 && bot.bdays[festivity].mon == 12) {
                bot.channels.get('465770747223343115').send("merry chrystler @everyone">);
            }
            else if (bot.bdays[festivity].day == dd && bot.bdays[festivity].mon == mm) {
                bot.channels.get('465770747223343115').send("IT'S " + festivity + "'S BIRTHDAY MOTHERFUCKERS");
            }
            else if (bot.bdays[festivity].day == 11 && bot.bdays[festivity].mon == 9) {
                bot.channels.get('465770747223343115').send("@everyone never forget");
            }
        }
        
    }
    bdaychecker();
    setInterval(bdaychecker ,21550000);//thrice a day
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;// i cant figure how to make em global because fucker keeps getting undefined

    //debug
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

	if (message.content.includes('duro')) {
        return message.channel.send('como mi pito');
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
        return message.channel.send(<@!274718150153732096> + ', te buscan');
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

    	fs.writeFile("./bdays.json", JSON.stringify(bot.bdays, null, 4), err => {
    		if (err) throw err;
    		message.channel.send ("birthday recorded");
    	});
    }

    //get bday of tagged person
    if (message.content.startsWith(':-bget')){
        editget = message.content.split(' ');
        let whom = editget[1]
        message.channel.send (editget[1] + "'s bday is the " + bot.bdays[editget[1]].day + " of the " + bot.bdays[editget[1]].mon + " month")
    }
    
    //dump all bdays
    if (message.content.startsWith(':-ball')){
        for (var prop in bot.bdays) {
            var dump = dump + "Key:" + prop + "Value:" + bot.bdays[prop];
        }
         message.channel.send (dump);
    }

    //order 66
    if (message.content.includes(':-IP-Chan Excecute Order 66')) {
        for (var victim in bot.bdays) {
            return message.channel.send("*IP-Chan kills " + victim + " so violently it happens off-screen*");
        }
    }


});
    

bot.login(botconfig.token);