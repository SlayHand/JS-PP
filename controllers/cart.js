const db = require('../utils/db');

class CartModel {
    async getCart(cartId) {
        const [cartItems] = await db.execute(
            `SELECT ci.id AS cartItemId, ci.quantity, p.id AS productId, p.title, p.imageUrl, p.price
             FROM cartItems ci
             JOIN products p ON ci.productId = p.id
             WHERE ci.cartId = ?`,
            [cartId]
        );
        return cartItems;
    }

    async addToCart(cartId, productId) {
        const [existingItem] = await db.execute(
            'SELECT id, quantity FROM cartItems WHERE cartId = ? AND productId = ?',
            [cartId, productId]
        );

        if (existingItem.length > 0) {
            const newQuantity = existingItem[0].quantity + 1;
            await db.execute(
                'UPDATE cartItems SET quantity = ? WHERE id = ?',
                [newQuantity, existingItem[0].id]
            );
        } else {
            await db.execute(
                'INSERT INTO cartItems (cartId, productId, quantity) VALUES (?, ?, ?)',
                [cartId, productId, 1]
            );
        }
    }

    async removeFromCart(itemId) {
        const [result] = await db.execute('DELETE FROM cartItems WHERE id = ?', [itemId]);
        return result.affectedRows > 0;
    }

    async getCartTotalPrice(cartId) {
        const [cartItems] = await db.execute(
            `SELECT p.price, ci.quantity
             FROM cartItems ci
             JOIN products p ON ci.productId = p.id
             WHERE ci.cartId = ?`,
            [cartId]
        );
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
}

module.exports = new CartModel();