const express = require('express');
const productController = require('../controllers/productController');
const clientController = require('../controllers/clientController');

//define a router and create routes
const router = express.Router();

//routes for dynamic processing of products
//-----------------------------------------------
//route for listing all products
router.get('/api/catalogue', productController.getCatalogue);
router.get('/api/article/:id', productController.getProductByID);

//export router
module.exports = router;

//routes for dynamic processing of clients
//-----------------------------------------------
//route for registration
router.post('/api/register', clientController.registerControl);
//route for login
router.post('/api/login', clientController.loginControl);
//route for listing all clients
router.get('/api/clients', clientController.getClients);
//route for logout
router.get('/api/logout', clientController.logout);
