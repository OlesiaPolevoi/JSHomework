const title = "JS homework";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 8;
const rollback = 28;
const fullPrice = 30000000000;
const adaptive = true;

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
