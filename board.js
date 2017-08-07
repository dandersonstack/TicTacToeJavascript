/*
Board
-draw
-moveAvailable
-makeMove
-checkWinner
-checkTie
*/

class Board{
  constructor(){
    this.board = [[0,0,0],[0,0,0],[0,0,0]];
  }

  draw(){
    console.log('--------');
    console.log(`| ${this.board[0][0]} | ${this.board[0][1]} | ${this.board[0][2]} |`);
    console.log(`| ${this.board[1][0]} | ${this.board[1][1]} | ${this.board[1][2]} |`);
    console.log(`| ${this.board[2][0]} | ${this.board[2][1]} | ${this.board[2][2]} |`);
    console.log('--------');

  }

  moveAvailable(position){
    if(this.board[position[0]][position[1]] === 0) {
      return true
    } else {
      return false;
    }
  }

  makeMove(position, player){
    this.board[position[0]][position[1]] = player;
  }

  checkTie(){
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if(this.board[i][j] !== 0) {
          return false;
        }
      }
    } return true;
  }

  checkWinner(){
    return checkVertical || checkHorizonal || checkDiagonal;
  }

  checkVertical(){
    for(let i = 0; i < 3; i++) {
      if(this.board[i][0] === this.board[i][1] === this.board[i][2] !== 0) {
        return true;
      }
    } return false;
  }

  checkHorizonal(){
    for(let i = 0; i < 3; i++) {
      if(this.board[0][i] === this.board[1][i] === this.board[2][] !== 0) {
        return true;
      }
    } return false;
  }

  checkDiagonal(){
    if(this.board[0][0] === this.board[1][1] === this.board[2][2] !== 0 ||
       this.board[2][0] === this.board[1][1] === this.board[0][2] !== 0 ||) {
      return true;
    } return false;
  }
}