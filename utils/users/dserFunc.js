/*******************************************************************************


Dser function


*******************************************************************************/
function dserFunc(x, y) {
  x.channel.send("", {
    files: ["./images/simp.png"]
  });
}

module.exports = dserFunc;
