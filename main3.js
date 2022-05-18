
name = "Sakib";

//No Argumnet No Return
function welcome(){
    alert("Hi");
}

//Have Argument No Return
//Parameterized Function
function greetings(name){  //  name is the Parameter
    console.log("Hello "+name);
}

//Have Argument Have Return
function sum(num1,num2){
    return num1+num2;
    // return 0;
}
// welcome();

let nm = "Rifat";
// greetings(nm); // nm  is a argumnet

// console.log(sum(10,20));



//Default Parameterized Function

function rifatRoutine(eat = "rice",age=22){
    console.log("Rifat eats "+eat+" daily.");
    console.log("Rifat's age is "+age+" years Now.");
}

// rifatRoutine("Noodles",21);
// rifatRoutine();
// rifatRoutine("Soup");


function tryNew(){
    
    return "Try Me";

}

console.log(tryNew());


let anonym = function(){
    console.log("Hi I am an anonymous function");
}

anonym();

// let arrow = name => console.log("Hi I'm arrow Function");
let arrow = (name,age) => {
console.log("Hi I'm arrow Function");
console.log("Hi I'm arrow Function");
}

arrow();


