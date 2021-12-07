"use strict";

const theTitle = document.getElementsByTagName("h1");
console.log(theTitle[0].innerHTML);

const handlerBtn = document.getElementsByClassName("handler_btn");
console.log(handlerBtn[0].innerHTML, handlerBtn[1].innerHTML);

const plusSign = document.querySelector(".screen-btn");
console.log(plusSign.innerHTML);

const otherItemsNumber = document.querySelectorAll(".other-items.number");
console.log(otherItemsNumber);

const otherItemsPercent = document.querySelectorAll(".other-items.percent");
console.log(otherItemsPercent);

const rollbackInput = document.querySelector(".rollback input[type=range]");
console.log(rollbackInput);

const rollbackSpan = document.querySelector(".rollback span");
console.log(rollbackSpan);

const totalInput = document.getElementsByClassName("total-input");
console.log(totalInput);

let screenBlocks = document.querySelectorAll(".screen");
console.log(screenBlocks);

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 28,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  start: function () {
    this.asking();
    this.addPrices();
    this.getFullPrice(this.screenPrice, this.allServicePrices);
    this.getServicePercentPrices(this.fullPrice, this.rollback);
    this.getTitle();

    this.logger();
  },

  asking: function () {
    do {
      this.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    } while (this.isNumber(this.title));

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (this.isNumber(name));

      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!this.isNumber(price));
      price = +price;

      this.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      let promptValue;

      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (this.isNumber(name));

      do {
        promptValue = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(promptValue));
      this.services[name] = +promptValue;
    }

    this.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }

    for (let key in this.services) {
      this.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function (price, serviceprices) {
    this.fullPrice = price + serviceprices;
  },

  getServicePercentPrices: function (a, b) {
    this.servicePercentPrice = a - a * (b / 100);
  },

  getTitle: function () {
    this.title =
      this.title.trim()[0].toUpperCase() + this.title.trim().slice(1);
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

  logger: function () {
    console.log(this.fullPrice);
    console.log(this.servicePercentPrice);
    console.log(this.screens);
  },
};

// appData.start();
