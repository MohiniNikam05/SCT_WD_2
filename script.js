let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener("click", (e) => {
        let btn= e.target.innerHTML;
       
        if (btn === "="){
            calculateExpression();
        } else if (btn === "AC") {
            string = "";
            input.value = string;
        } else if (btn === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += btn;
            input.value = string;
        }
    })
});

function calculateExpression() {
    try {
        let result = eval(string);
        string = result.toString();
        input.value = string;
    } catch (error) {
        input.value = "Error";
        string = "";
    }
}

document.addEventListener("keydown",function (event){
    const allowedKeys = "0123456789+-*/.%";

    if (allowedKeys.includes(event.key)) {
        string += event.key;
        input.value = string;
    } 
    else if (event.key === "Enter") {
        calculateExpression();
    }
     else if (event.key === "Backspace") {
        string = string.slice(0, -1);
        input.value = string;
    }
     else if (event.key === "Escape") {
        string = "";
        input.value = string;
    }
})