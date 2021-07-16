/* 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
1. Promises are the new style of async code.
2. The promise is an object representing the completion or failure of the async operation.
3. Promises and .then callbacks dosen't blocks the code execution
So in this example the console.log('END') will print first.
*/
let p = (num) => {
    
    return new Promise((resolve, reject)=>{
            let count=0;
            let divisors = [];
            for(i=1;i<=num;i++){
                if(num%i==0){
                    count++;
                    divisors.push(i);
                }
            }
            resolve({
                originalNumber:num,
                count:count,
                divisors:divisors
            })
            
    });
} 

p(17).then((res)=>{
    console.log(res);
});

console.log("END");