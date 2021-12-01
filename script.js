"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 28;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

const getAllServicePrices = function (price1, price2) {
  return price1 + price2;
};

function getFullPrice(price, serviceprices) {
  return price + serviceprices;
}

const getTitle = function (title) {
  return title.trim()[0].toUpperCase() + title.trim().slice(1);
};
const getServicePercentPrices = function (a, b) {
  return a - b;
};

console.log(getTitle(title));

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

fullPrice = getFullPrice(screenPrice, allServicePrices);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens.split(" "));

console.log(getRollbackMessage(fullPrice));

servicePercentPrice = getServicePercentPrices(fullPrice, servicePercentPrice);
console.log(servicePercentPrice);
