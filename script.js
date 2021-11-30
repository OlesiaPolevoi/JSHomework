"use strict";
let title = prompt("Как называется ваш проект?");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let adaptive = !!prompt("Нужен ли адаптив на сайте?", "true/false");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");

let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let rollback = 28;

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} юани`);
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "юани");

console.log(screens.toLowerCase());
console.log(screens.split(" "));
console.log(screens.toLowerCase().split(" "));

console.log(fullPrice * (rollback / 100));

let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
console.log(Math.ceil(servicePercentPrice));

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice <= 0) {
  console.log("Что то пошло не так");
}
