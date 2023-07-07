
export const add = (numbers: string) => {
  if (numbers === "") {
    return 0;
  }

  const integers = numbers.split(",").map(it => +it);

  if (integers.length == 1) {
    return integers[0];
  }

  if (integers.length == 2) {
    return integers[0] + integers[1];
  }
};
