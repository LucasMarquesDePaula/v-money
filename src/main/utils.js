import defaults from "./options";

function format (input = 0, opt = defaults) {
  const value =
    typeof input === "number" ? input.toFixed(fixed(opt.precision)) : input;

  const negative =
    value.indexOf("-") !== -1 && value.indexOf("+") === -1 ? "-" : "";

  const numbers = onlyNumbers(value);
  const currency = numbersToCurrency(numbers, opt.precision);
  const parts = toStr(currency).split(".");
  const [integerDirty, decimal] = parts;
  const integer = addThousandSeparator(integerDirty, opt.thousands);
  return [
    opt.prefix,
    negative,
    joinIntegerAndDecimal(integer, decimal, opt.decimal),
    opt.suffix,
  ].join("");
}

function unformat (input, precision) {
  const negative = input.indexOf("-") >= 0 ? -1 : 1;
  const numbers = onlyNumbers(input);
  const currency = numbersToCurrency(numbers, precision);
  return parseFloat(currency) * negative;
}

function onlyNumbers (input) {
  return toStr(input).replace(/\D+/gu, "") || "0";
}

// Uncaught RangeError: toFixed() digits argument must be between 0 and 20 at Number.toFixed
function fixed (precision) {
  const maxPrecision = 20;
  return between(0, precision, maxPrecision);
}

function between (min, number, max) {
  return Math.max(min, Math.min(number, max));
}

function numbersToCurrency (numbers, precision) {
  const baseTen = 10;
  const exp = Math.pow(baseTen, precision);
  const float = parseFloat(numbers) / exp;
  return float.toFixed(fixed(precision));
}

function addThousandSeparator (integer, separator) {
  return integer.replace(/(\d)(?=(?:\d{3})+\b)/gmu, `$1${separator}`);
}

function joinIntegerAndDecimal (integer, decimal, separator) {
  return decimal ? integer + separator + decimal : integer;
}

function toStr (value) {
  return value ? value.toString() : "";
}

function setCursor (el, position) {
  function setSelectionRange () {
    el.setSelectionRange(position, position);
  }
  if (el === document.activeElement) {
    setSelectionRange();
    setTimeout(setSelectionRange, 1); // Android Fix
  }
}

export { format,
  unformat,
  setCursor };
