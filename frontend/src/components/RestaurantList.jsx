import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RestaurantList.css';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/restaurant');
        setRestaurants(response.data.restaurants);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Error fetching restaurants. Make sure the backend is running.');
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) return (
    <div className="loading-container">
      <h3>Loading delicious restaurants...</h3>
    </div>
  );
  
  if (error) return (
    <div className="error-container">
      <h3>Oops!</h3>
      <p>{error}</p>
    </div>
  );

  return (
    <div className="restaurant-list-container">
      <div className="hero-section">
        <h1>Discover Best Restaurants</h1>
        <p>Explore the finest dining experiences around you. From cozy cafes to luxury dining, find it all here.</p>
      </div>

      {restaurants.length === 0 ? (
        <div className="no-data">
          <h3>No restaurants found yet.</h3>
          <p>Be the first to add one!</p>
        </div>
      ) : (
        <div className="restaurant-grid">
          {restaurants.map((restaurant) => (
            <div key={restaurant._id} className="restaurant-card">
                <div className="restaurant-image-container">
                <img 
                  src={restaurant.imgUrl || 'https://placehold.co/600x400?text=Restaurant'} 
                  alt={restaurant.name} 
                  className="restaurant-image"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://placehold.co/600x400?text=No+Image'
                  }} 
                />
                <span className="category-badge">{restaurant.category}</span>
              </div>
              <div className="restaurant-info">
                <div className="restaurant-header">
                  <h3>{restaurant.name}</h3>
                  <div className="rating-badge">
                    <span>⭐</span> {restaurant.rating}
                  </div>
                </div>
                
                <p className="description">{restaurant.description}</p>
                
                <div className="card-footer">
                  <div className="detail-item">
                    <span className="icon">📍</span> {restaurant.location}
                  </div>
                  <div className="detail-item">
                    <span className="icon">📞</span> {restaurant.phone}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
