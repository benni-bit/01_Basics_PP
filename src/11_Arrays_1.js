/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/*** 02. Theorie: Array */

//let arr;
//arr = new Array();  //Konstruktor

//arr = [];          //Literalschreibweise
//arr = [2,11,7,8,10];

//output(arr);
//output(arr.length);  //Anzahl der Elemente
//output(arr[0]);      // Index 0 (1.Position im Array)
//output(arr[arr.length -1]);       // letzte Position / allgemein


// 02a. Theorie: Schleifen (for-schleife) */
// For -Schleifen als allg. Wiederholungs-Struktur */


//for (let i = 0; i < 5; i++) 
//{
   //output("index: " + i);
//}


// Dekrement (obere Grenze --> untere Grenze)
//for (let i = 10; i > 0; i--) 
   // {
   //     output("index: " + i);
  //  }
    
    // Inkrement (var. Schrittweite)
//for (let i = 10; i <= 100; i += 5) 
   // {
    //   output("index: " + 1);   
   // }

   //2b. For -Schleife für Array-Index (Iteration)

   let arr = ["Ich","bin","die","coole","Maxine","Mützerich","Falk"];
for (let i = 0; i < arr.length; i++) 
{
   output(i); 
   output(arr[i]);
}

//********* Überlegungen - Transponierung **********/

/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/

/* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// output("inhalt von a: " + a);
// a = a + 1; // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 1 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 2 + 1
// output("inhalt von a: " + a);

/* Besser: mit FOR-Schleife */

// let a = 0; // Anfangswert
// for (let i = 0; i < 10; i++) {
//    a += 1; // a = a + 1
//    output("inhalt von a: " + a);
// }


//
//1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
//Solange die Variable existiert, bleibt dieser erhalten
//hier: Verkettung eines Strings // Transponierung


 let str = ""; // Anfangswert
for (let i = 0; i < 10; i++) {
   str += "Test" + " "; // a = a + 1
   output(str);
}















/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
//output(getSentence("Ich","bin","Max","Mütze"));

//output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));


function getSentence(word1,word2,word3,word4) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +   // SRP SingleResponsibilityPrincipal | DRY -Don't repeat yourself!!!
                word2 + GAP +
                word3 + GAP +
                word4 +    
                PUNCT;

    return str;
}

//1a. Funktionalität mit Array 1
//Kritik | Überlegung
// word1,word2 .....wordN:: Semantische Struktur
//arr[0],arr[1]...arr[n]::: Numerische Struktur(0,1,2,3,4,.....n)
//---> Transformation semantisches Problem--->numerisches Problem

//output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
//function getSentence(word1,word2,word3,word4) {  
  //  const GAP = " ";
  //  const PUNCT = ".";
    //let str =   word1 + GAP +   // SRP SingleResponsibilityPrincipal | DRY -Don't repeat yourself!!!
        //        word2 + GAP +
        //        word3 + GAP +
          //      word4 +    
          //      PUNCT;

    //return str;
//}


/*** 01b. Funktionalität mit Array 2  */
// Transponierung:  untereinander ---> nebeneinander
// Helge Schneider: Anananandereihung ...
// output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr2(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str =  "";

    let str = ""; // Anfangswert
    for (let i = 0; i < 10; i++) {
       str += "Test" + " "; // a = a + 1
       output(str);
    }
    


    return str;



// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}



