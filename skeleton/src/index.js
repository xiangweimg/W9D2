const View = require("./ttt-view.js") // require appropriate file
const Game = require("../ttt_node/game.js") // require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const figure = document.getElementsByClassName("ttt");

  let game = new Game();
  

  let view = new View(game, figure[0]);

//   const ul = document.querySelector("ul")
//   ul.addEventListener("click",e => {
//   a.handleClick(e)
// });
const ul = document.querySelector("ul")
ul.addEventListener("click", e=>{
   view.handleClick(e);
})
});
