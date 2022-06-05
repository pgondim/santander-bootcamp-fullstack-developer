var button = document.getElementById('action');
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');
function somar(number1, number2) {
    return (number1 + number2);
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () { return console.log(somar(Number(input1 === null || input1 === void 0 ? void 0 : input1.value), Number(input2 === null || input2 === void 0 ? void 0 : input2.value))); });
