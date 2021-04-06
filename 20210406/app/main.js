export function sum(...nums){
    const checkNum = nums.some(n => isNaN(n * 1));
    if(checkNum) return {
        status : 'failed',
        reason : instructions('Not a number')
    }

    if(nums.length < 2) return {
        status : 'failed',
        reason : instructions('Not enough arguments')
    }
    return nums.reduce((acc, n) => acc + n);
}

function instructions(name){
    switch(name){
        case 'Not a number' : {
            return 'All parameters must be numbers';
        }
        case 'Not enough arguments':{
            return 'You need minimum 2 arguments';
        }
        default : {
            'Some error';
        }
    }
}

// export sum;