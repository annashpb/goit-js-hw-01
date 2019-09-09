"use strict";

let price;
const country = prompt("Укажите страну доставки").toLowerCase();
let countryName = country[0].toUpperCase() + country.slice(1);

const NO_DELIVERY = "В вашей стране доставка не доступна";

switch (country) {
  case "Китай".toLowerCase():
    price = 100;
    alert(`Доставка в ${countryName} будет стоить ${price} кредитов`);
    break;

  case "Чили".toLowerCase():
    price = 250;
    alert(`Доставка в ${countryName} будет стоить ${price} кредитов`);
    break;

  case "Австралия".toLowerCase():
    price = 170;
    alert(`Доставка в ${countryName} будет стоить ${price} кредитов`);
    break;

  case "Индия".toLowerCase():
    price = 80;
    alert(`Доставка в ${countryName} будет стоить ${price} кредитов`);
    break;

  case "Ямайка".toLowerCase():
    price = 120;
    alert(`Доставка в ${countryName} будет стоить ${price} кредитов`);
    break;

  default:
    alert(NO_DELIVERY);
}
