const botconfig = require ("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const prefix = botconfig.prefix;//honestly i don't use this
const bot = new Discord.Client({disableEveryone: true});

bot.bdays = require("./bdays.json");
//all the required shit

bot.on("ready", async () =>{
	console.log(`${bot.user.username} is online!`);
    //game
	bot.user.setActivity("with my balls");
    //bootup message
    //bot.channels.get('465770747223343115').send("i'm back bitch");

    function bdaychecker(){
        //get date, day, month
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;//jan 
        for (var festivity in bot.bdays) {
            //random birthday options
            const options = [
                "IT'S " + festivity + "'S BIRTHDAY MOTHERFUCKERS",
                "BRING " + festivity + " SOME CAKE, IT'S BIRTHDAY TIME",
                festivity + " came out the pussy today, happy b-day!",
                "BIRTHDAY BIRTHDAY BIRTHDAY BIRTHDAY BIRTHDAY " + festivity + " BIRTHDAY BIRTHDAY BIRTHDAY BIRTHDAY BIRTHDAY BIRTHDAY BIRTHDAY BIRTHDAY BIRTHDAY BIRTHDAY",
                "happy birthday to " + festivity + " but what's another year when you are immortal and will never die",
                "happy birthday" + festivity + ", im not gonna suck your dick",
                "this birthday message was picked specially for you, " + festivity + ", happy birthday",
                "hap " + festivity,
                "enjoy your bday, " + festivity + ", enjoy it while it lasts",
                "one year closer to death, " + festivity + ", happy birthday",
                festivity + "leveled up! happy birthday!",
                festivity + " looks older, get better soon!",
                
            ];
            if (bot.bdays[festivity].day-1 == dd && bot.bdays[festivity].mon == mm) {
                bot.channels.get('465770747223343115').send(festivity + "'s birthday is tomorrow, are you ready?");
            }
            if (dd == 26 && mm == 3) {
                bot.channels.get('465770747223343115').send(festivity + " happy birthday daddy UwU");
            }
            else if (bot.bdays[festivity].day == dd && bot.bdays[festivity].mon == mm) {
                //generate random number
                const randomNum = Math.floor(Math.random() * options.length);
                //pick a number and call a birthday greeting
                const option = options[randomNum];

                bot.channels.get('465770747223343115').send(option);
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

//message functions
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
    //emoji vars for ease of use
    let gunleft = bot.emojis.get("371039866810531861");
    let dai = bot.emojis.get("314877079386718218");
    let gunright = bot.emojis.get("371039882916790272");


    //responses and messages
	if (message.content.includes('duro')) {
        message.channel.send('como mi pito');
    }
    if (message.content.includes('69')) {
        //generate random number and multiply by 69
        const numsixnine = Math.floor(Math.random() * 69);
        //pick a number and call a birthday greeting
        if(numsixnine < 18){
            message.channel.send('( ͡° ͜ʖ ͡°)');
        }
    }
    if (message.content.includes('comunismo')) {
        message.channel.send('(☭ ͜ʖ ☭)');
    }
    if (message.content.includes('somebody')) {
        message.channel.send('ONCE TOLD ME THE WORLD IS GONNA ROLL ME');
    }
    if (message.content.includes('good bot')) {
        message.channel.send('(´꒳`)');
    }
    if (message.content.includes('@everyone')) {
        message.channel.send('REEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'); 
    }
    if (message.content.includes('gunright')) {
        message.channel.send(gunleft + " " + dai + " "+ gunright);
    }
    if (message.content.includes('gunleft')) {
        message.channel.send(gunleft + " " + dai + " "+ gunright);
    }
    if (message.content.includes('owo')) {
        message.channel.send('*notices bulge*');
    }
    if (message.content.includes('nice')) {
        message.channel.send('nice');
    }
    if (message.content.includes('play despacito')) {
        message.channel.send('https://www.youtube.com/watch?v=qcUk0x7NsJI');
    }
    if (message.content.includes('standing')) {
        message.channel.send('ON THE EDGE');
    }
    if (message.content==('F')) {
        message.channel.send('F');
    }
    if (message.content==('f')) {
        message.channel.send('f');
    }
    if (message.content.includes('big guy')) {
        message.channel.send('for you');
    }
    if (message.content==('no u')) {
        message.channel.send('no, w');
    }
    if (message.content.includes('mamalo')) {
        message.channel.send('eso es lo que tu quisieras, no?');
    }
    if (message.content.includes('justice')) {
        message.channel.send('<@!274718150153732096> i summon thee');
    }
    if (message.content.includes('trece')) {
        message.channel.send('mientras mas me lo maman mas me crece');
    }
    if (message.content.includes('cinco')) {
        message.channel.send('por el culo te lo inco');    
    }
    if (message.content.includes('marico')){
        message.channel.send('marico tu');
    }
    if (message.content.includes(' our')){
        message.channel.send('https://www.youtube.com/watch?v=U06jlgpMtQs');
    }
    if (message.content.includes('waifu')){
        message.channel.send('tu waifu es basura');
    }
    if (message.content.includes('morning')) {
        message.channel.send('hola pendejos');    
    }
    if (message.content.includes('Morning')) {
        message.channel.send('sup');    
    }
    if (message.content.includes('ayy')) {
        message.channel.send('lmao');    
    }
    if (message.content.includes('gib date')) {
        message.channel.send('today is ' + dd + ' of the ' + mm);    
    }
    if (message.content.includes('Go read Kimetsu no Yaiba')) {
        message.channel.send('shut up you goddamn incel');    
    }
    //resend message to main channel
    if (message.content.startsWith(':-send')){
        //select what is going to be sent
        editMsg = message.content.split('%%');
        let msgToSend = editMsg[1];
        //send to main channel
        bot.channels.get('465770747223343115').send(msgToSend);
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
            if (victim == "<@!274720140988252160>") {
                message.channel.send(victim + " is now the senate");
            }
            else {
                message.channel.send("*IP-Chan kills " + victim + " so violently it happens off-screen*");
            }
        }
    }
});

//user functions
bot.on('guildMemberAdd', member => {
    if(member == 'Destro Patuit'){
        bot.channels.get('465770747223343115').send('the lost dog found his way back home, welcome back, dessert')   
    } else {
       bot.channels.get('465770747223343115').send('**' + member.user.username + '** has joined the hellhole, poor soul')
    }
});
bot.on('guildMemberRemove', member => {
    bot.channels.get('465770747223343115').send('**' + member.user.username + "** has died... jk, he just left");
});
    

bot.login(botconfig.token);