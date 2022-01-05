const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home/main');
});

router.get('/about', (req, res) => {
  res.render('home/about');
});

module.exports = router;
