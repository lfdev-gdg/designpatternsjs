// const Manager = require('./hiring/Manager');
//
// const devManager = new Manager.DevelopmentManager()
// devManager.takeInterview()
//
// const marketingManager = new Manager.MarketingManager()
// marketingManager.takeInterview()

// ----------------------------------------------------------------------

const CountrisCarManager = require ('./cars/CountriesCarManager');

const germanCar = new CountrisCarManager.GermanFactory();
const aFastCar = germanCar.create('fast');
console.log(aFastCar);

const italianCar = new CountrisCarManager.ItalianFactory();
const aCheapCar = italianCar.create('cheap');
console.log(aCheapCar);
