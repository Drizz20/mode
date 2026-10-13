function updateClock(){
    const now = new Date()


    const hour = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()


    document.getElementById("num").textContent =`${hour}hrs:${minutes}mins:${seconds}secs`
}

    const input = document.querySelector("#name");
    const btn = document.querySelector("#btn");

    let message = document.createElement("h3")
    document.body.appendChild(message);

    btn.addEventListener("click", function(){
    const name = input.value;
    const now = new Date();
    const hour = now.getHours();

    let timeGreeting = "";
    if (hour < 12){
        timeGreeting = "Good morning";
    }else if (hour < 18){
        timeGreeting = "Good afternoon";
    }else {
        timeGreeting = "Good evening"
    }

    
        if (name.trim() !== ""){
        message.textContent = `${timeGreeting}, ${name}!`;
        } else{
            message.textContent = "Please enter your name!";
        }
        
});

setInterval(updateClock, 1000);
updateClock();
