'use strict'

let input;
let total = 0;

while (input !== null) {
    input = prompt('Введите число');
    if (input === null) {
        break;
    }
    if (Number.isNaN(parseFloat(input))) {
        alert(`Было введено не число, попробуйте еще раз`);
        input = 0;
    }
    total += parseFloat(input);
}

alert(`Общая сумма чисел равна ${total}`);