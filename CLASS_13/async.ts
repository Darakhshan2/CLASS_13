// asychronus : sara work distribute krden gy alag alag mn thread mn aik pr hi sara load nh hoga 
// synchronous : single threaded aik wqt mn aik kam hoga wo complete hoga usky bad dosra or phr esy hi aik threadpr saraload
// javascript interperet krti hai phly aik statement ko execute kry gy then next statement 

// synchoronus
// single thread : thread esi jaga hai jo code ko execution krwata h
console.log("first"); // 1st statement

for (let i = 1; i <= 10; i++) {
    console.log("third");
}

console.log("second");

//asynchronous 
// jo kam delay ly rha hoga usy chor kr next dekhy ga

console.log("1ST");

// BUILT IN asynchronous
setTimeout(() => {
    console.log();
}, 30000)

console.log("3RD");

// hamaari thread aik series sy chaly gi usky bad asynchronous pr aye gi bad  mn chahe time 0 second ka hi q na ho 
// web api ko function dy dia to call stack hota hai free wo next line koo reada krnt ahai 

//callstack mn agr asynchronous code jaye ga wo web api mn dal dy ga webapi isky sath given time ka timer set krdy gi ky ye 1 second bad execute krna  

//web api mn jany ka bd is code (callback / task queve ) ky  function mn jo call back function hota hai 

// event loop call stck ka completely free hony ka wait kry gi usky bad call back or task queue mn sy function para hoga wo callstack mn bhj dy ga

// phly synchornous code complet ehoga chahiye kitna bh time llagy  usky bad asynchrornous
// web api single thread nh hia 




//homework
// call back with async
// call back over come promise
// callback hell
