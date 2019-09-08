"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const ACCESS_GRANTED = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
const CANCELLED_BY_USER = "Отменено пользователем!";

const userSaid = prompt("");

if (userSaid === null) {
  message = CANCELLED_BY_USER;
  console.assert(
    userSaid === null && message === CANCELLED_BY_USER,
    "Error in null processing"
  );
} else if (userSaid === ADMIN_PASSWORD) {
  message = ACCESS_GRANTED;
  console.assert(
    userSaid === ADMIN_PASSWORD && message === ACCESS_GRANTED,
    "Error in logging processing"
  );
} else {
  message = ACCESS_DENIED;
  console.assert(
    userSaid !== ADMIN_PASSWORD &&
      userSaid !== null &&
      message === ACCESS_DENIED,
    "Error in wrong pass processing"
  );
}

alert(message);
