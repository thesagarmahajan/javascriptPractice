// Promise Practice
// let myPromise = (n) => {
//     return new Promise((resolve, reject)=>{
//         n>0 ? resolve(n) : reject("ERROR");
//         console.log("Inside Promise");
//     });
// } 

// myPromise(-11).then((res)=>{
//     console.log(res);
//     return res+1;
// }).then((res)=>{
//     console.log(res);
//     return res+1;
// }).then((res)=>{
//     console.log(res);
//     return res+1;
// }).catch((err)=>{
//     console.log(err)
// });

// Example-1

let fetchData = new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function(){
            
            resolve(this.responseText);
        });
        xhr.open("GET", "https://reqres.in/api/users");
        xhr.send();
    });

let ta = document.getElementById("myJson");

fetchData.then((StringData) => {
    // Printing string data
    console.log(StringData);
    // Converting string data to JSON and returning
    return JSON.parse(StringData);
}).then((JSONdata) => {
    // Getting data from first .then
    console.log(JSONdata);
    // Filtering data
    let filteredData = JSONdata.data.filter((item) => {
        if(item.id%2==0){
            return item;
        }
    }); 
    return filteredData;
}).then((filteredData) => {
    // Getting filtered data returned from 2nd .then
    console.log(filteredData);

    // Printing data as it is in HTML container
    ta.value=JSON.stringify(filteredData);
});

// This will execute before the 3rd .then function in PromiseChain
//  To see the effect, go to developer tools >  Network Tab > Change Throtting to slow 3G
//  Until XHR responds with the data the 'Loading...' will get printed in the targeted container
ta.value="Loading...";