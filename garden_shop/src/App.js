import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import SalesPage from './pages/SalesPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <MainPage/> } />
        <Route path='/categories' element={ <CategoriesPage/> } />
        <Route path='/products' element={ <AllProductsPage/> } />
        <Route path='/sales' element={ <SalesPage/> } />
        <Route path='/cart' />
      </Routes>
    </div>
  );
}

export default App;
