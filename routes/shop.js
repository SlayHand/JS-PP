const express = require('express');

const router = express.Router();
//test
router.get('/', (req, res, next) => {
    res.send('<b>Web shop page</b>');
});

module.exports = router;