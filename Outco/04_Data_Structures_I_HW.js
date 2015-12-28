 /**********************************************************************************
  *                                 Homework IV                                    *
  *                                                                                *
  *  Problem: Linked List                                                          *
  *                                                                                *
  *  Prompt: Create a Linked List class/constructor.                               *
  *          Name it LinkedList (js) or Linked_List(rb/py).                        *
  *                                                                                *
  *          Part 1: Create a node class for your LinkedList.                      *
  *                  Your node class will take an integer value and output         *
  *                  and output and object with the following properties:          *
  *                                                                                *
  *                  node.value: input value                                       *
  *                  node.next: a pointer to the next value (initiall null)        *
  *                                                                                *
  *                  Example: { value: 1, next: null }                             *
  *                                                                                *
  *          Part 2: Create the LinkedList class.                                  *
  *                  It should contain the following properties:                   *
  *                                                                                *
  *                  head: pointer to the head node                                *
  *                  tail: pointer to the tail node                                *
  *                  length: number of nodes in the linked list                    *
  *                                                                                *
  *                  The LinkedList should also contain the following properties   *
  *                                                                                *
  *                  append: function that adds a node to the tail                 *
  *                                                                                *
  *                  insert: function that takes in two values, one to be inserted *
  *                          and one to search.  It searches the list for the      *
  *                          search value, and if found, adds a new node with the  *
  *                          insert value before the node with the search value.   *
  *                                                                                *
  *                  delete: function that removes a node at a specified location, *
  *                          with a default action of deleting the head            *
  *                                                                                *
  *                  contains: function that checks to see if a value is contained *
  *                            in the list                                         *
  *                                                                                *
  *  Input:  N/A                                                                   *
  *  Output: A LinkedList instance                                                 *
  *                                                                                *
  *  What are the time and auxilliary space complexities of the various methods?   *
  *                                                                                *
  **********************************************************************************/

function Node(val,next){
  this.value=val;
  this.next=next;
}

function LinkedList(){
  this.head=null;
  this.tail=null;
  this.length=0;
}

LinkedList.prototype.append= function(val) {
    var newNode = new Node(val,null);
    if (!this.head){
      this.head=newNode;
      this.tail=newNode;
    }else{
      this.tail.next=newNode;
      this.tail=newNode;
    }
    this.length++
}

LinkedList.prototype.insert= function(searchVal,insertVal) {
    var currentNode=this.head
    while(currentNode.next!== null){
      if (currentNode.next.value===searchVal){
        newNode= new Node(insertVal,currentNode.next)
        currentNode.next=newNode
        this.length++
        return
      } else {
        currentNode = currentNode.next
      }
    }
    console.log("search value not found!")
}

LinkedList.prototype.delete= function(location) {
    if (location){
      if (location<this.length){
        var currentNode=this.head
        var prevNode=null
        var pointer=0
        while(pointer!==location){
            prevNode=currentNode
            currentNode = currentNode.next
            pointer++
        }
        prevNode.next=currentNode.next
        currentNode=null
        this.length--
      }
    } else {
      this.head=this.head.next
      this.length--
    }
}

LinkedList.prototype.contains=function(val){
  var currentNode=this.head
  while (currentNode){
    if (currentNode.value===val){
      return true
    }
    currentNode=currentNode.next
  }
  return false
}

var list = new LinkedList

list.append("a")
list.append("b")
list.append("c")
list.append("d")

console.log(list.contains("e"))
