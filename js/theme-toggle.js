themeButton = document.querySelector("#theme-btn");


document.addEventListener("DOMContentLoaded", function(){

    let savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){
        document.body.classList.add("dark-mode");
        if(themeButton){
            themeButton.checked = false;
        }
    } else {
        document.body.classList.remove("dark-mode");
        if(themeButton){
            themeButton.checked = true;
        }
    }

});



if(themeButton){
    themeButton.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");


          if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });
}