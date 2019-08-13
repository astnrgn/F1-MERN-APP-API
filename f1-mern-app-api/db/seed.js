const drivers = require("./f1Data.json");
const Driver = require("../models/Driver.js");

Driver.remove({});
Driver.create(drivers).then(drivers => {
  console.log(drivers);
});

// Driver.find({}).remove(() =>
//   Driver.collection.insert(drivers).then(driver => {
//     console.log(driver);
//   })
// );
