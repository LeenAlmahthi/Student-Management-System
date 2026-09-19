function validation() {
    try {
        // if (!email.includes('@'))   [this check by a form by browser]
        // throw "Email isn't correct";
        let Name = $("#name").val();
        let email = $("#email").val();
        let Password = $("#Password").val();
        let confirm_password = $("#confirm_password").val();
        if (!Name || !email || !Password || !confirm_password)
            throw ("One of the input is empty");
        if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/.test(Password))
            throw ("password must have atleast 1 captial char and numebr and one spicial chat ");
        if (Password !== confirm_password)
            throw ("password must be match");
        console.log("the validation Done:))");
    }
    catch (error) {
        console.log("Error: ", error);
    }
}
function CallApi() {
    const data = {
        username: $("#name").val(),
        email: $("#email").val(),
        Password: $("#Password").val()
    };
    try {

        const body_data = JSON.stringify(data);
        console.log(body_data);
        $.ajax({
            url: "http://localhost:5000/api/authApplication/Register",
            method: "POST",
            contentType: "application/json",
            data: body_data,
            success: function (data) {
                console.log(data);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    catch (error) {
        console.log("Error in Api: " ,error);
    }
};
function LoginUser()
{
    const data = {
        username: $("#name").val(),
        Password: $("#Password").val()
    };
    data_body = JSON.stringify(data);
    $.ajax({
        url : "http://localhost:5000/api/authApplication/Login",
        method: "POST",
        contentType: "application/json",
        data: data_body,
        success: function (data)
        {
            console.log("Login ",data);
        },  
        error: function (error)
        {
            console.log("Error Login: ", error);
        }
    });
}

// MAIN 
try {
    let FormRegister = $("#inside");
    FormRegister.on("submit", (event) => {
        event.preventDefault();
        validation();
        CallApi();
        LoginUser();
    })
}
catch (error) {
    console.log("Error: ", error);
}