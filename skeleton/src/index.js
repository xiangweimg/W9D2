const View = require("./ttt-view.js") // require appropriate file
const Game = require("./game.js") // require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const figure = document.getElementsByClassName("ttt");

  let game = new Game();
  

  window.view = new View(game, figure);

});
