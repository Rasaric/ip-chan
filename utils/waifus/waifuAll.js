/*******************************************************************************


Show all Waifus


*******************************************************************************/
function waifuAll(x, w){
  var dump = [];
  if (typeof w[0] !== 'undefined') {
    //sort array by owner-----------------------------------------------------
    var waifusSort =w.sort((a, b) => (a.owner > b.owner) ? 1 : -1);
    let guildNames = waifusSort.map(u => u.owner);
    function removeDuplicates(array) {
      return array.filter((a, b) => array.indexOf(a) === b)
    };

    //assign waifus to their owner--------------------------------------------
    filteredguildNames = removeDuplicates(guildNames);
    for (member in filteredguildNames){
      let memberWaifus = waifusSort.filter(obj => obj.owner == filteredguildNames[member]);
      let allMemberWaifus = memberWaifus.map(u => u.name);
      let valueTest = '**['+ filteredguildNames[member] +']**:\n'+ allMemberWaifus.join(', ');
      dump.push(valueTest);
    }

    //send message------------------------------------------------------------
    x.channel.send(dump.join(', \n'), { split: true });
  } else {
    x.channel.send('no waifus loaded');
  }
}

module.exports = waifuAll;
