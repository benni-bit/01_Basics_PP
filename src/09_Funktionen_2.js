/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  check! | ??????
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : Test>>>>Check Module
*/

const ERROR_Str_Div = "Teilen durch 0 nicht möglich";
const ERROR_Str_Cal = "Irgendetwas ging schief!";

const prompt = require('prompt-sync')({sigint: true});


startApp();
function startApp() {
    output(calculator(getNum1(),getNum2(),getOp()));
    
}

function getNum1() {
    return parseInt(prompt("Num1?: "));

}
function getNum2() {
    return parseInt(prompt("Num2"));
    
}
function getOp() {
    return prompt("OP?: ");
    
}    


    
 



 //module: calculator | tests:
 //agreement : "+","-","*",":","/"/ output(calculator(3,2,"+"));
 //output(calculator(3,2,"-"));
 //output(calculator(3,2,"*"));
 //output(calculator(3,2,":"));
 //output(calculator(3,2,"/"));
 //output(calculator(3,0,"/"));     //Ausnahmen wie Sonderbehandlung der Null macht funktion divide schon,erledigt
 //output(calculator(3,2,"#?!"));
function calculator(a,b,op) {
    
   switch (op) {
     case "+":                    //addieren
        return add(a,b);                                 //Weiterleitung zur add Funktion
        
     case "-":                    //subtrahieren
        return sub(a,b);
     case "*":                    //multiplizieren
        return multiply(a,b);
     case ":":                    // dividieren
     case "/":
        return divide(a,b);
     


    default:
        return  ERROR_Str_Cal;  //"Irgendetwas ging schief!";  Besser mit Konstante.man findet Fehlermeldungen/str besser
        
    }
}

// module: division a / b |  test:
//output(divide(4,2));
// module: division a / b |  test:
//output(divide(4,2));
//output(divide(3,2));
//output(divide(3,-2));
//output(divide(0,2));
//output(divide(3,0));
//output(divide(0,0));

//  >>>shift+alt+A   kommentieren?????!!!!

function divide(a,b) {
    if (b == 0) {  // Ausnahme                Die beste Regel auf Ausnahme(n)testen!!!!!!!!!!!!
        return ERROR_Str_Div;
        
    }                   //ternärer operator  return b == 0 ? ERROR_Str_Div : null;  <<<<auch mögliche Lösung

    return a / b;
}

  // if (b != 0) {  // Test
 //return a / b;
  // } else {
  //     return ERROR_Str_Div;
  // }
//}
//-------------------------------------------------------------------------------------------
// module: multiplication a * b |  test:
//output(multiply(3,2));
//output(multiply(3,-2));
//output(multiply(3,0));
 function multiply(a,b) {
	return  a * b;
}

//module: subtraction a -b | test
function sub(a,b) {
    return a - b;
}

//module:addition a + b | test_
//output(add(3,2));
function add(a, b) {
    return a + b; 
}

//module : output | test:
//output("hi");

function output(outputData) {
    console.log(outputData);
    
}


//Alle Module funktional getrennt für TestCases!!!