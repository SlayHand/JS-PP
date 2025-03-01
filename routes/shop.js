const express = require('express');

const fs = require('node:fs/promises');
const ShopController = require('../controllers/shop');
const adminController = require ('../controllers/edit.js')

const router = express.Router();
<<<<<<< HEAD
//test
router.get('/', (req, res, next) => {
    res.send('<b>Web shop page</b>');
});
=======

router.get('/', async (req, res, next) => ShopController.getIndex(req, res, next));
router.get('/products', async (req, res, next) => ShopController.getAllProducts(req, res, next));
router.get('/products/:productId', async (req, res, next) => ShopController.getProduct(req, res, next)); // Fixed Route
router.post('/products/:productId', async (req, res, next) => ShopController.getProduct(req, res, next));
router.get('/cart', async (req, res, next) => ShopController.getCart(req, res, next));
router.post('/cart', async (req, res, next) => ShopController.postCart(req, res, next));
router.post('/cart-delete-item', async (req, res, next) => ShopController.cartDeleteItems(req, res, next)); // Fixed method name
>>>>>>> yl4

module.exports = router;