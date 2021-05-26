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

const dragonDamage = (callback, object) => callback(object.strength, 15);

const warriorDamage = (callback, object) => callback((object.strength * object.weaponDmg), object.strength);

const mageDamege = (callback, object) => callback((object.intelligence * 2), object.intelligence);

const returnDmgMana = () => {
  const mageStats = {
    manaSpent: 0,
    damage: 'Não possui mana suficiente',
  };

  if (mage.mana >= 15) {
    mageStats.manaSpent = 15;
    mageStats.damage = mageDamege(randomMinMaxNumber, mage);
    return mageStats;
  }
  return mageStats;
};

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (callback) => {
    const warriorDmg = callback(randomMinMaxNumber, warrior);
    warrior.damage = warriorDmg;
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (callback) => {
    const mageDmg = callback(randomMinMaxNumber, mage);
    mage.damage = mageDmg;
    mage.mana -= 15;
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (callback) => {
    const dragonDmg = callback(randomMinMaxNumber, dragon);
    dragon.damage = dragonDmg;
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  returnMembers: () => console.log(battleMembers),
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamege);
gameActions.dragonTurn(dragonDamage);
gameActions.returnMembers();