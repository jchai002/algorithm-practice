//min heap

function Node(val) {
  this.value = val;
  this.child = null;
}

function Heap() {
  this.head = null;
}

Heap.prototype.insert = function(val) {
  newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
  }
  else if (this.head < val) {
    //if head is bigger than new value, new node becomes new head
    var newHead = newNode;
    newHead.child = this.head;
  } else {
    //if head is less than than new value, find the first child node that is bigger than new value
    currentNode = this.head;

    while (currentNode.child && currentNode.child.value < newNode.value) {
      currentNode = currentNode.child;
    }
    var temp = currentNode.child;
    currentNode.child = newNode;
    newNode.child = temp;
  }
};

Heap.prototype.min = function() {
  return this.head;
};

Heap.prototype.remove = function(val) {
  // console.log('initializing value search, matching value will be removed')
  //if head is the search value
  if (this.head.value === val) {
    // console.log('removing head node with value of', val)
    this.head = this.head.child;
    // console.log('new head has value of', this.head.value)
  } else {
    var currentNode = this.head;
    //keep traversing down the heap while child is not null
    while (currentNode.child) {
      //if the child matches search value
      if (currentNode.child.value === val) {
        // console.log('removing node with value of', currentNode.child.value)
        currentNode.child = currentNode.child.child;
      }
      //prevent current node from being null and crashing the while loop
      if (currentNode.child) {
        currentNode = currentNode.child;
      }
    }
  }
    // console.log('finished search, no more matching value in heap')
}
