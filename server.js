const productController = require('./controllers/productController');
const express = require('express');
const mongoose = require('mongoose');
// Connect to MongoDB
const mongoDBURI = 'mongodb+srv://' + encodeURIComponent('zmirzaei:B@b@ei20081623') + '@cluster0.nqq2imb.mongodb.net/DressStore?retryWrites=true&w=majority';
// Replace <username> with your MongoDB username
// Replace <password> with your MongoDB password
// Replace <cluster-url> with your MongoDB cluster URL
// Replace <database-name> with the name of your MongoDB database

mongoose.connect(mongoDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const cors = require('cors');

// Create an Express app
const app = express();

// Configure middleware
app.use(cors());
app.use(express.json());

// Import your models or schemas
// const Product = require('./models/product');
// const Category = require('./models/category');

// Define routes and middleware
// Example API endpoints
app.get('/api/products', productController.getAllProducts);
app.post('/api/products/:id', productController.addProductById);
app.post('/api/products', productController.addNewProduct);
app.put('/api/products/:id', productController.updateProductById);
app.delete('/api/products/:id', productController.removeProductById);
app.delete('/api/products', productController.removeAllProducts);
app.get('/api/products', productController.findProductsByNameWithKeyword);

// Add more routes for other CRUD operations
// ...

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the DressStore API');
});

// Start the server
const port = 3000; // or any other port number you prefer
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
