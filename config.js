const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://zmirzaei:<B@b@ei20081623>@cluster0.nqq2imb.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection string

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

// Handle MongoDB connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
