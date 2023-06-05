////////////////////////////////////////////
// A. Q & A 
/*

1. How to we assign a value to a variable?
By using the (=) as a assignment operator

2. How do we change the value of a variable?
By using the name of the variable as a parameter and replacing the value

3.How do we assign an existing variable to a new variable?
By using a different name and the (=) assignment operator

4.Remind me, what are declare, assign, and define?
Declaring a variable creates a new variable without assigning it a value

Assigning a variable is giving it a value after it has been declared

Defining a variable is a combination of declaring and assigning a value in the same line of code

5. What is pseudo coding and why should you do it?
Pseudo coding is used to create outline and rough drafts of a program. It should be used to 
sketch out code and troubleshoot

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
The 80/20 rule with 80% used to think the problem out and 20% used to actually type the code
*/
////////////////////////////////////////////////
// B. Strings

// var firstVariable

// firstVariable = "Hello World"

// firstVariable = 15;

// secondVariable = firstVariable

// secondVariable = "Hello Earth"

// console.log (firstVariable)
// console.log (secondVariable)

// yourName = "Maurice"

// let greeting = "Hello, my name is" + " " + yourName;

// console.log(greeting)

////////////////////////////////////////////////
// C. Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' == 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false == false)
// console.log(e == 'Kevin');
// console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

////////////////////////////////////////////////////////////////
// D. 

// var animal = "cow"
// if (animal === "cow") {
//     console.log("mooooo");
// } else {
//     console.log("Hey! You're not a cow");
// }

////////////////////////////////////////////////////////////////
// E. 

// var personAge = 36;

// if (personAge >= 16) {
//     console.log("Here are the keys!");
// } else {
//     console.log("Sorry you're too young");
// }

////////////////////////////////////////////////////////////////
// II. Loops
// A. The Basics

// for (let i = 0; i <= 10; i++) {  
//  console.log(i); 
// }

// for (let i = 10; i <= 400; i++) {
//     console.log(i);
// }

// for (let i = 12; i < 4000; i += 3) {
//     console.log(i);
// }

////////////////////////////////////////////////////////////////
// B. Get Even

// for (let i = 1; i < 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i + "<-- is an even number");
//     }
//     else (console.log(i));
// }

////////////////////////////////////////////////////////////////
// C. Give Me Five

// for (let i = 1; i < 100; i++) {
//     if (i % 5 == 0) {
//         console.log("I found a" + " " + i + ". High five!")
//     } if (i % 3 == 0) {
//         console.log("I found a" + " " + i + ". Three is a crowd")
//     } if (i % 3 == 0 && i % 5 == 0) {
//         console.log("I found a" + " " + i + ". Three is a crowd." + " " + "High five!")
//     }
// };

////////////////////////////////////////////////////////////////////////////
// D

// let bank_account = 0;

// // for (let i = 0; i <= 10; i++) {
// //     bank_account += i}

// //     console.log(bank_account)

// for (let i = 1; i <= 100; i++) {
//     bank_account += i * 2}

//     console.log(bank_account)

////////////////////////////////////////////////////////////////
// III. Arrays & Control flow

// A. Talk About It

// 1. What are the things in an array called?
// Elements

// 2. Do Arrays guarantee those things will be in order?
// No, items in an array are not guaranteed to be in a specific order

// 3. What real-life thing could you model with an array?
// An egg carton

// B. Easy Does It

// let quotes = "1. It is better to give than receive. 2. Death and life are in the power of the tongue. 3. So as a man thinketh, so is he"

// C. Accessing Elements

// const randomThings = [1, 10, "Hello", true];

// 1. How do you access the 1st element in the array?
// console.log(randomThings[0]);

// 2. What would you write to access the 3rd element of the array?
// console.log(randomThings[2]);

////////////////////////////////////////////////////////////////
// D. Change Values

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// ourClass.splice(4, 1, "Octocat");

// ourClass.push("Cloud City");

// console.log(ourClass);

////////////////////////////////////////////////////////////////
// E. Mix It Up

// const myArray = [5, 10, 500, 20];

// myArray.push ("Aegon", "HimQuarterz");

// myArray.shift();

// myArray.unshift("Bob Marley")

// myArray.pop();

// myArray.reverse()

// console.log(myArray)

////////////////////////////////////////////////////////////////
// F. Biggie Smalls

// var num = 115;

// if (num < 100) {
//     console.log("little number");    
// } else console.log("big number");

////////////////////////////////////////////////////////////////
// G. Monkey in the Middle

// var num = 7

// if (num < 5) {
//     console.log("little number")
// } if (num > 10) { 
//     console.log("big number")
// } else console.log("monkey");

////////////////////////////////////////////////////////////////
// H. What's in Your Closet?

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

//   const thomsCloset = [
//     [
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ], [
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ], [
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//   console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

//   kristynsCloset.splice(5, 1, "stained yellow hat", "raybans");

// console.log("Thom is looking fierce in a " + thomsCloset[0][1] + ", " + thomsCloset[1][0] + " " + "and " + thomsCloset[2][1]);

// thomsCloset[1][2] = "Footie Pajamas";

// console.log(thomsCloset);

////////////////////////////////////////////////////////////////
// IV. Functions

// A. printGreeting

// function printGreeting(name) {
//     return("Hello there, " + name + "!");
// }

// B. printCool

// console.log(printGreeting("Slimer"));

// const printCool = function (name) {
//     return (name + " is cool");
// }
//     console.log(printCool("Captain Reynolds"));

// C. calculateCube

// function calculateCube(num) {
//     return (num * num * num)
// };

// console.log(calculateCube(5));

// D. isVowel

// function isVowel (char) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
//     const lowercaseChar = char.toLowerCase();

//     return vowels.includes(lowercaseChar);
// }

// console.log(isVowel("a"));

// E. getTwoLengths

// function getTwoLengths (string1, string2) {
//     const lengths = [string1.length, string2.length];
//     return lengths;
// };

// console.log(getTwoLengths("Hank", "Arron")); 

// F. getMultipleLengths

// function getMultipleLengths (arr) {
//     const lengths = [];

// for (let i = 0; i < arr.length; i++) {
//     lengths.push(arr[i].length);
// }
//     return lengths;
// }

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree

// function maxOfThree (num1, num2, num3) {
//     if (num1 >= num2 && num1 >= num3) {
//     return num1; 
//     } else if (num2 >= num1 && num2 >= num3) {
//     return num2;
//     } else {
//       return num3;
//     }
// }

// console.log(maxOfThree(6, 9, 1));

// H. printLongestWord

// function printLongestWord(words) {
//          let longestWord = "";
    
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length || longestWord === "") {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

////////////////////////////////////////////////////////////////
// Objects

// A.Make a User Object

const user = {
    name: 'Maurice',
    email: 'hempquarterz@gmail.com',
    age: 36,
    purchased: [] 
}


// B. Update the User

user.email = 'eli0meh1208@gmail.com'

user.age = user.age+= 1

// C. Adding Keys and Values
user.location = "Los Angeles, California"

// D. Shopaholic!

user.purchased.push("carbohydrates")

user.purchased.push("peace of mind")

user.purchased.push("Merino jodhpurs")

// console.log(user.purchased[2]);

// E. Object within an Object 

user.friend = {
     name: 'Grace',
     age: 34,
     location: "West Hollywood, California",
     purchased: []
 }

// // console.log(user.friend.name);

// // console.log(user.friend.location);

 user.friend.age = age = 55;

 user.friend.purchased.push("The One Ring", "A latte");

// console.log(user.friend.purchased[1]);

////////////////////////////////////////////////////////////////////////
// F. Loops

// for (let i = 0; i < user.purchased.length; i++) {
//     console.log(user.purchased[i]);
// }

// for (let i = 0; i < user.friend.purchased.length; i++) {
//     console.log(user.friend.purchased[i]);
// }

////////////////////////////////////////////////////////////////
// G. Functions Operating on Objects

function updateUser () {
    user.age += 1
    user.name = user.name.toUpperCase()
};

updateUser();

// console.log(user);

function oldAnLoud (person) {
    person.age += 1;
    person.name = person.name.toUpperCase();
}

oldAnLoud(user) 

console.log(user);


