// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 31;
const ageMark = 31;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

 // Ausgabe
 // console.log("ageJohn: " + ageJohn);
 //console.log("ageMark: " + ageMark);
 //console.log("isJohnOlder: " + isJohnOlder);
 //console.log("isJohnEqual: " + isJohnEqual);
 //console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if (true)
// if (false)
// if(isJohnOlder)
// if (ageJohn > ageMark)

if(isJohnOlder)
{
    console.log("John ist älter!");
}

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

if (isJohnOlder)

    // if (true)
    // if (false)
    // if(isJohnOlder)
    // if (ageJohn > ageMark)
{
   console.log("John ist älter!");
} 
//alternativer If-Zwei 1...n /weitere Fälle
else if(isJohnEqual)
{
    console.log("John ist gleich alt!")
}
// gemeinsame Alternative
else
{
    console.log("John ist jünger!");
}

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/****** Fallunterscheidung / SWITCH|CASE 1 ******/

const firstName = "Jane";
let job;

job = "driver";  // .. fährt TAXI! / UBER
//job = "diver"; // .. taucht im Rhein! 
//job = "artist"; // .. malt ein Bild!
//job = "pilot"; // .. macht etwas anderes! --> default
job = "teacher"; // .. unterrichtet!
job = "instructor"; // .. unterrichtet!

switch (job)  // .. fährt TAXI! / UBER

 {
    case "driver":  //job =="driver"
        console.log(firstName + " fährt TAXI");
        break;
    case "diver":  //job =="diver"
        console.log(firstName + " taucht im Rhein");
        break;
    case "artist":  //job =="artist"
        console.log(firstName + " malt ein Bild");
        break;
    case "teacher":  //job =="teacher"
    case "instructor":
        console.log(firstName + " unterrichtet");
        break;

    


    default:             //WICHTIG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Immer als ERSTES ausfüllen!!!!!
        console.log(firstName + " macht etwas anderes!");
        break;
}


/********  Fallunterscheidung / SWITCH|CASE 2 *******/

const cond = false;
const value = 1;

switch (cond) {
    case (value == 1):
        console.log("Value hat den Wert 1.");
        break;
    case (value == 2):
        console.log("Value hat den Wert 2.");
        break;
    default:
        console.log("Value hat einen anderen Wert.");
        break;
}



