const button1 = document.getElementById("but_1");
const button2 = document.getElementById("but_2");
const button3 = document.getElementById("but_3");
const button4 = document.getElementById("but_4");
const button5 = document.getElementById("but_5");
const button6 = document.getElementById("but_6");
const button7 = document.getElementById("but_7");
const button8 = document.getElementById("but_8");
const button9 = document.getElementById("but_9");
const button0 = document.getElementById("but_0");
const buttonComma = document.getElementById("but_,");
const buttonEqual = document.getElementById("but_=");
const buttonPlus = document.getElementById("but_+");
const buttonMines = document.getElementById("but_-");
const buttonMul = document.getElementById("but_x");
const buttonDiv = document.getElementById("but_/");
const buttonC = document.getElementById("but_c");
const buttonProc = document.getElementById("but_%");
const buttonPlMin = document.getElementById("but_+-");


let a = 0;
let prtext = "";
let b = 0;
let c = 0;
let action = "";
let procA = "";

button1.addEventListener("click", () => {
    if(prtext == a){
        prtext = "1";
    }
    else{
        prtext = prtext + "1";
    }
    
    document.getElementById("label").innerHTML = prtext;
})

button2.addEventListener("click", () => {
    if(prtext == a){
        prtext = "2";
    }
    else{
        prtext = prtext + "2";
    }

    document.getElementById("label").innerHTML = prtext;
})
button3.addEventListener("click", () => {
    if(prtext == a){
        prtext = "3";
    }
    else{
        prtext = prtext + "3";
    }

    document.getElementById("label").innerHTML = prtext;
})

button4.addEventListener("click", () => {
    if(prtext == a){
        prtext = "4";
    }
    else{
        prtext = prtext + "4";
    }

    document.getElementById("label").innerHTML = prtext;
})

button5.addEventListener("click", () => {
    if(prtext == a){
        prtext = "5";
    }
    else{
        prtext = prtext + "5";
    }

    document.getElementById("label").innerHTML = prtext;
})

button6.addEventListener("click", () => {
    if(prtext == a){
        prtext = "6";
    }
    else{
        prtext = prtext + "6";
    }

    document.getElementById("label").innerHTML = prtext;
})

button7.addEventListener("click", () => {
    if(prtext == a){
        prtext = "7";
    }
    else{
        prtext = prtext + "7";
    }

    document.getElementById("label").innerHTML = prtext;
})

button8.addEventListener("click", () => {
    if(prtext == a){
        prtext = "8";
    }
    else{
        prtext = prtext + "8";
    }

    document.getElementById("label").innerHTML = prtext;
})

button9.addEventListener("click", () => {
    if(prtext == a){
        prtext = "9";
    }
    else{
        prtext = prtext + "9";
    }

    document.getElementById("label").innerHTML = prtext;
})

button0.addEventListener("click", () => {
    if(prtext == a){
        prtext = "0";
    }
    else{
        prtext = prtext + "0";
    }

    document.getElementById("label").innerHTML = prtext;
})

buttonComma.addEventListener("click", () => {
    if(prtext.includes(".") === true){prtext = prtext}
    else{prtext = prtext + "."};
    document.getElementById("label").innerHTML = prtext;
});

console.log(prtext.includes("."))

buttonPlus.addEventListener("click", () => {
    a = Number(prtext);
    prtext = a;
    action = "+";
    document.getElementById("label").innerHTML = prtext;
});

buttonMines.addEventListener("click", () => {
    a = Number(prtext);
    prtext = a;
    action = "-";
    document.getElementById("label").innerHTML = prtext;
})

buttonMul.addEventListener("click", () => {
    a = Number(prtext);
    prtext = a;
    action = "*";
    document.getElementById("label").innerHTML = prtext;
})

buttonDiv.addEventListener("click", () => {
    a = Number(prtext);
    prtext = a;
    action = "/";
    document.getElementById("label").innerHTML = prtext;
})

buttonProc.addEventListener("click", () => {
    b = Number(prtext);
    if(action == "-" || action == "+"){
        prtext = a*b/100;
    }
    else{prtext = b/100;}
    procA = "%";
    document.getElementById("label").innerHTML = prtext;
});

buttonPlMin.addEventListener("click", () => {
    if(action !== ""){
        b = Number(prtext);
        prtext = -b;
    }
    document.getElementById("label").innerHTML = prtext;
})


buttonC.addEventListener("click", () => {
    prtext = "0";
    a = 0;
    document.getElementById("label").innerHTML = prtext;
})

// Wybór funckji matematycznej 
buttonEqual.addEventListener("click", () => {
    b = Number(prtext);
    console.log(a); console.log(b);
    switch(action){
        case "-":
            mines();
            break;
        case "+":
            sum();
            break;
        case "*":
            mul();
            break;
        case "/":
            div();
    }
    prtext = c;
    a = c;
    document.getElementById("label").innerHTML = prtext;
})

// Matematyczne funkcji
function mines(){
    if(procA == "%"){
        c = a - b;
        procA = "";
    }
    else{
        c = a - b
    }
    
}

function sum(){
    if(procA == "%"){
        c = a + b;
        procA = "";
    }
    else{
        c = a + b;    
    }
    
}

function mul(){
    if(procA == "%"){
        c = a * b;
        procA ="";
    }
    else{
        c = a * b;
    }
    
}

function div(){
    if(procA == "%"){
        c = a / b;
        procA ="";
    }
    else{
        c = a / b;
    }
    
}


