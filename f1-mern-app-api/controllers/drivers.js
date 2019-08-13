const Driver = require("../models/Driver.js");

module.exports = {
  index: (req, res) => {
    Driver.find({}).then(driver => {
      res.json(driver);
    });
  },

  create: (req, res) => {
    Driver.create(req.body).then(driver => res.json(driver));
  },

  update: (req, res) => {
    Driver.findOneAndUpdate({ _id: req.params.id }).then(driver =>
      res.json(driver)
    );
  },

  delete: (req, res) => {
    Driver.findOneAndDelete({ _id: req.params.id }).then(driver =>
      res.json(driver)
    );
  }
};
