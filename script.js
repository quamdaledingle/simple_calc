let num1 = document.querySelector(".num1");
let op = document.querySelector(".op");
let num2 = document.querySelector(".num2");
let outputBox = document.querySelector(".outputBox");


document.querySelectorAll(".btn1").forEach((btn) => {
    btn.addEventListener("click", function () {
        let numselected = this.value;
        console.log(numselected);
        num1.value = num1.value + numselected;
    });
});




document.querySelectorAll(".btn2").forEach((btn) => {
    btn.addEventListener("click", function () {
        let numselected = this.value;
        console.log(numselected);
        num2.value = num2.value + numselected;
    });
});



document.querySelectorAll(".opbtn").forEach((btn) => {
    btn.addEventListener("click", function () {
        let numselected = this.value;
        console.log(numselected);
        op.value = numselected;
    });
});
document.querySelector(".awnser").addEventListener("click", function () {
    let value1 = Number(num1.value);
    let value2 = Number(num2.value);
    let operation = op.value;

    if (operation == "plus"){
        outputBox.value = value1 + value2;
    }
    else if (operation == "minus"){
        outputBox.value = value1 - value2;
     }
    else if (operation == "times"){
        outputBox.value = value1 * value2;
    }
    else if (operation == "divide"){
        outputBox.value = value1 / value2;
    }
});