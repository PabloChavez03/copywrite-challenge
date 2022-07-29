const router = require('express').Router();

const { getTexts, postText, deleteText } = require('../controllers/index.controllers');

router.get('/text', getTexts);
router.post('/text', postText);
router.delete('/text/:id', deleteText)
module.exports = router;