const wakeUp = () => `Acordando!!`;
const haveBreakfast = () => `Bora tomar café!!`;
const goToSleep = () => `Partiu dormir!!`;

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(haveBreakfast);
doingThings(goToSleep);