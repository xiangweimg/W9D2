class View {
  constructor(game, figure) {
     // this.el = el, do the same for game
    this.game = game;
    this.figure = figure;
    this.handleClick= this.handleClick.bind(this)
    this.setupBoard();
    this.bindEvents()
  }

  setupBoard() {
    let box = document.createElement('ul'); 
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        const cell = document.createElement('li');
        // <li pos="[]"> </li>
        // .dataset
        cell.dataset.pos = JSON.stringify([i,j]);
        // append the li to the ul
        // .append
        box.append(cell)
      }
    }
    
    // append the ul to the figure or this.el
    this.figure.append(box)
  }
  
  bindEvents() {
    // const cell = document.querySelector(".li")
    this.figure.addEventListener("click", this.handleClick)
  }

  handleClick(e) {
    this.makeMove(JSON.parse(e.target.getAttribute("data-pos")))
    e.target.textContent = this.game.currentPlayer
    e.target.setAttribute("class",this.game.currentPlayer)
  }

  makeMove(square) {  
    this.game.playMove(square)
   if (this.game.isOver()){
    alert("Game Over")
   }
  }

}

module.exports = View;
