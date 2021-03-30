//timeOut
const log = counter => {
    counter.count++;
    console.count('timeOut');
    if(counter.count > 5){
        for(let i = 1; i < 1000; i++){
            clearInterval(i);
        }        
    }else{   
        setTimeout(log, 2000, counter);
    }
}

// const intervalID = setTimeout(log, 2000, { count : 0 });

// console.log(intervalID);

//interval
const prop = { 
    time : 10,
    id : 0 
};


prop.id = setInterval(_ => {
    if(_.time == 0){
        _.time = 10;
    }
    
    console.clear();
    console.log(_.time);
    
    _.time--;

}, 1000, prop);

