const express = require('express');
const fs = require('node:fs/promises')
const shopController = require('../controllers/shop')

const router = express.Router();

router.get('/', async (req, res, next) => shopController.getIndex(req, res, next))
router.get('/products', async (req, res, next) => shopController.getAllProducts(req, res, next))
router.get('/products/;productId', async (req, res, next) => shopController.getProduc(req, res, next))
router.post('/products/:productId', async (req, res, next) => shopController.getProduct(req, res, next))
router.get('/cart', async (req, res, next) => shopController.getCart(req, res, next))
router.post('/cart', async (req, res, next) => shopController.postCart(req, res, next))

router.post('/cart-delete-item', async (req, res, next) => shopController.cartDeleteitems(req, res, next))







module.exports = new ShopController ();