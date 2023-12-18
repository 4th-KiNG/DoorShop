import './Header.css';
import { door, phone, clock } from '../assets'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={door} alt="" className='logo-img' />
        <p className='logo-txt'>ДВЕРИ•ВАРИАНТ</p>
      </div>
      <div>
      </div>
      <div className='link-info'>
        <Link to="/" className='link-txt'>На главную</Link>
        <Link to="/Catalog" className='link-txt'>Каталог</Link>
      </div>
      <div className='info'>
        <div className='phone'>
            <img src={phone} alt="" className='phone-img' />
            <div className='numbers'>
                <p className='number-txt'>8 953 105 37 67</p>
                <p className='number-txt'>8 988 381 63 27</p>
            </div>
        </div>
        <div className='time'>
            <img src={clock} alt="" className='clock-img'/>
            <p className='worktime'>10.00-19.00</p>
        </div>
      </div>
    </div>
  );
}

export default Header;