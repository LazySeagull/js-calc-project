// variable declared
const numbers = document.querySelectorAll(".NumberButton #num")

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
equationReview.textContent = "";
const equationMain = document.querySelector(".EquationMain");
equationMain.textContent = "";

// append to the main string (numbers)

numbers.forEach(button =>{
    button.addEventListener("click" , () =>{
        equationReview.textContent += button.textContent;
        equationMain.textContent = button.textContent;
    })
})

// add operations to the main string

add.addEventListener("click", () => {
  if (equationReview.textContent == "" && equationMain.textContent != "") {
    equationReview.textContent = equationMain.textContent + add.textContent;
    equationMain.textContent = add.textContent;
  } else {
    equationMain.textContent = add.textContent;
    equationReview.textContent += add.textContent;
  }
});

mul.addEventListener("click", () => {
  if (equationReview.textContent == "" && equationMain.textContent != "") {
    equationReview.textContent = equationMain.textContent + mul.textContent;
    equationMain.textContent = mul.textContent;
  } else {
    equationMain.textContent = mul.textContent;
    equationReview.textContent += mul.textContent;
  }
});

divide.addEventListener("click", () => {
  if (equationReview.textContent == "" && equationMain.textContent != "") {
    equationReview.textContent = equationMain.textContent + divide.textContent;
    equationMain.textContent = divide.textContent;
  } else {
    equationMain.textContent = divide.textContent;
    equationReview.textContent += divide.textContent;
  }
});

subtract.addEventListener("click", () => {
  if (equationReview.textContent == "" && equationMain.textContent != "") {
    equationReview.textContent =
      equationMain.textContent + subtract.textContent;
    equationMain.textContent = subtract.textContent;
  } else {
    equationMain.textContent = subtract.textContent;
    equationReview.textContent += subtract.textContent;
  }
});

// other functions

equals.addEventListener("click", () => {
  const result = math.evaluate(equationReview.textContent);
  equationMain.textContent = result;
  equationReview.textContent = "";
});

clear.addEventListener("click", () => {
  equationMain.textContent = "";
  equationReview.textContent = "";
});
