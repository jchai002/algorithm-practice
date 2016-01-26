var Node = function(val, nxt) {
  this.val = val;
  this.nxt = nxt;
};

var list = {};
var counter = 1;


while (counter < 7) {
    if (counter === 6) {
      list[counter] = new Node(counter, null);
      counter++;
    } else {
      list[counter] = new Node(counter, counter + 1);
      counter++;
    }

}
