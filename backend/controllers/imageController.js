import Image from '../model/imageModel.js';

export const uploadImage = async (req, res) => {
  try {
    const { title } = req.body;
    const imageURL = req.file.path; // Path to the uploaded file
    const newImage = new Image({ title, imageURL });
    await newImage.save();
    res.status(201).json({ success: true, message: 'Image uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json({ success: true, images });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const { title } = req.params;
    // Find the image by title and delete it from the database
    const deletedImage = await Image.findOneAndDelete({ title });
    if (!deletedImage) {
      return res.status(404).json({ success: false, message: 'Image not found' });
    }
    res.json({ success: true, message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};