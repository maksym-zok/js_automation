// let a = 12;
// let b = 12;

// if (a > b){
//     console.log('The max value is:',a);
//     }
//     else if (a < b){
//         console.log('The max value is:',b);
//     }
//     else if (a == b){
//         console.log('Numbers are equal');
//     }

// let number = max(3, 2);
// console.log(number);
// function max(a, b){
//     // if (a > b) return a;
//     // else if (a < b) return b;
//     return (a > b) ? a : b;
// }

// console.log(isLandscape(800, 600));
// function isLandscape(width, height){
//     return (width > height) ? true : false;
// }

// const output = fizzBuzz(false);
// console.log(output);
// function fizzBuzz(input){
//     if (typeof input !== 'number')
//     return NaN;
//     if ((input % 3 === 0) && (input % 5 === 0))
//         return 'FizzBuzz';
//     if (input % 3 === 0)
//         return 'Fizz';
//     if (input % 5 === 0)
//         return 'Buzz';
//     return input;
// }


// checkSpeed(179)

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if (speed < speedLimit + kmPerPoint)
//         console.log('OK');
//     else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= 12)
//             console.log('License is suspended');
//         else
//             console.log('Points:', points);
//     }
// }


// showNumber(10)

// function showNumber(limit){
//     for (let i = 0; i <= limit; i++){
//         if (i % 2 === 0) console.log(i, 'EVEN');
//         else console.log(i, 'ODD');

//         // const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//         // console.log(i, message);
//     }
// }


// const arrays = [0, null, undefined, '', 2, 3];
// console.log(countTruthy(arrays));

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array){
//         if(value)
//         count++;
//     return count;
//     }
// }


// const address = {
//     street: 'Halytska',
//     city: 'Ternopil',
//     zipcode: '477xx',
// }

// function showAddress(address){
//     for (let key in address)
//     console.log(key, address[key]);
// }

// showAddress(address)