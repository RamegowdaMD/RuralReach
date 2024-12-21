import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ThemeProvider} from './pages/ThemeContext.jsx'
import React, { useState } from 'react';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Main from './pages/Main.jsx';
import RentalsPage from './pages/rentals.jsx';
import LoanLandingPage from './pages/LoanLandingPage';
import ProducerPage from './pages/ProducerPage';
import CompanyPage from './pages/CompanyPage';
import MarketAnalyticsPage from './pages/MarketAnalyticsPage'; // Keep this import
import ScientificConsultation from './pages/ScientificConsultation'; // Keep this import
import PolicyAwareness from './pages/PolicyAwareness'; // Keep this import
import AddProduct from './pages/AddProduct.jsx';
import BuyProduct from './pages/BuyProduct.jsx';
import ProductList from './pages/ProductList.jsx';
import TrackSales from './pages/TrackSales.jsx';
import LogisticsAndDelivery from './pages/LogisticsAndDelivery.jsx';
import EducationalResources from './pages/EducationalResources.jsx';
import UserProfile from './pages/UserProfile.jsx';

function App() {
  // Add user state
  const [user, setUser] = useState(null);

  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        {/* Pass setUser as a prop to Login */}
        <Route path="/Login" element={<Login setUser={setUser} />} />
        {/* Pass user as a prop to Main if needed */}
        <Route path="/Main" element={<Main user={user} />} />
        <Route path="/loan" element={<LoanLandingPage />} />
        <Route path="/Rental" element={<RentalsPage />} />
        <Route path="/loan/producer" element={<ProducerPage />} />
        <Route path="/loan/investor" element={<CompanyPage />} />
        <Route path="/analytics" element={<MarketAnalyticsPage />} />
        <Route path="/consultation" element={<ScientificConsultation />} />
        <Route path="/policy" element={<PolicyAwareness />} />
        <Route path="/list-product" element={<AddProduct />} />
        <Route path="/track-sales" element={<TrackSales />} />
        <Route path="/buy-product/:id" element={<BuyProduct />} />
        <Route path="/marketplace" element={<ProductList />} />
        <Route path="/logistics" element={<LogisticsAndDelivery />} />
        <Route path="/resources" element={<EducationalResources />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
