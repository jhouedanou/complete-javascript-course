// const firstName = "Jonas";
// const job="teacher";
// const birthyear=1991;
// const year=2037;
// const jonas = "I'm " + firstName + ',a ' + (year-birthyear) +' years old ' +job
// //template literals
// const jonasNew = `I'm ${firstName}, 
// a ${year-birthyear} 
// years old ${job}`
// console.log(jonas);
// console.log(jonasNew);
// //decisions 
// const age=15;
// const isOldEnough=age>=18; //if the age is 18 or older then it is true
// isOldEnough ? console.log("Sarah can start driving license 🚗") : console.log(`Sarah is too young. Wait another ${18 - age} years :)`);
// const birthYear=1991;
// let century;
// century = birthYear <= 2000 ? 20 : 21;
// console.log(century)
// //type conversion 
// const inputYear="1991";
// console.log(Number(inputYear),inputYear);
// console.log(Number(inputYear)+18); //instead of console.log(inputYear+18) 
// console.log(Number("Jonas"));
// console.log(String(23));
// console.log(23);
// //type coercion
// console.log("I am " + 23 + " years old"); //string converts any number to string
// console.log("23" - "10" - 3); //string converts any number to number
// console.log("23" + "2");//the concatenation remains when using the + operator
// console.log("23" * "2");
// // == and ===
// const age1 = 18;
// const age2 = "18";
// //strict 
// age1 === 18 ? console.log("You just became an adult :D (strict)") : console.log("Still a kid, lol");
// //loose ; does thype conversion
// age2 == 18 ? console.log("You just became an adult :D (loose)") : console.log("Still a kid, lol");

// userName = prompt("What is your name?");
//userName === "Jonas" ? console.log("Hey Jonas") : console.log("I don't know you");
//boolean logic 
const hasDriversLicense = true; //A
const hasGoodVision = true; //B
const isTired =false;
// console.log(hasDriversLicense && hasGoodVision); //A && B AND
// console.log(hasDriversLicense || hasGoodVision); //A || B OR
// console.log(!hasDriversLicense); // !A
if (hasDriversLicense && hasGoodVision) {
 //   console.log("Sarah is able to drive!");
} else {
  //  console.log("Someone else should drive...");
}

// logical operators
hasDriversLicense && hasGoodVision && !isTired ? console.log("Sarah is able to drive!") : console.log("Someone else should drive...");

// let scoreDolphins = 0;
// let scoreKoalas = 0;
// //1er match
// scoreDolphins +=96;
// scoreKoalas +=88;
// //2nd match
// scoreDolphins +=108;
// scoreKoalas +=91;
// //3rd match
// scoreDolphins +=89;
// scoreKoalas +=110;
// //moyenne sur les 3 matches
// scoreDolphins /= 3;
// scoreKoalas /= 3;
// if(scoreDolphins > scoreKoalas){
//     console.log("Dolphins win the trophy 🏆");
// }else if(scoreDolphins < scoreKoalas){
//     console.log("Koalas win the trophy 🏆");
// }else{
//     console.log("Both win the trophy 🏆");
// }

// const day = "tuesday";
// switch (day) {
//     case "monday":
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//         console.log("Prepare theory videos");
//         break;
// }


let scoreDolphins = 0;
let scoreKoalas = 0;
//1er match
scoreDolphins +=96;
scoreKoalas +=88;
//2nd match
scoreDolphins +=108;
scoreKoalas +=91;
//3rd match
scoreDolphins +=89;
scoreKoalas +=110;
//moyenne sur les 3 matches
scoreDolphins /= 3;
scoreKoalas /= 3;

// scoreDolphins > scoreKoalas ? console.log("Dolphins win the trophy 🏆") :
// scoreDolphins < scoreKoalas ? console.log("Koalas win the trophy 🏆") :
// console.log("Both win the trophy 🏆");
switch (true) {
    case scoreDolphins > scoreKoalas:
        console.log("Dolphins win the trophy 🏆");
        break;
    case scoreDolphins < scoreKoalas:
        console.log("Koalas win the trophy 🏆");
        break;
    default:
        console.log("Both win the trophy 🏆");
}

