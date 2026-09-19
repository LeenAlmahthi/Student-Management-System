function validation() {
    try {
        let Name = $("#username").val();
        let Password = $("#password").val();
        if (!Name || !Password )
        {
            throw ("One of the input is empty");
            //  return false;
        }
        console.log("the validation Done:))");
        return true;
    }
    catch (error) {
        console.log("Error: ", error);
        return false;
    }
}

function LoginUser()
{
    let data_ = {
        userName: $("#username").val(),
        password: $("#password").val()
    };
    data_body = JSON.stringify(data_);
    console.log("in Login ", data_body);
    $.ajax({
        url : "http://localhost:5000/api/authApplication/Login",
        method: "POST",
        contentType: "application/json",
        data: data_body,
         success: function (response, textStatus, xhr) {
        console.log("Success!");
        console.log("Status:", xhr.status);

        if (xhr.status === 200) {
            console.log("Login successful");
            console.log("Token:", response);
            localStorage.setItem("UserName", $("#username").val());
            console.log("Localstoge:" ,  localStorage.getItem("UserName") );
            window.location.href = "../html/home_page.html";
        }
        else if (xhr.status === 204) {
            console.log("User not found");
       $("#username").val("");
$("#password").val("");
    }
    },

    error: function (xhr) {
        console.log("Error!");
        console.log("Status:", xhr.status);

 
    }
    });
}

// MAIN 
try {
    let FormRegister = $("#login_form");
    FormRegister.on("submit", (event) => {
        event.preventDefault();
        if (!validation())
            {
        console.log("before a Api Login 55555555555555");

                return;
            }
                
        console.log("before a Api Login ");
        LoginUser();
    })
}
catch (error) {
    console.log("Error: ", error);
}