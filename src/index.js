module.exports = function reverse (n) {
  const pos = Math.abs(n);

  const str = pos.toString();

  return str.split('').reverse().filter((item, index) => !index ? Number(item) : true).join('');
}
