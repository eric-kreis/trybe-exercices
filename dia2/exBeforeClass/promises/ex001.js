const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number > 5) {
    return resolve(number);
  }
  return reject(number);

})
.then((number) => `Success, the number was ${number}.`)
.then((msg) => console.log(msg))
.catch((number) => console.log(`Fail, the number was ${number}.`));