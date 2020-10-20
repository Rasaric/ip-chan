/*******************************************************************************


waifu Loader


*******************************************************************************/
//required----------------------------------------------------------------------
const trapList = require("../../JSON/trapList.json");
const Trap = require('./itemBuilder');

function itemLoad (i){
  for(let trap in trapList.trap){
    trap[trap] = i.push(new Trap(
      trapList.trap[trap].name,
      trapList.trap[trap].url,
      trapList.trap[trap].combat,
      trapList.trap[trap].dodge,
      trapList.trap[trap].hp,
      trapList.trap[trap].lewd,
      trapList.trap[trap].pure,
      trapList.trap[trap].flavor)
    );
  }
  console.log('traps loaded!')
}

module.exports = itemLoad;
