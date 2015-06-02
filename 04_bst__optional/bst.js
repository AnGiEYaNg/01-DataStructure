function BinarySearchTree(num){
	this.head=num;

}

BinarySearchTree.prototype.insert=function(num){
	var node=num;

}
BinarySearchTree.prototype.contains=function(){
	
}
BinarySearchTree.prototype.depthFirstForEach=function(){
	
}
BinarySearchTree.prototype.breadthFirstForEach=function(){
	
}
BinarySearchTree.prototype.size=function(){
	console.log(num)
	return num.length;
	
}

var LinkedList = function() {

}

LinkedList.prototype.empty = function() {
  return typeof this.head === 'undefined' && typeof this.tail === 'undefined'
}

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value)
  //empty
  if(this.empty()) {
    this.head = newNode
    this.tail = newNode
  } else {
    this.tail.next = newNode
    newNode.previous = this.tail
    this.tail = newNode
  }
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value)
  if(this.empty()) {
    this.head = newNode
    this.tail = newNode
  } else {
    this.head.previous = newNode
    newNode.next = this.head
    this.head = newNode
  }
}

LinkedList.prototype.removeHead = function() {
  if(this.empty()) return
  var toReturn = this.head
  if(this.head === this.tail) {
    this.head = undefined
    this.tail = undefined
    return toReturn.value
  }
  this.head = this.head.next
  this.head.previous = null
  return toReturn.value
}

LinkedList.prototype.removeTail = function() {
  if(this.empty()) return
  var toReturn = this.tail
  if(this.head === this.tail) {
    this.head = undefined
    this.tail = undefined
    return toReturn.value
  }
  this.tail = this.tail.previous
  this.tail.next = null
  return toReturn.value
}

LinkedList.prototype.search = function(value) {
	var _search=function(pos){
		if(typeof value ==="function"){
			if(value(pos)) return pos.value;
		}
		if(pos.value == value){
			return pos.value;
		}else if(!pos.next){
			return null;
		}else{
			return _search(pos.next);
		}

	}
  return _search(this.head);
}

var Node = function(value) {
  this.value = value
  this.next = null
  this.previous = null
}