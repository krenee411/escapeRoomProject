const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log(`${name}, welcome to the Morgan House Escape Room Simulation!`)

console.log("You will have three paths laid before you, which will you choose?")


let isAlive= true
let hasKey= false

while (isAlive==true){
    const menu = readline.keyIn(' Press 1 to Put your hand in the hole \n Press 2 to Find the key \n Press 3 to Open the door \n' , {limit: '$<1-3>'})
    if(menu==1){
    console.log(`Hahaha ${name} you have fallen into my trap, you have lost your life and the game is over!`);
    isAlive= false;
    }else if(menu==2 && hasKey== false){
        console.log(`Awesome ${name} ,you have found the key, now head to the door to make your escape`); 
        hasKey= true
    }else if(menu==2 && hasKey== true){
     console.log(`${name} you have already found the key, you shouldn't play around head over to the door to find your way out!`);
 }else if(menu==3 && hasKey== true){
     console.log(`Congratulations ${name} you have found and key and escaped to safety!`);
     isAlive== false; 
 }else if(menu==3 && hasKey== false){
     console.log(`${name} you are getting ahead of yourself, you can't leave without the key that opens the door!`);
     hasKey==false;
 
 }
 }
 