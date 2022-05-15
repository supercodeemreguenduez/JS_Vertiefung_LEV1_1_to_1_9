// console.log("");


// lev 1.1

// function greaterThan() {
//     console.log("text")
// }

// let greaterThan = () => {
//     console.log("text")
// }
// greaterThan()

// function adult() {
//     console.log(age.value)
// }

// let adult = () => {
//     console.log("age.value")
// }
// adult()

// function wetter() {
//     console.log("text")
// }

// let wetter = () => {
//     console.log("text")
// }
// wetter()

// =========================
// =========================

// lev 1.2 
// function showForm() {
//     console.log("Hallo");
// }
// showForm(); 

// let hallo = () => console.log('Hallo');
// hallo();

// let x = 2
// let y = 3

// function summe() {
//     console.log(x * 1 + y * 1)
// }
// summe()

// let summe = (x, y) => console.log(x * 1 + y * 1);
// summe(2, 3);

//==================
// let warnung = (x, y) => alert(x * y);
// warnung(2, 3);

// ================

// let myFunction = (x) => console.log(typeof x);
// myFunction(true) // boolean
// myFunction("ji") // string
// myFunction(1) // number 
// myFunction({ name: "John" }) // object
// myFunction([0, 1]) // object

// ====================
// LEV 1.4
//====================

// let hero = (heroName, heroPower, heroEnemy) => {
//     let name = heroName;
//     let power = heroPower;
//     let enemy = heroEnemy;
//     console.log(name, power, enemy)
// }
// hero("Batman", "Fliegen", "Spiderman")

// ====================
// LEV 1.6
//====================

// let returnOne = () => {
//     return 1;
// }
// let x = 1;
// let y = returnOne();
// if (x === y) {
//     console.log("Wird das gedruckt?");
// }

// ===================
//LEV 1.7
//====================

// let myFunction = (x) => {
//     return x * 2
// }
// console.log(myFunction(5));

// ===================
//LEV 1.8
//====================

// let myFunction = (yearBorn) => {
//     return 2022 - yearBorn
// }
// console.log(myFunction(1989));

// ===================
//LEV 1.9
//====================

let thisFunction = (vorname, nachname, geburtsort, alter, wohnort) => {
    console.log(`Mein Name ist ${vorname} ${nachname}`)
    console.log(`Ich bin in ${geburtsort} geboren.`)
    console.log(`Ich lerne Coden bei SuperCode.`);
    console.log(`Ich bin ${alter} Jahre alt.`);
    console.log(`Ich wohne in ${wohnort}.`);
}
thisFunction("Emre", "Gündüz", "Frankfurt", 33, "Offenbach");