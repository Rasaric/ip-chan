/*******************************************************************************


Extra emotes


*******************************************************************************/

function extraEmotes(x, y){

  //prepare string--------------------------------------------------------------
  let msg =x.content.toLowerCase();
  toSend = msg.replace(/:/g, '');

  //find emote------------------------------------------------------------------
  let sendEmote = y.emojis.find(emoji => emoji.name === toSend);

  //if not empty, send emote----------------------------------------------------
  if (sendEmote !== null) {
    x.channel.send(sendEmote.toString());
  }
}

module.exports = extraEmotes;
