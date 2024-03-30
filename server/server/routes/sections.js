const express = require('express');
const {
  updatePageSection,
  deletePageSection
} = require('../controllers/sections');
const getSectionFromParams = require('../lib/middleware/getResourceFromParams/getSectionFromParams');

const router = new express.Router();

// updatePageSection
router.patch('/:sectionId', getSectionFromParams(), updatePageSection);

// deletePageSection
router.delete('/:sectionId', deletePageSection);

module.exports = router;
