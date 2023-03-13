// example 1 Array =========================

let coffeeOrder = [
    "alex - cortado",
    "ben - cortado",
    "charlie - what ever is new"
];
// console.log(coffeeOrder)
//see below
console.log(coffeeOrder[2])

============================================


============================================
example 2   Replacing an item ==========

let coffeeOrder2 = [
    "alex - cortado",
    "ben - cortado",
    "charlie - what ever is new"
];

coffeeOrder2[1] = "Ann - vanilla latte";
console.log(coffeeOrder2)

=========================================


=========================================
example 3 Array properties 

let coffeeOrder3 = [
    "alex - cortado",
    "ben - cortado",
    "charlie - what ever is new"
];

console.log(coffeeOrder3.length)


==================================================================
example 4  adding to an array using Push method to insert new item 
==================================================================

let coffeeOrder4 = [
    "alex - cortado",
    "ben - cortado",
    "charlie - what ever is new"
];

coffeeOrder4.push("Donna - espresso")
console.log(coffeeOrder4)


=====================================================
example 5 Removing an item from an array
=====================================================

let coffeeOrder5 = [
    "alex - cortado",
    "ben - cortado",
    "charlie - what ever is new"
];

// coffeeOrder5.pop();       //only removes last item
coffeeOrder5.splice(1, 1)    //removes a specific item
console.log(coffeeOrder5)

Activity 1

let songList = [
        "Red hot cilli peppers - adventures of maggie",
        "kid rock - nobody gunna tell me how to live",
        "creedance clear water- run throught the jungle"
    ];

    songList.push("classical music")
    songList.push("Jazz music")

    songList.pop();  

    console.log(songList)
/=============================================================


==============================================================
// Activity 2 
        let numbers = [4, 9, 16, 25]
        let map = numbers.map(Math.sqrt)
        console.log(map)
        
        // numbers.shift()
        console.log(numbers)numbers.unshift(36)console.log(numbers)numbers.splice(2, 0, "Lemon", "Kiwi")console.log(numbers)

// // Activity 2 let numbers = [4, 9, 16, 25]let map = numbers.map(Math.sqrt)
// console.log(map)
// numbers.shift()
console.log(numbers)numbers.unshift(36)
// console.log(numbers)numbers.splice(2, 0, "Lemon", "Kiwi")console.log(numbers)



Loops ==================================================

let favouriteDrinks = ["coke," "fanta," "tonic"];

console.log(favouriteDrinks [0]);
console.log(favouriteDrinks [1]);
console.log(favouriteDrinks [2]);

let favDrinks = [
    "coke",
    "fanta",
    "tonic",
    "red bull"
];

for(let i = 0; i < favDrinks.length; i++){
    console.log(favDrinks[i]);
}

example 2 loops with statements ========================
Using 

let multiplesTwo = [];

for(let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}

console.log(`numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// example while loop 

let age = 15;
while(age < 18){
    console.log("Youre a child");
    age++;
}

console.log("Youre an adult");

Example card Game ==================================


let cards = ["diamond", "spade", "heart", "club"];
let currentCard = "club";

while(currentCard != "spade"){

    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];

}

console.log(currentCard);


==================================================
Activity 1     Create an array of favourite films   
              add 2 movies to list using push
/===================================================

let films = [
    "The matrix",
    "Pulp fiction",
    "Dirty Harry",
    "Transformers",
    "One flew over the cookoo nest"

];

films.push("Extra Despicable me")
films.push("Extra No country for old men")

for(let i = 0; i < films.length; i++)
console.log(films)


================================================
Activity 2 
Generate 6 random number between 1-50

A while loop is used to repeatedly generate a random integer between e.g 1 and 100 

Math.random() always returns a number lower than 1.
Math.random() used with Math.floor() can be used to return random integers.
Math.floor(Math.random() * 11); Returns a random integer from 0 to 10:



================================================


let arr = [];
while(arr.length < 6){
    let r = Math.floor(Math.random() * 50) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}

console.log(arr);

===============================================


===============================================
Activity 3 create a reverse loop    console.log
===============================================

for (let i = 9; i >= 1; i--){
    console.log(i);
}


//normal loop
for (let i = 1; i < 9; i++){
    console.log(i);
}

===============================================



============================================================
Activity 4     films, use loop to display films in an array
              use if statement to check iff third movie is 
              Ghostbusters or not
/ 
               Run OK (issue with syntax)
               [Done] exited with code=1
============================================================

let films = [
    "The matrix",
    "Pulp fiction",
    "Dirty Harry",
    "Ghost busters",

];

for (let i = 0; i < films.length; i++){    

if (films[2] === "Ghost busters"){
    console.log("The third film is Ghost busters");

}else {
    console.log("The third film is NOT Ghost busters")
}

===============================================
Activity 5    Generate random number  
             display if they are divisible by 7 or not
===============================================


for (let i = 0; i < 6; i++){
    let randomNumber = Math.floor(Math.random() * 30) + 1;
    if (randomNumber % 7 === 0){
        console.log(`${randomNumber} is divisible by 7`);
    }else {
        console.log(`${randomNumber} is NOT divisible by 7`);
    }

}

================================================
Activity 6   Imagine you’re a programmer for a social media platform! 

You have been tasked with building a prototype for a mutual followers program.
> Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
In these arrays place 4 names as strings. Make sure there are 2 names
that are in BOTH arrays.
> Using a nested loop iterate over both arrays and console.log out the
matching follower
================================================ 

let BobsFollowers = [];
let BerthaFollowers =  [];

BobsFollowers.push('John', 'Jane', 'Jack', 'Jill');
BerthaFollowers.push('Jimmy', 'June', 'Jack', 'Jill');

for (let i = 0; i < BobsFollowers.length; i++){
for (let j = 0; j < BerthaFollowers.length; j++){
    if (BobsFollowers[i] === BerthaFollowers[j]){
        console.log(BobsFollowers[i]);
        }
    }
}

================================================
Activity 7
Research on do...while loop, find out about the difference between
for loop, while loop and do...while loop. Give an example of each.
What are the pros and cons?
================================================

...while loop is a type of loop that will always execute the code block at least once,
even if the condition is not met

for loop example

for (let i = 1; i <= 10; i++){
    console.log(i);
}

================================================

while loop example

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

================================================

...while loop

let i = 1;
while (i <= 10){
    console.log(i);
    i++;
}

================================================

