//let d = new Date();
//let time = d.toLocaleTimeString(); 
//console.log(time);

function printtime() {
    let d = new Date(); 
    let time = d.toLocaleTimeString(); 
    console.log(time);
    setTimeout(printtime, 1000);
}

printtime();