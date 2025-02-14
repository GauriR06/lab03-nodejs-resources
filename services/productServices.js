const productDAO = require('../db/productDAO');
const searchService = function(callback) {
    productDAO.findAll(function(err, rows) {
        if (err) {
            throw err;
        }
        if (rows.length == 0) {
            console.log("No products!");
        } else {
            return callback(null, rows);
        }
    });
};
const searchIDService = function(reference, callback) {
    productDAO.findByID(reference, function(err, rows) {
        if (err) {
            throw err;
        }
        if (rows.length == 0) {
            console.log("Unknown product!");
            let product = null;
            return callback(null, product);
        } else {
            //return the retrieved product 
            return callback(null, rows[0]);
        }
    });
};
const searchCategoryService = function(category, callback) {
    productDAO.findByCategory(category, function(err, rows) {
        if (err) {
            throw err;
        }
        if (rows.length == 0) { //no products
            console.log(`No product in category ${category}!`);
            return callback(null, rows);
        } else {
            //return the rows
            return callback(null, rows);
        }
    });
};
module.exports = {
    searchIDService,
    searchService,
    searchCategoryService
};