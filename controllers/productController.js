const Product = require('../models/product');

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  
  // Add the addProductById function
  addProductById: async (req, res) => {
    try {
      const { id } = req.params; // Get the product ID from the request parameters

      // Implement the logic to add a product by ID
      // Example code:
      // const product = await Product.findById(id);
      // if (!product) {
      //   return res.status(404).json({ message: 'Product not found' });
      // }
      // // Process the request to add the product by ID
      // // ...

      res.status(200).json({ message: 'Product added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  
  // Add the addNewProduct function
  addNewProduct: async (req, res) => {
    try {
      const { name, description, price, published, category } = req.body; // Get the product data from the request body

      // Implement the logic to add a new product
      // Example code:
      // const newProduct = new Product({
      //   name,
      //   description,
      //   price,
      //   published,
      //   category,
      // });
      // const savedProduct = await newProduct.save();
      // // Process the request to add the new product
      // // ...

      res.status(200).json({ message: 'New product added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  
  // Add the updateProductById function
  updateProductById: async (req, res) => {
    try {
      const { id } = req.params; // Get the product ID from the request parameters
      const { name, description, price, published, category } = req.body; // Get the updated product data from the request body

      // Implement the logic to update a product by ID
      // Example code:
      // const updatedProduct = await Product.findByIdAndUpdate(id, {
      //   name,
      //   description,
      //   price,
      //   published,
      //   category,
      // }, { new: true });
      // // Process the request to update the product by ID
      // // ...

      res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  
  // Add the removeProductById function
  removeProductById: async (req, res) => {
    try {
      const { id } = req.params; // Get the product ID from the request parameters

      // Implement the logic to remove a product by ID
      // Example code:
      // const removedProduct = await Product.findByIdAndRemove(id);
      // // Process the request to remove the product by ID
      // // ...

      res.status(200).json({ message: 'Product removed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  
  // Add the removeAllProducts function
  removeAllProducts: async (req, res) => {
    try {
      // Implement the logic to remove all products
      // Example code:
      // await Product.deleteMany({});
      // // Process the request to remove all products
      // // ...

      res.status(200).json({ message: 'All products removed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  
  // Add the findProductsByNameWithKeyword function
  findProductsByNameWithKeyword: async (req, res) => {
    try {
      const { name } = req.query; // Get the keyword from the query parameter

      // Implement the logic to find products by name with a keyword
      // Example code:
      // const products = await Product.find({ name: { $regex: name, $options: 'i' } });
      // // Process the request to find products by name with a keyword
      // // ...

      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = productController;
