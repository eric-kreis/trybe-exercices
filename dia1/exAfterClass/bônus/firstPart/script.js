const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const randomMinMaxNumber = (max, min) => Math.floor((Math.random() * (max - min + 1)) + min);

const dragonDamage = (func, object) => func(object.strength, 15);

const warriorDamage = (func, object) => func((object.strength * object.weaponDmg), object.strength);

const mageDamege = (func, object) => func((object.intelligence * 2), object.intelligence);

const returnDmgMana = () => {
  const mageStats = {
    manaSpent: 0,
    damage: 'Não possui mana suficiente',
  }
  
  if (mage.mana > 15) {
    mageStats.manaSpent = 15;
    mageStats.damage = mageDamege(randomMinMaxNumber, mage);
    return mageStats;
  }
  return mageStats;
};

dragon.damage = dragonDamage(randomMinMaxNumber, dragon);
warrior.damage = warriorDamage(randomMinMaxNumber, warrior);

console.log(dragon);
console.log(warrior);
console.log(returnDmgMana());