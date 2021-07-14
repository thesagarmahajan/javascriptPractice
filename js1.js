let myPromise = (n) => {
    return new Promise((resolve, reject)=>{
        n>0 ? resolve(n) : reject("ERROR");
        console.log("Inside Promise");
    });
} 

myPromise(-11).then((res)=>{
    console.log(res);
    return res+1;
}).then((res)=>{
    console.log(res);
    return res+1;
}).then((res)=>{
    console.log(res);
    return res+1;
}).catch((err)=>{
    console.log(err)
});