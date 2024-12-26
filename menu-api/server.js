const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000; // or any available port

// Enable CORS for Flutter
app.use(cors());
app.use(express.json());

// MongoDB Connection (Replace with your MongoDB URI)
mongoose.connect('mongodb+srv://mess_secy:mess_iitgoa@messcluster.olmgi.mongodb.net/mess_iit?retryWrites=true&w=majority&appName=messCluster')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Menu Schema
const menuSchema = new mongoose.Schema({
  day: String,
  breakfast: [String],
  lunch: [String],
  snacks: [String],
  dinner: [String],
});

const Menu = mongoose.model('Menu', menuSchema,'menu');

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
    res.json(menuData);
  } catch (err) {
    console.error('Error fetching menu:', err);
    res.status(500).send('Server error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://172.22.208.1:${port}`);
});
