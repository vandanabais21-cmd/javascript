// function maggieLana(cb){
//     console.log("maggie lene gaya");
//     setTimeout(() => {
//         console.log("maggie aa gayi");
//         cb(maggieKhana);//maggieKhana bheja as a callback
//     },2000); // representing it task 2 sec to get maggie from shop
// }//ashynochronous task ko squentially handle print karta hai

// function maggieBanana(cb){
//     console.log("maggie banana start");
//     setTimeout(() => {
//         console.log("maggie ban gayi");
//         cb();
//     },2000); // representing it task 2 sec to prepare maggie
// }

// function maggieKhana(){
//     console.log("maggie khana start");
//     setTimeout(() => {
//         console.log("maggie khana khatam");
//     },2000);
// }
// maggieLana(maggieBanana);
// //maggieBanana();
// //maggieKhana();

function download(url,cb){
     console.log("download start at url :",url);
    setTimeout(() => {
        let profileImage =url.split("/")[4];
        //maan lena download nai 2 sec lag gaye
          console.log("download end",profileImage);
          cb(profileImage,upload)
    },2000);
 }

function compress(profileImage ,cb){
    console.log("satarts compressing:",profileImage);
    setTimeout(() => {
        let compressedImage = profileImage.split(".")[0]+".webp";
        console.log("end compression:",compressedImage);
        cb(compressedImage);
     },2000);
}

 function upload(compressedImage){
      console.log("start downloading:",compressedImage);
    setTimeout(() => {
        let newUrl = "http://nayawebsite.com/" + compressedImage;
        //maan lena uploading  mai 2 sec lag gaya
        console.log("done uploading ,new URL ",newUrl);
        
   },2000);
}


 let url ="https://ankitwebsite.com/image/profile.jpg";

 download(url,compress);
 //compress("profile.jpg");
//upload("profile.webp");

// function orderplace(cb){
    
//     setTimeout(()=>{
//         console.log("order aa gaya");
//         cb(foodDeliver);
//     },2000);
// }

// function foodprepare(cb){
//     setTimeout(()=>{
//         console.log("Food prepare");
//         cb();
//     },2000);
// }

// function foodDeliver(cb){
//     setTimeout(()=>{
//         console.log("Food delivered");
//        // cb();
//     },2000)
// }
// orderplace(foodprepare);
// orderplace(()=>{
//     foodprepare(()=>{
//         foodDeliver(()=>{
//             console.log("Enjoy you food");
//         });
//     });
// });


