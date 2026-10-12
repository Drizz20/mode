const modeBtn = document.getElementById("Dark");

modeBtn.addEventListener("click",function(){


    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        modeBtn.textContent = "Light-mode";
        localStorage.setItem("mode", "dark")
    }else{
        modeBtn.textContent = "Dark-mode";
        localStorage.setItem("mode", "light")
    }
});

const savedMode = localStorage.getItem('mode')
if(savedMode === "Dark"){
    document.body.classList.add("dark-mode")
    modeBtn.textContent = "light-mode"
}