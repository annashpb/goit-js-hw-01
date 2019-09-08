"use strict";

const credits = 23580;
const pricePerDroid = 3000;
const numberOfDroids = prompt("Сколько дроидов Вы желаете приобрести?");

const totalPrice = pricePerDroid * numberOfDroids;
const moneyLeft = credits - totalPrice;

let message;
const CANCELLED_BY_USER = "Отменено пользователем!";
const NOT_ENOAGH_MONEY = "Недостаточно средств на счету!";
const USER_PURCHASE = `Вы купили ${numberOfDroids} дроидов, на счету осталось ${moneyLeft} кредитов.`;

if (numberOfDroids === null) {
  message = CANCELLED_BY_USER;
  console.assert(
    numberOfDroids === null && message === CANCELLED_BY_USER,
    "Error in null processing"
  );
  console.log(message);
} else if (totalPrice > credits) {
  message = NOT_ENOAGH_MONEY;
  console.assert(
    totalPrice > credits && message === NOT_ENOAGH_MONEY,
    "Error in not-enoagh processing"
  );
  console.log(message);
} else {
  message = USER_PURCHASE;
  console.assert(
    numberOfDroids !== null &&
      totalPrice <= credits &&
      message === USER_PURCHASE,
    "Error in purchase processing"
  );
  console.log(message);
}
