const att = [1, 2, 3, 4, 5];

const arr2 = Array(100).fill(0).map((_, i) => i + 1);

console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ... 100]

const arr3 = [...Array(100).keys()]

for(const val of arr3) {
    console.log(val);
}   


for(const {i, val} of arr3.entries()) {
    console.log(i, val);
}   

// for each element in the array, do something
arr.forEach();
//map returns a new array
arr.map();
//filter returns a new array
arr.filter();
arr.reduce();
//find to find the first element that matches the condition
arr.find();
arr.findIndex();

arr.some();
