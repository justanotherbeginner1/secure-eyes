let mailInput = document.querySelector("#mail-input");
let passInput = document.querySelector("#pass-input");
let accesBtn = document.querySelector("#access-button");

let systemMail = "sagar@gmail.com"
let systemPass = "admin123"


accesBtn.addEventListener("click", function(){
    if( mailInput.value === systemMail && passInput.value === systemPass){
        window.location.href = "dashboard.html"
    }else{

        if(mailInput.value === "" || passInput.value === ""){
            alert("Email and Password cannot be empty");
        }else{
        alert("Wrong Email or Password");
        mailInput.value = "";
        passInput.value = "";
        }
    };
});

