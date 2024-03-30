const express = require('express');
const { createUser } = require('../controllers/users');

const router = new express.Router();

/* 
router.get("/asdf", (req, res, next) => {
  console.log("worked!");
  res.download("./README.MD");
})

*/

router.post('/', createUser);

module.exports = router;
