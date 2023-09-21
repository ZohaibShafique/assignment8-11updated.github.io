// 1.  Write a program that takes input a name from user & greet the 
// user like this: 

// var a = prompt("Enter you name");
// alert("Hi " + a);          

// 2.  Write a program to take input a number from user & display 
// it’s multiplication table on your browser. If user does not enter 
// a new number, multiplication table of 5 should be displayed by 
// default.

// var num = +prompt("Enter Number");
// var num = parseInt(num);
// if(num == "")
// num = 5
// document.write('<table border="6" cellspacing="10">');
//     for (i = 1; i < 11; i++) {
//     document.write("<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>");
// } 



// 3. Write a program to take “city” name as input from user. If user 
// enters “Karachi”, welcome the user like this: “Welcome to city 
// of lights”

// var q = "Please enter your city";
// var spec = prompt(q, )
// if (spec === "karachi"){
//     alert("Welcome to the city of lights"); 
// }
// else{
//     alert("welcome to the wrong city");
// }

// 4.  Write a program to take “gender” as input from user. If the 
// user is male, give the message: Good Morning Sir. If the user is 
// female, give the message: Good Morning Ma’am. 

// var a = prompt("Enter gender", "male,female");
// if (a == "male"){
//     document.write("Hello Sir");
// }
// else if (a == "female") 
//     document.write("Hello Maam");


// 5. Write a program to take input color of road traffic signal from 
// the user & show the message according to this table:


// var q = "Input colour of road traffic: red, yellow or green";
// var ans = prompt(q, )
// if (ans === "red"){
//     alert("Vehicles must stop");
// }
// if (ans === "yellow"){
//     alert("Vehicles should get ready to move");
// }
// if (ans === "green"){
//     alert("Vehicles can move now")
// }

// 6.  Write a program to take input max age & current age from 
// user. If the current age is less than or equal to max age, show the message “You are welcome”.

// var a = +prompt("Enter max age");
// var b = +prompt("Enter current age");
// if(a >= b ){
//     alert("You are welcome");
// }


// 7. Write a program to take input remaining fuel in car (in litres) 
// from user. If the current fuel is less than 0.25litres, show the 
// message “Please refill the fuel in your car”.



// var q = "Remaining fuel in car (in litres)";
// var ans = prompt(q, 0.25);
// if (ans < "0.25"){
//     alert("Please refill the fuel in your car");
// }

// if (ans > "0.25"){
//     alert("You have sufficient fuel");
// }


// 8. Run this script, & check whether alert message would be 
// displayed or not. Record the outputs. 

//   var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true"); 
// }
// output = given condition for variable a is true. 

// var b = 82; 
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// }
// output = none

// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } 
// output = none
// if (c === 13){ 
//     alert("condition 2 is true"); 
// } 
// output = condition 2 is true
// if (++c < 14){ 
//     alert("condition 3 is true"); 
// } 
// output = none
// if(c === 14){ 
//     alert("condition 4 is true"); 
// } 
// output = condition 4 is true

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
// }
// output = The cost equals.

// if (true){ 
//     alert("True"); 
// } 
// if (false){ 
//     alert("False"); 
// }
// output = True.

// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// }
// output = car is smaller than cat

// 9. Write a program to take input the marks obtained in three 
// subjects & total marks. Compute & show the resulting 
// percentage on your page. Take percentage & compute grade as 
// per following table: 

    // document.write("Marks Sheet <br>")
    // document.write("Total Marks: 300 <br>")
    // var eng = +prompt('eng');
    // var maths = +prompt('maths');
    // var phys = +prompt('phys');
    
    
    // var ObtainedMarks = eng + maths + phys;
    // document.write("ObtainedMarks : ",ObtainedMarks,"<br>")
    // var percentage = (ObtainedMarks / 300) * 100;
    // document.write("percentage: ",percentage,  "% <br>")
    // if (percentage >= 80){
    //     document.write("A+");
    // }
    // if (percentage < 80){
    //     document.write("B");
    // }
    
//     11. Guess game:  
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. 
// a. If user guesses the same number, show  “Bingo! Correct 
// answer”.  
// b. If the guessed number +1 is the secret number, show  
// “Close enough to the correct answer”.

// var secret = 5;
// var spec = prompt("Enter the secret number");
// if (spec == 5){
//     alert("Bingo! Correct answer")
// }
// if (spec == 4){
//     alert("Close enough to the correct answer")
// }

// 12. Write a program to check whether the given number is 
// divisible by 3. Show the message to the user if the number is 
// divisible by 3.

// var num = 3;
// var spec = prompt("Enter the number")
// if( spec % 3 == 0){
//     alert("the number is divisible by 3")
// }
// else if( spec % 3 !== 0){
//     alert("the number is not divisible by 3")
// }

// 13. Names & Total scores of two teams are taken as input. Write 
// a program that shows which team has won the game or show if 
// there is a tie. (Team A or Team B) 
 
// var spec = prompt("Enter the name of team a") 
// var spec1 = prompt("Enter the name of team b")

// var a = 200
// var spec2 = prompt("Enter the score of team a")
// var b = 100
// var spec3 = prompt("Enter the score of team b")

// if (spec2 > spec3){
//     alert("Team A has won the match")
// }

// if (spec3 > spec2){
//     alert("Team B has won the match")
// }

// if (spec2 == spec3){
//     alert("The match has been tied")
// }

// 14. Take a string, a number and a Boolean in three variables. 
// Write a program that checks the type of variables & responds 
// accordingly. 

// var a = prompt("Enter a string", "string")
// if (a == a ){
//     alert("This is a string")
// }

// var b = prompt("Enter a number", "number")
// if (b == b ){
//     alert("This is a number")
// } 


// 15. Write a program that checks whether the given input is an 
// even number or an odd number.

// var a = prompt("Enter a number")
// if (a % 2 == 0){
//     alert("This is an even number")
// }
// else{
//     alert("This is an odd number")
// }

// 16. Weather in Karachi nowadays is too cool, write a program 
// that takes temperature as input and shows a message based on 
// following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c.  T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.” 

// var a = prompt("Enter a temperature")
// if (a > 40){
//     alert("It is too hot outside")
// }
// else if (a >= 30){
//     alert("The Weather today is Normal")
// }
// else if (a >= 20){
//     alert("Today’s Weather is cool")
// }
// else if (a >= 10){
//     alert("OMG! Today’s weather is so Cool")
// }

// 17. Write a program to create a calculator for +,-,*, / & % using if 
// statements. Take the following input: 
// a. First number 
// b. Second number 
// c.  Operation (+, -, *, /, %) 
// Compute & show the calculated result to user.

// var a = parseInt(prompt("Enter the first number"))
// var b = parseInt(prompt("Enter the second number"))
// var c = prompt("Enter operator" , "+,-,*,%")

// if (c == "+"){
//     alert("a + b = " +parseInt (a + b))
// }

// else if (c == "-"){
//     alert("a - b = " +parseInt (a - b))
// }

// else if (c == "*"){
//     alert("a * b = " +parseInt (a * b))
// }

// else if (c == "%"){
//     alert("a % b = " +parseInt (a % b))
// }

// 18. Write a program that takes user input day name. If the day is 
// Monday, Tuesday, Wednesday, Thursday or Friday, then show 
// “It’s a week day”. If the day is Saturday then show “It’s 
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”. 

// let a = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

// var h = prompt("Enter a day")

// for (let i = 0; i < a.length; i++)

// if (h == a[i] && i <= 4){
//     document.write("It's a week day")
// }

// else if (h == a[i] && i == 5){
//     document.write("It's a weekend")
// }

// else if (h == a[i] && i == 6){
//     document.write("Yay! It's a holiday")
// }

// 19. Write a program that takes input user’s score, if it’s greater 
// than 50, say “You are passed”. Otherwise, show “Try again!” 
 
// let a = ["50"]
// var b = prompt("Enter score")
// if (b > a){
//     alert("You are passed")
// }
// else if(b < a){
//     alert("Try again")
// }
// else if (b == a){
//     alert("Game tied")
// }

// 20. Write a program that: 
// a. takes 2 numbers. 
// b. tells whichever number is the greater (higher) number. 
// c.  tells if they are equal 
// Show the output to make sure it works (e.g. "The greater 
// // number of 5 and 10 is 10.").

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number")
// if (a > b){
//     document.write("The greater number of " + a + " and " + b + " is " + a) 
// }
// else if (a == b){
//     document.write(a + " and " + b + " are equal")
// }
// else{
//     document.write("The greater number of " + b + " and " + a + " is " + b )
// }


// 21. The Translator:  
// Write a program that: 
// a. takes 1 input, a language code (e.g. "es", "de", "en") 
// b. tells "Hello, World" for the given language, for atleast 3 
// languages. It should default to returning English. 
// (Hint: use translate.google.com to check the translation of 
// hello world in different languages)

// let a = ["en", "ar", "fr"]
// var b = prompt("Enter a language", "en, ar, fr")
// for (let i = 0; i < a.length; i++){

//  if (b == a[i] && i == 0){
//     alert("Hello World")
//  }

 
//  if (b == a[i] && i == 1){
//     alert("مرحبا بالعالم")
//  }

 
//  if (b == a[i] && i == 2){
//     alert("Bonjour le monde")
//  }
// }

// 22. Write a program to take input a number & tell whether it's a 
// // positive or negative number. 

// let a = []
// var b = prompt("Enter a number")

// if(b.includes("-"))
// alert("This is a negative value")
// else{
//     alert("This is a positive value")
// }

// 23. The Pluralizer: Write a program that: 
// a. takes 2 inputs, a noun and a number. 
// b. tells the number and pluralized form, like "5 cats" or "1 
// dog".

// var a = parseInt(prompt("Enter a number"))
// var b = prompt("Enter a noun")
// if ( a > 1 ){
//     b = b + "s"
// }
// document.write("There are " + a + " " + b )



// 10. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Take input 
// from users, the following:  
// a. Name of item1  
// b. Name of item2 
// c.  Price of item 1 
// d. Price of item 2 
// e.  Ordered quantity of item 1  
// f.  Ordered Quantity of item 2 
// g. Shipping charges 
// Compute the total cost. If the total cost is above 2000 PKR , 
// offer them 10% discount & show the receipt in your browser.

// var a = prompt("Name of item1")
// var b = prompt("Name of item2")
// var c = prompt("Price of item1")
// var d = prompt("Price of item2")
// var e = prompt("Ordered Quantity of item1")
// var f = prompt("Ordered Quantity of item2")
// var Shippingcharges = 200;

// var totalcost = ( e * c + f * d + Shippingcharges)
// if (totalcost >= 2000){
//     totalcost *= 0.9
// }

// document.write("The total cost of " + a + " and " + b + " is " +totalcost);












