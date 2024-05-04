import { avito, doorico } from '@/assets';
import styles from './Footer.module.scss'
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className={styles.Footer} id='footer'>
            <div className={styles.Footer_Blocks}>
                <div className={styles.Footer_Block}>
                    <h1 className={styles.Footer_Block_Title}>Каталог</h1>
                    <Link style={{textDecoration: "none", color: "white"}} href="/catalog/indoors">Межкомнатные двери</Link>
                    <Link style={{textDecoration: "none", color: "white"}} href="/catalog/outdoors">Входные двери</Link>
                    <Link style={{textDecoration: "none", color: "white"}} href="/catalog/furniture">Дверная гарнитура</Link>
                    <Link style={{textDecoration: "none", color: "white"}} href="/catalog/floor">Напольное покрытие</Link>
                </div>
                <div className={styles.Footer_Block}>
                    <h1 className={styles.Footer_Block_Title}>Контакты</h1>
                    <p>dverivariant2@yandex.ru</p>
                    <p>8 953 105 37 67</p>
                    <p>8 988 381 63 27</p>
                    <Link href="https://www.avito.ru/krasnodar/remont_i_stroitelstvo/dveri_mezhkomnatnye_2825941538" style={{display: "flex", alignItems: "center", gap: "5px", cursor: "pointer", textDecoration: "none", color: "white"}}>Авито <Image src={avito} width={30} height={30} alt="avito"></Image></Link>
                </div>
                <div className={styles.Footer_Block}>
                    <Link style={{display: "flex", alignItems: "center", gap: "5px", cursor: "pointer", textDecoration: "none", color: "white"}} href="/#catalog">Каталог</Link>
                    <Link style={{display: "flex", alignItems: "center", gap: "5px", cursor: "pointer", textDecoration: "none", color: "white"}} href="/#maininfo">О компании</Link>
                    <Link style={{display: "flex", alignItems: "center", gap: "5px", cursor: "pointer", textDecoration: "none", color: "white"}} href="/#footer">Контакты</Link>
                    <Link style={{display: "flex", alignItems: "center", gap: "5px", cursor: "pointer", textDecoration: "none", color: "white"}} href="/#footer">Бренды</Link>
                    <Link style={{display: "flex", alignItems: "center", gap: "5px", cursor: "pointer", textDecoration: "none", color: "white"}} href="/#callback">Заказать звонок</Link>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;