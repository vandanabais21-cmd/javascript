function greet(){
    console.log("hello");

    return function(){
        console.log("world");
    };
}
let w=greet();
w();
greet()();