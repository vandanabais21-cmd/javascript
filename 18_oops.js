// const student1 = {
//     name: "vandana",
//     attendance: 10,

//     ispresent: function(){
//         this.attendance++;
//         console.log(
//             `${this.name} is present. Total Attendance = ${this.attendance}`
//         );
//     },
// };


// student1.ispresent();

// use constructor -constructor function sirf value ko asin karne ke liye hota hai
// class Student {
//     constructor(name,attendance){
//         this.name = name;
//         this.attendance = attendance;
//     }

//     ispresent(){
//         this.attendance++;

//         console.log(
//             `${this.name} is present. Total Attendance = ${this.attendance}`
//         );
    
//     }
// }
// const student1 = new Student("bandana",0);
// const student2 = new Student("vandana",0);
// student1.ispresent();
// student2.ispresent();

//not use constructor
// class Student {
   

//     ispresent(){
//         this.attendance++;

//         console.log(
//              `is present`
//         );
    
//     }
// }
// const student1 = new Student();
// const student2 = new Student();
// student1.ispresent();
// student2.ispresent();

//use static
class Student {
   

    ispresent(){
        

        console.log(
             `is present`
        );
       
    
    }
     static  greet(){//only accessed by class and not by objects
            console.log("hello word");
        }
}
const student1 = new Student();
const student2 = new Student();

student1.ispresent();
student2.ispresent();
Student.greet();
