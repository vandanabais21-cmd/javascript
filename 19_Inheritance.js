// class Animal {

//     eat(){
//         console.log("Animal is Eating");
//     }
//     sleep(){
//         console.log("Animal  is sleeping");
//     }
// }
// class  Dog extends Animal {
//     speak(){
//         console.log("Bark Bark");
//     }
// }

// const dog1 = new Dog();
// dog1.speak();
// dog1.eat();
//methodoverriding ka matlab hai is uske name dusra function bhi bnan sakti hu same  name ka 

// //use constructor
// class Animal {
//     constructor(name){
//         this.name = name;
//     }
//     eat(){ //method overriding
//         console.log(`${this.name} is Eating`);
//     }
//     sleep(){
//         console.log(`${this.name} is sleeping`);
//     }
// }
// class  Dog extends Animal { //extends class parent class ko accessse kar leta hai apne acccesse kar leta hai
//     constructor(name,breed){
//         super(name);
//         this.breed = breed;
//     }

//     speak(){
//         console.log(`${this.name} Bark Bark ${this.breed}`);
//     }
// }

// const dog1 = new Dog("Tommy", "German shepherd");
// dog1.speak();
// dog1.eat();


// class Employee {
//     constructor(name,salary){
//         this.name = name;
//         this.salary = salary;

//     }
//     work(){
//         console.log(`${this.name} is working  ${this.salary}  is Employee`);
        
//     }
// }
// class  Developer extends Employee{
//     constructor(name,salary,programminglanguage){
//         super(name,salary);
//         this.programminglanguage =programminglanguage;
//     }
//     writecode(){
//         console.log(`${this.name}  is coding in ${this.programminglanguage}`);
//     }

// }
// const employee = new Developer("vandana",500000,"java");
// employee.work();
// employee.writecode();

// class LibraryBook{
//     constructor(title,author){
//         this.title = title;
//         this.author = author;
//         this.isAvailble = true;
//     }
    
//     borrowBook(){
//         console.log(` you borrowed ${this.title}  `);
//         if(this.isAvailable){
//             this.isAvailable = false;
//             console.log(`you borrowed"${this.title}"`);
//         }
//         else{
//             console.log(`you not borrowed "${this.title}"`);
//         }

//     }
//     returnBook(){
//         this.isAvailable = false;
//         console.log(`return this ${this.title}`);

//     }
// }
// const book = new LibraryBook("math","vandana");
// book.borrowBook();
// book.returnBook();



