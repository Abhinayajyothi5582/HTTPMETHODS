const URL = "http://localhost:3000/students";

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  })
  .catch((res) => {
    console.log(res);
  });



const URL1="http://localhost:3000/students";
let options={
    "method":"POST",
    "headers":{
        "content-type":"application/json"
    },
    "body":JSON.stringify(
        {
            "id":4,
            "name":"manusha",
            "age":27,
            "course": "AI"
})
    }
    fetch(URL1,options).then(res=>{
        if(res.ok){
            console.log(res.status,res.statusText)
        }
})






// const URL3="http://localhost:3000/students/2";
// let options={
//     "method":"PATCH",
//     "headers":{
//         "content-type":"application/json"
//     },
//     "body":JSON.stringify(
//         {
//             "name":"swetha"
//         }
//     )
// }
// fetch(URL3,options).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText)
//     }
// })






// const URL1 = "http://localhost:3000/students/1";

// let options = {
//     "method": "DELETE"
// };

// fetch(URL1, options).then(response => response.json())
// .then((data) => {
//     for (i = 0; i < data.length; i++) {
//         console.log(data[i]);
//     }
// }).catch((error) => {
//     console.log(error);
// });