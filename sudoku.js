var _ = require('lodash');

function Sudoku(input) {
  this.board = input.split('');
  this.rows = [[], [], [], [], [], [], [], [], []];
  this.cols = [[], [], [], [], [], [], [], [], []];
  this.boxes = [[], [], [], [], [], [], [], [], []];
}

Sudoku.prototype.solve = function(board) {
  this.prepBoard();
  if (!this.valid()) {
    return false;
  }

  if (this.solved()) {
    return this.board.join('');
  }
  var nextEmptyIndex = this.board.indexOf('-');
  for (var n = 1; n < 10; n++) {
    this.board[nextEmptyIndex] = String(n);
    console.log(formatBoard(this.board.join('')));
    var newBoard = new Sudoku(this.board.join(''));
    var solution = newBoard.solve();
    if (solution) {
      return solution;
    }
  }
  return false;
};

Sudoku.prototype.solved = function() {
  return !_.includes(this.board, '-');
};

Sudoku.prototype.valid = function() {
  return this.noDuplicates(this.rows) && this.noDuplicates(this.cols) && this.noDuplicates(this.boxes);
};

Sudoku.prototype.noDuplicates = function(set) {
  for (var i = 0; i < set.length; i++) {
    var lib = {};
    var subset = set[i];
    for (var j = 0; j < subset.length; j++) {
      if (subset[j] != '-') {
        if (lib[subset[j]]) {
          return false;
        } else {
          lib[subset[j]] = true;
        }
      }
    }
  }
  return true;
};

Sudoku.prototype.rowFor = function(index) {
  return Math.floor(index / 9);
};

Sudoku.prototype.colFor = function(index) {
  return index % 9;
};

Sudoku.prototype.boxFor = function(index) {
  return (Math.floor(this.colFor(index) / 3)) + (Math.floor(this.rowFor(index) / 3) * 3);
};

Sudoku.prototype.prepBoard = function() {
  for (var i = 0; i < this.board.length; i++) {
    this.rows[this.rowFor(i)].push(this.board[i]);
    this.cols[this.colFor(i)].push(this.board[i]);
    this.boxes[this.boxFor(i)].push(this.board[i]);
  }
};

var formatBoard = function(string) {
  var result=''
  var begin=0
  var end=1
  while (end < 82) {
    result+=string.slice(begin,end)+ ' '
    if (end%9===0) {
      result+= '\n'
    }
    begin++
    end++
  }
  return result
};

s = new Sudoku('3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--');

var start = new Date().getTime();
console.log(formatBoard(s.solve()));
var end = new Date().getTime();
var time = end - start;
console.log('Execution time:',time+'ms');
