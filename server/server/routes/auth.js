const express = require('express');
const { login } = require('../controllers/auth');

const router = new express.Router();

router.post('/login', login);

router.get('/logout', () => {
  // Not possible with JWT, maybe with sessions?
});

module.exports = router;
