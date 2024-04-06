//A higher order function is a function that takes a
// function as an argument, or returns a function. They are commonly used in functional programming, and are a powerful tool for abstracting away complexity.

// function Declaration
//hoisted
//can be called before it is defined
//declartions for global scope
function sayHi(message) {
  return 'Hi' + message;
}

//function expression]
//not hoisted
//any code that comes before it will not be able to access it
//expressions for local scope
const sayHello = function (message) {
  return 'Hello' + message;
};

//higher order function
// a function that takes a function as an argument
//or returns a function
function funWrapper(callback)   {
    callback('Called by funWrapper');
}
funWrapper(sayHi);

funWrapper(m => console.log(m));

function funWrapper2() {
    return function(message) {
        return "Said" + message;
    };
}