const express = require('express');
const db = require('../models');
const router = express.Router();


router.get('/', (req, res) => {
  db.Burger.findAll({
    include: db.Customer
  }).then((data) => {
    console.log('=====data==========');
    console.log(data.map(burger => burger.toJSON()));
    res.render('index', { burgers: data.map(burger => burger.toJSON()) });
  });
});

router.post('/', (req, res) => {
  console.log('req.body.name: ' + req.body.name);
  db.Burger.create({
    burger_name: req.body.name,
    devoured: false
  }).then((result) => {
    res.json(result);
  });
});

router.post('/customer', (req, res) => {
  console.log('req.body.customerName: ' + req.body.customerName);
  console.log('req.body.BurgerId: ' + req.body.BurgerId);
  db.Customer.create({
    name: req.body.customerName,
    BurgerId: req.body.BurgerId
  }).then(result => {
    res.json(result);
  });
});

router.put("/", (req, res) => {
  db.Burger.update(
    {
      devoured: true
    },
    {
      where: {
        id: req.body.id
      }
    })
    .then((result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;