console.log("test");
let selectdelete = -1;
const matrial = [
    {
        name: "Java script",
        Price: 30,
        StatusCourse: "Enroll"
    },
    {
        name: "C++",
        Price: 40,
        StatusCourse: "Enroll"
    },
    {
        name: "Database",
        Price: 70,
        StatusCourse: "Enroll"
    },
];
// Create cards Course
function CreateCard(x, i) {

    let contuner = document.querySelector(".All_cards");
    let div_course = document.createElement("div");
    div_course.id = "card" + i;
    div_course.classList.add("cards");
    contuner.appendChild(div_course);

    let card = document.createElement("div");
    card.classList.add("cards");
    div_course.appendChild(card);

    let course = document.createElement("div");
    course.classList.add("course");
    div_course.appendChild(course);

    let delete_btn = document.createElement("button");
    delete_btn.textContent = ("-");
    delete_btn.id = i;
    delete_btn.classList.add("delete_btn");

    delete_btn.addEventListener("click", (event) => {
        console.log("delete btn");
        selectdelete = event.target.id;
        console.log(selectdelete);
        let _div = document.querySelector("#del_btn");
        _div.style.display = "flex";

    });
    course.appendChild(delete_btn);

    let _h2 = document.createElement("h2");
    _h2.textContent = x.name;
    course.appendChild(_h2);

    let _p = document.createElement("p");
    _p.textContent = "Price: " + x.Price + "$";
    course.appendChild(_p);

    let _div = document.createElement("div");
    _div.classList.add("state");
    _div.textContent = x.StatusCourse;
    course.appendChild(_div);
}

function BehaverAddBtn() {

    let hold_form = document.createElement("div");
    hold_form.id = "hold_form";
    hold_form.classList.add("holdFromAdd");
    document.body.append(hold_form);

    let form_add = document.createElement("form");
    form_add.id = "form_add";
    form_add.classList.add("AddCourse");
    hold_form.append(form_add);

    let header_add = document.createElement("h2");
    header_add.textContent = "Add Course";
    form_add.append(header_add);

    let name_input = document.createElement("input");
    name_input.placeholder = "Course Name";
    name_input.classList.add("AddCourseInput");
    form_add.append(name_input);

    let price_input = document.createElement("input");
    price_input.placeholder = "Course Price";
    price_input.classList.add("AddCourseInput");
    form_add.append(price_input);

    let button_add = document.createElement("button");
    button_add.type = "submit";
    button_add.textContent = "Add ";
    button_add.classList.add("AddCoursebtn");
    form_add.append(button_add);

    form_add.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit button ", name_input.value, price_input.value);
        const tmp = {
            name: name_input.value,
            Price: price_input.value,
            StatusCourse: "Enroll"
        };
        matrial.push(tmp);
        CreateCard(tmp, matrial.length - 1);
        let btn = document.querySelector("#hold_form");
        btn.style.display = "none";
    });
}
function BehaverDelete() {
    // alert("The course has been deleted successfully"); // how to show a toest message in Js 

    matrial.splice(selectdelete, 1);
     let _div = document.querySelector("#del_btn");
    let cardToDelete = document.getElementById("card" + selectdelete);
    cardToDelete.remove();
    _div.style.display = "none";

    let _form = document.createElement("div");
    _form.classList.add("del_message");

    let _icon = document.createElement("div");
    _icon.classList.add("success_icon");
    _icon.textContent = "✓";

    let _h2 = document.createElement("h2");
    _h2.textContent = "Course Deleted!";

    let _p = document.createElement("p");
    _p.textContent = "The course was successfully deleted.";

    _form.appendChild(_icon);
    _form.appendChild(_h2);
    _form.appendChild(_p);
    document.body.append(_form);
    // setTimeout(functionToRun, time); 
    setTimeout(() => {
        _form.remove();
    }, 1000);
}

//   Main 
    matrial.forEach((x, i) => {
    CreateCard(x, i);

});
BehaverAddBtn();

let btn = document.querySelector("#addcourse");
btn.addEventListener("click", () => {
    console.log("clcik button ");
    let btn = document.querySelector("#hold_form");
    btn.style.display = "flex";
})

let del = document.querySelector("#del");
del.addEventListener("click", (event) => {
    BehaverDelete();
});

let cancle = document.querySelector("#cancel");
cancle.addEventListener("click", () => {
    _div.style.display = "none";
});
