
/***** Erinnerung: Arrays *******/

//let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// nested arrays - Prinzip: [[[]]]     //Array im Array im Array..../hierarchische Beziehungen
// nested arrays  - hier: [[],[]]
// arr =   [
   //          ["Ich","bin","Max"],
     //        ["Ich","bin","Moritz"]
     //   ];
      
// output(arr);
 //output(arr[0]);
 //output(arr[0][0]+ " " + arr[1][2]);
 //output(arr[1][0]);
 //output("------------");

// // nested loop
 //for (let i = 0; i < arr.length; i++) {
     //for (let j = 0; j < arr[i].length; j++) {
      //  output("Index i: " + i + " Index j: " + j);
     //   output(arr[i][j]);       
 //    }
 //}







// OBJEKTE 1 Daten/Funktionen

/* let person = {
                firstName : "Alexander",
                familyName : "Pesch",
                salary : [120000, 160000],
                sayHello : function(){            //anonymeFkt.
                    return "Hallo";              //Funktionen in Objekte unterbringen
                },
                sayHello2 : function() {
                    return "Hallo, ich bin " + this.firstName;
                    
                
                }


};



output(person);
output(person.firstName);
output(person.familyName);
output(person.salary[1]);
output(person.sayHello());
output(person.sayHello2());

 const txt = person.sayHello() + ", ich bin " + person.firstName +
             " und verdiene " + person.salary[1] + " p.a."

output(txt);
 */


/***** Objekte 2 - Hierarchie *******/
// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest
// nested object {{{}}}

let baikal = {
                value : "10m",
                deep : {
                          deeper :{
                                     deepest : "Das Licht - auf 1642m!",
                                     temperatur : "4 Grad Celsius"
                          }


                }

             };

output(baikal);                              //Hierarchietreppe
output(baikal.value);                   
output(baikal.deep.deeper.deepest);
output(baikal.deep.deeper.temperatur);




// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}

