const express = require('express');
// const csurf = require('csurf');
const router = new express.Router();
const users = require('./users');
const pages = require('./pages');
const sections = require('./sections');
const auth = require('./auth');
const requireAuth = require('../lib/middleware/requireAuth/requireAuth');

router.use('/pages', requireAuth, pages);
router.use('/sections', requireAuth, sections);
router.use('/users', users);
router.use('/auth', auth);
// router.use('/auth', csurf(), auth) Missing session configuration before enable csrf

module.exports = router;
