const router = require('express').Router();

const { showDemo, getTexts, postText } = require('../controllers/index.controllers');

router.get('/demo', showDemo);
router.get('/text', getTexts);
router.post('/text', postText);

module.exports = router;

