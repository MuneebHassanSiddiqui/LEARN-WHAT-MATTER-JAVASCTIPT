// variables , constant and let

// var and let sey bnty hai variable or const sey bnty hai constant

// variable aysa word hai jis ki value badlyy

// constant jis ki value na badly or jo kbhi change nhi hota hai 


// This value is changeable
// var husband = "tiger";
// var wife = "liger";


// This value is not changeable
// const husband = "tiger"
// const wife = "liger"

// hoisting - variable and function are hoisted which means there declaration is moved on the top of the code
// hoisting vo hai jo variable ko banany sey bnany sey phlyy use karsktyy

//Declaration move on top 
var a;
//Initialization
a = 15;

//This value is not exist in the code this not-defined
console.log(b);

// Here our value is undefined because it exist 
var b = 13;

//Type in js

// There are mainly 2 type of js
// primitive and reference

// primitive = Number,string,boolean,undefined,null 
// var a = 12; is primitive type

// reference = {} () []
// var a = [12,67] is reference type

// asi koi bhi value jis ko copy krny pr real copy nhi hoti hai blky us main value ka reference Pass hojata hai,ussy hum reference khty hai, aur jiska copy krny pr real copy hojata hai wo value primitive type value hoti hai 
// var a = 12;

// var b = a;

// b = b+2;

// var a = [1,445,656,3];

// var b = a;

// b.pop(); remove the end values


// conditionals -if else else-if
// jab bhi bt agr mgr pr ayegi, ya fir bt aygi aysa hua tww ye karo wssa hoa tww wo karo 

// if(is barcket ky ander sirf do chizzy asktii hai false or true 12>10"true",10<3"false")

if (true) {} else {}

//  If else pattern 
// if(11>12){

// }
// else if(12>13){

// }
// else if(14>16){

// }
// else{

// }

// LOOPS - For while loop
// loop- loop means repeat 
// 1 1 1 1 1 1 1 1 1 1 1 1

// for(Start;end;Change){


// }

// for (var i = 0; i < 100; i++) {
//     console.log(i);

// }

// for( var i=24; i<51; i++){

//     console.log(i);
// }

// var z = 12;

// while (z < 14) {
//     z++;

// console.log(z);
// }


// Function ka mtlb app kuxh code ko likh kar koi name dey skty ho and bd mai usy use karskty ho  with that names as many times 
// funtion = code ko name dena
// FUNCTION - function mainly teen kam kay lia hoty hai 
// 1) jb apka code app us wqt nhi chlna chty ho future mai chlna chty ho
// 2) jb apka code reuse karna chty ho
// 3) jb app code chlna chty ho with different data 

// function hello() {
//     console.log("hello world");
//     //function statements 

// }
// hello();



// function runner() {

//     console.log("malaikah");
//     console.log("muneeb");
//     console.log("hassan");
//     console.log("yousuf");

// }
// runner();

// function recall(a, b, c, d => this is called parameters) {
//     console.log(a, b, c, d);

// }
// recall(12 , 12 ,34 ,454 ,45 ,45 => this is called arguments);
// arguments = real value jo hum dete hai function chlty wqt
// parameters = variables jin mai value store hoti hai arguments

