"use strict";

let title;
let screens;
let screenPrice;
let adaptive;

let rollback = 28;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, сложные");

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    }
    //NOTE
    let promptValue;
    do {
      promptValue = prompt("Сколько это будет стоить?");
    } while (!isNumber(promptValue));
    sum += promptValue;
  }
  return sum;
};

////
// do {
//   fullPrice = prompt("Сколько это будет стоить?");
// } while (!isNumber(fullPrice));
////

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getFullPrice = function (price, serviceprices) {
  return price + serviceprices;
};

const getServicePercentPrices = function (a, b) {
  return a - a * (b / 100);
};

const getTitle = function (title) {
  return title.trim()[0].toUpperCase() + title.trim().slice(1);
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

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle(title);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);
console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.split(" "));
console.log(Math.ceil(servicePercentPrice));

console.log(`Стоимость верстки экранов ${screenPrice} юани.`);
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "юани.");
