//Objects

// Everything in JavScript is an object with 3 small exceptions (Strings, numbers and booleans).
// Dates, Maths, Regular Expressions, Arrays, Functions, Object. 

// Objects are variables 

// Objects have primitive value and primitive data type
// Primtive value

//var x = 5;
//x = 6;
//var myObject = {

//}

var myObjects = {
    firstName: 'tom',
    lastName: 'thomson',
    age: 22,
    isMarried: false,

    displayFullName: function() { return this.firstName + ' ' + this.lastName; }
};
var name = myObject.displayFullName;
console.log(name.toString());

