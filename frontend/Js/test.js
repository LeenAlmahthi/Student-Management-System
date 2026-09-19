// try {
// //     const response = await fetch("http://localhost:5000/api/authApplication/Register", {
// //     method: "POST",
// //     headers: {
// //         "Content-Type": "application/json"
// //     },
// //     body: JSON.stringify({
// //         username: "leenAlmahti",
// //         email: "leenalmaht@gnail.com",
// //         password: "Leen2004@"
// //     })
// // });
//     const response = await fetch("http://localhost:5000/api/authApplication/Login", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         "userName": "leenAlmahti",
//         "password": "Leen2004@"
//     })
// });


// const data = await response.text();
//     // const data = await _response.text();
//  console.log(data);

// //         const data = await _response.json();

// //         console.log(data); // this a error 
// }
// catch (error) {
//     console.log("the promise is rejected");
// }

// const jsonData = '{"userName":"leenAlmahti","email":"leen@example.com"}';

// const user = JSON.parse(jsonData);

// console.log(user);
// console.log(user.userName);
// console.log(user.email);


// const user = {
//     userName: "leenAlmahti",
//     password: "Leen2004@"
// };

// const jsonData = JSON.stringify(user);

// console.log(jsonData);
// const _json = {
//     userName: "leenAlmahti",
//     password: "Leen2004@"
// };
// const data = JSON.stringify(_json);
// let response = await fetch("http://localhost:5000/api/authApplication/Login", {
//     method: "POST", 
//     headers: { "Content-Type": "application/json" },
//     body:data
// });
// // let res = await response.json();
// // console.log(res);
// let q = await response.text();
// console.log(q);
$.ajax({
    url: "http://localhost:5000/Course",
    method: "GET",
    success: function (data) {
        console.log(data);
    },
    error: function (error) {
        console.log(error);
    }
});
 // const cards = ["JavaSript", "c++", "DataBase"];
    // cards.forEach((x) => {
    //   const c = document.createElement("div");
    //   c.classList.toggle("test");
    //   c.textContent = x;
    //   document.body.append(c);
    // });
    // const c = document.createElement("div");
    // c.classList.toggle("test");
    // c.textContent = cards[0];

    // let test_paresnt = document.querySelector("#remember_me");

    // console.log(test_paresnt.parentElement);
    // console.log(submit_btn.children);

    // z.addEventListener("click" , (event) => {
    //     console.log(event.target);
    //     console.log(event.currentTarget);
        
    // });

    // let logo = document.querySelector("#logoLink");
    // console.log(logo.getAttribute("href"));
    // logo.setAttribute("href","../image/left.png");
    // q.addEventListener("click", () => {
    //   // this will apply the defualt of the form  ||  login.html?name=omar+88&password=jhj:90
    //   q.classList.toggle("active");
    //   console.log(q.value);
    // });

    // q.addEventListener("change" , () => { // when u clcik in anther things in the screen u will apply this
    //     console.log("[");
    //     console.log(q.value);
    //     console.log("]");
    // })
    //    q.addEventListener("input" , () => { // every char u write it in the input will direct print in console
    //     console.log("[");   // [ l
    //     console.log(q.value);
    //     console.log("]");
    // })

    // let btn = document.querySelector("#btn");
    // btn.innerHTML = "<b>sign in ....</b>";
    // btn,addEventListener("click", (event) => {
    //     console.log(event.target);
    // });
    // btn.addEventListener("click", () => {
    //     // console.log("Button clicked!");
    // btn.classList.toggle("active");
    // });

    // btn.style.color = "white";
    // btn.style.backgroundColor = "blue";

    // btn.style.backgroundColor =  "rgb(98, 134, 107)";
    // let card = document.querySelectorAll(".card");
    // card.forEach((q) => {
    // q.addEventListener("click" , (event) => {
    //     event.target.classList.toggle("active");
    // });
    // });
    // course.forEach((x,i )=> {
    //     x.textContent = `Card ${i+1}`;
    // });


