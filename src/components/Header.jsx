import './Header.css';
import { door, phone, clock } from '../assets'

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
        <a href='#1' className='link-txt'>О нас</a>
        <a href='' className='link-txt'>Каталог</a>
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