const obj1 = {
    first: 'a',
    second: 'b',
    third: 'c',
}

const obj2 = {
    third: 'd',
    fourth: 'e',
}

const full = {...obj1, ...obj2};

console.log(full); // { first: 'a', second: 'b', third: 'd', fourth: 'e' }

const obj3 = {
    // spread operator
    //can add first object here
    //the order matters
    ...obj1,
    third: 'd',
    fourth: 'e',
}

console.log(obj3)