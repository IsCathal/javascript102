//Call Stack - short term memory for functions
//Heap - long term memory for variables

function outer() {
    let x = 1;
    function inner() {
       x = x +1;
    }
    return inner();
}
const incrementX = outer(); // incrementX is now a reference to inner.
console.log(incrementX()); // This will increment x to 2 and print it if you choose to return x in inner.
console.log(incrementX());