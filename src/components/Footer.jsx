import './Footer.css'
import { avito, doorIco, email } from '../assets';


function Footer(){
    return(
        <div className='footer'>
            <div className='avito'>
                <img src={avito} alt="" className='avito-img' />
                <a href="https://www.avito.ru/krasnodar/remont_i_stroitelstvo/dveri_mezhkomnatnye_2825941538" className='avito-txt'>Мы на Авито</a>
            </div>
            <div className='logotype'>
                <img src={doorIco} alt="" className='logotype-img' />
            </div>
            <div className='email'>
                <img src={email} alt="" className='email-img'/>
                <p className='email-txt'>dverivariant2@yandex.ru</p>
            </div>
        </div>
    )
}

export default Footer;