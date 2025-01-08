/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

//Funktionsaufruf |call
//test()


//Funktionsrumpf | callee
//Funktionsdeklaration

//function test()
//{
  //  console.log("Hallo, Manuel!");
//}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

//ausgabeNamen();  //Call

//function ausgabeNamen(){
    //interne Variable |What happens in Vegas....
  //  let firstName = "Manuel";
   //console.log("Hallo, Manuel!");
   //console.log("Hallo, " + firstName + "!");

//}

//console.log(firstName); //Fehler : scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

//ausgabeNamen2("Hein");
//ausgabeNamen2("Maria");     //Argument --> Daten für Parameter

function ausgabeNamen2(firstName) {   //Parameter
    
    console.log("Hallo, " + firstName + "!");
    
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

//ausgabeNamenParams("Max", "Mütze");


 //const prompt = require('prompt-sync')({sigint: true});
 //ausgabeNamenParams(prompt("Vorname? :"),prompt("Name? :")); // Piping



function ausgabeNamenParams(firstName, secondName) {
    console.log("Hallo, " + firstName +  " " + secondName + "!");
    
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

//ausgabeNamenSRP("Max", "Mütze");

function ausgabeNamenSRP(firstName, secondName) {   //SingleResponsibilityPrinzip


    // 1. Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hallo, " + GAP +firstName + GAP +secondName + "!"

    console.log(outputStr);


    
}


/***** Funktionen 03b ******/

output(getString("Max", "Mütze"));

function getString(firstName, secondName) {

    const GAP = " ";
    let outputStr = "Hallo, " + GAP +firstName + GAP +secondName + "!";
    return outputStr;  //return schickt die Daten an die Stelle des Aufsrufs zurück(Call!!!)
    console.log("Hallo");// Kann nicht mehr aus geführt werden,weil returnalle weiteren Aktionen
                                   //abbricht

    
}


//2. Funktionalität: string output
output("hi");
output("true");
//output("Hooo");
function output(outputData) {
    console.log(outputData);
    
}

 



