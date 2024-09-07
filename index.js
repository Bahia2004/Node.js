const express = require('express');
const router = express.Router();

// GET route for homepage
router.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

// GET route for About page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Page' });
});

// POST route
router.post('/submit', (req, res) => {
  const data = req.body;
  res.send(`Form submitted with data: ${JSON.stringify(data)}`);
});

module.exports = router;
