const convertToNumbers = (numbers: string) => {
  let splitter;
  if (numbers.startsWith("//")) {
    const delimeter = numbers.substring(2, 3);
    splitter = new RegExp(`,|\n|${delimeter}`);
    numbers = numbers.substring(4);
  } else splitter = new RegExp(`,|\n`);

  return numbers.split(splitter);
};

export const add = (stringNumbers: string) => {
  if (stringNumbers === "") {
    return 0;
  }

  let numbers = convertToNumbers(stringNumbers);

  const negatives: number[] = [];
  
  const total = numbers
    .map((it) => {
      const digit = +it;
      if (digit < 0) negatives.push(digit);
      return digit;
    })
    .reduce((a, b) => a + b);

  if (negatives.length)
    throw new Error(`negatives not allowed:${negatives.join(",")}`);

  return total;
};
