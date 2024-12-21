import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/loan" element={<LoanLandingPage />} />
        <Route path="/Rental" element={<RentalsPage />} />
        <Route path="/loan/producer" element={<ProducerPage />} />
        <Route path="/loan/investor" element={<CompanyPage />} />
        <Route path="/analytics" element={<MarketAnalyticsPage />} />
        <Route path="/consultation" element={<ScientificConsultation />} />
        <Route path="/policy" element={<PolicyAwareness />} />
        <Route path="/list-product" element={<AddProduct />} />
        <Route path="/track-sales" element={<TrackSales />} />
        <Route path="/buy-product/:id" element={<BuyProduct  />} />
        <Route path="/marketplace" element={<ProductList />} />
        <Route path="/logistics" element={<LogisticsAndDelivery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
