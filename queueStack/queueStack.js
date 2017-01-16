/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  this.stack=[];
  

   // add an item to the top of the stack
   this.push = function(value){
    this.stack.push(value);
    return this.stack;
   };

   // remove an item from the top of the stack
   this.pop = function(){
    var val = this.stack.pop()
    return val;

   };

   // return the number of items in the stack
   this.size = function(){
    return this.stack.length;
   };
 }; 
 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(value){
    inbox.push(value)
     
     }
   

   // called to remove an item from the `queue`
   this.dequeue = function(){
    for (var i = 0 ;i < inbox.length; i++){
      outbox.push(inbox.pop())
    }
    return outbox.pop();
    }
  

   // should return the number of items in the queue
   this.size = function(){
    return outbox.length ;
   };
 };