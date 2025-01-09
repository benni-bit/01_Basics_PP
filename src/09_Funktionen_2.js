/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : Test>>>>Check Module
*/

const ERROR_Str_Div = "Teilen durch 0 nicht möglich";

// module: division a / b |  test:
aoutput(divide(4,2));
output(divide(3,2));
output(divide(3,-2));
output(divide(0,2));
output(divide(3,0));
output(divide(0,0));
function divide(a,b)

function divide(a,b)

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
