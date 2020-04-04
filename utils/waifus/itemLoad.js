/*******************************************************************************


waifu Loader


*******************************************************************************/
//required----------------------------------------------------------------------
const lootList = require("../../JSON/lootList.json");
const Item = require('./itemBuilder');

function itemLoad (i){
  for(let loot in lootList.loot){
    loot[loot] = i.push(new Item(
      lootList.loot[loot].name,
      lootList.loot[loot].url,
      lootList.loot[loot].combat,
      lootList.loot[loot].dodge,
      lootList.loot[loot].hp,
      lootList.loot[loot].lewd,
      lootList.loot[loot].pure,
      lootList.loot[loot].flavor)
    );
  }
  console.log('items loaded!')
}

module.exports = itemLoad;
