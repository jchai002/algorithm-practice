function Node(val){
  this.value=val
  this.leftChild=null
  this.rightChild=null
}

function BinarySearchTree(){
  this.root=null
  this.size=0
}

BinarySearchTree.prototype.insert=function(val){
  var newNode=new Node(val)
  if (!this.root){
    this.root=newNode
    this.size++
  } else {
    var currentNode=this.root
    while(currentNode){
      if (currentNode.value>val){

        if (!currentNode.leftChild) {
          currentNode.leftChild=newNode
          this.size++
          return
        } else {
          currentNode=currentNode.leftChild
        }

      }
      else if(currentNode.value<val) {

        if (!currentNode.rightChild) {
          currentNode.rightChild=newNode
          this.size++
          return
        } else {
          currentNode=currentNode.rightChild
        }
      } else {
        return
      }
    }
  }

}

var tree=new BinarySearchTree();
tree.insert(4)
tree.insert(3)
tree.insert(6)
tree.insert(5)
tree.insert(8)
tree.insert(9)
console.log(tree.root.rightChild)
