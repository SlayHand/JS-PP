const db = require('../utils/db');

class productModel {
    static async findAll() {
        try {
            const [rows] = await db.execute('SELECT * FROM products');
            return rows;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    static async findById(productId) {
        try {
            const [rows] = await db.execute('SELECT * FROM products WHERE id = ?', [productId]);
            return rows[0];  // Return a single product
        } catch (error) {
            console.error('Error fetching product by ID:', error);
            throw error;
        }
    }

    static async findCartProducts() {
        try {
            const [cartItems] = await db.execute(`
                SELECT products.id, products.title, products.price, cartItems.quantity
                FROM cartItems
                INNER JOIN products ON cartItems.productId = products.id
            `);
            return cartItems;
        } catch (error) {
            console.error('Error fetching cart products:', error);
            throw error;
        }
    }
}

module.exports = productModel;
