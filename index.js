                            //      OPERATORS        //

// console.log('this is the first line');
// let name = 'Mosh';
// console.log(name);

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// let name = 'assasasa';
// let age = 30;
// let isApproved = true;
// let firstName;
// let selectedColor = null;

// let person = {
//     name: 'Mosh',
//     age: 30
// };

// person.name = 'John';
// person['name'] = 'Marry';
// console.log(person.name);

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);

// function greet(name, lastname) {
//     console.log('hello ' + name + ' ' + lastname);
// }
// // Calculating a value
// function square(number) {
//     return number * number
// }
// console.log(square(3))
// let x = 3;
// let y = 5;

// // console.log(x + y);
// // console.log(x - y);

// //Increment
// console.log(++x);
// //Decerement
// console.log(--y);

// let x = 10;
// x += 2;

// console.log(x);

// let x = 10;
// console.log(x >= 0);
// console.log(x === 10);
// console.log(x !== 10);

// //Strict equality
// console.log(1 === 1);
// console.log('1' === 1);

// //Lose equality
// console.log(1 == 1);
// console.log('1' == 1);
// console.log(true == 1);

// //If customer has more than 100 points
// //they are 'gold' customer, otherwise,
// //they are 'silver' customer.
// let points = 90;
// let type = points > 100 ? 'gold' : 'silver';
// console.log(type);

// //Logical AND (&&)
// //Returns TRUE if both operands are TRUE
// let highIncome = true;
// let goodCreditScore = true;
// let eligableForLoan = highIncome && goodCreditScore;
// console.log(eligableForLoan);

// //Logical OR (||)
// //Returns TRUE if one of the operators is TRUE
// let highIncome = false;
// let goodCreditScore = true;
// let eligableForLoan = highIncome || goodCreditScore;
// console.log(eligableForLoan);

// //NOT (!)
// let highIncome = false;
// let goodCreditScore = false;
// let eligableForLoan = highIncome || goodCreditScore;
// console.log('Eligable', eligableForLoan);
// let applicationRefused = !eligableForLoan;
// console.log('Application Refused', applicationRefused);

// //Falsy (false)
// //undefined
// //null
// //0
// //false
// //''
// //NaN
// //anything else is not Falsy -> Truthy
// // console.log(false || 1 || 2);
// let userColor = 'red';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(userColor || defaultColor);


// // 1 = 00000001
// // 2 = 00000010
// // 3 = 00000011
// // R = 00000000
// // console.log(1 | 2);  //Bitwise OR
// // console.log(1 & 2);  //Bitwise AND

// //Read, Write, Execute
// //00000100 (4)
// //00000010 (2)
// //00000001 (1)
// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;

// let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission);
// let message = (myPermission & readPermission) ? 'yes': 'no';
// console.log(message);

                                //CONTROL FLOW//
// // hour
// // if hour is beetween 6am-12pm: good morning!
// // if it's beetween 12pm-6pm: good afternoon!
// // else: good evening!

// let hour = 13;
// if (hour >= 6 && hour < 12){
//     console.log('Good morning!');
// }
// else if (hour >= 12 && hour < 18){
//     console.log('Good afternoon!');
// }
// else
//     console.log('Good evening!');

// //switch and case
// let role = 'guest';
// switch(role){
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderator User');
//         break;

//     default:
//         console.log('Unknown User');
// }

// if (role === 'guest') console.log('Guest');
// else if (role === 'moderator') console.log('Moderator');
// else console.log('Unknown')

// //For
// for (let i = 0; i <= 5; i++){
//     if (i % 2 !==0)    console.log('Hello World', i);
// }

// //While
// let i = 0;
// while (i <= 5){
//     if (i % 2 !==0)    console.log('Hello World', i);
//     i++;
// }

// // do-while
// let i = 0;
// do {
//     if (i % 2 !==0)    console.log('Hello World', i);
//     i++;
// } while (i <= 5);

// // infinite loop
// let i = 0;
// while (i < 5){
//     console.log(i);
//     // i++;
// }

// //for-in loop
// const person = {
//     name: 'Mosh',
//     age: 30
// };
// for (let key in person)
//     console.log(key,':', person[key]);

// const color = ['green', 'blue', 'red'];
// for (let index in color)
//     console.log(index,':',color[index])

// // brake and continue
// let i = 0;
// while (i <= 10){
//     if (i % 2 === 0){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }



                                //      OBJECTS     //

//Camel Notation: oneTwoThree
//Pascal Notation: OneTwoThree

// //OOP
// let radius = 1;
// let x = 1;
// let y = 1;

// let circle = {
//     radius: 1,
//     location:{
//         x: 1,
//         y: 2,
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw();  //Method


// // factory functions
// function createCircle(radius){
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// let circle1 = createCircle(2);
// console.log(circle1.draw());

// let circle2 = createCircle(3);
// console.log(circle2);


// // Constructor Functions
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// let circle = new Circle(1);


// const circle = {
//     radius: 1,
// };
// circle.color = 'yellow';
// circle.draw = function() {};
// delete circle.color;
// console.log(circle);


// // Value vs Reference Type
// let x = {value: 10};
// let y = x;
// x.value = 20;

// let z = {value: 10};
// function increase(number){
//     number.value++;
// }

// increase(z);
// console.log(z);


// // Enumerating Properties of an Object
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// for (let key in circle)
//     console.log(key, circle[key]);

// for (let key in Object.keys(circle))
//     console.log(key);

// for (let entry in Object.entries(circle))
//     console.log(entry);

// if ('radius' in circle)
//     console.log('yes');


// // Cloning an Object
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// // const another = {};
// // for (let key in circle)
// //     another[key] = circle [key];

// // const another = Object.assign({
// //     color: 'yellow',
// //     }, circle)

// // const another = { ...circle};

// console.log(another)


// //  Garbage Collection - works automaticlly
// let circle = { };
// console.log(circle);


// // Math
// Math.


// // String
// //string primitive
// const message = 'hi';

// //string object
// const another = new String('hi');


// // Template literals " ` "
// const name = 'John';
// const message = 
// `hello ${name}
// this is my 'first' message`;

// console.log(message)


// // Date
// const now = new Date();
// const date1 = new Date('May 11 2018 09:00');
// const date2 = new Date(2018, 4, 11, 9,);

// now.setFullYear(2017);