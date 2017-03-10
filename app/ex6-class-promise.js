class Restaurateur {
  constructor() {

  }

  commander() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.floor(Math.random() * 10) > 5) {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }
}

module.exports = {Restaurateur};

// const {Restaurateur} = require('./resto');
// const Restaurateur = require('./resto').Restaurateur ;
