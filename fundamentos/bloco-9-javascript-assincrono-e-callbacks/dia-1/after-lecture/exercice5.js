const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback,temperature) => callback(temperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo


sendMarsTemperature(temperatureInFahrenheit, 37); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet, 37); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo