//MAP
const arr = [{}, 1, 2, 3, undefined];

arr[20] = 'D';
arr[-20] = 'D';
arr[3.14] = 'D';
arr['note'] = 'Death';
arr[Infinity] = 'Infinity';

arr.length = 123;

const arr2 = arr.map(el => el);

arr2[0].name = 'Hello';

console.log(arr, arr2);

//FILTER
const arr3 = arr.filter(el => el);

console.log(arr3);

//FOREACH
arr.forEach(console.log);

//FIND

console.log(arr.find((el, i) => {
    console.log(i);
    return typeof el == 'object';
}));

//FINDINDEX
const loter = [123, 124, 124, 545, 345, 454, 123, 23, 434, 654, 123, 55, 445, 3423, 123, 556, 56, 123];
const num = 3;
let nums = 0;
const winner = 123;
console.log(loter.findIndex((el) => {
    if(el === winner){
        nums++;
        if(nums === num){
            return true;
        }
    }
}));

//EVERY

console.log('Loter is positive: ', loter.every((el, i) => {
    console.log(i, el);
    return el > 99;
}));

//SOME

console.log('Loter has positive: ', loter.some((el, i) => {
    console.log(i, el);
    return el < 100;
}));