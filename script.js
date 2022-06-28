var score = document.getElementById("score")
var final = document.getElementById("final")
const button1 = document.getElementById("btn1")
const button2 = document.getElementById("btn2")
const button3 = document.getElementById("btn3")
const button4 = document.getElementById("btn4")
const button5 = document.getElementById("btn5")
const button6 = document.getElementById("btn6")
const button7 = document.getElementById("btn7")
const button8 = document.getElementById("btn8")
const button9 = document.getElementById("btn9")
const button0 = document.getElementById("btn0")
const buttondot = document.getElementById("btn.")
const buttoneq = document.getElementById("btn=")
const buttonplus = document.getElementById("btn+")
const buttonminus = document.getElementById("btn-")
const buttonmult = document.getElementById("btnmult")
const buttondiv = document.getElementById("btndiv")
const buttonclr = document.getElementById("btnclr")
const buttondel = document.getElementById("btndel")




function clear() {
    score.innerHTML = '';
    final.innerHTML = '';
}

function del() {
    var scorestr = score.innerHTML.toString()
    var scorestr = scorestr.substring(0, (scorestr.length-1));
    score.innerHTML = scorestr;
}

function doMath() {
    final.innerHTML = eval(score.innerHTML)
}


button1.addEventListener('click', function() {
    score.innerHTML += "1"
})

button2.addEventListener('click', function() {
    score.innerHTML += "2"
})

button3.addEventListener('click', function() {
    score.innerHTML += "3"
})

button4.addEventListener('click', function() {
    score.innerHTML += "4"
})

button5.addEventListener('click', function() {
    score.innerHTML += "5"
})

button6.addEventListener('click', function() {
    score.innerHTML += "6"
})

button7.addEventListener('click', function() {
    score.innerHTML += "7"
})

button8.addEventListener('click', function() {
    score.innerHTML += "8"
})

button9.addEventListener('click', function() {
    score.innerHTML += "9"
})

buttondot.addEventListener('click', function() {
    score.innerHTML += "."
})

button0.addEventListener('click', function() {
    score.innerHTML += "0"
})

buttonplus.addEventListener('click', function() {
    score.innerHTML += "+"
})

buttonminus.addEventListener('click', function() {
    score.innerHTML += "-"
})

buttonmult.addEventListener('click', function() {
    score.innerHTML += "*"
})

buttondiv.addEventListener('click', function() {
    score.innerHTML += "/"
})

buttonclr.addEventListener('click', function() {
    clear();
})

buttoneq.addEventListener('click', function() {
    doMath();
})

buttondel.addEventListener('click', function() {
    del();
})