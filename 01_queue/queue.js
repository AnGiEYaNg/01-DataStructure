// function Queue () {
//     var size = 0
//     var arr = []
//     this.enqueue = function (input) {
//         size += 1
//         arr[size] = input

//     }
//     this.dequeue = function () {
//         size -= 1
//         if (size <= -1) {
//             console.log(size)
//             return undefined
//         }
//         else {
//             return arr[arr.length-(Number(size)+1)]
//         }
//     }
//     this.size = function () {
//         if (size <= 0) {
//             return 0
//         }
//         else {        
//             return size
//         }
//     }
// }

// Answer
var Queue=function(){
    this.head=0;
    this.tail=0;
    this.memory=[]
}

Queue.prototype.enqueue = function(value){
    if(typeof(this.tail)==='undefined'){
        console.log(this.tail)
        this.memory[0]=value;
        this.head=0;
        this.tail=0;

    }else{

        thismemory[this.tail+1]=value
        this.tail++
    }
}

Queue.prototype.dequeue = function(value){
    var toReturn=this.memory[this.head]
    this.head++
    return toReturn
}

Queue.prototype.size=function () {
    if(typeof(this.head)!==undefined&&typeof(this.tail)!==undefined){
        return this.tail-this.head+1
    }else{
        return 0;
    }
    
}

/*var Queue=function(){
    this.head=0;
    this.tail=0;
    this.memory=[]
}

Queue.prototype.enqueue = function(value){
    this.memory[this.taill++]=value;
}

Queue.prototype.dequeue = function(value){
    if(this.size()){
    var toReturn=this.memory[this.head]
    this.head++
    //delete this.memory[this.head++];
    return toReturn
}
}

Queue.prototype.size=function () {
    return this.tail-this.head;
    
}*/













