/*let count = 0
let header = document.getElementById("count")
let button = document.getElementById("inc");
let button1 = document.getElementById("dec")
let button2 = document.getElementById("rst")
function updateDisplay(){
    header.textContent = count
}
button.addEventListener("click", function(){
    count = count + 1;
    updateDisplay()
})
button1.addEventListener("click", function(){
    count = count - 1;
    updateDisplay()
})
button2.addEventListener("click", function(){
    count = 0;
    updateDisplay()
})*/
let header = document.getElementById("head")
let paragraph = document.getElementById("para")
let button = document.getElementById("red");
let button1 = document.getElementById("blu");
let button2 = document.getElementById("grn");
let button3 = document.getElementById("yel");
let button4 = document.getElementById("rst");
let button5 = document.getElementById("random")

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

//function 

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i <6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.addEventListener("click",function(){
    changeBackgroundColor("red");
    header.textContent = "Current Color: Red"

});
button1.addEventListener("click",function(){
    changeBackgroundColor("blue");
    header.textContent = "Current Color: Blue"
});
button2.addEventListener("click",function(){
    changeBackgroundColor("green");
    header.textContent = "Current Color: Green"
});
button3.addEventListener("click",function(){
    changeBackgroundColor("yellow");
    header.textContent = "Current Color: Yellow"
});
button4.addEventListener("click", function(){
    changeBackgroundColor("");
    header.textContent= "Currently on Reset"
})
button5.addEventListener("click", function(){
    const randomColor = getRandomColor();
    changeBackgroundColor(randomColor)
})