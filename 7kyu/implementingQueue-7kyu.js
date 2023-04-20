
// Queues are linear collections of objects that can be inserted and removed in a FIFO (first in, first out) manner.

// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.
// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.

// Wait, what?
// To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
// To dequeue an item means means to remove the item at the front, or head, of the queue.
// In a queue, we remove the item the least recently added.
// JavaScript Methodology
// Queues can be implemented in JavaScript using arrays.

// You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.

// As long as the tests pass, go for it!




// var Queue = function() {
//     this.head = 0;
//     this.tail = 0;
//     this.storage = [];
// };

// Queue.prototype.enqueue = function(item) {
//     this.storage[this.tail++] = item;
// };

// Queue.prototype.dequeue = function() {
//     if (this.size()) {
//         var result = this.storage[this.head];
//         this.head++;
//         return result;
//     }
// };

// Queue.prototype.size = function() {
//     return this.tail - this.head;
// };

// push and shift (add at the end, remove from the top)

class Queue{
    constructor(){
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }
    

    enqueue(item){
        this.storage[this.tail] = item;
        this.tail++
        
     }

     dequeue(){
    let remove = this.storage[this.head]; 
    delete this.storage[this.head];
    this.head++ 
    return remove
     }
}




// let Queue = function() {
//     this.storage = {}
//     this.head = 0;
//     this.tail = 0; 
//     // implement your Queue constructor here
//   };
  
  
  
//   Queue.prototype.enqueue = function(item) {
//     this.storage[this.tail] = item
//     this.tail++
   
//     // add item to the queue
//   };
  
//   Queue.prototype.dequeue = function() {
//     let remove = this.storage[this.head]; 
//     delete this.storage[this.head];
    
//     this.head++ 
//     return remove
//     // remove item from the front of the queue and return its value
//   };
  
//   Queue.prototype.size = function() {
//     return Object.keys(this.storage).length
  
//     // return number of items in queue so far
//   };


;

const queue = new Queue();

queue.enqueue('hello')
queue.enqueue('nice')
queue.enqueue('sachimo')
queue.dequeue()
queue.dequeue()
  console.log( queue )




