const express = require('express');
const burger = require('../models/burger');
const router = express.Router();


router.get('/', (req, res) => {
  burger.all((data) => {
    console.log(data);
    res.render('index', { burgers: data });
  });
});

router.post('/', (req, res) => {
  console.log('req.body.name: ' + req.body.name);
  burger.create(req.body.name, (result) => {
    // Send back the ID of the new quote
    console.log('result.insertId' + result.insertId);
    res.json({ id: result.insertId });
  });
});

router.put("/", (req, res) => {
  burger.update(
    {
      devoured: 1
    },
    {
      id: req.body.id
    },
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;