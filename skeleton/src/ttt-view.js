class View {
  constructor(game, figure) {
     // this.el = el, do the same for game
    this.game = game;
    this.figure = figure;
    
    this.setupBoard();
  }

  setupBoard() {
    let box = document.createElement('ul'); 
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        const cell = document.createElement('li');
        // <li pos="[]"> </li>
        // .dataset
        cell.dataset.pos = [i,j]
        // append the li to the ul
        // .append
        box.append(cell)
      }
    }
    
    // append the ul to the figure or this.el
    this.figure.append(box)
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
