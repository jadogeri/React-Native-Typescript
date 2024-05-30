
const getResult = (fahrenheit : number) : number => {
  
  let celcius : number;
  celcius = (fahrenheit - 32) * (5.0 / 9.0);
  return celcius;
    
}

export {getResult};
