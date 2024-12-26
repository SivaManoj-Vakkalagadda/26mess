const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Get port from environment variables (use Render's assigned port)
const port = process.env.PORT || 3000; // Port is dynamically set on Render

// Enable CORS for Flutter (you may add your Flutter app URL here for better security)
app.use(cors());

// Enable JSON parsing
app.use(express.json());

// MongoDB Connection (Use environment variable for MongoDB URI)
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://mess_secy:mess_iitgoa@messcluster.olmgi.mongodb.net/mess_iit?retryWrites=true&w=majority'; // Use .env to store MongoDB URI securely

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Menu Schema definition
const menuSchema = new mongoose.Schema({
  day: String,
  breakfast: [String],
  lunch: [String],
  snacks: [String],
  dinner: [String],
});

// Model based on the schema
const Menu = mongoose.model('Menu', menuSchema, 'menu');

// Root Route (Optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Mess Menu API');
});

// API Endpoint to fetch menu for a specific day
app.get('/getMenuForDay/:day', async (req, res) => {
  try {
    const { day } = req.params;
    const menuData = await Menu.findOne({ day: day });
    if (!menuData) {
      return res.status(404).send('Menu not found for this day');
    }
    res.json(menuData); // Send the fetched menu data as JSON
  } catch (err) {
    console.error('Error fetching menu:', err);
    res.status(500).send('Server error');
  }
});

// Start the server and listen on the assigned port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
