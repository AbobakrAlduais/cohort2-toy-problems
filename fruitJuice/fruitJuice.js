/*
In this toy problem we mix some tasty fruit juice. 
We can add some components with certain amounts. 
Sometimes we pour out a bit of our juice. 
Then we want to find out, which concentrations our fruit juice has.

Example:

You take an empty jar for your juice
Whenever the jar is empty, the concentrations are always 0
Now you add 200 units of apple juice
And then you add 200 units of banana juice
Now the concentration of apple juice is 0.5 (50%)
Then you pour out 200 units 100 100
The concentration of apple juice is still 50%
Then you add 200 units of apple juice again
Now the concentration of apple juice is 0.75, while the concentration
of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)

Complete the functions in order to provide this functionality.
*/

var Jar=function() {

  this.amounts = 0;  //is empty
  this.Alljuice={};

                                // TODO
};

Jar.prototype.getConcentration=function(fruit){
  for (var key in this.Alljuice){
    if (key === fruit){
      var percentage= (this.Alljuice[key] / this.amounts) * 100
      return percentage +"%"
    }
  }
  return 0;
};

Jar.prototype.add=function(units,fruit){
  var found = false;
  for (var key in this.Alljuice){     // Check if we add this fruit before
    if (key === fruit){
      this.Alljuice[key] += units;   // apdate fruit units
      found = true; 
    }
  }
  if(!found){
    this.Alljuice[fruit]=units;   // if not found add this fruit ;
  }
  
  this.amounts+=units;     // update amounts
};

Jar.prototype.getTotalAmount=function(){
  return this.amounts;
}

/*
These are some tests:
var jar = new Jar();
jar.getConcentration('apple');//should be 0
jar.add(200, 'apple');
jar.getTotalAmount(); //should be 200
jar.getConcentration('apple'); //should be 1 or 100%
jar.add(200, 'banana');
jar.getTotalAmount();// should be 400
jar.getConcentration('apple'); //should be 0.5 or 50%
jar.getConcentration('banana'); //should be 0.5 or 50%
*/