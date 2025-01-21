const db = require ('../utils/db')
const productModel = require('../models/productModel')

class ShopController{
    getIndex = async (req, res, next) => {
        try {
            const products = await productModel.findAll();
            //console.log(products)

            res.render('shop/index',{
                prods: products,
                pageTitle: 'Shop',
                path: '/',
                hadProducts: products.length > 0,
                activeShop: true,
                productCSS: true
            }
        )
        } catch(error){
            console.log(error.message)
        }  
    }
} 

module.exports = new ShopController();
