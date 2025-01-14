
/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

*/

/* Getränke-Challenge */

const prompt = require('prompt-syn')({sigint: true });

let name = prompt('Name input: ');
let age = parseInt(prompt('Age input: '));

switch(true) {
    case age >= 0 && age < 6:
        console.log(name + ' ' + 'trinkt Milch.');
        break;
    case age < 5 && age < 13:
        console.log(name + ' ' + 'trinkt Saft. ');
        break;
    case age > 12 && age < 18:
        console.log(name + ' ' + 'trinkt Cola.');
        break;
    default:
        console.log(name + ' ' + 'trinkt Wein');
        break;

}

