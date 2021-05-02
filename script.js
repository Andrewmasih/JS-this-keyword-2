let person = {
  firstName: "judy",
  lastName: "smith",    
    hello: function() {
    /* it is the same as writting 'personfirstName' and 'person.lastName' but what if someone changes the name of the object and forgets to update the code in the 'hello' function?*/
    console.log (`my name is:${this.firstName}${this.lastName}`);
    /*notice the 'template literal and 'string interpolation'*/

    /*the 'this' keyword makes sure that the correct data is shown even in that senario*/

  }
   
};

person.hello();
console.log(this); /* this will print out the 'global object', it will return you the enviroment window is the 'global object'*/