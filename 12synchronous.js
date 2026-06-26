function wait(){
//    let time = new Date().getTime();
  //  while(new Date().getTime() < time + 5000){}

  // setTimeout(() => {
  //   console.log("Timeout Executed");
  //  // console.log("5 seconds have passed");
  // }, 0);

  let id = setInterval(() => {
    console.log("2 seconds  passed"); //setInterval-countinues run karta haivafter time
  },2000);
  setTimeout(() =>{
   // clearInterval(id);
    console.log("code stopped");
  },5000);
}
console.log("hellow");
wait();
console.log("world");

// console.log("Randon tasks");
// for(let i=0;i<10;i++){
//   console.log(i);
// }
//set time out 

