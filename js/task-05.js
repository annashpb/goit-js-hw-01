'use strict'

let price;
const country = prompt('Укажите страну доставки').toLowerCase();
let countryName = country[0].toUpperCase() + country.slice(1);

const NO_DELIVERY = 'В вашей стране доставка не доступна';

switch (country) {
    case 'Китай'.toLowerCase():
    price = 100;
    break;

    case 'Чили'.toLowerCase():
    price = 250;
    break;

    case 'Австралия'.toLowerCase():
    price = 170;
    break;

    case 'Индия'.toLowerCase():
    price = 80;
    break;

    case 'Ямайка'.toLowerCase():
    price = 120;
    break;
    
    default:
        alert(NO_DELIVERY);
}

const DELIVERY_COST = `Доставка в ${countryName} будет стоить ${price} кредитов`;
alert(DELIVERY_COST);
