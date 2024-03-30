const express = require('express');
const {
  getPages,
  createPage,
  updatePage,
  deletePage,
  getPageSections,
  createPageSection
} = require('../controllers/pages');
const getPageFromParams = require('../lib/middleware/getResourceFromParams/getPageFromParams');

const router = new express.Router();

// getPages
router.get('/', getPages);

// createPage
router.post('/', createPage);

// updatePage
router.patch('/:pageId', getPageFromParams(), updatePage);

// deletePage
router.delete('/:pageId', deletePage);

// getPageSections
router.get('/:pageId/sections', getPageSections);

// createPageSection
router.post('/:pageId/sections', getPageFromParams(), createPageSection);

module.exports = router;
