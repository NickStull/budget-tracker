const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction/bulk", ({body}, res) => {
  console.log("4");
  Transaction.insertMany(body)
    .then(dbTransaction => {
      console.log("5");
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.post("/api/transaction", ({body}, res) => {
  console.log("hitting here!!!")
  Transaction.create(body)
    .then(dbTransaction => {
      console.log(res.json(dbTransaction));
    })
    .catch(err => {
      console.log("Why Error THO???")
      res.status(404).json(err);
    });
});


router.get("/api/transaction", (req, res) => {
  Transaction.find({}).sort({date: -1})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;