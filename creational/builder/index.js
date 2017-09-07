const BurgerBuilder = require ('./subway/BurgerBuilder');

const burger = (new BurgerBuilder(15))
  .chooseBread('3 queijos')
  .chooseCheeze('cheedar')
  .addSauces(['parmesão', 'chiplote'])
  .addSalads(['tomate', 'alface', 'azeitonas'])
  .build();

console.log(burger);
