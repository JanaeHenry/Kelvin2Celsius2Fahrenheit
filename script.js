const kelvin = 0;//forecast today is 293
const celsius = kelvin - 273;//celsius 
let fahrenheit = celsius * (9 / 5) + 32; /*fahrenheit formula */
fahrenheit = Math.floor(fahrenheit);/*round fahrenheit to nearest whole number*/
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);