/**
 * @preserve 7fceecfcd58819294c12188dc73599d7
 *
 * 7fceecfcd58819294c12188dc73599d7
 * javascript1
 * lab2
 * v2
 * dbwebb clone javascript1
 * 2019-10-12 10:17:00
 * v4.0.0 (2019-03-05)
 *
 * Generated 2019-10-12 12:17:00 by dbwebb lab-utility v4.0.0 (2019-03-05).
 * https://github.com/dbwebb-se/lab
 */

/*jshint maxcomplexity:false */
/* eslint-disable indent */
/* jscs:disable indent */
(function (dbwebb) {
"use strict";

var ANSWER = null;

console.log("Ready to begin.");


/** ======================================================================
 * Lab 1 - statements
 *
 * Statements and expressions in JavaScript.
 *
 * Use MDN as your reference and base to solving the exercises.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . If, else if and else
 *
 */



/**
 * Exercise 1.1 (1 points)
 *
 * Create five variables: `card1, card2, card3, card4, card5`.
 *
 * Assign the values `4, 2, 7, 1, 11` to the variables created above.
 *
 * Add them up and put the sum in a variable called `result`.
 *
 * Answer with the variable `result`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let card1 = 4;
let card2 = 2;
let card3 = 7;
let card4 = 1;
let card5 = 11;

let result = card1 + card2 + card3 + card4 + card5;

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2 (1 points)
 *
 * Use an `if statement` to see if the five cards (card1-card5) have a
 * combined sum that is higher than 21.
 *
 * Create a variable `status` and give it a different value depending on the
 * following.
 *
 * * If the sum is higher than 21, give your variable the value `"busted"`.
 * * Else give it the value `"safe"`.
 *
 * Answer with your status-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var status = result;

if (result > 21) {
    status = "busted";
}
else {
    status = "safe";
}

ANSWER = status;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3 (1 points)
 *
 * Use `if else statements` to see if the combined value of the first three
 * cards (card1-card3) is lower, higher or exactly 21.
 *
 * Answer with a string corresponding to the result:
 * lower = `"safe"`
 * higher = `"busted"`
 * 21 = `"black jack"`
 *
 * Store the response in your status-variable and answer with it.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var cardvalue = card1 + card2 + card3;
var result1 = cardvalue;

if (cardvalue > 21) {
    result1 = "busted";
}
else if (cardvalue < 21) {
    result1 = "safe";
}
else {
    result1 = "black jack";
}

ANSWER = result1;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4 (2 points)
 *
 * Create three variables: `dealer1, dealer2, dealer3`.
 *
 * Assign the values `1, 6, 7` to the variables.
 *
 * Combine the `if`, `else if`, `else` statements and the operator `AND (&&)`
 * to see what the dealer should do. Combine as you feel needed.
 *
 * If the sum of the dealercards is lower than 17, answer with `"pick"`, if
 * the sum is higher than or equal to 17 and lower than 21 answer with
 * `"stop"`. If the sum is 21 answer with `"black jack"`. If the sum is higher
 * than 21 answer with `"busted"`.
 *
 * Store the response in a variable, and answer with it.
 *
 * PS. You can change the sum to test that your if-statement really works for
 * all values, just to try it out.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var dealer1 = 1;
var dealer2 = 6;
var dealer3 = 7;
var dealercards = dealer1 + dealer2 + dealer3;
var result2 = dealercards;

if (dealercards < 17) {
    result2 = "pick";
}
else if (dealercards >= 17 && dealercards < 21) {
    result2 = "stop";
}
else {
    (dealercards == 21), result2 = "black jack";
    (dealercards > 21), result2 = "busted"; 
}

ANSWER = result2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Switch, case
 *
 */



/**
 * Exercise 2.1 (1 points)
 *
 * Use a switch-case statement to create a message with the type of fruit and
 * its color. You have the following type of fruits with a corresponding
 * color:
 *
 * * banana: yellow
 * * apple: green
 * * kiwi: green
 * * plum: purple
 *
 * Create a variable `myFruit` which holds the current type of your fruit. If
 * 'myFruit' is banana, the result should be a variable containing the string
 * value `"The banana is yellow."`
 *
 * Ensure that your switch-case works for all values.
 *
 * Answer with the result where `myFruit = "plum"`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var myFruit = "plum";

switch(myFruit) {
    case "banana": 
        ANSWER = "The banana is yellow.";
        break;
    case "apple":
        ANSWER = "The apple is green.";
        break;
    case "kiwi":
        ANSWER = "The kiwi is green.";
        break;
    case 'plum':
        ANSWER = "The plum is purple.";
        break;
}

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, true);

/**
 * Exercise 2.2 (1 points)
 *
 * Extend your switch-case statement with a `default value`. The result should
 * be:
 *
 * `"That is an unknown fruit."` when the variable 'myFruit' has an unknown
 * value.
 *
 * Answer with the result where 'myFruit = pear'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var myFruit = "pear";

switch(myFruit) {
    case "banana": 
        ANSWER = "The banana is yellow.";
        break;
    case "apple":
        ANSWER = "The apple is green.";
        break;
    case "kiwi":
        ANSWER = "The kiwi is green.";
        break;
    case 'plum':
        ANSWER = "The plum is purple.";
        break;
    default:
        ANSWER = "That is an unknown fruit.";
        break;
}

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . For loops
 *
 */



/**
 * Exercise 3.1 (1 points)
 *
 * Use a `for-loop` to increment `481` with the value `6`, `10` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var x = 481;
for (x + 6; x < 541; x++) {
    console.log(x);
}

ANSWER = x;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2 (1 points)
 *
 * Use a for-loop to decrement `551` with the value `8`, `10` times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var y = 551;
for (y - 8; y > 471; y--) {
    console.log(y);
}

ANSWER = y;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, true);

/**
 * Exercise 3.3 (3 points)
 *
 * Use a for-loop to add all the even values in the range `22` to `45` to a
 * string with each number separated by a comma `,`.
 *
 * The result should not end with a comma. You should neither have a space
 * after the comma.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

ANSWER = "";
var z;
for(z = 22; z <= 45; z++) {
    if(z == 44) {
        ANSWER += `${z}`;
    }
    else if (z % 2 == 0) {
        ANSWER += `${z},`;
    }
}

// ANSWER = z;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, true);

/** ----------------------------------------------------------------------
 * Section 4 . While loops
 *
 */



/**
 * Exercise 4.1 (1 points)
 *
 * Use a `while-loop` to increment `10` with the value `6` until it has
 * reached or passed `481`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var v = 10;
var steps = 0;
while (v < 481) {
    v = v + 6;
    steps++;
    console.log(v);
}

ANSWER = steps;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, true);

/**
 * Exercise 4.2 (1 points)
 *
 * Use a while-loop to subtract `8` from `551` until the value has reached or
 * passed `0`.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var a = 551;
var steps1 = 0;
while (a > 0) {
    a = a - 8;
    steps1++;
    console.log(a);
}

ANSWER = steps1;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, true);

/**
 * Exercise 4.3 (3 points)
 *
 * Use a while-loop to add all the values, to a comma-separated string, in the
 * range `28` to `63`, where the value is divisable by 5 or 7.
 *
 * Answer with the resulting string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
ANSWER = "";
var h = 28;

while (h <= 63) {
    if (h == 63) {
        ANSWER += `${h}`;
    }
    else if (h % 5 == 0) {
        ANSWER += `${h},`;
    }
    else if (h % 7 == 0) {
       ANSWER += `${h},`;
    }
    h++;
}

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.3", ANSWER, true);


console.log(dbwebb.exitWithSummary());
}(window.dbwebb));
