let red = prompt("Введите значения красного цвета: ");
let green = prompt("Введите значение для зеленого цвета: ");
let blue = prompt("Введите значение для синего цвета:");

let color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);

alert("СSS цвет: " + color);