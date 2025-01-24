const express = require('express');
<<<<<<< HEAD
const fs = require('node:fs/promises')
const ShopController = require('../controllers/shop')
const adminController = require('../controllers/edit')


const router = express.Router();

router.get('/', async (req, res, next) => ShopController.getIndex(req, res, next))
router.get('/products', async (req, res, next) => ShopController.getAllProducts(req, res, next))
router.get('/products/;productId', async (req, res, next) => ShopController.getProduct(req, res, next))
router.post('/products/:productId', async (req, res, next) => ShopController.getProduct(req, res, next))
router.get('/cart', async (req, res, next) => ShopController.getCart(req, res, next))
router.post('/cart', async (req, res, next) => ShopController.postCart(req, res, next))

router.get('/edit-product/:id', async (req, res, next) => adminController.getEditProduct(req, res, next));
router.post('/edit-product/:id', async (req, res, next) => adminController.postEditProduct(req, res, next));


//router.post('/edit-product', adminController.postEditProduct);

//router.post('/cart-delete-item', async (req, res, next) => ShopController.cartDeleteitems(req, res, next))


module.exports = router;
=======
const fs = require('node:fs/promises');
const ShopController = require('../controllers/shop');

const router = express.Router();

router.get('/', async (req, res, next) => ShopController.getIndex(req, res, next));
router.get('/products', async (req, res, next) => ShopController.getAllProducts(req, res, next));
router.get('/products/:productId', async (req, res, next) => ShopController.getProduct(req, res, next)); // Fixed Route
router.post('/products/:productId', async (req, res, next) => ShopController.getProduct(req, res, next));
router.get('/cart', async (req, res, next) => ShopController.getCart(req, res, next));
router.post('/cart', async (req, res, next) => ShopController.postCart(req, res, next));
router.post('/cart-delete-item', async (req, res, next) => ShopController.cartDeleteItems(req, res, next)); // Fixed method name

module.exports = router;
>>>>>>> 2838899303f8f37d7b1c246f74ab62f5f51eca8e
