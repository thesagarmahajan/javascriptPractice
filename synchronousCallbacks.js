/* 
1. When a function needs to be return multiple value and let programmer decide 
what needs to be done next callback functions are very useful.
2. When callback is synchronous it blocks the further execution of code.
Like in this example, the cnsole.log('END') won't execute until the divisor
function gets fully executed.
*/

function  divisors(num, mycb){
    let count=0;
    let divisors = [];
    for(i=1;i<=num;i++){
        if(num%i==0){
            count++;
            divisors.push(i);
        }
    }
    mycb(num, count, divisors);
}

divisors(150, function(num, total, list){
    total==2 ? console.log("PRIME") : console.log("NOT PRIME");
    console.log("Because, "+num+" Divided By: "+list)
})

console.log("END");

/* 
1. Without callback function you cannot return multiple values 
*/

// function  divisors(num){
//     let count=0;
//     let divisors = [];
//     for(i=1;i<=num;i++){
//         if(num%i==0){
//             count++;
//             divisors.push(i);
//         }
//     }
//     // Can't return multiple values
//     return num, count, divisors;
// }

// console.log(divisors(14));



