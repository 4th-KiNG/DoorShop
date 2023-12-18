import './MainPage.css';
import { star, goldDoor, doorCard, doorCard1, doorCard2,doorCard3, line, line1, handle1, handle2, handle3, floorFon, pencil, car, tool, place } from '../assets';
import Slider from '../components/Slider';
import Slider1 from '../components/Slider1';
import { scroller, Element } from 'react-scroll';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateScrollingElements() {
  const elements = document.querySelectorAll('.element-to-animate');
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('animated');
    }
  });
}

function animateHandle() {
  const elements = document.querySelectorAll('.handle-animate');
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('animated1');
    }
  });
}




function MainPage() {
  document.addEventListener('DOMContentLoaded', animateScrollingElements);
  window.addEventListener('scroll', animateScrollingElements);
  document.addEventListener('DOMContentLoaded', animateHandle);
  window.addEventListener('scroll', animateHandle);
  return (
    <div className='MainPage'>
      <div className='door-lb'>
        <img src={goldDoor} alt="" className='goldDoor-img animated element-to-animate' />
        <div className='indoor-outdoor animated element-to-animate'>
            <p className='door-lb-txt1'>ДВЕРИ</p>
            <p className='door-lb-txt2'>ПО ДОСТУПНЫМ ЦЕНАМ</p>
        </div>
        <img src={star} alt="" className='star-img animated element-to-animate' />
      </div>
      <div className='slider'>
        <Slider></Slider>
      </div>
      <hr className='line-y'/>
      <div className='cards'>
        <div className='door-card'>
          <div className='doorcard-txt'>
            <p className='card-txt-p'>Двери входные</p>
            <Link to="/Catalog?scrollToElement=outdoor" className='card-txt-a'>Открыть в каталоге</Link>
          </div>
            <img src={doorCard} alt="" className='door-img' />
        </div>
        <div className='door-card'>
          <div className='doorcard-txt'>
            <p className='card-txt-p1'>Двери межкомнатные</p>
            <Link to="/Catalog?scrollToElement=indoor" className='card-txt-a'>Открыть в каталоге</Link>
          </div>
            <img src={doorCard1} alt="" className='door-img' />
        </div>
      </div>
        <div className='cards'>
        <div className='door-card'>
        <div className='doorcard-txt'>
            <p className='card-txt-p'>Фурнитура</p>
            <Link to="/Catalog?scrollToElement=fur" className='card-txt-a'>Открыть в каталоге</Link>
          </div>
            <img src={doorCard2} alt="" className='door-img1'  />
        </div>
        <div className='door-card'>
        <div className='doorcard-txt'>
            <p className='card-txt-p1'>Напольное покрытие</p>
            <Link to="/Catalog?scrollToElement=floor" className='card-txt-a'>Открыть в каталоге</Link>
          </div>
            <img src={doorCard3} alt="" className='door-img2' />
        </div>
      </div>
      <hr className='line-y'/>
      <div className='about-us1'>
        <div className='about-us' id='1'>
          <h1 className='about-us-txt element-to-animate'>О нас</h1>
          <hr className='line-b'/>
          <p className='about-us-txt element-to-animate'>"Двери Вариант" с 2010 года на дверном рынке, квалифицированные сотрудники и индивидуальный подход к каждому гостю салона, грамотный просчет заявки, подбор ассортимента, консультация при вызове замерщика, своевременная доставка по городу и краю.
              У нас вы сможете  приобрести не только качественную продукцию, будь это двери или напольные покрытия, по доступным ценам, но и воспользоваться профессиональной установкой с гарантией от нашего магазина. Регулярные акции и скидки не оставят вас равнодушными.
              Будем рады Вас видеть в качестве гостя нашего салона.</p>
        </div>
      </div>
      <div className='advantages'>
        <div className='card element-to-animate'>
          <img src={pencil} alt="" className='card-img' />
          <p className='card-txt'>Выезд замерщика</p>
        </div>
        <div className='card element-to-animate'>
          <img src={tool} alt="" className='card-img' />
          <p className='card-txt'>Установка входных и межкомнатных дверей</p>
        </div>
        <div className='card element-to-animate'>
          <img src={car} alt="" className='card-img' />
          <p className='card-txt'>Доставка по Краснодару и Краснодарскому краю</p>
        </div>
      </div>
      <hr className='line-w'/>
      <div className='work-info'>
        <div className='work-time'>
          <h1 className='work-time-txt element-to-animate'>График работы</h1>
          <p className='work-time-txt element-to-animate'>Понедельник-Воскресенье</p>
          <p className='work-time-txt element-to-animate'>10.00-19.00</p>
          <h1 className='work-time-txt element-to-animate'>Адрес</h1>
          <p className='work-time-txt element-to-animate'>г.Краснодар ул.Кирилла Россинского 18, этаж 2</p>
        </div>
        <div className='place element-to-animate'>
          <img src={place} alt="" className='place element-to-animate' />
        </div>
      </div>
    </div>
  );
}



export default MainPage;
