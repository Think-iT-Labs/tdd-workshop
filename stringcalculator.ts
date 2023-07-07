
export const add = (numbers: string) => {
  if (numbers === "") {
    return 0;
  }

  let splitter;
  if(numbers.startsWith("//")){
    const delimeter = numbers.substring(2,3);
    splitter = new RegExp(`,|\n|${delimeter}`)
    numbers = numbers.substring(4)
  }
  else splitter = new RegExp(`,|\n`)

  return numbers.split(splitter).map(it => +it).reduce((a,b)=> a+b)

};
