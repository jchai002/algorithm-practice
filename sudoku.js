var _ = require('lodash');

function Sudoku(input) {
  this.board = input.split('');
  this.rows=[[],[],[],[],[],[],[],[],[]];
  this.cols=[[],[],[],[],[],[],[],[],[]];
  this.boxes=[[],[],[],[],[],[],[],[],[]];
}

Sudoku.prototype.solve = function(board) {
  if (!this.valid) {
    return false;
  }

  if (this.solved) {
    return this.board;
  }

  //recrusion
};

Sudoku.prototype.solved = function(board) {
  return !_.includes(board, '-');
};

Sudoku.prototype.valid = function() {
  this.noDuplicates(this.rows) && this.noDuplicates(this.cols) && this.noDuplicates(this.boxes);
};

Sudoku.prototype.noDuplicates = function(set) {
  for (var i = 0; i < set.length; i++) {
    var subset = set[i];
    if (subset.length != _.uniq(subset).length) {
      return false;
    }
  }
  return true;
};

Sudoku.prototype.rowFor = function(index) {
  return Math.floor(index/9);
}

Sudoku.prototype.colFor = function(index) {
  return index % 9;
}

Sudoku.prototype.boxFor = function(index) {
  return (Math.floor(this.colFor(index)/3))+(Math.floor(this.rowFor(index)/3)*3);
}

Sudoku.prototype.prepBoard = function(){
  for (var i=0;i<this.board.length;i++) {
    this.rows[this.rowFor(i)].push(this.board[i])
    this.cols[this.colFor(i)].push(this.board[i])
    this.boxes[this.boxFor(i)].push(this.board[i])
  }
}

s = new Sudoku("1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--");
s.prepBoard();
console.log(s)
