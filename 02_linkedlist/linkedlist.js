// var count=0;

// function Node(value){
// 	// var next=null;
// 	// var previous=null;
// 	// var position=null;

// 	this.value=value;
// 	this.next=null;
// 	this.previous=null;
// 	// this.position=position;
// }

// function LinkedList(){
// 	var head=undefined;
// 	var tail=undefined;


// 	this.head=head;
// 	this.tail=tail;
// }
// 	LinkedList.prototype.addToHead=function(value){
// 		var newNode= new Node(value);
// 		if(this.head===undefined&&this.tail===undefined){
// 			this.head===newNode;
// 			this.tail===newNode;
// 		}else{
// 			newNode.next=this.head;
// 			this.head.previous=newNode;
// 			newNode.previous=null;
// 			this.head=newNode;

// 		}	
// 	}

// 	LinkedList.prototype.addToTail=function(value){
// 		var newNode =new Node(value);
// 		if(this.tail===undefined){
// 			this.tail=newNode;
// 			this.head=newNode;
// 		}else{
// 			newNode.previous=this.tail;
// 			// console.log(this.tail);
// 			// console.log(newNode.next);
// 			this.tail.next=newNode;
// 			newNode.next=null;
// 			this.tail=newNode;
// 		}
// 	}

// 	LinkedList.prototype.removeHead=function(){
// 		var oldNode=this.head;
// 		if(this.tail===undefined){
// 			return oldNode.value;

// 		}else{
// 		console.log(oldNode)
// 		this.head=this.head.next;

// 		this.head.previous=null;

// 		return oldNode.value;
// 	}
// 	}

// 	LinkedList.prototype.search=function(){

// 	}




// // linkedList = new LinkedList();
// // node = new Node("test");
// // console.log(Object.keys(linkedList))



//Answer
var LinkedList = function() {
  this.head
  this.tail
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















