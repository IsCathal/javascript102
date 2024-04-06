//create a function that takes an array of numbers and returns an array of the cumulative sum of the numbers

const sum = [1,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function cumulativeSum(arr) { 

    let  sum = 0;
    arr.forEach(function(element)
    {
    sum += element;
    });

    const arr2 =[sum];
    return arr2;
        }

console.log(cumulativeSum(sum))

//use reduce

const sum2 = [1,3,4,5].reduce((acc, cur) => acc + cur, 0);

//reduce(acc, cur)
//constains 2 values accumilated and current value

//=> acc + cur, 0) 
// loop over the array want to add curent value to accumated value, 0 as second argumnet when to stop