import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx';
import Main from './pages/Main.jsx';
import RentalsPage from './pages/rentals.jsx';
import LoanLandingPage from './pages/LoanLandingPage'
import ProducerPage from './pages/ProducerPage';
import CompanyPage from './pages/CompanyPage';
import MarketAnalyticsPage from './pages/MarketAnalyticsPage';


function App() {
  return (
<> 
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/Register' element={<Register/>}></Route>
<Route path='/Login' element={<Login/>}></Route>
<Route path='/Main' element={<Main/>}></Route>
<Route path="/loan" element={<LoanLandingPage />} /> 
<Route path='/Rental' element={<RentalsPage/>}></Route>
<Route path="/loan/producer" element={<ProducerPage />} />
<Route path="/loan/investor" element={<CompanyPage />} />
<Route path="/analytics" element={<MarketAnalyticsPage />} /> 
</Routes>
</BrowserRouter>
</>
  )
}

export default App
