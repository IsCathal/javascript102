// prototype chain is a mechanism that allows objects to inherit properties and methods from other objects

const animal = { 
    dna: 123,
    legs: { 
        front: 2, back: 2         
    },
    sleep() {
        console.log('zzz');
    },
}


const  dog = { 
    bark() {
        console.log('woof');
    }

}
Object.setPrototypeOf(dog, animal);

console.log(dog.dna); // {}
console.log(Object.getPrototypeOf(dog))
