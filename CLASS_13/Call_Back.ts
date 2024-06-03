// function greet(askName :()=>void){  function ki type esy banaty hen 

// }

function greeting(askName:()=>void){
 console.log(`hello greet`);// 1st 
 askName()
}

function askName(){
    console.log(`Entre your name`);
}
// greeting(askName) // hello greet call back func
greeting(askName) // hello greet and entre your name



function newFunc(name:string,){
    console.log(`Hello `);
    
}