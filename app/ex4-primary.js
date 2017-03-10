String.prototype.containsNumber = function (number) {
  return this.indexOf(number) >= 0;
};

String.prototype.hasNumber = function () {
  return /[0-9]/.test(this);
};

String.prototype.toNumber = function () {
  // /[^0-9]/g <=> new RegExp('[^0-9]', 'g');
  return Number(this.replace(/[^0-9]/g, ''));
};

console.log('Contains number');
let ret = 'aze12qsd13wxc14'.containsNumber(12);
console.log(ret);

console.log('hasNumber');
console.log('aze12qsd13wxc14'.hasNumber());

console.log('toNumber');
console.log('aze12qsd13wxc14'.toNumber());
