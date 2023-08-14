module.exports = function toReadable(num) {
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (num < 10) {
    return ones[num];
  } else if (num < 20) {
    return teens[num - 10];
  } else if (num < 100) {
    const tenDigit = Math.floor(num / 10);
    const oneDigit = num % 10;
    return `${tens[tenDigit]}${oneDigit === 0 ? '' : ' ' + ones[oneDigit]}`;
  } else if (num < 1000) {
    const hundredDigit = Math.floor(num / 100);
    const tenDigit = Math.floor((num % 100) / 10);
    const oneDigit = num % 10;
    let result = `${ones[hundredDigit]} hundred`;
    if (tenDigit === 1) {
      result += ` ${teens[oneDigit]}`;
    } else {
      result += `${tenDigit === 0 ? '' : ' ' + tens[tenDigit]}${oneDigit === 0 ? '' : ' ' + ones[oneDigit]}`;
    }
    return result;
  } else {
    return 'Number is too large';
  }
}
