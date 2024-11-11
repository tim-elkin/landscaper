var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");
var btn9 = document.getElementById("myBtn9");

btn1.onclick = function () {
    modal.style.display = "block";
}


btn2.onclick = function () {
    modal.style.display = "block";
}

btn3.onclick = function () {
    modal.style.display = "block";
}

btn4.onclick = function () {
    modal.style.display = "block";
}

btn5.onclick = function () {
    modal.style.display = "block";
}

btn6.onclick = function () {
    modal.style.display = "block";
}

btn7.onclick = function () {
    modal.style.display = "block";
}

btn8.onclick = function () {
    modal.style.display = "block";
}

btn9.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var submitBtn = document.getElementById("submitMessage");
var userMessage = document.getElementById("userMessage");

submitBtn.onclick = function () {
    if (userMessage.value.trim()) {
        console.log("Сообщение пользователя:", userMessage.value);
        alert("Спасибо за ваше сообщение! Скоро мы свяжемся с вами!");
        userMessage.value = "";
        modal.style.display = "none"; 
    } else {
        alert("Пожалуйста, введите сообщение перед отправкой.");
    }
}
