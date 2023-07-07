
export const add = (numbers: string) => {
  if (numbers === "") {
    return 0;
  }
  
  const splitter = new RegExp(",|\n")

  return numbers.split(splitter).map(it => +it).reduce((a,b)=> a+b)

};
