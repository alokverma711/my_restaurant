import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddRestaurant.css';

const AddRestaurant = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    imgUrl: '',
    location: '',
    phone: '',
    rating: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:3000/api/restaurant/add', formData);
      alert('Restaurant added successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error adding restaurant:', error);
      alert('Failed to add restaurant. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-restaurant-container">
      <h2>Add New Restaurant</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-group full-width">
          <label>Restaurant Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. The Burger Joint" />
        </div>
        
        <div className="form-group full-width">
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required placeholder="Tell us what makes this place special..." />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} required placeholder="e.g. Italian, Fast Food" />
        </div>

        <div className="form-group">
          <label>Rating (0-5)</label>
          <input type="number" name="rating" min="0" max="5" step="0.1" value={formData.rating} onChange={handleChange} required placeholder="4.5" />
        </div>

        <div className="form-group full-width">
          <label>Image URL</label>
          <input type="url" name="imgUrl" value={formData.imgUrl} onChange={handleChange} required placeholder="https://example.com/image.jpg" />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required placeholder="City, Area" />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+1 234 567 890" />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Adding Restaurant...' : '✨ Add Restaurant'}
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;
