/*******************************************************************************


Waifu Generator


*******************************************************************************/
//required----------------------------------------------------------------------
const waifuAll = require('./waifuAll');
const waifuShow = require('./waifuShow');
const waifuConstructor = require('./waifuConstructor');
const waifuFight = require('./waifuFight');
const waifuNext = require('./waifuNext');
const waifuLewd = require('./waifuLewd');
const waifuEquip = require('./waifuEquip');
const waifuDab = require('./waifuDab');
const waifuSurrender = require('./waifuSurrender');
const waifuHelp = require('./waifuHelp');

function waifuGen (x, y,  w, i) {
  //show all waifus-------------------------------------------------------------
  if (x.content==(':-waifu all')){
    waifuAll(x, w);

  //show existing waifu-------------------------------------------------------
  } else if (x.content.startsWith(':-waifu show')){
    waifuShow(x, w);

  } else if (x.content.startsWith(':-waifu fight')){
    waifuFight(x, w);

  } else if (x.content.startsWith(':-waifu seduce')){
    waifuLewd(x, w);

  } else if (x.content.startsWith(':-waifu next round')){
    waifuNext(x, w);

  } else if (x.content.startsWith(':-waifu loot')){
    waifuEquip(x, w, i);

  } else if (x.content.startsWith(':-waifu dab')){
    waifuDab(x, w);

  } else if (x.content.startsWith(':-waifu surrender')){
    waifuSurrender(x, w);

  } else if (x.content.startsWith(':-waifu help')){
    waifuHelp(x, y);

    //build-a-waifu-------------------------------------------------------------
  } else {
    waifuConstructor(x, w);
  }
}


module.exports = waifuGen;
