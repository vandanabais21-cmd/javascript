// const p = new Promise((res,rej)=>{
//     let data = "Data Recieved";
//     //let succes = true;
//     let succes = false;
//     if(succes){
//         res(data);
//     }
//     else{
//         rej();
//     }
// });

//promise chaining jisme p.then ke bad then ...
// p.then((data)=>{
//     console.log(data);
// }).catch(()=>{
//     console.log("Data not recieved");
// }).finally(()=>{
//     console.log("Functi ended");
// });

// const p = new Promise((res,rej)=>{
//     let data = "Data downloaded";
//     let succes = true;
//     //let succes = false;
//     if(succes){
//         res(data);
//     }
//     else{
//         rej();
//     }
// });
// p.then((data)=>{
//     console.log(data);
//     return 2;
// }).then((num)=>{
//     console.log(num*2);
//     return num*2;//promise always return a promise
// }).then((num)=>{
//     console.log(num*2);
//     return num * 2;
// })
// .catch(()=>{
//     console.log("Data not download");
// }).finally(()=>{
//     console.log("Functi ended");
// });
// function checkEven(num){
//     return new Promise((res,rej)=>{
    
//         if(num%2==0){

//             res(num);
//         }
//         else{
//             rej(num);
//         }
//     });
// }
// checkEven(7)
//     .then((num)=>{
//         console.log("even",num);
//     }).catch((num)=>{
//         console.log("odd",num);
//     });
// function ATM(amount,balance){
//     return new Promise((res,rej)=>{
//         let succes="amount withdraw sucessully!"
//         let failed="insufficient balance"
//         if(balance>amount){
//             res(succes);
//         }
//         else{
//             rej(failed);
//         }
//     });
// }
// ATM(1500,1600)
// .then((succes)=>{
//     console.log(succes);
// }).catch((succes)=>{
//     console.log(failed);
// })



// function maggieLana(){
//     return new Promise((res,rej)=>{
//              console.log("maggie lene gaya");
//              setTimeout(() =>{
//                 console.log("maggie aa gayi");
//                 res();
//                 //maggieKhana bheja as a callback
//             },2000); // representing it task 2 sec to get maggie from shop
        
//     });
// }


// function maggieBanana(){
//     return new Promise((res,rej)=>{
//         console.log("maggie banana start");
//         setTimeout(() => {
//             console.log("maggie ban gayi");
//             res();
//         },2000); // representing it task 2 sec to prepare maggie
        
//     });
// }

// function maggieKhana(){
//     return new Promise((res,rej)=>{
//           console.log("maggie khana start");
//            setTimeout(() => {
//                 console.log("maggie khana khatam");
//                 res();
//             },2000);
            
//     });
// }
// maggieLana()
//     .then(()=>maggieLana())
//     .then(()=>maggieBanana())
//     .then(()=>maggieKhana())
//     .then(()=>{
//         console.log("ab bartan dho lo");
//     });

    

// function orderplace(){
//     return new Promise((res,rej)=>{
//          setTimeout(()=>{
//             console.log("order aa gaya");
//             res();
//         },2000);
//     });
// }

// function foodprepare(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food prepare");
//             res();
//         },2000);
//     });
// }

// function foodDeliver(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food delivered");
//             res();
//         },2000)
//     });
// }
// orderplace()
    
//     .then(()=>foodprepare())
//     .then(()=>foodDeliver())
//     .then(()=>{
//         console.log("enjoy")
//  });

 //promise methode -promise ka  me p captel hona chahiye promise.all()function hai isme wait karna padta hai
 //promise Any ()
 //promise.race ()ye galat ho to fir bhi return kar dega
 //promise.allSettled()

//  function download(url){
//     return new Promise((res,rej)=>{
//         console.log("Download starts at url: ", url);
//         setTimeout(() => {
//             let profileImage = url.split("/")[4];
//             console.log("Download end: ", profileImage);

           
//             res(profileImage,upload);
//         }, 2000);
//     });
// }
// function compress(profileImage){
//     return new Promise((res,rej)=>{
//         console.log("Starts compressing: ", profileImage);
//         setTimeout(() => {
//             let compressedImage = profileImage.split(".")[0] + ".webp";
//             console.log("End compression:", compressedImage);

//             //cb(compressedImage);
//             res(compressedImage);
//         }, 2000); 
//     })
// }
// function upload(compressedImage){
//     return new Promise((res,rej)=>{
//         console.log("Starts ulpoading: ", compressedImage);
//         setTimeout(() => {
//             let newUrl = "https://nayawebsite.com/" + compressedImage;
//             console.log("Done ulpoading, new URL: ", newUrl);
//             res();
//         }, 2000); 
//     })
// }
// let url = "https://ankitkiwebsite.com/image/profile.jpg";
// download(url)
//     .then((profileImage)=> compress(profileImage))
//     .then((compressedImage) => upload(compressedImage));

    //implement a traffic light sequence (red-yellow-green)using promise`

    //

    function Traffic(){
  return new Promise((res,rej)=>{
    console.log("traffic light sequence");
    
    
    
  });
   
}

Traffic()
  .then(()=>{
    wait();
    console.log("Red ");

  })
  .then(()=>{
    console.log("Yellow ");
  })
  .then(()=>{
    console.log("Green ");
  });

  // const p = new Promise((res,rej)=>{
  //   console.log("traffic light sequence");
  //   res();
    
  // });
   


  // p.then(()=>{
  //   console.log("Red ");

  // })
  // .then(()=>{
  //   console.log("Yellow ");
  // })
  // .then(()=>{
  //   console.log("Green ");
  // });
//  let id = setInterval(() => {
//     console.log("2 seconds  passed"); //setInterval-countinues run karta haivafter time
//   },2000);
//   setTimeout(() =>{
//    // clearInterval(id);
//     console.log("code stopped");
//   },5000);
// }
// console.log("hellow");
// wait();
// console.log("world");