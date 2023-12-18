import './App.css';
import { Header, Slider, Footer } from './components';
import MainPage from './pages/MainPage'
import { fon1, fon2, fon3 } from './assets';
import {Route, Routes} from 'react-router-dom';
import MenuPage from './pages/MainPage';
import Catalog from './pages/Catalog';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path="/" element={<MenuPage/>}></Route>
          <Route path="/Catalog" element={<Catalog/>}></Route>
          <Route path="/Catalog#outdoor" element={<Catalog/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
