//min heap

function Node(val){
  this.value=val
  this.child=null
}

function Heap(){
  this.head=null
}

Heap.prototype.insert=function(val){
  newNode= new Node(val)
  if (!this.head){
    this.head=newNode
  }
  else if (this.head<val) {
    //if head is bigger than new value, new node becomes new head
    var newHead= newNode
    newHead.child=this.head
  } else {
    //if head is less than than new value, find the first child node that is bigger than new value
    currentNode=this.head

    while (currentNode.child  && currentNode.child.value < newNode.value){
      currentNode=currentNode.child
    }
    var temp = currentNode.child
    currentNode.child=newNode
    newNode.child=temp
  }
}


var heap = new Heap()
heap.insert(1)
heap.insert(3)
heap.insert(5)
heap.insert(4)

console.log(heap.head)
