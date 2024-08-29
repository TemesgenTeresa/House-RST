const express = require('express');
const multer = require('multer');
const router = express.Router();
const House = require('../models/House'); // Assuming you have a House model created

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Set the destination folder for uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Create a unique filename
  }
});

const upload = multer({ storage });

// POST route for uploading house data
router.post('/houses', upload.single('image'), async (req, res) => {
  const { title, description, price, location } = req.body;
  const image = req.file.path;

  try {
    const newHouse = new House({
      title,
      description,
      price,
      location,
      image
    });

    await newHouse.save();
    res.status(201).json(newHouse);
  } catch (error) {
    res.status(500).json({ message: 'Failed to upload house', error });
  }
});

module.exports = router;
