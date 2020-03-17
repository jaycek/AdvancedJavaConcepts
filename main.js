// function turnstricton(a,a,c){
// "use strict"
// //a = 23;
// // var a = 3.14
// // delete a;
// //console.log(a+a+c);
// console.log("Success");

// }

function turnstrictoff(){
    a = 23;
    console.log("Success");
}

function getDay(){

    let day;

    switch(new Date().getDay()){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 5:
            day="Saturday";
            break;
    }
    let disp = document.getElementById("day");
    disp.innerHTML = day;

}

function arrow(){
var hello;

    //without arrow
//     hello = function() {
//   return "Hello World!";
// }

hello = ()=> {
    return "Hello World!";
  }

console.log(hello());

var text;
text = () => "Hello Hello Beautiful";
console.log(text());

//didnt work

// console.log(()=> {
//     return "Hello World!";
//   });

}
