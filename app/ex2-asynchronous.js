const countToFive = () => {
  let counter = 0;
  const interval = setInterval(() => {
      console.log(++counter);
    if (counter >= 5) {
      clearInterval(interval);
    }
  }, 1000);
};

module.exports = {countToFive};
