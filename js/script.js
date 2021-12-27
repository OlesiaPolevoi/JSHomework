"use strict";

const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");

const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const btnStart = document.getElementsByClassName("handler_btn")[0];
const btnReset = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector(".rollback .range-value");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  rollbackDisplay: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},

  init: function () {
    this.addTitle();
    btnStart.addEventListener("click", this.start);
    btnReset.addEventListener("click", this.reset);
    buttonPlus.addEventListener("click", this.addScreenBlock);

    inputRange.addEventListener("input", this.rollbackInput);
  },
  isError: false,

  checkValues: function () {
    const dropdowns = document.querySelectorAll(
      ".screen .main-controls__select select"
    );
    const inputs = document.querySelectorAll(
      ".screen .main-controls__input input"
    );

    const newArr = [...dropdowns, ...inputs];

    this.isError = false;

    newArr.forEach((input) => {
      if (input.value === "") {
        this.isError = true;
      }
    });
  },

  addTitle: function () {
    document.title = title.textContent;
  },
  start: function () {
    appData.checkValues();
    if (appData.isError) {
      alert("complete empty fields");
    } else {
      appData.addScreens();
      appData.addServices();
      appData.addPrices();
      appData.showResults();
      appData.disableToggle(true);
      appData.changeBtn();
    }
    // this.logger();
  },

  showResults: function () {
    total.value = this.screenPrice;
    totalCountOther.value =
      appData.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
    totalCount.value = this.rollbackDisplay;
  },

  addScreens: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");

      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },
  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type = checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type = text]");

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type = checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type = text]");

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    cloneScreen.querySelector("input").value = "";

    // screens[screens.length - 1].after(cloneScreen);
    const screensContainer = document.querySelector(".main-controls__views");
    screensContainer.insertBefore(cloneScreen, buttonPlus);
  },

  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice =
      +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;

    this.servicePercentPrice =
      this.fullPrice - this.fullPrice * (this.rollback / 100);

    let sum = 0;
    this.screens.forEach((screen) => {
      sum += screen.count;
    });
    this.rollbackDisplay = sum;
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },

  rollbackInput: function (event) {
    inputRangeValue.textContent = event.target.value + "%";

    appData.rollback = event.target.value;
  },
  disableToggle: function (isDisabled) {
    const elemInput = document.querySelectorAll("input[type=text]");
    const elemSelect = document.querySelectorAll("select");
    const elemArray = [...elemSelect, ...elemInput];

    elemArray.forEach((elem) => {
      elem.disabled = isDisabled;
    });
  },
  changeBtn: function () {
    if (btnReset.style.display === "none") {
      btnStart.style.display = "none";
      btnReset.style.display = "block";
    }
  },
  reset: function () {
    if (btnStart.style.display === "none") {
      btnStart.style.display = "block";
      btnReset.style.display = "none";
    }

    let screens = document.querySelectorAll(".screen");
    screens.forEach((elem, i) => {
      if (i !== 0) {
        elem.remove();
      }
      // for (let i = 1; i < screens.length; i++) {
      //   screens[i].remove();
      // }
      if (i === 0) {
        const select = elem.querySelector("select");
        select.value = "";

        const inputElem = elem.querySelector("input");
        inputElem.value = "";
      }

      const checkBoxes = document.querySelectorAll("input[type = checkbox]");
      checkBoxes.forEach((elem) => {
        elem.checked = false;
      });
    });

    const rangeContainer = document.querySelector(".main-controls__range");
    const rangeInput = rangeContainer.querySelector("input");
    const rangeSpan = rangeContainer.querySelector("span");

    const total = document.getElementsByClassName("total-input")[0];
    const totalCount = document.getElementsByClassName("total-input")[1];
    const totalCountOther = document.getElementsByClassName("total-input")[2];
    const fullTotalCount = document.getElementsByClassName("total-input")[3];
    const totalCountRollback =
      document.getElementsByClassName("total-input")[4];

    rangeInput.value = 0;
    rangeSpan.innerText = "0%";
    this.rollback = 0;
    this.rollbackDisplay = 0;
    appData.disableToggle(false);
    total.value = 0;
    totalCount.value = 0;
    totalCountOther.value = 0;
    fullTotalCount.value = 0;
    totalCountRollback.value = 0;
  },
};

appData.init();
