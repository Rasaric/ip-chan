/*******************************************************************************


waifu Loader


*******************************************************************************/
//required----------------------------------------------------------------------
const waifuList = require("../../JSON/waifuList.json");
const Waifu = require('./waifuBuilder');

function waifuLoad (w){
  for(let waifu in waifuList.waifus){
    waifu[waifu] = w.push(new Waifu(waifuList.waifus[waifu].name, waifuList.waifus[waifu].url, waifuList.waifus[waifu].owner));
  }
  console.log('waifus loaded!')
}

module.exports = waifuLoad;
