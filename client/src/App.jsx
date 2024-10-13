import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx';
import Main from './pages/Main.jsx';

function App() {
  return (
<> 
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/Register' element={<Register/>}></Route>
<Route path='/Login' element={<Login/>}></Route>
<Route path='/Main' element={<Main/>}></Route>
</Routes>
</BrowserRouter>
</>
  )
}

export default App
