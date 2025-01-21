const cartModel = require('../models/cartModel');

class CartController {
    getCart = async (req, res, next) => {
        try {
            const cartId = 1; // Assuming a single cart for simplicity
            const cartItems = await cartModel.getCart(cartId);
            const totalPrice = await cartModel.getCartTotalPrice(cartId);

            res.render('shop/cart', {
                pageTitle: 'Your Cart',
                products: cartItems,
                totalPrice,
                path: '/cart',
            });
        } catch (error) {
            console.error('Error fetching cart:', error);
            next(error);
        }
    };

    addToCart = async (req, res, next) => {
        const productId = req.body.productId;
        try {
            const cartId = 1; // Assuming a single cart for simplicity
            await cartModel.addToCart(cartId, productId);
            res.redirect('/cart');
        } catch (error) {
            console.error('Error adding to cart:', error);
            next(error);
        }
    };

    removeFromCart = async (req, res, next) => {
        const itemId = req.params.id;
        try {
            const success = await cartModel.removeFromCart(itemId);
            if (!success) {
                console.warn(`Item with id ${itemId} not found in cart.`);
            }
            res.redirect('/cart');
        } catch (error) {
            console.error('Error removing from cart:', error);
            next(error);
        }
    };
}

module.exports = new CartController();