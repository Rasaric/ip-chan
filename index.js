//const botconfig = require ("./botconfig.json"); deprecated and unsafe
const Discord = require("discord.js");
const fs = require("fs");
//const prefix = botconfig.prefix;//honestly i don't use this
const bot = new Discord.Client({disableEveryone: true});

bot.bdays = require("./bdays.json");
//all the required shit

//Ids for channel and server
const IpServerId = '274718680603033601';
const IpMainChannelId = '529529045516550145';

bot.on("ready", async () =>{
	console.log(`${bot.user.username} is online!`);
    //game
	bot.user.setActivity("with my balls");
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
            bot.channels.get(IpMainChannelId).send("https://www.youtube.com/watch?v=_Z-Nu351j58 @everyone");
        }
        //bush day
        if (dd == 11 && mm == 9) {
            bot.channels.get(IpMainChannelId).send("@everyone never forget");
        }
        for (let festivity in bot.bdays) {
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
                bot.channels.get(IpMainChannelId).send(festivity + "'s birthday is tomorrow, are you ready?");
            }
            else if (bot.bdays[festivity].day == dd && bot.bdays[festivity].mon == mm) {
                //generate random number
                const randomNum = Math.floor(Math.random() * options.length);
                //pick a number and call a birthday greeting
                const option = options[randomNum];

                bot.channels.get(IpMainChannelId).send(option);
            }
        }
        
    }
    bdaychecker();
    setInterval(bdaychecker ,21550000);//thrice a day
});

//message functions
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
    const numsixnine = Math.floor(Math.random() * 6969);

    //responses and messages
	if (msg.includes('duro')) {
        message.channel.send('como mi pito');
    }
    if (msg.includes('astolfo')) {
        message.channel.send(":angry:");
    }
    if (msg.includes('69')) {
        if(numsixnine < 1800){
            message.channel.send('( ͡° ͜ʖ ͡°)');
        }
    }
    if (msg.includes('comunismo')) {
        message.channel.send('(☭ ͜ʖ ☭)');
    }
    if (msg.includes('*pats*')) {
        const patReact = [
            '(≧∇≦)/',
            '☆*: .｡. o(≧▽≦)o .｡.:*☆',
            '(((o(*ﾟ▽ﾟ*)o)))',
            'ヽ(*⌒∇⌒*)ﾉ',
            'ヽ(＾Д＾)ﾉ',
            'o(≧∇≦o)',
            '(((＼（＠v＠）／)))',
            '(((o(*ﾟ▽ﾟ*)o)))',
            '✖‿✖',
            '(ﾉ´ヮ´)ﾉ*: ･ﾟ',
            '✧ ─=≡Σ((( つ•̀ω•́)つ',
            '( ✧Д✧) YES!!',
            '(๑˃̵　ᴗ　˂̵)و',
            '(*°∀°)=3',
            '(●♡∀♡)',
            '(♥_♥)',
            '≧﹏≦',
            '（｡>‿‿<｡ ）',
            '(〃 ω 〃)',
            '(/ω＼)',
            '(^///^)',
            '（*/∇＼*）ｷｬ',
            '(*´∀`*)えへへ',
            '（˶′◡‵˶）',
            'ﾟ.+:｡(〃ω〃)ﾟ.+:｡ ｷｬｧ♪',
            '(〃▽〃)ﾎﾟｯ',
            '(//∇//(//∇//(//∇//) ﾃﾚﾃﾚ',
            '(/∇＼*)…Reaaaally?',
            '･:*:･(*/////∇/////*)･:*:･',
            'Oh you~☆(*´∀｀)σ)))))*3ﾟ),･´.､',
            '(つω･*)o(〃・ω・〃)o',
            '・:*:・(●´Д｀●)・:*:・',
            '(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄',
            '( ͡°⁄ ⁄ ͜⁄ ⁄ʖ⁄ ⁄ ͡°)',
            '( ͡☉⁄ ⁄ ͜⁄ ͜ʖ̫⁄ ⁄ ͡☉)',
            '‧⁺( ᵒ̴̶̷̥́ ◡ ᵒ̴̶̷̣̥̀ )⁺‧',
            '(*ﾉωﾉ)ｷｬｰ',
            '(つ∀<●)ﾟ+.ｷｬｧ♪',
            'モジ(((ＵωＵ｀ *)(* ´ＵωＵ)))モジ',
            'ﾄﾞｷﾄﾞｷ(ﾟ∀ﾟ*)(*ﾟ∀ﾟ)ﾄﾞｷﾄﾞｷ',
            'もじ(´pq｀ * )三( * ´pq｀)もじ',
            '(∩ﾟ∀｀∩)ｷｬ―!!!!',
            'ｷｬｯ♪o((〃∇〃o))((o〃∇〃))oｷｬｯ♪',
        ];
        //generate random number
        const randomNum = Math.floor(Math.random() * patReact.length);
        //pick a number and KILL
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
    if (msg.includes('good bot')) {
        message.channel.send('(´꒳`)');
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
    if (msg.includes('owo')) {
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
        message.channel.send('f');
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
    if (msg.includes(' our')){
        //generate random number and multiply by 69
        if(numsixnine < 400){
            message.channel.send('https://www.youtube.com/watch?v=U06jlgpMtQs');
        }
    }
    if (msg.includes('waifu')){
        if(numsixnine < 1800){
            message.channel.send('tu waifu es basura');
        } else if (numsixnine < 696) {
            message.channel.send('das some good waifu right there ( ͡° ͜ʖ ͡°)');
        }
    }
    if (msg.includes('morning')) {
        message.channel.send('hola pendejos');    
    }
    if (msg.includes('retarded')) {
        message.channel.send('i try my best (´•̥̥̥  ‸ •̥̥̥`)');    
    }
    if (msg.includes('ayy')) {
        message.channel.send('lmao');    
    }
    if (msg.includes('180063200459358208')) {
        message.channel.send('https://cdn.discordapp.com/attachments/529529045516550145/578239302127976460/D3-75jZU8AA3zV0.png');
    }
    if (msg.includes('sociedad')) {
        message.channel.send("Bottom text", {
            files: ["./images/society.jpg"]
        });
    }
    if (msg.startsWith(':-spoilers-start')) {
        message.channel.send('https://media.discordapp.net/attachments/363517961907994626/376208013469679617/ini.png?width=1443&height=672');    
    }
    if (msg.startsWith(':-spoilers-over')) {
        message.channel.send('https://media.discordapp.net/attachments/363517961907994626/376207680794263563/endi.png?width=1443&height=672');    
    }

    if (msg.includes('Kimetsu no Yaiba')) {
        message.channel.send('shut up you goddamn incel');    
    }
    /*emotes*/

    if (msg.includes(':yukaritank:')) {
        message.channel.send('<:yukaritank:579044358993477645>');    
    } 
    if (msg.includes(':wat:')) {
        message.channel.send('<:wat:579044348407185442>');    
    } 
    if (msg.includes(':thinkkill:')) {
        message.channel.send('<:thinkkill:579044370863489035>');    
    } 
    if (msg.includes(':saitamaok:')) {
        message.channel.send('<:saitamaok:579044347782365185>');    
    } 
    if (msg.includes(':monika:')) {
        message.channel.send('<:monika:579044347874508814>');    
    } 
    if (msg.includes(':kheberga:')) {
        message.channel.send('<:kheberga:579044366111211521>');    
    } 
    if (msg.includes(':gitgud:')) {
        message.channel.send('<:gitgud:579044342547873822>');    
    } 
    if (msg.includes(':fooku:')) {
        message.channel.send('<:fooku:579044342338158595>');    
    } 
    if (msg.includes(':daishrug:')) {
        message.channel.send('<:daishrug:579044340975009825>');    
    }

    if (msg.includes(':triplegay:')) {
        message.channel.send('<:triplegay:579056046136492032>');    
    } 
    if (msg.includes(':thonk:')) {
        message.channel.send('<:thonk:579056068525686785>');    
    } 
    if (msg.includes(':perish:')) {
        message.channel.send('<:perish:579056039047987205>');    
    } 
    if (msg.includes(':mugu:')) {
        message.channel.send('<:mugu:579056046342144029>');    
    } 
    if (msg.includes(':megulewd:')) {
        message.channel.send('<:megulewd:579056050725191681>');    
    } 
    if (msg.includes(':deusvult2:')) {
        message.channel.send('<:deusvult2:579056076909969418>');    
    } 
    if (msg.includes(':angrydognoises:')) {
        message.channel.send('<:angrydognoises:579056065388478477>');    
    }
    if (msg.includes(':shake-eyes:')) {
        message.channel.send('<a:eyesshaking:579056083897679872>');    
    }
    if (msg.includes(':birb:')) {
        message.channel.send('<a:birb:579056044207243267>');
    }
    if (msg.includes(':cancer-dance:')) {
        message.channel.send('<a:dans:579060538970079242>');
    }
    if (msg.includes(':doot:')) {
        message.channel.send('<a:doot:579060538924072976>');
    }
    if (msg.includes(':thanos:')) {
        message.channel.send('<a:thanos:579065066062610451>');
    }

    if (msg==(':-emote help')) {
        message.channel.send(':yukaritank: <:yukaritank:579044358993477645> \n :wat: <:wat:579044348407185442> \n  :thinkkill: <:thinkkill:579044370863489035> \n :saitamaok: <:saitamaok:579044347782365185> \n :monika: <:monika:579044347874508814> \n :kheberga: <:kheberga:579044366111211521> \n :gitgud: <:gitgud:579044342547873822> \n :fooku: <:fooku:579044342338158595> \n :daishrug: <:daishrug:579044340975009825> \n :triplegay: <:triplegay:579056046136492032> \n :thonk: <:thonk:579056068525686785> \n :perish: <:perish:579056039047987205> \n :mugu: <:mugu:579056046342144029> \n :megulewd: <:megulewd:579056050725191681> \n :deusvult2: <:deusvult2:579056076909969418> \n :angrydognoises: <:angrydognoises:579056065388478477> \n  *animated emotes:* \n :cancer-dance: <a:dans:579060538970079242> --this one is my favorite \n :doot: <a:doot:579060538924072976> \n :birb: <a:birb:579056044207243267> \n :shake-eyes: <a:eyesshaking:579056083897679872> \n :thanos: <a:thanos:579065066062610451>');
    }
    if (msg.includes(':-emote')) {
        let emote = msg.replace(':-emote ','');
       
        if (emote == 'cancer') {
            message.channel.send('https://i.redd.it/hqx7okmi64c11.gif');
        }
        if (emote == 'doot') {
            message.channel.send('https://i.imgur.com/IT3hMY4.gif');
        }
        if (emote == 'thanos') {
            message.channel.send('https://i.imgur.com/S0Lm4kX.mp4');
        }
        if (emote == 'megulewd') {
            message.channel.send('https://discordemoji.com/assets/emoji/LewdMegumin.png');
        }
        if (emote == 'mugu') {
            message.channel.send('https://discordemoji.com/assets/emoji/Disabled_Megumin.png');
        }
        if (emote == 'birb') {
            message.channel.send('https://discordemoji.com/assets/emoji/BirdUpvote.gif');
        }
        if (emote == 'perish') {
            message.channel.send('https://discordemoji.com/assets/emoji/5142_then_perish.png');
        }
        if (emote == 'triple gay') {
            message.channel.send('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIa6Lm31QewuxbuRp9Uu6mxI6jLl4pGlrVTF-boqO3Gg7vdTYa');
        }
        if (emote == 'angry dog') {
            message.channel.send('https://i.kym-cdn.com/entries/icons/original/000/023/459/angrydognoises.jpg');
        }
        if (emote == 'eyes') {
            message.channel.send('https://discordemoji.com/assets/emoji/eyesshaking.gif');
        }
    }




    if (msg.includes(':-kill')) {
        //select what is going to be sent
        let victim = msg.replace(':-kill ','');
        if (victim == '<@!274720140988252160>'){
            message.channel.send('https://www.youtube.com/watch?v=ARJ8cAGm6JE'); 
        } else if (victim == 'gunsnek') {
            message.channel.send("i can't kill my daddy UmU");
        } else if (victim == 'murder spagurder') {
            message.channel.send("who?");
        }else {
            const killChoices = [
                ' was found guily of gay and executed by <@' + message.author.id + '>',
                " choked on <@" + message.author.id + "> 's dick while trying to suck it",
                ' died as he lived, unremarkably',
                ' shouted the N word in detroit',
                ' said "what could go wrong?" before everything went wrong',
                ' got shot in the nuts, stabbed in the kidney, then commited suicide',
                ' is getting buttfucked by lathi in hell, or heaven, depending how you look at it',
                " was shoved in <@" + message.author.id + "> 's trunk, 10 days later someone noticed the trunk smelled really bad and now we are here",
                ' was stabbed once, the pussy died from that, what a faggot',
                ' spontaneously combusted',
                " 's loli colection was found by the CIA, he resisted",
                ' tried to understand my code',
                ' stared into the void',
                ' rolled very shitty stats and lived the rest of his life in a farm, instead of killing dragons like the cool kids',
                " got a 9-5 job with terrible pay doing what he thought he wanted, he didn't",
                " died 5 years ago, <@" + message.author.id + "> , you have to let go",
                " was crushed by marto's fat fucking ass",
                ' considered suicide, then got ran over by a car',
                ' traveled back in time and accidentally killed their younger self',
                ' cut off his head to prove that he was macho',
                ' wanted to get a liposuction but didn’t have money to do it. did it at home with a vacuum cleaner and constantly had to take pain killers because of the pain. then died of an overdose',
                ' got his car stuck between two rail crossings. He saw a train coming and decided to save his car by stopping the train. Sadly, he was not Superman.',
                ' thought could walk on water. He decided to practice it at home in his bath tub. He slipped, he fell, he crashed.',
                " had sex, with a praying mantis, got eaten afterwards... doesn't matter had sex?",
                " got cum in their eye, tripped the stairs because they couldn't see",
                ' hung themselves with a smileyface tie',
                ' was falsly accused of rape in a matriarchal society',
                ' gave up and became hollow',
                ' considered socialism as a valid form of goverment',
                ' is kill',
                ' went to school even after john warned them not to',
                ' was pengu',
                ' was deemed "too brown" by a KKK member',
                ' Tried to kill himself with a shotgun but missed and ended up blind, deaf and without half a face, lived his whole life like that just to die in a elderly home of old age without having experienced the joys of life',
                " thought they could shove all of <@" + message.author.id + "> 's cock up their ass... they couldn't",
                ' ran into the dungeon unpreapared, now feminists complain his fate is "problematic" for the industry',
                ' was killed by kindness. a machete with "kindness" written on the side',
                " tried to fuck hector's sister.",
                ' was snapped by thanos',
                ' was cleansed from this holy land, thank the lord',
                ' was a heretic and executed as such',
                ' fell asleep and never woke up',
                ' went inside the "free candy" van',
                ' buyed something from the darkweb. got anthrax instead',
                ' went outside while wearing female clothes in a small mexican town',
                ' had bad taste in waifus',
                ' masturbated so hard his testicles moved up to his throat and choked him',
                " made a deal with a demon, didn't read the contract",
                ' rolled a nat 1 throwing dynamite',
                ' had 1 hp when a fly landed on them',
                ' snek ran out of ideas so you get a free pass this one time',
                ' dropped the soap',
                " was killed by <@" + message.author.id + ">"
            ];
            //generate random number
            const randomNum = Math.floor(Math.random() * killChoices.length);
            //pick a number and KILL
            const fatality = killChoices[randomNum];
            message.channel.send(victim + fatality);
        }
    }

    if (msg==(':-help')) {
        let botIcon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("IP-Chan's command")
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
        return message.channel.send(botembed);
    }





    if (message.author.id === '274719053808009216') {//if hector posts a message
        if(numsixnine < 69){
            const hectorOptions = [
                        'onii-chan!',
                        'welcome home onii-chan, would you like dinner, bath, or... me?',
                        'yamete onii-chan!!~',
                        'onii-chan, why are you holding a brush?',
                        'heil onii-chan',
                        '***ONII-CHAN!***',
                        '**ONII-CHAN!**',
                        'onii-chan, are you going to sleep with me tonight? umu',
                        'onii-chan, my bed is cold',
                        'how was work, onii-chan?',
                        'can i sleep in your lap, onii-chan?',
                        'suck my dick onii-chan, you know you like it',
                        'onii-chan! did you bring candy for me?',
                        'pat my head, onii-chan',
                        'slap my ass, onii-chan',
                        'onii-chan, why are you stripping me?',
                        '*onii-chan* >:T',
                        'eh? onii-chan, why are you not wearing pants?',
                        'umu',
                        'o-onii-chan... -///-',
                        'i showed you my dick, pet me',
                        "stop fucking your sister, i'm right here",
                    ];
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
        //send to main channel
        bot.channels.get(IpMainChannelId).send(msgToSend);

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
        for (let victim in bot.bdays) {
            if (victim == "<@!"+ message.author.id  +">") {
                message.channel.send(victim + " is now the senate");
            }
            else {
                message.channel.send("*IP-Chan kills " + victim + " so violently it happens off-screen*");
            }
        }
    }
});

//user functions

//on adding a member
bot.on('guildMemberAdd', member  => {
    if (member.guild.id == IpServerId){
        if(member.id == '164916181252308993'){
            bot.channels.get(IpMainChannelId).send('the lost dog found his way back home, welcome back, dessert');
        } else {
           bot.channels.get(IpMainChannelId).send('**' + member.user.username + '** has joined the hellhole, poor soul');
        }
    }
});

//on kick
bot.on('guildMemberRemove', member => {
    if (member.guild.id == IpServerId){
        bot.channels.get(IpMainChannelId).send('**' + member.user.username + "** has died... jk, he just left");
    }
});
    

bot.login(process.env.BOT_TOKEN);