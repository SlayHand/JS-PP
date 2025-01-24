const db = require('../utils/db');
const getEditProduct = (req, res) => {
    const id = req.params.id;

    db.query('SELECT * FROM products WHERE id = ?', [id], (error, result) => {
        if (error) {
            console.error('Database error:', error);
            return;
        }

        if (result.length === 0) {
            return res.status(404).send('Product not found');
        }

        res.render('admin/edit-product', {
            product: result[0],
        });
    });
};

/**
 * Handles the POST request to edit a product.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.body - The body of the request.
 * @param {string} req.body.productId - The ID of the product to be edited.
 * @param {string} req.body.title - The new title of the product.
 * @param {number} req.body.price - The new price of the product.
 * @param {string} req.body.description - The new description of the product.
 * @param {Object} res - The response object.
 */

const postEditProduct = (req, res) => {
    const { productId, title, price, description } = req.body;

    db.query(
        'UPDATE products SET title = ?, price = ?, description = ? WHERE id = ?',
        [title, price, description, productId],
        (error, result) => {
            if (error) {
                console.error('Database error:', error);
                return res.status(500).send('Internal server error');
            }

            res.redirect('/');
        }
    );
};

module.exports = {
    getEditProduct,
    postEditProduct
};