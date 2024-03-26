import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import SalesPage from './pages/SalesPage';
import CartPage from './pages/CartPage';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import SingleProductPage from './pages/SingleProductPage';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={ <MainPage/> } />
        <Route path='/categories' element={ <CategoriesPage/> } />
        <Route path='/products' element={ <AllProductsPage/> } />
        <Route path='/products/:category_id' element={<ProductsByCategoryPage/>}/>
        <Route path='/product/:id' element={<SingleProductPage/>}/>
        <Route path='/sales' element={ <SalesPage/> } />
        <Route path='/cart' element={ <CartPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
