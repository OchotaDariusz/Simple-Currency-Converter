const input = require('sync-input');

class CurrencyConverter {
  constructor() {
    this.rates = {
      USD: 1,
      JPY: 113.5,
      EUR: 0.89,
      RUB: 74.36,
      GBP: 0.75
    };
    this.currencies = Array.from(Object.keys(this.rates));
    this.from = undefined;
    this.to = undefined;
    this.amount = undefined;
  }

  init() {
    console.log('Welcome to Currency Converter!');
    for (let currency of this.currencies) {
      console.log(`1 USD equals  ${this.rates[currency]} ${currency}`);
    }

    this.start();
  }

  start() {
    console.log('What do you want to do?');
    console.log('1-Convert currencies 2-Exit program');

    let choice = Number(input().trim());

    while (choice !== 1) {
      if (choice === 2) {
        console.log('Have a nice day!');
        return;
      } else if (choice !== 1) {
        console.log('Unknown input');
        choice = Number(input().trim());
      }
    }
    this.getCurrencies()
  }

  getCurrencies() {
    console.log('What do you want to convert?');

    let _from = input('From: ').trim().toUpperCase();
    while (!this.currencies.includes(_from)) {
      console.log('Unknown currency');
      _from = input('From: ').trim().toUpperCase();
    }
    this.from = _from;

    let _to = input('To: ').trim().toUpperCase();
    while (!this.currencies.includes(_to)) {
      console.log('Unknown currency');
      _to = input('To: ').trim().toUpperCase();
    }
    this.to = _to;

    this.getAmount();
  }

  getAmount() {
    let amount = Number(input('Amount: ').trim());

    while (amount < 1 || isNaN(amount)) {
      if (amount < 1) {
        console.log('The amount can not be less than 1');
      } else if (isNaN(amount)) {
        console.log('The amount has to be a number');
      }
      amount = Number(input('Amount: ').trim());
    }
    this.amount = amount;

    this.exchange();
  }

  exchange() {
    let result = this.amount * this.rates[this.to] / this.rates[this.from];
    console.log(`Result: ${this.amount} ${this.from} equals ${result.toFixed(4)} ${this.to}`);

    this.start();
  }
}

const currencyConverter = new CurrencyConverter();
currencyConverter.init();