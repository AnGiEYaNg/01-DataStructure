// function Hash () {
//     this.numBuckets = 25
//     this.hashTable = []
//     for (var i=0;i<25;i++) {
//         this.hashTable[Number(i)] = new LinkedList
//     }


// }

// Hash.prototype._hash = function (input) {
//     var sum = 0
//     for (var i=0;i<input.length;i++) {
//         sum += input.charCodeAt(i);
//     }
//     return sum % 25
// }

// Hash.prototype.set = function (key, value) {
//     if (typeof key !== 'string') {
//         throw "Keys must be strings"
//     }
//     else {
//         var objHash = this._hash(key)
//         var obj = {}
//         obj[key] = value
//         this.hashTable[objHash].addToHead(obj)
//     }

// }
// Hash.prototype.get = function (inp) {
//     var objHash = this._hash(inp)
//     for (i in this.hashTable[objHash]) {
//         if (typeof this.hashTable[objHash][i] == 'object') {
//             if (this.hashTable[objHash][i].value.hasOwnProperty(inp)) {
//                 return this.hashTable[objHash][i].value[inp]
//             }
//         }
//     }
// }
// Hash.prototype.hasKey = function (inp) {
//     var objHash = this._hash(inp)
//     for (i in this.hashTable[objHash]) {
//         if (typeof this.hashTable[objHash][i] == 'object') {
//             if (this.hashTable[objHash][i].value.hasOwnProperty(inp)) {
//                 return true
//             }
//             else {
//                 return false
//             }
//         }
//     }
// }

// var LinkedList = function() {
//   this.head
//   this.tail
// }

// LinkedList.prototype.empty = function() {
//   return typeof this.head === 'undefined' && typeof this.tail === 'undefined'
// }

// LinkedList.prototype.addToTail = function(value) {
//   var newNode = new Node(value)
//   //empty
//   if(this.empty()) {
//     this.head = newNode
//     this.tail = newNode
//   } else {
//     this.tail.next = newNode
//     newNode.previous = this.tail
//     this.tail = newNode
//   }
// }

// LinkedList.prototype.addToHead = function(value) {
//   var newNode = new Node(value)
//   if(this.empty()) {
//     this.head = newNode
//     this.tail = newNode
//   } else {
//     this.head.previous = newNode
//     newNode.next = this.head
//     this.head = newNode
//   }
// }

// LinkedList.prototype.removeHead = function() {
//   if(this.empty()) return
//   var toReturn = this.head
//   if(this.head === this.tail) {
//     this.head = undefined
//     this.tail = undefined
//     return toReturn.value
//   }
//   this.head = this.head.next
//   this.head.previous = null
//   return toReturn.value
// }

// LinkedList.prototype.removeTail = function() {
//   if(this.empty()) return
//   var toReturn = this.tail
//   if(this.head === this.tail) {
//     this.head = undefined
//     this.tail = undefined
//     return toReturn.value
//   }
//   this.tail = this.tail.previous
//   this.tail.next = null
//   return toReturn.value
// }

// LinkedList.prototype.search = function(value) {
//   var _search=function(pos){
//     if(typeof value ==="function"){
//       if(value(pos)) return pos.value;
//     }
//     if(pos.value == value){
//       return pos.value;
//     }else if(!pos.next){
//       return null;
//     }else{
//       return _search(pos.next);
//     }

//   }
//   return _search(this.head);
// }

// var Node = function(value) {
//   this.value = value
//   this.next = null
//   this.previous = null
// }

var NUMBUCKETS = 25

var Hash = function() {
  this.numBuckets = NUMBUCKETS
  this.arr = []
  for(var i = 0; i < this.numBuckets; i++) {
    this.arr[i] = new LinkedList()
  }
}

Hash.prototype._hash = function(key) {
  var sum = 0;
  for (var i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets;
}

Hash.prototype.set = function(key, val) {
  if(typeof key !== 'string') throw new TypeError('Keys must be strings')
  var bucket = this.arr[this._hash(key)]
  bucket.addToHead({
    key: key,
    val: val
  })
}

Hash.prototype.get = function(key) {
  //hash the key
  //index into the array at that key
  //traverse the linked list looking for the node
  var bucket = this.arr[this._hash(key)]
  var hashNode = bucket.search(function(node) {
    return node.value.key === key
  })
  return hashNode.val
}


Hash.prototype.hasKey = function(key) {
  return !!this.get(key)
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
