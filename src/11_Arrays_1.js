/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/*** 02. Theorie: Array */












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




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}



