const db = require ('../utils/db')
const productModel = require('../models/productModel')

class ShopController {
    getIndex = async (req, res, next) => {
        try {
            const products = await productModel.findAll();
            console.log(products);

            res.render('shop/index', {
                prods: products,
                pageTitle: 'Shop',
                path: '/',
                hadProducts: products.length > 0,
                activeShop: true,
                productCSS: true
            });
        } catch (error) {
            console.log(error.message);
        }  
    }

    getAllProducts = async (req, res, next) => {
        try {
            const products = await productModel.findAll();
            console.log("Products from database:", products);  // Debugging line
            res.render('shop/products', { 
                prods: products, 
                pageTitle: 'All Products', 
                path: '/products' 
            });
        } catch (error) {
            console.log("Error fetching products:", error.message);
        }
    };

    getProduct = async (req, res, next) => {
        try {
            const productId = req.params.productId;
            console.log("Requested Product ID:", productId);  // Debugging line
            const product = await productModel.findById(productId);
            console.log("Fetched Product:", product);  // Debugging line
    
            if (!product) {
                return res.status(404).render('404', { pageTitle: 'Product Not Found', path: '/404' });
            }
    
            res.render('shop/product-details', { 
                product, 
                pageTitle: product.title, 
                path: '/products' 
            });
        } catch (error) {
            console.log("Error fetching product:", error.message);
        }
    };
    

    getCart = async (req, res, next) => {
        try {
            const cartProducts = await productModel.findCartProducts();  // Fetch cart items
            console.log("Cart Products:", cartProducts); // Debugging
    
            res.render('shop/cart', { 
                products: cartProducts,  
                pageTitle: 'Your Cart', 
                path: '/cart' 
            });
        } catch (error) {
            console.log("Error fetching cart:", error.message);
        }
    };
    
}

module.exports = new ShopController();