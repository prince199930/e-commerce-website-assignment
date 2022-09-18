import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/productdetail/ProductDetail';
import Cart from './components/cart/Cart';
import Payment from './components/payment/Payment';
import TopBar from './components/topBar/TopBar';
import About from './components/about/About';
function App() {
  return (
        <BrowserRouter>
        <TopBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/products/:id' element={<ProductDetail/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
