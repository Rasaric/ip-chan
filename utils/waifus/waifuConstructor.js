/*******************************************************************************


Waifu Generator


*******************************************************************************/
//required----------------------------------------------------------------------
const fs = require("fs");
const waifuList = require("../../JSON/waifuList.json");
const Waifu = require('./waifuBuilder');
let waifuBuilder = [];
var dump = [];
var lowerCaseWaifu = "";

function waifuConstructor(x,w) {

  //check if message is correct-------------------------------------------------
  let trueMsg = x.content.replace(':-waifu ', '');
  if(trueMsg.includes('http')){
    waifuBuilder = trueMsg.split(' http');
    lowerCaseWaifu = waifuBuilder[0].toLowerCase();
  } else {
    x.channel.send('you forgot the link you dumbass');
    return;
  }


  //check if waifu already exists-----------------------------------------------
  for (var prop in waifuList.waifus) {
    dump.push(waifuList.waifus[prop].name.toLowerCase());
  }
  if (dump.includes(lowerCaseWaifu)==true){
    let userIndex = dump.indexOf(lowerCaseWaifu);
    x.channel.send('this waifu already belongs to ' + waifuList.waifus[userIndex].owner);
    return;

    //build a new waifu---------------------------------------------------------
  } else {
    waifuBuilder[0] = new Waifu(waifuBuilder[0], `http${waifuBuilder[1]}`, `<@${x.author.id}>`);
    w.push(waifuBuilder[0]);

    //check if user has 3 waifus------------------------------------------------
    let threeMax =w.filter(waifu => waifu.owner == '<@'+ x.author.id +'>');
    while (typeof threeMax[3] !== 'undefined') {

      //find old waifu index----------------------------------------------------
      let toFilter = w.findIndex(obj => {return obj.name === threeMax[0].name})
      let saveFileFilter = waifuList.waifus.findIndex(obj => {return obj.name === threeMax[0].name})

      //remove waifu from waifus arrays-----------------------------------------
      x.channel.send(threeMax[0].name + ' has been replaced');
      w.splice(toFilter, 1);
      waifuList.waifus.splice(saveFileFilter, 1);
      threeMax.shift();

      //confirm remaining waifus----------------------------------------------
      if (typeof threeMax[3] == 'undefined') {
        let allMemberWaifus = threeMax.map(u => u.name);
        x.channel.send('your current waifus are: ' + allMemberWaifus.join(', ') )
        break;
      }
    }

    waifuList.waifus.push({
      name: waifuBuilder[0].name,
      owner: waifuBuilder[0].owner,
      url: waifuBuilder[0].url
    })

    //add to JSON-------------------------------------------------------------
    fs.writeFile("./JSON/waifuList.json", JSON.stringify(waifuList, null, 4), err => {
      if (err) throw err;
    });
    x.channel.send(waifuBuilder[0].ShowWaifu());
  }
}

module.exports = waifuConstructor;
