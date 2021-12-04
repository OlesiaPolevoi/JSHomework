"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 28,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, сложные"
    );

    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(appData.screenPrice));
    appData.screenPrice = +appData.screenPrice;

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let promptValue;

      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
      }

      do {
        promptValue = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(promptValue));
      sum += +promptValue;
    }

    return sum;
  },

  getFullPrice: function (price, serviceprices) {
    return price + serviceprices;
  },

  getServicePercentPrices: function (a, b) {
    return a - a * (b / 100);
  },

  getTitle: function () {
    return (
      appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1)
    );
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },
};

appData.asking();
appData.allServicePrices = appData.getAllServicePrices();
appData.fullPrice = appData.getFullPrice(
  appData.screenPrice,
  appData.allServicePrices
);
appData.servicePercentPrice = appData.getServicePercentPrices(
  appData.fullPrice,
  appData.rollback
);
appData.title = appData.getTitle();

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);
