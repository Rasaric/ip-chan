/*******************************************************************************


Emote Help


*******************************************************************************/

function emoteHelp(x, y){
  //required--------------------------------------------------------------------
  let vault = y.guilds.get('579043380332331030');

  //list all emojis in vault----------------------------------------------------
  const emojiList = vault.emojis.map((e) => e + ' | ' +e.name).join('\n');
  x.channel.send(emojiList, { split: true });
}

module.exports = emoteHelp;
