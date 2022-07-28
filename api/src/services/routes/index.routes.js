const router = require('express').Router();

const { getTexts, postText } = require('../controllers/index.controllers');

router.get('/text', getTexts);
router.post('/text', postText);
module.exports = router;