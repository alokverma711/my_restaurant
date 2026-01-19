import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RestaurantList from './components/RestaurantList';
import AddRestaurant from './components/AddRestaurant';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<RestaurantList />} />
            <Route path="/add" element={<AddRestaurant />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
