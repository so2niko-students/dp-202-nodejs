import { show2, hz as hz2 } from './module1.js';

const hz = 'hz';
const mainVar = 123;

console.log(hz);
console.log(show1);

const apple = {};

apple.size = 'big';
apple.color = 'red';
apple.price = '33';

delete apple.color;

console.log(apple);

//condition is block
if(true){
    let ifVar = 33;
    console.log(ifVar);
}

//loop is block
let i = 0;
for(;i < 10;){
    let ifVar = 43;
    console.log(ifVar + i);
    i++;
}
//while and do while are block

let j = 0;
while(j < 10){
    console.log(j);
    j++;
}

function show1(){
    let one = 1000;
    console.log(one);
    console.log('show1', this);
}

show1();

show2();

// console.log(one);

// console.log(ifVar);

const arrF = () => {

}

const arrF2 = function(){
    
}

class Counter{
    count = 0;
    addCount = function(){
        this.count++;
        console.log(this, this.count);
    }
    addCountArrow = () => {
        this.count++;
        console.log(this, this.count);
    }
};


const data = new Counter();

document.querySelector('.btn-arrow').addEventListener('click', data.addCountArrow);

document.querySelector('.btn-common').addEventListener('click', data.addCount.bind(data));