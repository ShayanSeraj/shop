import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Nav from './components/Nav';
import { ShopContextProvider } from './context/ShopContext';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Nav />
          <Welcome/>
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
