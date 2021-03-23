// REDUCE
const nums = [1, 2, -3, 5, 6, -3, 11, 22, -4, -100, 45, 77];
let sum = 0;

for(let i = 0; i < nums.length; i++){
    sum += nums[i];
}

// const sum2 = nums.reduce((acc, el, i, arr) => {
//     console.log(acc, el, i, arr);
//     return acc + el;
// });

const sum2 = nums.reduce((acc, el, i, arr) => {
    console.log(`acc: ${ acc }, el: ${ el }, i: ${ i }, arr: ${ arr }`);
    acc.array = arr;

    if(el > 0) acc.positive++;
    if(el < 0) acc.negative++;
    if(el == 0) acc.zero++;

    return acc;
}, { positive : 0, negative : 0, zero : 0 });

console.log(sum2);