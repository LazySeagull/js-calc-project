// variable declared

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const clear = document.getElementById("clear");
const add = document.getElementById("add");
const mul = document.getElementById("mul");
const divide = document.getElementById("divide");
const subtract = document.getElementById("subtract");
const equals = document.getElementById("equals");  

// the display window 

const equationReview = document.querySelector("EquationReview");
equationReview.textContent="";
const equationMain = document.querySelector("EquationMain");
equationMain.textContent = "";

// function to append to the main string

function appendToMain(string){
    equationMain.textContent+= string;
}









