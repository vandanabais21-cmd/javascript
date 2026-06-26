// function getData(){//agar function se promise return kare ge  to dono me 3+3=6 sec lagege aur agar const se  kare ge to vo shurur se 3,3 =3dono sath me hi print hoge
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("promise resolve ho gaya");
//         },3000);
//     });
// }
// const getData2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("promise resolve ho gaya 2")
//     },3000);
// });
// //conole.log(getData());

// async function handlePromise(){ //promise ko chalane ke liye async lagate hai async lagayege tabhi await lagaye ge
//     console.log("hello");
//     const val =await getData();//always return a promise

//     console.log(val);
//     console.log("world");

//     const val2 =await getData2;//always return a promise
//     console.log(val2);
//     console.log("world 2");
// }

// handlePromise();
// console.log("random tasks");
// console.log("random tasks");
// console.log("random tasks");
// console.log("random tasks");
// console.log("random tasks");
// getData()
//     .then((msg)=>{
//         console.log(msg);
//     });
        //agar function se promise return karaye ge promise ko()ye karna hai

// function orderplace(){
//     return new Promise((res,rej)=>{
//          setTimeout(()=>{
            
//             res("order aa gaya");
//         },2000);
//     });
//  }

// function foodprepare(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
            
//             res("Food prepare");
//         },2000);
//     });
// }

// function foodDeliver(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
          
//             res("Food delivered");
//         },2000)
//     });
// }
// orderplace()
    
//     .then(()=>foodprepare())
//     .then(()=>foodDeliver())
//     .then(()=>{
//         console.log("enjoy")
//  });
//  async function hendl(){
//     const val = await orderplace() ;
//     console.log(val);

//     const val2 = await foodprepare();
//     console.log(val2);

//     const val3 = await  foodDeliver();
//     console.log(val3);
//  } 
//  hendl();

 function download(url){
    return new Promise((res,rej)=>{
        console.log("Download starts at url: ", url);
        setTimeout(() => {
            let profileImage = url.split("/")[4];
            console.log("Download end: ", profileImage);

           
            res(profileImage,upload);
        }, 2000);
    });
}
function compress(profileImage){
    return new Promise((res,rej)=>{
        console.log("Starts compressing: ", profileImage);
        setTimeout(() => {
            let compressedImage = profileImage.split(".")[0] + ".webp";
            console.log("End compression:", compressedImage);

            //cb(compressedImage);
            res(compressedImage);
        }, 2000); 
    })
}
function upload(compressedImage){
    return new Promise((res,rej)=>{
        console.log("Starts ulpoading: ", compressedImage);
        setTimeout(() => {
            let newUrl = "https://nayawebsite.com/" + compressedImage;
            console.log("Done ulpoading, new URL: ", newUrl);
            res();
        }, 2000); 
    })
}

 
let url = "https://ankitkiwebsite.com/image/profile.jpg";
// download(url)
//     .then((profileImage)=> compress(profileImage))
//     .then((compressedImage) => upload(compressedImage));

 async function hand(){
    const profileImage = await download(url);
    const compressedImage = await compress(profileImage);
    const newUrl = await upload(compressedImage);
    
 }
 hand();