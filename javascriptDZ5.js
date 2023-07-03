const rate = 32.4;

let number = prompt("Введите сумму в долларах: ");

let result = number * rate;

result = result.toFixed(2);

alert("Результат обмена: " + result + " гривен");