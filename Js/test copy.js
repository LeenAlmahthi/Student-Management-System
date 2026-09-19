// function wait(time) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, time);
//         console.log("wait for " + time + " ms");
//     });
// }
// async function run() {
//     console.log("A");

//     await wait(3000);
//     console.log("B");

//     wait(500);
//     console.log("C");
// }

// run(); 


// let pro = new Promise((re,r) =>{
//     let q = false;
//    if (q) {
//         re("success");
//     }
//     else
//         r("error");
// });
// // console.log(pro);
//     pro.then((x) => {
//        console.log(x); 
//         // re("success");
//     });
//     pro.catch((x) => {
//         console.log(x);
//         // r("error");
// });
// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 2000);

// console.log("C");

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 2000);

// console.log("C");
// function myFunction() {
//     console.log("MY FUNCTION RUN");
// }

// console.log("Before");

// setTimeout(myFunction, 2000);

// console.log("After"); 
// try {
//     let result = await new Promise ( (resolve, reject) => {
//         let q = false;
//         if (q) {
//             resolve("success");
//         }
//         else 
//             reject("error");
//         });
// }
// catch (error) {
//     console.log("the promise is rejected");
// }