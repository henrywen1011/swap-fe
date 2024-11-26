import BigNumber from "bignumber.js";

const DEFAULT_PRECISION = 0;

const defaultFormatSettings = {
  // string to prepend
  prefix: "",
  // decimal separator
  decimalSeparator: ".",
  // grouping separator of the integer part
  groupSeparator: ",",
  // primary grouping size of the integer part
  groupSize: 3,
  // secondary grouping size of the integer part
  secondaryGroupSize: 0,
  // grouping separator of the fraction part
  fractionGroupSeparator: " ",
  // grouping size of the fraction part
  fractionGroupSize: 0,
  // string to append
  suffix: "",
};

BigNumber.config({
  ROUNDING_MODE: BigNumber.ROUND_DOWN,
  DECIMAL_PLACES: DEFAULT_PRECISION,
  FORMAT: defaultFormatSettings,
});

export const bigNumberPrefixes = [
  { value: 1, symbol: "" },
  { value: 1e3, symbol: "K" },
  { value: 1e6, symbol: "M" },
  { value: 1e9, symbol: "G" },
  { value: 1e12, symbol: "T" },
  { value: 1e15, symbol: "P" },
  { value: 1e18, symbol: "E" },
  { value: 1e21, symbol: "Z" },
  { value: 1e24, symbol: "Y" },
];

export const removeCommaFromString = (str: string) => str.replace(/,/g, ""); //str.replaceAll(",", "");

function removeZerosFromEnd(num: any) {
  const numStr = num.toString();
  const integerPart = numStr.split(".")[0];
  const decimalPart = numStr.split(".")[1];

  if (!decimalPart) return numStr;

  let i = decimalPart.length - 1;

  for (; i >= 0; i--) {
    if (decimalPart[i] !== "0") break;
  }

  if (i < 0) return integerPart;

  return `${integerPart}.${decimalPart.slice(0, i + 1)}`;
}

function shortNumberFormat(num: any, digits: any) {
  const numToCheck = Math.abs(num);

  for (let i = bigNumberPrefixes.length - 1; i >= 0; i -= 1) {
    if (numToCheck >= bigNumberPrefixes[i].value) {
      const newNumber = (num / bigNumberPrefixes[i].value).toFixed(digits);

      return `${newNumber}${bigNumberPrefixes[i].symbol}`;
    }
  }

  return "0";
}

export function forceNumeric(nr: any) {
  return nr
    .replace(",", ".")
    .replace(/[^0-9.]/g, "")
    .replace(/((\d+)?\.(\d+)?)\.(.*)/g, "$1");
}

export const isValidNumber = (
  text: any,
  precision = DEFAULT_PRECISION,
  isInteger = false
) => {
  const normalizedText = text.replace(/,/, ".");

  const integerNumberRegexp = /^\d*$/gi;

  if (isInteger) {
    return integerNumberRegexp.test(text);
  }

  const decimalNumberRegexp = new RegExp(`^\\d+\\.\\d{0,${precision}}$`, "gi");

  return (
    integerNumberRegexp.test(normalizedText) ||
    decimalNumberRegexp.test(normalizedText)
  );
};

export const format = (
  number: any,
  {
    precision = DEFAULT_PRECISION,
    short = false,
    noCommas = false,
    removeZeroEnd = false,
    roundingMode = BigNumber.ROUND_DOWN,
    formatSettings = {},
    returnNumber = false,
  } = {}
) => {
  const BGNumber = new BigNumber(number || 0);

  let formattedNumber = BGNumber.toFormat(precision, roundingMode, {
    ...defaultFormatSettings,
    ...formatSettings,
  });

  if (short && !returnNumber) {
    formattedNumber = shortNumberFormat(BGNumber.toString(), precision);
  }

  if (noCommas || returnNumber) {
    formattedNumber = BGNumber.toFormat(precision, roundingMode, {
      ...defaultFormatSettings,
      groupSeparator: "",
      ...formatSettings,
    });
  }

  const result = removeZeroEnd
    ? removeZerosFromEnd(formattedNumber)
    : formattedNumber;

  return returnNumber ? Number.parseFloat(result) : result;
};

export const isEven = (number: any) => number % 2 === 0;

export const getNumberValue = (number: any, limit?: number) => {
  if (!number) return 0;
  try {
    const value = Number(number);
    if (limit && value > limit) return limit;
    return value;
  } catch {
    return 0;
  }
};

export const convertStringtoValidInteger = (value: string) => {
  let newValue = value;
  let str = value
    .toString()
    .replace(/,/g, "")
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  if (
    removeCommaFromString(value).toString()[0] === "0" &&
    removeCommaFromString(value).toString().length > 0
  )
    str = str.substring(1);
  if (/^\d*$/.test(removeCommaFromString(value))) newValue = str;
  else newValue = str.slice(0, value.length - 1);

  return newValue;
};

export const isValidAmount = (amount: string) => {
  if (!amount || amount === "" || parseFloat(amount) <= 0) {
    return false;
  }
  return true;
};
