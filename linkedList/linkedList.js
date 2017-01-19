/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
	// this.storg = {};
	this.head = null;
	this.tail = null; 
	this.size = 0;  //to loop over list
  //fill me in!
};

LinkedList.prototype.List= function(value) {
  var list = {};

  list.value = value;
  list.next = null;

  
  return list;
};

LinkedList.prototype.addToTail = function(value){
	if(this.head === null){     //If there is no head 
		this.head = this.List(value);  // creat head
		this.tail = this.head;  //make the tail equal head
		this.size++;
		// return this.tail.value;
		return this.tail;
	}
	else{
		var oldTail = this.tail;    //save the old tail
		this.tail = this.List(value); // add new tail
		oldTail.next = this.tail;  //make the old tail point to the new tail
		this.size++;
		// return this.tail.value;
		return this.tail;  //return tail
	}

}
LinkedList.prototype.removeHead = function(){
	var oldHead = this.head;
	var newHead = this.head.next; //make the object next head the new head
	this.head = newHead;
	this.size--;
	return oldHead;  //return deleted head;
}
LinkedList.prototype.contains = function(value){
	var current = this.head         //start from head 
	for(var i = 0; i < this.size; i++){  //loop over list 
		if (current.value === value ){  
			return true;
		}
		else {
			current = current.next;   //go to the next list
		}
	}
	return false;

} 





//write methods here!