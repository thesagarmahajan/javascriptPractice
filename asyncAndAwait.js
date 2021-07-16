async function getFile() {
    let myPromise = new Promise(function(myResolve, myReject) {
      let req = new XMLHttpRequest();
      req.open('GET', "https://reqres.in/api/users");
      req.onload = function() {
        if (req.status == 200) {
          myResolve(req.response);
        } else {
          myResolve("File not Found");
        }
      };
      req.send();
    });
    console.log( await myPromise);
  }
  getFile();
  console.log("Hi");