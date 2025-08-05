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

//operations

const add = document.getElementById("add");
const mul = document.getElementById("mul");
const divide = document.getElementById("divide");
const subtract = document.getElementById("subtract");

//other

const equals = document.getElementById("equals");  
const clear = document.getElementById("clear");

// the display window 

const equationReview = document.querySelector(".EquationReview");
equationReview.textContent="";
const equationMain = document.querySelector(".EquationMain");
equationMain.textContent = "";

// append to the main string (numbers)
one.addEventListener("click",()=>{
    equationReview.textContent += one.textContent;
    equationMain.textContent = one.textContent;
})

two.addEventListener("click",()=>{
    equationReview.textContent += two.textContent;
    equationMain.textContent = two.textContent;
})

three.addEventListener("click",()=>{
    equationReview.textContent += three.textContent;
    equationMain.textContent = three.textContent;
})

four.addEventListener("click",()=>{
    equationReview.textContent += four.textContent;
    equationMain.textContent = four.textContent;
})

five.addEventListener("click",()=>{
    equationReview.textContent += five.textContent;
    equationMain.textContent = five.textContent;
})

six.addEventListener("click",()=>{
    equationReview.textContent += six.textContent;
    equationMain.textContent = six.textContent;
})

seven.addEventListener("click",()=>{
    equationReview.textContent += seven.textContent;
    equationMain.textContent = seven.textContent;
})

eight.addEventListener("click",()=>{
    equationReview.textContent += eight.textContent;
    equationMain.textContent = eight.textContent;
})

nine.addEventListener("click",()=>{
    equationReview.textContent += nine.textContent;
    equationMain.textContent = nine.textContent;
})

ten.addEventListener("click",()=>{
    equationReview.textContent += ten.textContent;
    equationMain.textContent = ten.textContent;
})


// add operations to the main string

add.addEventListener("click" , () => {

    if(equationReview.textContent == "" && equationMain.textContent != ""){
        equationReview.textContent = equationMain.textContent + add.textContent;
        equationMain.textContent = add.textContent;
    }
    else{
        equationMain.textContent = add.textContent;
        equationReview.textContent += add.textContent;
    }
})

mul.addEventListener("click" , () => {
     if(equationReview.textContent == "" && equationMain.textContent != ""){
        equationReview.textContent = equationMain.textContent + mul.textContent;
        equationMain.textContent = mul.textContent;
    }
    else{
        equationMain.textContent = mul.textContent;
        equationReview.textContent += mul.textContent;
    }
})

divide.addEventListener("click" , () => {
 if(equationReview.textContent == "" && equationMain.textContent != ""){
        equationReview.textContent = equationMain.textContent + divide.textContent;
        equationMain.textContent = divide.textContent;
    }
    else{
        equationMain.textContent = divide.textContent;
        equationReview.textContent += divide.textContent;
    }
})

subtract.addEventListener("click" , () => {
 if(equationReview.textContent == "" && equationMain.textContent != ""){
        equationReview  .textContent = equationMainz.textContent + subtract.textContent;
        equationMain.textContent = subtract.textContent;
    }
    else{
        equationMain.textContent = subtract.textContent;
        equationReview.textContent += subtract.textContent;
    }
})


// other functions 

equals.addEventListener("click" , () =>{
    const result = math.evaluate(equationReview.textContent);
    equationMain.textContent = result;
    equationReview.textContent= "";
})


clear.addEventListener("click" , () => {
    equationMain.textContent ="";
    equationReview.textContent="";
})
