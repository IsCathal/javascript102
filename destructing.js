
const dog = {
    name: 'Max',
    age: 2,
    bark() {
        console.log('woof');
    }
}


// can change the name of the variable
const { name: test, age } = dog;
console.log(test, age); // Max 2

const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;

console.log( rest); // 1 2 [3, 4, 5]
