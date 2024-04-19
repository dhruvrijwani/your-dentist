import React, { useState, useEffect } from 'react';
import './Images.css';
import { useUserAuth } from '../../auth/userAuth'
import { useNavigate } from 'react-router-dom'

const ImagesUpload = () => {


  const navigate = useNavigate()
  const {token, user, logout} = useUserAuth()

  useEffect(()=>{
    if(!token) {
      navigate('/login')
    }
    
    }, [token, navigate])


  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [imageTitles, setImageTitles] = useState([]);

  useEffect(() => {
    fetchImageTitles();
  }, []);

  const fetchImageTitles = async () => {
    try {
      const response = await fetch('https://yd-backend.onrender.com/api/images');
      if (!response.ok) {
        throw new Error('Failed to fetch image titles');
      }
      const data = await response.json();
      setImageTitles(data.images.map(image => image.title));
    } catch (error) {
      console.error('Error fetching image titles:', error);
    }
  };
  

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };


  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image); // Corrected from 'file' to 'image'
      formData.append('title', title);
  
      const response = await fetch('https://yd-backend.onrender.com/api/upload', {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
  
      // Reset the form fields after successful upload
      setImage(null);
      setTitle('');
      alert('Image uploaded successfully');
      fetchImageTitles(); // Fetch image titles after upload
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
    }
  };
  const handleDelete = async (title) => {
    try {
      const response = await fetch(`https://yd-backend.onrender.com/api/delete/${encodeURIComponent(title)}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete image');
      }
      // Refetch image titles after deletion
      fetchImageTitles();
      alert('Image deleted successfully');
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Failed to delete image');
    }
  };
  

  return (
    <div className="images-upload-container">
      <div className="upload-form-container">
        <h2>Upload Image</h2>
        <form>
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" value={title} onChange={handleTitleChange} />
          </div>
          <button type="button" onClick={handleUpload} className="upload-button">Upload</button>
        </form>
      </div>

      <div className="image-list-container">
        <h2>Image List</h2>
        <table className="image-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {imageTitles.map((title, index) => (
              <tr key={index}>
                <td>{title}</td>
                <td><button onClick={() => handleDelete(title)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImagesUpload;
