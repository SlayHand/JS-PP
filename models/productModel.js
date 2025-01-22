const db = require('../utils/db');

class productModel {
    static async findAll(){
        try{
            const [rows, fields] = await db.execute('SELECT * FROM products');
            return rows;  
        } catch (error) {
      console.error('Error fetching products:', error);
        throw error; 
        }
    } 
} 

module.exports = productModel;