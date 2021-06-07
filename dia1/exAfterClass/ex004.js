const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (temperature, delay) => {
  setTimeout(() => console.log(`Mars temperature is: ${temperature()} degree Celsius"`), delay());
};

// imprime "Mars temperature is: 20 degree Celsius", por exemplo.
sendMarsTemperature(getMarsTemperature, messageDelay);