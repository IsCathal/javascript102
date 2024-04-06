// javascript many things can be truthy or falsy, but undefined is always falsy.
//?? is a relatively new operator that was introduced in ES2020. It allows you to provide a default value for a variable that is undefined.

const x = '';
const y = x ?? 'default value';

console.log(y); // default value
//?? only null or undefined will trigger the default value. beacuse null and undefined are falsy values.